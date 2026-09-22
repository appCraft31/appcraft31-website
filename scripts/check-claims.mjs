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
  /sans publicit|sans pub\b|aucune publicit|z[ée]ro publicit|no ads\b|ad-free|without ads|sin anuncios|sin publicidad|ohne werbung|werbefrei|広告はありません|広告なし|広告も[^。]*なし|광고 없|광고가 없|광고와[^.]*없/i;

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

/**
 * Le nom d'un achat n'est pas une affirmation.
 *
 * L'achat de Talon s'appelle « Sans publicité » — c'est son libellé dans
 * l'app (`lib/l10n/app_fr.arb`). Écrire « l'achat "Sans publicité" retire les
 * annonces » dit exactement le contraire de « cette app est sans publicité ».
 * On ne reconnaît comme nom propre qu'une expression courte serrée entre
 * guillemets typographiques : une phrase entière citée reste une affirmation.
 */
function isProductName(text, match) {
  const before = text.slice(Math.max(0, match.index - 2), match.index);
  if (!/[«“„]\s?$/.test(before)) return false;
  const after = text.slice(match.index + match[0].length);
  const close = after.search(/[»”“]/);
  if (close === -1) return false;
  // Entre la négation et le guillemet fermant, un nom de produit n'a plus que
  // la fin de son mot : « Sans publicité ». Dès qu'il y a une virgule ou un
  // mot de plus — « aucune publicité, jamais » — c'est une phrase, et une
  // phrase citée affirme tout autant qu'une phrase nue.
  return /^\p{L}*\s?$/u.test(after.slice(0, close));
}

/** La phrase fautive est-elle présente, hors commentaire et sans nuance ? */
function claims(pattern, source, file) {
  const text = stripComments(source, file);
  // Le motif est global le temps du balayage : une page peut nommer l'achat
  // au détour d'une phrase *et* mentir dans la suivante.
  const scan = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g');
  for (const match of text.matchAll(scan)) {
    if (isProductName(text, match)) continue;
    // On regarde la fin de la phrase où la négation apparaît — bornée à sa
    // ligne : au-delà, c'est le texte d'à côté, et sa nuance à lui ne dit rien
    // de cette affirmation-ci.
    const line = text.slice(match.index, text.indexOf('\n', match.index) + 1 || undefined);
    const stop = line.indexOf('.');
    const sentence = line.slice(0, stop === -1 ? 160 : stop + 1);
    if (!QUALIFIED.test(sentence)) return true;
  }
  return false;
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

/**
 * Les affirmations qui parlent du studio, pas d'une app.
 *
 * « Des applications et des jeux soignés, sans publicité ni pistage » vivait
 * dans la description du site, hors du périmètre balayé plus haut — et c'est
 * pourtant le texte que Google affiche sous le lien. Une négation de publicité
 * portant sur le catalogue entier est fausse dès qu'une seule app visible
 * charge AdMob.
 */
const GLOBAL_FILES = [
  'src/app/(fr)/layout.tsx',
  'src/app/(intl)/[lang]/layout.tsx',
  'src/content/site/fr.ts',
  'src/content/site/en.ts',
  'src/content/site/ja.ts',
  'src/content/site/ko.ts',
  'src/content/site/es.ts',
  'src/content/site/de.ts',
];

/**
 * La portée d'une affirmation se lit dans la clé qui la porte.
 *
 * « Utiles, rapides, sans pub ni tracking » est la légende de la section
 * *Applications* : elle ne parle pas des jeux, et elle est vraie — les six
 * produits de cette catégorie n'embarquent aucune régie. La confronter au
 * catalogue entier la ferait passer pour un mensonge. On confronte donc chaque
 * phrase aux seules apps dont elle parle.
 */
const CATEGORY_OF_KEY = [
  [/^apps\./, 'app'],
  [/^games\./, 'game'],
];

const registry = readFileSync(join(ROOT, 'src/lib/apps.ts'), 'utf8');
const categoryOf = new Map(
  [...registry.matchAll(/slug: '([^']+)',\n\s*name: '[^']*',\n\s*category: '([^']+)'/g)].map(
    (m) => [m[1], m[2]],
  ),
);

/** Les apps à publicité d'une catégorie donnée — ou de tout le catalogue. */
function adFunded(category) {
  return Object.entries(audit)
    .filter(([slug, entry]) => entry.hits?.ads > 0)
    .filter(([slug]) => !category || categoryOf.get(slug) === category)
    .map(([slug]) => slug);
}

for (const relative of GLOBAL_FILES) {
  const file = join(ROOT, relative);
  if (!existsSync(file)) continue;

  // Les fichiers de dictionnaire sont du TypeScript : `stripComments` s'y
  // applique, comme pour les pages produit.
  const text = stripComments(readFileSync(file, 'utf8'), file);
  const scan = new RegExp(NO_ADS.source, NO_ADS.flags + 'g');

  for (const match of text.matchAll(scan)) {
    const line = text.slice(
      text.lastIndexOf('\n', match.index) + 1,
      text.indexOf('\n', match.index) + 1 || undefined,
    );
    if (QUALIFIED.test(line)) continue;

    const key = line.match(/["']([a-z0-9_.]+)["']\s*:/)?.[1] ?? '';
    const scope = CATEGORY_OF_KEY.find(([re]) => re.test(key))?.[1] ?? null;
    const guilty = adFunded(scope);
    if (guilty.length === 0) continue;

    const about = scope ? `les ${scope === 'app' ? 'applications' : 'jeux'}` : 'le site';
    console.error(
      `✗ ${relative}${key ? ` (${key})` : ''} — « sans publicité » pour ${about}, alors que ${guilty.length} chargent AdMob : ${guilty.slice(0, 3).join(', ')}${guilty.length > 3 ? '…' : ''}`,
    );
    problems++;
  }
}

/**
 * Le registre lui-même doit coller au code des apps.
 *
 * `AppData.sdk` se veut « source de vérité de la politique de confidentialité ».
 * Deux fois le 7 septembre 2026, il avait pris du retard sur la réalité : Talon
 * et PixelCraft s'y déclaraient sans publicité alors que leur code chargeait
 * AdMob. Personne ne le voyait, parce qu'aucun texte visible ne mentait — le
 * mensonge était dans la fiche technique, en amont de tout ce qui en dérive.
 */
for (const [slug, entry] of Object.entries(audit)) {
  const declared = registry.match(
    new RegExp(`slug: '${slug}',(?:.|\n)*?sdk: \{ ads: (\\w+)`),
  )?.[1];
  if (declared === undefined) continue;

  const real = entry.hits?.ads > 0;
  if (real !== (declared === 'true')) {
    console.error(
      `✗ ${slug} — le registre déclare ads: ${declared}, l'audit du code compte ${entry.hits?.ads ?? 0} occurrence(s) AdMob (src/lib/apps.ts)`,
    );
    problems++;
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
