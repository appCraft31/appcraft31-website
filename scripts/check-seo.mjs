#!/usr/bin/env node
/**
 * Contrôle des signaux d'indexation, sur le HTML réellement produit.
 *
 * Les défauts qu'il traque étaient tous invisibles en lisant le code : un
 * `openGraph` de page qui remplace celui du layout et emporte `og:image`, un
 * canonical qui désigne un fichier absent (`/en/`, 404 en production), cinq
 * accueils traduits sans autre titre que « AppCraft31 ». Ils ne se voient que
 * dans `out/`, et c'est donc `out/` qu'on lit.
 *
 * Usage : node scripts/check-seo.mjs
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'out');
const SITE = 'https://appcraft31.app';

if (!existsSync(OUT)) {
  console.error('✗ out/ est absent — lancer `npm run build` d’abord.');
  process.exit(1);
}

/** Toutes les pages HTML exportées. */
function pages(dir = OUT) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return entry === '_next' ? [] : pages(full);
    return entry.endsWith('.html') ? [full] : [];
  });
}

const attr = (html, re) => html.match(re)?.[1] ?? null;

/**
 * L'URL déclarée désigne-t-elle un fichier que l'export a produit ?
 *
 * C'est le contrôle qui aurait arrêté le défaut le plus coûteux : le sitemap et
 * les `hreflang` annonçaient `/en/`, quand l'export statique sans
 * `trailingSlash` écrit `out/en.html`. Cinq accueils déclarés, cinq 404.
 */
function fileFor(url) {
  if (!url.startsWith(SITE)) return null;
  // Une chaîne de requête ne change pas de fichier : `/play/meliz/?lang=en`
  // est servi par `/play/meliz/index.html`, et le jeu lit le paramètre.
  const path = url.slice(SITE.length).split(/[?#]/)[0] || '/';
  if (path === '/') return join(OUT, 'index.html');
  if (path.endsWith('/')) return join(OUT, path, 'index.html');
  if (path.endsWith('.html')) return join(OUT, path);
  return join(OUT, `${path}.html`);
}

let problems = 0;
const fail = (file, message) => {
  console.error(`✗ ${relative(OUT, file)} — ${message}`);
  problems++;
};

let checked = 0;

for (const file of pages()) {
  const html = readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));

  // Une page volontairement hors index n'a pas à porter ces signaux.
  if (/name="robots"[^>]*content="[^"]*noindex/.test(head)) continue;
  checked++;

  const title = attr(head, /<title>([^<]*)<\/title>/);
  if (!title) fail(file, 'aucun <title>');
  else if (title === 'AppCraft31') fail(file, 'titre générique « AppCraft31 »');

  const description = attr(head, /<meta name="description" content="([^"]*)"/);
  if (!description) fail(file, 'aucune meta description');
  else if (description.length < 50) fail(file, `description trop courte (${description.length} car.)`);

  const canonical = attr(head, /rel="canonical" href="([^"]*)"/);
  if (!canonical) fail(file, 'aucun rel=canonical');
  else {
    const target = fileFor(canonical);
    if (target && !existsSync(target)) fail(file, `canonical vers un fichier absent : ${canonical}`);
  }

  const alternates = [...head.matchAll(/rel="alternate" hrefLang="([a-z-]+)" href="([^"]+)"/gi)];
  if (alternates.length) {
    if (!alternates.some(([, lang]) => lang === 'x-default')) fail(file, 'grappe hreflang sans x-default');
    for (const [, lang, url] of alternates) {
      const target = fileFor(url);
      if (target && !existsSync(target)) fail(file, `hreflang ${lang} vers un fichier absent : ${url}`);
    }
  }

  // Le piège de la fusion des métadonnées : ces trois-là disparaissent
  // ensemble, dès qu'une page écrit son propre bloc openGraph.
  for (const property of ['og:title', 'og:description', 'og:image', 'og:site_name', 'og:locale']) {
    if (!head.includes(`property="${property}"`)) fail(file, `${property} manquant`);
  }

  const card = attr(head, /name="twitter:card" content="([^"]*)"/);
  if (card !== 'summary_large_image') fail(file, `twitter:card = ${card ?? 'absent'}`);

  const h1 = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1 !== 1) fail(file, `${h1} balise(s) h1`);

  // La langue déclarée doit correspondre au répertoire qui sert la page.
  const lang = attr(html, /<html lang="([^"]*)"/);
  const expected = relative(OUT, file).match(/^(en|ja|ko|es|de)[/.]/)?.[1] ?? 'fr';
  if (lang !== expected) fail(file, `html lang="${lang}" dans un chemin ${expected}`);
}

if (problems > 0) {
  console.error(`\n${problems} problème(s) sur ${checked} pages indexables.`);
  process.exit(1);
}

console.log(`✓ ${checked} pages indexables : titre, description, canonical, hreflang, Open Graph et langue.`);
