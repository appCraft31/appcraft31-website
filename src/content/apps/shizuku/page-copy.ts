import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/shizuku.html`, qui servait surtout de
 * page d'assistance trilingue (japonais, anglais, français). Le japonais est
 * conservé : c'est la langue du public visé par l'app.
 */
const fr: AppCopy = {
  tagline: 'Minuteur café filtre · Pour Over · iPhone et Apple Watch',

  headline: {
    lead: 'Les mains sur la verseuse,',
    highlight: 'pas sur l’écran.',
  },

  intro:
    'Le minuteur mains libres pour réussir votre café filtre. Suivez chaque étape de versement au rythme prévu, pilotez à la voix ou depuis votre Apple Watch, et ajustez vos recettes grâce au calculateur de ratio — sans jamais toucher un écran mouillé.',

  stats: [
    { value: '0', label: 'geste nécessaire' },
    { value: '3', label: 'commandes vocales' },
    { value: '2', label: 'appareils synchronisés' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'À l’usage',
      title: 'Un café se prépare à deux mains',
      items: [
        {
          title: 'Commandes vocales',
          body: 'Sur l’écran de brassage, activez le micro et dites « suivant », « pause » ou « reprendre ».',
        },
        {
          title: 'Mains libres',
          body: 'Les étapes avancent automatiquement, sans toucher l’écran.',
        },
        {
          title: 'Apple Watch',
          body: 'Le brassage se synchronise entre iPhone et Watch, pour piloter au poignet.',
        },
        {
          title: 'Calculateur de ratio',
          body: 'Changez la dose de café : les volumes d’eau de chaque étape se réajustent d’eux-mêmes.',
        },
        {
          title: 'Recettes personnalisées',
          body: 'Partez d’une recette existante ou construisez la vôtre, étape par étape.',
        },
        {
          title: 'Minuteur par étape',
          body: 'Chaque versement a sa durée et son volume, annoncés avant de commencer.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Vos recettes vous appartiennent',
      body: 'Vos recettes et vos réglages restent sur vos appareils. Le détail figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Le prochain café sera meilleur',
    body: 'Shizuku est disponible sur l’App Store, pour iPhone et Apple Watch.',
  },

  meta: {
    title: 'Shizuku — minuteur mains libres pour café filtre',
    description:
      'Le minuteur pour réussir votre café filtre : étapes de versement chronométrées, commandes vocales, pilotage depuis l’Apple Watch et calculateur de ratio.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Pour over timer · iPhone and Apple Watch',

  headline: {
    lead: 'Hands on the kettle,',
    highlight: 'not on the screen.',
  },

  intro:
    'The hands-free timer for a better pour over. Follow each pour at the intended pace, control it by voice or from your Apple Watch, and rescale your recipes with the ratio calculator — without ever touching a wet screen.',

  stats: [
    { value: '0', label: 'gestures needed' },
    { value: '3', label: 'voice commands' },
    { value: '2', label: 'synced devices' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'In use',
      title: 'Coffee takes two hands',
      items: [
        {
          title: 'Voice control',
          body: 'On the brew screen, enable the mic and say “next”, “pause” or “resume”.',
        },
        {
          title: 'Hands-free',
          body: 'Steps advance automatically — no need to touch a wet screen.',
        },
        {
          title: 'Apple Watch',
          body: 'Brews sync between iPhone and Watch so you can control from your wrist.',
        },
        {
          title: 'Ratio calculator',
          body: 'Change the dose and every step’s water volume rescales itself.',
        },
        {
          title: 'Custom recipes',
          body: 'Start from an existing recipe or build your own, step by step.',
        },
        {
          title: 'Per-step timer',
          body: 'Every pour has its own duration and volume, announced before you start.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Your recipes are yours',
      body: 'Your recipes and settings stay on your devices. The details are in the privacy policy.',
    },
  ],

  cta: {
    title: 'The next cup will be better',
    body: 'Shizuku is available on the App Store, for iPhone and Apple Watch.',
  },

  meta: {
    title: 'Shizuku — hands-free pour over coffee timer',
    description:
      'The timer for a better pour over: timed pouring steps, voice control, Apple Watch playback control and a ratio calculator.',
  },

  chips: [],
};

/** 日本語 — Shizuku vise d'abord le public japonais. */
const ja: AppCopy = {
  tagline: 'ハンドドリップ・タイマー · iPhone と Apple Watch',

  headline: {
    lead: '手はケトルに、',
    highlight: '画面に触れずに。',
  },

  intro:
    'ハンドドリップを成功させるためのハンズフリー・タイマーです。各ステップは自動で進み、声や Apple Watch から操作できます。比率計算機で豆の量を変えると、注湯量が自動で調整されます。',

  stats: [
    { value: '0', label: '必要な操作' },
    { value: '3', label: '音声コマンド' },
    { value: '2', label: '同期する端末' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: '使い方',
      title: 'コーヒーは両手で淹れるもの',
      items: [
        {
          title: '音声操作',
          body: '抽出画面でマイクをオンにし、「次」「一時停止」「再開」と話しかけてください。',
        },
        { title: 'ハンズフリー', body: '各ステップは自動で進みます。画面に触れる必要はありません。' },
        {
          title: 'Apple Watch',
          body: 'iPhone と Watch で抽出を同期し、手元で操作できます。',
        },
        {
          title: '比率計算機',
          body: '豆の量を変えると、各ステップの注湯量が自動的に調整されます。',
        },
        { title: 'レシピ作成', body: '既存のレシピから始めても、自分のレシピを作ってもかまいません。' },
        { title: 'ステップ別タイマー', body: '各注湯の時間と湯量は、始める前に表示されます。' },
      ],
    },
    {
      id: 'privacy',
      kicker: 'プライバシー',
      title: 'レシピはあなたのものです',
      body: 'レシピと設定は端末内に保存されます。詳細はプライバシーポリシーをご覧ください。',
    },
  ],

  cta: {
    title: '次の一杯は、もっとおいしく',
    body: 'Shizuku は App Store で配信中です（iPhone・Apple Watch 対応）。',
  },

  meta: {
    title: 'Shizuku 雫 — ハンズフリーのハンドドリップ・タイマー',
    description:
      'ハンドドリップのためのタイマー：ステップ別の注湯時間、音声操作、Apple Watch からの操作、比率計算機。',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en, ja };
