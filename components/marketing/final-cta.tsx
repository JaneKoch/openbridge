import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/reveal";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-title"
      className="bg-aurora relative overflow-hidden py-28 sm:py-36"
    >
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h2
          id="final-title"
          className="font-display text-balance text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl"
        >
          Open a story. Start the next chapter today.
        </h2>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          No sign-up and no cost. Just a story, a question, and a tutor who
          believes the reader can get there.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full px-9 text-lg font-bold text-foreground shadow-warm-lg"
          >
            <Link href="/learn" data-testid="landing-final-start">
              <BookOpen aria-hidden="true" />
              Start reading
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-14 rounded-full px-6 text-base font-bold text-accent-foreground"
          >
            <Link href="/about">
              About OpenBridge
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
