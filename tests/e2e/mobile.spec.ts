import { expect, test } from "@playwright/test";
import { MAYA_SLUG, escapeRe, mobileNavLink, option } from "./helpers";

test.beforeEach(({}, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile-only spec");
});

test.describe("mobile experience", () => {
  test("landing renders without horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test("mobile menu button opens the mobile nav and navigates", async ({
    page,
  }) => {
    await page.goto("/");
    const menuButton = page.getByTestId("mobile-menu-button");
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const learnLink = mobileNavLink(page, "nav-learn");
    await expect(learnLink).toBeVisible();
    await learnLink.click();
    await expect(page).toHaveURL(new RegExp(`${escapeRe("/learn")}$`));
  });

  test("lesson card is navigable on mobile", async ({ page }) => {
    await page.goto("/learn");
    const card = page.locator(
      `[data-testid="lesson-card"][data-slug="${MAYA_SLUG}"]`
    );
    await expect(card).toBeVisible();
    await card.click();
    await expect(page).toHaveURL(
      new RegExp(`${escapeRe(`/learn/${MAYA_SLUG}`)}`)
    );
    await expect(page.getByTestId("story-view")).toBeVisible();
  });

  test("tutor flow works on the mobile viewport", async ({ page }) => {
    await page.goto(`/learn/${MAYA_SLUG}`);
    await expect(page.getByTestId("story-view")).toBeVisible();

    // Start the quiz (testid if present, else the questions CTA).
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

    // Answer at least one question correctly.
    await option(page, 0).click();
    const check = page.getByTestId("check-answer");
    await expect(check).toBeEnabled();
    await check.click();
    await expect(
      page.getByTestId("feedback-correct").or(page.getByTestId("explain-panel"))
    ).toBeVisible();
  });
});
