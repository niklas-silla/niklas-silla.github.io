export const languages = ["en", "de"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "en";

// A plain string is the same in every language,
// an object holds one version per language: { en: "...", de: "..." }.
export type Text = string | Record<Lang, string>;

export const t = (text: Text, lang: Lang): string =>
  typeof text === "string" ? text : text[lang];

// Start page of each language: "/" for English, "/de/" for German.
export const homePath = (lang: Lang): string =>
  lang === defaultLang ? "/" : `/${lang}/`;
