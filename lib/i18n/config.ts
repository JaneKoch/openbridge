export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "openbridge_locale";

/**
 * Language names written in their own language, so a child can always find
 * theirs in the switcher — even before understanding the interface.
 */
export const localeNativeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
