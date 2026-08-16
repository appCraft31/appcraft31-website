import type { ReactNode } from 'react';
import { siteFontVars } from '@/lib/fonts';
import { LANG_META, type Lang } from '@/lib/types';
import { ThemeScript } from './ThemeScript';

/**
 * Squelette de document partagé par les deux layouts racines
 * (`(fr)` sans préfixe d'URL, `(intl)/[lang]` pour les cinq autres langues).
 *
 * Next impose un `<html>` par layout racine ; ce composant évite d'en écrire deux.
 */
export function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={LANG_META[lang].htmlLang} className={siteFontVars} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
