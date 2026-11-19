import { expect, test } from "@playwright/test";
import {
  MAYA_SLUG,
  advance,
  answerCurrentQuestion,
  option,
  openQuiz,
} from "./helpers";

test.beforeEach(({}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop-only flow");
});

test.describe("wrong answer flow (desktop)", () => {
  test("wrong answer opens the explanation panel, right ones finish the lesson", async ({
    page,
  }) => {
    await openQuiz(page, MAYA_SLUG);

    // check-answer stays disabled until an option is selected
    await expect(page.getByTestId("check-answer")).toBeDisabled();

    // Question 1 answered wrong on purpose
    await option(page, 1).click();
    const check = page.getByTestId("check-answer");
    await expect(check).toBeEnabled();
    await check.click();

    const explainPanel = page.getByTestId("explain-panel");
    await expect(explainPanel).toBeVisible();
    const explanation = (await explainPanel.innerText()).trim();
    expect(explanation.length).toBeGreaterThan(0);

    await advance(page);

    // Remaining four questions answered correctly
    for (let remaining = 0; remaining < 4; remaining++) {
      await answerCurrentQuestion(page, 0);
      await advance(page);
    }

    await expect(page.getByTestId("results-screen")).toBeVisible();
  });
});

test.describe("POST /api/explain", () => {
  test("returns a fallback explanation for a wrong answer", async ({
    request,
  }) => {
    const response = await request.post("/api/explain", {
      data: {
        lessonSlug: MAYA_SLUG,
        questionId: "q1",
        answerIndex: 1,
        locale: "en",
      },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    // No AI provider is configured in the test environment.
    expect(body.source).toBe("fallback");
    expect(
      typeof body.explanation === "string" && body.explanation.length > 0
    ).toBe(true);
    expect(body).toHaveProperty("provider");
  });

  test("rejects the correct answer with 400", async ({ request }) => {
    const response = await request.post("/api/explain", {
      data: {
        lessonSlug: MAYA_SLUG,
        questionId: "q1",
        answerIndex: 0,
        locale: "en",
      },
    });
    expect(response.status()).toBe(400);
  });

  test("returns 404 for an unknown lesson slug", async ({ request }) => {
    const response = await request.post("/api/explain", {
      data: {
        lessonSlug: "no-such-lesson",
        questionId: "q1",
        answerIndex: 1,
        locale: "en",
      },
    });
    expect(response.status()).toBe(404);
  });
});
