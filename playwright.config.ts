import { defineConfig, devices } from "@playwright/test";

/**
 * E2E suite for OpenBridge.
 *
 * Runs against a production build (`npm run build && npm run start`) on port
 * 3311 so tests exercise the same static-first output that ships to users.
 * The suite is written entirely against the `data-testid` contract — no
 * third-party services, no accounts, no fixtures beyond the app itself.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: 0,
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: "http://localhost:3311",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 800 },
        hasTouch: false,
      },
    },
    {
      name: "mobile",
      use: {
        viewport: { width: 390, height: 844 },
        hasTouch: true,
        isMobile: true,
      },
    },
  ],
  webServer: {
    command: "npm run build && npm run start -- --port 3311",
    url: "http://localhost:3311",
    timeout: 240_000,
    reuseExistingServer: !process.env.CI,
  },
});
