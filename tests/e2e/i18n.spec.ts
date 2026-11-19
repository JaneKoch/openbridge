import { expect, test } from "@playwright/test";

test.beforeEach(({}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop-only spec");
});

/**
 * Locale is stored in the `openbridge_locale` cookie and resolved
 * client-side after hydration, so translated labels need a generous
 * (but still short) timeout after the reload the switcher triggers.
 */
const HYDRATION_TIMEOUT = 10_000;

async function openSwitcher(page: import("@playwright/test").Page) {
  const switcher = page.getByTestId("language-switcher");
  await expect(switcher).toBeVisible();
  await switcher.click();
}

/** Menu item for a language, tolerant of role/markup variations. */
function languageItem(
  page: import("@playwright/test").Page,
  label: string
) {
  return page
    .getByRole("menuitem", { name: label })
    .or(page.getByRole("menuitemradio", { name: label }))
    .or(page.getByRole("button", { name: label }))
    .or(page.getByText(label, { exact: true }))
    .first();
}

test.describe("i18n language switcher", () => {
  test("switching to Español reloads and translates the nav", async ({
    page,
  }) => {
    await page.goto("/");
    await openSwitcher(page);
    await languageItem(page, "Español").click();

    const navLearn = page.locator('[data-testid="site-nav"] [data-testid="nav-learn"]');
    await expect(navLearn).toHaveText("Aprender", {
      timeout: HYDRATION_TIMEOUT,
    });
    await expect
      .poll(() => page.evaluate(() => document.cookie), {
        timeout: HYDRATION_TIMEOUT,
      })
      .toContain("openbridge_locale=es");
  });

  test("switching back to English restores the nav", async ({ page }) => {
    await page.goto("/");
    await openSwitcher(page);
    await languageItem(page, "Español").click();
    await expect(
      page.locator('[data-testid="site-nav"] [data-testid="nav-learn"]')
    ).toHaveText("Aprender", { timeout: HYDRATION_TIMEOUT });

    await openSwitcher(page);
    await languageItem(page, "English").click();
    await expect(
      page.locator('[data-testid="site-nav"] [data-testid="nav-learn"]')
    ).toHaveText("Learn", { timeout: HYDRATION_TIMEOUT });
    await expect
      .poll(() => page.evaluate(() => document.cookie), {
        timeout: HYDRATION_TIMEOUT,
      })
      .toContain("openbridge_locale=en");
  });
});
