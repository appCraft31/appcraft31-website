/**
 * Textes courts des produits (accroche, description, pastilles).
 *
 * Ils viennent du dictionnaire de l'ancien site, où ils étaient déjà traduits
 * en six langues — c'est du contenu validé, aligné sur les fiches store.
 * Les pages marketing complètes, elles, ont leurs propres textes.
 */

import binero from '@/content/apps/binero/legacy-copy.json';
import combo from '@/content/apps/combo/legacy-copy.json';
import contree from '@/content/apps/contree/legacy-copy.json';
import ecopompe from '@/content/apps/ecopompe/legacy-copy.json';
import glyphe from '@/content/apps/glyphe/legacy-copy.json';
import graviwords from '@/content/apps/graviwords/legacy-copy.json';
import holdfire from '@/content/apps/holdfire/legacy-copy.json';
import keeply from '@/content/apps/keeply/legacy-copy.json';
import meliz from '@/content/apps/meliz/legacy-copy.json';
import motfleche from '@/content/apps/motfleche/legacy-copy.json';
import orbis from '@/content/apps/orbis/legacy-copy.json';
import poddroid from '@/content/apps/poddroid/legacy-copy.json';
import randompix from '@/content/apps/randompix/legacy-copy.json';
import remindo from '@/content/apps/remindo/legacy-copy.json';
import shizuku from '@/content/apps/shizuku/legacy-copy.json';
import sudoku from '@/content/apps/sudoku/legacy-copy.json';
import talon from '@/content/apps/talon/legacy-copy.json';
import tengo from '@/content/apps/tengo/legacy-copy.json';
import tinta from '@/content/apps/tinta/legacy-copy.json';
import zenkuto from '@/content/apps/zenkuto/legacy-copy.json';
import { DEFAULT_LANG, type Lang } from './types';

type ShortCopy = {
  tagline?: string;
  desc?: string;
  c1?: string;
  c2?: string;
  c3?: string;
  c4?: string;
  c5?: string;
  c6?: string;
};

const SHORT: Record<string, Partial<Record<Lang, ShortCopy>>> = {
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

/**
 * Texte court d'un produit, avec repli sur le français : les quatre langues
 * ajoutées après coup ne couvrent pas encore toutes les nouveautés.
 */
export function shortCopy(slug: string, lang: Lang) {
  const perLang = SHORT[slug] ?? {};
  const wanted = perLang[lang] ?? {};
  const fallback = perLang[DEFAULT_LANG] ?? {};
  const pick = (key: keyof ShortCopy) => wanted[key] ?? fallback[key] ?? '';

  return {
    tagline: pick('tagline'),
    description: pick('desc'),
    chips: (['c1', 'c2', 'c3', 'c4', 'c5', 'c6'] as const).map(pick).filter(Boolean),
  };
}
