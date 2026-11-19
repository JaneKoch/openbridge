# OpenBridge

OpenBridge is a free, open-source reading tutor for children. It pairs original
stories with comprehension questions and encouraging explanations. A child can
start reading right away, even on a shared device.

This repository contains the concept MVP. It explores a simple idea: children
should be able to get patient, personalized reading support without an account.

## What’s inside

- A library of 11 original English and Spanish lessons, with English stories
  spanning five reading levels.
- Guided reading with a glossary, browser read-aloud where available, and a
  comprehension quiz for each story.
- Explanations tailored to the answer the reader chose. The built-in tutor
  uses author-written feedback. An optional AI provider can vary the wording.
- A guest dashboard with adaptive reading recommendations, XP, and achievements.
- Classroom guidance for teachers and organizations, plus a plain-language
  privacy page.

## Run locally

Requires Node.js 20.9 or later and npm.

```bash
git clone https://github.com/JaneKoch/openbridge.git
cd openbridge
npm ci
npm run dev
```

Open http://localhost:3000 and choose **Start reading**. The built-in tutor
works without environment variables or a database.

## Guest privacy

Reading progress is saved in the browser. Use **My Progress → Clear my data**
to remove it. A language preference cookie holds only the chosen language.
The app has no accounts, ads, or analytics. The tutoring endpoint receives
the lesson ID, question ID, answer index, and language. A configured AI
provider receives the corresponding published lesson context. See the in-app
privacy page for details about hosting and network data.

## Optional AI provider

Copy `.env.example` to `.env.local` and set `OPENBRIDGE_LLM_API_KEY` to enable an
OpenAI-compatible chat-completions provider. Override `OPENBRIDGE_LLM_BASE_URL`
and `OPENBRIDGE_LLM_MODEL` for your provider as needed. Keep the key server-side.
The built-in tutor also handles provider failures and timeouts.

The repository includes a Supabase client and draft schema for future classroom
features. Guest use of the MVP stores progress locally.

## Project layout

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router pages and the explanation endpoint |
| `components/` | Tutor, dashboard, and shadcn/ui components |
| `content/lessons/` | Original English and Spanish lessons |
| `lib/content/` | Content types, lesson registry, and reading levels |
| `lib/progress/` | Local guest progress |
| `lib/llm/` | AI integration and deterministic fallback |
| `lib/i18n/` | Locale settings and bilingual student UI dictionaries |
| `tests/e2e/` | Playwright scenarios |

Run `npm run verify` for type checking, linting, and a production build.
To run Playwright locally, install Chromium with `npx playwright install chromium`
and run `npm run e2e`. GitHub Actions also offers a manually triggered CI workflow.

## Deployment and contributions

Import the repository into Vercel using its Next.js preset. The built-in tutor
needs no environment variables. See [deployment instructions](docs/DEPLOYMENT.md)
for configuration or self-hosting.

Start with the [contributor guide](CONTRIBUTING.md) or the
[lesson authoring guide](docs/CONTENT.md). OpenBridge is released under the
[MIT License](LICENSE).
