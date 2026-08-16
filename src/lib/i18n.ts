/**
 * Traduction du chrome du site.
 *
 * L'ancien site traduisait à l'exécution en réécrivant le DOM (`js/i18n.js`) :
 * une seule URL pour six langues, invisible pour les moteurs de recherche.
 * Ici chaque langue a ses propres pages statiques, et `t()` est appelé au rendu.
 */

import { dict as fr } from '@/content/site/fr';
import { dict as en } from '@/content/site/en';
import { dict as ja } from '@/content/site/ja';
import { dict as ko } from '@/content/site/ko';
import { dict as es } from '@/content/site/es';
import { dict as de } from '@/content/site/de';
import type { SiteDict, SiteKey } from '@/content/site/keys';
import { DEFAULT_LANG, LANGS, type Lang } from './types';

const DICTS: Record<Lang, SiteDict> = { fr, en, ja, ko, es, de };

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

/** Traduit une clé, avec repli sur le français si la langue est incomplète. */
export function translator(lang: Lang) {
  const dict = DICTS[lang];
  return (key: SiteKey): string => dict[key] ?? fr[key];
}

/**
 * Préfixe d'URL de la langue. Le français n'en a pas : ses adresses sont celles
 * du site historique, déclarées dans les fiches store.
 */
export function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

/** URL absolue d'une page, dans une langue donnée. */
export function localizedUrl(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${langPrefix(lang)}${clean}`;
}

/** Table `hreflang` complète d'une page, pour les métadonnées. */
export function alternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const lang of LANGS) out[lang] = localizedUrl(lang, path);
  out['x-default'] = localizedUrl(DEFAULT_LANG, path);
  return out;
}
