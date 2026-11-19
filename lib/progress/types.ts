import type { ReadingLevel } from "@/lib/content/types";

/**
 * Local-first progress storage.
 *
 * Privacy by design: everything lives in `localStorage`. No accounts, no
 * server writes, no personal information — a clearing in the browser that
 * belongs to the child (or classroom device) alone.
 */

export interface LessonResult {
  bestAccuracy: number; // 0–100
  attempts: number;
  completedAt: string; // ISO date of the most recent completion
  lastCorrect: number;
  lastTotal: number;
}

export interface StudentProgress {
  version: 1;
  xp: number;
  /** Reading level (1–5) determined adaptively. */
  readingLevel: ReadingLevel;
  /** Completed lessons keyed by slug. */
  lessons: Record<string, LessonResult>;
  /** ISO day (YYYY-MM-DD) of the last activity, used for streaks. */
  lastActiveDay: string | null;
  streakCount: number;
  longestStreak: number;
  /** Total answered questions, correct and all. */
  answeredTotal: number;
  correctTotal: number;
  /** Achievement ids (see lib/gamification). */
  achievements: string[];
  /** Set when a lesson run finished; consumed by the celebration UI. */
  lastCelebration: {
    slug: string;
    accuracy: number;
    xpEarned: number;
    newAchievements: string[];
    readingLevelBefore: ReadingLevel;
    readingLevelAfter: ReadingLevel;
    at: string;
  } | null;
  createdAt: string;
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function defaultProgress(): StudentProgress {
  return {
    version: 1,
    xp: 0,
    readingLevel: 2,
    lessons: {},
    lastActiveDay: null,
    streakCount: 0,
    longestStreak: 0,
    answeredTotal: 0,
    correctTotal: 0,
    achievements: [],
    lastCelebration: null,
    createdAt: new Date().toISOString(),
  };
}
