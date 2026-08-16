#!/usr/bin/env node
/**
 * Audit des SDK réellement présents dans chaque app.
 *
 * Les politiques de confidentialité du site décrivent ce que les apps font de
 * vos données. Écrire « pas de publicité » sur une app qui charge AdMob, c'est
 * une déclaration fausse dans un document juridique — et un motif de refus au
 * store. Ce script va donc lire le code, plutôt que de se fier au souvenir.
 *
 * Usage : node scripts/audit-sdk.mjs [--json]
 */

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const PROJECTS = join(homedir(), 'StudioProjects');

/** slug du site → dossier du projet. */
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
  shizuku: null, // projet source non identifié
  poddroid: 'podcast',
  ecopompe: 'Ecopompe',
};

/** Marqueurs recherchés dans le code, par catégorie. */
const MARKERS = {
  ads: 'AdMob|GADMobileAds|RewardedAd|InterstitialAd|google_mobile_ads|AppLovin|admob',
  purchases: 'in_app_purchase|StoreKit|SKProduct|Purchases\\.|RevenueCat|purchaseProduct',
  analytics: 'FirebaseAnalytics|Crashlytics|Sentry|firebase_analytics|Amplitude|Mixpanel',
  network: 'URLSession|http\\.get|Dio\\(|dart:io.*HttpClient|fetch\\(|Alamofire',
  accounts: 'GameCenter|GKLocalPlayer|SignInWithApple|FirebaseAuth|GoogleSignIn',
  consent: 'ConsentInformation|UMPConsent|ATTrackingManager|AppTrackingTransparency',
};

/**
 * Les projets n'ont pas tous la même arborescence (Flutter `lib/`, Xcode
 * `Contree/`, `EcoPompe_iOS/`…). On balaie donc tout le projet, en écartant
 * ce qui n'est pas du code source écrit à la main.
 */
const EXCLUDED = ['build', 'DerivedData', 'Pods', 'node_modules', '.git', '.dart_tool', 'Carthage'];

function scan(projectDir, pattern) {
  try {
    const out = execFileSync(
      '/usr/bin/grep',
      [
        '-rEl',
        ...EXCLUDED.flatMap((d) => ['--exclude-dir', d]),
        '--include=*.dart',
        '--include=*.swift',
        '--include=*.kt',
        '--include=*.java',
        '--include=*.yaml',
        '--include=*.gradle',
        '--include=*.kts',
        '--include=*.pbxproj',
        pattern,
        projectDir,
      ],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    );
    return out.split('\n').filter(Boolean).length;
  } catch {
    return 0; // grep sort en 1 quand il ne trouve rien
  }
}

const results = {};

for (const [slug, dir] of Object.entries(SOURCES)) {
  if (!dir) {
    results[slug] = { error: 'projet source non identifié' };
    continue;
  }
  const projectDir = join(PROJECTS, dir);
  if (!existsSync(projectDir)) {
    results[slug] = { error: `dossier absent : ${dir}` };
    continue;
  }
  const hits = {};
  for (const [key, pattern] of Object.entries(MARKERS)) hits[key] = scan(projectDir, pattern);
  results[slug] = { source: dir, hits };
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(results, null, 2));
} else {
  const cols = Object.keys(MARKERS);
  console.log(`${'slug'.padEnd(12)} ${cols.map((c) => c.slice(0, 8).padEnd(9)).join('')}source`);
  console.log('─'.repeat(78));
  for (const [slug, r] of Object.entries(results)) {
    if (r.error) {
      console.log(`${slug.padEnd(12)} ⚠ ${r.error}`);
      continue;
    }
    const cells = cols.map((c) => (r.hits[c] ? `✓ ${r.hits[c]}`.padEnd(9) : '·'.padEnd(9)));
    console.log(`${slug.padEnd(12)} ${cells.join('')}${r.source}`);
  }
  console.log('\nLes chiffres sont des nombres de fichiers concernés, pas des preuves :');
  console.log('relire le code avant d\'écrire une politique de confidentialité.');
}
