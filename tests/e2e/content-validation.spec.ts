import { expect, test } from "@playwright/test";
import { escapeRe } from "./helpers";

/**
 * Light end-to-end registry check: every lesson card in the library must
 * resolve to a real lesson page whose <title> contains the lesson title.
 * Structural content validation lives in unit-level CI checks
 * (lib/content validateLessons) — this only proves the registry wires up.
 */
test("every lesson card resolves to its lesson page", async ({ page }) => {
  await page.goto("/learn");

  const cards = page.locator('[data-testid="lesson-card"]');
  await expect(cards.first()).toBeVisible();

  const count = await cards.count();
  expect(count).toBeGreaterThan(0);

  // Dedupe: the recommended rail may repeat cards from the main grid.
  const lessons = new Map<string, string>();
  for (let i = 0; i < count; i++) {
    const card = cards.nth(i);
    const slug = await card.getAttribute("data-slug");
    if (!slug || lessons.has(slug)) continue;

    const href =
      (await card.getAttribute("href")) ??
      (await card.locator("a").first().getAttribute("href"));
    if (!href) continue;

    const heading = card.getByRole("heading").first();
    const headingText = await heading
      .textContent()
      .catch(() => null);
    const title =
      (headingText ?? (await card.innerText().catch(() => "")) ?? "")
        .trim()
        .split("\n")[0]
        .trim();
    if (!title) continue;

    lessons.set(slug, title);
  }

  expect(lessons.size).toBeGreaterThan(0);

  for (const [slug, title] of lessons) {
    await test.step(`lesson "${slug}"`, async () => {
      await page.goto(`/learn/${slug}`);
      await expect(page).toHaveTitle(new RegExp(escapeRe(title), "i"));
    });
  }
});
