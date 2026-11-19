import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CloudOff,
  Code2,
  Cookie,
  Eraser,
  FileCode2,
  HardDrive,
  Heart,
  MonitorSmartphone,
  Network,
  School,
  Sparkles,
  Trash2,
  X,
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
  title: "Privacy in plain language",
  description:
    "How OpenBridge works without accounts or child profiles, what reading progress stays on your device, what optional AI requests contain, and how to erase local data.",
};

const notCollected = [
  {
    title: "Accounts and passwords",
    description: "No sign-up, login, username, password, or user ID.",
  },
  {
    title: "Names and contact details",
    description: "No real name, email address, phone number, or contact form identity.",
  },
  {
    title: "Age or birthday",
    description: "No date of birth or age field. A reading level is not an age or a label for a child.",
  },
  {
    title: "Location details",
    description: "No address, GPS permission, location history, or location field in reading progress.",
  },
  {
    title: "Behavioural analytics",
    description: "No analytics beacons, advertising pixels, cross-site trackers, or engagement profiles in the core app.",
  },
  {
    title: "Advertising identifiers",
    description: "No ad networks, ad targeting, data brokers, or sale of personal information.",
  },
  {
    title: "Children’s free-form writing",
    description: "Questions use prewritten answer choices. Children are not asked to send stories, messages, or other personal writing to OpenBridge.",
  },
  {
    title: "Device contacts or media",
    description: "No access to your contacts, photo library, camera, or microphone is needed for reading.",
  },
];

const aiRequestFields = ["lessonSlug", "questionId", "answerIndex", "locale"];

