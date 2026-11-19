"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Volume2, VolumeX } from "lucide-react";
import type { Lesson } from "@/lib/content/types";
import { useLocale, useT } from "@/lib/i18n/use-locale";
import { LessonCover } from "@/components/lesson-cover";
import { LevelBadge } from "@/components/level-badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function StoryReader({
  lesson,
  onStart,
}: {
  lesson: Lesson;
  onStart: () => void;
}) {
  const t = useT();
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const storyRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const story = storyRef.current;
      if (!story) return;
      const top = story.getBoundingClientRect().top + window.scrollY;
      const distance = Math.max(1, story.offsetHeight - window.innerHeight);
      const progress = ((window.scrollY - top) / distance) * 100;
      setScrollProgress(Math.max(0, Math.min(100, progress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleReadAloud = () => {
    if (
      !("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      return;
    }
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      `${lesson.story.title}. ${lesson.story.sections.join(" ")}`
    );
    utterance.lang = locale === "es" ? "es-ES" : "en-US";
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  const speechAvailable =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    typeof SpeechSynthesisUtterance !== "undefined";

  return (
    <main data-testid="story-view" className="min-h-screen bg-aurora">
      <div className="fixed inset-x-0 top-0 z-30 bg-background/90 px-4 py-2 backdrop-blur">
        <Progress
          aria-label={t.tutor.readStory}
          value={scrollProgress}
          className="h-1.5"
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">
        <header className="grid items-center gap-6 rounded-3xl border border-border/70 bg-card/80 p-5 shadow-warm sm:grid-cols-[minmax(0,1fr)_15rem] sm:p-8">
          <div className="order-2 sm:order-1">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-sun-soft px-3 py-1 text-sm font-bold text-foreground">
                {lesson.minutes} {t.common.minutes}
              </span>
              <LevelBadge level={lesson.level} locale={locale} />
            </div>
            <h1 className="font-display text-balance text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              {lesson.title}
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lesson.subtitle}
            </p>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="mt-5 min-h-12 rounded-full px-5"
              onClick={toggleReadAloud}
              disabled={!speechAvailable}
              aria-pressed={speaking}
            >
              {speaking ? (
                <VolumeX aria-hidden="true" />
              ) : (
                <Volume2 aria-hidden="true" />
              )}
              {speaking ? t.tutor.stop : t.tutor.readAloud}
            </Button>
          </div>
          <div className="order-1 sm:order-2">
            <LessonCover
              emoji={lesson.emoji}
              palette={lesson.palette}
              size="hero"
            />
          </div>
        </header>

        <article
          ref={storyRef}
          className="mx-auto mt-10 max-w-2xl"
          aria-labelledby="story-heading"
        >
          <h2
            id="story-heading"
            className="mb-8 font-display text-2xl font-extrabold text-foreground sm:text-3xl"
          >
            {lesson.story.title}
          </h2>
          <div className="space-y-7">
            {lesson.story.sections.map((section, index) => (
              <motion.p
                key={`${index}-${section.slice(0, 24)}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  ease: "easeOut",
                }}
                className="text-lg leading-[1.9] text-foreground sm:text-xl"
              >
                {section}
              </motion.p>
            ))}
          </div>
        </article>

        {lesson.glossary.length > 0 && (
          <details className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card shadow-warm">
            <summary className="flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl px-5 py-4 font-display text-lg font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <BookOpen aria-hidden="true" className="size-5 text-primary" />
              {t.tutor.glossary}
            </summary>
            <dl className="grid gap-4 px-5 pb-5 sm:grid-cols-2">
              {lesson.glossary.map((entry) => (
                <div key={entry.term} className="rounded-xl bg-muted/70 p-4">
                  <dt className="font-bold text-foreground">{entry.term}</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">
                    {entry.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        )}

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <Button
            type="button"
            size="lg"
            onClick={onStart}
            className="min-h-14 w-full rounded-full px-7 text-base font-bold shadow-warm sm:w-auto"
          >
            {t.learn.start}
          </Button>
        </div>
      </div>
    </main>
  );
}
