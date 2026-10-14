'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Lang } from '@/lib/types';
import { TINTA_APP_STORE, tintaPlayPath } from '@/lib/play';
import { TINTA_COPY } from './copy';
import {
  type Cells,
  type Clue,
  type Color,
  type DailyPuzzle,
  chipStatus,
  currentStreak,
  fixedCells,
  initialCells,
  isFull,
  isSolved,
  localDateKey,
  relationViolated,
  shareText,
  stars,
} from './logic';
import styles from './tinta.module.css';

const SITE = 'https://appcraft31.app';
const COLOR_CLASS = [styles.teal, styles.amber, styles.rose, styles.violet];

/* ------------------------------------------------------------------------ */
/* Stockage local (toujours protégé : navigation privée, stockage bloqué…)   */
/* ------------------------------------------------------------------------ */

interface Saved {
  cells: Cells;
  marks: number[];
  mistakes: number;
  solved: boolean;
}

function load<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function store(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* stockage indisponible : la partie reste jouable, sans mémoire */
  }
}

const SAVE_KEY = (date: string) => `tinta.daily.${date}`;
const SOLVED_KEY = 'tinta.solved';
const TUTO_KEY = 'tinta.tutorial';

/* ------------------------------------------------------------------------ */
/* Géométrie du plateau (portage de `BoardView.metrics`)                     */
/* ------------------------------------------------------------------------ */

interface Metrics {
  cell: number;
  gap: number;
  font: number;
  perLine: number;
  rowColumn: number;
  colHeader: number;
}

const chipWidth = (font: number) => font * 0.75 + 3 + font * 0.65 + 10;

function metrics(width: number, n: number, maxRow: number, maxCol: number): Metrics {
  const perLine = maxRow > 1 ? 2 : 1;
  const rowColumnWidth = (font: number) =>
    maxRow > 0 ? perLine * chipWidth(font) + (perLine - 1) * 3 : 0;
  let font = 12;
  let cell = 30;
  for (let pass = 0; pass < 2; pass++) {
    const rc = rowColumnWidth(font);
    const free = width - rc - (rc > 0 ? 6 : 0);
    cell = free / (n + 0.16 * (n - 1));
    cell = Math.min(76, Math.max(28, Math.floor(cell)));
    font = Math.min(15, Math.max(10, Math.round(cell * 0.3)));
  }
  const gap = Math.max(4, Math.round(cell * 0.16));
  const chipH = font + 8;
  const colHeader = maxCol > 0 ? maxCol * chipH + (maxCol - 1) * 3 + 4 : 0;
  return { cell, gap, font, perLine, rowColumn: rowColumnWidth(font), colHeader };
}

/* ------------------------------------------------------------------------ */
/* Icônes                                                                    */
/* ------------------------------------------------------------------------ */

const Icon = {
  eraser: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.2 3.8a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 1 0 2.8L12 20H7.2a2 2 0 0 1-1.4-.6l-3-3a2 2 0 0 1 0-2.8zM9.5 9.5l5 5M12 20h9" />
    </svg>
  ),
  pencil: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19zM14.5 6.5l3 3" />
    </svg>
  ),
  undo: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 14L4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.4 9.2a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.3-2.6 4M12 17.6v.1" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.lockIcon}>
      <path d="M7 10V7.5a5 5 0 0 1 10 0V10h.5A1.5 1.5 0 0 1 19 11.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-8A1.5 1.5 0 0 1 6.5 10zm2.5 0h5V7.5a2.5 2.5 0 0 0-5 0z" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 15V3.5M7.5 8L12 3.5 16.5 8M5 12v7.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V12" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
};

/* ------------------------------------------------------------------------ */
/* Briques visuelles                                                         */
/* ------------------------------------------------------------------------ */

export function Tile({ color, size, dimmed }: { color: Color; size: number; dimmed?: boolean }) {
  return (
    <span
      className={`${styles.tile} ${COLOR_CLASS[color]} ${dimmed ? styles.dimmed : ''}`}
      style={{ width: size, height: size, '--s': `${size}px` } as React.CSSProperties}
    />
  );
}

export function Chip({
  color,
  n,
  status = 'open',
  font = 12,
  label,
}: {
  color: Color;
  n: number;
  status?: 'open' | 'satisfied' | 'exceeded';
  font?: number;
  label?: string;
}) {
  return (
    <span
      className={`${styles.chip} ${styles[status]}`}
      style={{ fontSize: font }}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      <span className={`${styles.chipDot} ${COLOR_CLASS[color]}`} />
      <span>{n}</span>
    </span>
  );
}

