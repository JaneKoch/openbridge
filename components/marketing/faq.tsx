import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/marketing/reveal";

const questions = [
  {
    q: "Is it really free?",
    a: "Yes. OpenBridge has no paywall, no subscription, and no ads. It is released under the MIT license, so anyone can use, copy, or adapt the code.",
  },
  {
    q: "Do you collect data about children?",
    a: "No. There are no accounts, no names, and no emails. Reading progress is stored in the browser on the device being used. Nothing is sent to a server to build a profile.",
  },
  {
    q: "Does it work without internet?",
    a: "The stories and the site are lightweight enough for slow connections. If the AI tutor is unreachable, a built-in offline explanation engine still gives kind, specific feedback on every answer.",
  },
  {
    q: "Which languages are available?",
    a: "English and Español today. Stories are plain, checkable files, so volunteers can add new languages and stories without a content system.",
  },
  {
    q: "How can I help?",
    a: "Read it with a child, share it with a teacher, or contribute. Translators, story writers, reviewers, and developers are all welcome on GitHub.",
  },
] as const;

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-foreground">
              Questions
            </p>
            <h2
              id="faq-title"
              className="font-display mt-3 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl"
            >
              Good questions, honest answers.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-border rounded-3xl border border-border/70 bg-card px-6 shadow-warm">
            {questions.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-left text-base font-bold text-foreground marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 pr-8 text-pretty leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
