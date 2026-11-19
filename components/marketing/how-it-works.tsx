import { BookOpen, MessageCircleQuestion, Sparkles } from "lucide-react";
import { Reveal } from "@/components/marketing/reveal";

const steps = [
  {
    icon: BookOpen,
    title: "Pick a story",
    body: "Choose a short story from a level that feels right today. Every story has a picture cover, a glossary of tricky words, and a clear length.",
    tone: "bg-primary text-foreground",
  },
  {
    icon: MessageCircleQuestion,
    title: "Answer friendly questions",
    body: "After reading, four to five questions check the main idea, the details, and what might happen next. Nothing is graded harshly and every answer gets a reason.",
    tone: "bg-teal text-white",
  },
  {
    icon: Sparkles,
    title: "Pip explains and adapts",
    body: "Pip tells the child why an answer works, in plain words. Over time OpenBridge offers stories slightly harder or easier, so the next step is always reachable.",
    tone: "bg-plum text-white",
  },
] as const;

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-foreground">
            How it works
          </p>
          <h2
            id="how-title"
            className="font-display mt-3 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            Three gentle steps, one story at a time.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <Reveal delay={i * 0.1} className="h-full">
                  <article className="relative flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 shadow-warm">
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex size-12 items-center justify-center rounded-2xl ${step.tone}`}
                        aria-hidden="true"
                      >
                        <Icon className="size-6" />
                      </span>
                      <span
                        className="font-display text-5xl font-black leading-none text-sun-soft"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display mt-6 text-xl font-extrabold text-foreground">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
