"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, Menu, Sparkles, X } from "lucide-react";
import { LogoWordmark } from "@/components/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/use-locale";

const links = [
  { href: "/learn", labelKey: "learn" as const },
  { href: "/dashboard", labelKey: "dashboard" as const },
  { href: "/teachers", labelKey: "teachers" as const },
  { href: "/about", labelKey: "about" as const },
];

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-sun-200/70 bg-cream/85 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        {t.common.skipToContent}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          aria-label="OpenBridge home"
          className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <LogoWordmark />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
          data-testid="site-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.href.split("/")[1]}`}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                isActive(link.href)
                  ? "bg-sun-100 text-sun-800"
                  : "text-muted-foreground hover:bg-sun-100/70 hover:text-foreground",
              )}
            >
              {t.nav[link.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageSwitcher ariaLabel={t.nav.switchLanguage} />
          <Button
            asChild
            size="sm"
            className="hidden rounded-full font-bold shadow-warm sm:inline-flex"
          >
            <Link href="/learn">
              <BookOpen className="h-4 w-4" aria-hidden />
              {t.nav.startReading}
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            data-testid="mobile-menu-button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-sun-100 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-sun-200/70 bg-cream/95 px-4 pb-5 pt-3 backdrop-blur-md md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                isActive(link.href)
                  ? "bg-sun-100 text-sun-800"
                  : "text-foreground hover:bg-sun-100/70",
              )}
            >
              {t.nav[link.labelKey]}
            </Link>
          ))}
          <Link
            href="/learn"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-base font-bold text-primary-foreground shadow-warm"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {t.nav.startReading}
          </Link>
        </nav>
      </div>
    </header>
  );
}
