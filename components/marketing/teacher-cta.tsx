import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/reveal";

export function TeacherCta() {
  return (
    <section aria-labelledby="teacher-title" className="px-4 sm:px-6">
      <Reveal className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-sun-soft via-primary/20 to-teal/25 px-6 py-14 shadow-warm-lg sm:px-12 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="flex gap-5">
              <span
                className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-card text-accent-foreground shadow-warm sm:flex"
                aria-hidden="true"
              >
                <GraduationCap className="size-7" />
              </span>
              <div>
                <h2
                  id="teacher-title"
                  className="font-display text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl"
                >
                  Bring OpenBridge to your classroom.
                </h2>
                <p className="mt-3 max-w-xl text-pretty leading-relaxed text-foreground/80">
                  Every story comes with teaching notes, discussion ideas, and
                  writing prompts, so reading time can flow into talking and
                  writing together. Works on a shared classroom device.
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full px-7 text-base font-bold text-foreground shadow-warm-lg md:w-auto"
            >
              <Link href="/teachers" data-testid="landing-teacher-cta">
                Teacher guide
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
