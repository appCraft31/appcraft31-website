#!/usr/bin/env node
/**
 * Fabrique les icônes du site à partir du logo carré.
 *
 * Le logo d'origine laisse une large marge transparente : recopié tel quel en
 * 32 px, le motif tomberait à une douzaine de pixels et deviendrait illisible
 * dans un onglet. On le recadre donc sur son contenu réel, on lui rend une
 * marge mesurée, puis on décline les tailles attendues.
 *
 * L'icône Apple reçoit un fond opaque : iOS remplit la transparence en noir.
 *
 * Usage : node scripts/make-icons.mjs
 */

import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SOURCE = join(ROOT, 'public/assets/logo_512x512.png');
const OUT = join(ROOT, 'public');

/** Marge laissée autour du motif, en proportion de son côté. */
const PADDING = 0.08;

/** Fond de l'icône Apple : le papier du site, pas du blanc pur. */
const APPLE_BG = '#FBF7F2';

const script = `
import sys
from PIL import Image

src = Image.open(${JSON.stringify(SOURCE)}).convert('RGBA')

# Le contenu utile est la boîte englobante des pixels non transparents.
box = src.getbbox()
alpha = src.split()[3]
box = alpha.getbbox() or box
motif = src.crop(box)

# On le repose au centre d'un carré, avec sa marge.
side = max(motif.size)
canvas_side = int(side * (1 + 2 * ${PADDING}))
canvas = Image.new('RGBA', (canvas_side, canvas_side), (0, 0, 0, 0))
canvas.paste(
    motif,
    ((canvas_side - motif.size[0]) // 2, (canvas_side - motif.size[1]) // 2),
    motif,
)

print('motif :', motif.size, '-> carré', canvas.size)

def save(size, path, background=None):
    im = canvas.resize((size, size), Image.LANCZOS)
    if background:
        plate = Image.new('RGB', (size, size), background)
        plate.paste(im, (0, 0), im)
        im = plate
    im.save(path)
    print('écrit :', path.split('/')[-1], size)

out = ${JSON.stringify(OUT)}
save(512, out + '/icon-512.png')
save(192, out + '/icon-192.png')
save(32, out + '/favicon.png')
# iOS remplit la transparence en noir : on lui donne un fond.
save(180, out + '/apple-icon.png', ${JSON.stringify(APPLE_BG)})

# Un .ico multi-tailles, encore attendu par quelques navigateurs et outils.
ico = canvas.resize((64, 64), Image.LANCZOS)
ico.save(out + '/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print('écrit : favicon.ico 16/32/48')
`;

execFileSync('python3', ['-c', script], { stdio: 'inherit' });
