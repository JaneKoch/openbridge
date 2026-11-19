import { mayaAndTheRiverBridge } from "@/content/lessons/en/maya-and-the-river-bridge";
import type { Lesson, LessonSummary } from "./types";
import { toSummary } from "./types";
import { lessonsLevel1to2En } from "@/content/lessons/en/level-1-2";
import { lessonsLevel3to5En } from "@/content/lessons/en/level-3-5";
import { lessonsEs } from "@/content/lessons/es";

/** Every registered lesson, ordered for a natural browsing experience. */
export const allLessons: Lesson[] = [
  mayaAndTheRiverBridge,
  ...lessonsLevel1to2En,
  ...lessonsLevel3to5En,
  ...lessonsEs,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return allLessons.find((lesson) => lesson.slug === slug);
}

export function getLessonSummaries(options?: {
  language?: Lesson["language"];
  level?: Lesson["level"];
}): LessonSummary[] {
  return allLessons
    .filter(
      (lesson) =>
        (!options?.language || lesson.language === options.language) &&
        (!options?.level || lesson.level === options.level)
    )
    .map(toSummary);
}

/**
 * Lessons recommended for a reader at `level`: unfinished lessons at the
 * reader's level first, then other unfinished levels by distance, then
 * completed ones worth revisiting.
 */
export function getRecommendedLessons(
  level: Lesson["level"],
  completedSlugs: Set<string>,
  options?: { language?: Lesson["language"]; limit?: number; excludeSlug?: string }
): LessonSummary[] {
  const scored = allLessons
    .filter(
      (lesson) =>
        lesson.slug !== options?.excludeSlug &&
        (!options?.language || lesson.language === options.language)
    )
    .map((lesson) => {
      let score: number;
      if (!completedSlugs.has(lesson.slug) && lesson.level === level) {
        score = 0;
      } else if (!completedSlugs.has(lesson.slug)) {
        score = 1 + Math.abs(lesson.level - level) * 2;
      } else if (lesson.level === level) {
        score = 10;
      } else {
        score = 20 + Math.abs(lesson.level - level) * 2;
      }
      return { lesson, score };
    })
    .sort((a, b) => a.score - b.score || a.lesson.level - b.lesson.level)
    .map(({ lesson }) => toSummary(lesson));

  return options?.limit ? scored.slice(0, options.limit) : scored;
}

/**
 * Light structural validation used by tests/CI so content mistakes (duplicate
 * slugs, bad option counts, off-range correct indexes) fail fast.
 */
export function validateLessons(lessons: Lesson[] = allLessons): string[] {
  const problems: string[] = [];
  const seenSlugs = new Set<string>();

  for (const lesson of lessons) {
    const where = lesson.slug;
    if (seenSlugs.has(lesson.slug)) {
      problems.push(`${where}: duplicate slug`);
    }
    seenSlugs.add(lesson.slug);
    if (lesson.story.sections.length === 0) {
      problems.push(`${where}: story has no sections`);
    }
    if (lesson.questions.length < 4) {
      problems.push(`${where}: fewer than 4 questions`);
    }
    for (const question of lesson.questions) {
      if (question.options.length < 3 || question.options.length > 4) {
        problems.push(`${where}/${question.id}: needs 3–4 options`);
      }
      if (
        !Number.isInteger(question.correctIndex) ||
        question.correctIndex < 0 ||
        question.correctIndex >= question.options.length
      ) {
        problems.push(`${where}/${question.id}: correctIndex out of range`);
      }
      if (question.explanation.trim().length < 20) {
        problems.push(`${where}/${question.id}: explanation too short`);
      }
    }
  }

  return problems;
}

export type {
  ReadingLevel,
  LessonLanguage,
  ComprehensionSkill,
  LessonPalette,
  Lesson,
  LessonSummary,
} from "./types";
export { COMPREHENSION_SKILL_LABELS, PALETTES } from "./types";
export {
  READING_LEVELS,
  ALL_LEVELS,
  levelName,
  type ReadingLevelInfo,
} from "./levels";
