#!/usr/bin/env node
/**
 * Convertit les captures d'écran en WebP et met à jour le registre.
 *
 * En export statique, `next/image` ne peut rien optimiser à la volée : les
 * images partent telles quelles au navigateur. Une capture d'écran d'iPhone en
 * PNG pèse facilement 700 Ko, pour une page qui en affiche quatre. La même en
 * WebP en pèse dix fois moins, à l'œil nu identique.
 *
 * Les originaux sont conservés : la conversion se relance sans perte.
 *
 * Usage : node scripts/convert-webp.mjs [--apply]
 */

import { execFileSync } from 'node:child_process';
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const ASSETS = join(ROOT, 'public/assets');
const APPLY = process.argv.includes('--apply');

/** En dessous de ce poids, la conversion ne vaut pas la peine. */
const MIN_BYTES = 60 * 1024;

const candidates = readdirSync(ASSETS)
  .filter((f) => ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase()))
  .map((f) => ({ name: f, path: join(ASSETS, f), size: statSync(join(ASSETS, f)).size }))
  .filter((f) => f.size >= MIN_BYTES)
  .sort((a, b) => b.size - a.size);

if (candidates.length === 0) {
  console.log('Rien à convertir.');
  process.exit(0);
}

let before = 0;
let after = 0;
const renames = [];

for (const file of candidates) {
  const target = join(ASSETS, `${basename(file.name, extname(file.name))}.webp`);
  before += file.size;

  if (!APPLY) {
    console.log(`  ${file.name} (${Math.round(file.size / 1024)} Ko)`);
    continue;
  }

  if (!existsSync(target)) {
    // -q 82 : le seuil au-delà duquel l'œil ne distingue plus une capture d'UI.
    execFileSync('cwebp', ['-q', '82', '-quiet', file.path, '-o', target], { stdio: 'inherit' });
  }
  const size = statSync(target).size;
  after += size;
  renames.push([`/assets/${file.name}`, `/assets/${basename(target)}`]);
  console.log(
    `✓ ${file.name} : ${Math.round(file.size / 1024)} Ko → ${Math.round(size / 1024)} Ko`,
  );
}

if (!APPLY) {
  console.log(
    `\n${candidates.length} image(s), ${Math.round(before / 1024 / 1024)} Mo au total.` +
      '\nRelancer avec --apply pour convertir et mettre à jour le registre.',
  );
  process.exit(0);
}

// Le registre est la seule source des chemins d'images : on n'y touche qu'ici.
const registry = join(ROOT, 'src/lib/apps.ts');
let code = readFileSync(registry, 'utf8');
let updated = 0;
for (const [from, to] of renames) {
  if (code.includes(`'${from}'`)) {
    code = code.split(`'${from}'`).join(`'${to}'`);
    updated++;
  }
}
writeFileSync(registry, code, 'utf8');

console.log(
  `\n${Math.round(before / 1024 / 1024)} Mo → ${Math.round(after / 1024 / 1024)} Mo ` +
    `(${Math.round((1 - after / before) * 100)} % de moins), ${updated} chemin(s) mis à jour.`,
);
console.log('Les originaux sont conservés : supprimez-les une fois le rendu vérifié.');
