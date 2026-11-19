"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { useT } from "@/lib/i18n/use-locale";

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="mt-20 bg-sun-900 text-sun-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Open<span className="text-sun-300">Bridge</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sun-100/80">
              {t.footer.tagline}
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-sun-800 px-3 py-1.5 text-xs font-semibold text-sun-100">
              <Heart className="h-3.5 w-3.5 text-berry-500" aria-hidden />
              {t.footer.madeWith}
            </p>
          </div>

          <nav aria-label="Footer — Learn" className="text-sm">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-sun-300">
              {t.footer.learn}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/learn"
                  className="rounded-lg text-sun-100/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {t.learn.title}
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="rounded-lg text-sun-100/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {t.dashboard.title}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer — Project" className="text-sm">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-sun-300">
              {t.footer.project}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/teachers"
                  className="rounded-lg text-sun-100/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {t.footer.forTeachers}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="rounded-lg text-sun-100/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="rounded-lg text-sun-100/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/JaneKoch/openbridge"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg text-sun-100/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {t.footer.github}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-sun-800 pt-6 text-xs text-sun-100/60">
          <p>© OpenBridge contributors · {t.footer.license}</p>
        </div>
      </div>
    </footer>
  );
}
