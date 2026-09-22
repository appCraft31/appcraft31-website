import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/glowmi.html`.
 *
 * Écrits le 22 septembre 2026 d'après le code de `~/StudioProjects/tamagotchi`
 * (version 2.1) : 24 espèces (`Sources/Models/Species.swift`), 6 âges
 * (`LifeStage.swift`), 5 personnalités, 3 formes adultes, 4 mini-jeux
 * (`Views/ActivitiesView.swift`), 7 événements saisonniers, 6 niveaux de lien
 * (`Bond.swift`), cycle de fidélité de 7 jours (`DailyReward.swift`).
 * La publicité n'est faite que de vidéos récompensées, lancées par le joueur
 * (`Services/AdManager.swift`) ; les achats intégrés sont des packs de pièces.
 * Le formulaire de consentement n'a pas d'accès depuis les Réglages : aucune
 * phrase ne promet de le rouvrir. Langues de l'app : fr, en, ja, ko, zh ; les
 * pages ja et ko retombent sur l'anglais.
 */
const fr: AppCopy = {
  tagline: 'Animal virtuel kawaii · gratuit sur iPhone et iPad',

  headline: {
    lead: 'Un œuf mystère,',
    highlight: 'un compagnon pour de vrai.',
  },

  intro:
    'Faites éclore votre œuf, donnez un nom au petit être qui en sort et prenez soin de lui jour après jour. Glowmi vit à son rythme, même application fermée : il a faim, sommeil, envie de jouer — et il grandit selon l’attention que vous lui portez.',

  stats: [
    { value: '24', label: 'espèces à faire éclore' },
    { value: '6', label: 'âges, de l’œuf à l’ancien' },
    { value: '4', label: 'mini-jeux' },
    { value: '7', label: 'événements saisonniers' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Au quotidien',
      title: 'Il compte sur vous',
      items: [
        { title: 'Une espèce surprise', body: 'L’œuf ne dit rien de ce qu’il contient : l’espèce se révèle à l’éclosion, parmi vingt-quatre.' },
        { title: 'Cinq besoins à suivre', body: 'Faim, joie, énergie, propreté et santé baissent avec le temps. Nourrissez-le, lavez-le, couchez-le, soignez-le s’il tombe malade.' },
        { title: 'Il grandit vraiment', body: 'Bébé, enfant, ado, adulte, ancien : chaque âge change son apparence. À l’âge adulte, la qualité de vos soins fixe sa forme — brillante, équilibrée ou grincheuse.' },
        { title: 'Un caractère à lui', body: 'Gourmand, joueur, dormeur, difficile ou équilibré : sa personnalité est tirée à la naissance et change ses besoins.' },
        { title: 'Le jour et la nuit', body: 'Le ciel de la maison suit l’heure qu’il est, de l’aube à la nuit, et votre compagnon a besoin de dormir.' },
        { title: 'Il réagit au toucher', body: 'Caressez-le, taquinez-le : il répond, et votre lien se renforce, de « Curieux » jusqu’à « Âmes sœurs ».' },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Dans la maison de Glowmi',
    },
    {
      id: 'features',
      kicker: 'Ce qui vous attend',
      title: 'Des jeux, une garde-robe, un album',
      items: [
        {
          title: 'Quatre mini-jeux',
          body: 'Séquence, Mémo des paires, Attrape-gourmandises et Tempo : de quoi le rendre heureux et gagner des pièces, avec un classement Game Center pour chacun.',
        },
        {
          title: 'La garde-robe',
          body: 'Tenues, objets tenus, décors et auras se combinent, et s’essaient sur votre compagnon avant l’achat.',
        },
        {
          title: 'Quêtes et fidélité',
          body: 'Des quêtes chaque jour, et une récompense qui grandit sur sept jours, jusqu’à la boîte mystère.',
        },
        {
          title: 'Les saisons',
          body: 'Hanami, été, Halloween, Noël, Saint-Valentin, White Day et Tsukimi passent dans la maison au fil de l’année.',
        },
        {
          title: 'L’album et la collection',
          body: 'Chaque espèce découverte rejoint la collection, et chaque compagnon laisse un souvenir dans l’album.',
        },
        {
          title: 'Widget et Studio photo',
          body: 'Nourrissez-le ou caressez-le depuis l’écran d’accueil, et composez des cartes à partager avec vos proches.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte, pas de publicité imposée',
      body: 'Glowmi se joue sans compte et hors ligne. Votre compagnon est enregistré sur votre appareil et, si iCloud est activé, synchronisé dans votre espace iCloud privé. Les seules publicités sont des vidéos bonus, qui ne se lancent que si vous le choisissez. L’application mesure son audience avec Firebase Analytics ; le détail figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Votre œuf attend',
    body: 'Glowmi se télécharge gratuitement sur l’App Store, pour iPhone et iPad.',
  },

  meta: {
    title: 'Glowmi — l’animal virtuel kawaii',
    description:
      'Un animal virtuel gratuit sur iPhone et iPad : faites éclore l’une des 24 espèces, prenez soin d’elle jour après jour, jouez à 4 mini-jeux et habillez votre compagnon.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Kawaii virtual pet · free on iPhone and iPad',

  headline: {
    lead: 'A mystery egg,',
    highlight: 'a companion for real.',
  },

  intro:
    'Hatch your egg, name the little creature inside and look after it day after day. Glowmi lives at its own pace, even when the app is closed: it gets hungry, sleepy, playful — and it grows according to the care you give it.',

  stats: [
    { value: '24', label: 'species to hatch' },
    { value: '6', label: 'life stages, from egg to elder' },
    { value: '4', label: 'mini-games' },
    { value: '7', label: 'seasonal events' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Day to day',
      title: 'It counts on you',
      items: [
        { title: 'A surprise species', body: 'The egg gives nothing away: the species is revealed when it hatches, out of twenty-four.' },
        { title: 'Five needs to watch', body: 'Hunger, joy, energy, cleanliness and health drop over time. Feed it, wash it, put it to bed, and nurse it when it falls ill.' },
        { title: 'It really grows up', body: 'Baby, child, teen, adult, elder: every stage changes how it looks. In adulthood, the quality of your care sets its form — radiant, balanced or grumpy.' },
        { title: 'A character of its own', body: 'Greedy, playful, sleepy, fussy or balanced: its personality is drawn at birth and changes what it needs.' },
        { title: 'Day and night', body: 'The sky over its home follows the time of day, from dawn to night, and your companion needs its sleep.' },
        { title: 'It responds to touch', body: 'Pet it, tease it: it reacts, and your bond grows, from “Curious” all the way to “Soulmates”.' },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Inside Glowmi’s home',
    },
    {
      id: 'features',
      kicker: 'What’s inside',
      title: 'Games, a wardrobe, an album',
      items: [
        {
          title: 'Four mini-games',
          body: 'Sequence, Pair Match, Treat Catch and Tempo: keep it happy and earn coins, with a Game Center leaderboard for each.',
        },
        {
          title: 'The wardrobe',
          body: 'Outfits, held items, backdrops and auras mix and match, and you can try them on your companion before buying.',
        },
        {
          title: 'Quests and loyalty',
          body: 'New quests every day, and a reward that grows over seven days, up to the mystery box.',
        },
        {
          title: 'The seasons',
          body: 'Hanami, summer, Halloween, Christmas, Valentine’s Day, White Day and Tsukimi come to visit through the year.',
        },
        {
          title: 'Album and collection',
          body: 'Every species you discover joins the collection, and every companion leaves a memory in the album.',
        },
        {
          title: 'Widget and photo studio',
          body: 'Feed or pet it from your Home Screen, and design cards to share with friends and family.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account, no forced ads',
      body: 'Glowmi works without an account and offline. Your companion is saved on your device and, if iCloud is on, synced to your private iCloud storage. The only ads are bonus videos, which only play if you choose to watch them. The app measures its audience with Firebase Analytics; the details are in the privacy policy.',
    },
  ],

  cta: {
    title: 'Your egg is waiting',
    body: 'Glowmi is a free download on the App Store, for iPhone and iPad.',
  },

  meta: {
    title: 'Glowmi — the kawaii virtual pet',
    description:
      'A free virtual pet for iPhone and iPad: hatch one of 24 species, look after it day after day, play 4 mini-games and dress up your companion.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
