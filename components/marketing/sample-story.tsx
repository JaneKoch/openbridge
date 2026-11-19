import Link from "next/link";
import { ArrowRight, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonCover } from "@/components/lesson-cover";
import { Reveal } from "@/components/marketing/reveal";
import { mayaAndTheRiverBridge as lesson } from "@/content/lessons/en/maya-and-the-river-bridge";

export function SampleStory() {
  const preview = lesson.questions[0];

  return (
    <section aria-labelledby="sample-title" className="py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-foreground">
              Try a story
            </p>
            <h2
              id="sample-title"
              className="font-display mt-3 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl"
            >
              Start with a story about building something together.
            </h2>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Maya dreams of a better bridge over the Silver River. When a flood
              washes the old one away, her village decides to build a stronger
              one, arch by patient arch. The story is free to read, and the
              questions are kind.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Level {lesson.level} · about {lesson.minutes} minutes · English
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <article
            aria-labelledby="sample-card-title"
            className="rounded-3xl border border-border/70 bg-card p-5 shadow-warm-lg sm:p-6"
          >
            <LessonCover
              emoji={lesson.emoji}
              palette={lesson.palette}
              size="hero"
              className="rounded-2xl"
            />
            <h3
              id="sample-card-title"
              className="font-display mt-5 text-2xl font-extrabold text-foreground"
            >
              {lesson.title}
            </h3>
            <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
              {lesson.subtitle}
            </p>

            <div className="mt-5 rounded-2xl bg-secondary/70 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-secondary-foreground">
                <HelpCircle className="size-4" aria-hidden="true" />
                A question from this story
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                {preview.prompt}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-4" aria-hidden="true" />
                {lesson.minutes} min read
              </span>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-6 text-base font-bold text-foreground shadow-warm"
              >
                <Link
                  href={`/learn/${lesson.slug}`}
                  data-testid="landing-sample"
                >
                  Read this story
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