export function Marker({ equal, size, violated }: { equal: boolean; size: number; violated?: boolean }) {
  return (
    <span
      className={`${styles.marker} ${violated ? styles.violated : ''}`}
      style={{ width: size, height: size, fontSize: size * 0.6 }}
      aria-hidden="true"
    >
      {equal ? '=' : '≠'}
    </span>
  );
}

function MarkDots({ mask, size }: { mask: number; size: number }) {
  const dot = Math.max(5, size * 0.17);
  return (
    <span className={styles.marks} style={{ gap: size * 0.12 }} aria-hidden="true">
      {[0, 1, 2, 3].map((c) => (
        <span
          key={c}
          className={`${styles.markDot} ${COLOR_CLASS[c]}`}
          style={{ width: dot, height: dot, opacity: mask & (1 << c) ? 1 : 0 }}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------------ */
/* Jeu                                                                       */
/* ------------------------------------------------------------------------ */

type Phase = 'loading' | 'missing' | 'ready';

export function TintaGame({ lang }: { lang: Lang }) {
  const t = TINTA_COPY[lang];
  const [phase, setPhase] = useState<Phase>('loading');
  const [puzzle, setPuzzle] = useState<DailyPuzzle | null>(null);
  const [today, setToday] = useState('');
  const [cells, setCells] = useState<Cells>([]);
  const [marks, setMarks] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [solved, setSolved] = useState(false);
  const [history, setHistory] = useState<{ cells: Cells; marks: number[] }[]>([]);
  const [selected, setSelected] = useState<Color>(0);
  const [erase, setErase] = useState(false);
  const [pencil, setPencil] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [shake, setShake] = useState(0);
  const [showWin, setShowWin] = useState(false);
  const [showTuto, setShowTuto] = useState(false);
  const [streak, setStreak] = useState(0);
  const [toast, setToast] = useState('');
  const [width, setWidth] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);

  /* Chargement de la grille du jour (date LOCALE du navigateur). */
  useEffect(() => {
    let date = localDateKey();
    // `?date=` rejoue une grille passée (jamais une grille future).
    const asked = new URLSearchParams(window.location.search).get('date');
    if (asked && /^\d{4}-\d{2}-\d{2}$/.test(asked) && asked <= date) date = asked;
    setToday(date);
    setStreak(currentStreak(load<string[]>(SOLVED_KEY) ?? [], localDateKey()));
    if (!load<boolean>(TUTO_KEY)) setShowTuto(true);

    fetch(`/data/tinta/${date.slice(0, 7)}.json`)
      .then((r) => (r.ok ? r.json() : []))
      .then((month: DailyPuzzle[]) => {
        const p = month.find((x) => x.date === date);
        if (!p) return setPhase('missing');
        const saved = load<Saved>(SAVE_KEY(date));
        const valid = saved && saved.cells?.length === p.size * p.size;
        setPuzzle(p);
        setCells(valid ? saved.cells : initialCells(p));
        setMarks(valid ? saved.marks : Array(p.size * p.size).fill(0));
        setMistakes(valid ? saved.mistakes : 0);
        setSolved(valid ? saved.solved : false);
        if (valid && saved.solved) setShowWin(true);
        setPhase('ready');
      })
      .catch(() => setPhase('missing'));
  }, []);

  /* Largeur disponible → taille des cases. */
  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [phase]);

  const locked = useMemo(() => (puzzle ? fixedCells(puzzle) : new Map<number, Color>()), [puzzle]);

  const persist = useCallback(
    (next: Saved) => {
      if (today) store(SAVE_KEY(today), next);
    },
    [today],
  );

  const tap = useCallback(
    (i: number) => {
      if (!puzzle || solved || locked.has(i)) return;
      let nextCells = cells;
      let nextMarks = marks;
      if (pencil) {
        if (erase) {
          if (marks[i] === 0) return;
          nextMarks = marks.slice();
          nextMarks[i] = 0;
        } else {
          if (cells[i] !== null) return;
          nextMarks = marks.slice();
          nextMarks[i] ^= 1 << selected;
        }
      } else if (erase) {
        if (cells[i] !== null) {
          nextCells = cells.slice();
          nextCells[i] = null;
        } else if (marks[i] !== 0) {
          nextMarks = marks.slice();
          nextMarks[i] = 0;
        } else return;
      } else {
        nextCells = cells.slice();
        nextCells[i] = cells[i] === selected ? null : selected;
      }

      setHistory((h) => [...h.slice(-199), { cells, marks }]);
      setCells(nextCells);
      setMarks(nextMarks);
      setWrong(false);

      let nextMistakes = mistakes;
      let nextSolved = false;
      if (!pencil && isFull(nextCells)) {
        if (isSolved(puzzle, nextCells)) {
          nextSolved = true;
          const days = new Set(load<string[]>(SOLVED_KEY) ?? []);
          days.add(today);
          store(SOLVED_KEY, [...days].sort().slice(-400));
          setStreak(currentStreak(days, localDateKey()));
          setSolved(true);
          window.setTimeout(() => setShowWin(true), 450);
        } else {
          nextMistakes = mistakes + 1;
          setMistakes(nextMistakes);
          setWrong(true);
          setShake((s) => s + 1);
        }
      }
      persist({ cells: nextCells, marks: nextMarks, mistakes: nextMistakes, solved: nextSolved });
    },
    [puzzle, solved, locked, cells, marks, pencil, erase, selected, mistakes, today, persist],
  );

  const undo = useCallback(() => {
    if (solved || history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCells(prev.cells);
    setMarks(prev.marks);
    setWrong(false);
    persist({ cells: prev.cells, marks: prev.marks, mistakes, solved: false });
  }, [history, solved, mistakes, persist]);

  /* Raccourcis clavier : 1–4 couleurs, E gomme, P crayon, Z / Ctrl+Z annuler. */
  useEffect(() => {
    if (!puzzle) return;
    const onKey = (e: KeyboardEvent) => {
      if (showTuto || showWin || e.altKey) return;
      const k = e.key.toLowerCase();
      const n = Number(k);
      if (n >= 1 && n <= puzzle.colorCount) {
        setSelected((n - 1) as Color);
        setErase(false);
      } else if (k === 'e') setErase((v) => !v);
      else if (k === 'p') setPencil((v) => !v);
      else if (k === 'z' || k === 'u') undo();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [puzzle, undo, showTuto, showWin]);

  const closeTuto = () => {
    store(TUTO_KEY, true);
    setShowTuto(false);
  };

  const url = `${SITE}${tintaPlayPath(lang)}`;

  const share = async () => {
    if (!puzzle) return;
    const text = shareText(puzzle, mistakes, streak, url);
    try {
      if (navigator.share) {
        await navigator.share({ text });
        return;
      }
    } catch (err) {
      if ((err as Error)?.name === 'AbortError') return;
    }
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setToast(t.copied);
    window.setTimeout(() => setToast(''), 2200);
  };

  /* ---------------------------------------------------------------------- */

  const header = (
    <div className={styles.gameHead}>
      <div>
        <p className={styles.number}>{puzzle ? `Tinta #${puzzle.number}` : 'Tinta'}</p>
        {puzzle && <p className={styles.format}>{t.format(puzzle.size, puzzle.colorCount)}</p>}
      </div>
      <div className={styles.headRight}>
        {puzzle && (
          <span className={`${styles.mistakes} ${mistakes ? styles.hasMistakes : ''}`}>
            {t.mistakes(mistakes)}
          </span>
        )}
        <button type="button" className={styles.iconBtn} onClick={() => setShowTuto(true)} aria-label={t.help}>
          {Icon.help}
        </button>
      </div>
    </div>
  );

  let body: React.ReactNode;
  if (phase === 'loading') body = <p className={styles.status}>{t.loading}</p>;
  else if (phase === 'missing' || !puzzle) body = <p className={styles.status}>{t.noPuzzle}</p>;
  else body = renderBoard();

  function renderBoard() {
    const p = puzzle!;
    const n = p.size;
    const rows: Extract<Clue, { t: 'count' }>[][] = Array.from({ length: n }, () => []);
    const cols: Extract<Clue, { t: 'count' }>[][] = Array.from({ length: n }, () => []);
    const rels: Extract<Clue, { t: 'rel' }>[] = [];
    for (const c of p.clues) {
      if (c.t === 'count') (c.line === 'row' ? rows : cols)[c.i].push(c);
      else if (c.t === 'rel') rels.push(c);
    }
    rows.forEach((r) => r.sort((a, b) => a.color - b.color));
    cols.forEach((r) => r.sort((a, b) => a.color - b.color));
    const m = metrics(
      Math.min(width || 340, 560),
      n,
      Math.max(0, ...rows.map((r) => r.length)),
      Math.max(0, ...cols.map((r) => r.length)),
    );
    const step = m.cell + m.gap;
    const gridSize = n * m.cell + (n - 1) * m.gap;
    const markerSize = Math.max(16, Math.min(28, m.cell * 0.46));

    const chip = (c: Extract<Clue, { t: 'count' }>) => (
      <Chip
        key={`${c.line}${c.i}${c.color}`}
        color={c.color}
        n={c.n}
        font={m.font}
        status={chipStatus(c, cells, n)}
        label={t.chipLabel(c.line, c.i, c.n, t.colors[c.color])}
      />
    );

    return (
      <div className={styles.boardWrap} key={shake} data-shake={shake > 0 && wrong ? '' : undefined}>
        <div className={styles.board} style={{ gap: m.rowColumn ? 6 : 0 }}>
          {m.rowColumn > 0 && (
            <div className={styles.rowChips} style={{ width: m.rowColumn, gap: m.gap, paddingTop: m.colHeader + m.gap }}>
              {rows.map((r, ri) => (
                <div key={ri} className={styles.rowChipCell} style={{ height: m.cell }}>
                  {Array.from({ length: Math.ceil(r.length / m.perLine) }, (_, li) => (
                    <div key={li} className={styles.chipLine}>
                      {r.slice(li * m.perLine, li * m.perLine + m.perLine).map(chip)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          <div>
            {m.colHeader > 0 && (
              <div className={styles.colChips} style={{ gap: m.gap, height: m.colHeader, marginBottom: m.gap }}>
                {cols.map((c, ci) => (
                  <div key={ci} className={styles.colChipCell} style={{ width: m.cell }}>
                    {c.map(chip)}
                  </div>
                ))}
              </div>
            )}
            <div
              className={styles.grid}
              role="grid"
              style={{
                width: gridSize,
                height: gridSize,
                gridTemplateColumns: `repeat(${n}, ${m.cell}px)`,
                gridTemplateRows: `repeat(${n}, ${m.cell}px)`,
                gap: m.gap,
              }}
            >
              {cells.map((color, i) => {
                const r = Math.floor(i / n);
                const c = i % n;
                const isLocked = locked.has(i);
                const radius = m.cell * 0.26;
                return (
                  <button
                    key={i}
                    type="button"
                    className={styles.cell}
                    style={{ width: m.cell, height: m.cell, borderRadius: radius }}
                    onClick={() => tap(i)}
                    disabled={isLocked || solved}
                    aria-label={t.cellLabel(r, c, color === null ? null : t.colors[color], isLocked)}
                  >
                    {color === null ? (
                      <>
                        <span className={styles.well} style={{ borderRadius: radius }} />
                        {marks[i] !== 0 && <MarkDots mask={marks[i]} size={m.cell} />}
                      </>
                    ) : (
                      <>
                        <Tile color={color} size={m.cell} dimmed={isLocked} />
                        {isLocked && (
                          <span className={styles.lock} style={{ width: Math.max(9, m.cell * 0.24) }}>
                            {Icon.lock}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
              {rels.map((rel, k) => {
                const x = ((rel.a[1] + rel.b[1]) / 2) * step + m.cell / 2;
                const y = ((rel.a[0] + rel.b[0]) / 2) * step + m.cell / 2;
                return (
                  <span key={k} className={styles.markerPos} style={{ left: x, top: y }}>
                    <Marker equal={rel.eq} size={markerSize} violated={relationViolated(rel, cells, n)} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const s = stars(mistakes);

  return (
    <div className={styles.game}>
      {header}
      <div className={styles.tray} ref={boardRef}>
        {body}
      </div>

      <p className={styles.wrong} role="status" aria-live="polite">
        {wrong ? t.wrong : ' '}
      </p>

      {puzzle && (
        <div className={styles.toolbar} role="toolbar" aria-label={t.paletteLabel}>
          <div className={styles.palette}>
            {Array.from({ length: puzzle.colorCount }, (_, c) => (
              <button
                key={c}
                type="button"
                className={`${styles.paletteBtn} ${!erase && selected === c ? styles.selected : ''}`}
                onClick={() => {
                  setSelected(c as Color);
                  setErase(false);
                }}
                aria-label={t.colors[c]}
                aria-pressed={!erase && selected === c}
              >
                <Tile color={c as Color} size={40} />
                {pencil && !erase && selected === c && <span className={styles.pencilBadge}>{Icon.pencil}</span>}
              </button>
            ))}
          </div>
          <span className={styles.sep} aria-hidden="true" />
          <button
            type="button"
            className={`${styles.tool} ${erase ? styles.toolActive : ''}`}
            onClick={() => setErase((v) => !v)}
            aria-label={t.erase}
            aria-pressed={erase}
            title={t.erase}
          >
            {Icon.eraser}
          </button>
          <button
            type="button"
            className={`${styles.tool} ${pencil ? styles.toolPencil : ''}`}
            onClick={() => setPencil((v) => !v)}
            aria-label={t.pencil}
            aria-pressed={pencil}
            title={t.pencil}
          >
            {Icon.pencil}
          </button>
          <button
            type="button"
            className={styles.tool}
            onClick={undo}
            disabled={history.length === 0 || solved}
            aria-label={t.undo}
            title={t.undo}
          >
            {Icon.undo}
          </button>
        </div>
      )}

      {solved && !showWin && puzzle && (
        <button type="button" className={styles.reopen} onClick={() => setShowWin(true)}>
          {'★'.repeat(s)}
          {'☆'.repeat(3 - s)} · {t.share}
        </button>
      )}

      {showTuto && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="tinta-tuto">
          <div className={styles.sheet}>
            <h2 id="tinta-tuto" className={styles.sheetTitle}>
              {t.tutoTitle}
            </h2>
            <ol className={styles.tutoList}>
              <li>
                <span className={styles.tutoVisual}>
                  <Tile color={0} size={30} />
                  <Tile color={1} size={30} />
                  <Tile color={2} size={30} />
                </span>
                <span>{t.tuto[0]}</span>
              </li>
              <li>
                <span className={styles.tutoVisual}>
                  <Chip color={1} n={2} font={13} />
                </span>
                <span>{t.tuto[1]}</span>
              </li>
              <li>
                <span className={styles.tutoVisual}>
                  <Marker equal size={24} />
                  <Marker equal={false} size={24} />
                </span>
                <span>{t.tuto[2]}</span>
              </li>
            </ol>
            <div className={styles.example} aria-hidden="true">
              <Chip color={1} n={2} font={12} />
              <span className={styles.exampleRow}>
                <Tile color={1} size={34} />
                <span className={styles.exampleMarker}>
                  <Marker equal size={20} />
                </span>
                <Tile color={1} size={34} />
                <span className={styles.exampleMarker}>
                  <Marker equal={false} size={20} />
                </span>
                <Tile color={0} size={34} />
              </span>
            </div>
            <button type="button" className={styles.primary} onClick={closeTuto} autoFocus>
              {t.tutoGo}
            </button>
          </div>
        </div>
      )}

      {showWin && puzzle && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="tinta-win">
          <div className={`${styles.sheet} ${styles.winSheet}`}>
            <button type="button" className={styles.close} onClick={() => setShowWin(false)} aria-label="×">
              {Icon.close}
            </button>
            <p className={styles.number}>Tinta #{puzzle.number}</p>
            <div className={styles.stars} aria-label={`${s}/3`}>
              {[0, 1, 2].map((k) => (
                <span key={k} className={k < s ? styles.starOn : styles.starOff}>
                  ★
                </span>
              ))}
            </div>
            <h2 id="tinta-win" className={styles.sheetTitle}>
              {t.winTitle[s - 1]}
            </h2>
            <p className={styles.winMeta}>
              {t.format(puzzle.size, puzzle.colorCount)} · {t.mistakes(mistakes)}
              {streak > 0 && <> · 🔥 {t.streak(streak)}</>}
            </p>
            <button type="button" className={styles.primary} onClick={share}>
              {Icon.share}
              {t.share}
            </button>
            <Countdown label={t.nextIn} />
            <div className={styles.winCta}>
              <p className={styles.winCtaTitle}>{t.ctaTitle}</p>
              <p className={styles.winCtaBody}>{t.ctaBody}</p>
              <a href={TINTA_APP_STORE} target="_blank" rel="noopener" className={styles.badge}>
                {/* Badge officiel Apple, jamais recoloré. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/app-store-badge.svg" alt={t.ctaBadgeAlt} width={162} height={54} />
              </a>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <p className={styles.toast} role="status">
          {toast}
        </p>
      )}
    </div>
  );
}

/** Compte à rebours jusqu'à minuit (heure locale). */
function Countdown({ label }: { label: (hhmm: string) => string }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  const d = new Date(now);
  const midnight = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime();
  const mins = Math.max(0, Math.ceil((midnight - now) / 60_000));
  const hhmm = `${Math.floor(mins / 60)} h ${String(mins % 60).padStart(2, '0')}`;
  return <p className={styles.countdown}>{label(hhmm)}</p>;
}
