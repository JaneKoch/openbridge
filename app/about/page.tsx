import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Braces,
  Code2,
  Eye,
  Globe2,
  GraduationCap,
  Languages,
  Library,
  LockKeyhole,
  PenLine,
  Share2,
  ShieldCheck,
  Users,
  WifiOff,
} from "lucide-react";
import { CtaBand } from "@/components/info/cta-band";
import { ExternalLink } from "@/components/info/external-link";
import { FactCard } from "@/components/info/fact-card";
import { InfoHero } from "@/components/info/info-hero";
import { SectionHeading } from "@/components/info/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About OpenBridge",
  description:
    "Why OpenBridge builds free, open-source, privacy-first reading tools—and how educators, authors, translators, and developers can help.",
};

const roadmap = [
  {
    label: "Growing",
    title: "More languages",
    description:
      "English and Spanish are the beginning. We want community-led language packs and stories that feel familiar to the children reading them.",
    icon: Languages,
  },
  {
    label: "Always",
    title: "More stories",
    description:
      "More warm, culturally thoughtful lessons across all five levels, with the same careful questions, glossaries, and teaching notes.",
    icon: Library,
  },
  {
    label: "Planned",
    title: "Offline and installable",
    description:
      "A full offline/PWA mode so a reading corner can keep going through unreliable connectivity and devices can open OpenBridge like an app.",
    icon: WifiOff,
  },
  {
    label: "Opt-in only",
    title: "Anonymous classroom sync",
    description:
      "A future option for organizations that explicitly want anonymous, aggregate progress analytics—not named student records. Local-first reading will remain available without it.",
    icon: Users,
  },
];

const waysToHelp = [
  {
    title: "Build and review code",
    description:
      "Improve accessibility, performance, offline support, or the tutor. Small fixes and thoughtful reviews are valuable contributions.",
    icon: Code2,
  },
  {
    title: "Write a reading adventure",
    description:
      "Create a short story with a useful glossary, careful questions, kind answer feedback, and prompts teachers can really use.",
    icon: PenLine,
  },
  {
    title: "Translate with local insight",
    description:
      "Adapt words, names, places, and examples so a story feels natural—not merely translated—while preserving its reading level.",
    icon: Languages,
  },
  {
    title: "Share it with an educator",
    description:
      "Show OpenBridge to a teacher, librarian, reading club, or NGO. Five minutes of honest classroom feedback can guide the next improvement.",
    icon: Share2,
  },
];

