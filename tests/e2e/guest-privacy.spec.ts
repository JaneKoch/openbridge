import { expect, test } from "@playwright/test";
import {
  PROGRESS_KEY,
  clearProgressViaDashboard,
  completeLesson,
  readStorage,
} from "./helpers";

const THIRD_PARTY =
  /google-analytics|doubleclick|facebook|hotjar|sentry/i;

test.describe("guest privacy", () => {
  test("no third-party requests, progress is local-only and erasable", async ({
    page,
  }) => {
    const thirdPartyRequests: string[] = [];
    page.on("request", (request) => {
      if (THIRD_PARTY.test(request.url())) {
        thirdPartyRequests.push(request.url());
      }
    });

    // Landing: guest copy visible, no beacons, no pre-existing progress.
    await page.goto("/");
    await expect(page.locator("body")).toContainText(/no (account|ads|tracking)/i);
    expect(await readStorage(page)).toBeNull();

    // Complete the full lesson flow as a guest.
    await completeLesson(page, "maya-and-the-river-bridge", {
      answerIndex: 0,
    });

    // Progress is stored locally, nothing else.
    expect(await readStorage(page)).not.toBeNull();
    expect(thirdPartyRequests).toEqual([]);

    // Privacy control: wipe everything from the dashboard.
    await clearProgressViaDashboard(page);
    expect(await readStorage(page)).toBeNull();

    // The dashboard shows its empty state afterwards.
    await page.goto("/dashboard");
    await expect(page.getByTestId("dashboard-start")).toBeVisible();
  });

  test("progress key is absent before any lesson is read", async ({ page }) => {
    await page.goto("/");
    const value = await page.evaluate(
      (key) => window.localStorage.getItem(key),
      PROGRESS_KEY
    );
    expect(value).toBeNull();
  });
});
