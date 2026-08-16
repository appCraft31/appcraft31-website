import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/ecopompe.html`.
 * L'audit du projet `~/StudioProjects/Ecopompe` ne trouve aucune régie
 * publicitaire : l'argument « aucune publicité, aucun tracker » est exact.
 */
const fr: AppCopy = {
  tagline: 'Prix carburants · France entière · iOS et Android',

  headline: {
    lead: 'Le plein le moins cher,',
    highlight: 'sur votre route.',
  },

  intro:
    'EcoPompe compare en temps réel les prix des quelque 10 000 stations-service de France, à partir des données officielles. Vous roulez, l’app cherche.',

  stats: [
    { value: '~10 000', label: 'stations couvertes' },
    { value: '6', label: 'carburants suivis' },
    { value: '0', label: 'publicité' },
    { value: '0', label: 'traceur' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'Fonctionnalités',
      title: 'Trouver, comparer, y aller',
      items: [
        {
          title: 'Prix en temps réel',
          body: 'Les tarifs viennent des données officielles publiées par les stations elles-mêmes, avec l’heure de dernière mise à jour affichée.',
        },
        {
          title: 'La moins chère à proximité',
          body: 'Le meilleur prix autour de vous, distance comprise : une station à trois kilomètres de moins peut valoir mieux qu’un centime gagné.',
        },
        {
          title: 'Stations favorites',
          body: 'Épinglez celles de votre trajet quotidien et suivez leurs variations.',
        },
        {
          title: 'Historique des prix',
          body: 'La courbe des dernières semaines, pour savoir si le moment est bon.',
        },
        {
          title: 'Widget d’écran d’accueil',
          body: 'Le prix de votre station favorite, sans même ouvrir l’application.',
        },
        {
          title: 'Recherche intelligente',
          body: 'Par ville, par carburant, par enseigne — ou simplement autour de vous.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Aperçu',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Aucune publicité, aucun tracker',
      body: 'Aucune régie publicitaire n’est intégrée à l’application, et votre position sert uniquement à chercher les stations autour de vous — elle n’est envoyée à personne. Vos favoris restent sur l’appareil.',
    },
  ],

  cta: {
    title: 'Faites le plein moins cher',
    body: 'EcoPompe est disponible gratuitement sur l’App Store et sur Google Play.',
  },

  meta: {
    title: 'EcoPompe — prix des carburants en temps réel',
    description:
      'Comparez les prix des ~10 000 stations-service de France à partir des données officielles : la moins chère près de vous, vos favorites, l’historique des prix. Sans publicité ni traceur.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Fuel prices · all of France · iOS and Android',

  headline: {
    lead: 'The cheapest tank,',
    highlight: 'on your route.',
  },

  intro:
    'EcoPompe compares the live prices of France’s ~10,000 petrol stations, from official open data. You drive, the app searches.',

  stats: [
    { value: '~10,000', label: 'stations covered' },
    { value: '6', label: 'fuels tracked' },
    { value: '0', label: 'ads' },
    { value: '0', label: 'trackers' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'Features',
      title: 'Find it, compare it, go',
      items: [
        {
          title: 'Live prices',
          body: 'Prices come from the official data published by the stations themselves, with the last update time shown.',
        },
        {
          title: 'The cheapest nearby',
          body: 'The best price around you, distance included: a station three kilometres closer can beat a penny saved.',
        },
        {
          title: 'Favourite stations',
          body: 'Pin the ones on your daily route and follow their changes.',
        },
        {
          title: 'Price history',
          body: 'The curve of recent weeks, to know whether now is a good time.',
        },
        {
          title: 'Home screen widget',
          body: 'Your favourite station’s price, without even opening the app.',
        },
        {
          title: 'Smart search',
          body: 'By town, by fuel, by brand — or simply around you.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'A look inside',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No ads, no trackers',
      body: 'No ad network is built into the app, and your location is used only to look for stations around you — it is never sent to anyone. Your favourites stay on the device.',
    },
  ],

  cta: {
    title: 'Fill up for less',
    body: 'EcoPompe is available free on the App Store and on Google Play.',
  },

  meta: {
    title: 'EcoPompe — live fuel prices across France',
    description:
      'Compare the prices of France’s ~10,000 petrol stations from official data: the cheapest near you, your favourites, price history. No ads, no trackers.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
