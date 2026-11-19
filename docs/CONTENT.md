# Writing stories for OpenBridge

Lessons in OpenBridge are plain TypeScript files — no CMS, no migrations, no
admin panel. That is deliberate: a volunteer with a text editor and a good
story can contribute at the same level as a core maintainer, TypeScript checks
the work as they write, and every lesson ships as part of the app bundle, so
lessons work without an external content service.

This guide covers everything you need to author a lesson that passes review.

- [The Lesson schema, field by field](#the-lesson-schema-field-by-field)
- [A minimal template](#a-minimal-template)
- [The quality bar](#the-quality-bar)
- [The six comprehension skills](#the-six-comprehension-skills)
- [Reading levels and what to aim for](#reading-levels-and-what-to-aim-for)
- [Registering your lesson](#registering-your-lesson)
- [Adding a new language pack](#adding-a-new-language-pack)
- [How lessons are validated](#how-lessons-are-validated)

The reference implementation for everything in this guide is
[`content/lessons/en/maya-and-the-river-bridge.ts`](../content/lessons/en/maya-and-the-river-bridge.ts).
When in doubt, open it and read alongside it.

---

## The Lesson schema, field by field

The contract lives in [`lib/content/types.ts`](../lib/content/types.ts). Every
lesson is a `Lesson` object with these fields:

| Field | Type | Notes |
| --- | --- | --- |
| `slug` | `string` | Kebab-case (`maya-and-the-river-bridge`). **Globally unique across all languages** — it identifies the lesson in progress data and analytics. |
| `language` | `"en" \| "es"` | Which language pack the lesson belongs to. |
| `level` | `1 \| 2 \| 3 \| 4 \| 5` | The reading level (see [levels](#reading-levels-and-what-to-aim-for)). |
| `title` | `string` | Shown on the library card. |
| `subtitle` | `string` | One warm line on the card ("A flood, a dream, and a village that builds together"). |
| `description` | `string` | 1–2 sentences describing the story, shown before starting. |
| `minutes` | `number` | Estimated reading minutes for the whole lesson (story + questions). Be honest; parents plan around it. |
| `emoji` | `string` | The cover — one emoji, no binary assets needed (`🌉`). |
| `palette` | `LessonPalette` | The card's decorative mood: `sunrise`, `meadow`, `ocean`, `forest`, `sunset`, or `cosmos`. Each maps to a warm gradient + soft background defined in `PALETTES`. |
| `story` | `object` | `story.title` (display title for the story itself) and `story.sections: string[]` — the paragraphs, kept short so they are comfortable on a small phone screen. |
| `glossary` | `GlossaryTerm[]` | 3–5 entries (`{ term, definition }`) pre-teaching the story's harder words. |
| `questions` | `ComprehensionQuestion[]` | 4–6 questions — see below, this is the heart of the lesson. |
| `teachingNotes` | `string` | A note for teachers and parents: skills covered, discussion prompts, a writing prompt, vocabulary focus. |

### Questions, options, and rationales

```ts
interface ComprehensionQuestion {
  id: string;              // stable, unique within the lesson: "q1", "q2", …
  skill: ComprehensionSkill;
  prompt: string;
  options: QuizOption[];  // 3–4 options
  correctIndex: number;   // 0-based index of the correct option
  explanation: string;    // warm, 1–3 sentences, why the correct answer is correct
}

interface QuizOption {
  text: string;
  rationale: string;      // kid-friendly reason why this option fits or doesn't
}
```

Two fields deserve special attention, because the tutoring engines read them:

- **`rationale` (per option).** The deterministic offline tutor *speaks these
  verbatim* to children when they pick a wrong answer, and the AI tutor uses
  them as grounding context. A good rationale explains why an option is
  tempting and why it does not hold up — kindly.
- **`explanation` (per question).** Used as the definitive "why the correct
  answer is correct," both offline (verbatim) and by the AI tutor (as
  grounding). One to three warm, specific sentences, tied to the story.

---

## A minimal template

This compiles and passes all validation as-is. Copy it, rename everything, and
make it yours:

```ts
import type { Lesson } from "@/lib/content/types";

/**
 * Level 1 · English — replace with your story.
 * Reference quality bar: content/lessons/en/maya-and-the-river-bridge.ts
 */
export const selaAndThePaperBoat: Lesson = {
  slug: "sela-and-the-paper-boat",
  language: "en",
  level: 1,
  title: "Sela and the Paper Boat",
  subtitle: "A rainy day, five little boats, and one shared secret",
  description:
    "When Toma wants a paper boat of his own, Sela teaches him fold by fold.",
  minutes: 3,
  emoji: "⛵",
  palette: "ocean",
  story: {
    title: "Sela and the Paper Boat",
    sections: [
      "Sela lived near a big puddle that appeared after every rain. One gray morning she folded a paper boat and set it on the water. \u201cSail far,\u201d she whispered. The boat spun in a slow circle, and Sela laughed.",
      "She folded a second boat, then a third. Soon five paper boats were sailing in a line, bumping noses like ducklings. Her little brother, Toma, watched from the steps. He wanted a boat too, but he did not know how to fold one.",
      "Sela sat beside him and showed him, fold by fold, slow and patient. When Toma\u2019s boat finally sailed, it wobbled, spun, and joined the line. \u201cSail far,\u201d Toma whispered, in exactly the same voice. Sela smiled.",
    ],
  },
  glossary: [
    {
      term: "puddle",
      definition: "a small pool of water that collects after rain",
    },
    {
      term: "folded",
      definition: "bent paper over onto itself to make a shape",
    },
    {
      term: "wobbled",
      definition: "shook from side to side, almost falling over",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "What did Sela make after the rain?",
      options: [
        {
          text: "A paper boat",
          rationale:
            "The story says Sela folded a paper boat and set it on the water.",
        },
        {
          text: "A paper kite",
          rationale:
            "Kites fly in the sky, but everything Sela made sailed on the puddle.",
        },
        {
          text: "A wooden duck",
          rationale:
            "The boats bump noses \u201clike ducklings\u201d — that is a comparison, not a real duck.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Sela folded paper into a boat and set it on the puddle to sail.",
    },
    {
      id: "q2",
      skill: "vocabulary",
      prompt: "In this story, what is a puddle?",
      options: [
        {
          text: "A small pool of water",
          rationale:
            "A puddle is a small pool of water that collects after rain — just big enough for paper boats.",
        },
        {
          text: "A big ocean",
          rationale:
            "An ocean is enormous; this puddle appeared after a single rain.",
        },
        {
          text: "A paper boat",
          rationale:
            "The boat sails \u201con\u201d the puddle, so the puddle cannot be the boat itself.",
        },
      ],
      correctIndex: 0,
      explanation:
        "A puddle is a small, shallow pool of water that appears after it rains.",
    },
    {
      id: "q3",
      skill: "inference",
      prompt: "How did Sela most likely feel while teaching Toma?",
      options: [
        {
          text: "Patient and happy to share",
          rationale:
            "She sits beside him, shows him fold by fold, and smiles when his boat sails.",
        },
        {
          text: "Angry that he wanted a boat",
          rationale:
            "Nothing in the story shows anger — Sela helps him right away.",
        },
        {
          text: "Too busy to help",
          rationale:
            "Sela stops her own play to sit with Toma, so she is not too busy.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Sela sits beside Toma and teaches him slowly, and she smiles at the end — she enjoys sharing what she knows.",
    },
    {
      id: "q4",
      skill: "main-idea",
      prompt: "What is this story mostly about?",
      options: [
        {
          text: "A girl who shares what she knows with her brother",
          rationale:
            "From her boats to her whispered words, the story centers on Sela sharing with Toma.",
        },
        {
          text: "Five boats that sank in the rain",
          rationale:
            "The boats sail happily in a line — nothing sinks in this story.",
        },
        {
          text: "A rainy day that was too wet for playing",
          rationale:
            "Far from spoiled, the rainy day is what makes the puddle and the play possible.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Sela\u2019s play becomes sweeter when she teaches Toma to fold his own boat — the story is about sharing what you know.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, vocabulary in context, inference, main idea. Discussion: what is something you know how to make, and who could you teach it to? Vocabulary focus: puddle, folded, wobbled. Writing prompt: \u201cIf I folded a paper boat, it would sail to\u2026\u201d",
};
```

Note that `correctIndex` does not have to be `0` — put the correct option
wherever it reads most naturally, and vary its position across questions so
attentive children can't game the pattern.

---

## The quality bar

### Story voice

Warm, globally resonant, **dignity-first**. Children as capable protagonists.
Concrete sensory detail over abstraction. No stereotypes, no pity narratives,
no settings used as props — write about a place the way someone who loves it
would. Sentences a child can read aloud in one breath.

### Option rationales: why the wrong answers are tempting

A wrong answer should mirror a *real reading mistake* — a detail remembered
slightly wrong, a plausible-but-unsupported guess, a word taken literally.
Then the rationale honors the mistake and unwinds it kindly. Compare:

- ❌ `"No, that is incorrect. The bridge was destroyed."` — cold, and teaches nothing.
- ✅ `"The storm frightens Maya, but her fear is only one small moment — the story is about much more than that."`

A quick test: cover the correct option with your hand. Do the remaining
options each sound like something a thoughtful child might genuinely pick?
If an option is so silly no one would choose it, rewrite it or cut it.

### Explanations that actually teach

One to three sentences. Kind, specific, and grounded in the story's own
words. Explain *why*, not just *which*: the child should finish the
explanation a slightly better reader than they started. Remember this text
is used verbatim by the offline tutor and as the AI tutor's grounding — you
are writing the voice of OpenBridge.

### The glossary: pre-teach, don't just define

Pick 3–5 words a child at that level will stumble on, and define them in
kid-friendly language (see the template's `puddle`/`wobbled` above). The
glossary shows before the story, so hard words become friends instead of
walls.

### teachingNotes: hand the story to teachers

One paragraph a teacher can act on: the skills covered, a discussion prompt,
the vocabulary focus, and a writing prompt. This is what turns one lesson
into a classroom hour.

---

## The six comprehension skills

Every question carries a `skill`. These are the labels children see (from
`COMPREHENSION_SKILL_LABELS`), and what each one actually measures:

| Skill | Child-facing label (EN) | It measures… | Prompt shape |
| --- | --- | --- | --- |
| `literal` | Find it in the story | Facts stated directly in the text | "What happened to the old wooden bridge during the storm?" |
| `inference` | Read between the lines | Feelings, motives, and causes the text implies | "How did Maya most likely feel when she saw the bridge was gone?" |
| `vocabulary` | Word detective | Word meaning in context | "In this story, what is a mason?" |
| `main-idea` | Big idea | What the story is mostly about | "What is this story mostly about?" |
| `sequence` | What happened when | Order of events | "What happened right after the rain stopped?" |
| `prediction` | What comes next | Reasoned guessing beyond the text | "What will Maya most likely do next?" |

A lesson doesn't need all six — the reference lesson uses five across five
questions. Do mix: two literal questions in a row is a quiz; a spread of
skills is a tutor.

---

## Reading levels and what to aim for

Levels are defined in [`lib/content/levels.ts`](../lib/content/levels.ts),
each with a bilingual name and blurb shown to children:

| Level | Name | Aim for… | Sentence feel |
| --- | --- | --- | --- |
| 1 | 🌱 Sprout | ~120–250 story words | Up to ~8 words per sentence; everyday words; gentle adventures |
| 2 | 🔍 Seeker | ~250–450 story words | Up to ~12 words per sentence; vivid pictures-in-words; kind characters |
| 3 | 🧭 Explorer | ~450–700 story words | Up to ~15 words; new vocabulary and surprises |
| 4 | ⛵ Navigator | ~600–900 story words | Layered plots, cause and effect, thinking between the lines |
| 5 | 🚀 Voyager | ~800–1,200 story words | Themes and motives, richer language, confident readers |

These are **editorial targets, not hard limits** — validation checks
structure, not word counts. The reference lesson sits comfortably inside the
level 2 target. The field-tested rule for sentence length: read a paragraph
aloud; if you run out of breath, the sentence needs a full stop.

A child's level also moves adaptively: strong lessons move them up, hard
lessons move them gently back (see `lib/adaptive.ts`). Honest `level`
authoring is what keeps that engine trustworthy.

---

## Registering your lesson

Lessons live in `content/lessons/<lang>/` and are grouped into **pack index
files**, which `lib/content/index.ts` pulls together:

1. Create your lesson file, e.g. `content/lessons/en/my-story.ts`, exporting
   a `Lesson`.
2. Open the matching pack index for the level range, e.g.
   [`content/lessons/en/level-1-2/index.ts`](../content/lessons/en/level-1-2/index.ts),
   and add it to the exported array:

   ```ts
   import { myStory } from "../my-story";

   export const lessonsLevel1to2En: Lesson[] = [
     theLittleRedBoat,
     benAndTheBumblebee,
     theMoonGarden,
     myStory, // ← your lesson, registered
   ];
   ```

3. If your lesson sits outside an existing pack (like the flagship lesson),
   import it directly into `allLessons` in
   [`lib/content/index.ts`](../lib/content/index.ts).

The registry order is the library's browsing order, so place your lesson
where it reads naturally — level packs are ordered from gentle to stretchy.

---

## Adding a new language pack

OpenBridge ships English and Spanish today. A new language is a real,
multi-step contribution — the checklist below is every touch point in the
codebase, so nothing is missed. Open a "new language: X" issue first so we
can coordinate with you.

1. **Lesson pack** — create `content/lessons/<lang>/` with lesson files and
   an `index.ts` exporting the pack array (pattern:
   [`content/lessons/es/index.ts`](../content/lessons/es/index.ts)), then
   spread it into `allLessons` in `lib/content/index.ts`.
2. **`LessonLanguage`** — extend the union in `lib/content/types.ts`.
3. **Skill labels** — extend every entry of `COMPREHENSION_SKILL_LABELS`
   (`lib/content/types.ts`) with the new locale. Translate the *spirit*: the
   labels should feel playful, not literal.
4. **Level names and blurbs** — extend `READING_LEVELS` in
   `lib/content/levels.ts`.
5. **Locale config** — add the code to `locales` and its native name to
   `localeNativeNames` in `lib/i18n/config.ts` (the name written in its own
   language, so a child can always find it in the switcher).
6. **UI dictionary** — create `lib/i18n/dictionaries/<lang>.ts` typed against
   the `Dictionary` shape (it mirrors `en.ts` exactly) and register it in
   `lib/i18n/index.ts`.
7. **Offline tutor voice** — add `OPENERS` and `CLOSERS` in
   `lib/llm/fallback.ts` so the deterministic tutor speaks warmly in the new
   language too.
8. **API locale enum** — extend the `locale` enum in the request schema in
   `app/api/explain/route.ts` so `/api/explain` accepts it.

Then run `npm run verify` and `npm run e2e`, and open your PR.

For translating the *existing* interface and lessons (EN ↔ ES), see
[CONTRIBUTING.md](../CONTRIBUTING.md#translating) — dictionaries must always
be updated together, since TypeScript enforces that they stay in sync.

---

## How lessons are validated

Three layers keep content quality from regressing:

1. **TypeScript** — `npm run typecheck`. The `Lesson` interface catches
   missing or misspelled fields, wrong levels, and invalid skills at compile
   time, inside your editor.
2. **Structural validation** — `validateLessons()` in
   [`lib/content/index.ts`](../lib/content/index.ts) runs over every
   registered lesson as part of the content test in the e2e suite
   (`npm run e2e`). It checks for:
   - duplicate slugs (they collide across progress data and analytics),
   - stories with no sections,
   - fewer than 4 questions,
   - questions with fewer than 3 or more than 4 options,
   - a `correctIndex` outside the option range,
   - explanations shorter than 20 characters.
3. **Human review** — a maintainer reads your story the way a child would,
   against the quality bar above. This is the layer that keeps OpenBridge
   warm.

Before opening any content PR, run:

```bash
npm run verify   # typecheck + lint + build
npm run e2e      # includes lesson validation
```

The manual GitHub Actions workflow (`.github/workflows/ci.yml`) also runs these checks.
