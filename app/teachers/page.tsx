import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  Compass,
  FileText,
  HeartHandshake,
  Languages,
  Library,
  Lightbulb,
  ListOrdered,
  MonitorSmartphone,
  PenLine,
  Save,
  Search,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { CtaBand } from "@/components/info/cta-band";
import { ExternalLink } from "@/components/info/external-link";
import { FactCard } from "@/components/info/fact-card";
import { InfoHero } from "@/components/info/info-hero";
import { SectionHeading } from "@/components/info/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { READING_LEVELS } from "@/lib/content/levels";
import {
  COMPREHENSION_SKILL_LABELS,
  type ComprehensionSkill,
} from "@/lib/content/types";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "OpenBridge for teachers",
  description:
    "A practical classroom guide to shared-device reading rotations, six comprehension skills, five reading levels, private progress, and free lessons.",
};

const skills = [
  {
    id: "literal",
    description:
      "Locate a detail that the story says directly, then point back to the words that prove it.",
    icon: Search,
  },
  {
    id: "inference",
    description:
      "Combine story clues with sensible thinking to understand a feeling, motive, or idea that is not spelled out.",
    icon: Lightbulb,
  },
  {
    id: "vocabulary",
    description:
      "Use the sentence and nearby clues to work out what an unfamiliar word means.",
    icon: BookOpen,
  },
  {
    id: "main-idea",
    description:
      "Step back from the details and explain what the whole story is mostly about.",
    icon: FileText,
  },
  {
    id: "sequence",
    description:
      "Put events in order and notice how one event leads to the next.",
    icon: ListOrdered,
  },
  {
    id: "prediction",
    description:
      "Make a thoughtful guess about what could happen next, using evidence rather than random guessing.",
    icon: Compass,
  },
] satisfies Array<{
  id: ComprehensionSkill;
  description: string;
  icon: LucideIcon;
}>;

const lessonParts = [
  {
    title: "A complete short story",
    description:
      "A warm, dignity-first reading adventure with short paragraphs and an estimated reading time.",
    icon: BookOpen,
  },
  {
    title: "A glossary that comes before confusion",
    description:
      "Three to five useful word helpers introduce harder vocabulary in child-friendly language.",
    icon: Search,
  },
  {
    title: "Four to six comprehension questions",
    description:
      "Questions practise named reading skills, with three or four answer choices and a clear correct answer.",
    icon: CircleHelp,
  },
  {
    title: "Kind explanations for wrong answers",
    description:
      "Every answer choice has author-written feedback. The deterministic tutor works without an AI key or an outside AI service.",
    icon: HeartHandshake,
  },
  {
    title: "Teaching notes for real follow-up",
    description:
      "Each lesson includes teachingNotes with skills to revisit, discussion questions, and a writing prompt for pair or whole-class work.",
    icon: PenLine,
  },
];

const classroomPrivacy = [
  "No accounts, passwords, names, email addresses, or other child profiles to set up.",
  "Reading progress stays in the browser on that device; OpenBridge does not assemble a central student database.",
  "Dashboard → Clear my data removes the reading history stored by the app in that browser.",
  "The browser’s optional AI request contains only the lesson slug, question ID, chosen answer index, and language—never student information.",
  "A configured AI provider also receives the public story excerpt and answer notes needed to explain that choice, but no identity or progress record. The built-in tutor works without it.",
];

const faqs: Array<{ question: string; answer: ReactNode }> = [
  {
    question: "Is it really free?",
    answer: (
      <>
        Yes. The software and lessons are open source under the {siteConfig.license}{" "}
        license, with no accounts, subscriptions, ads, or in-app purchases. You supply
        the devices and connectivity. Hosting or an optional AI provider can cost an
        organization money, but the complete deterministic tutor needs no paid AI
        service.
      </>
    ),
  },
  {
    question: "Do students need internet access?",
    answer: (
      <>
        You need a connection to load the hosted site. The lessons and their
        author-written feedback do not depend on an outside AI service, and an
        organization can self-host OpenBridge on a local network. A fully installable
        offline/PWA experience is on the roadmap, so do not assume a hosted session
        will keep working after you disconnect.
      </>
    ),
  },
  {
    question: "Which languages are available?",
    answer: (
      <>
        English and Spanish lessons are already in the project, and the interface can
        switch between English and Spanish. More languages are wanted. Community
        translators can add a language pack and adapt stories to their own readers
        rather than simply translating word for word.
      </>
    ),
  },
  {
    question: "Does OpenBridge replace a teacher?",
    answer: (
      <>
        No. It gives children repeated, low-pressure practice and gives you a starting
        point for conversation. You still choose the text, listen to reading, notice
        misconceptions, and provide the encouragement and cultural context that no
        software can replace.
      </>
    ),
  },
  {
    question: "How do I report a problem with a story?",
    answer: (
      <>
        Open an issue on{" "}
        <ExternalLink href={siteConfig.issuesUrl}>the project’s issue tracker</ExternalLink>.
        Include the story title, language, question, and what seemed unclear or
        unsuitable. Please never include a child’s name, photograph, or personal
        details.
      </>
    ),
  },
];

