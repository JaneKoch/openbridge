import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Badge } from "@/components/ui/badge";

interface InfoHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function InfoHero({
  eyebrow,
  title,
  description,
  children,
}: InfoHeroProps) {
  return (
    <section
      aria-labelledby="info-page-title"
      className="bg-aurora border-b border-border/70"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Badge
            variant="secondary"
            className="h-auto gap-1.5 px-3 py-1.5 text-xs font-bold"
          >
            <Sparkles aria-hidden="true" />
            {eyebrow}
          </Badge>
          <h1
            id="info-page-title"
            className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <div
          aria-hidden="true"
          className="ml-auto hidden shrink-0 rounded-3xl bg-card/70 p-7 shadow-warm-lg ring-1 ring-border/60 lg:block"
        >
          <LogoMark className="size-28 animate-float" />
        </div>
      </div>
    </section>
  );
}
