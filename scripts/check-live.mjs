#!/usr/bin/env node
/**
 * Vérifie qu'un site déployé répond bien sur les 44 URLs historiques.
 *
 * Le contrôle local (`check-urls.mjs`) prouve que les fichiers sont produits ;
 * celui-ci prouve que l'hébergeur les sert. C'est une nuance qui compte : une
 * option `cleanUrls` activée par mégarde transformerait chaque
 * `/apps/<slug>.html` en redirection, et les fiches store pointeraient vers
 * une adresse qui ne répond plus le jour d'une soumission.
 *
 * Usage :
 *   node scripts/check-live.mjs                          # production
 *   node scripts/check-live.mjs https://mon-apercu.vercel.app
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const base = (process.argv[2] ?? 'https://appcraft31.app').replace(/\/$/, '');

const urls = readFileSync(join(ROOT, 'scripts/urls-historiques.txt'), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

// La racine se teste en plus des 44 chemins : c'est par elle qu'arrivent les
// visiteurs, et un serveur mal réglé peut y répondre 200 en servant une
// liste de fichiers plutôt que la page d'accueil.
urls.push('');

console.log(`Contrôle de ${urls.length} URLs sur ${base}\n`);

let ko = 0;
const suspects = [];

for (const path of urls) {
  const url = `${base}/${path}`;
  let status = 0;
  let redirect = '';
  let body = '';
  try {
    // `manual` : une redirection est un échec, pas un succès déguisé.
    // On lit le corps : un 200 peut très bien servir autre chose que la page
    // attendue (une liste de fichiers, une page d'erreur maison).
    const res = await fetch(url, { redirect: 'manual' });
    status = res.status;
    redirect = res.headers.get('location') ?? '';
    if (status === 200) body = await res.text();
  } catch (err) {
    console.error(`✗ ${url} — injoignable (${err.message})`);
    ko++;
    continue;
  }

  if (status !== 200) {
    ko++;
    console.error(`✗ ${url} — HTTP ${status}${redirect ? ` → ${redirect}` : ''}`);
    continue;
  }

  // Un 200 peut servir autre chose que la page attendue : une liste de
  // fichiers, une page d'erreur maison. Ce n'est pas une URL cassée — donc un
  // avertissement, pas un échec — mais ça mérite un coup d'œil.
  if (!/appcraft/i.test(body)) {
    suspects.push(url);
  }
}

if (suspects.length > 0) {
  console.warn(
    `\n⚠ ${suspects.length} URL(s) répondent 200 sans porter la marque du site :`,
  );
  for (const url of suspects) console.warn(`   ${url}`);
  console.warn('  (attendu sur l\'ancien site, dont certaines pages sont autonomes)');
}

if (ko > 0) {
  console.error(`\n${ko} URL(s) ne répondent pas 200. Les fiches store qui les citent sont cassées.`);
  process.exit(1);
}

console.log(`\n✓ Les ${urls.length} URLs répondent 200.`);
