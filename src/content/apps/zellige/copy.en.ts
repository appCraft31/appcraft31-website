import type { AppCopy } from '@/lib/types';

export const copy: AppCopy = {
  tagline: 'Tectonic & Suguru on glazed tiles',

  headline: {
    lead: 'Three rules, no arithmetic,',
    highlight: 'never any guessing.',
  },

  intro:
    "Known as Tectonic in France and Suguru elsewhere: a grid cut into irregular blocks, digits to place, and pure reasoning to get there. Zellige dresses it in glazed tiles — Delft blue, terracotta, sage, ochre — separated by grout that tells you everything about the layout. Every grid is generated on your phone and then verified: its solution is unique, and its difficulty is measured on the reasoning it actually demands, not on the number of empty cells.",

  stats: [
    { value: '5×5 → 12×12', label: 'grid sizes' },
    { value: '5', label: 'difficulty tiers' },
    { value: '1', label: 'daily grid, the same for everyone' },
    { value: '21', label: 'languages' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'The rules',
      title: 'Three rules, not one more',
      items: [
        {
          title: 'A block of N cells holds 1 to N',
          body: 'A three-cell block holds 1, 2 and 3, once each. A single-cell block is always a 1 — and that alone is a foothold for your reasoning.',
        },
        {
          title: 'Neighbours never share a digit',
          body: 'Diagonals included: every cell has up to eight neighbours, and none may repeat its digit. This is the rule that exists in neither Sudoku nor Binero, and the one that gives the game its bite.',
        },
        {
          title: 'The solution is unique',
          body: 'Every grid goes through the solver before it reaches you. There is never anything to guess: if you are stuck, a deduction is waiting somewhere.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Inside the game',
    },
    {
      id: 'features',
      kicker: 'What you play',
      title: 'From the first grid to the daily grid',
      items: [
        {
          title: 'A progression that follows you',
          body: 'Five 5×5 grids to find your feet, then 6×6, 7×8, 9×9, 10×10, and from level 60 onwards endless 12×12 grids. The share of given digits eases down gently, and adjusts to how you have been doing lately.',
        },
        {
          title: 'The daily grid',
          body: 'An expert 12×12, the same for everyone, every day. Finish it to extend your streak, and compare your time on the daily Game Center leaderboard.',
        },
        {
          title: 'Notes, undo, hints',
          body: 'Pencil in your hypotheses, undo a move without losing them, have conflicts pointed out — or switch that safety net off in the settings. A hint reveals one cell, paid with coins earned by playing or by watching a video.',
        },
        {
          title: 'Drawn, not generated',
          body: 'Every icon is hand-traced, every cell a tile set in its grout. The dark theme is not a negative of the light one: there, the grout becomes the shadow between the tiles. The whole grid reads with VoiceOver, and a mistake is never signalled by colour alone.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account, grids made on the spot',
      body: 'Zellige asks for no account and no sign-up: progress, coins, streak and settings stay on the device, and grids are generated locally. The game is free thanks to advertising (Google AdMob — an interstitial every two grids and a video you choose to watch), it sends anonymous usage measurements to Firebase Analytics, and Game Center is used only for leaderboards and achievements. Everything is spelled out in the privacy policy.',
    },
  ],

  cta: {
    title: 'Available on the App Store and Google Play',
    body: 'Zellige is out now. Have a look at our other logic games too, all playable offline.',
  },

  meta: {
    title: 'Zellige — Tectonic & Suguru grids with a single solution',
    description:
      'A Tectonic (Suguru) game on glazed tiles: grids generated on your device and verified to have a single solution, from 5×5 to 12×12, a daily grid, notes, undo and a dark theme. No account, in 21 languages.',
  },

  chips: [],
};
