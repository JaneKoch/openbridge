import type { ReactNode } from "react";

interface CtaBandProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function CtaBand({ id, title, description, children }: CtaBandProps) {
  return (
    <section aria-labelledby={id} className="px-4 pb-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-foreground px-6 py-10 text-background shadow-warm-lg sm:px-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id={id}
              className="font-display text-balance text-3xl font-extrabold tracking-tight"
            >
              {title}
            </h2>
            <p className="mt-3 leading-7 text-background/80">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>
        </div>
      </div>
    </section>
  );
}
