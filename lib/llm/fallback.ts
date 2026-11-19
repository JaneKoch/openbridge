import type {
  ExplainInput,
  ExplanationProvider,
  ExplanationResult,
} from "./types";

/**
 * Deterministic, offline explanation engine.
 *
 * Builds a warm, specific explanation purely from lesson metadata (which
 * authors craft by hand) so the tutor is fully functional with zero API
 * keys, zero network calls, and complete privacy. Variants are chosen by a
 * stable hash so the same answer always produces the same explanation —
 * reliable for children, teachers, and tests.
 */

const OPENERS: Record<"en" | "es", string[]> = {
  en: [
    "Good try — that's a popular answer!",
    "Nice thinking! Let's look closer.",
    "Almost there, reader.",
    "That was a careful guess.",
  ],
  es: [
    "¡Buen intento! Es una respuesta común.",
    "¡Buen pensamiento! Miremos más de cerca.",
    "Casi lo logras, lector.",
    "Fue un intento cuidadoso.",
  ],
};

const CLOSERS: Record<"en" | "es", string[]> = {
  en: [
    "Read the story one more time — you'll spot it!",
    "You're getting closer with every question. Keep going!",
    "Every reader practices — and you just did. Onward!",
  ],
  es: [
    "Lee el cuento otra vez: ¡lo vas a encontrar!",
    "Cada pregunta te acerca más. ¡Sigue así!",
    "Cada lector practica, y tú acabas de hacerlo. ¡Adelante!",
  ],
};

function stableHash(text: string): number {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function explainFallback(input: ExplainInput): ExplanationResult {
  const { locale, studentAnswerText, studentAnswerRationale } = input;

  const openers = OPENERS[locale] ?? OPENERS.en;
  const closers = CLOSERS[locale] ?? CLOSERS.en;
  const seed = stableHash(`${input.lessonSlug}:${input.questionId}`);
  const opener = openers[seed % openers.length];
  const closer = closers[(seed >> 3) % closers.length];

  const parts: string[] = [];

  parts.push(opener);

  if (studentAnswerRationale) {
    parts.push(
      locale === "es"
        ? `Elegiste "${studentAnswerText}". ${studentAnswerRationale}`
        : `You picked "${studentAnswerText}". ${studentAnswerRationale}`
    );
  }

  parts.push(
    locale === "es"
      ? `La mejor respuesta es "${input.correctAnswerText}": ${input.correctExplanation}`
      : `The best answer is "${input.correctAnswerText}" — ${input.correctExplanation}`
  );

  parts.push(closer);

  return {
    body: parts.join(" "),
    source: "fallback",
    provider: "deterministic-offline-tutor",
  };
}

export const fallbackProvider: ExplanationProvider = {
  name: "deterministic-offline-tutor",
  source: "fallback",
  explain: async (input) => explainFallback(input),
};
