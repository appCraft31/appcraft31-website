'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LANG_META, LANGS, type Lang } from '@/lib/types';

/**
 * Sélecteur de langue.
 *
 * Contrairement à l'ancien site, changer de langue change d'URL : chaque langue
 * a ses propres pages statiques, indexables. Les liens sont donc de vrais liens.
 */
export function LangSwitcher({
  current,
  urls,
  label,
}: {
  current: Lang;
  /** URL de la page courante dans chaque langue. */
  urls: Record<Lang, string>;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="lang-select" ref={root}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <span>
          {LANG_META[current].flag} {current.toUpperCase()}
        </span>
        <span className="chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="lang-menu" role="menu">
          {LANGS.map((lang) => (
            <Link
              key={lang}
              href={urls[lang]}
              role="menuitem"
              hrefLang={lang}
              className={lang === current ? 'is-current' : undefined}
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">{LANG_META[lang].flag}</span> {LANG_META[lang].label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
