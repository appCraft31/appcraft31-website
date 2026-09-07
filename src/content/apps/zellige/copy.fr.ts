import type { AppCopy } from '@/lib/types';

export const copy: AppCopy = {
  tagline: 'Tectonic & Suguru en carreaux de faïence',

  headline: {
    lead: 'Trois règles, aucun calcul,',
    highlight: 'jamais de hasard.',
  },

  intro:
    "On l'appelle Tectonic en France, Suguru ailleurs : une grille découpée en blocs irréguliers, des chiffres à poser, et le seul raisonnement pour y arriver. Zellige l'habille de carreaux de faïence — bleu de Delft, terre cuite, sauge, ocre — séparés par un joint qui dit tout du découpage. Chaque grille est engendrée sur votre téléphone puis vérifiée : sa solution est unique, et sa difficulté se mesure sur le raisonnement qu'elle exige, pas sur le nombre de cases vides.",

  stats: [
    { value: '5×5 → 12×12', label: 'tailles de grille' },
    { value: '5', label: 'paliers de difficulté' },
    { value: '1', label: 'grille du jour, la même pour tous' },
    { value: '21', label: 'langues' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Les règles',
      title: 'Trois règles, pas une de plus',
      items: [
        {
          title: 'Un bloc de N cases contient 1 à N',
          body: "Un bloc de trois cases porte 1, 2 et 3, une fois chacun. Un bloc d'une case vaut toujours 1 — et c'est déjà une prise pour le raisonnement.",
        },
        {
          title: 'Deux voisines ne portent jamais le même chiffre',
          body: "Diagonales comprises : chaque case a jusqu'à huit voisines, et aucune ne peut répéter son chiffre. C'est la règle qui n'existe ni au Sudoku ni au Binero, et celle qui fait tout le sel du jeu.",
        },
        {
          title: 'La solution est unique',
          body: "Chaque grille passe par le solveur avant de vous être proposée. Il n'y a jamais à deviner : si vous êtes bloqué, c'est qu'une déduction vous attend quelque part.",
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Dans le jeu',
    },
    {
      id: 'features',
      kicker: 'Ce qui se joue',
      title: 'De la première grille à la grille du jour',
      items: [
        {
          title: 'Une progression qui vous suit',
          body: "Cinq grilles 5×5 pour prendre la main, puis 6×6, 7×8, 9×9, 10×10, et à partir du niveau 60 des 12×12 sans fin. La proportion d'indices baisse doucement, et s'ajuste à votre réussite récente.",
        },
        {
          title: 'La grille du jour',
          body: "Une 12×12 experte, la même pour tout le monde, chaque jour. Terminez-la pour allonger votre série, et comparez votre temps sur le classement Game Center du jour.",
        },
        {
          title: 'Notes, annulation, indices',
          body: "Posez vos hypothèses en annotations, revenez sur un coup sans les perdre, faites-vous signaler les conflits — ou coupez ce filet dans les réglages. Un indice révèle une case contre des pièces gagnées en jouant ou en regardant une vidéo.",
        },
        {
          title: 'Dessiné, pas généré',
          body: "Chaque icône est un tracé fait main, chaque case un carreau posé dans son joint. Le thème sombre n'est pas un négatif du clair : le joint y devient l'ombre entre les carreaux. La grille entière se lit avec VoiceOver, et une erreur ne se signale jamais par la seule couleur.",
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte, des grilles fabriquées sur place',
      body: "Zellige ne demande ni compte ni inscription : progression, pièces, série et réglages restent sur l'appareil, et les grilles sont engendrées localement. Le jeu est gratuit grâce à la publicité (Google AdMob, un interstitiel toutes les deux grilles et une vidéo que vous choisissez de regarder), il remonte des mesures d'usage anonymes à Firebase Analytics, et Game Center ne sert qu'aux classements et aux succès. Tout est détaillé dans la politique de confidentialité.",
    },
  ],

  cta: {
    title: "Disponible sur l'App Store et Google Play",
    body: "Zellige se télécharge dès maintenant. Découvrez aussi nos autres jeux de logique, à jouer hors ligne.",
  },

  meta: {
    title: 'Zellige — Tectonic & Suguru, grilles à solution unique',
    description:
      "Jeu de Tectonic (Suguru) en carreaux de faïence : grilles engendrées sur votre appareil et vérifiées à solution unique, du 5×5 au 12×12, grille du jour, notes, annulation, thème sombre. Sans compte, en 21 langues.",
  },

  chips: [],
};
