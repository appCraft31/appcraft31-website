'use client';

import { useEffect, useState } from 'react';

/**
 * Bascule clair/sombre. Le thème initial est déjà posé par `ThemeScript` avant
 * le premier rendu — ce composant ne fait que le lire et le changer.
 */
export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'light' : 'dark');
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('ac31_theme', next);
    } catch {
      // Navigation privée : le choix ne survivra pas à la page, tant pis.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="icon-btn"
      aria-label={label}
      title={label}
      aria-pressed={theme === 'light'}
    >
      <span aria-hidden="true">{theme === 'light' ? '☀' : '☾'}</span>
    </button>
  );
}
