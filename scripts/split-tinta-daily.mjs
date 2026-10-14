#!/usr/bin/env node
/**
 * Découpe l'export des grilles du jour de Tinta en un fichier par mois.
 *
 * L'export vient du moteur Swift de l'app (dépôt Tinta) :
 *   cd ~/StudioProjects/Tinta/PuzzleEngine
 *   swift run -c release PuzzlePackTool daily-export 2026-09-01 2027-12-31 /tmp/tinta-daily.json
 *
 * Le jeu web (`/jouer/tinta.html`) ne charge que le mois du jour
 * (`/data/tinta/AAAA-MM.json`, ~45 Ko, ~8 Ko compressé) au lieu de 16 mois.
 * Les grilles sont donc exactement celles de l'app, pour tout le monde.
 *
 * Usage : node scripts/split-tinta-daily.mjs <export.json>
 */

import { mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'public/data/tinta');

const src = process.argv[2];
if (!src) {
  console.error('Usage : node scripts/split-tinta-daily.mjs <export.json>');
  process.exit(1);
}

const all = JSON.parse(readFileSync(src, 'utf8'));
const byMonth = new Map();
for (const p of all) {
  const month = p.date.slice(0, 7);
  if (!byMonth.has(month)) byMonth.set(month, []);
  byMonth.get(month).push(p);
}

mkdirSync(OUT, { recursive: true });
for (const f of readdirSync(OUT)) if (f.endsWith('.json')) rmSync(join(OUT, f));

const months = [...byMonth.keys()].sort();
for (const month of months) {
  writeFileSync(join(OUT, `${month}.json`), JSON.stringify(byMonth.get(month)));
}
console.log(`${all.length} grilles, ${months.length} mois → public/data/tinta/`);
