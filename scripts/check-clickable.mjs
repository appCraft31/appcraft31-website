#!/usr/bin/env node
/**
 * Vérifie qu'aucun lien visible n'est recouvert par un autre élément.
 *
 * Un lien peut être parfaitement présent dans le HTML, visible à l'écran, et
 * pourtant inerte : il suffit qu'un bloc positionné passe devant. C'est arrivé
 * sur les cartes de l'accueil — l'en-tête de carte était en `position:
 * relative`, donc l'overlay du lien s'ancrait sur lui et ne couvrait plus la
 * description ni « En savoir plus ». Rien ne se voyait ; tout le bas de chaque
 * carte était mort.
 *
 * On ne lit donc pas le CSS : on demande au navigateur quel élément se trouve
 * sous le point qu'on viserait à la souris.
 *
 * Prérequis : `npm run start` doit servir le build.
 * Usage : node scripts/check-clickable.mjs [base-url]
 */

import { spawn } from 'node:child_process';

const BASE = (process.argv[2] ?? 'http://localhost:4173').replace(/\/$/, '');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9377;

/** Un échantillon qui couvre chaque gabarit du site. */
const PAGES = [
  '/',
  '/apps/tengo.html',
  '/apps/holdfire.html',
  '/apps/ecopompe.html',
  '/privacy/tengo.html',
  '/en/apps/meliz.html',
];

const chrome = spawn(CHROME, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${PORT}`,
  '--window-size=1400,1000',
  '--hide-scrollbars',
  'about:blank',
]);

await new Promise((r) => setTimeout(r, 2500));

let ws;
try {
  const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
  ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
} catch {
  console.error('✗ Chrome injoignable. Le site est-il servi ? (npm run start)');
  chrome.kill();
  process.exit(1);
}

let id = 0;
const pending = new Map();
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m.result);
    pending.delete(m.id);
  }
});
const send = (method, params = {}) =>
  new Promise((res) => {
    const i = ++id;
    pending.set(i, res);
    ws.send(JSON.stringify({ id: i, method, params }));
  });

await new Promise((r) => ws.addEventListener('open', r, { once: true }));
await send('Page.enable');

/**
 * Pour chaque lien visible, on vise son centre — puis, s'il est masqué à cet
 * endroit, quelques points de repli : un lien peut avoir un centre légitimement
 * couvert (icône décorative posée dessus) tout en restant cliquable ailleurs.
 */
const PROBE = `
(() => {
  const dead = [];
  const links = [...document.querySelectorAll('a[href]')];

  for (const link of links) {
    const style = getComputedStyle(link);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    if (link.closest('[aria-hidden="true"], [inert]')) continue;

    link.scrollIntoView({ block: 'center', behavior: 'instant' });
    const r = link.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) continue;
    if (r.bottom < 0 || r.top > innerHeight) continue;

    const points = [
      [r.left + r.width / 2, r.top + r.height / 2],
      [r.left + 6, r.top + r.height / 2],
      [r.right - 6, r.top + r.height / 2],
    ];

    const reachable = points.some(([x, y]) => {
      const hit = document.elementFromPoint(x, y);
      return hit && (hit === link || link.contains(hit) || hit.closest('a[href]') === link);
    });

    if (!reachable) {
      const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      dead.push({
        text: (link.textContent || link.getAttribute('aria-label') || '').trim().slice(0, 44),
        href: link.getAttribute('href'),
        covered: hit ? (hit.className || hit.tagName).toString().slice(0, 44) : 'rien',
      });
    }
  }
  return JSON.stringify(dead);
})()
`;

/**
 * Les cartes de l'accueil promettent d'être cliquables sur toute leur surface,
 * via un overlay posé par le lien du titre. Mesurer le rectangle du lien ne
 * dit rien de cette promesse : le lien du titre reste cliquable même quand
 * l'overlay a cessé de couvrir le bas de la carte. On échantillonne donc
 * plusieurs points de chaque carte.
 */
const CARD_SURFACE = `
(() => {
  const broken = [];
  for (const card of document.querySelectorAll('.app-card')) {
    const link = card.querySelector('.app-card-link');
    if (!link) continue;
    card.scrollIntoView({ block: 'center', behavior: 'instant' });
    const r = card.getBoundingClientRect();
    if (r.top < 0 || r.bottom > innerHeight) continue;

    const dead = [];
    // Une grille de points, en évitant les bords et les zones interactives
    // légitimes (les badges des stores, qui doivent viser le store).
    for (const fx of [0.25, 0.5, 0.75]) {
      for (const fy of [0.3, 0.55, 0.8, 0.94]) {
        const x = r.left + r.width * fx;
        const y = r.top + r.height * fy;
        const hit = document.elementFromPoint(x, y);
        if (!hit) { dead.push(fx + '/' + fy); continue; }
        if (hit.closest('.app-card-stores')) continue;
        if (hit === link || link.contains(hit) || hit.closest('a[href]')) continue;
        dead.push(fx.toFixed(2) + '/' + fy.toFixed(2) + ' → ' + (hit.className || hit.tagName));
      }
    }
    if (dead.length) {
      broken.push({ name: link.textContent.trim(), dead });
    }
  }
  return JSON.stringify(broken);
})()
`;

let ko = 0;
let checked = 0;

for (const path of PAGES) {
  await send('Page.navigate', { url: `${BASE}${path}` });
  await new Promise((r) => setTimeout(r, 3800));

  const res = await send('Runtime.evaluate', { expression: PROBE, returnByValue: true });
  const dead = JSON.parse(res.result.value ?? '[]');
  checked++;

  if (dead.length > 0) {
    ko += dead.length;
    console.error(`✗ ${path} — ${dead.length} lien(s) recouvert(s) :`);
    for (const d of dead) {
      console.error(`     « ${d.text || d.href} » masqué par « ${d.covered} »`);
    }
  }

  if (path === '/') {
    const surf = await send('Runtime.evaluate', { expression: CARD_SURFACE, returnByValue: true });
    const broken = JSON.parse(surf.result.value ?? '[]');
    if (broken.length > 0) {
      ko += broken.length;
      console.error(`✗ ${path} — ${broken.length} carte(s) avec une zone morte :`);
      for (const b of broken) {
        console.error(`     ${b.name} — ${b.dead.length} point(s) inertes : ${b.dead[0]}`);
      }
    }
  }
}

ws.close();
chrome.kill();

if (ko > 0) {
  console.error(`\n${ko} lien(s) visible(s) mais impossible(s) à cliquer.`);
  process.exit(1);
}

console.log(`✓ ${checked} pages : tous les liens visibles sont atteignables à la souris.`);
