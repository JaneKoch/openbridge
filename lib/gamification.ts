import type { ReadingLevel } from "@/lib/content/types";
import type { StudentProgress } from "@/lib/progress/types";

/**
 * Gentle gamification: XP, streaks, and a small set of meaningful
 * achievements. Everything is effort-based — celebrating practice, not
 * talent — so every child can earn every badge.
 */

export interface Achievement {
  id: string;
  icon: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-story",
    icon: "📖",
    name: { en: "First Story", es: "Primer cuento" },
    description: {
      en: "You finished your very first story.",
      es: "Terminaste tu primer cuento.",
    },
  },
  {
    id: "perfect-score",
    icon: "💎",
    name: { en: "Perfect Diamond", es: "Diamante perfecto" },
    description: {
      en: "Every answer correct — flawless!",
      es: "Todas las respuestas correctas: ¡impecable!",
    },
  },
  {
    id: "five-stories",
    icon: "🧭",
    name: { en: "Story Explorer", es: "Explorador de cuentos" },
    description: {
      en: "You completed five different stories.",
      es: "Completaste cinco cuentos distintos.",
    },
  },
  {
    id: "streak-3",
    icon: "🔥",
    name: { en: "Three-Day Spark", es: "Chispa de tres días" },
    description: {
      en: "You practiced three days in a row.",
      es: "Practicaste tres días seguidos.",
    },
  },
  {
    id: "streak-7",
    icon: "⚡",
    name: { en: "Week of Wonder", es: "Semana maravillosa" },
    description: {
      en: "Seven days in a row — unstoppable reader!",
      es: "Siete días seguidos: ¡lector imparable!",
    },
  },
  {
    id: "level-4",
    icon: "⛵",
    name: { en: "Navigator", es: "Navegante" },
    description: {
      en: "You reached reading level 4.",
      es: "Alcanzaste el nivel de lectura 4.",
    },
  },
  {
    id: "level-5",
    icon: "🚀",
    name: { en: "Voyager", es: "Viajero" },
    description: {
      en: "You reached the top reading level.",
      es: "Alcanzaste el nivel máximo de lectura.",
    },
  },
  {
    id: "language-bridge",
    icon: "🌍",
    name: { en: "Language Bridge", es: "Puente de idiomas" },
    description: {
      en: "You read a story in another language.",
      es: "Leíste un cuento en otro idioma.",
    },
  },
  {
    id: "comeback",
    icon: "🌤️",
    name: { en: "Welcome Back", es: "Bienvenido de nuevo" },
    description: {
      en: "You came back after a break and kept going.",
      es: "Volviste tras un descanso y seguiste adelante.",
    },
  },
  {
    id: "story-master",
    icon: "🏅",
    name: { en: "Story Master", es: "Maestro de los cuentos" },
    description: {
      en: "You completed ten different stories.",
      es: "Completaste diez cuentos distintos.",
    },
  },
];

export const ACHIEVEMENT_IDS = ACHIEVEMENTS.map((a) => a.id);

export interface OutcomeContext {
  slug: string;
  language: "en" | "es";
  accuracy: number;
  totalQuestions: number;
}

/** Pure function: which achievement ids are newly earned for this state + outcome. */
export function evaluateAchievements(
  progress: StudentProgress,
  outcome: OutcomeContext
): string[] {
  const earned: string[] = [];
  const completed = Object.keys(progress.lessons).length;
  const had = (id: string) => progress.achievements.includes(id);

  if (completed >= 1 && !had("first-story")) earned.push("first-story");
  if (
    outcome.accuracy === 100 &&
    outcome.totalQuestions > 0 &&
    !had("perfect-score")
  )
    earned.push("perfect-score");
  if (completed >= 5 && !had("five-stories")) earned.push("five-stories");
  if (completed >= 10 && !had("story-master")) earned.push("story-master");
  if (progress.streakCount >= 3 && !had("streak-3")) earned.push("streak-3");
  if (progress.streakCount >= 7 && !had("streak-7")) earned.push("streak-7");
  if (progress.readingLevel >= 4 && !had("level-4")) earned.push("level-4");
  if (progress.readingLevel >= 5 && !had("level-5")) earned.push("level-5");
  if (
    progress.xp > 0 &&
    Object.values(progress.lessons).some((l) => l.attempts > 1) &&
    !had("comeback")
  )
    earned.push("comeback");
  if (outcome.language === "es" && !had("language-bridge"))
    earned.push("language-bridge");

  return earned;
}

/** XP: reward effort and accuracy equally, with a gentle streak bonus. */
export function XP_FOR_LESSON(
  accuracy: number,
  streak: number,
  minutes: number
): number {
  const base = 20 + Math.round(minutes * 2);
  const accuracyBonus = Math.round((accuracy / 100) * 30);
  const streakBonus = Math.min(streak, 7) * 5; // cap so it never overwhelms
  return base + accuracyBonus + streakBonus;
}

export interface XPRank {
  minXP: number;
  icon: string;
  name: { en: string; es: string };
}

export const XP_RANKS: XPRank[] = [
  { minXP: 0, icon: "✨", name: { en: "Spark", es: "Chispa" } },
  { minXP: 150, icon: "🔥", name: { en: "Ember", es: "Brasa" } },
  { minXP: 400, icon: "🏮", name: { en: "Lantern", es: "Farol" } },
  { minXP: 800, icon: "🌟", name: { en: "Star", es: "Estrella" } },
  { minXP: 1400, icon: "🚀", name: { en: "Rocket", es: "Cohete" } },
  { minXP: 2200, icon: "🌈", name: { en: "Rainbow", es: "Arcoíris" } },
];

export function getXPRank(
  xp: number
): { current: XPRank; next: XPRank | null; progressPct: number } {
  let current = XP_RANKS[0];
  let next: XPRank | null = null;
  for (let i = 0; i < XP_RANKS.length; i++) {
    if (xp >= XP_RANKS[i].minXP) current = XP_RANKS[i];
    else {
      next = XP_RANKS[i];
      break;
    }
  }
  const progressPct = next
    ? Math.min(
        100,
        Math.round(
          ((xp - current.minXP) / (next.minXP - current.minXP)) * 100
        )
      )
    : 100;
  return { current, next, progressPct };
}

export function readingLevelTitle(
  level: ReadingLevel,
  locale: "en" | "es"
): string {
  const names: Record<ReadingLevel, { en: string; es: string }> = {
    1: { en: "Sprout", es: "Brote" },
    2: { en: "Seeker", es: "Buscador" },
    3: { en: "Explorer", es: "Explorador" },
    4: { en: "Navigator", es: "Navegante" },
    5: { en: "Voyager", es: "Viajero" },
  };
  return names[level][locale];
}
