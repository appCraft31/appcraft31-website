#!/usr/bin/env node
/**
 * La grille du jour du jeu web Binero est-elle celle de l'app ?
 *
 * `fixtures/binero-daily-v2.json` est copiée de
 * `binero/binero_Android/test/fixtures/daily_v2.json` : les grilles qu'iOS
 * produit, et que la version Android vérifie déjà. Le portage JavaScript
 * (`public/play/binero/js/engine.js`) doit les redonner case pour case — sinon
 * « la même grille pour tout le monde » serait faux entre le site et l'app.
 *
 * Usage : node scripts/check-binero-daily.mjs
 */

import { readFileSync } from 'node:fs';
import { generateDaily } from '../public/play/binero/js/engine.js';

const fixtures = JSON.parse(
  readFileSync(new URL('./fixtures/binero-daily-v2.json', import.meta.url), 'utf8'),
);

let failures = 0;
for (const fixture of fixtures) {
  const started = performance.now();
  const puzzle = generateDaily(fixture.date, fixture.difficulty);
  const ms = Math.round(performance.now() - started);
  const same =
    puzzle.size === fixture.size &&
    puzzle.givens.join() === fixture.givens.join() &&
    puzzle.solution.join() === fixture.solution.join();
  console.log(`${same ? '✓' : '✗'} ${fixture.date} ${fixture.difficulty.padEnd(6)} ${fixture.size}×${fixture.size}  ${ms} ms`);
  if (!same) failures++;
}

if (failures) {
  console.error(`\n${failures} grille(s) du jour diffèrent de l'app.`);
  process.exit(1);
}
console.log(`\nLes ${fixtures.length} grilles du jour sont identiques à celles de l'app.`);
