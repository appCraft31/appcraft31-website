import styles from './motifs.module.css';

/**
 * Le motif d'un jeu : sa mécanique, dessinée.
 *
 * Une page de jeu ne doit pas seulement porter les couleurs du produit, elle
 * doit montrer ce qu'on y fait. Ces motifs reprennent la pièce que le joueur
 * manipule — une bulle numérotée, une carte à jouer, une lettre qui tombe — et
 * les posent en grand dans la page, en décor.
 *
 * Ils sont décoratifs : `aria-hidden`, et lisant les variables `--u-*` du
 * thème, donc jamais une couleur en dur.
 */
export function GameMotif({ slug, variant = 'band' }: { slug: string; variant?: 'band' | 'corner' }) {
  const motif = MOTIFS[slug];
  if (!motif) return null;

  return (
    <div className={`${styles.motif} ${styles[variant]}`} aria-hidden="true">
      {motif}
    </div>
  );
}

export function hasMotif(slug: string): boolean {
  return slug in MOTIFS;
}

/* ── Chaque jeu, réduit à la pièce qu'on manipule ───────────────────────── */

const MOTIFS: Record<string, React.ReactNode> = {
  /* tenGO — des bulles numérotées reliées par un chemin qui fait 10. */
  tengo: (
    <svg viewBox="0 0 420 140" className={styles.svg}>
      <path
        d="M40 70 L130 40 L220 88 L310 52 L380 70"
        fill="none"
        stroke="var(--u-accent)"
        strokeWidth="6"
        strokeLinecap="round"
        className={styles.trace}
      />
      {[
        [40, 70, '3'],
        [130, 40, '4'],
        [220, 88, '2'],
        [310, 52, '1'],
      ].map(([x, y, n], i) => (
        <g key={i} className={styles.pop} style={{ '--i': i } as never}>
          <circle cx={x as number} cy={y as number} r="26" fill="var(--u-accent)" opacity="0.28" />
          <circle cx={x as number} cy={y as number} r="26" fill="none" stroke="var(--u-accent)" strokeWidth="2.5" />
          <text
            x={x as number}
            y={(y as number) + 9}
            textAnchor="middle"
            fontSize="26"
            fontWeight="800"
            fill="var(--u-ink)"
          >
            {n}
          </text>
        </g>
      ))}
      <text x="380" y="79" textAnchor="middle" fontSize="30" fontWeight="800" fill="var(--u-accent)">
        10
      </text>
    </svg>
  ),

  /* Le Sudoku du jour — une grille dont les chiffres se posent un à un. */
  sudoku: (
    <svg viewBox="0 0 300 300" className={styles.svg}>
      {Array.from({ length: 10 }, (_, i) => (
        <g key={i}>
          <line x1={i * 33} y1="0" x2={i * 33} y2="297" stroke="var(--u-ink)" strokeWidth={i % 3 ? 0.6 : 2} opacity="0.5" />
          <line x1="0" y1={i * 33} x2="297" y2={i * 33} stroke="var(--u-ink)" strokeWidth={i % 3 ? 0.6 : 2} opacity="0.5" />
        </g>
      ))}
      {[
        [0, 1, '7'], [2, 0, '3'], [4, 3, '9'], [1, 5, '1'],
        [6, 2, '5'], [8, 7, '4'], [3, 8, '6'], [7, 4, '2'],
      ].map(([c, r, n], i) => (
        <text
          key={i}
          x={(c as number) * 33 + 16}
          y={(r as number) * 33 + 24}
          textAnchor="middle"
          fontSize="22"
          fill="var(--u-accent)"
          className={styles.ink}
          style={{ '--i': i } as never}
        >
          {n}
        </text>
      ))}
    </svg>
  ),

  /* Hold Fire — le couloir, la ligne de tir, le noyau. */
  holdfire: (
    <svg viewBox="0 0 440 120" className={styles.svg}>
      <path d="M10 96 H430" stroke="var(--u-accent)" strokeWidth="24" opacity="0.14" />
      <path d="M10 96 H430" stroke="var(--u-accent)" strokeWidth="1" opacity="0.5" />
      <path d="M10 56 H430" stroke="var(--u-accent)" strokeWidth="1" strokeDasharray="6 10" opacity="0.3" />
      <circle cx="46" cy="96" r="13" fill="none" stroke="var(--u-accent)" strokeWidth="2.5" />
      <path d="M46 96 L360 46" stroke="var(--u-accent-2)" strokeWidth="2.5" className={styles.shot} />
      {[150, 250, 350].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="30"
          width="26"
          height="26"
          fill="none"
          stroke="var(--u-accent-2)"
          strokeWidth="2"
          className={styles.pop}
          style={{ '--i': i } as never}
        />
      ))}
      <circle cx="363" cy="43" r="6" fill="var(--u-accent-2)" className={styles.core} />
    </svg>
  ),

  /* Contrée — la levée : quatre cartes posées en éventail.
     La rotation se fait autour du bas de chaque carte, comme une main qu'on
     ouvre ; les décalages sont assez larges pour qu'on lise les quatre. */
  contree: (
    <svg viewBox="0 0 400 210" className={styles.svg}>
      {[
        [-18, 0, '♠'],
        [-6, 78, '♥'],
        [6, 156, '♦'],
        [18, 234, '♣'],
      ].map(([rot, dx, suit], i) => (
        <g
          key={i}
          transform={`rotate(${rot} ${(dx as number) + 26 + 43} 200)`}
          className={styles.card}
          style={{ '--i': i } as never}
        >
          <rect
            x={(dx as number) + 26}
            y="42"
            width="86"
            height="120"
            rx="9"
            fill="var(--u-surface)"
            stroke="var(--u-accent)"
            strokeWidth="2"
          />
          <text x={(dx as number) + 40} y="74" fontSize="26" fill="var(--u-accent)">
            {suit}
          </text>
          <text x={(dx as number) + 98} y="148" fontSize="26" fill="var(--u-accent)" textAnchor="end">
            {suit}
          </text>
        </g>
      ))}
    </svg>
  ),

  /* GraviWords — les lettres tombent et s'empilent. */
  graviwords: (
    <svg viewBox="0 0 320 200" className={styles.svg}>
      {[
        [0, 3, 'G'], [1, 4, 'R'], [2, 2, 'A'], [3, 4, 'V'], [4, 3, 'I'],
        [0, 4, 'W'], [2, 3, 'O'], [4, 4, 'R'], [1, 3, 'D'],
      ].map(([c, r, ch], i) => (
        <g key={i} className={styles.drop} style={{ '--i': i } as never}>
          <rect
            x={(c as number) * 62 + 6}
            y={(r as number) * 44 + 6}
            width="54"
            height="38"
            rx="4"
            fill="var(--u-accent)"
            opacity="0.2"
          />
          <rect
            x={(c as number) * 62 + 6}
            y={(r as number) * 44 + 6}
            width="54"
            height="38"
            rx="4"
            fill="none"
            stroke="var(--u-accent)"
            strokeWidth="2"
          />
          <text
            x={(c as number) * 62 + 33}
            y={(r as number) * 44 + 32}
            textAnchor="middle"
            fontSize="20"
            fontWeight="700"
            fill="var(--u-accent-2)"
          >
            {ch}
          </text>
        </g>
      ))}
    </svg>
  ),

  /* Orbis — un cercle qui grandit jusqu'à frôler les autres. */
  orbis: (
    <svg viewBox="0 0 300 200" className={styles.svg}>
      {[
        [70, 70, 44],
        [200, 60, 28],
        [150, 150, 20],
        [250, 140, 34],
      ].map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx as number}
          cy={cy as number}
          r={r as number}
          fill="var(--u-accent)"
          opacity="0.18"
          stroke="var(--u-accent)"
          strokeWidth="1.5"
          className={styles.grow}
          style={{ '--i': i } as never}
        />
      ))}
    </svg>
  ),

  /* Binero — la grille binaire, deux valeurs et rien d'autre. */
  binero: (
    <svg viewBox="0 0 260 200" className={styles.svg}>
      {Array.from({ length: 20 }, (_, i) => {
        const c = i % 5;
        const r = Math.floor(i / 5);
        const one = [0, 3, 4, 6, 9, 11, 12, 15, 17, 18].includes(i);
        return (
          <g key={i} className={styles.flip} style={{ '--i': i } as never}>
            <rect x={c * 52 + 4} y={r * 48 + 4} width="44" height="40" rx="6" fill={one ? 'var(--u-accent)' : 'transparent'} opacity={one ? 0.9 : 1} stroke="var(--u-ink)" strokeWidth="1.5" strokeOpacity="0.25" />
            <text x={c * 52 + 26} y={r * 48 + 32} textAnchor="middle" fontSize="20" fontWeight="700" fill={one ? 'var(--u-paper)' : 'var(--u-ink)'} opacity={one ? 1 : 0.5}>
              {one ? '1' : '0'}
            </text>
          </g>
        );
      })}
    </svg>
  ),

  /* Glyphe — le code du jour : quatre signes, six essais. */
  glyphe: (
    <svg viewBox="0 0 260 200" className={styles.svg}>
      {Array.from({ length: 4 }, (_, row) =>
        Array.from({ length: 4 }, (_, col) => {
          const state = (row * 4 + col) % 3;
          return (
            <g key={`${row}-${col}`} className={styles.pop} style={{ '--i': row * 4 + col } as never}>
              <polygon
                points={hexPoints(col * 62 + 36, row * 48 + 34, 20)}
                fill={state === 0 ? 'var(--u-accent)' : 'transparent'}
                opacity={state === 0 ? 0.85 : 1}
                stroke="var(--u-accent)"
                strokeWidth="2"
                strokeOpacity={state === 2 ? 0.28 : 1}
              />
            </g>
          );
        }),
      )}
    </svg>
  ),

  /* Mêliz — les mots surlignés dans la grille de lettres. */
  meliz: (
    <svg viewBox="0 0 300 200" className={styles.svg}>
      <rect x="26" y="46" width="196" height="34" rx="17" fill="var(--u-accent)" opacity="0.45" className={styles.sweep} />
      <rect x="98" y="94" width="34" height="94" rx="17" fill="var(--u-accent-2)" opacity="0.32" className={styles.sweep} style={{ '--i': 1 } as never} />
      {Array.from({ length: 25 }, (_, i) => (
        <text
          key={i}
          x={(i % 5) * 60 + 40}
          y={Math.floor(i / 5) * 42 + 44}
          textAnchor="middle"
          fontSize="24"
          fontWeight="700"
          fill="var(--u-ink)"
          opacity="0.72"
        >
          {'MELIZAOTRNSUEPCDBGHKVFWY'[i % 24]}
        </text>
      ))}
    </svg>
  ),

  /* Mots Fléchés — la case définition et sa flèche. */
  motfleche: (
    <svg viewBox="0 0 300 160" className={styles.svg}>
      {Array.from({ length: 12 }, (_, i) => (
        <rect
          key={i}
          x={(i % 6) * 50 + 4}
          y={Math.floor(i / 6) * 50 + 4}
          width="46"
          height="46"
          fill={i === 0 || i === 7 ? 'var(--u-accent)' : 'transparent'}
          opacity={i === 0 || i === 7 ? 0.6 : 1}
          stroke="var(--u-ink)"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
      ))}
      <path d="M44 27 h14 m-5 -5 l5 5 l-5 5" stroke="var(--u-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M377 0" />
      {['A', 'M', 'O', 'U', 'R'].map((ch, i) => (
        <text key={ch} x={(i + 1) * 50 + 27} y={36} textAnchor="middle" fontSize="24" fontWeight="700" fill="var(--u-accent-2)" className={styles.ink} style={{ '--i': i } as never}>
          {ch}
        </text>
      ))}
    </svg>
  ),

  /* Zenkuro — les sommes du kakuro, en diagonale. */
  zenkuto: (
    <svg viewBox="0 0 260 180" className={styles.svg}>
      {Array.from({ length: 12 }, (_, i) => {
        const c = i % 4;
        const r = Math.floor(i / 4);
        const clue = i === 0 || i === 5;
        return (
          <g key={i}>
            <rect x={c * 60 + 6} y={r * 56 + 6} width="52" height="48" rx="3" fill={clue ? 'var(--u-ink)' : 'var(--u-surface)'} opacity={clue ? 0.85 : 1} stroke="var(--u-ink)" strokeWidth="1.2" strokeOpacity="0.3" />
            {clue ? (
              <>
                <line x1={c * 60 + 6} y1={r * 56 + 6} x2={c * 60 + 58} y2={r * 56 + 54} stroke="var(--u-paper)" strokeWidth="1.2" opacity="0.6" />
                <text x={c * 60 + 44} y={r * 56 + 24} textAnchor="middle" fontSize="14" fill="var(--u-paper)">16</text>
                <text x={c * 60 + 20} y={r * 56 + 48} textAnchor="middle" fontSize="14" fill="var(--u-paper)">7</text>
              </>
            ) : (
              <text x={c * 60 + 32} y={r * 56 + 38} textAnchor="middle" fontSize="22" fill="var(--u-accent)" className={styles.ink} style={{ '--i': i } as never}>
                {[9, 7, 4, 3, 8, 1, 6, 2, 5, 9][i % 10]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  ),

  /* Tinta — le coloriage déduit, pastille par pastille. */
  tinta: (
    <svg viewBox="0 0 260 200" className={styles.svg}>
      {Array.from({ length: 16 }, (_, i) => {
        const c = i % 4;
        const r = Math.floor(i / 4);
        const fills = ['var(--u-accent)', 'var(--u-accent-2)', 'transparent', 'var(--u-accent)'];
        return (
          <rect
            key={i}
            x={c * 62 + 6}
            y={r * 48 + 6}
            width="54"
            height="40"
            rx="8"
            fill={fills[(i * 3) % 4]}
            opacity={fills[(i * 3) % 4] === 'transparent' ? 1 : 0.72}
            stroke="var(--u-ink)"
            strokeWidth="1.5"
            strokeOpacity="0.22"
            className={styles.flip}
            style={{ '--i': i } as never}
          />
        );
      })}
      <text x="130" y="196" textAnchor="middle" fontSize="18" fill="var(--u-ink)" opacity="0.5">
        = ≠ =
      </text>
    </svg>
  ),

  /* SquareLink — la tuile à quatre faces, et son encastrement. */
  combo: (
    <svg viewBox="0 0 260 200" className={styles.svg}>
      {[
        [40, 40],
        [130, 40],
        [85, 118],
      ].map(([x, y], i) => (
        <g key={i} className={styles.pop} style={{ '--i': i } as never}>
          <rect x={x as number} y={y as number} width="78" height="70" rx="12" fill="var(--u-accent)" opacity="0.28" stroke="var(--u-accent)" strokeWidth="2" />
          {[
            [(x as number) + 39, (y as number) + 14],
            [(x as number) + 39, (y as number) + 60],
            [(x as number) + 12, (y as number) + 38],
            [(x as number) + 66, (y as number) + 38],
          ].map(([cx, cy], j) => (
            <text key={j} x={cx} y={cy + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--u-ink)" opacity="0.75">
              {(i + j + 1) % 6 || 1}
            </text>
          ))}
        </g>
      ))}
    </svg>
  ),

  /* randompix — les photos qu'on doit attribuer à quelqu'un. */
  randompix: (
    <svg viewBox="0 0 280 190" className={styles.svg}>
      {[
        [10, 20, -8],
        [95, 10, 4],
        [180, 24, -3],
      ].map(([x, y, rot], i) => (
        <g key={i} transform={`rotate(${rot} ${(x as number) + 45} ${(y as number) + 55})`} className={styles.card} style={{ '--i': i } as never}>
          <rect x={x as number} y={y as number} width="90" height="110" rx="6" fill="var(--u-surface)" stroke="var(--u-accent)" strokeWidth="2" />
          <rect x={(x as number) + 8} y={(y as number) + 8} width="74" height="72" rx="3" fill="var(--u-accent)" opacity="0.35" />
          <circle cx={(x as number) + 45} cy={(y as number) + 40} r="15" fill="var(--u-accent)" opacity="0.6" />
          <text x={(x as number) + 45} y={(y as number) + 100} textAnchor="middle" fontSize="17" fill="var(--u-ink)" opacity="0.6">
            ?
          </text>
        </g>
      ))}
    </svg>
  ),

  /* Talon — la colonne du solitaire, et son par. */
  talon: (
    <svg viewBox="0 0 260 200" className={styles.svg}>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} className={styles.card} style={{ '--i': i } as never}>
          <rect x="60" y={i * 34 + 12} width="94" height="122" rx="9" fill="var(--u-surface)" stroke="var(--u-accent)" strokeWidth="2" />
          <text x="72" y={i * 34 + 34} fontSize="19" fill="var(--u-accent)">
            {['K', 'Q', 'J', '10'][i]}
          </text>
          <text x="90" y={i * 34 + 34} fontSize="16" fill={i % 2 ? 'var(--u-accent-2)' : 'var(--u-accent)'}>
            {['♠', '♥', '♣', '♦'][i]}
          </text>
        </g>
      ))}
      <text x="196" y="120" fontSize="15" fill="var(--u-ink)" opacity="0.55">
        par 112
      </text>
    </svg>
  ),
};

/** Hexagone régulier, pour les glyphes. */
function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
}
