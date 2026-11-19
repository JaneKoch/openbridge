import { NextResponse } from "next/server";
import { z } from "zod";
import { getLessonBySlug } from "@/lib/content";
import { explainAnswer, isAIConfigured } from "@/lib/llm";
import type { ExplainInput } from "@/lib/llm/types";

/**
 * POST /api/explain
 *
 * The privacy-first tutoring endpoint:
 * - Accepts only a lesson slug, question id, chosen answer index, locale.
 * - The client never sends story text or anything about the child — the
 *   server builds the tutor's context from trusted local lesson data.
 * - No logging of request bodies. Nothing to store, because nothing was
 *   collected.
 */

const ExplainRequest = z.object({
  lessonSlug: z.string().min(1).max(120),
  questionId: z.string().min(1).max(80),
  answerIndex: z.number().int().min(0).max(9),
  locale: z.enum(["en", "es"]).default("en"),
});

/**
 * Best-effort in-memory rate limit (per instance). Protects against abuse
 * of the AI provider using the forwarded address and lesson slug as an
 * in-memory bucket key with a short retention window.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 30;
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimited(bucketKey: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(bucketKey);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(bucketKey, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS_PER_WINDOW;
}

// Opportunistic cleanup so the map never grows unbounded.
const cleanup = setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt < now) buckets.delete(key);
  }
}, WINDOW_MS);
// Never hold the process open just for cleanup.
(cleanup as unknown as { unref?: () => void }).unref?.();

export async function POST(request: Request) {
  let payload: z.infer<typeof ExplainRequest>;
  try {
    payload = ExplainRequest.parse(await request.json());
  } catch {
    return NextResponse.json(
      { error: "invalid_request" },
      { status: 400 }
    );
  }

  const lesson = getLessonBySlug(payload.lessonSlug);
  const question = lesson?.questions.find((q) => q.id === payload.questionId);
  if (!lesson || !question) {
    return NextResponse.json({ error: "lesson_not_found" }, { status: 404 });
  }

  const studentOption = question.options[payload.answerIndex];
  if (!studentOption) {
    return NextResponse.json({ error: "answer_not_found" }, { status: 404 });
  }
  // Correct answers are celebrated client-side — never spend AI tokens on them.
  if (payload.answerIndex === question.correctIndex) {
    return NextResponse.json({ error: "already_correct" }, { status: 400 });
  }

  const bucketKey = `${request.headers.get("x-forwarded-for") ?? "local"}:${payload.lessonSlug}`;
  if (rateLimited(bucketKey)) {
    return NextResponse.json({ error: "slow_down" }, { status: 429 });
  }

  const excerpt =
    lesson.story.sections.join("\n\n").slice(0, 1400) +
    (lesson.story.sections.join("\n\n").length > 1400 ? "…" : "");

  const input: ExplainInput = {
    lessonSlug: lesson.slug,
    lessonTitle: lesson.title,
    storyTitle: lesson.story.title,
    storyExcerpt: excerpt,
    questionId: question.id,
    questionPrompt: question.prompt,
    skill: question.skill,
    studentAnswerText: studentOption.text,
    studentAnswerRationale: studentOption.rationale,
    correctAnswerText: question.options[question.correctIndex].text,
    correctAnswerRationale: question.options[question.correctIndex].rationale,
    correctExplanation: question.explanation,
    locale: payload.locale,
  };

  const explanation = await explainAnswer(input);

  return NextResponse.json(
    {
      explanation: explanation.body,
      source: explanation.source,
      provider: explanation.provider,
      aiConfigured: isAIConfigured(),
    },
    { headers: { "cache-control": "no-store" } }
  );
}
