/**
 * Libellés du jeu, en français et anglais uniquement — les banques de mots
 * n'existent que dans ces deux langues (le js/i18n.js du site en gère six,
 * mais les brancher ici afficherait une interface traduite sur des grilles
 * anglaises).
 */

const STRINGS = {
  fr: {
    'menu.daily': 'Défi du jour',
    'menu.daily_sub': 'Une grille, la même pour tout le monde.',
    'menu.daily_done': 'Terminé pour aujourd’hui ! Revenez demain.',
    'menu.daily_replay': 'Rejouer la grille du jour',
    'menu.streak': 'Série : {n} jour(s)',
    'menu.free': 'Partie libre',
    'menu.theme': 'Thème',
    'menu.difficulty': 'Difficulté',
    'menu.play': 'Jouer',
    'menu.scores': 'Meilleurs scores',
    'menu.no_scores': 'Aucun score pour l’instant. À vous de jouer !',
    'game.words': 'Mots à trouver',
    'game.hint': 'Indice',
    'game.hints_left': '{n} restant(s)',
    'game.pause': 'Pause',
    'game.resume': 'Reprendre',
    'game.paused': 'Partie en pause',
    'game.quit': 'Menu',
    'game.loading': 'Génération de la grille…',
    'victory.title': 'Bravo !',
    'victory.time': 'Temps',
    'victory.score': 'Score',
    'victory.streak': 'Série',
    'victory.replay': 'Rejouer',
    'victory.share': 'Partager',
    'victory.copied': 'Résultat copié !',
    'victory.menu': 'Menu',
    'cta.title': 'Envie d’aller plus loin ?',
    'cta.sub': 'L’app propose le mode histoire, 270 niveaux, les statistiques et les succès.',
    'diff.easy': 'Facile',
    'diff.medium': 'Moyen',
    'diff.hard': 'Difficile',
    'diff.easy_sub': '8×8 · 6 mots',
    'diff.medium_sub': '12×12 · 10 mots',
    'diff.hard_sub': '15×15 · 14 mots',
    'theme.animals': 'Animaux',
    'theme.fruits': 'Fruits',
    'theme.countries': 'Pays',
    'theme.sports': 'Sports',
    'theme.colors': 'Couleurs',
    'theme.jobs': 'Métiers',
    'theme.space': 'Espace',
    'theme.music': 'Musique',
    'theme.transport': 'Transport',
    'share.text': 'Mêliz — {date} · ⏱ {time} · {words} mots · {points} pts',
    'back.site': 'Retour au site',
    'seo.h1': 'Mots mêlés en ligne',
    'seo.intro': 'Mêliz est un jeu de mots mêlés gratuit — aussi appelé mots cachés — qui se joue en ligne, directement dans votre navigateur : pas de téléchargement, pas d’inscription. Relevez le défi du jour ou composez votre partie parmi neuf thèmes et trois niveaux de difficulté.',
    'seo.how_title': 'Comment jouer aux mots mêlés',
    'seo.how_body': 'Chaque grille cache une liste de mots à retrouver. Faites glisser le doigt ou la souris de la première à la dernière lettre pour valider un mot. Les mots se lisent horizontalement, verticalement et en diagonale — et dans les deux sens dès le niveau moyen. Le chronomètre tourne : plus vous êtes rapide, plus le score est élevé.',
    'seo.themes_title': 'Neuf thèmes de grilles',
    'seo.themes_body': 'Animaux, fruits, pays, sports, couleurs, métiers, espace, musique et transport : chaque thème puise dans sa propre liste de mots, en français comme en anglais. Le défi du jour propose à tout le monde la même grille, renouvelée chaque jour à minuit.',
    'seo.faq_title': 'Questions fréquentes',
    'seo.q1': 'Le jeu est-il gratuit ?',
    'seo.a1': 'Oui, entièrement gratuit et sans inscription. Aucune donnée n’est envoyée à un serveur : vos scores restent dans votre navigateur.',
    'seo.q2': 'Faut-il télécharger quelque chose ?',
    'seo.a2': 'Non. La partie se lance directement dans le navigateur, sur ordinateur, tablette ou téléphone.',
    'seo.q3': 'Qu’est-ce que le défi du jour ?',
    'seo.a3': 'Une grille unique, identique pour tous les joueurs, renouvelée chaque jour. Terminez-la plusieurs jours d’affilée pour faire grimper votre série.',
    'seo.q4': 'Puis-je jouer hors connexion ?',
    'seo.a4': 'La version web nécessite une connexion pour charger la page. Les applications iOS et Android fonctionnent hors ligne et ajoutent le mode histoire, les statistiques et les succès.',
    'seo.more': 'En savoir plus sur l’application Mêliz',
  },
  en: {
    'menu.daily': 'Daily challenge',
    'menu.daily_sub': 'One grid, the same for everyone.',
    'menu.daily_done': 'Done for today! Come back tomorrow.',
    'menu.daily_replay': 'Replay today’s grid',
    'menu.streak': 'Streak: {n} day(s)',
    'menu.free': 'Free play',
    'menu.theme': 'Theme',
    'menu.difficulty': 'Difficulty',
    'menu.play': 'Play',
    'menu.scores': 'Best scores',
    'menu.no_scores': 'No scores yet. Your turn!',
    'game.words': 'Words to find',
    'game.hint': 'Hint',
    'game.hints_left': '{n} left',
    'game.pause': 'Pause',
    'game.resume': 'Resume',
    'game.paused': 'Game paused',
    'game.quit': 'Menu',
    'game.loading': 'Building the grid…',
    'victory.title': 'Well done!',
    'victory.time': 'Time',
    'victory.score': 'Score',
    'victory.streak': 'Streak',
    'victory.replay': 'Play again',
    'victory.share': 'Share',
    'victory.copied': 'Result copied!',
    'victory.menu': 'Menu',
    'cta.title': 'Want more?',
    'cta.sub': 'The app adds story mode, 270 levels, stats and achievements.',
    'diff.easy': 'Easy',
    'diff.medium': 'Medium',
    'diff.hard': 'Hard',
    'diff.easy_sub': '8×8 · 6 words',
    'diff.medium_sub': '12×12 · 10 words',
    'diff.hard_sub': '15×15 · 14 words',
    'theme.animals': 'Animals',
    'theme.fruits': 'Fruits',
    'theme.countries': 'Countries',
    'theme.sports': 'Sports',
    'theme.colors': 'Colors',
    'theme.jobs': 'Jobs',
    'theme.space': 'Space',
    'theme.music': 'Music',
    'theme.transport': 'Transport',
    'share.text': 'Mêliz — {date} · ⏱ {time} · {words} words · {points} pts',
    'back.site': 'Back to the site',
    'seo.h1': 'Online word search',
    'seo.intro': 'Mêliz is a free word search game — also known as hidden words — played online, right in your browser: no download, no sign-up. Take on the daily challenge or build your own game from nine themes and three difficulty levels.',
    'seo.how_title': 'How to play word search',
    'seo.how_body': 'Every grid hides a list of words. Drag your finger or mouse from the first to the last letter to confirm a word. Words read horizontally, vertically and diagonally — and backwards from the medium level up. The clock is running: the faster you are, the higher your score.',
    'seo.themes_title': 'Nine grid themes',
    'seo.themes_body': 'Animals, fruits, countries, sports, colors, jobs, space, music and transport: each theme draws on its own word list, in French and in English. The daily challenge gives everyone the same grid, renewed every day at midnight.',
    'seo.faq_title': 'Frequently asked questions',
    'seo.q1': 'Is the game free?',
    'seo.a1': 'Yes, completely free and sign-up free. Nothing is sent to a server: your scores stay in your browser.',
    'seo.q2': 'Do I need to download anything?',
    'seo.a2': 'No. The game starts straight in your browser, on desktop, tablet or phone.',
    'seo.q3': 'What is the daily challenge?',
    'seo.a3': 'A single grid, the same for every player, renewed each day. Finish it several days in a row to build your streak.',
    'seo.q4': 'Can I play offline?',
    'seo.a4': 'The web version needs a connection to load the page. The iOS and Android apps work offline and add story mode, statistics and achievements.',
    'seo.more': 'Learn more about the Mêliz app',
  },
};

/** `?lang=` sinon la langue du navigateur, avec repli sur l'anglais. */
export function detectLanguage() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param && STRINGS[param]) return param;
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return STRINGS[nav] ? nav : 'en';
}

export function createTranslator(lang) {
  const table = STRINGS[lang] || STRINGS.en;
  return function t(key, params) {
    let value = table[key] || STRINGS.en[key] || key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        value = value.replace(`{${k}}`, v);
      }
    }
    return value;
  };
}
