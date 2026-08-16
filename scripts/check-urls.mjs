#!/usr/bin/env node
/**
 * Garde-fou : aucune URL du site historique ne doit disparaître du build.
 *
 * Les adresses `/apps/<slug>.html` et `/privacy/<slug>.html` sont déclarées dans
 * des fiches App Store et Google Play déjà validées. En perdre une, c'est une
 * fiche qui pointe dans le vide — et un refus à la prochaine soumission.
 *
 * Usage : npm run build && npm run check:urls
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'out');
const EXPECTED = join(ROOT, 'scripts/urls-historiques.txt');

if (!existsSync(OUT)) {
  console.error('✗ Pas de dossier out/ — lancer `npm run build` d\'abord.');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const built = new Set(
  walk(OUT)
    .filter((f) => f.endsWith('.html'))
    .map((f) => relative(OUT, f)),
);

const expected = readFileSync(EXPECTED, 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

const missing = expected.filter((url) => !built.has(url));

if (missing.length > 0) {
  console.error(`✗ ${missing.length} URL(s) du site historique absentes du build :`);
  for (const url of missing) console.error(`   /${url}`);
  process.exit(1);
}

console.log(`✓ ${expected.length} URLs historiques présentes (${built.size} pages générées au total).`);
