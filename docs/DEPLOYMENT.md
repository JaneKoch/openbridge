# Deploying OpenBridge

OpenBridge uses Next.js with prerendered pages and a server-side explanation
endpoint. The guest experience uses browser storage and a built-in,
deterministic tutor. It needs no external service or database.

## Vercel

1. Fork OpenBridge to your GitHub account.
2. Import the fork into Vercel as a Next.js project.
3. Deploy using the default build settings. Add variables only if you want
   to configure an AI provider.

For a self-hosted deployment, use Node.js 20.9 or later and a reverse proxy
that provides HTTPS.

```bash
npm ci
npm run build
npm run start
```

## Optional AI explanations

Set these server-side environment variables for an OpenAI-compatible
provider. Without an API key, OpenBridge uses author-written explanations.

| Variable | Default | Purpose |
| --- | --- | --- |
| `OPENBRIDGE_LLM_API_KEY` | Unset | Enables the AI provider |
| `OPENBRIDGE_LLM_BASE_URL` | `https://api.openai.com/v1` | Chat-completions API base URL |
| `OPENBRIDGE_LLM_MODEL` | `gpt-4o-mini` | Model identifier |
| `OPENBRIDGE_LLM_TIMEOUT_MS` | `12000` | Time before falling back to built-in feedback |
| `OPENBRIDGE_LLM_MAX_TOKENS` | `320` | Requested explanation length cap |

The browser submits a lesson slug, question ID, answer index, and language.
The server looks up the lesson and submits published content to the provider.
Keep the key out of source control and avoid the `NEXT_PUBLIC_` prefix.
Enable the provider after reviewing its pricing and data-handling terms.

## Supabase

The client and [draft schema](../supabase/schema.sql) are groundwork for a
future classroom integration. This MVP does not send guest progress to
Supabase or expose classroom reporting.
