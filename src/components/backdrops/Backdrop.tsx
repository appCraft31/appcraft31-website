import type { Backdrop as BackdropId } from '@/lib/types';
import styles from './backdrops.module.css';

/**
 * Fond d'univers d'une page produit.
 *
 * Tous les moteurs sont en CSS et SVG — pas de canvas, pas de boucle
 * d'animation JavaScript : une page marketing doit rester légère et ne rien
 * consommer quand elle est en arrière-plan. Chacun lit `--u-accent`,
 * `--u-accent-2` et `--u-glow`, donc prend automatiquement les couleurs de
 * l'app. `--u-motion` règle la vitesse ; `prefers-reduced-motion` fige tout.
 */
export function Backdrop({ kind }: { kind: BackdropId }) {
  return (
    <div className={`${styles.backdrop} ${styles[kindClass(kind)]}`} aria-hidden="true">
      {kind === 'neon-grid' && <NeonGrid />}
      {kind === 'paper-ink' && <PaperInk />}
      {kind === 'soft-bubbles' && <SoftBubbles />}
      {kind === 'starfield' && <Starfield />}
      {kind === 'card-felt' && <CardFelt />}
      {kind === 'waveform' && <Waveform />}
      {kind === 'blueprint' && <Blueprint />}
      {kind === 'road' && <Road />}
      {kind === 'zen' && <Zen />}
    </div>
  );
}

/**
 * `neon-grid` → `kindNeonGrid`.
 * Le préfixe évite de heurter les classes des éléments internes : sans lui, le
 * conteneur du fond « road » et la chaussée qu'il contient porteraient le
 * même nom.
 */
function kindClass(kind: BackdropId): string {
  const camel = kind.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
  return `kind${camel[0].toUpperCase()}${camel.slice(1)}`;
}

/* ── Grille en perspective et balayage : tower defense, arcade ──────────── */
function NeonGrid() {
  return (
    <>
      <div className={styles.grid} />
      <div className={styles.scanline} />
      <div className={styles.halo} />
    </>
  );
}

/* ── Grain, filets et tache d'encre : jeux de papier ────────────────────── */
function PaperInk() {
  return (
    <>
      <div className={styles.rules} />
      <svg className={styles.blot} viewBox="0 0 400 400" preserveAspectRatio="none">
        <path
          d="M60 200c0-70 60-130 140-130s140 50 140 130-70 130-140 130S60 270 60 200z"
          fill="var(--u-accent)"
          opacity="0.06"
        />
      </svg>
    </>
  );
}

/* ── Bulles qui montent : puzzles doux ──────────────────────────────────── */
function SoftBubbles() {
  // Positions fixes plutôt qu'aléatoires : le rendu serveur et le client
  // doivent produire exactement le même HTML.
  const bubbles = [
    { left: '8%', size: 180, delay: 0, dur: 26 },
    { left: '26%', size: 90, delay: 5, dur: 32 },
    { left: '48%', size: 240, delay: 2, dur: 38 },
    { left: '68%', size: 120, delay: 8, dur: 28 },
    { left: '86%', size: 200, delay: 3, dur: 34 },
  ];
  return (
    <>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className={styles.bubble}
          style={
            {
              left: b.left,
              '--size': `${b.size}px`,
              '--delay': `${b.delay}s`,
              '--dur': `${b.dur}s`,
            } as never
          }
        />
      ))}
    </>
  );
}

/* ── Étoiles et orbites : jeux spatiaux, déduction ──────────────────────── */
function Starfield() {
  return (
    <>
      <div className={styles.stars} />
      <div className={styles.orbit} />
      <div className={`${styles.orbit} ${styles.orbit2}`} />
    </>
  );
}

/* ── Tapis feutré : jeux de cartes ──────────────────────────────────────── */
function CardFelt() {
  return (
    <>
      <div className={styles.felt} />
      <div className={styles.feltVignette} />
    </>
  );
}

/* ── Onde audio : podcasts ──────────────────────────────────────────────── */
function Waveform() {
  const bars = Array.from({ length: 48 }, (_, i) => i);
  return (
    <div className={styles.wave}>
      {bars.map((i) => (
        <span
          key={i}
          style={
            {
              '--i': i,
              // Hauteurs déterministes : deux sinusoïdes décalées.
              '--h': `${28 + Math.round(26 * Math.abs(Math.sin(i * 0.7)) + 18 * Math.abs(Math.sin(i * 0.23)))}%`,
            } as never
          }
        />
      ))}
    </div>
  );
}

/* ── Trame technique et cotes : logique, outils ─────────────────────────── */
function Blueprint() {
  return (
    <>
      <div className={styles.blueprintGrid} />
      <div className={styles.blueprintMarks} />
    </>
  );
}

/* ── Route qui défile : EcoPompe ────────────────────────────────────────── */
function Road() {
  return (
    <>
      <div className={styles.road} />
      <div className={styles.roadDashes} />
    </>
  );
}

/* ── Presque rien, qui respire : apps calmes ────────────────────────────── */
function Zen() {
  return (
    <>
      <div className={styles.breath} />
      <div className={styles.horizon} />
    </>
  );
}
