"use client";

import { useEffect, useState } from "react";
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "./config";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { en, es };

function readCookieLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`));
  const value = match?.split("=")[1];
  return isLocale(value) ? value : defaultLocale;
}

/**
 * Reads the locale from the preference cookie on the client. Pages stay
 * statically renderable; the value settles right after hydration. The cookie
 * holds only a language code the user picked — it is not an identifier.
 */
export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const value = readCookieLocale();
    setLocale(value);
    document.documentElement.lang = value;
  }, []);

  return locale;
}

/** Dictionary for the active locale. */
export function useT(): Dictionary {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const value = readCookieLocale();
    setLocale(value);
    document.documentElement.lang = value;
  }, []);

  return dictionaries[locale];
}

/** Persist a locale choice, then refresh statically-rendered content. */
export function changeLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  document.documentElement.lang = locale;
  window.location.reload();
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
