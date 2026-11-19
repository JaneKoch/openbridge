import type {
  ExplainInput,
  ExplanationProvider,
  ExplanationResult,
} from "./types";
import { fallbackProvider } from "./fallback";
import {
  loadProviderConfig,
  OpenAICompatibleProvider,
} from "./openai-compatible";

/**
 * Explanation router.
 *
 * 1. If an OpenAI-compatible endpoint is configured (env), use it.
 * 2. Otherwise — or if the provider errors/times out — fall back to the
 *    deterministic offline tutor, which is genuinely good on its own.
 * Children always get a warm explanation; teachers always get reliability.
 */
export function getExplanationProvider(): ExplanationProvider {
  const config = loadProviderConfig();
  if (!config) return fallbackProvider;
  return new OpenAICompatibleProvider("openai-compatible", config);
}

export function isAIConfigured(): boolean {
  return loadProviderConfig() !== null;
}

export async function explainAnswer(
  input: ExplainInput
): Promise<ExplanationResult> {
  const provider = getExplanationProvider();
  if (provider.source === "fallback") {
    return provider.explain(input);
  }
  try {
    return await provider.explain(input);
  } catch {
    // Provider hiccup (rate limit, timeout, network) — never penalize the child.
    return fallbackProvider.explain(input);
  }
}

export { fallbackProvider } from "./fallback";
export type {
  ExplainInput,
  ExplanationResult,
  ExplanationProvider,
} from "./types";
