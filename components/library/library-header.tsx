"use client";

import { useT } from "@/lib/i18n/use-locale";

/**
 * Warm page header for the Story Library. Client component because every
 * visible string resolves through the locale dictionary (`useT`).
 */
export function LibraryHeader() {
  const t = useT();

  return (
    <header className="flex flex-col gap-3">
      <h1 className="font-display text-4xl font-black tracking-tight text-balance sm:text-5xl">
        {t.learn.title}
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg">
        {t.learn.subtitle}
      </p>
    </header>
  );
}
