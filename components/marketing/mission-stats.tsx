import { Reveal } from "@/components/marketing/reveal";

/**
 * Every figure here is cited. To update one, change its value and source
 * together and keep the link pointing at the originating publication.
 */
const stats = [
  {
    value: "7 in 10",
    label:
      "ten-year-olds in low- and middle-income countries cannot read and understand a simple text.",
    source: "World Bank · UNESCO, Learning Poverty 2022",
    href: "https://www.worldbank.org/en/topic/education",
  },
  {
    value: "763 million",
    label: "young people and adults lack basic literacy skills.",
    source: "UNESCO, literacy",
    href: "https://www.unesco.org/en/literacy",
  },
  {
    value: "250 million",
    label: "children and young people are out of school.",
    source: "UNESCO, Global Education Monitoring",
    href: "https://www.unesco.org/gem-report/en",
  },
] as const;

export function MissionStats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="border-y border-sun-soft bg-secondary/60 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-foreground">
            Why this matters
          </p>
          <h2
            id="stats-title"
            className="font-display mt-3 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            Reading is the bridge to almost everything else.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Millions of children are still learning to read. OpenBridge exists
            so that every child has a patient reading partner, free of charge.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <li key={stat.value}>
              <Reveal delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-warm">
                  <p className="font-display text-4xl font-black tracking-tight text-accent-foreground sm:text-5xl">
                    {stat.value}
                  </p>
                  <figcaption className="mt-3 flex flex-1 flex-col gap-3">
                    <span className="text-base leading-relaxed text-foreground">
                      {stat.label}
                    </span>
                    <span className="mt-auto text-xs text-muted-foreground">
                      Source:{" "}
                      <a
                        href={stat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-accent-foreground underline underline-offset-4 hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {stat.source}
                      </a>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
