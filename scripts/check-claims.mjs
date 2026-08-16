#!/usr/bin/env node
/**
 * Traque les affirmations que le code des apps contredit.
 *
 * L'ancien site annonçait « sans publicité » pour Glyphe, qui charge AdMob et
 * vend un achat pour la retirer — la mention se cachait dans six traductions et
 * dans la politique de confidentialité. Ce script cherche ce genre de phrase
 * partout où elle peut se trouver, et la confronte à l'audit du code.
 *
 * Usage : node scripts/check-claims.mjs
 */

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { readdirSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;

const audit = JSON.parse(readFileSync(join(ROOT, 'src/content/sdk-audit.json'), 'utf8'));

/** Les tournures qui nient la publicité, dans les six langues du site. */
const NO_ADS =
  /sans publicit|aucune publicit|z[ée]ro publicit|no ads\b|ad-free|without ads|sin anuncios|sin publicidad|ohne werbung|werbefrei|広告はありません|広告なし|광고 없|광고가 없/i;

/** Les tournures qui nient les achats intégrés. */
const NO_IAP = /aucun achat|sans achat|no in-app purchase|keine in-app-käufe|sin compras/i;

/**
 * Une négation suivie d'une restriction n'est pas une négation.
 * « Aucune publicité pendant la partie » est exact pour un jeu dont la seule
 * annonce est une vidéo facultative en fin de manche.
 */
const QUALIFIED = /(pendant (la partie|le jeu)|during (play|a run|the game)|en cours de partie|im spiel|durante la partida)/i;

/**
 * Retire commentaires et chaînes de documentation d'un fichier TypeScript.
 * Sans ça, le commentaire qui *documente* la correction d'une affirmation
 * fausse la ferait signaler comme une affirmation fausse.
 */
function stripComments(source, file) {
  if (!file.endsWith('.ts')) return source;
  return source.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/^\s*\/\/.*$/gm, ' ');
}

/** La phrase fautive est-elle présente, hors commentaire et sans nuance ? */
function claims(pattern, source, file) {
  const text = stripComments(source, file);
  const match = pattern.exec(text);
  if (!match) return false;
  // On regarde la fin de la phrase où la négation apparaît.
  const sentence = text.slice(match.index, text.indexOf('.', match.index) + 1 || match.index + 160);
  return !QUALIFIED.test(sentence);
}

const contentDir = join(ROOT, 'src/content/apps');
let problems = 0;

for (const slug of readdirSync(contentDir)) {
  const hits = audit[slug]?.hits;
  if (!hits) continue;

  // Tous les endroits où le texte d'une app peut vivre.
  const files = ['legacy-copy.json', 'page-copy.ts']
    .map((f) => join(contentDir, slug, f))
    .filter(existsSync);

  for (const file of files) {
    const text = readFileSync(file, 'utf8');

    if (hits.ads > 0 && claims(NO_ADS, text, file)) {
      console.error(`✗ ${slug} — « sans publicité » alors que le code charge AdMob (${file.split('/').slice(-2).join('/')})`);
      problems++;
    }
    if (hits.purchases > 0 && claims(NO_IAP, text, file)) {
      console.error(`✗ ${slug} — « aucun achat » alors que le code déclare des produits (${file.split('/').slice(-2).join('/')})`);
      problems++;
    }
  }
}

// Les faits de confidentialité doivent eux aussi coller à l'audit.
const facts = readFileSync(join(ROOT, 'src/content/privacy-facts.ts'), 'utf8');
for (const [slug, entry] of Object.entries(audit)) {
  if (!entry.hits || entry.hits.ads === 0) continue;
  const block = facts.match(new RegExp(`\\n  ${slug}: \\{[\\s\\S]*?\\n  \\},`))?.[0];
  if (block && /ads: null/.test(block)) {
    console.error(`✗ ${slug} — privacy-facts déclare « pas de publicité » alors que le code charge AdMob`);
    problems++;
  }
}

if (problems > 0) {
  console.error(`\n${problems} affirmation(s) contredite(s) par le code des apps.`);
  process.exit(1);
}

console.log('✓ Aucune affirmation contredite par le code des apps.');
