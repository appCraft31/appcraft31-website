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

/** Les apps dont les six langues sont écrites — même cliquet que check:lang. */
const TRANSLATED = ['zellige'];

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

  // Le cliquet : six langues exigées pour les apps déclarées traduites, deux
  // pour les autres. La liste ne fait que s'allonger — une app traduite ne peut
  // plus régresser sans faire échouer le build.
  const required = TRANSLATED.includes(slug) ? ['fr', 'en', 'ja', 'ko', 'es', 'de'] : ['fr', 'en'];
  const missing = required.filter((l) => !new RegExp(`\\b${l}\\b`).test(langs));
  if (missing.length) {
    console.error(`✗ ${slug} : langue(s) manquante(s) — ${missing.join(', ')}`);
    problems++;
  }

  // Une clé présente mais recopiée d'une autre langue est le mode d'échec le
  // plus probable d'un chantier de 40 000 mots : c'est exactement ce que
  // l'audit a trouvé sur les 184 pages « traduites ».
  if (TRANSLATED.includes(slug)) {
    /**
     * L'intro d'une langue, qu'elle vive dans `page-copy.ts` (deux langues) ou
     * dans son propre `copy.<lang>.ts` (six langues, format éclaté).
     */
    const intro = (lang) => {
      const own = join(ROOT, 'src/content/apps', slug, `copy.${lang}.ts`);
      const source = existsSync(own)
        ? readFileSync(own, 'utf8')
        : copy.match(new RegExp(`const ${lang}: AppCopy = \\{[\\s\\S]*?\\n\\};`))?.[0] ?? '';
      return source.match(/\n  intro:\s*\n?\s*['"]([^'"]{20,})/)?.[1];
    };

    const reference = { fr: intro('fr'), en: intro('en') };
    for (const lang of ['ja', 'ko', 'es', 'de']) {
      const text = intro(lang);
      if (!text) continue;
      if (text === reference.fr || text === reference.en) {
        const source = text === reference.fr ? 'français' : 'anglais';
        console.error(`✗ ${slug} : l'intro ${lang} est identique au ${source} — non traduite`);
        problems++;
      }
    }
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
