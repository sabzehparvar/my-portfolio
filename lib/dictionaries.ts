import "server-only";
import fa from "@/dictionaries/fa.json";
import en from "@/dictionaries/en.json";

export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

const dictionaries = { fa, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.fa;
}

export type Dictionary = typeof fa;
