# Contributing to OpenBridge

Thank you for helping. Everything in this repository is read by children —
the stories, the explanations, the buttons, the colors. That is the lens for
every decision here: would this make a seven-year-old feel smarter and kinder
about themselves? If yes, ship it.

There is room for every kind of contribution, and **writing stories and
translating are just as valuable as code** — arguably more, because content is
the product.

## Ways to help

| You enjoy… | Start here |
| --- | --- |
| Writing stories | [docs/CONTENT.md](docs/CONTENT.md) — the lesson authoring guide |
| Translating | The *Translating* section below + [docs/CONTENT.md](docs/CONTENT.md#adding-a-new-language-pack) |
| Coding | The *Code contributions* section below + [AGENTS.md](AGENTS.md) |
| Design & accessibility | The *Design principles* section below |

## Writing lessons — the quality bar

The full field-by-field guide is [docs/CONTENT.md](docs/CONTENT.md). The heart
of it is this:

- **Warm stories, dignity-first.** Globally resonant settings, capable child
  protagonists, no stereotypes, no pity. We write about children the way we
  would want our own written about.
- **Every answer option carries a `rationale`.** Wrong answers should be
  *tempting* — they should mirror a real reading mistake (a detail remembered
  wrongly, a plausible-but-unsupported guess). The rationale explains kindly
  why that option does or does not fit. This is not busywork: the offline
  tutor speaks these rationales verbatim to children.
- **Explanations that actually teach.** 1–3 sentences, warm, specific, and
  grounded in the story. Never "wrong" or "no" — always "here is what makes
  the right answer right."
- **A glossary that pre-teaches 3–5 harder words**, in kid-friendly language,
  before the child meets them in the story.
- **`teachingNotes` for the adults**: the skills a lesson covers, a discussion
  prompt, and a writing prompt, so a teacher can build a class around it.

The reference lesson is
[`content/lessons/en/maya-and-the-river-bridge.ts`](content/lessons/en/maya-and-the-river-bridge.ts) —
read it first, then write alongside it. Aim for 4–6 questions per lesson.

**Process:** read the guide → copy the minimal template → write → register the
lesson in [`lib/content/index.ts`](lib/content/index.ts) → run
`npm run verify` and `npm run e2e` (the suite validates lesson structure) →
open a PR. A maintainer will read your story as a child would, and review
with you.

## Translating

OpenBridge currently ships **English and Spanish**. Translation happens in
three layers:

1. **UI strings** live in `lib/i18n/dictionaries/en.ts` and `es.ts`. Whatever
   you add or change must land in **both dictionaries** — `es` is typed as
   the same shape as `en`, so TypeScript will hold you to it.
2. **Story packs** live in `content/lessons/<lang>/` — translated lessons are
   first-class content, not an afterthought.
3. **Kid-facing labels** — the comprehension-skill names and reading-level
   names children see — live in `COMPREHENSION_SKILL_LABELS` and
   `READING_LEVELS` (in `lib/content/types.ts` and `lib/content/levels.ts`).
   These deserve real care, not literal translation: "Word detective" should
   *feel* playful in every language.

To bring a whole new language to OpenBridge (UI + lessons + offline tutor
phrases), follow the checklist in
[docs/CONTENT.md](docs/CONTENT.md#adding-a-new-language-pack).

## Code contributions

- **Run `npm run verify` before every PR.** It chains `typecheck`, `lint`, and
  `build`. The same checks are available in the manual CI workflow.
- **No new dependencies without strong justification.** The app is
  deliberately tiny so it stays fast on old devices and slow networks.
- **No PII, ever.** No accounts, no names, no emails, no analytics beacons,
  no fingerprinting. Progress lives in localStorage (`lib/progress/*`).
- **Every interactive element a test needs carries `data-testid`.**
- If your change touches Next.js APIs, check `AGENTS.md` first — this project
  follows Next 16 conventions, which differ from older material you may have
  read.

## Design principles

These are the golden rules of this codebase, from [AGENTS.md](AGENTS.md):

1. **Static-first.** Never call `cookies()`/`headers()` in a layout or page;
   the locale resolves client-side. This keeps the app deployable anywhere,
   cheap or free.
2. **Accessibility is a feature, not a garnish.** Semantic landmarks, labeled
   controls, visible focus rings, `prefers-reduced-motion` respected, color
   contrast ≥ 4.5:1, hit targets ≥ 40px.
3. **Compose the existing design tokens** (`app/globals.css` — the warm cream,
   tangerine, `sun-*` ramp, teal, plum, leaf, berry). Do not introduce new
   hex values.
4. **Typography and warmth:** Nunito for headings, Inter for body, rounded
   cards, soft `shadow-warm` elevation. It should feel like a picture book,
   not a productivity app.

## Pull request etiquette

- **Small PRs win.** One story, one fix, one screen at a time is easier to
  review kindly and merge quickly.
- **Conventional commits**, e.g. `content: add "the-lantern-keeper" story`,
  `fix: guard localStorage reads in private mode`, `docs: explain Supabase
  setup`. Prefixes we use: `content`, `feat`, `fix`, `docs`, `test`, `chore`,
  `a11y`, `i18n`.
- **Describe the what and the why**, not just the diff. For content, tell us
  the heart of the story in one sentence.
- **Assume good intent** on both sides. Review feedback is about the work,
  never the person — and every reviewer is a volunteer too.
- **Be responsive.** If a PR stalls for a couple of weeks, a maintainer may
  politely close it with an invitation to reopen; that is bookkeeping, not
  rejection.

## Code of conduct

**Be kind. Children use this project.**

- Treat everyone with warmth and respect. Harassment, mockery, or
  belittling — of anyone, in any channel — is not welcome here.
- Critique work, never people. "This rationale feels tiring for a
  six-year-old" is helpful; "this is bad writing" is not.
- All content contributions must be **safe for children**: age-appropriate,
  dignity-first, free of stereotypes, and free of anything you would not read
  aloud in a classroom.
- When disagreements arise about content or priorities, the tiebreaker is
  always the same question: *what serves the children reading this?*

If you see conduct that violates this standard, raise it with a maintainer in
a GitHub issue or discussion, and it will be taken seriously.
