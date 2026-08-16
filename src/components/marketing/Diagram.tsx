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

/* ── Hold Fire : le couloir vu d'en haut ────────────────────────────────── */

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
        fontWeight="700"
        fill="var(--u-accent)"
      >
        {n}
      </text>
    </g>
  );
}

const DRAWINGS: Record<string, React.ReactNode> = {
  holdfire: (
    <svg viewBox="0 0 720 300" className={styles.svg} role="img" aria-hidden="true">
      <defs>
        <linearGradient id="hf-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--u-accent)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--u-accent)" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Le couloir que les ennemis empruntent, de la droite vers la base. */}
      <rect x="40" y="196" width="640" height="52" fill="var(--u-accent)" opacity="0.09" />
      <line x1="40" y1="196" x2="680" y2="196" stroke="var(--u-accent)" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="248" x2="680" y2="248" stroke="var(--u-accent)" strokeWidth="1" opacity="0.4" />
      <text x="360" y="272" textAnchor="middle" fontSize="12" letterSpacing="3" fill="var(--u-ink)" opacity="0.4">
        ← SENS DE LA VAGUE
      </text>

      {/* La base à défendre, au bout du couloir. */}
      <rect x="46" y="186" width="42" height="72" rx="3" fill="var(--u-accent)" opacity="0.22" />
      <rect x="46" y="186" width="42" height="72" rx="3" fill="none" stroke="var(--u-accent)" strokeWidth="2" />

      {/* Le canon que le joueur tient, et sa ligne de tir. */}
      <circle cx="118" cy="222" r="15" fill="var(--u-paper)" stroke="var(--u-accent)" strokeWidth="2.5" />
      <path d="M118 222 L556 130" stroke="url(#hf-beam)" strokeWidth="3" className={styles.beam} />

      {/* Les emplacements de tourelles, de part et d'autre du couloir. */}
      {[
        [232, 128],
        [370, 128],
        [508, 128],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="34"
          height="34"
          rx="3"
          fill="var(--u-accent-2)"
          fillOpacity="0.16"
          stroke="var(--u-accent-2)"
          strokeWidth="2"
          strokeDasharray={i === 2 ? '5 4' : undefined}
        />
      ))}

      {/* L'ennemi, et le noyau jaune qu'il faut viser. */}
      <path
        d="M576 130 L604 106 L632 130 L604 154 Z"
        fill="var(--u-accent-2)"
        fillOpacity="0.2"
        stroke="var(--u-accent-2)"
        strokeWidth="2.5"
      />
      <circle cx="604" cy="130" r="7" fill="#FFD23B" className={styles.core} />

      <Marker x={67} y={168} n={1} />
      <Marker x={118} y={186} n={2} />
      <Marker x={249} y={110} n={3} />
      <Marker x={604} y={86} n={4} />
      <Marker x={660} y={222} n={5} />
    </svg>
  ),
};