export default function PrivacyPage() {
  return (
    <>
      <InfoHero
        eyebrow="Privacy in plain language"
        title="Children can read without being followed"
        description="OpenBridge keeps reading progress on the device and asks for no name, account, or personal profile. This guide explains exactly what stays with you, what an optional AI request contains, and how to erase your data."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full bg-foreground px-5 font-bold text-background hover:bg-foreground/90"
          >
            <Link href="/dashboard">
              <Trash2 aria-hidden="true" />
              Go to data controls
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-5 font-bold"
          >
            <a href={siteConfig.repoUrl} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" />
              Inspect the source code
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Button>
        </div>
      </InfoHero>

      <div className="space-y-20 py-16 sm:space-y-24 sm:py-20">
        <section
          aria-labelledby="not-collected-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="not-collected-title"
            eyebrow="The shortest possible data profile"
            title="What we don’t collect"
            description="The core tutor has no child sign-up and no hidden personal-data form. If information is not needed to read a story, it does not belong in the app."
          />
          <Card className="mt-10 gap-0 rounded-3xl p-6 shadow-warm ring-1 ring-border/70 sm:p-8">
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {notCollected.map(({ title, description }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <X className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section
          aria-labelledby="on-device-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="on-device-title"
            eyebrow="Local by default"
            title="What stays on the device"
            description="OpenBridge needs a little memory to make the next reading session feel continuous. That memory lives in your browser, not in a child account on our server."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <FactCard icon={HardDrive} title="Your reading journey">
              <p>
                Browser local storage holds lesson slugs, scores and attempts, the
                current reading level, XP, streaks, achievements, and activity dates.
                There is no name attached to this record.
              </p>
              <div className="mt-4 rounded-2xl bg-muted p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  localStorage key
                </span>
                <code className="mt-2 block break-all font-mono text-sm font-semibold text-foreground">
                  openbridge.progress.v1
                </code>
              </div>
              <p className="mt-4">
                On a shared device, everyone using the same browser shares this reading
                trail. Clearing browser storage or using another device starts a separate
                one. If storage is blocked, progress can remain in memory only and may be
                lost when the page closes.
              </p>
            </FactCard>
            <FactCard icon={Cookie} title="One small language cookie">
              <p>
                The language preference cookie contains only{" "}
                <code className="font-mono font-semibold text-foreground">en</code> or{" "}
                <code className="font-mono font-semibold text-foreground">es</code>. It
                cannot tell us who you are or what you read.
              </p>
              <div className="mt-4 rounded-2xl bg-muted p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Cookie name
                </span>
                <code className="mt-2 block break-all font-mono text-sm font-semibold text-foreground">
                  openbridge_locale
                </code>
              </div>
              <p className="mt-4">
                You can remove this preference through your browser’s cookie or site-data
                settings at any time.
              </p>
            </FactCard>
          </div>
        </section>

        <section
          aria-labelledby="optional-ai-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <SectionHeading
            id="optional-ai-title"
            eyebrow="Optional, limited, and replaceable"
            title="What the optional AI sees"
            description="OpenBridge already has warm, author-written explanations and never needs an AI key to tutor. An organization running its own deployment may configure an OpenAI-compatible provider for more varied wording."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <FactCard icon={MonitorSmartphone} title="1. The browser sends four fields">
              <p>
                For a wrong answer, the browser request to <code>/api/explain</code>{" "}
                contains only:
              </p>
              <ul className="mt-3 space-y-2">
                {aiRequestFields.map((field) => (
                  <li key={field} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                    <code className="font-mono text-sm font-semibold text-foreground">
                      {field}
                    </code>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                These identify the public lesson, question, selected answer number, and
                language. They do not identify the child.
              </p>
            </FactCard>
            <FactCard icon={FileCode2} title="2. The server finds the lesson">
              <p>
                The server looks up that public lesson locally. It adds the story excerpt
                (up to 1,400 characters), question and answer text, author-written
                rationales and explanation, comprehension skill, and language so a tutor
                can explain the choice accurately.
              </p>
              <p className="mt-3">
                This is published lesson content—not text the child wrote, a progress
                record, or a personal identifier. The application does not log the request
                body.
              </p>
            </FactCard>
            <FactCard icon={CloudOff} title="3. No AI? Reading still works">
              <p>
                With no provider configured, the deterministic tutor uses the same
                handcrafted feedback without calling an outside AI service. If a provider
                times out or fails, OpenBridge falls back to it automatically.
              </p>
              <p className="mt-3">
                A configured provider receives lesson context, never a name, account ID,
                email, age, address, or child profile. Its own retention policy is chosen
                by the organization running that deployment.
              </p>
            </FactCard>
          </div>
          <Card className="mt-5 gap-4 rounded-3xl bg-secondary/50 p-6 shadow-warm ring-1 ring-border/70 sm:p-7">
            <div className="flex gap-4">
              <Network className="mt-0.5 size-6 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-display text-xl font-bold">
                  A practical note about network connections
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Delivering any website involves technical connection data. To prevent
                  abuse, the explanation endpoint keeps the forwarded IP address and
                  lesson slug in a short-lived, in-memory rate-limit bucket using
                  one-minute windows; they are not saved in reading progress or included
                  in the AI prompt. A hosting platform may also keep standard network
                  logs, so each deploying organization should review its host’s policy.
                  OpenBridge does not turn this connection data into a child profile.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section
          aria-labelledby="erase-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <Card className="gap-0 rounded-3xl bg-secondary/50 p-6 shadow-warm ring-1 ring-border/70 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-card shadow-warm">
                  <Eraser className="size-6" aria-hidden="true" />
                </div>
                <h2
                  id="erase-title"
                  className="font-display mt-5 text-balance text-3xl font-extrabold"
                >
                  How to erase everything
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  You do not need to email anyone, prove your identity, or wait for an
                  account to be deleted. The main control is already on the device.
                </p>
              </div>
              <ol className="space-y-4">
                <li className="flex gap-4 rounded-2xl bg-card p-5 ring-1 ring-border/60">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground font-bold text-background">
                    1
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">
                      Open Dashboard → “Clear my data”
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      This deletes <code>openbridge.progress.v1</code> and resets all
                      locally saved lessons, scores, XP, streaks, achievements, and level
                      changes. Repeat it in each browser or device used for reading.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 rounded-2xl bg-card p-5 ring-1 ring-border/60">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground font-bold text-background">
                    2
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">
                      Clear site data to remove the language cookie too
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Use your browser’s site settings to clear OpenBridge cookies and
                      site data. This removes <code>openbridge_locale</code> as well as
                      any remaining local browser storage.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-7 h-11 rounded-full px-5 font-bold"
            >
              <Link href="/dashboard">
                Open my dashboard
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Card>
        </section>

        <aside
          aria-labelledby="kid-privacy-title"
          className="mx-auto w-full max-w-4xl px-4 sm:px-6"
        >
          <div className="rounded-3xl bg-sun-soft p-6 text-center shadow-warm ring-1 ring-border/70 sm:p-10">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-card shadow-warm">
              <Heart className="size-7" aria-hidden="true" />
            </div>
            <Badge variant="secondary" className="mt-5 h-auto px-3 py-1.5 font-bold">
              <Sparkles aria-hidden="true" />
              For young readers
            </Badge>
            <h2
              id="kid-privacy-title"
              className="font-display mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight sm:text-4xl"
            >
              Your reading progress stays in this browser.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/80">
              You do not have to tell OpenBridge your name. A grown-up can open the
              Dashboard and choose “Clear my data” whenever you want a fresh start.
            </p>
          </div>
        </aside>

        <section
          aria-labelledby="schools-privacy-title"
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeading
                id="schools-privacy-title"
                eyebrow="For schools and partner organizations"
                title="Privacy in schools and libraries"
                description="Guest reading keeps names, accounts, and profiles out of the learning experience. Learners can clear their progress in the browser."
              />
              <p className="mt-5 leading-7 text-muted-foreground">
                That means there is no OpenBridge child database to sell, breach, export,
                or hand over, and no remote account deletion process to manage. Less data
                collected means less data to protect.
              </p>
            </div>
            <Card className="gap-4 rounded-3xl p-6 shadow-warm ring-1 ring-border/70 sm:p-8">
              <School className="size-7" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold">
                Review the deployment you actually use
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Privacy requirements depend on context. A school, library, or NGO should
                still assess its hosting and network logs, obtain any locally required
                permissions, and review the retention terms of any optional AI provider
                or future opt-in sync service before enabling it. Core privacy design does
                not replace legal advice or an organization’s own safeguarding policy.
              </p>
              <div>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="h-11 rounded-full px-5 font-bold"
                >
                  <Link href="/teachers">
                    Read the classroom privacy guide
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section
          aria-labelledby="source-transparency-title"
          className="mx-auto w-full max-w-4xl px-4 sm:px-6"
        >
          <SectionHeading
            id="source-transparency-title"
            eyebrow="Full source-code transparency"
            title="Don’t take our word for it—read the code"
            description="The storage key, API schema, fallback tutor, and provider prompt are public. You can verify the privacy model yourself or ask someone you trust to review it."
            align="center"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <ExternalLink
              href={`${siteConfig.repoUrl}/blob/main/lib/progress/local-store.ts`}
              className="min-h-12 justify-between rounded-2xl bg-card px-4 py-3 no-underline shadow-warm ring-1 ring-border/70"
            >
              Local progress and deletion
            </ExternalLink>
            <ExternalLink
              href={`${siteConfig.repoUrl}/blob/main/app/api/explain/route.ts`}
              className="min-h-12 justify-between rounded-2xl bg-card px-4 py-3 no-underline shadow-warm ring-1 ring-border/70"
            >
              The explanation request schema
            </ExternalLink>
            <ExternalLink
              href={`${siteConfig.repoUrl}/blob/main/lib/llm/openai-compatible.ts`}
              className="min-h-12 justify-between rounded-2xl bg-card px-4 py-3 no-underline shadow-warm ring-1 ring-border/70"
            >
              The optional AI provider prompt
            </ExternalLink>
            <ExternalLink
              href={`${siteConfig.repoUrl}/blob/main/lib/i18n/config.ts`}
              className="min-h-12 justify-between rounded-2xl bg-card px-4 py-3 no-underline shadow-warm ring-1 ring-border/70"
            >
              The language preference setting
            </ExternalLink>
          </div>
        </section>

        <CtaBand
          id="privacy-cta-title"
          title="Privacy is part of the lesson plan"
          description="Read the project, teach with it, or simply enjoy a story. No account—and no personal-data trade—is required."
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
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-5 font-bold"
          >
            <a href={siteConfig.repoUrl} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" />
              Open the repository
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Button>
        </CtaBand>
      </div>
    </>
  );
}
