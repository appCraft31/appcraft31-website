/**
 * Univers graphique de chaque produit.
 *
 * Les couleurs viennent du produit lui-même : palette lue dans le code de l'app
 * (`lib/config/palette.dart`, `theme.dart`) quand il est accessible, sinon
 * couleurs dominantes de son icône et de ses captures. Aucune n'est inventée.
 *
 * Un seul fichier plutôt qu'un par app : c'est ici qu'on voit si la grille de
 * l'accueil tient debout, vingt vignettes côte à côte.
 */

import type { AppTheme } from '@/lib/types';

/**
 * Familles typographiques.
 *
 * Les polices sont hébergées par `next/font`, qui leur donne un nom généré :
 * on passe donc par les variables déclarées dans `lib/fonts-universe.ts`.
 * C'est aussi ce qui permet à une page de ne charger que ses deux polices.
 */
const F = {
  techno: 'var(--font-chakra), system-ui, sans-serif',
  technoBody: 'var(--font-rajdhani), system-ui, sans-serif',
  serif: 'var(--font-newsreader), Georgia, serif',
  serifDisplay: 'var(--font-instrument), Georgia, serif',
  grotesk: 'var(--font-space), system-ui, sans-serif',
  rounded: 'var(--font-baloo), system-ui, sans-serif',
  roundedBody: 'var(--font-nunito), system-ui, sans-serif',
  arcade: 'var(--font-press), monospace',
  editorial: 'var(--font-playfair), Georgia, serif',
  mono: 'var(--font-jetbrains), ui-monospace, monospace',
  inter: 'var(--font-inter), Inter, system-ui, sans-serif',
} as const;

