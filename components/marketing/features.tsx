import {
  Brain,
  Gauge,
  Languages,
  Scale,
  ShieldCheck,
  WifiOff,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/marketing/reveal";

const features: {
  icon: LucideIcon;
  title: string;
  body: string;
  tone: string;
}[] = [
  {
    icon: Brain,
    title: "Adaptive difficulty",
    body: "Stories and questions adjust to the reader. Got it easily? The next one stretches a little. Found it hard? Pip slows down and offers a gentler path.",
    tone: "bg-primary/15 text-accent-foreground",
  },
  {
    icon: WifiOff,
    title: "A tutor that works offline",
    body: "When the AI is unavailable, a built-in explanation engine still gives kind, specific feedback for every answer. Learning never stops at a missing connection.",
    tone: "bg-teal/15 text-teal",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "No accounts, no names, no emails, no tracking. Progress is saved on the device it was made on and never leaves it.",
    tone: "bg-leaf/15 text-leaf",
  },
  {
    icon: Languages,
    title: "Multilingual ready",
    body: "English and Español today, with a clear path for volunteers to add more languages, stories, and teaching notes.",
    tone: "bg-plum/15 text-plum",
  },
  {
    icon: Scale,
    title: "Free forever, MIT licensed",
    body: "Open source from the first line of code. Schools, families, and developers can read, copy, adapt, and host it without asking permission.",
    tone: "bg-sun-soft text-accent-foreground",
  },
  {
    icon: Gauge,
    title: "Built for slow connections",
    body: "Static pages, no heavy video, and cover art drawn in CSS. OpenBridge runs well on an old phone and on a classroom network that is far from fast.",
    tone: "bg-accent text-accent-foreground",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="bg-card/60 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-foreground">
            Features
          </p>
          <h2
            id="features-title"
            className="font-display mt-3 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            Built to be trusted by children, families, and teachers.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <li key={feature.title}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-border/70 bg-background p-6 shadow-warm">
                    <span
                      className={`flex size-11 items-center justify-center rounded-2xl ${feature.tone}`}
                      aria-hidden="true"
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display mt-5 text-lg font-extrabold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
