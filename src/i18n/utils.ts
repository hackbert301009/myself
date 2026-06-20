import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Derive the active language from a URL pathname (/en/... → 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

/** Translator bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a localized href. DE is unprefixed, EN lives under /en. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? `/en${clean === '/' ? '' : clean}` : clean;
}

/** Pick the right field of a bilingual content object. */
export function pick<T>(value: { de: T; en: T }, lang: Lang): T {
  return value[lang] ?? value.de;
}
