"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { LessonCover } from "@/components/lesson-cover";
import { LevelBadge } from "@/components/level-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLessonBySlug, getRecommendedLessons, READING_LEVELS } from "@/lib/content";
import { ACHIEVEMENTS } from "@/lib/gamification";
import { useLocale, useT } from "@/lib/i18n/use-locale";
import {
  consumeCelebration,
  useProgress,
} from "@/lib/progress/local-store";
import type { Lesson } from "@/lib/content/types";
import type { StudentProgress } from "@/lib/progress/types";

type Celebration = NonNullable<StudentProgress["lastCelebration"]>;

export function ResultsScreen({
  lesson,
  correctCount,
  celebration,
  onRetry,
}: {
  lesson: Lesson;
  correctCount: number;
  celebration: Celebration | null;
  onRetry: () => void;
}) {
  const t = useT();
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const progress = useProgress();
  const totalQuestions = lesson.questions.length;
  const accuracy =
    totalQuestions > 0
      ? Math.round((correctCount / totalQuestions) * 100)
      : 0;

  useEffect(() => {
    if (celebration) consumeCelebration();
  }, [celebration]);

  const recommendations = getRecommendedLessons(
    progress.readingLevel,
    new Set(Object.keys(progress.lessons)),
    { excludeSlug: lesson.slug, limit: 3 }
  );
  const next = recommendations[0];
  const nextLesson = next ? getLessonBySlug(next.slug) : undefined;
  const unlockedAchievements = (celebration?.newAchievements ?? [])
    .map((id) => ACHIEVEMENTS.find((achievement) => achievement.id === id))
    .filter((achievement): achievement is (typeof ACHIEVEMENTS)[number] =>
      Boolean(achievement)
    );
  const levelUp =
    celebration &&
    celebration.readingLevelAfter !== celebration.readingLevelBefore;

  return (
    <main
      data-testid="results-screen"
      className="min-h-screen overflow-hidden bg-aurora px-4 py-10 sm:px-6"
    >
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="text-center"
        >
          <div aria-hidden="true" className="mb-3 text-4xl">
            ✨ 📚 ✨
          </div>
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            {t.tutor.resultsTitle}
          </h1>

          <div
            data-testid="score-value"
            aria-label={`${t.tutor.accuracyLabel}: ${accuracy}%`}
            className="mx-auto mt-7 flex size-40 flex-col items-center justify-center rounded-full border-[10px] border-primary/20 bg-card shadow-warm-lg"
          >
            <span className="font-display text-4xl font-extrabold tabular-nums text-foreground">
              {accuracy}%
            </span>
            <span className="mt-1 text-sm font-bold text-muted-foreground">
              {t.tutor.accuracyLabel}
            </span>
          </div>

          <Badge
            data-testid="xp-earned"
            className="mt-5 h-auto min-h-9 rounded-full px-4 py-2 text-base font-extrabold"
          >
            <Sparkles aria-hidden="true" />
            {celebration?.xpEarned ?? 0}{" "}
            {t.tutor.xpEarned}
          </Badge>

          {accuracy === 100 && (
            <p className="mt-5 font-display text-xl font-extrabold text-primary">
              {t.tutor.perfectScore}
            </p>
          )}
        </motion.div>

        {levelUp && celebration && (
          <section className="mt-8 rounded-3xl border border-primary/30 bg-sun-soft p-5 text-center shadow-warm">
            <motion.div
              aria-hidden="true"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.7, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              className="mb-2 text-2xl"
            >
              🎊 ✨ 🎉
            </motion.div>
            <p className="font-display text-xl font-extrabold text-foreground">
              {t.tutor.levelUp}
            </p>
            <p className="mt-2 text-lg font-bold text-foreground">
              {READING_LEVELS[celebration.readingLevelAfter].emoji}{" "}
              {READING_LEVELS[celebration.readingLevelAfter].name[locale]}
            </p>
          </section>
        )}

        {unlockedAchievements.length > 0 && (
          <section className="mt-8" aria-labelledby="achievements-heading">
            <h2
              id="achievements-heading"
              className="mb-3 font-display text-xl font-extrabold text-foreground"
            >
              {t.dashboard.achievements}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {unlockedAchievements.map((achievement) => (
                <Card key={achievement.id} className="rounded-2xl shadow-warm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <span aria-hidden="true" className="text-3xl">
                      {achievement.icon}
                    </span>
                    <div>
                      <p className="font-bold text-foreground">
                        {achievement.name[locale]}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {achievement.description[locale]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {nextLesson && (
          <Card className="mt-8 overflow-hidden rounded-3xl shadow-warm-lg">
            <CardHeader>
              <CardTitle className="font-display text-xl font-extrabold">
                {t.tutor.nextRecommended}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                data-testid="next-recommended"
                href={`/learn/${nextLesson.slug}`}
                className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
              >
                <LessonCover
                  emoji={nextLesson.emoji}
                  palette={nextLesson.palette}
                  size="card"
                  className="transition-transform group-hover:scale-[1.01]"
                />
                <div className="flex items-center justify-between gap-3 py-4">
                  <div>
                    <p className="font-display text-lg font-extrabold text-foreground">
                      {nextLesson.title}
                    </p>
                    <LevelBadge
                      level={nextLesson.level}
                      locale={locale}
                      className="mt-2"
                    />
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-6 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="min-h-12 rounded-full font-bold"
            onClick={onRetry}
          >
            <BookOpen aria-hidden="true" />
            {t.tutor.retryLesson}
          </Button>
          <Button
            asChild
            size="lg"
            className="min-h-12 rounded-full font-bold"
          >
            <Link href="/learn">{t.tutor.backToLibrary}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
