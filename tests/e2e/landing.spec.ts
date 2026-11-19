import { expect, test } from "@playwright/test";
import { escapeRe, siteNavLink } from "./helpers";

test.describe("landing page", () => {
  test("loads with the OpenBridge title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/OpenBridge/);
  });

  test("hero CTA navigates to /learn", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByTestId("landing-start");
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page).toHaveURL(new RegExp(`${escapeRe("/learn")}$`));
  });

  test("sample story link is offered", async ({ page }) => {
    await page.goto("/");
    const sample = page.getByTestId("landing-sample");
    await expect(sample).toBeVisible();
    const href =
      (await sample.getAttribute("href")) ??
      (await sample.locator("a").first().getAttribute("href"));
    expect(href).toMatch(/^\/learn\//);
  });

  test("header nav links work", async ({ page }) => {
    const destinations: Array<[string, string]> = [
      ["nav-learn", "/learn"],
      ["nav-dashboard", "/dashboard"],
      ["nav-teachers", "/teachers"],
      ["nav-about", "/about"],
    ];

    for (const [testId, href] of destinations) {
      await page.goto("/");
      await siteNavLink(page, testId).click();
      await expect(page).toHaveURL(new RegExp(`${escapeRe(href)}$`));
    }
  });

  test("skip link exists and targets main content", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
    // Becomes visible when focused (sr-only until focus).
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });
});
