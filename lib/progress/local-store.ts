"use client";

import { useSyncExternalStore } from "react";
import {
  defaultProgress,
  today,
  type StudentProgress,
} from "./types";
import { XP_FOR_LESSON, evaluateAchievements } from "@/lib/gamification";
import { nextReadingLevel } from "@/lib/adaptive";
import type { Lesson } from "@/lib/content/types";

const STORAGE_KEY = "openbridge.progress.v1";

let cached: StudentProgress | null = null;
const listeners = new Set<() => void>();

function load(): StudentProgress {
  if (cached) return cached;
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return (cached = defaultProgress());
    const parsed = JSON.parse(raw) as StudentProgress;
    // Guard against older shapes: version check + shallow defaults.
    if (parsed?.version !== 1) return (cached = defaultProgress());
    cached = { ...defaultProgress(), ...parsed };
    return cached;
  } catch {
    return (cached = defaultProgress());
  }
}

function save(next: StudentProgress) {
  cached = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage may be unavailable (private mode, quota) — progress stays in memory.
  }
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getProgress(): StudentProgress {
  return load();
}

export function useProgress(): StudentProgress {
  return useSyncExternalStore(
    subscribe,
    load,
    () => defaultProgress()
  );
}

export interface RecordOutcomeInput {
  lesson: Lesson;
  correctCount: number;
  totalQuestions: number;
}

/**
 * Fold one finished lesson into progress. Returns the celebration payload so
 * the UI can reward effort immediately (XP, new badges, level changes).
 */
export function recordOutcome({
  lesson,
  correctCount,
  totalQuestions,
}: RecordOutcomeInput): StudentProgress {
  const prev = load();
  const accuracy =
    totalQuestions > 0
      ? Math.round((correctCount / totalQuestions) * 100)
      : 0;
  const xpEarned = XP_FOR_LESSON(accuracy, prev.streakCount, lesson.minutes);
  const readingLevelAfter = nextReadingLevel(
    prev.readingLevel,
    accuracy,
    prev.lessons[lesson.slug]?.attempts ?? 0
  );

  const existing = prev.lessons[lesson.slug];
  const now = new Date().toISOString();
  const day = today();

  // Streak logic: +1 if last active was yesterday, reset to 1 after a gap.
  let streakCount = prev.streakCount;
  if (prev.lastActiveDay !== day) {
    const yesterday = new Date(Date.now() - 86_400_000)
      .toISOString()
      .slice(0, 10);
    streakCount = prev.lastActiveDay === yesterday ? prev.streakCount + 1 : 1;
  }

  const draft: StudentProgress = {
    ...prev,
    xp: prev.xp + xpEarned,
    readingLevel: readingLevelAfter,
    lessons: {
      ...prev.lessons,
      [lesson.slug]: {
        bestAccuracy: Math.max(existing?.bestAccuracy ?? 0, accuracy),
        attempts: (existing?.attempts ?? 0) + 1,
        completedAt: now,
        lastCorrect: correctCount,
        lastTotal: totalQuestions,
      },
    },
    lastActiveDay: day,
    streakCount,
    longestStreak: Math.max(prev.longestStreak, streakCount),
    answeredTotal: prev.answeredTotal + totalQuestions,
    correctTotal: prev.correctTotal + correctCount,
  };

  const newAchievements = evaluateAchievements(draft, {
    slug: lesson.slug,
    language: lesson.language,
    accuracy,
    totalQuestions,
  });
  draft.achievements = [
    ...prev.achievements,
    ...newAchievements.filter((id) => !prev.achievements.includes(id)),
  ];
  draft.lastCelebration = {
    slug: lesson.slug,
    accuracy,
    xpEarned,
    newAchievements,
    readingLevelBefore: prev.readingLevel,
    readingLevelAfter,
    at: now,
  };

  save(draft);
  return draft;
}

/** Privacy control: wipe all local progress, forever. */
export function clearProgress() {
  cached = defaultProgress();
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  for (const listener of listeners) listener();
}

/** Consume the one-time celebration payload (call when the results screen shows). */
export function consumeCelebration(): void {
  const current = load();
  if (!current.lastCelebration) return;
  save({ ...current, lastCelebration: null });
}
