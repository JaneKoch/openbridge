"use client";

import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  changeLocale,
  useLocale,
} from "@/lib/i18n/use-locale";
import {
  locales,
  localeNativeNames,
  type Locale,
} from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ ariaLabel }: { ariaLabel: string }) {
  const current = useLocale();

  function choose(locale: Locale) {
    if (locale !== current) changeLocale(locale);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={ariaLabel}
        data-testid="language-switcher"
        className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-sun-100 hover:text-sun-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">{localeNativeNames[current]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onSelect={() => choose(locale)}
            className={cn(
              "cursor-pointer rounded-lg font-semibold",
              locale === current && "text-primary",
            )}
          >
            {localeNativeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
