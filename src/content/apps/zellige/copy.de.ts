import type { AppCopy } from '@/lib/types';

export const copy: AppCopy = {
  tagline: 'Tectonic & Suguru auf Keramikfliesen',

  headline: {
    lead: 'Drei Regeln, kein Rechnen,',
    highlight: 'niemals raten.',
  },

  intro:
    'In Frankreich heißt es Tectonic, anderswo Suguru: ein Gitter aus unregelmäßigen Blöcken, Ziffern, die gesetzt werden wollen, und allein das Nachdenken als Weg dorthin. Zellige kleidet das Ganze in glasierte Fliesen — Delfter Blau, Terrakotta, Salbei, Ocker —, getrennt von einer Fuge, die den Zuschnitt verrät. Jedes Gitter entsteht auf Ihrem Telefon und wird anschließend geprüft: Die Lösung ist eindeutig, und der Schwierigkeitsgrad bemisst sich an den nötigen Schlüssen, nicht an der Zahl der leeren Felder.',

  stats: [
    { value: '5×5 → 12×12', label: 'Gittergrößen' },
    { value: '5', label: 'Schwierigkeitsstufen' },
    { value: '1', label: 'Gitter des Tages, für alle dasselbe' },
    { value: '21', label: 'Sprachen' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Die Regeln',
      title: 'Drei Regeln, keine mehr',
      items: [
        {
          title: 'Ein Block aus N Feldern enthält 1 bis N',
          body: 'Ein Block aus drei Feldern trägt 1, 2 und 3, jede Ziffer einmal. Ein Block aus einem einzigen Feld ist immer eine 1 — und das allein ist schon ein Ansatzpunkt.',
        },
        {
          title: 'Zwei Nachbarfelder tragen nie dieselbe Ziffer',
          body: 'Diagonalen eingeschlossen: Jedes Feld hat bis zu acht Nachbarn, und keiner darf seine Ziffer wiederholen. Diese Regel kennt weder Sudoku noch Binärrätsel, und sie macht den Reiz des Spiels aus.',
        },
        {
          title: 'Die Lösung ist eindeutig',
          body: 'Jedes Gitter läuft durch den Löser, bevor es zu Ihnen kommt. Geraten wird nie: Wenn Sie feststecken, wartet irgendwo ein Schluss auf Sie.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Im Spiel',
    },
    {
      id: 'features',
      kicker: 'Was gespielt wird',
      title: 'Vom ersten Gitter bis zum Gitter des Tages',
      items: [
        {
          title: 'Ein Fortschritt, der Ihnen folgt',
          body: 'Fünf 5×5-Gitter zum Warmwerden, dann 6×6, 7×8, 9×9, 10×10 — und ab Stufe 60 endlos 12×12. Der Anteil der Hinweise sinkt langsam und richtet sich nach Ihren jüngsten Erfolgen.',
        },
        {
          title: 'Das Gitter des Tages',
          body: 'Ein 12×12 für Fortgeschrittene, jeden Tag, weltweit dasselbe. Lösen Sie es, um Ihre Serie zu verlängern, und vergleichen Sie Ihre Zeit in der Game-Center-Rangliste des Tages.',
        },
        {
          title: 'Notizen, Rückgängig, Hinweise',
          body: 'Halten Sie Annahmen als Notiz fest, nehmen Sie einen Zug zurück, ohne sie zu verlieren, lassen Sie sich Konflikte melden — oder schalten Sie dieses Netz in den Einstellungen ab. Ein Hinweis deckt ein Feld auf, gegen Münzen, die Sie im Spiel oder über ein Video verdienen.',
        },
        {
          title: 'Gezeichnet, nicht generiert',
          body: 'Jedes Symbol ist ein Strich von Hand, jedes Feld eine in ihre Fuge gesetzte Fliese. Das dunkle Thema ist kein Negativ des hellen: Dort wird die Fuge zum Schatten zwischen den Fliesen. Das ganze Gitter lässt sich mit VoiceOver lesen, und ein Fehler wird nie allein über die Farbe gemeldet.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Datenschutz',
      title: 'Ohne Konto, mit Gittern, die vor Ort entstehen',
      body: 'Zellige verlangt weder Konto noch Anmeldung: Fortschritt, Münzen, Serie und Einstellungen bleiben auf dem Gerät, und die Gitter entstehen lokal. Kostenlos ist das Spiel dank Werbung (Google AdMob, eine bildschirmfüllende Anzeige alle zwei Gitter und ein Video, das Sie selbst wählen). Anonyme Nutzungsdaten gehen an Firebase Analytics, und Game Center dient allein den Ranglisten und Erfolgen. Alles Weitere steht in der Datenschutzerklärung.',
    },
  ],

  cta: {
    title: 'Im App Store und bei Google Play erhältlich',
    body: 'Zellige lässt sich ab sofort laden. Schauen Sie sich auch unsere anderen Logikspiele an — offline spielbar.',
  },

  meta: {
    title: 'Zellige — Tectonic & Suguru mit eindeutiger Lösung',
    description:
      'Tectonic-Rätsel (Suguru) auf Keramikfliesen: Gitter, die auf Ihrem Gerät entstehen und auf eindeutige Lösung geprüft werden, von 5×5 bis 12×12, Gitter des Tages, Notizen, Rückgängig, dunkles Thema. Ohne Konto, in 21 Sprachen.',
  },

  chips: [],
};
