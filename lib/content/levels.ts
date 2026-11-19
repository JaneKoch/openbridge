import type { ReadingLevel } from "./types";

export interface ReadingLevelInfo {
  level: ReadingLevel;
  name: { en: string; es: string };
  blurb: { en: string; es: string };
  emoji: string;
  /** Tailwind classes for the level's accent dot. */
  dotClass: string;
}

export const READING_LEVELS: Record<ReadingLevel, ReadingLevelInfo> = {
  1: {
    level: 1,
    name: { en: "Sprout", es: "Brote" },
    blurb: {
      en: "Short sentences, everyday words, gentle adventures.",
      es: "Frases cortas, palabras cotidianas, aventuras suaves.",
    },
    emoji: "🌱",
    dotClass: "bg-emerald-500",
  },
  2: {
    level: 2,
    name: { en: "Seeker", es: "Buscador" },
    blurb: {
      en: "Simple chapters, vivid pictures in words, kind characters.",
      es: "Capítulos simples, imágenes descritas con palabras, personajes amables.",
    },
    emoji: "🔍",
    dotClass: "bg-teal-500",
  },
  3: {
    level: 3,
    name: { en: "Explorer", es: "Explorador" },
    blurb: {
      en: "Longer stories with new vocabulary and surprises.",
      es: "Historias más largas con vocabulario nuevo y sorpresas.",
    },
    emoji: "🧭",
    dotClass: "bg-sky-500",
  },
  4: {
    level: 4,
    name: { en: "Navigator", es: "Navegante" },
    blurb: {
      en: "Layered plots, cause and effect, thinking between the lines.",
      es: "Tramas con capas, causa y efecto, leer entre líneas.",
    },
    emoji: "⛵",
    dotClass: "bg-violet-500",
  },
  5: {
    level: 5,
    name: { en: "Voyager", es: "Viajero" },
    blurb: {
      en: "Confident readers: themes, motives, and richer language.",
      es: "Lectores seguros: temas, motivos y lenguaje más rico.",
    },
    emoji: "🚀",
    dotClass: "bg-rose-500",
  },
};

export const ALL_LEVELS: ReadingLevel[] = [1, 2, 3, 4, 5];

export function levelName(level: ReadingLevel, locale: "en" | "es"): string {
  return READING_LEVELS[level].name[locale];
}
