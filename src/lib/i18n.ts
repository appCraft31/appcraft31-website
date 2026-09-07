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

/**
 * URL d'une page, dans une langue donnée.
 *
 * L'accueil d'une langue est un **fichier**, pas un dossier : en export
 * statique sans `trailingSlash`, la route `/en` produit `out/en.html` et
 * jamais `out/en/index.html`. Écrire `/en` — ou pire `/en/` — donnait donc une
 * adresse qui n'existe pas : 404 en production, aussi bien pour le lien du
 * logo et la navigation de toutes les pages anglaises que pour les `hreflang`
 * et le sitemap, qui dérivent tous d'ici.
 *
 * Les autres chemins portent déjà leur `.html` (`/apps/talon.html`) et se
 * préfixent sans façon.
 */
export function localizedUrl(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return clean;

  // `/` mais aussi `/#creations` : l'ancre s'accroche au fichier d'accueil.
  if (clean === '/' || clean.startsWith('/#')) {
    return `/${lang}.html${clean.slice(1)}`;
  }
  return `/${lang}${clean}`;
}

/** Table `hreflang` complète d'une page, pour les métadonnées. */
export function alternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const lang of LANGS) out[lang] = localizedUrl(lang, path);
  out['x-default'] = localizedUrl(DEFAULT_LANG, path);
  return out;
}
