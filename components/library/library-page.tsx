"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonCover } from "@/components/lesson-cover";
import { ALL_LEVELS, READING_LEVELS } from "@/lib/content/levels";
import { PALETTES, type LessonLanguage, type LessonSummary } from "@/lib/content/types";
import { localeNativeNames, locales } from "@/lib/i18n/config";
import { useLocale, useT } from "@/lib/i18n/use-locale";
import { cn } from "@/lib/utils";
import { LibraryHeader } from "./library-header";

export function LibraryPage({ lessons }: { lessons: LessonSummary[] }) {
  const t = useT();
  const locale = useLocale();
  const [language, setLanguage] = useState<"all" | LessonLanguage>("all");
  const [level, setLevel] = useState("all");
  const visible = lessons.filter(
    (lesson) =>
      (language === "all" || lesson.language === language) &&
      (level === "all" || String(lesson.level) === level)
  );
  const grouped = ALL_LEVELS.map((number) => ({
    info: READING_LEVELS[number],
    lessons: visible.filter((lesson) => lesson.level === number),
  })).filter((group) => group.lessons.length > 0);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <LibraryHeader />
      <div className="mt-8 flex flex-wrap gap-3">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={locale === "es" ? "Idioma" : "Language"}
        >
          {(["all", ...locales] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setLanguage(value)}
              aria-pressed={language === value}
              className={cn(
                "min-h-10 rounded-full border px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                language === value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-muted"
              )}
            >
              {value === "all"
                ? (locale === "es" ? "Todos los idiomas" : "All languages")
                : localeNativeNames[value]}
            </button>
          ))}
        </div>
        <label className="sr-only" htmlFor="library-level">
          {t.learn.readingLevel}
        </label>
        <select
          id="library-level"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
          className="min-h-10 rounded-full border border-border bg-card px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <option value="all">{t.learn.allLevels}</option>
          {ALL_LEVELS.map((number) => (
            <option key={number} value={number}>
              {t.common.level} {number} · {READING_LEVELS[number].name[locale]}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 space-y-12">
        {grouped.map(({ info, lessons: items }) => (
          <section key={info.level} aria-labelledby={`level-${info.level}`}>
            <h2 id={`level-${info.level}`} className="flex items-center gap-3 font-display text-2xl font-extrabold">
              <span aria-hidden="true" className={cn("size-3 rounded-full", info.dotClass)} />
              {t.common.level} {info.level} · {info.name[locale]}
            </h2>
            <p className="mb-5 mt-2 text-muted-foreground">{info.blurb[locale]}</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/learn/${lesson.slug}`}
                  data-testid="lesson-card"
                  data-slug={lesson.slug}
                  className="group rounded-3xl border border-border bg-card p-3 shadow-warm transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:hover:-translate-y-0.5"
                >
                  <LessonCover emoji={lesson.emoji} palette={lesson.palette} />
                  <div className="px-2 pb-2 pt-4">
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <span className={cn("rounded-full border px-2 py-1", PALETTES[lesson.palette].soft)}>
                        {localeNativeNames[lesson.language]}
                      </span>
                      <span>{lesson.minutes} {t.common.minutes}</span>
                    </div>
                    <div lang={lesson.language}>
                      <h3 className="font-display text-xl font-extrabold">{lesson.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{lesson.description}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold">
                      {t.learn.start} <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
        {visible.length === 0 && (
          <p role="status" className="rounded-2xl bg-muted p-6 text-muted-foreground">
            {t.learn.noLessons}
          </p>
        )}
      </div>
    </div>
  );
}
