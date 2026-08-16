#!/usr/bin/env node
/**
 * Contrôle de couverture du contenu.
 *
 * Une page produit qui retombe sur son texte de secours s'affiche sans erreur :
 * elle est simplement plus pauvre que les autres, et personne ne le remarque au
 * milieu de vingt pages. Ce script la nomme.
 *
 * Usage : node scripts/check-content.mjs
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

// Le registre est du TypeScript : on en extrait les slugs sans le compiler.
const apps = readFileSync(join(ROOT, 'src/lib/apps.ts'), 'utf8');
const slugs = [...apps.matchAll(/^\s*slug: '([a-z0-9-]+)',$/gm)].map((m) => m[1]);

const wired = readFileSync(join(ROOT, 'src/lib/app-copy.ts'), 'utf8');

let problems = 0;

for (const slug of slugs) {
  const file = join(ROOT, 'src/content/apps', slug, 'page-copy.ts');

  if (!existsSync(file)) {
    console.error(`✗ ${slug} : pas de page-copy.ts — la page utilisera le texte de secours`);
    problems++;
    continue;
  }
  if (!wired.includes(`apps/${slug}/page-copy`)) {
    console.error(`✗ ${slug} : page-copy.ts écrit mais jamais importé dans lib/app-copy.ts`);
    problems++;
    continue;
  }

  const copy = readFileSync(file, 'utf8');
  const langs = copy.match(/pageCopy: Partial<Record<Lang, AppCopy>> = \{([^}]*)\}/)?.[1] ?? '';
  const missing = ['fr', 'en'].filter((l) => !langs.includes(l));
  if (missing.length) {
    console.error(`✗ ${slug} : langue(s) manquante(s) — ${missing.join(', ')}`);
    problems++;
  }
}

// Une app présente dans le contenu mais absente du registre n'est jamais rendue.
const contentDir = join(ROOT, 'src/content/apps');
for (const dir of readdirSync(contentDir)) {
  if (!slugs.includes(dir)) {
    console.error(`✗ ${dir} : dossier de contenu sans entrée dans le registre lib/apps.ts`);
    problems++;
  }
}

if (problems > 0) {
  console.error(`\n${problems} problème(s) de couverture.`);
  process.exit(1);
}

console.log(`✓ ${slugs.length} produits : page rédigée, branchée, en français et en anglais.`);
