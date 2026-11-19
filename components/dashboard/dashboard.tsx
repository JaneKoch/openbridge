"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Flame, Star, Trophy } from "lucide-react";
import { LevelBadge } from "@/components/level-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getRecommendedLessons } from "@/lib/content";
import { READING_LEVELS } from "@/lib/content/levels";
import { ACHIEVEMENTS, getXPRank } from "@/lib/gamification";
import { getDictionary, useLocale } from "@/lib/i18n/use-locale";
import { clearProgress, useProgress } from "@/lib/progress/local-store";
import { cn } from "@/lib/utils";

export function Dashboard() {
  const locale = useLocale();
  const dictionary = getDictionary(locale);
  const t = dictionary.dashboard;
  const progress = useProgress();
  const completed = new Set(Object.keys(progress.lessons));
  const [next] = getRecommendedLessons(progress.readingLevel, completed, {
    language: locale,
    limit: 1,
  });
  const rank = getXPRank(progress.xp);
  const earned = new Set(progress.achievements);
  const level = READING_LEVELS[progress.readingLevel];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-3 text-muted-foreground">{t.guestNote}</p>
      </header>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={<BookOpen />} label={t.storiesCompleted} value={completed.size} testId="stories-count" />
        <Stat icon={<Star />} label={t.xp} value={progress.xp} testId="xp-value" />
        <Stat icon={<Flame />} label={t.streak} value={progress.streakCount} />
        <Card className="rounded-2xl py-0 shadow-warm">
          <CardContent className="flex min-h-24 items-center justify-between gap-2 p-5">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">{t.readingLevel}</p>
              <p className="font-display text-2xl font-extrabold">{level.level}</p>
            </div>
            <LevelBadge level={level.level} locale={locale} />
          </CardContent>
        </Card>
      </div>

      <div className="mb-10 grid gap-5 md:grid-cols-[1.5fr_1fr]">
        <Card className="rounded-3xl bg-secondary/40 py-0 shadow-warm">
          <CardContent className="p-6 sm:p-8">
            <p className="mb-2 text-sm font-bold">{t.nextUp}</p>
            <h2 className="font-display text-2xl font-extrabold" lang={next?.language}>
              {next?.title ?? t.hello}
            </h2>
            <p className="mt-2 text-muted-foreground" lang={next?.language}>
              {next?.description ?? t.empty}
            </p>
            <Button asChild className="mt-6 min-h-11 rounded-full px-5 font-bold">
              <Link href={next ? `/learn/${next.slug}` : "/learn"} data-testid="dashboard-start">
                {t.startReading}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl py-0 shadow-warm">
          <CardContent className="p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-xl font-extrabold">
              <Trophy className="size-5 text-primary" aria-hidden="true" />
              {rank.current.name[locale]}
            </h2>
            <Progress value={rank.progressPct} aria-label={t.xp} className="mt-5 h-3" />
            <p className="mt-3 text-sm text-muted-foreground">
              {progress.xp} XP
              {rank.next && (
                <> · {rank.next.minXP - progress.xp} {locale === "es" ? "para" : "to"} {rank.next.name[locale]}</>
              )}
            </p>
          </CardContent>
        </Card>
      </div>

      <section aria-labelledby="achievements-title">
        <h2 id="achievements-title" className="mb-4 font-display text-2xl font-extrabold">
          {t.achievements}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((badge) => {
            const unlocked = earned.has(badge.id);
            return (
              <li key={badge.id}>
                <Card className={cn("h-full rounded-2xl py-0", unlocked && "bg-secondary/40 shadow-warm")}>
                  <CardContent
                    className="flex gap-3 p-4"
                    data-testid={unlocked ? `achievement-${badge.id}` : undefined}
                  >
                    <span className={cn("text-3xl", !unlocked && "grayscale")} aria-hidden="true">
                      {badge.icon}
                    </span>
                    <div>
                      <h3 className="font-bold">{badge.name[locale]}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {unlocked ? badge.description[locale] : t.locked}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>

      {completed.size > 0 && (
        <Button
          type="button"
          variant="outline"
          className="mt-8 min-h-11 rounded-full px-5"
          data-testid="clear-data"
          onClick={() => {
            if (window.confirm(t.clearDataConfirm)) clearProgress();
          }}
        >
          {t.clearData}
        </Button>
      )}
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  testId,
}: {
  icon: ReactNode;
  label: string;
  value: number;
  testId?: string;
}) {
  return (
    <Card className="rounded-2xl py-0 shadow-warm">
      <CardContent className="flex min-h-24 items-center gap-4 p-5">
        <span className="text-primary" aria-hidden="true">{icon}</span>
        <div>
          <p className="text-sm font-semibold text-muted-foreground">{label}</p>
          <p className="font-display text-2xl font-extrabold" data-testid={testId}>{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
