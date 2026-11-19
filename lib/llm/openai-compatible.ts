import type {
  ExplainInput,
  ExplanationProvider,
  ExplanationResult,
} from "./types";

/**
 * OpenAI-compatible chat provider.
 *
 * Works with any endpoint that speaks the Chat Completions protocol:
 * OpenAI, Groq, Together, OpenRouter, Ollama, vLLM, and more — configured
 * through environment variables only (see `.env.example`). Prompts contain
 * lesson content only: never student personal data, because none exists.
 */

export interface OpenAICompatibleConfig {
  baseUrl: string;
  apiKey: string;
  model: string;
  timeoutMs: number;
  maxTokens: number;
}

export const OPENAI_COMPATIBLE_DEFAULTS = {
  defaultBaseUrl: "https://api.openai.com/v1",
  defaultModel: "gpt-4o-mini",
  defaultTimeoutMs: 12_000,
  defaultMaxTokens: 320,
} as const;

export function loadProviderConfig(): OpenAICompatibleConfig | null {
  const apiKey = process.env.OPENBRIDGE_LLM_API_KEY;
  if (!apiKey) return null;
  return {
    baseUrl: (
      process.env.OPENBRIDGE_LLM_BASE_URL ??
      OPENAI_COMPATIBLE_DEFAULTS.defaultBaseUrl
    ).replace(/\/+$/, ""),
    apiKey,
    model:
      process.env.OPENBRIDGE_LLM_MODEL ??
      OPENAI_COMPATIBLE_DEFAULTS.defaultModel,
    timeoutMs: Number(
      process.env.OPENBRIDGE_LLM_TIMEOUT_MS ??
        OPENAI_COMPATIBLE_DEFAULTS.defaultTimeoutMs
    ),
    maxTokens: Number(
      process.env.OPENBRIDGE_LLM_MAX_TOKENS ??
        OPENAI_COMPATIBLE_DEFAULTS.defaultMaxTokens
    ),
  };
}

const SYSTEM_PROMPT = `You are Ada, a warm, patient reading tutor for children ages 6–12, used inside the nonprofit OpenBridge reading app. A child answered a comprehension question incorrectly. Explain kindly and clearly.

Rules:
- 2–4 short sentences, simple words a 7-year-old understands.
- First acknowledge the attempt warmly (never "wrong", "no", "bad"; never shame).
- Explain why their chosen answer doesn't fit, then what makes the correct answer right.
- Ground the explanation in the story excerpt when helpful.
- If the language of the conversation is Spanish, reply in Spanish.
- Output only the explanation text, no headers, no quotes around it.`;

export class OpenAICompatibleProvider implements ExplanationProvider {
  readonly source = "ai" as const;

  constructor(
    readonly name: string,
    private config: OpenAICompatibleConfig
  ) {}

  async explain(input: ExplainInput): Promise<ExplanationResult> {
    const userPrompt = [
      `Story: "${input.storyTitle}" (lesson: ${input.lessonSlug})`,
      `Question (${input.skill}): ${input.questionPrompt}`,
      `Story excerpt: """${input.storyExcerpt}"""`,
      `Child's answer: "${input.studentAnswerText}" — note: ${input.studentAnswerRationale}`,
      `Correct answer: "${input.correctAnswerText}" — note: ${input.correctAnswerRationale}`,
      `Teacher's note on the correct answer: ${input.correctExplanation}`,
      input.locale === "es"
        ? "The child speaks Spanish. Reply in warm, simple Spanish."
        : "Reply in warm, simple English.",
    ].join("\n");

    const response = await fetch(`${this.config.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        model: this.config.model,
        temperature: 0.4,
        max_tokens: this.config.maxTokens,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
      }),
      signal: AbortSignal.timeout(this.config.timeoutMs),
    });

    if (!response.ok) {
      throw new Error(
        `LLM provider responded ${response.status} for model ${this.config.model}`
      );
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const body = data.choices?.[0]?.message?.content?.trim();
    if (!body) {
      throw new Error("LLM provider returned an empty explanation");
    }

    return { body, source: "ai", provider: this.name };
  }
}
