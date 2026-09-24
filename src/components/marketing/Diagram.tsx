import type { AppData, CopySection } from '@/lib/types';
import styles from './diagram.module.css';

/**
 * Schéma annoté d'un jeu.
 *
 * Sert quand un jeu n'a pas encore de captures d'écran : plutôt qu'une image
 * absente, ou qu'un dessin abstrait qui ne dit rien, on montre la scène du jeu
 * avec des repères numérotés, expliqués juste en dessous.
 *
 * Les repères portent des numéros et non des mots : le dessin reste identique
 * dans les six langues, seule la légende est traduite.
 */
export function Diagram({ app, section }: { app: AppData; section: CopySection }) {
  const drawing = DRAWINGS[app.slug];
  if (!drawing) return null;

  const items = section.items ?? [];

  return (
    <section className={`${styles.section}`}>
      <div className={styles.inner}>
        <header className={`${styles.head} reveal`}>
          {section.kicker && <p className={styles.kicker}>{section.kicker}</p>}
          <h2 className={styles.title}>{section.title}</h2>
          {section.body && <p className={styles.body}>{section.body}</p>}
        </header>

        <figure className={`${styles.figure} reveal`}>
          {drawing}
          <figcaption className={styles.legend}>
            <ol>
              {items.map((item, i) => (
                <li key={item.title} style={{ '--i': i } as never}>
                  <span className={styles.num} aria-hidden="true">
                    {i + 1}
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    {item.body && <> — {item.body}</>}
                  </span>
                </li>
              ))}
            </ol>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function hasDiagram(slug: string): boolean {
  return slug in DRAWINGS;
}

/* ── Hold Fire : le terrain vu d'en haut ────────────────────────────────── */

/*
 * La grammaire de couleurs du jeu (`lib/config/palette.dart`) : violet pour le
 * système (couloirs, emplacements), magenta pour la menace, cyan pour la
 * défense, blanc pour l'information — dont le noyau à viser. Le violet et le
 * noyau n'ont pas de variable d'univers : ce dessin n'appartient qu'à ce jeu.
 */
const HF_SYSTEM = '#7C3CFF';
const HF_LANE_BED = '#07050E';
const HF_CORE = '#FFE3F5';

/** Repère numéroté, posé sur le dessin. */
function Marker({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g className={styles.marker} style={{ '--i': n - 1 } as never}>
      <circle cx={x} cy={y} r="13" fill="var(--u-paper)" stroke="var(--u-accent)" strokeWidth="2" />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fontFamily="var(--u-font-numeric, var(--u-font-display))"
        fill="var(--u-ink)"
      >
        {n}
      </text>
    </g>
  );
}

/** Un couloir : un sillon noir bordé de violet, axe en pointillé. */
function Lane({ d }: { d: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} stroke={HF_SYSTEM} strokeWidth="38" strokeOpacity="0.55" />
      <path d={d} stroke={HF_LANE_BED} strokeWidth="34" />
      <path d={d} stroke={HF_SYSTEM} strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="14 5 3 5" />
    </g>
  );
}

/** Une tourelle posée : anneaux cyan, comme les glyphes du jeu. */
function Turret({ x, y }: { x: number; y: number }) {
  return (
    <g fill="none" stroke="var(--u-accent-2)">
      <circle cx={x} cy={y} r="17" strokeWidth="2" fill="var(--u-accent-2)" fillOpacity="0.1" />
      <circle cx={x} cy={y} r="8" strokeWidth="2" />
      <path d={`M${x} ${y - 23} V${y - 19} M${x} ${y + 19} V${y + 23} M${x - 23} ${y} H${x - 19} M${x + 19} ${y} H${x + 23}`} strokeWidth="2" />
    </g>
  );
}

/** Un emplacement libre : un anneau violet en pointillé. */
function Slot({ x, y }: { x: number; y: number }) {
  return (
    <circle cx={x} cy={y} r="15" fill="none" stroke={HF_SYSTEM} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
  );
}

/** Chevrons d'entrée d'un couloir, pointés vers la base. */
function Entry({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x - 9} ${y} L${x} ${y + 8} L${x + 9} ${y} M${x - 9} ${y + 9} L${x} ${y + 17} L${x + 9} ${y + 9}`}
      fill="none"
      stroke="var(--u-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

const DRAWINGS: Record<string, React.ReactNode> = {
  holdfire: (
    <svg viewBox="70 -4 600 340" className={styles.svg} role="img" aria-hidden="true">
      <defs>
        <linearGradient id="hf-beam" gradientUnits="userSpaceOnUse" x1="360" y1="270" x2="550" y2="84">
          <stop offset="0" stopColor="var(--u-accent-2)" stopOpacity="0.15" />
          <stop offset="1" stopColor="var(--u-accent-2)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Les couloirs que descendent les vagues, du haut de l'écran vers la base. */}
      <Lane d="M170 0 V140 Q170 180 210 180 H270 Q310 180 310 220 V292" />
      <Lane d="M550 0 V190 Q550 230 510 230 H450 Q410 230 410 270 V292" />
      <Entry x={170} y={6} />
      <Entry x={550} y={6} />

      {/* La base à défendre, en bas, comme dans le jeu. */}
      <rect x="276" y="292" width="168" height="36" rx="14" fill="var(--u-paper)" />
      <rect x="276" y="292" width="168" height="36" rx="14" fill="var(--u-accent-2)" fillOpacity="0.12" />
      <rect x="276" y="292" width="168" height="36" rx="14" fill="none" stroke="var(--u-accent-2)" strokeWidth="2" />

      {/* Les emplacements encore libres, puis les tourelles posées. */}
      <Slot x={100} y={230} />
      <Slot x={360} y={140} />
      <Slot x={630} y={150} />
      <Turret x={250} y={110} />
      <Turret x={472} y={104} />

      {/* Un ennemi de passage dans l'autre couloir. */}
      <path d="M170 62 L181 82 L159 82 Z" fill="var(--u-accent)" fillOpacity="0.2" stroke="var(--u-accent)" strokeWidth="2" strokeLinejoin="round" />

      {/* Le canon que le joueur tient, et sa ligne de tir vers le noyau. */}
      <path d="M360 270 L550 84" stroke="url(#hf-beam)" strokeWidth="3" strokeLinecap="round" className={styles.beam} />
      <circle cx="360" cy="270" r="16" fill="var(--u-paper)" stroke="var(--u-accent-2)" strokeWidth="2.5" />
      <circle cx="360" cy="270" r="6" fill="var(--u-accent-2)" />

      {/* L'ennemi visé : silhouette magenta, noyau blanc, réticule autour. */}
      <circle cx="550" cy="84" r="31" fill="none" stroke="var(--u-accent-2)" strokeWidth="1.5" strokeDasharray="10 6" opacity="0.7" />
      <path
        d="M550 64 L567 74 L567 94 L550 104 L533 94 L533 74 Z"
        fill="var(--u-accent)"
        fillOpacity="0.22"
        stroke="var(--u-accent)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="550" cy="84" r="6" fill={HF_CORE} className={styles.core} />

      <Marker x={470} y={310} n={1} />
      <Marker x={360} y={228} n={2} />
      <Marker x={250} y={68} n={3} />
      <Marker x={604} y={60} n={4} />
      <Marker x={212} y={22} n={5} />
    </svg>
  ),
};
