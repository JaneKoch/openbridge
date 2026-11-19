import { CircleCheck, Sparkles } from "lucide-react";
import { LessonCover } from "@/components/lesson-cover";
import { cn } from "@/lib/utils";

/**
 * A pure HTML/CSS rendering of the reading tutor, used as the hero visual.
 * It mirrors the real lesson screen (cover, story excerpt, question, feedback)
 * without shipping any screenshot images.
 */
export function TutorPreview({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      <div className="rounded-3xl border border-border/70 bg-card p-4 shadow-warm-lg sm:p-5">
        <div className="flex items-center justify-between gap-3 px-1 pb-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-sun-soft" />
            <span className="size-2.5 rounded-full bg-teal/40" />
            <span className="size-2.5 rounded-full bg-leaf/40" />
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-secondary-foreground">
            Level 2 · 5 min
          </span>
        </div>

        <LessonCover emoji="🌉" palette="sunrise" className="h-40 rounded-2xl" />

        <div className="mt-4 space-y-2 px-1">
          <p className="font-display text-lg font-extrabold leading-tight text-foreground">
            Maya and the River Bridge
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            &ldquo;An old wooden bridge crossed the river. It creaked when the
            wind blew.&rdquo;
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-leaf/30 bg-leaf/10 p-3.5">
          <p className="text-sm font-bold text-foreground">
            What is this story mostly about?
          </p>
          <ul className="mt-2.5 space-y-1.5 text-sm">
            <li className="flex items-start gap-2 rounded-xl bg-card px-3 py-2 text-foreground ring-2 ring-leaf">
              <CircleCheck
                className="mt-0.5 size-4 shrink-0 text-leaf"
                aria-hidden="true"
              />
              <span className="font-semibold">
                A village that works together to build a strong new bridge
              </span>
            </li>
            <li className="rounded-xl px-3 py-2 text-muted-foreground">
              A girl who is afraid of thunderstorms
            </li>
          </ul>
        </div>
      </div>

      <div
        className="animate-float absolute -left-3 -top-5 flex items-center gap-2 rounded-2xl border border-border/70 bg-card px-3.5 py-2.5 shadow-warm sm:-left-8"
        aria-hidden="true"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-primary text-foreground">
          <Sparkles className="size-3.5" />
        </span>
        <span className="text-sm font-semibold text-foreground">
          Pip is thinking…
        </span>
      </div>

      <div
        className="absolute -bottom-4 -right-2 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground shadow-warm sm:-right-6"
        aria-hidden="true"
      >
        🔥 3-day streak
      </div>
    </div>
  );
}
