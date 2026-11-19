/**
 * The content contract for OpenBridge lessons.
 *
 * A lesson = one story + a set of comprehension questions + teaching
 * metadata. Content is plain TypeScript so it is type-checked, tree-shaken,
 * and easy for volunteers to contribute (no CMS required).
 */

export type ReadingLevel = 1 | 2 | 3 | 4 | 5;

export type LessonLanguage = "en" | "es";

export type ComprehensionSkill =
  | "literal" // finding facts stated in the text
  | "inference" // reading between the lines
  | "vocabulary" // word meaning in context
  | "main-idea" // what the story is mostly about
  | "sequence" // order of events
  | "prediction"; // what might come next

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface QuizOption {
  text: string;
  /**
   * Kid-friendly reason why this option is or is not the answer.
   * Used by the deterministic (offline) explanation engine.
   */
  rationale: string;
}

export interface ComprehensionQuestion {
  /** Stable id, unique within a lesson: e.g. "q1". */
  id: string;
  skill: ComprehensionSkill;
  prompt: string;
  /** 3–4 answer options. */
  options: QuizOption[];
  correctIndex: number;
  /**
   * A warm, 1–3 sentence explanation of why the correct answer is correct.
   * Used verbatim by the offline fallback engine and as grounding context
   * for the AI tutor.
   */
  explanation: string;
}

export type LessonPalette =
  | "sunrise"
  | "meadow"
  | "ocean"
  | "forest"
  | "sunset"
  | "cosmos";

export interface Lesson {
  /** Kebab-case, globally unique across languages. */
  slug: string;
  language: LessonLanguage;
  level: ReadingLevel;
  title: string;
  subtitle: string;
  description: string;
  /** Estimated reading minutes (whole lesson, story + questions). */
  minutes: number;
  /** Decorative cover: emoji + warm palette. No binary assets required. */
  emoji: string;
  palette: LessonPalette;
  story: {
    title: string;
    /** Paragraphs, kept short for comfortable reading on phones. */
    sections: string[];
  };
  glossary: GlossaryTerm[];
  questions: ComprehensionQuestion[];
  /** Note for teachers/parents: what this story teaches and how. */
  teachingNotes: string;
}

export interface LessonSummary {
  slug: string;
  language: LessonLanguage;
  level: ReadingLevel;
  title: string;
  subtitle: string;
  description: string;
  minutes: number;
  emoji: string;
  palette: LessonPalette;
  questionCount: number;
  skills: ComprehensionSkill[];
}

export function toSummary(lesson: Lesson): LessonSummary {
  return {
    slug: lesson.slug,
    language: lesson.language,
    level: lesson.level,
    title: lesson.title,
    subtitle: lesson.subtitle,
    description: lesson.description,
    minutes: lesson.minutes,
    emoji: lesson.emoji,
    palette: lesson.palette,
    questionCount: lesson.questions.length,
    skills: [...new Set(lesson.questions.map((q) => q.skill))],
  };
}

export const COMPREHENSION_SKILL_LABELS: Record<
  ComprehensionSkill,
  { en: string; es: string }
> = {
  literal: { en: "Find it in the story", es: "Encuéntralo en el cuento" },
  inference: { en: "Read between the lines", es: "Lee entre líneas" },
  vocabulary: { en: "Word detective", es: "Detective de palabras" },
  "main-idea": { en: "Big idea", es: "Idea principal" },
  sequence: { en: "What happened when", es: "Qué pasó y cuándo" },
  prediction: { en: "What comes next", es: "Qué viene después" },
};

export const PALETTES: Record<
  LessonPalette,
  { gradient: string; soft: string; ring: string }
> = {
  sunrise: {
    gradient: "from-amber-200 via-orange-300 to-rose-300",
    soft: "bg-amber-50 border-amber-200",
    ring: "text-amber-700",
  },
  meadow: {
    gradient: "from-lime-200 via-green-300 to-emerald-400",
    soft: "bg-lime-50 border-lime-200",
    ring: "text-lime-700",
  },
  ocean: {
    gradient: "from-sky-200 via-cyan-300 to-blue-400",
    soft: "bg-sky-50 border-sky-200",
    ring: "text-sky-700",
  },
  forest: {
    gradient: "from-emerald-200 via-teal-300 to-green-500",
    soft: "bg-emerald-50 border-emerald-200",
    ring: "text-emerald-700",
  },
  sunset: {
    gradient: "from-orange-200 via-rose-300 to-purple-300",
    soft: "bg-orange-50 border-orange-200",
    ring: "text-orange-700",
  },
  cosmos: {
    gradient: "from-indigo-300 via-violet-400 to-purple-500",
    soft: "bg-indigo-50 border-indigo-200",
    ring: "text-indigo-700",
  },
};
