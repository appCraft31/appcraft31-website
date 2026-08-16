#!/usr/bin/env node
/**
 * Relève les identifiants de produits d'achat intégré déclarés dans le code de
 * chaque app.
 *
 * Un identifiant dit ce que l'achat fait bien mieux qu'un souvenir :
 * `com.appcraft31.dailysudoku.noads` ne laisse aucun doute sur le fait que
 * l'app affiche de la publicité. Sert à remplir `privacy-facts.ts`.
 *
 * Usage : node scripts/audit-iap.mjs
 */

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const PROJECTS = join(homedir(), 'StudioProjects');

const SOURCES = {
  remindo: 'rappel',
  holdfire: 'tir_game',
  sudoku: 'sudoku',
  talon: 'solitaire',
  tinta: 'Tinta',
  binero: 'binero',
  glyphe: 'glyphe',
  zenkuto: 'zenkuro',
  contree: 'contre',
  keeply: 'Keeply',
  combo: 'squareLink',
  randompix: 'randompix',
  graviwords: 'GraviWord',
  orbis: 'Orbis',
  tengo: 'tenGO',
  meliz: 'meliz',
  motfleche: 'mot_fleche',
  poddroid: 'podcast',
  ecopompe: 'Ecopompe',
};

const EXCLUDED = ['build', 'DerivedData', 'Pods', 'node_modules', '.git', '.dart_tool', 'Carthage'];

for (const [slug, dir] of Object.entries(SOURCES)) {
  const projectDir = join(PROJECTS, dir);
  if (!existsSync(projectDir)) {
    console.log(`${slug.padEnd(12)} ⚠ dossier absent : ${dir}`);
    continue;
  }
  let ids = [];
  try {
    const out = execFileSync(
      '/usr/bin/grep',
      [
        '-rhoE',
        ...EXCLUDED.flatMap((d) => ['--exclude-dir', d]),
        '--include=*.dart',
        '--include=*.swift',
        '--include=*.kt',
        '--include=*.storekit',
        '--include=*.json',
        'com\\.appcraft31\\.[a-z0-9_]+\\.[a-z0-9_.]+',
        projectDir,
      ],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 20_000 },
    );
    // On écarte les identifiants de bundle (…​.ios, .android) : ce sont des apps,
    // pas des produits.
    ids = [...new Set(out.split('\n').filter(Boolean))]
      .filter((id) => !/\.(ios|android|app|watchkitapp|widget)$/.test(id))
      .slice(0, 6);
  } catch {
    ids = [];
  }
  console.log(`${slug.padEnd(12)} ${ids.length ? ids.join('  ') : '— aucun produit trouvé'}`);
}
