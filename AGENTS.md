<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# OpenBridge — agent & contributor conventions

Free, open-source AI reading tutor for underserved children. Every file here
is read by children — keep it warm, accessible, and fast.

## Stack

Next.js (App Router, static-first) · TypeScript · Tailwind CSS v4 (CSS-first
config in `app/globals.css`) · shadcn/ui (`components/ui/*`) · lucide-react
icons · framer-motion. **No new dependencies without strong justification.**

## Golden rules

1. **Static-first.** Never call `cookies()`/`headers()` in a layout or page.
   Locale resolves client-side via `useT()` (`lib/i18n/use-locale.ts`).
   Dynamic segments use `generateStaticParams`.
2. **Next 16 conventions:** `params` is a Promise — `const { slug } = await params`.
   Check `node_modules/next/dist/docs/` when unsure of any API.
3. **No PII, ever.** No accounts, no names, no emails, no tracking, no
   analytics beacons. Progress lives in localStorage (`lib/progress/*`).
4. **Accessibility is a feature, not a garnish:** semantic landmarks,
   labeled controls, visible focus rings, `prefers-reduced-motion` respected,
   color contrast ≥ 4.5:1, hit targets ≥ 40px.
5. **Design tokens live in `app/globals.css`** (warm cream `--background`,
   tangerine `--primary`, `sun-*` brand ramp, `teal`, `plum`, `leaf`, `berry`).
   Do not introduce new hex values — compose tokens.
6. **Typography:** headings use `font-display` (Nunito), body uses `font-sans`
   (Inter). Rounded cards (`rounded-2xl/3xl`), `shadow-warm` elevation.
7. **Every interactive element a test needs carries `data-testid`.**

## Where things live

- `content/lessons/<lang>/<slug>.ts` — lesson data (schema:
  `lib/content/types.ts`; reference: `content/lessons/en/maya-and-the-river-bridge.ts`).
  Register new packs in `lib/content/index.ts`.
- `lib/content/*` — lesson registry, levels, validation.
- `lib/progress/*` — localStorage progress store + React hooks.
- `lib/gamification.ts` — XP, ranks, achievements.
- `lib/adaptive.ts` — adaptive reading level engine.
- `lib/llm/*` — provider-agnostic tutor: OpenAI-compatible provider +
  deterministic offline fallback. API: `POST /api/explain`.
- `lib/i18n/*` — locale config + EN/ES dictionaries. Add UI strings to BOTH
  `dictionaries/en.ts` and `dictionaries/es.ts`.
- `lib/supabase/client.ts` — OPTIONAL anonymous analytics; app works without it.

## Content quality bar

Stories: warm, globally resonant, dignity-first (no stereotypes, no
"poverty porn"). Questions: 4–6 per lesson, each option has a `rationale`,
`explanation` is kind and specific, glossary pre-teaches 3–5 words,
`teachingNotes` gives teachers discussion + writing prompts.

## Checks before you call anything done

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build       # full production build
```
