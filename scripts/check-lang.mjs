#!/usr/bin/env node
/**
 * Une page qui se déclare japonaise contient-elle du japonais ?
 *
 * Le repli de `appCopy()` sert l'anglais quand une langue manque, et celui de
 * `shortCopy()` sert le français : une page traduite à moitié — ou pas du tout —
 * s'affiche sans la moindre erreur. C'est ainsi que 184 pages ont pu déclarer
 * `lang="ja"` et un `hreflang` japonais en servant de l'anglais, sans que rien
 * ne le signale pendant des mois.
 *
 * Ce script mesure le texte réellement rendu. Deux méthodes, selon l'écriture :
 *
 * - **ja, ko** : la proportion de caractères propres à l'écriture. Sans appel.
 * - **es, de** : l'alphabet est le même que l'anglais, le ratio ne dirait rien.
 *   On compte donc des mots outils — ceux qu'aucune phrase de la langue n'évite
 *   — et on refuse une page qui n'en a pas assez, ou qui garde trop de mots
 *   exclusivement anglais.
 *
 * Le cliquet `TRANSLATED` dit quelles apps sont censées être traduites. Il
 * s'allonge à chaque lot, jamais l'inverse : ce qui est traduit ne peut plus
 * régresser sans faire échouer le build.
 *
 * Usage : node scripts/check-lang.mjs
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'out');

/** Les apps dont les six langues sont écrites. À compléter lot par lot. */
export const TRANSLATED = ['zellige', 'elastichero'];

/**
 * Les rubriques contrôlées.
 *
 * Les politiques de confidentialité y sont entrées quand le gabarit s'est mis à
 * parler les six langues : leur texte est engendré depuis
 * `privacy-strings/<lang>.ts`, si bien qu'une seule traduction couvre les 23
 * apps d'un coup. Les fragments propres à chaque app (`privacy-facts.ts`)
 * peuvent encore retomber sur l'anglais — le seuil en tient compte.
 */
const SCOPES = ['apps', 'privacy'];

/**
 * Seuils calibrés sur les accueils, dont le chrome est traduit dans les six
 * langues : ja 38,8 % · ko 35,1 % · es 7,3 % · de 6,5 %, contre 0,0 à 0,2 %
 * pour les mêmes mesures sur une page d'une autre langue. On prend la moitié,
 * pour laisser respirer une page courte.
 *
 * Les mots outils espagnols sont choisis **hors du français** : « de », « la »,
 * « un », « que » sont communs aux deux, et une page restée française marquait
 * 6,6 % avec la première liste — au-dessus du seuil qu'elle devait déclencher.
 */
const RULES = {
  ja: { script: /[぀-ヿ㐀-鿿]/g, min: 0.2 },
  ko: { script: /[가-힯ᄀ-ᇿ]/g, min: 0.2 },
  es: {
    words: /\b(?:el|los|las|para|con|una|más|por|su|del|al|es|y|pero|también|cada)\b/gi,
    min: 0.03,
  },
  de: {
    words: /\b(?:und|der|die|das|mit|für|nicht|auf|sich|ein|eine|ohne|jede|von|aber|auch)\b/gi,
    min: 0.03,
  },
};

/**
 * Les mots qui trahissent de l'anglais resté en place — le repli d'`appCopy`.
 * Mesuré à 8,7 % sur une page anglaise, 0,0 % sur toutes les autres.
 */
const ENGLISH = /\b(?:the|and|with|your|every|without|from|that|this|which|are|our)\b/gi;
const ENGLISH_MAX = 0.02;

/** Le texte visible d'une page : sans scripts, sans styles, sans balises. */
function visibleText(html) {
  const body = html.slice(html.indexOf('</head>'));
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Ce qui ne peut pas être traduit, et fausserait la mesure : noms de produits,
 * nom du studio, adresses, chiffres, et le vocabulaire de marque des boutiques.
 */
function stripUntranslatable(text) {
  const registry = readFileSync(join(ROOT, 'src/lib/apps.ts'), 'utf8');
  const names = [...registry.matchAll(/name: '([^']+)'/g)].map((m) => m[1]);
  let out = text;
  for (const name of [...names, 'AppCraft31', 'App Store', 'Google Play', 'Toulouse']) {
    out = out.split(name).join(' ');
  }
  return out.replace(/https?:\/\/\S+/g, ' ').replace(/[\d\s%·—–-]+/g, ' ');
}

function pages(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return entry === '_next' ? [] : pages(full);
    return entry.endsWith('.html') ? [full] : [];
  });
}

if (!existsSync(OUT)) {
  console.error('✗ out/ est absent — lancer `npm run build` d’abord.');
  process.exit(1);
}

let problems = 0;
let checked = 0;

for (const [lang, rule] of Object.entries(RULES)) {
  for (const file of pages(join(OUT, lang))) {
    const parts = relative(OUT, file).replace(/\.html$/, '').split('/');
    const slug = parts.pop();
    // Le cliquet : seules les apps déclarées traduites sont exigées, et
    // seulement dans les rubriques dont le contenu est réellement traduisible.
    if (!TRANSLATED.includes(slug) || !SCOPES.includes(parts.at(-1))) continue;
    checked++;

    const text = stripUntranslatable(visibleText(readFileSync(file, 'utf8')));
    const total = text.replace(/\s/g, '').length;
    if (total < 200) continue;

    if (rule.script) {
      const ratio = (text.match(rule.script) ?? []).length / total;
      if (ratio < rule.min) {
        console.error(
          `✗ ${relative(OUT, file)} — ${(ratio * 100).toFixed(0)} % de caractères ${lang}, minimum ${rule.min * 100} %`,
        );
        problems++;
      }
      continue;
    }

    const words = text.split(/\s+/).length;
    const hits = (text.match(rule.words) ?? []).length / words;
    const english = (text.match(ENGLISH) ?? []).length / words;
    if (hits < rule.min) {
      console.error(
        `✗ ${relative(OUT, file)} — ${(hits * 100).toFixed(1)} % de mots ${lang}, minimum ${rule.min * 100} %`,
      );
      problems++;
    } else if (english > ENGLISH_MAX) {
      console.error(
        `✗ ${relative(OUT, file)} — ${(english * 100).toFixed(1)} % de mots anglais : traduction incomplète`,
      );
      problems++;
    }
  }
}

if (problems > 0) {
  console.error(`\n${problems} page(s) ne parlent pas la langue qu’elles déclarent.`);
  process.exit(1);
}

console.log(
  TRANSLATED.length === 0
    ? '✓ Aucune app déclarée traduite pour l’instant (cliquet vide).'
    : `✓ ${checked} pages traduites parlent bien leur langue (${TRANSLATED.length} apps au cliquet).`,
);
