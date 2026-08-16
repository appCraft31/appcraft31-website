#!/usr/bin/env node
/**
 * Raccorde les deux jeux web au site.
 *
 * `/play/meliz/` et `/holdfire/event/` sont des pages autonomes dont le
 * JavaScript pilote un DOM précis : les réécrire en composants React les
 * casserait pour un gain nul. On leur ajoute donc le strict nécessaire — un
 * bandeau aux couleurs du site, qui ramène à la page du produit — sans toucher
 * à une ligne de leur mise en page ni de leur logique.
 *
 * Le script est idempotent : relancé, il ne duplique pas le bandeau.
 *
 * Usage : node scripts/wrap-games.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

const GAMES = [
  {
    file: 'public/play/meliz/index.html',
    label: 'Mêliz',
    back: '/apps/meliz.html',
    accent: '#FFB5C5',
  },
  {
    file: 'public/holdfire/event/index.html',
    label: 'Hold Fire',
    back: '/apps/holdfire.html',
    accent: '#3BE8FF',
  },
];

const MARKER = 'ac31-gamebar';

function bar({ label, back, accent }) {
  return `
<!-- Bandeau AppCraft31 (${MARKER}) — ajouté par scripts/wrap-games.mjs -->
<style>
  .${MARKER}{position:sticky;top:0;z-index:9999;display:flex;align-items:center;gap:14px;
    padding:8px clamp(14px,4vw,28px);background:#0c0a10;color:#f6f1ea;
    font:500 14px/1.4 Inter,-apple-system,BlinkMacSystemFont,system-ui,sans-serif;
    border-bottom:1px solid rgba(246,241,234,.14)}
  .${MARKER} a{color:inherit;text-decoration:none}
  .${MARKER} a:hover{color:${accent}}
  .${MARKER}-brand{font-weight:800;letter-spacing:-.03em}
  .${MARKER}-brand i{font-style:normal;color:#ff7a4d}
  .${MARKER}-sep{opacity:.35}
  .${MARKER}-back{margin-inline-start:auto;color:${accent}}
</style>
<nav class="${MARKER}" aria-label="AppCraft31">
  <a class="${MARKER}-brand" href="/">AppCraft<i>31</i></a>
  <span class="${MARKER}-sep" aria-hidden="true">/</span>
  <span>${label}</span>
  <a class="${MARKER}-back" href="${back}">À propos du jeu →</a>
</nav>
`;
}

let changed = 0;

for (const game of GAMES) {
  const path = join(ROOT, game.file);
  if (!existsSync(path)) {
    console.error(`✗ absent : ${game.file}`);
    process.exitCode = 1;
    continue;
  }

  let html = readFileSync(path, 'utf8');
  if (html.includes(MARKER)) {
    console.log(`· ${game.file} — bandeau déjà présent`);
    continue;
  }

  const bodyOpen = html.match(/<body[^>]*>/);
  if (!bodyOpen) {
    console.error(`✗ ${game.file} : pas de <body>, rien fait`);
    process.exitCode = 1;
    continue;
  }

  html = html.replace(bodyOpen[0], bodyOpen[0] + bar(game));
  writeFileSync(path, html, 'utf8');
  console.log(`✓ ${game.file} — bandeau ajouté`);
  changed++;
}

console.log(`\n${changed} page(s) modifiée(s).`);
