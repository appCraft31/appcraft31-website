// Le portage JS du moteur de Zellige (public/play/zellige/js/engine.js)
// produit-il exactement les grilles du moteur Dart de l'app ?
// Les grilles de référence (scripts/fixtures/zellige-v1.json) ont été exportées
// de Zellige/lib/engine avec `dart run` : grilles du jour sur plusieurs dates,
// et un niveau par palier sur des seeds fixes.
import { readFileSync } from 'node:fs';
import { generateDaily, generate, difficultyForLevel, SeededRandom } from '../public/play/zellige/js/engine.js';

const fixtures = JSON.parse(readFileSync(new URL('./fixtures/zellige-v1.json', import.meta.url)));
const same = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

let failures = 0;
for (const fx of fixtures) {
  const label = fx.kind === 'daily' ? `jour ${fx.date}` : `niveau ${fx.level}, seed ${fx.seed}`;
  const p = fx.kind === 'daily'
    ? generateDaily(fx.date)
    : generate(difficultyForLevel(fx.level), new SeededRandom(fx.seed));
  const diffs = ['regionOf', 'givens', 'solution'].filter((k) => !same(p[k], fx[k]));
  if (p.width !== fx.width || p.height !== fx.height) diffs.unshift('dimensions');
  if (diffs.length) {
    failures++;
    console.log(`✗ ${label} : ${diffs.join(', ')} diffèrent`);
  }
}
console.log(failures
  ? `${failures}/${fixtures.length} grilles divergent du moteur Dart.`
  : `✓ ${fixtures.length}/${fixtures.length} grilles identiques au moteur Dart.`);
process.exit(failures ? 1 : 0);
