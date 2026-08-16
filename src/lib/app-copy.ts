/**
 * Textes complets des pages produits.
 *
 * Chaque app rédigée a un `page-copy.ts` exportant ses langues. Les langues
 * manquantes retombent sur l'anglais, puis sur le français : une page à moitié
 * traduite vaut mieux qu'une page vide, et bien mieux qu'une clé en clair.
 *
 * Les apps pas encore rédigées utilisent leur description courte, reprise du
 * dictionnaire de l'ancien site — jamais un texte inventé.
 */

import { pageCopy as binero } from '@/content/apps/binero/page-copy';
import { pageCopy as combo } from '@/content/apps/combo/page-copy';
import { pageCopy as contree } from '@/content/apps/contree/page-copy';
import { pageCopy as ecopompe } from '@/content/apps/ecopompe/page-copy';
import { pageCopy as glyphe } from '@/content/apps/glyphe/page-copy';
import { pageCopy as graviwords } from '@/content/apps/graviwords/page-copy';
import { pageCopy as holdfire } from '@/content/apps/holdfire/page-copy';
import { pageCopy as keeply } from '@/content/apps/keeply/page-copy';
import { pageCopy as meliz } from '@/content/apps/meliz/page-copy';
import { pageCopy as motfleche } from '@/content/apps/motfleche/page-copy';
import { pageCopy as orbis } from '@/content/apps/orbis/page-copy';
import { pageCopy as poddroid } from '@/content/apps/poddroid/page-copy';
import { pageCopy as randompix } from '@/content/apps/randompix/page-copy';
import { pageCopy as remindo } from '@/content/apps/remindo/page-copy';
import { pageCopy as shizuku } from '@/content/apps/shizuku/page-copy';
import { pageCopy as sudoku } from '@/content/apps/sudoku/page-copy';
import { pageCopy as talon } from '@/content/apps/talon/page-copy';
import { pageCopy as tengo } from '@/content/apps/tengo/page-copy';
import { pageCopy as tinta } from '@/content/apps/tinta/page-copy';
import { pageCopy as zenkuto } from '@/content/apps/zenkuto/page-copy';
import { shortCopy } from './copy';
import { DEFAULT_LANG, type AppCopy, type AppData, type Lang } from './types';

type PerLang = Partial<Record<Lang, AppCopy>>;

const FULL: Record<string, PerLang> = {
  binero,
  combo,
  contree,
  ecopompe,
  glyphe,
  graviwords,
  holdfire,
  keeply,
  meliz,
  motfleche,
  orbis,
  poddroid,
  randompix,
  remindo,
  shizuku,
  sudoku,
  talon,
  tengo,
  tinta,
  zenkuto,
};

/** Une app dispose-t-elle d'une page rédigée ? */
export function hasFullCopy(slug: string): boolean {
  return slug in FULL;
}

/** Les apps dont la page reste à écrire — sert au contrôle de couverture. */
export function slugsWithoutCopy(slugs: string[]): string[] {
  return slugs.filter((s) => !hasFullCopy(s));
}

export function appCopy(app: AppData, lang: Lang): AppCopy {
  const perLang = FULL[app.slug];
  const full = perLang?.[lang] ?? perLang?.en ?? perLang?.[DEFAULT_LANG];
  if (full) return full;

  return fallbackCopy(app, lang);
}

/**
 * Page minimale bâtie sur la description courte, pour une app dont la page
 * complète n'est pas encore écrite. Elle reste exacte : elle ne dit rien que le
 * dictionnaire de l'ancien site ne disait déjà.
 */
function fallbackCopy(app: AppData, lang: Lang): AppCopy {
  const short = shortCopy(app.slug, lang);
  return {
    tagline: short.tagline,
    headline: { lead: app.name, highlight: short.tagline },
    intro: short.description,
    stats: [],
    sections: [
      {
        id: 'features',
        title: app.name,
        items: short.chips.map((chip) => ({ title: chip, body: '' })),
      },
      {
        id: 'privacy',
        kicker: 'Vie privée',
        title: 'Ce que fait cette application de vos données',
        body: 'Le détail figure dans la politique de confidentialité liée ci-dessous.',
      },
    ],
    cta: { title: app.name, body: short.description },
    meta: {
      title: `${app.name} — ${short.tagline}`,
      description: short.description,
    },
    chips: short.chips,
  };
}