export default function AboutPage() {
  return (
    <>
      <InfoHero
        eyebrow="Our mission & the project"
        title="A free bridge into reading, built for every child"
        description="OpenBridge helps children build reading confidence through short stories and thoughtful practice. It is open source and private by design because access to learning should not depend on money, an account, or personal data."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full bg-foreground px-5 font-bold text-background hover:bg-foreground/90"
          >
            <Link href="/learn">
              Start reading
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-5 font-bold"
          >
            <Link href="/teachers">See the classroom guide</Link>
          </Button>
        </div>
      </InfoHero>

      <div className="space-y-20 py-16 sm:space-y-24 sm:py-20">
        <section
          aria-labelledby="mission-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                id="mission-title"
                eyebrow="Why literacy"
                title="Reading opens every other door"
                description="A child who can read and understand can follow a science lesson, question a label, apply for an opportunity, and keep learning independently. Literacy is not a magic cure for poverty, but it is a foundation for education, work, health, participation, and choice."
              />
              <p className="mt-5 leading-7 text-muted-foreground">
                UNESCO connects literacy with the right to education, expanded life
                opportunities, and reduced poverty. OpenBridge focuses on one practical
                part of that promise: giving every child more chances to read something
                engaging, think about it, and try again without shame.
              </p>
              <ExternalLink
                href="https://www.unesco.org/en/literacy"
                className="mt-5"
              >
                Explore UNESCO’s literacy work
              </ExternalLink>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <FactCard icon={GraduationCap} title="7 in 10 children">
                <p>
                  The World Bank reports that seven in ten children in low- and
                  middle-income countries cannot read or understand a simple paragraph by
                  age 10. This is known as <strong>learning poverty</strong>.
                </p>
                <ExternalLink
                  href="https://www.worldbank.org/en/topic/education"
                  className="mt-4 text-sm"
                >
                  World Bank education facts
                </ExternalLink>
              </FactCard>
              <FactCard icon={Globe2} title="739 million adults">
                <p>
                  UNESCO’s Institute for Statistics estimated in 2025 that 739 million
                  adults still lacked basic literacy skills; two-thirds of them were
                  women. The need spans generations.
                </p>
                <ExternalLink
                  href="https://www.unesco.org/en/literacy"
                  className="mt-4 text-sm"
                >
                  UNESCO literacy facts
                </ExternalLink>
              </FactCard>
              <Card className="gap-3 rounded-3xl bg-secondary/60 p-6 shadow-warm ring-1 ring-border/70 sm:col-span-2">
                <BookOpen className="size-6" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold">
                  Small, repeated reading wins matter
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  A five-minute story will not solve an education system’s funding,
                  staffing, language, or access challenges. But a safe place to practise
                  can help a child come back tomorrow a little more willing—and a little
                  more able—to read.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="open-source-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="open-source-title"
            eyebrow="Why open source"
            title="A reading tool communities can own"
            description={`OpenBridge is released under the ${siteConfig.license} license. The lesson library, tutoring rules, interfaces, and privacy safeguards are all available to inspect and improve.`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FactCard icon={Braces} title="Adapt without permission">
              Self-host it, change the design, choose another compatible AI provider, or
              remove that provider entirely. Schools and NGOs are not locked into a
              vendor’s plan.
            </FactCard>
            <FactCard icon={Languages} title="Translate with ownership">
              Communities can create stories and interfaces that honour local languages
              and lived experience, then share them back for others to use.
            </FactCard>
            <FactCard icon={Eye} title="Trust by inspection">
              The adaptive thresholds are visible code, not a secret score. Privacy
              claims can be checked in the repository instead of accepted on faith.
            </FactCard>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-7 h-11 rounded-full px-5 font-bold"
          >
            <a href={siteConfig.repoUrl} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" />
              Read the code on GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Button>
        </section>

        <section
          aria-labelledby="privacy-first-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <Card className="gap-0 rounded-3xl bg-secondary/50 p-6 shadow-warm ring-1 ring-border/70 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <SectionHeading
                  id="privacy-first-title"
                  eyebrow="Why privacy-first"
                  title="Children’s data should never be a business model"
                  description="A reading history can reveal confidence, mistakes, routines, and difficulty. A child should not have to trade that information for a story. OpenBridge therefore asks for no account or identity and keeps progress on the device."
                />
                <p className="mt-5 leading-7 text-muted-foreground">
                  There are no ads, advertising identifiers, or behavioural analytics
                  beacons in the core app. Educational technology should serve the child
                  in front of the screen—not an advertising profile built behind it.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="mt-6 h-11 rounded-full px-5 font-bold"
                >
                  <Link href="/privacy">
                    <ShieldCheck aria-hidden="true" />
                    Read our plain-language privacy guide
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-3xl bg-card p-6 shadow-warm ring-1 ring-border/60 sm:p-8">
                <LockKeyhole className="size-8" aria-hidden="true" />
                <blockquote className="font-display mt-5 text-balance text-2xl font-extrabold leading-snug">
                  “The app needs to know what happened in the story—not who the child
                  is.”
                </blockquote>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Comprehension gets a score locally. Names, ages, addresses, and contact
                  details have no place in the lesson or its progress record.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section
          aria-labelledby="how-it-works-title"
          className="mx-auto w-full max-w-4xl px-4 sm:px-6"
        >
          <SectionHeading
            id="how-it-works-title"
            eyebrow="How it actually works"
            title="Human-authored lessons, transparent tutoring, optional AI"
            align="center"
          />
          <Card className="mt-9 gap-0 rounded-3xl p-6 shadow-warm ring-1 ring-border/70 sm:p-8">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Every lesson is a handcrafted collection of story text, glossary terms,
              comprehension questions, answer rationales, explanations, and teaching
              notes. Correct-answer scoring is straightforward, the deterministic tutor
              assembles warm feedback from those author-written notes, and visible rules
              adjust the next reading level. If the organization running OpenBridge
              configures an OpenAI-compatible provider, the server can ask it to phrase a
              richer explanation using public lesson context—not a child profile. If no
              provider is configured, or it fails, the built-in deterministic tutor still
              answers. AI does not invent the curriculum or guess a child’s grade.
            </p>
          </Card>
        </section>

        <section
          aria-labelledby="roadmap-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="roadmap-title"
            eyebrow="Where we are going"
            title="A roadmap with the same values"
            description="These are directions, not dated promises. Each one should make reading more available without making children more trackable."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map(({ label, title, description, icon: Icon }) => (
              <Card
                key={title}
                className="h-full gap-4 rounded-3xl p-6 shadow-warm ring-1 ring-border/70"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <Badge variant="outline" className="h-auto px-2.5 py-1">
                    {label}
                  </Badge>
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="help-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="help-title"
            eyebrow="Come as you are"
            title="There are many ways to help"
            description="You do not need to be an AI specialist. OpenBridge needs careful readers, listeners, writers, translators, testers, educators, and developers."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {waysToHelp.map(({ title, description, icon }) => (
              <FactCard key={title} icon={icon} title={title}>
                {description}
              </FactCard>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-11 rounded-full px-5 font-bold"
            >
              <Link href="/teachers">
                <PenLine aria-hidden="true" />
                Learn how to contribute a story
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-11 rounded-full px-5 font-bold"
            >
              <a href={siteConfig.issuesUrl} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" />
                Find something to work on
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
          </div>
        </section>

        <CtaBand
          id="about-cta-title"
          title="Every open story can become a bridge. Let’s build the next one together."
          description="Bring your code, your language, your classroom experience, or simply your enthusiasm. Children everywhere deserve reading tools built with them in mind."
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-5 font-bold"
          >
            <a href={siteConfig.repoUrl} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" />
              Join us on GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-5 font-bold"
          >
            <Link href="/teachers">
              For educators
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </CtaBand>
      </div>
    </>
  );
}