export const THEMES: Record<string, AppTheme> = {
  /* ── Tower defense néon : la palette vient de lib/config/palette.dart ───── */
  holdfire: {
    palette: {
      ink: '#E6F3FF',
      paper: '#070B14',
      surface: '#0D1526',
      accent: '#3BE8FF',
      // Le rose est celui du logotype du jeu, pas de son gameplay : c'est lui
      // qui identifie Hold Fire, l'ambre n'est qu'une couleur de couloir.
      accentAlt: '#FF3DAE',
      glow: 'rgba(59, 232, 255, 0.32)',
    },
    fonts: { display: F.techno, body: F.technoBody },
    backdrop: 'neon-grid',
    shape: { radius: 4, border: 'hard' },
    motion: 'high',
    layout: ['hero-full', 'stat-band', 'how-it-plays', 'diagram', 'privacy', 'cta'],
  },

  /* ── Sudoku : papier crème et encre, palette de theme.dart ─────────────── */
  sudoku: {
    palette: {
      ink: '#241F18',
      paper: '#E9E0CD',
      surface: '#F7F2E6',
      accent: '#2A4780',
      accentAlt: '#9E3323',
      glow: 'rgba(42, 71, 128, 0.14)',
    },
    fonts: { display: F.serif, body: F.serif },
    backdrop: 'paper-ink',
    shape: { radius: 2, border: 'soft' },
    motion: 'calm',
    layout: ['hero-offset', 'rules', 'stat-band', 'features', 'gallery-stack', 'privacy', 'cta'],
  },

  /* ── tenGO : bulles pastel sur beige, l'icône donne le ton ─────────────── */
  tengo: {
    palette: {
      ink: '#1D1D1F',
      paper: '#F2EEE4',
      surface: '#FFFFFF',
      accent: '#F5A8B8',
      accentAlt: '#7FBEF0',
      accentText: '#D4667F',
      glow: 'rgba(245, 168, 184, 0.4)',
    },
    fonts: { display: F.rounded, body: F.inter },
    backdrop: 'soft-bubbles',
    shape: { radius: 26, border: 'organic' },
    motion: 'medium',
    layout: ['hero-split', 'how-it-plays', 'stat-band', 'gallery-device', 'privacy', 'cta'],
  },

  remindo: {
    palette: {
      ink: '#1B1730',
      paper: '#F6F4FF',
      surface: '#FFFFFF',
      accent: '#8E7CF0',
      accentAlt: '#FFB3C7',
      glow: 'rgba(142, 124, 240, 0.32)',
    },
    fonts: { display: F.rounded, body: F.roundedBody },
    backdrop: 'zen',
    shape: { radius: 24, border: 'organic' },
    motion: 'calm',
    layout: ['hero-split', 'features', 'gallery-device', 'privacy', 'cta'],
  },

  talon: {
    palette: {
      ink: '#14261C',
      paper: '#FAF8F2',
      surface: '#E6E2D6',
      accent: '#1C5238',
      accentAlt: '#C0392B',
      glow: 'rgba(28, 82, 56, 0.2)',
    },
    fonts: { display: F.serifDisplay, body: F.inter },
    backdrop: 'card-felt',
    shape: { radius: 10, border: 'soft' },
    motion: 'calm',
    layout: ['hero-offset', 'how-it-plays', 'stat-band', 'gallery-stack', 'privacy', 'cta'],
  },

  tinta: {
    palette: {
      ink: '#2B2118',
      paper: '#FFFDF8',
      surface: '#F6F1E7',
      accent: '#E07A5F',
      accentAlt: '#3D7068',
      accentText: '#C0512F',
      glow: 'rgba(224, 122, 95, 0.26)',
    },
    fonts: { display: F.editorial, body: F.inter },
    backdrop: 'paper-ink',
    shape: { radius: 8, border: 'soft' },
    motion: 'calm',
    layout: ['hero-offset', 'rules', 'gallery-tilt', 'privacy', 'cta'],
  },

  binero: {
    palette: {
      ink: '#1D1D1F',
      paper: '#FFFFFF',
      surface: '#F4F7F5',
      accent: '#6FC59B',
      accentAlt: '#1D1D1F',
      accentText: '#2E8560',
      glow: 'rgba(111, 197, 155, 0.3)',
    },
    fonts: { display: F.grotesk, body: F.inter },
    backdrop: 'blueprint',
    shape: { radius: 6, border: 'hard' },
    motion: 'medium',
    layout: ['hero-split', 'rules', 'stat-band', 'gallery-stack', 'privacy', 'cta'],
  },

  glyphe: {
    palette: {
      ink: '#F0ECDD',
      paper: '#15162A',
      surface: '#20224A',
      accent: '#E7B84B',
      accentAlt: '#6C7BD1',
      glow: 'rgba(231, 184, 75, 0.28)',
    },
    fonts: { display: F.serifDisplay, body: F.inter },
    backdrop: 'starfield',
    shape: { radius: 6, border: 'soft' },
    motion: 'medium',
    layout: ['hero-full', 'rules', 'stat-band', 'gallery-tilt', 'privacy', 'cta'],
  },

  zenkuto: {
    palette: {
      ink: '#2C3327',
      paper: '#F6F1E5',
      surface: '#EAE1D0',
      accent: '#5E8154',
      accentAlt: '#C08A4A',
      glow: 'rgba(94, 129, 84, 0.22)',
    },
    fonts: { display: F.serif, body: F.inter },
    backdrop: 'paper-ink',
    shape: { radius: 4, border: 'soft' },
    motion: 'calm',
    layout: ['hero-offset', 'rules', 'stat-band', 'gallery-stack', 'privacy', 'cta'],
  },

  contree: {
    palette: {
      ink: '#F2ECE3',
      paper: '#131C25',
      surface: '#1C2A38',
      accent: '#FF5A4D',
      accentAlt: '#F2C14E',
      glow: 'rgba(255, 90, 77, 0.3)',
    },
    fonts: { display: F.serifDisplay, body: F.inter },
    backdrop: 'card-felt',
    shape: { radius: 12, border: 'soft' },
    motion: 'medium',
    layout: ['hero-full', 'how-it-plays', 'stat-band', 'gallery-tilt', 'privacy', 'cta'],
  },

  keeply: {
    palette: {
      ink: '#221E1A',
      paper: '#F4F1EA',
      surface: '#FFFFFF',
      accent: '#D6452B',
      accentAlt: '#4A7C7E',
      glow: 'rgba(214, 69, 43, 0.24)',
    },
    fonts: { display: F.serifDisplay, body: F.grotesk },
    backdrop: 'blueprint',
    shape: { radius: 14, border: 'soft' },
    motion: 'medium',
    layout: ['hero-split', 'how-it-plays', 'stat-band', 'gallery-device', 'privacy', 'cta'],
  },

  combo: {
    palette: {
      ink: '#2B2433',
      paper: '#FFFCF7',
      surface: '#F7F3EE',
      accent: '#C9B8E0',
      accentAlt: '#F4C2C2',
      accentText: '#8A6FB8',
      glow: 'rgba(201, 184, 224, 0.4)',
    },
    fonts: { display: F.rounded, body: F.inter },
    backdrop: 'soft-bubbles',
    shape: { radius: 20, border: 'organic' },
    motion: 'medium',
    layout: ['hero-split', 'how-it-plays', 'gallery-device', 'privacy', 'cta'],
  },

  randompix: {
    palette: {
      ink: '#2A1B22',
      paper: '#FDF3E2',
      surface: '#FFD7E1',
      accent: '#FA6781',
      accentAlt: '#FFC94D',
      accentText: '#D63E5C',
      glow: 'rgba(250, 103, 129, 0.34)',
    },
    fonts: { display: F.rounded, body: F.roundedBody },
    backdrop: 'soft-bubbles',
    shape: { radius: 22, border: 'organic' },
    motion: 'high',
    layout: ['hero-full', 'how-it-plays', 'stat-band', 'gallery-tilt', 'privacy', 'cta'],
  },

  graviwords: {
    palette: {
      ink: '#E8ECFF',
      paper: '#07070F',
      surface: '#12142B',
      accent: '#3B7BFF',
      accentAlt: '#FFD23B',
      glow: 'rgba(59, 123, 255, 0.34)',
    },
    fonts: { display: F.arcade, body: F.inter },
    backdrop: 'neon-grid',
    shape: { radius: 0, border: 'hard' },
    motion: 'high',
    layout: ['hero-full', 'how-it-plays', 'stat-band', 'gallery-tilt', 'privacy', 'cta'],
  },

  orbis: {
    palette: {
      ink: '#E8EEEA',
      paper: '#07101A',
      surface: '#1C2B40',
      accent: '#76D6A8',
      accentAlt: '#EBD08E',
      glow: 'rgba(118, 214, 168, 0.3)',
    },
    fonts: { display: F.grotesk, body: F.inter },
    backdrop: 'starfield',
    shape: { radius: 999, border: 'none' },
    motion: 'high',
    layout: ['hero-full', 'how-it-plays', 'stat-band', 'gallery-tilt', 'privacy', 'cta'],
  },

  meliz: {
    palette: {
      ink: '#33262B',
      paper: '#FFF8F0',
      surface: '#FFFFFF',
      accent: '#FFB5C5',
      accentAlt: '#0D9488',
      accentText: '#D96A85',
      glow: 'rgba(255, 181, 197, 0.4)',
    },
    fonts: { display: F.rounded, body: F.roundedBody },
    backdrop: 'soft-bubbles',
    shape: { radius: 24, border: 'organic' },
    motion: 'calm',
    layout: ['hero-split', 'how-it-plays', 'stat-band', 'gallery-device', 'privacy', 'cta'],
  },

  motfleche: {
    palette: {
      ink: '#2A2419',
      paper: '#F5EFE0',
      surface: '#FFFFFF',
      accent: '#C4A97D',
      accentAlt: '#8C3B2E',
      accentText: '#8A6E3C',
      glow: 'rgba(196, 169, 125, 0.3)',
    },
    fonts: { display: F.editorial, body: F.inter },
    backdrop: 'paper-ink',
    shape: { radius: 4, border: 'soft' },
    motion: 'calm',
    layout: ['hero-offset', 'rules', 'stat-band', 'gallery-stack', 'privacy', 'cta'],
  },

  shizuku: {
    palette: {
      ink: '#F2E7DC',
      paper: '#1A1614',
      surface: '#322C23',
      accent: '#C97B4A',
      accentAlt: '#7A9A7E',
      glow: 'rgba(201, 123, 74, 0.28)',
    },
    fonts: { display: F.serif, body: F.inter },
    backdrop: 'zen',
    shape: { radius: 16, border: 'none' },
    motion: 'calm',
    layout: ['hero-full', 'how-it-plays', 'features', 'gallery-device', 'privacy', 'cta'],
  },

  poddroid: {
    palette: {
      ink: '#ECE8F7',
      paper: '#0E0A1C',
      surface: '#1E1636',
      accent: '#7C5CD9',
      accentAlt: '#6FE2D2',
      glow: 'rgba(124, 92, 217, 0.34)',
    },
    fonts: { display: F.grotesk, body: F.inter },
    backdrop: 'waveform',
    shape: { radius: 18, border: 'soft' },
    motion: 'medium',
    layout: ['hero-split', 'features', 'stat-band', 'gallery-device', 'privacy', 'cta'],
  },

  ecopompe: {
    palette: {
      ink: '#15181D',
      paper: '#F2F7FC',
      surface: '#FFFFFF',
      accent: '#2E8BE0',
      accentAlt: '#4CC38A',
      glow: 'rgba(46, 139, 224, 0.28)',
    },
    fonts: { display: F.grotesk, body: F.mono },
    backdrop: 'road',
    shape: { radius: 14, border: 'soft' },
    motion: 'medium',
    layout: ['hero-split', 'features', 'stat-band', 'gallery-device', 'privacy', 'cta'],
  },
};

export function getTheme(slug: string): AppTheme {
  const theme = THEMES[slug];
  if (!theme) throw new Error(`Aucun univers défini pour « ${slug} » dans src/content/themes.ts`);
  return theme;
}
