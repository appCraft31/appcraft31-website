#!/usr/bin/env node
/**
 * Migration ponctuelle : extrait les icônes SVG dessinées à la main dans
 * l'ancien index.html vers des fichiers `public/assets/icons/<slug>.svg`.
 *
 * Ces icônes sont du vrai travail graphique déjà fait, et elles reprennent
 * l'identité de chaque app : autant les récupérer plutôt que les redessiner.
 *
 * À lancer une seule fois : node scripts/extract-icons.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const html = readFileSync(join(ROOT, '_legacy/index.html'), 'utf8');
const OUT = join(ROOT, 'public/assets/icons');
mkdirSync(OUT, { recursive: true });

// Chaque carte est un <article class="app-card app-card--<slug> …"> … </article>.
const cardRe = /<article class="app-card app-card--([a-z0-9]+)[^"]*"[\s\S]*?<\/article>/g;

let found = 0;
let skipped = [];

for (const [card, slug] of html.matchAll(cardRe)) {
  // On ne garde que le premier SVG de la carte : c'est l'icône du produit.
  const svg = card.match(/<svg[\s\S]*?<\/svg>/);
  if (!svg) {
    skipped.push(slug);
    continue;
  }

  let content = svg[0]
    // Les attributs de présentation appartiennent au CSS de l'ancien site.
    .replace(/\s+class="[^"]*"/g, '')
    .trim();

  if (!content.includes('xmlns=')) {
    content = content.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  writeFileSync(join(OUT, `${slug}.svg`), content + '\n', 'utf8');
  found++;
}

console.log(`✓ ${found} icônes SVG extraites vers public/assets/icons/`);
if (skipped.length) {
  console.log(`  sans SVG inline (icône image ou markup CSS) : ${skipped.join(', ')}`);
}
