import { expect, type Page } from "@playwright/test";

/**
 * Shared helpers for the OpenBridge E2E suite.
 *
 * Everything here is written against the UI contract of `data-testid`
 * attributes documented in AGENTS.md + the lesson registry. Selectors use
 * testids and roles only; text assertions are kept to the minimum the
 * contract guarantees (e.g. the canonical "Maya and the River Bridge" story).
 */

export const MAYA_SLUG = "maya-and-the-river-bridge";
export const PROGRESS_KEY = "openbridge.progress.v1";

/** Escape a string for safe embedding into a RegExp. */
export function escapeRe(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** First integer found in a rendered stat such as "120 XP" → 120. */
export function digits(text: string): number {
  const match = text.match(/\d+/);
  return match ? Number(match[0]) : NaN;
}

/** A quiz option by its data-index (0..3). */
export function option(page: Page, index: number) {
  return page.locator(`[data-testid="quiz-option"][data-index="${index}"]`);
}

/**
 * Desktop header nav lives inside nav[data-testid="site-nav"]; the mobile
 * panel duplicates the same testids, so scope to the site nav to avoid
 * strict-mode ambiguity.
 */
export function siteNavLink(page: Page, id: string) {
  return page.locator(`[data-testid="site-nav"] [data-testid="${id}"]`);
}

/** Mobile panel nav (aria-label="Mobile"). */
export function mobileNavLink(page: Page, id: string) {
  return page.locator(`nav[aria-label="Mobile"] [data-testid="${id}"]`);
}

export async function readStorage(page: Page): Promise<string | null> {
  return page.evaluate(
    (key) => window.localStorage.getItem(key),
    PROGRESS_KEY
  );
}

/** Open a lesson page and wait for the story to be visible. */
export async function gotoLesson(page: Page, slug: string): Promise<void> {
  await page.goto(`/learn/${slug}`);
  await expect(page.getByTestId("story-view")).toBeVisible();
}

/**
 * Start the quiz from the story view. Prefers the `start-quiz` testid; falls
 * back to the sibling button whose label matches the tutor's "questions" CTA
 * per the contract.
 */
export async function startQuiz(page: Page): Promise<void> {
  const startButton = page.getByTestId("start-quiz");
  if ((await startButton.count()) > 0) {
    await startButton.first().click();
  } else {
    await page
      .getByRole("button", { name: /ready|start|question/i })
      .first()
      .click();
  }
  await expect(page.getByTestId("check-answer")).toBeVisible();
}

/** gotoLesson + startQuiz. */
export async function openQuiz(page: Page, slug: string): Promise<void> {
  await gotoLesson(page, slug);
  await startQuiz(page);
}

/**
 * Answer the currently visible question with `optionIndex`, check it, and
 * wait for either the correct-feedback panel (right answer) or the
 * explanation panel (wrong answer).
 */
export async function answerCurrentQuestion(
  page: Page,
  optionIndex: number
): Promise<void> {
  await option(page, optionIndex).click();
  const check = page.getByTestId("check-answer");
  await expect(check).toBeEnabled();
  await check.click();
  await expect(
    page.getByTestId("feedback-correct").or(page.getByTestId("explain-panel"))
  ).toBeVisible();
}

/**
 * Advance to the next question (or the results screen). The last question's
 * button may be labelled "results" instead, so click by testid or by a
 * /results/i label, whichever the current question provides.
 */
export async function advance(page: Page): Promise<void> {
  const nextButton = page
    .getByTestId("quiz-next")
    .or(page.getByRole("button", { name: /results/i }))
    .first();
  await nextButton.click();
}

/**
 * Complete a whole lesson from the story view to the results screen.
 *
 * `answerIndex` is used for every question (the canonical maya lesson has
 * correctIndex 0 on all five). With `wrongFirst: true`, question 1 is answered
 * with index 1 (wrong) and the rest with `answerIndex`. Returns the number of
 * questions answered.
 */
export async function completeLesson(
  page: Page,
  slug: string,
  options: { answerIndex?: number; wrongFirst?: boolean } = {}
): Promise<number> {
  await openQuiz(page, slug);
  const answerIndex = options.answerIndex ?? 0;
  const wrongFirst = options.wrongFirst ?? false;

  const firstOption = page.locator('[data-testid="quiz-option"]').first();
  const results = page.getByTestId("results-screen");
  let answered = 0;

  // Guard of 20 covers any 4–6 question lesson; the loop ends when the
  // results screen appears or no question is left.
  for (let guard = 0; guard < 20; guard++) {
    if (await results.isVisible().catch(() => false)) break;
    if (!(await firstOption.isVisible().catch(() => false))) break;

    const previousPrompt =
      (await firstOption.innerText().catch(() => "")) ?? "";

    const index = wrongFirst && answered === 0 ? 1 : answerIndex;
    await answerCurrentQuestion(page, index);
    await advance(page);
    answered++;

    // Wait until either the results screen shows or a genuinely new question
    // rendered (option text changed) before answering again.
    await expect(async () => {
      if (await results.isVisible().catch(() => false)) return;
      const now = (await firstOption.innerText().catch(() => "")) ?? "";
      if (now && now !== previousPrompt) return;
      throw new Error("waiting for the next question or the results screen");
    }).toPass({ timeout: 10_000 });
  }

  await expect(results).toBeVisible();
  return answered;
}

/** Verify the dashboard reflects exactly one completed story. */
export async function expectDashboardShowsCompletion(
  page: Page
): Promise<void> {
  await page.goto("/dashboard");
  await expect(page.getByTestId("stories-count")).toContainText("1");
  const xpText = (await page.getByTestId("xp-value").innerText()).trim();
  expect(digits(xpText)).toBeGreaterThan(0);
  await expect(page.getByTestId("achievement-first-story")).toBeVisible();
}

/**
 * Clear all local progress from the dashboard. Handles both an in-app
 * confirm dialog (role="dialog"/"alertdialog" with a confirm-style button)
 * and a native window.confirm() (auto-accepted).
 */
export async function clearProgressViaDashboard(page: Page): Promise<void> {
  await page.goto("/dashboard");
  // Native confirm(), if used.
  page.on("dialog", (dialog) => dialog.accept());
  await page.getByTestId("clear-data").click();

  const appDialog = page.locator('[role="dialog"], [role="alertdialog"]');
  if (await appDialog.isVisible().catch(() => false)) {
    await appDialog
      .getByRole("button", {
        name: /confirm|clear|delete|erase|reset|yes/i,
      })
      .first()
      .click();
  }

  await expect
    .poll(() => readStorage(page), { timeout: 5_000 })
    .toBeNull();
}
