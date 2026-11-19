import { expect, test } from "@playwright/test";
import {
  MAYA_SLUG,
  advance,
  completeLesson,
  digits,
  escapeRe,
  expectDashboardShowsCompletion,
  option,
  startQuiz,
} from "./helpers";

test.beforeEach(({}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop-only flow");
});

test.describe("full reading flow (desktop)", () => {
  test("complete lesson with a perfect score", async ({ page }) => {
    // Library → lesson card
    await page.goto("/learn");
    const card = page.locator(
      `[data-testid="lesson-card"][data-slug="${MAYA_SLUG}"]`
    );
    await expect(card).toBeVisible();
    await card.click();
    await expect(page).toHaveURL(
      new RegExp(`${escapeRe(`/learn/${MAYA_SLUG}`)}`)
    );

    // Story view shows the canonical story
    await expect(page.getByTestId("story-view")).toBeVisible();
    await expect(page.getByTestId("story-view")).toContainText("Silver River");

    // Begin the quiz
    await startQuiz(page);

    // Five questions, every correctIndex is 0 in the canonical lesson
    for (let question = 0; question < 5; question++) {
      await option(page, 0).click();
      const check = page.getByTestId("check-answer");
      await expect(check).toBeEnabled();
      await check.click();
      await expect(page.getByTestId("feedback-correct")).toBeVisible();
      await advance(page);
    }

    // Results
    const results = page.getByTestId("results-screen");
    await expect(results).toBeVisible();
    await expect(page.getByTestId("score-value")).toContainText("100");

    const xpEarned = (await page.getByTestId("xp-earned").innerText()).trim();
    expect(digits(xpEarned)).toBeGreaterThan(0);

    // Results navigation
    const recommended = page.getByTestId("next-recommended");
    await expect(recommended).toBeVisible();
    const recommendedHref =
      (await recommended.getAttribute("href")) ??
      (await recommended.locator("a").first().getAttribute("href"));
    expect(recommendedHref).toMatch(/^\/learn\//);

    const backToLibrary = page.getByTestId("back-to-library");
    await expect(backToLibrary).toBeVisible();
    const backHref =
      (await backToLibrary.getAttribute("href")) ??
      (await backToLibrary.locator("a").first().getAttribute("href"));
    expect(backHref).toMatch(new RegExp(`^${escapeRe("/learn")}$`));

    await expect(page.getByTestId("retry-lesson")).toBeVisible();
  });

  test("progress lands in localStorage and the dashboard reflects it", async ({
    page,
  }) => {
    await completeLesson(page, MAYA_SLUG, { answerIndex: 0 });
    await expectDashboardShowsCompletion(page);
  });

  test("library marks the completed lesson", async ({ page }) => {
    await completeLesson(page, MAYA_SLUG, { answerIndex: 0 });
    await page.goto("/learn");
    const card = page.locator(
      `[data-testid="lesson-card"][data-slug="${MAYA_SLUG}"]`
    );
    await expect(card).toBeVisible();
    await expect(card).toContainText(/completed/i);
  });

  test("helper end-to-end sanity: exactly five questions then results", async ({
    page,
  }) => {
    const answered = await completeLesson(page, MAYA_SLUG, { answerIndex: 0 });
    expect(answered).toBe(5);
  });
});
