#!/usr/bin/env node
/**
 * Migration ponctuelle : _legacy/js/i18n.js → src/content/site/<lang>.ts
 *
 * Le dictionnaire historique mélange deux choses : le texte du site (navigation,
 * hero, sections) et le texte des produits (`<slug>.tagline`, `.desc`, `.c1`…).
 * Ce script les sépare : le site part dans `src/content/site/`, les produits dans
 * `src/content/apps/<slug>/legacy-copy.json` où ils serviront de matière première
 * à la réécriture des pages.
 *
 * À lancer une seule fois : node scripts/migrate-i18n.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC = join(ROOT, '_legacy/js/i18n.js');

// Le fichier source est un IIFE : on isole l'objet I18N et on l'évalue.
const raw = readFileSync(SRC, 'utf8');
const start = raw.indexOf('var I18N = {');
if (start === -1) throw new Error('Objet I18N introuvable dans i18n.js');

// Fin de l'objet : la première ligne qui ferme au niveau d'indentation d'origine.
const after = raw.slice(start + 'var I18N = '.length);
let depth = 0;
let end = -1;
let inString = null;
for (let i = 0; i < after.length; i++) {
  const c = after[i];
  if (inString) {
    if (c === '\\') i++;
    else if (c === inString) inString = null;
    continue;
  }
  if (c === '"' || c === "'") inString = c;
  else if (c === '{') depth++;
  else if (c === '}') {
    depth--;
    if (depth === 0) {
      end = i + 1;
      break;
    }
  }
}
if (end === -1) throw new Error('Fin de l\'objet I18N introuvable');

const I18N = new Function(`return ${after.slice(0, end)}`)();
const LANGS = Object.keys(I18N);

// L'ancien dictionnaire utilise `zenkuro` alors que l'URL publique dit `zenkuto`.
// C'est l'URL qui fait foi : elle est dans une fiche store validée.
const SLUG_ALIASES = { zenkuro: 'zenkuto' };

// Les clés produit sont celles dont le préfixe est un slug connu.
const SLUGS = [
  'ecopompe', 'keeply', 'shizuku', 'poddroid', 'randompix', 'binero', 'glyphe',
  'graviwords', 'tengo', 'orbis', 'meliz', 'motfleche', 'remindo', 'holdfire',
  'sudoku', 'talon', 'tinta', 'contree', 'zenkuro', 'combo',
];

const siteByLang = {};
const appsByLang = {};

for (const lang of LANGS) {
  siteByLang[lang] = {};
  appsByLang[lang] = {};
  for (const [key, value] of Object.entries(I18N[lang])) {
    const prefix = key.split('.')[0];
    if (SLUGS.includes(prefix)) {
      (appsByLang[lang][prefix] ??= {})[key.slice(prefix.length + 1)] = value;
    } else {
      siteByLang[lang][key] = value;
    }
  }
}

const outSite = join(ROOT, 'src/content/site');
mkdirSync(outSite, { recursive: true });

for (const lang of LANGS) {
  const entries = Object.entries(siteByLang[lang])
    .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
    .join('\n');

  // Le français est la référence : il définit les clés, les autres s'y conforment
  // et peuvent être incomplets (le rendu retombe alors sur le français).
  const header =
    lang === 'fr'
      ? `/* Dictionnaire du site — référence des clés. */\n\nexport const dict = {\n${entries}\n} as const;\n`
      : `/* Dictionnaire du site — ${lang}. */\nimport type { SiteDict } from './keys';\n\n` +
        `export const dict: SiteDict = {\n${entries}\n};\n`;

  writeFileSync(join(outSite, `${lang}.ts`), header, 'utf8');
}

// Textes produits, conservés tels quels comme matière première par app.
for (const slug of SLUGS) {
  const perLang = {};
  for (const lang of LANGS) {
    if (appsByLang[lang][slug]) perLang[lang] = appsByLang[lang][slug];
  }
  if (Object.keys(perLang).length === 0) continue;
  const dir = join(ROOT, 'src/content/apps', SLUG_ALIASES[slug] ?? slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'legacy-copy.json'), JSON.stringify(perLang, null, 2) + '\n', 'utf8');
}

console.log(`✓ ${LANGS.length} langues → src/content/site/`);
console.log(`  clés site : ${Object.keys(siteByLang.fr).length}`);
console.log(`  produits avec texte : ${SLUGS.filter((s) => appsByLang.fr[s]).length}/${SLUGS.length}`);
