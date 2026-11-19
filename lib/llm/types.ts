import type { ComprehensionSkill } from "@/lib/content/types";

/**
 * Provider-agnostic explanation layer.
 *
 * The app must teach beautifully with NO API key configured — so the
 * contract is designed around grounded, offline explanations first, with an
 * optional AI provider layered on top when one is available.
 */

export interface ExplainInput {
  lessonSlug: string;
  lessonTitle: string;
  storyTitle: string;
  /** Relevant story text (paragraphs joined), truncated server-side. */
  storyExcerpt: string;
  questionId: string;
  questionPrompt: string;
  skill: ComprehensionSkill;
  studentAnswerText: string;
  studentAnswerRationale: string;
  correctAnswerText: string;
  correctAnswerRationale: string;
  correctExplanation: string;
  locale: "en" | "es";
}

export type ExplanationSource = "ai" | "fallback";

export interface ExplanationResult {
  body: string;
  source: ExplanationSource;
  provider: string;
}

export interface ExplanationProvider {
  readonly name: string;
  readonly source: ExplanationSource;
  explain(input: ExplainInput): Promise<ExplanationResult>;
}

/** Compact story context so a model can point back to the text. */
export function buildStoryExcerpt(sections: string[]): string {
  const joined = sections.join("\n\n");
  return joined.length > 1500 ? `${joined.slice(0, 1500)}…` : joined;
}
