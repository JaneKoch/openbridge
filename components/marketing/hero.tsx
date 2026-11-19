import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/reveal";
import { TutorPreview } from "@/components/marketing/tutor-preview";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-aurora relative overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-28">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-sun-soft bg-card/80 px-3.5 py-1.5 text-sm font-semibold text-accent-foreground shadow-warm lg:mx-0">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              Free · Open source · No account
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="font-display mt-6 text-balance text-4xl font-black leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Every child deserves a story that{" "}
              <span className="text-primary">grows with them.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
              OpenBridge is an AI reading tutor. Children read short stories
              at their own level, answer friendly questions, and get patient,
              specific help from Pip, the tutor, whenever they get stuck.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-full px-7 text-base font-bold text-foreground shadow-warm-lg sm:w-auto"
              >
                <Link href="/learn" data-testid="landing-start">
                  <BookOpen aria-hidden="true" />
                  Start reading
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-full border-border bg-card/80 px-7 text-base font-bold text-foreground sm:w-auto"
              >
                <Link href="/teachers" data-testid="landing-teachers">
                  For teachers
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <TutorPreview />
        </Reveal>
      </div>
    </section>
  );
}
