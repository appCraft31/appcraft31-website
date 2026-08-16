/**
 * Traduit le contrat d'univers d'une app (`theme.ts`) en variables CSS.
 *
 * Les composants marketing sont écrits une seule fois et lisent `--u-*` :
 * c'est ce qui leur permet de changer complètement d'allure d'une app à
 * l'autre sans qu'aucun composant ne connaisse le nom d'un produit.
 */

import type { CSSProperties } from 'react';
import type { AppTheme, Motion } from './types';

const MOTION_SCALE: Record<Motion, string> = {
  calm: '0.45',
  medium: '1',
  high: '1.6',
};

const BORDER_WIDTH: Record<AppTheme['shape']['border'], string> = {
  hard: '2px',
  soft: '1px',
  organic: '1px',
  none: '0px',
};

export function themeVars(theme: AppTheme): CSSProperties {
  const { palette, fonts, shape } = theme;
  return {
    '--u-ink': palette.ink,
    '--u-paper': palette.paper,
    '--u-surface': palette.surface,
    '--u-accent': palette.accent,
    // Le décor peut se permettre un pastel ; un titre, non.
    '--u-accent-text': palette.accentText ?? palette.accent,
    '--u-accent-2': palette.accentAlt,
    '--u-glow': palette.glow,
    '--u-font-display': fonts.display,
    '--u-font-body': fonts.body,
    '--u-radius': `${shape.radius}px`,
    '--u-radius-sm': `${Math.max(0, Math.round(shape.radius * 0.5))}px`,
    '--u-border-w': BORDER_WIDTH[shape.border],
    '--u-motion': MOTION_SCALE[theme.motion],
  } as CSSProperties;
}

/**
 * Palette d'une app réduite à l'usage de l'accueil : la carte laisse
 * transparaître l'univers du produit sans charger sa police.
 */
export function cardVars(theme: AppTheme): CSSProperties {
  return {
    '--u-accent': theme.palette.accent,
    '--u-accent-2': theme.palette.accentAlt,
    '--u-glow': theme.palette.glow,
    '--u-ink': theme.palette.ink,
    '--u-paper': theme.palette.paper,
  } as CSSProperties;
}
