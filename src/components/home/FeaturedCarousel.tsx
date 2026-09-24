'use client';

import { Children, useCallback, useEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 6500;

/**
 * Mécanique du carrousel de l'accueil.
 *
 * Le défilement est celui du navigateur (`scroll-snap`) : le glisser au doigt,
 * le pavé tactile et le clavier marchent sans une ligne de JS. Ce composant
 * n'ajoute que les flèches, les pastilles et l'avance automatique — qui
 * s'arrête dès que le visiteur survole, prend le focus, ou a demandé moins
 * d'animations.
 */
export function FeaturedCarousel({
  children,
  label,
  names,
  labels,
}: {
  children: React.ReactNode;
  label: string;
  names: string[];
  labels: { prev: string; next: string; goto: string; pause: string; play: string };
}) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);

  const go = useCallback(
    (index: number) => {
      const el = track.current;
      if (!el) return;
      const target = (index + count) % count;
      el.scrollTo({ left: target * el.clientWidth, behavior: 'smooth' });
    },
    [count],
  );

  // La diapositive active est celle qui occupe le plus la piste : on la lit
  // plutôt que de la déduire des clics, pour suivre aussi le glisser au doigt.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const items = [...el.children] as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            setActive(items.indexOf(e.target as HTMLElement));
          }
        }
      },
      { root: el, threshold: [0.6] },
    );
    items.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing || held) return;
    const id = window.setTimeout(() => {
      if (!document.hidden) go(active + 1);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, playing, held, go]);

  return (
    <div
      className="featured-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      data-playing={playing && !held ? '' : undefined}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(active + 1);
        if (e.key === 'ArrowLeft') go(active - 1);
      }}
    >
      <div className="featured-track" ref={track} aria-live={playing ? 'off' : 'polite'}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="featured-item"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${count} — ${names[i]}`}
            aria-hidden={i !== active}
            inert={i !== active}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="featured-controls">
        <button type="button" className="featured-arrow" onClick={() => go(active - 1)} aria-label={labels.prev}>
          ←
        </button>

        <div className="featured-dots">
          {names.map((name, i) => (
            <button
              key={name}
              type="button"
              className="featured-dot"
              aria-label={labels.goto.replace('{app}', name)}
              aria-current={i === active}
              onClick={() => go(i)}
              style={{ '--autoplay': `${AUTOPLAY_MS}ms` } as never}
            >
              <span className="featured-dot-name">{name}</span>
              {/* La clé relance l'animation de la jauge à chaque changement. */}
              <span className="featured-dot-bar" key={i === active ? `on-${active}` : 'off'} />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="featured-arrow"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? labels.pause : labels.play}
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <button type="button" className="featured-arrow" onClick={() => go(active + 1)} aria-label={labels.next}>
          →
        </button>
      </div>
    </div>
  );
}