export default function TeachersPage() {
  return (
    <>
      <InfoHero
        eyebrow="For teachers, librarians & NGOs"
        title="Bring OpenBridge to your classroom"
        description="OpenBridge is a free, open-source reading tutor with short stories, word help, and kind comprehension practice. It runs in a browser with no accounts, ads, or tracking, so one small set of shared devices can welcome many young readers."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full bg-foreground px-5 font-bold text-background hover:bg-foreground/90"
          >
            <Link href="/learn">
              Explore the stories
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-5 font-bold"
          >
            <Link href="/privacy">Read the plain-language privacy guide</Link>
          </Button>
        </div>
      </InfoHero>

      <div className="space-y-20 py-16 sm:space-y-24 sm:py-20">
        <section
          aria-labelledby="classroom-use-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="classroom-use-title"
            eyebrow="Start with what you have"
            title="Using it in class"
            description="No roster upload, training course, or device-management project. Open a browser, choose a story, and make the rotation fit your room."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard icon={MonitorSmartphone} title="Any shared device">
              OpenBridge works in a modern browser on a phone, tablet, laptop, or
              desktop. Guest mode is simply the default: no logins, invitations, or
              classroom setup.
            </FactCard>
            <FactCard icon={Save} title="Progress is per device">
              Each browser keeps its own reading level, attempts, badges, and streaks.
              On a shared device, reuse the same browser for the same child or consistent
              group; switching devices starts a different journey.
            </FactCard>
            <FactCard icon={Library} title="Made for flexible spaces">
              Use a story in a reading corner, homework club, library session, community
              centre, or at home. A short lesson fits between other activities.
            </FactCard>
            <FactCard icon={Users} title="Read in pairs or trios">
              Two or three children can share one device. Let them take turns reading,
              explain a choice before tapping, and discuss the feedback together.
            </FactCard>
          </div>

          <Card className="mt-6 gap-0 rounded-3xl bg-secondary/60 p-6 shadow-warm ring-1 ring-border/70 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <Badge variant="secondary" className="h-auto px-3 py-1.5 font-bold">
                  A realistic shared-tablet plan
                </Badge>
                <h3 className="font-display mt-4 text-2xl font-extrabold">
                  40 children. 5 tablets. One hour.
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Run four 15-minute reading rounds with ten children at a time—two
                  children per tablet. While one pair reads, the rest can do independent
                  reading or that lesson’s writing prompt, then rotate.
                </p>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {[
                  "Choose one story and preview its glossary and teaching notes.",
                  "Put two children at each tablet: one reads, one thinks; swap often.",
                  "Keep the same child or pair on the same numbered device when individual progress matters.",
                  "Finish with the discussion prompt. Clear local progress before lending the device to a new group.",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-2xl bg-card p-4 ring-1 ring-border/60"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background"
                    >
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Card>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            <strong className="font-semibold text-foreground">A useful limitation:</strong>{" "}
            shared-device progress belongs to everyone using that browser, not to named
            individuals. Use it as a group practice signal, not as a formal assessment.
          </p>
        </section>

        <section
          aria-labelledby="skills-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="skills-title"
            eyebrow="The curriculum"
            title="What students learn"
            description="Every question practises one of six understandable comprehension skills. These are the same labels used throughout the lesson library."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ id, description, icon }) => (
              <FactCard
                key={id}
                icon={icon}
                title={COMPREHENSION_SKILL_LABELS[id].en}
              >
                {description}
              </FactCard>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display text-balance text-2xl font-extrabold sm:text-3xl">
              Five levels, one gentle next step
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
              Children begin with a comfortable recommendation and move through the
              levels at their own pace. Level names describe a reading journey—not a
              child’s ability or worth.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {([1, 2, 3, 4, 5] as const).map((level) => {
                const info = READING_LEVELS[level];
                return (
                  <Card
                    key={level}
                    className="h-full gap-3 rounded-3xl p-5 shadow-warm ring-1 ring-border/70"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-3xl" aria-hidden="true">
                        {info.emoji}
                      </span>
                      <Badge variant="outline" className="h-auto px-2.5 py-1">
                        Level {level}
                      </Badge>
                    </div>
                    <h4 className="font-display text-xl font-bold">{info.name.en}</h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {info.blurb.en}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="mt-8 gap-6 rounded-3xl p-6 shadow-warm ring-1 ring-border/70 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="font-display text-2xl font-extrabold">
                  The adaptive engine is explainable, not mysterious
                </h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex gap-3">
                    <Check className="mt-1 size-5 shrink-0" aria-hidden="true" />
                    <span className="leading-7">
                      <strong>80% or higher:</strong> move up one level, up to Level 5.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-1 size-5 shrink-0" aria-hidden="true" />
                    <span className="leading-7">
                      <strong>A repeat score of 35–49%, or any score below 35%:</strong>{" "}
                      move down one level, never below Level 1, to consolidate.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-1 size-5 shrink-0" aria-hidden="true" />
                    <span className="leading-7">
                      <strong>Every other result:</strong> stay at the current level and
                      keep practising.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-secondary/70 p-5">
                <HeartHandshake className="size-7" aria-hidden="true" />
                <h4 className="font-display mt-4 text-xl font-bold">
                  Support, never punishment
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  A level change simply chooses a more suitable next challenge. Wrong
                  answers receive a warm explanation and an invitation to look again—not
                  shame, a public ranking, or a locked path.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section
          aria-labelledby="lesson-includes-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="lesson-includes-title"
            eyebrow="Ready for a complete mini-lesson"
            title="Every lesson includes"
            description="The reading and the follow-up live together, so you can move from independent practice into discussion and writing without searching for another worksheet."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lessonParts.map(({ title, description, icon }) => (
              <FactCard key={title} icon={icon} title={title}>
                {description}
              </FactCard>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="classroom-privacy-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <Card className="gap-0 overflow-hidden rounded-3xl bg-secondary/50 p-6 shadow-warm ring-1 ring-border/70 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-card shadow-warm">
                  <ShieldCheck className="size-6" aria-hidden="true" />
                </div>
                <h2
                  id="classroom-privacy-title"
                  className="font-display mt-5 text-balance text-3xl font-extrabold"
                >
                  Privacy for classrooms
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Children can learn without first becoming a record in someone else’s
                  database. That is the default, not a paid privacy tier.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="mt-6 h-11 rounded-full px-5 font-bold"
                >
                  <Link href="/privacy">
                    See exactly what is—and is not—stored
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div>
                <ul className="space-y-4">
                  {classroomPrivacy.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-card">
                        <Check className="size-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-card p-5 ring-1 ring-border/60">
                  <h3 className="font-display text-lg font-bold">
                    A note for COPPA and GDPR-K planning
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Because core OpenBridge does not collect children’s personal data,
                    there is no central child-profile database to breach, export, or hand
                    over. Your school or NGO should still review its own hosting,
                    network, optional AI provider, and local legal duties before rollout;
                    this guidance is not legal advice.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section
          aria-labelledby="contribute-stories-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeading
                id="contribute-stories-title"
                eyebrow="Made with communities"
                title="Help build more stories"
                description="The best story for your learners may be the one your community writes. Lessons are plain, type-checked TypeScript files—no paid CMS or special publishing tool."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-full bg-foreground px-5 font-bold text-background hover:bg-foreground/90"
                >
                  <a href={siteConfig.repoUrl} target="_blank" rel="noreferrer">
                    <Code2 aria-hidden="true" />
                    Visit the repository
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="h-11 rounded-full px-5 font-bold"
                >
                  <a href={`${siteConfig.repoUrl}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer">
                    Read the contributor guide
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </Button>
              </div>
            </div>
            <Card className="gap-5 rounded-3xl p-6 shadow-warm ring-1 ring-border/70 sm:p-8">
              {[
                {
                  icon: Code2,
                  title: "Start with the authoring guide",
                  body: (
                    <>
                      Read{" "}
                      <ExternalLink href={`${siteConfig.repoUrl}/blob/main/AGENTS.md`}>
                        AGENTS.md
                      </ExternalLink>{" "}
                      for the content contract, accessibility rules, and pull-request
                      conventions.
                    </>
                  ),
                },
                {
                  icon: BookOpen,
                  title: "Copy the quality, not just the format",
                  body: (
                    <>
                      Use the{" "}
                      <ExternalLink
                        href={`${siteConfig.repoUrl}/blob/main/content/lessons/en/maya-and-the-river-bridge.ts`}
                      >
                        Maya and the River Bridge sample lesson
                      </ExternalLink>{" "}
                      as the reference for glossary terms, kind rationales, questions,
                      and teachingNotes.
                    </>
                  ),
                },
                {
                  icon: Languages,
                  title: "Bring your language and context",
                  body: (
                    <>
                      Spanish lessons already sit alongside English ones. New language
                      packs and locally meaningful stories are especially welcome; open a
                      discussion before a large translation effort so others can join in.
                    </>
                  ),
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{title}</h3>
                    <div className="mt-1.5 text-sm leading-7 text-muted-foreground">
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </section>

        <section
          aria-labelledby="teacher-faq-title"
          className="mx-auto w-full max-w-4xl px-4 sm:px-6"
        >
          <SectionHeading
            id="teacher-faq-title"
            eyebrow="Before the first session"
            title="Questions teachers ask"
            align="center"
          />
          <div className="mt-9 space-y-3">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={question}
                className="group rounded-2xl bg-card px-5 shadow-warm ring-1 ring-border/70 sm:px-6"
              >
                <summary
                  data-testid={`teacher-faq-${index + 1}`}
                  className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-xl py-4 text-left font-display text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-details-marker]:hidden"
                >
                  {question}
                  <ChevronDown
                    className="size-5 shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="pb-6 pr-2 text-base leading-8 text-muted-foreground sm:pr-10">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <CtaBand
          id="teacher-cta-title"
          title="Try a story now — it takes 5 minutes"
          description="Preview the experience exactly as a child will see it. There is nothing to install and no account to create."
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-5 font-bold"
          >
            <Link href="/learn">
              <BookOpen aria-hidden="true" />
              Choose a story
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </CtaBand>
      </div>
    </>
  );
}
