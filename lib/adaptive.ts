import type { ReadingLevel } from "@/lib/content/types";

/**
 * Adaptive difficulty — explainable and deterministic (no hidden state).
 *
 * - Score ≥ 80% on a lesson → level up (max 5).
 * - Score ≤ 50% on a *repeat* attempt, or < 35% overall → level down (min 1).
 * - Otherwise stay. Mastery means consistency, not one lucky lesson.
 */
export function nextReadingLevel(
  current: ReadingLevel,
  accuracy: number,
  previousAttempts: number
): ReadingLevel {
  if (accuracy >= 80 && current < 5) {
    return (current + 1) as ReadingLevel;
  }
  if (
    previousAttempts >= 1 &&
    accuracy < 50 &&
    accuracy >= 35 &&
    current > 1
  ) {
    return (current - 1) as ReadingLevel;
  }
  if (accuracy < 35 && current > 1) {
    return (current - 1) as ReadingLevel;
  }
  return current;
}

export interface AdaptiveRecommendation {
  level: ReadingLevel;
  reason: "new-reader" | "on-level" | "moving-up" | "consolidating" | "top";
}

/** Short human explanation of why the current level fits — shown on the dashboard. */
export function explainLevel(
  level: ReadingLevel,
  locale: "en" | "es"
): AdaptiveRecommendation["reason"] {
  // Reasons are derived in the UI layer from progress; here we keep the
  // pure level-to-default mapping simple and testable.
  return level >= 5 ? "top" : "on-level";
}
