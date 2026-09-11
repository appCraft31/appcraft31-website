import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/ding.html`.
 *
 * Écrits le 11 septembre 2026 d'après le code de `~/StudioProjects/ascenceur` :
 * les règles viennent mot pour mot des pages « Comment jouer » du jeu
 * (`lib/l10n/app_*.arb`, clés `howTo*`), les chiffres du catalogue (30 missions
 * dans `lib/missions/catalog.dart` et `hotel_catalog.dart`, 5 équipements à
 * 3 niveaux dans `lib/progress/modules.dart`, 3 prototypes). Le jeu est financé
 * par AdMob, sans achat qui retire la publicité : aucune phrase ne dit le
 * contraire. Langues : celles du jeu (fr, en, es, de) ; ja et ko retombent sur
 * l'anglais.
 */
const fr: AppCopy = {
  tagline: 'Jeu de gestion d’ascenseur · gratuit sur iPhone',

  headline: {
    lead: 'Tout le monde veut monter.',
    highlight: 'Personne ne veut attendre.',
  },

  intro:
    'Dans Ding!, vous prenez les commandes d’un ascenseur. Touchez un étage pour y envoyer la cabine : des passagers descendent, d’autres montent, et chaque arrêt compte. Regroupez les destinations, surveillez la patience de chacun et gardez de la place pour les valises et les cartons.',

  stats: [
    { value: '30', label: 'missions' },
    { value: '3', label: 'immeubles' },
    { value: '5', label: 'équipements, 3 niveaux chacun' },
    { value: '1', label: 'défi par jour' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Le principe',
      title: 'Un arrêt. Dix décisions.',
      items: [
        { title: 'Un étage, un arrêt', body: 'Touchez la ligne d’un niveau pour y envoyer la cabine. Elle traverse les autres sans s’arrêter.' },
        { title: 'Un seul arrêt suivant', body: 'Pendant un trajet, touchez un autre niveau : il s’affiche en pointillés. Le retoucher annule.' },
        { title: 'Sorties puis montées', body: 'Aux portes, on descend d’abord, puis les plus anciens montent tant qu’il reste de la place.' },
        { title: 'La patience se lit', body: 'L’arc autour d’une pastille est sa patience. Elle ne baisse qu’en attente. À zéro, la personne prend l’escalier.' },
        { title: 'Les arrêts coûtent cher', body: 'Chaque personne perd 5 points par seconde à bord, avec un minimum de 25 points à la dépose. Regroupez les destinations en évitant les détours !' },
        { title: 'Les chargements prennent la place', body: 'Une caisse et son propriétaire occupent trois places. S’ils ne rentrent pas, ils laissent passer les suivants.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Dans la cabine',
    },
    {
      id: 'features',
      kicker: 'Ce qui vous attend',
      title: 'Une carrière, un défi par jour, un atelier',
      items: [
        {
          title: 'Trente missions, trois immeubles',
          body: 'De la Résidence des Tilleuls au Grand Hôtel, en passant par les Bureaux Horizon : groupes à transporter, cartons encombrants, vagues annoncées et demandes facultatives avec prime. Chaque mission a son objectif et sa distinction.',
        },
        {
          title: 'Le défi du jour',
          body: 'Un nouveau défi court chaque jour. Bronze, argent ou or : jusqu’à trois tampons pour fabriquer trois prototypes — Porte-bagages, Volant à inertie et Sélecteur de destination.',
        },
        {
          title: 'L’Atelier',
          body: 'Cinq équipements à améliorer sur trois niveaux : Portes rapides, Cabine extensible, Tableau prévisionnel, Mode express et Interphone. Emportez-en deux par mission et choisissez la finition de votre cabine.',
        },
        {
          title: 'L’entraînement libre',
          body: 'Trois minutes, un score, aucune conséquence : de quoi battre votre record entre deux missions.',
        },
        {
          title: 'Le son des vrais ascenseurs',
          body: 'Le « ding » à chaque ouverture de porte, le moteur pendant les trajets, et une musique d’ascenseur différente pour chaque immeuble.',
        },
        {
          title: 'En cinq langues',
          body: 'Français, anglais, espagnol, allemand et italien, selon la langue de votre iPhone.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Votre progression reste sur votre iPhone',
      body: 'Pas de compte, pas de serveur de jeu : la carrière, l’Atelier et les défis sont enregistrés sur l’appareil. Seules la publicité, la mesure d’audience et les rapports de plantage communiquent. En Europe, l’écran de consentement vous laisse le choix dès le premier lancement, et les Réglages le rouvrent à tout moment.',
    },
  ],

  cta: {
    title: 'Sur l’App Store le 21 septembre',
    body: 'Ding! se télécharge gratuitement sur iPhone. Découvrez aussi nos autres jeux de logique.',
  },

  meta: {
    title: 'Ding! — le jeu de gestion d’ascenseur',
    description:
      'Un jeu de gestion d’ascenseur gratuit sur iPhone : 30 missions dans trois immeubles, un défi chaque jour et un atelier pour améliorer votre cabine. Regroupez les destinations, surveillez la patience, évitez les détours.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Elevator management game · free on iPhone',

  headline: {
    lead: 'Everyone wants to go up.',
    highlight: 'Nobody wants to wait.',
  },

  intro:
    'In Ding!, you run the elevator. Tap a floor to send the car there: some passengers get off, others get on, and every stop counts. Group destinations, watch everyone’s patience and save room for suitcases and boxes.',

  stats: [
    { value: '30', label: 'missions' },
    { value: '3', label: 'buildings' },
    { value: '5', label: 'pieces of gear, 3 levels each' },
    { value: '1', label: 'challenge a day' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How it plays',
      title: 'One stop. Ten decisions.',
      items: [
        { title: 'One floor, one stop', body: 'Tap a level’s row to send the car there. It passes the others without stopping.' },
        { title: 'Just one next stop', body: 'During a ride, tap another level: it shows as a dotted outline. Tap it again to cancel.' },
        { title: 'Off first, then on', body: 'At the doors, riders get off first, then whoever has waited longest gets on while there’s room.' },
        { title: 'Read the patience', body: 'The arc around a dot is its patience. It only drops while waiting. At zero, the person takes the stairs.' },
        { title: 'Stops are costly', body: 'Each person loses 5 points per second aboard, with at least 25 points at drop-off. Group destinations and avoid detours!' },
        { title: 'Cargo takes up room', body: 'A crate and its owner take three spots. If they don’t fit, they let the next ones go ahead.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Inside the car',
    },
    {
      id: 'features',
      kicker: 'What awaits you',
      title: 'A career, a daily challenge, a workshop',
      items: [
        {
          title: 'Thirty missions, three buildings',
          body: 'From Linden Court through Horizon Offices to the Grand Hotel: groups to move, bulky boxes, announced rushes and optional side jobs with a bonus. Every mission has its own goal and a badge to earn.',
        },
        {
          title: 'The Daily Challenge',
          body: 'A new short challenge every day. Bronze, silver or gold: up to three stamps to build three prototypes — Luggage Rack, Flywheel and Destination Selector.',
        },
        {
          title: 'The Workshop',
          body: 'Five pieces of gear to upgrade across three levels: Quick Doors, Expandable Car, Forecast Board, Express Mode and Intercom. Take two on each mission and pick your car’s finish.',
        },
        {
          title: 'Free Practice',
          body: 'Three minutes, one score, no pressure: enough to beat your best between two missions.',
        },
        {
          title: 'The sound of real elevators',
          body: 'The “ding” every time the doors open, the motor during each ride, and a different elevator tune for every building.',
        },
        {
          title: 'In five languages',
          body: 'French, English, Spanish, German and Italian, following your iPhone’s language.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Your progress stays on your iPhone',
      body: 'No account, no game server: your career, Workshop and challenges are saved on the device. Only advertising, analytics and crash reports communicate. In Europe, the consent form lets you choose from the first launch, and the Settings reopen it at any time.',
    },
  ],

  cta: {
    title: 'On the App Store on 21 September',
    body: 'Ding! is a free download for iPhone. Have a look at our other logic games too.',
  },

  meta: {
    title: 'Ding! — the elevator management game',
    description:
      'A free elevator management game for iPhone: 30 missions across three buildings, a new challenge every day and a workshop to upgrade your car. Group destinations, watch patience, avoid detours.',
  },

  chips: [],
};

const es: AppCopy = {
  tagline: 'Juego de gestión de ascensor · gratis en iPhone',

  headline: {
    lead: 'Todo el mundo quiere subir.',
    highlight: 'Nadie quiere esperar.',
  },

  intro:
    'En Ding!, tomas los mandos de un ascensor. Toca una planta para enviar la cabina: unos pasajeros bajan, otros suben y cada parada cuenta. Agrupa los destinos, vigila la paciencia de cada uno y deja sitio para maletas y cajas.',

  stats: [
    { value: '30', label: 'misiones' },
    { value: '3', label: 'edificios' },
    { value: '5', label: 'equipos, 3 niveles cada uno' },
    { value: '1', label: 'reto al día' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Cómo se juega',
      title: 'Una parada. Diez decisiones.',
      items: [
        { title: 'Una planta, una parada', body: 'Toca la fila de una planta para enviar allí la cabina. Pasa por las demás sin detenerse.' },
        { title: 'Una sola parada siguiente', body: 'Durante un trayecto, toca otra planta: aparece punteada. Tócala otra vez para anularla.' },
        { title: 'Primero salen, luego entran', body: 'En las puertas, primero se baja; luego suben los que más llevan esperando, mientras quede sitio.' },
        { title: 'La paciencia se ve', body: 'El arco que rodea cada círculo es su paciencia. Solo baja mientras espera. A cero, la persona se va por la escalera.' },
        { title: 'Las paradas salen caras', body: 'Cada persona pierde 5 puntos por segundo a bordo, con un mínimo de 25 puntos al bajar. ¡Agrupa los destinos y evita los rodeos!' },
        { title: 'Las cargas ocupan sitio', body: 'Un cajón y su dueño ocupan tres plazas. Si no caben, dejan pasar a los siguientes.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Dentro de la cabina',
    },
    {
      id: 'features',
      kicker: 'Lo que te espera',
      title: 'Una carrera, un reto al día, un taller',
      items: [
        {
          title: 'Treinta misiones, tres edificios',
          body: 'El Residencial Los Tilos, las Oficinas Horizonte y el Gran Hotel: grupos que transportar, cajas voluminosas, oleadas anunciadas y servicios opcionales con prima. Cada misión tiene su objetivo y una insignia que conseguir.',
        },
        {
          title: 'El reto diario',
          body: 'Un nuevo reto corto cada día. Bronce, plata u oro: hasta tres sellos para fabricar tres prototipos — Portaequipajes, Volante de inercia y Selector de destino.',
        },
        {
          title: 'El taller',
          body: 'Cinco equipos que mejorar en tres niveles: Puertas rápidas, Cabina extensible, Panel de previsión, Modo exprés e Interfono. Llévate dos en cada misión y elige el acabado de tu cabina.',
        },
        {
          title: 'El entrenamiento libre',
          body: 'Tres minutos, una puntuación, sin consecuencias: lo justo para superar tu récord entre dos misiones.',
        },
        {
          title: 'El sonido de los ascensores de verdad',
          body: 'El «ding» cada vez que se abren las puertas, el motor durante los trayectos y una música de ascensor distinta para cada edificio.',
        },
        {
          title: 'En cinco idiomas',
          body: 'Francés, inglés, español, alemán e italiano, según el idioma de tu iPhone.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacidad',
      title: 'Tu progreso se queda en tu iPhone',
      body: 'Sin cuenta ni servidor de juego: la carrera, el taller y los retos se guardan en el dispositivo. Solo la publicidad, la medición de uso y los informes de errores se comunican. En Europa, la pantalla de consentimiento te deja elegir desde el primer inicio, y los Ajustes la vuelven a abrir cuando quieras.',
    },
  ],

  cta: {
    title: 'En el App Store el 21 de septiembre',
    body: 'Ding! se descarga gratis en iPhone. Descubre también nuestros otros juegos de lógica.',
  },

  meta: {
    title: 'Ding! — el juego de gestión de ascensor',
    description:
      'Un juego de gestión de ascensor gratuito para iPhone: 30 misiones en tres edificios, un reto cada día y un taller para mejorar tu cabina. Agrupa los destinos, vigila la paciencia y evita los rodeos.',
  },

  chips: [],
};

const de: AppCopy = {
  tagline: 'Aufzug-Managementspiel · kostenlos fürs iPhone',

  headline: {
    lead: 'Alle wollen nach oben.',
    highlight: 'Keiner will warten.',
  },

  intro:
    'In Ding! steuerst du einen Aufzug. Tippe auf eine Etage, um die Kabine loszuschicken: Fahrgäste steigen aus, andere steigen ein, und jeder Halt zählt. Bündle die Ziele, behalte die Geduld aller im Blick und schaffe Platz für Koffer und Kartons.',

  stats: [
    { value: '30', label: 'Missionen' },
    { value: '3', label: 'Gebäude' },
    { value: '5', label: 'Ausrüstungsteile mit je 3 Stufen' },
    { value: '1', label: 'Herausforderung pro Tag' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'So wird gespielt',
      title: 'Ein Halt. Zehn Entscheidungen.',
      items: [
        { title: 'Eine Etage, ein Halt', body: 'Tipp auf eine Etage, um die Kabine dorthin zu schicken. Sie fährt ohne Halt an den anderen vorbei.' },
        { title: 'Nur ein nächster Halt', body: 'Tipp während der Fahrt auf eine andere Etage: Sie erscheint gestrichelt. Nochmal tippen hebt sie auf.' },
        { title: 'Erst aus-, dann einsteigen', body: 'An der Tür steigen erst alle aus, dann die am längsten Wartenden ein, solange Platz ist.' },
        { title: 'Geduld im Blick', body: 'Der Bogen um einen Punkt zeigt seine Geduld. Sie sinkt nur beim Warten. Bei null nimmt die Person die Treppe.' },
        { title: 'Halte kosten viel', body: 'Jede Person verliert pro Sekunde an Bord 5 Punkte, bringt beim Aussteigen aber mindestens 25. Bündle die Ziele und vermeide Umwege!' },
        { title: 'Ladung braucht Platz', body: 'Eine Kiste und ihr Besitzer belegen drei Plätze. Passen sie nicht rein, lassen sie die Nächsten vor.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'In der Kabine',
    },
    {
      id: 'features',
      kicker: 'Was dich erwartet',
      title: 'Eine Karriere, eine tägliche Herausforderung, eine Werkstatt',
      items: [
        {
          title: 'Dreißig Missionen, drei Gebäude',
          body: 'Lindenhof, Bürohaus Horizont und Grand Hotel: Gruppen, sperrige Kartons, angekündigter Andrang und Sonderwünsche mit Prämie. Jede Mission hat ihr eigenes Ziel und eine Auszeichnung, die du dir holen kannst.',
        },
        {
          title: 'Die tägliche Herausforderung',
          body: 'Jeden Tag eine neue, kurze Herausforderung. Bronze, Silber oder Gold: bis zu drei Stempel, um drei Prototypen zu bauen — Gepäckablage, Schwungrad und Zielwähler.',
        },
        {
          title: 'Die Werkstatt',
          body: 'Fünf Ausrüstungsteile mit je drei Stufen: Schnelltüren, XL-Kabine, Vorschautafel, Expressmodus und Sprechanlage. Nimm zwei davon auf jede Mission mit und wähle die Lackierung deiner Kabine.',
        },
        {
          title: 'Freies Training',
          body: 'Drei Minuten, eine Punktzahl, keine Folgen: genug, um zwischen zwei Missionen deinen Rekord zu knacken.',
        },
        {
          title: 'Der Klang echter Aufzüge',
          body: 'Das „Ding“ bei jedem Türöffnen, der Motor während der Fahrt und für jedes Gebäude eine eigene Aufzugsmusik.',
        },
        {
          title: 'In fünf Sprachen',
          body: 'Französisch, Englisch, Spanisch, Deutsch und Italienisch, je nach Sprache deines iPhones.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Datenschutz',
      title: 'Dein Fortschritt bleibt auf deinem iPhone',
      body: 'Kein Konto, kein Spielserver: Karriere, Werkstatt und Herausforderungen werden auf dem Gerät gespeichert. Nur die Werbung, die Nutzungsmessung und die Absturzberichte kommunizieren. In Europa lässt dir das Einwilligungsformular ab dem ersten Start die Wahl, und die Einstellungen öffnen es jederzeit wieder.',
    },
  ],

  cta: {
    title: 'Ab 21. September im App Store',
    body: 'Ding! gibt es kostenlos fürs iPhone. Entdecke auch unsere anderen Logikspiele.',
  },

  meta: {
    title: 'Ding! — das Aufzug-Managementspiel',
    description:
      'Ein kostenloses Aufzug-Managementspiel fürs iPhone: 30 Missionen in drei Gebäuden, jeden Tag eine neue Herausforderung und eine Werkstatt für deine Kabine. Bündle die Ziele, achte auf die Geduld, vermeide Umwege.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en, es, de };
