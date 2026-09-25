/**
 * Faits de confidentialité des 20 produits.
 *
 * Sources, dans cet ordre : le code de l'app (`~/StudioProjects/…`, résumé par
 * `npm run audit:sdk` dans `sdk-audit.json`), puis la politique de l'ancien
 * site quand elle est confirmée par le code. En cas de désaccord, c'est le code
 * qui gagne — deux divergences ont été trouvées et corrigées ainsi :
 *
 * - **Glyphe** : l'ancienne politique affirmait « nous ne diffusons aucune
 *   publicité » ; `MonetizationConfig.swift` déclare des unités AdMob de
 *   production et un achat « Glyphe+ » qui retire la pub.
 * - **Le Sudoku du jour** : l'ancienne politique ne mentionnait pas la
 *   publicité ; `pubspec.yaml` dépend de `google_mobile_ads` et
 *   `in_app_purchase`, et `lib/state/ads.dart` s'en sert.
 */

import type { PrivacyFacts } from '@/lib/privacy-types';

/** Date de la révision qui a suivi l'audit. */
const REVIEWED = '2026-08-16';

/** Cas le plus courant du catalogue : un jeu gratuit financé par AdMob. */
const adFunded = (removedBy?: string): PrivacyFacts['ads'] => ({
  network: 'Google AdMob',
  formats: ['banner', 'interstitial', 'rewarded'],
  ump: true,
  att: true,
  removedBy,
});

export const PRIVACY_FACTS: Record<string, PrivacyFacts> = {
  // Elastic Hero — lu dans /Volumes/Appcraft/MAQUETTES/Elastic_Hero le
  // 25 septembre 2026 : `lib/game/ads/*` (AdMob 9.x, interstitiel et vidéo
  // récompensée ; UMP puis ATT, `showPrivacyOptionsForm` derrière le bouton
  // « Confidentialité » des Réglages quand UMP l'exige ; unités de test hors
  // release ; aucun `maxAdContentRating` ni `tagForChildDirectedTreatment`),
  // `lib/game/analytics/game_analytics.dart` (Firebase Analytics, actif dès le
  // lancement, consentements publicitaires à `false` ; variante iOS sans IDFA,
  // collecte de l'AAID coupée dans l'AndroidManifest), `lib/game/online/*` et
  // `backend/ugs/*.js` (Unity Gaming Services : joueur anonyme, pseudo filtré
  // côté serveur, score + hauteur + durée pour valider), `shared_preferences`
  // pour tout le reste, `in_app_review` pour la demande de note. Aucun achat
  // intégré. iPhone, iPad et Android.
  elastichero: {
    platforms: ['iOS', 'iPadOS', 'Android'],
    localData: [
      {
        fr: 'meilleur score et meilleure hauteur',
        en: 'best score and best height',
        ja: 'ベストスコアと最高到達点',
        ko: '최고 점수와 최고 높이',
        es: 'mejor puntuación y mayor altura',
        de: 'Bestpunktzahl und größte Höhe',
      },
      {
        fr: 'bonbons, objets achetés et objets équipés dans la boutique',
        en: 'candies, items bought and items equipped in the shop',
        ja: 'キャンディ、ショップで買ったアイテムと装備中のアイテム',
        ko: '사탕, 상점에서 산 아이템과 장착한 아이템',
        es: 'caramelos, objetos comprados y objetos equipados en la tienda',
        de: 'Bonbons, gekaufte und ausgerüstete Shop-Artikel',
      },
      {
        fr: 'progression des défis',
        en: 'challenge progress',
        ja: 'チャレンジの進行状況',
        ko: '도전 진행 상황',
        es: 'progreso de los retos',
        de: 'Fortschritt der Herausforderungen',
      },
      {
        fr: 'réglages (musique, sons, vibrations)',
        en: 'settings (music, sounds, vibrations)',
        ja: '設定（音楽、効果音、振動）',
        ko: '설정(음악, 효과음, 진동)',
        es: 'ajustes (música, sonidos, vibraciones)',
        de: 'Einstellungen (Musik, Töne, Vibrationen)',
      },
      {
        fr: 'compteurs qui espacent les publicités et la demande de note (parties jouées, temps de jeu, date du dernier affichage)',
        en: 'counters that space out ads and the rating request (runs played, play time, date last shown)',
        ja: '広告と評価依頼の間隔を空けるためのカウンター（プレイ回数、プレイ時間、最後に表示した日時）',
        ko: '광고와 평가 요청의 간격을 두기 위한 카운터(플레이 횟수, 플레이 시간, 마지막 표시 시각)',
        es: 'contadores que espacian los anuncios y la solicitud de valoración (partidas jugadas, tiempo de juego, fecha de la última vez)',
        de: 'Zähler, die Werbung und Bewertungsanfrage zeitlich verteilen (gespielte Runden, Spielzeit, Zeitpunkt der letzten Anzeige)',
      },
    ],
    ads: {
      network: 'Google AdMob',
      formats: ['interstitial', 'rewarded'],
      ump: true,
      att: true,
      familyContent: false,
    },
    purchases: [],
    analytics: {
      vendors: ['Firebase Analytics'],
      optOut: false,
      // Identifiant d'instance de l'app : pseudonyme, pas anonyme.
      anonymous: false,
      purpose: {
        fr: "comprendre comment le jeu est joué et l'améliorer : écrans consultés (accueil, partie, pause, fin de partie, boutique, classement, réglages), événements de jeu (début et fin de partie avec score, hauteur, durée et cause de la chute, défis réussis, bonus, bonbons gagnés et dépensés, objets achetés avec des bonbons, publicités affichées, consultation du classement), ainsi que les données automatiques de Firebase : identifiant d'instance de l'application, modèle et système de l'appareil, version de l'app, pays, langue et sessions. Aucun identifiant publicitaire (IDFA sur iOS, identifiant publicitaire Android) n'est collecté par cet outil, ces données ne servent pas à personnaliser la publicité ni à vous suivre d'une application à l'autre, et leur durée de conservation est celle définie par défaut par Firebase",
        en: 'understand how the game is played and improve it: screens viewed (home, game, pause, game over, shop, leaderboard, settings), game events (run start and end with score, height, duration and cause of the fall, challenges completed, power-ups, candies earned and spent, items bought with candies, ads shown, leaderboard views), plus Firebase’s automatic data: app instance identifier, device model and operating system, app version, country, language and sessions. No advertising identifier (IDFA on iOS, Android advertising ID) is collected by this tool, the data is not used to personalise ads or to track you across apps, and it is kept for Firebase’s default retention period',
        ja: 'ゲームの遊ばれ方を理解して改善するため：表示された画面（ホーム、プレイ、ポーズ、ゲームオーバー、ショップ、ランキング、設定）、ゲーム内のイベント（スコア・高さ・時間・落下の原因を含むプレイの開始と終了、達成したチャレンジ、パワーアップ、獲得・使用したキャンディ、キャンディで買ったアイテム、表示された広告、ランキングの閲覧）、そしてFirebaseが自動で集めるデータ（アプリのインスタンスID、端末の機種とOS、アプリのバージョン、国、言語、セッション）です。このツールは広告ID（iOSのIDFA、Androidの広告ID）を収集せず、データは広告のパーソナライズやアプリをまたいだ追跡には使われません。保存期間はFirebaseの既定の設定に従います',
        ko: '게임이 어떻게 플레이되는지 이해하고 개선하기 위해: 본 화면(홈, 게임, 일시정지, 게임 오버, 상점, 순위표, 설정), 게임 이벤트(점수·높이·시간·추락 원인이 포함된 판의 시작과 끝, 완료한 도전, 파워업, 얻고 쓴 사탕, 사탕으로 산 아이템, 표시된 광고, 순위표 조회), 그리고 Firebase가 자동으로 수집하는 데이터(앱 인스턴스 식별자, 기기 모델과 운영체제, 앱 버전, 국가, 언어, 세션)입니다. 이 도구는 광고 식별자(iOS의 IDFA, Android 광고 ID)를 수집하지 않으며, 데이터는 광고 맞춤화나 앱 간 추적에 사용되지 않고, Firebase의 기본 보존 기간 동안 보관됩니다',
        es: 'entender cómo se juega y mejorar el juego: pantallas vistas (inicio, partida, pausa, fin de partida, tienda, clasificación, ajustes), eventos de juego (inicio y fin de partida con puntuación, altura, duración y causa de la caída, retos superados, potenciadores, caramelos ganados y gastados, objetos comprados con caramelos, anuncios mostrados, consultas de la clasificación), además de los datos automáticos de Firebase: identificador de instancia de la app, modelo y sistema del dispositivo, versión de la app, país, idioma y sesiones. Esta herramienta no recoge ningún identificador publicitario (IDFA en iOS, ID de publicidad de Android), los datos no se usan para personalizar la publicidad ni para seguirte de una app a otra, y se conservan durante el plazo predeterminado de Firebase',
        de: 'zu verstehen, wie das Spiel gespielt wird, und es zu verbessern: aufgerufene Bildschirme (Start, Spiel, Pause, Rundenende, Shop, Bestenliste, Einstellungen), Spielereignisse (Beginn und Ende einer Runde mit Punktzahl, Höhe, Dauer und Absturzursache, geschaffte Herausforderungen, Power-ups, verdiente und ausgegebene Bonbons, mit Bonbons gekaufte Artikel, angezeigte Werbung, Aufrufe der Bestenliste) sowie die automatischen Daten von Firebase: App-Instanz-ID, Gerätemodell und Betriebssystem, App-Version, Land, Sprache und Sitzungen. Dieses Tool erfasst keine Werbe-ID (IDFA unter iOS, Android-Werbe-ID), die Daten dienen weder der Personalisierung von Werbung noch der app-übergreifenden Verfolgung und werden für die Standard-Aufbewahrungsdauer von Firebase gespeichert',
      },
    },
    network: {
      purpose: {
        fr: "le chargement des publicités et de leur écran de consentement (Google), l'envoi des statistiques d'usage à Firebase (Google) et les classements en ligne (Unity Gaming Services). Aucun autre serveur n'est contacté. Les parties se jouent hors ligne : sans connexion, seul le classement est indisponible, et le meilleur score non envoyé est gardé pour plus tard",
        en: 'loading ads and their consent form (Google), sending usage statistics to Firebase (Google) and the online leaderboards (Unity Gaming Services). No other server is contacted. Runs can be played offline: without a connection only the leaderboard is unavailable, and the best unsent score is kept for later',
        ja: '広告とその同意画面の読み込み（Google）、Firebase（Google）への利用統計の送信、オンラインランキング（Unity Gaming Services）。それ以外のサーバーには接続しません。プレイはオフラインでもでき、接続がないときはランキングだけが使えず、送信できなかったベストスコアは後で送るために保存されます',
        ko: '광고와 동의 화면 불러오기(Google), Firebase(Google)로 사용 통계 전송, 온라인 순위표(Unity Gaming Services). 그 밖의 서버에는 접속하지 않습니다. 게임은 오프라인으로도 할 수 있으며, 연결이 없으면 순위표만 이용할 수 없고 보내지 못한 최고 점수는 나중을 위해 보관됩니다',
        es: 'cargar los anuncios y su pantalla de consentimiento (Google), enviar las estadísticas de uso a Firebase (Google) y las clasificaciones en línea (Unity Gaming Services). No se contacta con ningún otro servidor. Las partidas se juegan sin conexión: sin red solo deja de estar disponible la clasificación, y la mejor puntuación no enviada se guarda para más tarde',
        de: 'das Laden der Werbung und ihres Einwilligungsformulars (Google), das Senden von Nutzungsstatistiken an Firebase (Google) und die Online-Bestenlisten (Unity Gaming Services). Kein anderer Server wird kontaktiert. Gespielt wird offline: Ohne Verbindung ist nur die Bestenliste nicht verfügbar, und die beste noch nicht gesendete Punktzahl wird für später aufbewahrt',
      },
    },
    accounts: {
      service: 'Unity Gaming Services',
      what: 'les classements mondiaux',
      bodyTitle: 'service',
      body: [
        {
          fr: "Elastic Hero ne vous demande jamais de créer un compte. Pour les classements mondiaux (SEMAINE et TOUJOURS), le jeu ouvre au premier lancement une session anonyme auprès de Unity Gaming Services, un service de Unity Technologies : un identifiant de joueur aléatoire, qui ne contient ni nom, ni adresse e-mail, ni numéro de téléphone. L'appareil garde le jeton de cette session pour vous reconnaître d'une partie à l'autre.",
          en: 'Elastic Hero never asks you to create an account. For the global leaderboards (WEEK and ALL TIME), the game opens an anonymous session with Unity Gaming Services, a Unity Technologies service, at first launch: a random player identifier containing no name, email address or phone number. The device keeps this session’s token so you are recognised from one run to the next.',
          ja: 'Elastic Heroがアカウントの作成を求めることはありません。世界ランキング（週間と総合）のために、ゲームは初回起動時にUnity Technologiesのサービス、Unity Gaming Servicesで匿名のセッションを開きます。ランダムなプレイヤーIDで、名前、メールアドレス、電話番号は含まれません。端末はこのセッションのトークンを保存し、プレイをまたいであなたを識別します。',
          ko: 'Elastic Hero는 계정 생성을 요구하지 않습니다. 세계 순위표(주간과 전체)를 위해 게임은 첫 실행 때 Unity Technologies의 서비스인 Unity Gaming Services에 익명 세션을 엽니다. 이름, 이메일 주소, 전화번호가 들어 있지 않은 무작위 플레이어 식별자입니다. 기기는 판이 바뀌어도 당신을 알아볼 수 있도록 이 세션의 토큰을 보관합니다.',
          es: 'Elastic Hero nunca te pide crear una cuenta. Para las clasificaciones mundiales (SEMANA y SIEMPRE), el juego abre en el primer inicio una sesión anónima en Unity Gaming Services, un servicio de Unity Technologies: un identificador de jugador aleatorio que no contiene nombre, dirección de correo ni número de teléfono. El dispositivo guarda el token de esa sesión para reconocerte de una partida a otra.',
          de: 'Elastic Hero verlangt nie, dass du ein Konto anlegst. Für die weltweiten Bestenlisten (WOCHE und ALLZEIT) eröffnet das Spiel beim ersten Start eine anonyme Sitzung bei Unity Gaming Services, einem Dienst von Unity Technologies: eine zufällige Spieler-ID ohne Namen, E-Mail-Adresse oder Telefonnummer. Das Gerät speichert das Token dieser Sitzung, damit du von Runde zu Runde wiedererkannt wirst.',
        },
        {
          fr: "Sont transmis à Unity : cet identifiant ; votre pseudo public, engendré automatiquement, modifiable (3 à 16 caractères) et filtré sur le serveur ; et, à la fin de chaque partie, le score, la hauteur atteinte et la durée de la partie, qui servent à vérifier que le score est plausible. Le pseudo et les meilleurs scores sont visibles des autres joueurs dans les classements.",
          en: 'Sent to Unity: this identifier; your public nickname, generated automatically, editable (3 to 16 characters) and filtered on the server; and, at the end of each run, the score, the height reached and the run’s duration, used to check that the score is plausible. Your nickname and best scores are visible to other players in the leaderboards.',
          ja: 'Unityに送られるのは、このID、自動で作られ変更もできる（3〜16文字）公開ニックネーム（サーバーで確認されます）、そして各プレイの終わりに、スコアが妥当か確かめるためのスコア、到達した高さ、プレイ時間です。ニックネームとベストスコアはランキングでほかのプレイヤーに表示されます。',
          ko: 'Unity로 전송되는 것은 이 식별자, 자동으로 만들어지고 수정할 수 있는(3~16자) 공개 닉네임(서버에서 검사), 그리고 각 판이 끝날 때 점수가 타당한지 확인하는 데 쓰이는 점수, 도달한 높이, 플레이 시간입니다. 닉네임과 최고 점수는 순위표에서 다른 플레이어에게 보입니다.',
          es: 'Se envían a Unity: este identificador; tu apodo público, generado automáticamente, modificable (de 3 a 16 caracteres) y filtrado en el servidor; y, al final de cada partida, la puntuación, la altura alcanzada y la duración de la partida, que sirven para comprobar que la puntuación es verosímil. El apodo y las mejores puntuaciones son visibles para los demás jugadores en las clasificaciones.',
          de: 'An Unity übermittelt werden: diese ID; dein öffentlicher Spielername, automatisch erzeugt, änderbar (3 bis 16 Zeichen) und auf dem Server gefiltert; und am Ende jeder Runde Punktzahl, erreichte Höhe und Dauer der Runde, mit denen geprüft wird, ob die Punktzahl plausibel ist. Spielername und Bestpunktzahlen sind in den Bestenlisten für andere Spieler sichtbar.',
        },
        {
          fr: 'Ces données sont traitées par Unity Technologies pour le compte du studio (politique de Unity : https://unity.com/legal/privacy-policy). Pour faire effacer votre entrée des classements, écrivez-nous en indiquant votre pseudo.',
          en: 'This data is processed by Unity Technologies on the studio’s behalf (Unity’s policy: https://unity.com/legal/privacy-policy). To have your leaderboard entry deleted, write to us with your nickname.',
          ja: 'これらのデータはスタジオに代わってUnity Technologiesが処理します（Unityのポリシー：https://unity.com/legal/privacy-policy）。ランキングの記録の削除を希望する場合は、ニックネームを添えてご連絡ください。',
          ko: '이 데이터는 스튜디오를 대신해 Unity Technologies가 처리합니다(Unity 정책: https://unity.com/legal/privacy-policy). 순위표 기록 삭제를 원하시면 닉네임을 적어 연락해 주세요.',
          es: 'Estos datos los trata Unity Technologies por cuenta del estudio (política de Unity: https://unity.com/legal/privacy-policy). Para que borremos tu entrada de las clasificaciones, escríbenos indicando tu apodo.',
          de: 'Diese Daten verarbeitet Unity Technologies im Auftrag des Studios (Datenschutzrichtlinie von Unity: https://unity.com/legal/privacy-policy). Wenn dein Eintrag aus den Bestenlisten gelöscht werden soll, schreib uns mit deinem Spielernamen.',
        },
      ],
    },
    forChildren: false,
    updated: '2026-09-25',
    notes: [
      {
        fr: "Pour le classement en ligne, l'appareil garde aussi le jeton de session, l'identifiant de joueur anonyme et, faute de connexion, le meilleur score pas encore envoyé : ceux-là sont destinés à Unity Gaming Services, comme décrit à la rubrique « Comptes et services de jeu ».",
        en: 'For the online leaderboard, the device also keeps the session token, the anonymous player identifier and, when offline, the best score not yet sent: these are meant for Unity Gaming Services, as described under “Accounts and game services”.',
        ja: 'オンラインランキングのために、端末はセッショントークン、匿名のプレイヤーID、そして接続がないときはまだ送っていないベストスコアも保存します。これらは「アカウントとゲームサービス」の項で説明するとおり、Unity Gaming Servicesに送るためのものです。',
        ko: '온라인 순위표를 위해 기기는 세션 토큰, 익명 플레이어 식별자, 그리고 연결이 없을 때는 아직 보내지 못한 최고 점수도 보관합니다. 이것들은 «계정과 게임 서비스» 항목에서 설명하듯 Unity Gaming Services로 보내기 위한 것입니다.',
        es: 'Para la clasificación en línea, el dispositivo guarda también el token de sesión, el identificador de jugador anónimo y, sin conexión, la mejor puntuación aún no enviada: esos datos van destinados a Unity Gaming Services, como se describe en el apartado «Cuentas y servicios de juego».',
        de: 'Für die Online-Bestenliste speichert das Gerät außerdem das Sitzungstoken, die anonyme Spieler-ID und, ohne Verbindung, die beste noch nicht gesendete Punktzahl: Diese sind für Unity Gaming Services bestimmt, wie im Abschnitt „Konten und Spieldienste“ beschrieben.',
      },
      {
        fr: "Elastic Hero est gratuit grâce à la publicité, sans aucun achat intégré. L'interstitiel ne s'affiche qu'entre deux parties, après un écran de fin de partie : jamais avant la quatrième partie ni avant trois minutes de jeu, au plus une fois toutes les trois parties et toutes les deux minutes, jamais après une partie de moins de 15 secondes ni après un nouveau record. Les vidéos récompensées (« Continuer » une fois par partie, doubler les bonbons gagnés) ne se lancent que si vous appuyez vous-même sur leur bouton.",
        en: 'Elastic Hero is free thanks to advertising, with no in-app purchases at all. The interstitial only appears between runs, after a game over screen: never before the fourth run or before three minutes of play, at most once every three runs and every two minutes, never after a run shorter than 15 seconds or after a new record. Rewarded videos (“Continue” once per run, doubling the candies earned) only start if you tap their button yourself.',
        ja: 'Elastic Heroは広告によって無料で、アプリ内課金は一切ありません。インタースティシャル広告はゲームオーバー画面のあと、プレイとプレイのあいだにだけ表示されます。4回目のプレイより前や3分のプレイより前には表示されず、3プレイに1回・2分に1回まで、15秒未満のプレイや新記録のあとには表示されません。リワード動画（1プレイに1回の「コンティニュー」、獲得したキャンディを2倍）は、あなた自身がボタンを押したときだけ始まります。',
        ko: 'Elastic Hero는 광고 덕분에 무료이며, 인앱 구매는 전혀 없습니다. 전면 광고는 게임 오버 화면 뒤, 판과 판 사이에만 나타납니다. 네 번째 판 이전이나 플레이 3분 이전에는 나오지 않고, 세 판에 한 번·2분에 한 번까지이며, 15초 미만의 판이나 새 기록 뒤에는 나오지 않습니다. 보상형 영상(한 판에 한 번 «이어하기», 얻은 사탕 두 배)은 직접 버튼을 눌렀을 때만 시작됩니다.',
        es: 'Elastic Hero es gratuito gracias a la publicidad, sin ninguna compra integrada. El anuncio intersticial solo aparece entre dos partidas, tras la pantalla de fin de partida: nunca antes de la cuarta partida ni antes de tres minutos de juego, como mucho una vez cada tres partidas y cada dos minutos, nunca tras una partida de menos de 15 segundos ni tras un nuevo récord. Los vídeos con recompensa («Continuar» una vez por partida, doblar los caramelos ganados) solo se inician si tú mismo pulsas su botón.',
        de: 'Elastic Hero ist dank Werbung kostenlos und hat keinerlei In-App-Käufe. Die Vollbildwerbung erscheint nur zwischen zwei Runden, nach dem Rundenende-Bildschirm: nie vor der vierten Runde oder vor drei Minuten Spielzeit, höchstens einmal alle drei Runden und alle zwei Minuten, nie nach einer Runde unter 15 Sekunden oder nach einem neuen Rekord. Belohnungsvideos („Weiter“ einmal pro Runde, gesammelte Bonbons verdoppeln) starten nur, wenn du selbst auf ihre Schaltfläche tippst.',
      },
      {
        fr: "L'écran de consentement publicitaire (UMP) puis, sur iPhone et iPad, la demande de suivi (ATT) sont présentés au lancement. Refuser le suivi ne bloque jamais le jeu : les annonces ne sont simplement pas personnalisées. Là où le consentement est requis, le bouton « Confidentialité » des Réglages du jeu rouvre ce formulaire.",
        en: 'The advertising consent form (UMP) and then, on iPhone and iPad, the tracking request (ATT) are shown at launch. Declining tracking never blocks the game: ads are simply not personalised. Where consent is required, the “Privacy” button in the game’s Settings reopens this form.',
        ja: '起動時に広告の同意画面（UMP）が表示され、続いてiPhoneとiPadではトラッキングの許可（ATT）を求められます。トラッキングを拒否してもゲームが遊べなくなることはなく、広告がパーソナライズされないだけです。同意が必要な地域では、ゲームの設定にある「プライバシー」ボタンからこの画面を開き直せます。',
        ko: '실행 시 광고 동의 화면(UMP)이 표시되고, 이어서 iPhone과 iPad에서는 추적 허용 요청(ATT)이 표시됩니다. 추적을 거부해도 게임이 막히지 않으며, 광고가 맞춤화되지 않을 뿐입니다. 동의가 필요한 지역에서는 게임 설정의 «개인정보» 버튼으로 이 화면을 다시 열 수 있습니다.',
        es: 'Al iniciar se muestran la pantalla de consentimiento publicitario (UMP) y después, en iPhone y iPad, la solicitud de seguimiento (ATT). Rechazar el seguimiento nunca bloquea el juego: los anuncios simplemente no se personalizan. Donde el consentimiento es obligatorio, el botón «Privacidad» de los Ajustes del juego vuelve a abrir ese formulario.',
        de: 'Beim Start erscheinen das Werbe-Einwilligungsformular (UMP) und danach, auf iPhone und iPad, die Tracking-Anfrage (ATT). Eine Ablehnung des Trackings blockiert das Spiel nie: Die Werbung wird lediglich nicht personalisiert. Wo eine Einwilligung erforderlich ist, öffnet die Schaltfläche „Datenschutz“ in den Einstellungen des Spiels dieses Formular erneut.',
      },
      {
        fr: "La demande de note passe par la fenêtre native d'Apple ou de Google, rarement et seulement après un record ou un défi réussi : le jeu n'envoie lui-même aucune donnée à cette occasion.",
        en: 'The rating request uses Apple’s or Google’s native prompt, rarely and only after a record or a completed challenge: the game itself sends no data on that occasion.',
        ja: '評価の依頼にはAppleまたはGoogleの標準の画面を使い、記録更新やチャレンジ達成のあとにまれに表示するだけです。その際、ゲーム自体がデータを送ることはありません。',
        ko: '평가 요청은 Apple 또는 Google의 기본 창을 사용하며, 기록 경신이나 도전 완료 뒤에만 가끔 표시됩니다. 이때 게임 자체는 어떤 데이터도 보내지 않습니다.',
        es: 'La solicitud de valoración usa la ventana nativa de Apple o de Google, pocas veces y solo tras un récord o un reto superado: el juego no envía ningún dato en ese momento.',
        de: 'Die Bewertungsanfrage nutzt das native Fenster von Apple oder Google, selten und nur nach einem Rekord oder einer geschafften Herausforderung: Das Spiel selbst sendet dabei keine Daten.',
      },
    ],
  },

  // Ding! — lu dans ~/StudioProjects/ascenceur le 11 septembre 2026 :
  // `lib/ads/ad_service.dart` (AdMob, UMP, ATT via app_tracking_transparency,
  // `showPrivacyOptionsForm` depuis les Réglages : la clause de retrait est
  // exacte), `lib/ads/ad_policy.dart` et `lib/main.dart` (fréquences, seuls
  // bilans de carrière réussis), `lib/analytics/*` (Firebase Analytics soumis
  // au consentement IAB dans l'EEE, jamais à des fins publicitaires ;
  // Crashlytics), `lib/progress/*` et `lib/ui/settings_store.dart` (données
  // locales). Aucun achat intégré, aucun compte. App iPhone uniquement.
  ding: {
    platforms: ['iOS'],
    localData: [
      {
        fr: 'progression de la carrière (missions réussies, distinctions, crédits)',
        en: 'career progress (missions completed, badges, credits)',
        es: 'progreso de la carrera (misiones superadas, insignias, créditos)',
        de: 'Karrierefortschritt (geschaffte Missionen, Auszeichnungen, Credits)',
      },
      {
        fr: 'équipements, prototypes, tampons et finitions de la cabine',
        en: 'gear, prototypes, stamps and car finishes',
        es: 'equipos, prototipos, sellos y acabados de la cabina',
        de: 'Ausrüstung, Prototypen, Stempel und Kabinen-Lackierungen',
      },
      {
        fr: 'mission en cours, pour la reprendre après une interruption',
        en: 'the mission in progress, so it can be resumed after an interruption',
        es: 'la misión en curso, para retomarla tras una interrupción',
        de: 'die laufende Mission, um sie nach einer Unterbrechung fortzusetzen',
      },
      {
        fr: 'médailles du défi du jour et record de l’entraînement libre',
        en: 'daily challenge medals and free practice best score',
        es: 'medallas del reto diario y récord del entrenamiento libre',
        de: 'Medaillen der täglichen Herausforderung und Rekord im freien Training',
      },
      {
        fr: 'réglages (son, musique, vibrations, aides, animations, taille du texte)',
        en: 'settings (sound, music, vibration, assists, animations, text size)',
        es: 'ajustes (sonido, música, vibración, ayudas, animaciones, tamaño del texto)',
        de: 'Einstellungen (Ton, Musik, Vibration, Hilfen, Animationen, Textgröße)',
      },
    ],
    ads: {
      network: 'Google AdMob',
      formats: ['interstitial', 'rewarded'],
      ump: true,
      att: true,
    },
    purchases: [],
    // Pas d'interrupteur dédié : dans l'EEE, la mesure suit le formulaire de
    // consentement (finalités 1 et 8), que les Réglages rouvrent ; hors EEE,
    // elle est active. Crashlytics ne se coupe pas. D'où `optOut: false`,
    // précisé dans `purpose`.
    analytics: {
      vendors: ['Firebase Analytics', 'Firebase Crashlytics'],
      optOut: false,
      purpose: {
        fr: "mesurer la progression dans le jeu (missions commencées et terminées, immeubles achevés, nombre de missions réussies, écrans consultés) et recevoir les rapports de plantage pour corriger les erreurs. Dans l'Espace économique européen, la mesure d'audience n'est activée qu'avec votre accord dans l'écran de consentement, que le bouton « Confidentialité des publicités » des Réglages permet de modifier. Ces statistiques ne servent jamais à la publicité",
        en: 'measure progress in the game (missions started and finished, buildings completed, number of missions completed, screens viewed) and receive crash reports to fix errors. In the European Economic Area, analytics are only enabled with your agreement in the consent form, which the “Ad privacy” button in the Settings lets you change. These statistics are never used for advertising',
        es: 'medir el progreso en el juego (misiones empezadas y terminadas, edificios completados, número de misiones superadas, pantallas vistas) y recibir los informes de errores para corregirlos. En el Espacio Económico Europeo, la medición solo se activa con tu consentimiento en la pantalla correspondiente, que el botón «Privacidad de los anuncios» de los Ajustes permite cambiar. Estas estadísticas nunca se usan con fines publicitarios',
        de: 'den Fortschritt im Spiel zu messen (begonnene und beendete Missionen, abgeschlossene Gebäude, Zahl der geschafften Missionen, aufgerufene Bildschirme) und Absturzberichte zu erhalten, um Fehler zu beheben. Im Europäischen Wirtschaftsraum ist die Messung nur mit deiner Zustimmung im Einwilligungsformular aktiv, die du über die Schaltfläche „Datenschutz (Werbung)“ in den Einstellungen ändern kannst. Diese Statistiken werden nie für Werbung genutzt',
      },
    },
    network: {
      purpose: {
        fr: "le chargement des publicités et de leur écran de consentement, puis l'envoi des statistiques d'usage et des rapports de plantage à Firebase. Les missions, le défi du jour et l'entraînement libre se jouent hors ligne",
        en: 'loading advertising and its consent form, then sending usage statistics and crash reports to Firebase. Missions, the daily challenge and free practice are played offline',
        es: 'la carga de los anuncios y de su pantalla de consentimiento, y el envío de estadísticas de uso e informes de errores a Firebase. Las misiones, el reto diario y el entrenamiento libre se juegan sin conexión',
        de: 'das Laden der Werbung und ihres Einwilligungsformulars sowie das Senden von Nutzungsstatistiken und Absturzberichten an Firebase. Missionen, die tägliche Herausforderung und das freie Training laufen offline',
      },
    },
    accounts: null,
    forChildren: false,
    updated: '2026-09-11',
    notes: [
      {
        fr: "Ding! est gratuit grâce à la publicité, et aucun achat intégré ne la retire. L'interstitiel ne s'affiche qu'après une mission de carrière réussie, au moment de continuer ou de revenir à l'accueil — jamais pendant une partie, jamais sur le défi du jour ni l'entraînement libre —, au plus une fois toutes les trois victoires et toutes les cinq minutes. Pour une partie des joueurs, il est remplacé par une vidéo récompensée, précédée d'un écran qui laisse le choix de la regarder ou de continuer. La vidéo récompensée du bilan (+25 crédits) ne se lance que si vous appuyez vous-même sur son bouton.",
        en: 'Ding! is free thanks to advertising, and no in-app purchase removes it. The interstitial only appears after a successful career mission, when you continue or go back home — never during play, never on the daily challenge or free practice — at most once every three wins and every five minutes. For some players it is replaced by a rewarded video, preceded by a screen that lets you choose to watch it or carry on. The rewarded video on the results screen (+25 credits) only starts if you tap its button yourself.',
        es: 'Ding! es gratuito gracias a la publicidad, y ninguna compra integrada la elimina. El anuncio intersticial solo aparece tras una misión de carrera superada, al continuar o volver al inicio —nunca durante la partida, nunca en el reto diario ni en el entrenamiento libre—, como mucho una vez cada tres victorias y cada cinco minutos. Para una parte de los jugadores se sustituye por un vídeo con recompensa, precedido de una pantalla que te deja elegir entre verlo o seguir. El vídeo con recompensa del resumen (+25 créditos) solo se inicia si tú mismo pulsas su botón.',
        de: 'Ding! ist dank Werbung kostenlos, und kein In-App-Kauf entfernt sie. Die Vollbildwerbung erscheint nur nach einer geschafften Karrieremission, wenn du weitermachst oder zum Startbildschirm zurückkehrst — nie während des Spiels, nie bei der täglichen Herausforderung oder im freien Training —, höchstens einmal alle drei Siege und alle fünf Minuten. Für einen Teil der Spieler wird sie durch ein Belohnungsvideo ersetzt, vor dem ein Bildschirm dir die Wahl lässt, es anzusehen oder weiterzuspielen. Das Belohnungsvideo der Auswertung (+25 Credits) startet nur, wenn du selbst auf seine Schaltfläche tippst.',
      },
      {
        fr: "L'écran de consentement publicitaire (UMP) puis, sur iPhone, la demande de suivi (ATT) sont présentés au lancement. Un refus ne bloque jamais le jeu : les publicités restent affichées, sans personnalisation.",
        en: 'The advertising consent form (UMP) and then, on iPhone, the tracking request (ATT) are shown at launch. Declining never blocks the game: ads are still shown, without personalisation.',
        es: 'La pantalla de consentimiento publicitario (UMP) y después, en el iPhone, la solicitud de seguimiento (ATT) se muestran al iniciar. Rechazarlas nunca bloquea el juego: los anuncios se siguen mostrando, sin personalización.',
        de: 'Das Werbe-Einwilligungsformular (UMP) und danach, auf dem iPhone, die Tracking-Anfrage (ATT) erscheinen beim Start. Eine Ablehnung blockiert das Spiel nie: Die Werbung wird weiter angezeigt, nur ohne Personalisierung.',
      },
    ],
  },

  // Glowmi — lu dans ~/StudioProjects/tamagotchi (version 2.1) le 22 septembre
  // 2026 : `Services/AdManager.swift` (AdMob, vidéos récompensées seulement,
  // 4 par jour au plus ; UMP avant `MobileAds.start`, mais aucun appel à
  // `presentPrivacyOptionsForm` : pas de clause de retrait depuis l'app),
  // `App/GlowmiApp.swift` et `Services/TrackingManager.swift` (écran de
  // contexte puis ATT ; refus = annonces non personnalisées),
  // `Store/StoreManager.swift` (4 packs de pièces consommables),
  // `Services/AnalyticsService.swift` (Firebase Analytics, configuré au
  // lancement, sans interrupteur), `Services/GameCenterService.swift`,
  // `Services/CloudSync.swift` et le conteneur CloudKit privé
  // `iCloud.com.appcraft31.glowmi`. Pas de Crashlytics, pas de serveur propre.
  glowmi: {
    platforms: ['iOS', 'iPadOS'],
    localData: [
      {
        fr: 'votre compagnon (nom, espèce, âge, besoins, personnalité, niveau de lien)',
        en: 'your companion (name, species, age, needs, personality, bond level)',
      },
      {
        fr: 'l’album des souvenirs et la collection des espèces découvertes',
        en: 'the memory album and the collection of species discovered',
      },
      { fr: 'pièces, cosmétiques et série de fidélité', en: 'coins, cosmetics and loyalty streak' },
      'réglages',
    ],
    ads: {
      network: 'Google AdMob',
      formats: ['rewarded'],
      ump: true,
      att: true,
      umpReopen: false,
      // Aucun `maxAdContentRating` ni `tagForChildDirectedTreatment` dans le code.
      familyContent: false,
    },
    purchases: [
      { kind: 'consumable', what: 'des pièces (4 packs)', productId: 'com.appcraft31.glowmi.coins.small' },
    ],
    analytics: {
      vendors: ['Firebase Analytics'],
      optOut: false,
      anonymous: false,
      purpose: {
        fr: "mesurer l'usage du jeu (éclosions, soins, parties de mini-jeux, achats, vidéos regardées, partages, écrans consultés) pour l'améliorer. L'identifiant publicitaire de l'appareil n'est associé à ces mesures que si vous avez accepté la demande de suivi",
        en: 'measure how the game is used (hatchings, care actions, mini-games played, purchases, videos watched, shares, screens viewed) in order to improve it. The device advertising identifier is only associated with these measurements if you accepted the tracking request',
      },
    },
    network: {
      purpose: {
        fr: "le chargement des vidéos publicitaires et de leur écran de consentement, l'envoi des statistiques d'usage à Firebase, les classements Game Center et, si iCloud est activé, la synchronisation de votre compagnon dans votre espace iCloud privé. Les soins et les mini-jeux fonctionnent hors ligne",
        en: 'loading advertising videos and their consent form, sending usage statistics to Firebase, Game Center leaderboards and, if iCloud is on, syncing your companion to your private iCloud storage. Care and mini-games work offline',
      },
    },
    accounts: { service: 'Game Center', what: 'les classements des quatre mini-jeux et les succès' },
    cloudSync: true,
    forChildren: false,
    updated: '2026-09-22',
    notes: [
      {
        fr: "Si iCloud est activé sur l'appareil, votre compagnon, l'album, les pièces et les cosmétiques sont synchronisés dans votre espace iCloud privé, géré par Apple et auquel le studio n'a pas accès. Sinon, tout reste sur l'appareil.",
        en: 'If iCloud is enabled on the device, your companion, album, coins and cosmetics are synced to your private iCloud storage, managed by Apple and inaccessible to the studio. Otherwise, everything stays on the device.',
      },
      {
        fr: "Glowmi n'affiche ni bannière ni publicité plein écran imposée : les seules publicités sont des vidéos bonus (doubler les gains d'une partie, bonifier la récompense du jour, renouveler le marché, un coffret offert), qui ne se lancent que si vous appuyez sur leur bouton, quatre par jour au plus.",
        en: 'Glowmi shows no banners and no forced full-screen ads: the only ads are bonus videos (doubling a game’s winnings, boosting the daily reward, refreshing the market, a free gift box), which only start if you tap their button, four a day at most.',
      },
      {
        fr: "L'écran de consentement publicitaire (UMP), puis un écran d'explication suivi de la demande de suivi (ATT), sont présentés au lancement. Un refus ne bloque jamais le jeu : les vidéos restent proposées, sans personnalisation.",
        en: 'The advertising consent form (UMP), then an explanation screen followed by the tracking request (ATT), are shown at launch. Declining never blocks the game: videos are still offered, without personalisation.',
      },
    ],
  },

  // Zellige (projet `Tectonic`) : `pubspec.yaml` lie google_mobile_ads,
  // app_tracking_transparency, firebase_analytics et games_services ; aucun
  // achat intégré. `ad_service.dart` ne charge qu'un interstitiel (une grille
  // sur deux, `AdConfig.showEveryNLevels`) et une vidéo récompensée (50 pièces).
  // `mobile_ads_init.dart` bloque l'app sur `ConsentRequiredView` en cas de
  // refus explicite du consentement UMP : la politique doit le dire.
  zellige: {
    platforms: ['iOS', 'Android'],
    localData: [
      'progression du mode histoire et niveau atteint',
      'pièces',
      'grille du jour terminée, série et meilleur temps',
      'partie en cours (histoire et grille du jour)',
      'réglages (sons, vibrations, signalement des conflits, thème)',
      'succès Game Center gagnés et déjà transmis',
    ],
    ads: {
      network: 'Google AdMob',
      formats: ['interstitial', 'rewarded'],
      ump: true,
      att: true,
    },
    purchases: [],
    // `conversion_tracker.dart` : événements de partie (level_start, level_end,
    // daily_end, hint_used, onboarding_end) et de rétention (retention_day),
    // explicitement « à des fins de mesure publicitaire ». Aucun réglage de
    // l'app ne permet de les couper.
    analytics: {
      vendors: ['Firebase Analytics'],
      optOut: false,
      purpose: {
        fr: "mesurer l'usage du jeu (grilles commencées et terminées, indices utilisés, retour au fil des jours) et évaluer l'efficacité des campagnes d'acquisition",
        en: 'measure game usage (grids started and finished, hints used, return over the following days) and assess the effectiveness of acquisition campaigns',
        ja: 'ゲームの利用状況（開始および完了した盤面、使ったヒント、日をまたいだ再訪）を計測し、獲得キャンペーンの効果を評価する',
        ko: '게임 이용 상황(시작하고 끝낸 판, 사용한 힌트, 이후 며칠간의 재방문)을 측정하고 유입 캠페인의 효과를 평가하기',
        es: 'medir el uso del juego (cuadrículas empezadas y terminadas, pistas usadas, regreso a lo largo de los días) y evaluar la eficacia de las campañas de captación',
        de: 'die Nutzung des Spiels zu messen (begonnene und beendete Gitter, genutzte Hinweise, Rückkehr über die folgenden Tage) und die Wirksamkeit der Akquisekampagnen zu bewerten',
      },
    },
    network: null,
    accounts: { service: 'Game Center', what: 'les classements (niveau atteint, série et temps de la grille du jour) et les succès' },
    forChildren: false,
    updated: '2026-08-31',
    notes: [
      {
        fr: "Les grilles sont engendrées et vérifiées sur votre appareil : ni le mode histoire ni la grille du jour n'échangent avec un serveur du studio.",
        en: 'Grids are generated and verified on your device: neither the story mode nor the daily grid exchanges anything with a studio server.',
        ja: '盤面は端末の中で生成され、検証されます。ストーリーモードも今日の盤面も、スタジオのサーバーとやり取りすることはありません。',
        ko: '판은 기기 안에서 만들어지고 검증됩니다. 스토리 모드도 오늘의 판도 스튜디오 서버와 주고받는 것이 없습니다.',
        es: 'Las cuadrículas se generan y se verifican en tu dispositivo: ni el modo historia ni la cuadrícula del día intercambian nada con un servidor del estudio.',
        de: 'Die Gitter entstehen und werden auf Ihrem Gerät geprüft: Weder der Story-Modus noch das Gitter des Tages tauscht etwas mit einem Server des Studios aus.',
      },
      {
        fr: "Zellige est gratuit grâce à la publicité. Si vous refusez explicitement le consentement publicitaire dans l'écran prévu à cet effet, l'application affiche un écran « Consentement requis » et vous propose de revoir votre choix : elle n'est pas jouable sans consentement. En cas de simple indisponibilité du formulaire (réseau coupé), elle reste jouable.",
        en: 'Zellige is free thanks to advertising. If you explicitly decline advertising consent in the consent screen, the app shows a “Consent required” screen and offers to revisit your choice: it cannot be played without consent. If the form is merely unavailable (no network), the app remains playable.',
        ja: 'Zelligeは広告によって無料で提供されています。同意画面で広告への同意をはっきり拒否した場合、アプリは「同意が必要です」という画面を表示し、選択のやり直しを促します。同意なしでは遊べません。フォームが単に表示できないだけの場合（通信がないときなど）は、そのまま遊べます。',
        ko: 'Zellige는 광고 덕분에 무료로 제공됩니다. 동의 화면에서 광고 동의를 명확히 거부하면 앱은 ‘동의 필요’ 화면을 보여 주고 선택을 다시 하도록 안내합니다. 동의 없이는 플레이할 수 없습니다. 양식이 단지 표시되지 않는 경우(네트워크가 없을 때 등)에는 그대로 즐길 수 있습니다.',
        es: 'Zellige es gratuito gracias a la publicidad. Si rechazas explícitamente el consentimiento publicitario en la pantalla prevista, la aplicación muestra una pantalla «Consentimiento necesario» y te propone revisar tu elección: no se puede jugar sin consentimiento. Si el formulario simplemente no está disponible (sin conexión), la aplicación sigue siendo jugable.',
        de: 'Zellige ist dank Werbung kostenlos. Lehnen Sie die Einwilligung in die Werbung im dafür vorgesehenen Dialog ausdrücklich ab, zeigt die App den Hinweis „Einwilligung erforderlich“ und bietet an, die Entscheidung zu überdenken: Ohne Einwilligung lässt sie sich nicht spielen. Ist das Formular lediglich nicht verfügbar (keine Verbindung), bleibt die App spielbar.',
      },
      {
        fr: "La vidéo récompensée ne se lance que si vous appuyez sur le bouton « +50 pièces » ; l'interstitiel s'affiche au plus une grille sur deux, après la fin de la grille.",
        en: 'The rewarded video only starts if you tap the “+50 coins” button; the interstitial shows at most once every two grids, after the grid is finished.',
        ja: 'リワード動画は「+50コイン」ボタンを押したときにだけ再生されます。インタースティシャルは、盤面を解き終えたあと、多くても2面に1回だけ表示されます。',
        ko: '보상형 동영상은 ‘+50 코인’ 버튼을 눌렀을 때만 재생됩니다. 전면 광고는 판을 끝낸 뒤, 많아야 두 판에 한 번 표시됩니다.',
        es: 'El vídeo recompensado solo se lanza si pulsas el botón «+50 monedas»; el anuncio a pantalla completa aparece como mucho una cuadrícula de cada dos, al terminarla.',
        de: 'Das belohnte Video startet nur, wenn Sie auf die Schaltfläche „+50 Münzen“ tippen; die bildschirmfüllende Anzeige erscheint höchstens bei jedem zweiten Gitter, nachdem es gelöst ist.',
      },
      {
        fr: "Sur Android, les classements et succès Play Jeux ne sont pas encore actifs : rien n'est transmis tant qu'ils ne le sont pas.",
        en: 'On Android, Play Games leaderboards and achievements are not active yet: nothing is transmitted until they are.',
        ja: 'Androidでは、Play ゲームのランキングと実績はまだ有効になっていません。有効になるまで、送信されるものはありません。',
        ko: 'Android에서는 Play 게임즈의 순위표와 업적이 아직 활성화되지 않았습니다. 활성화되기 전까지 전송되는 것은 없습니다.',
        es: 'En Android, las clasificaciones y los logros de Play Juegos todavía no están activos: no se transmite nada hasta que lo estén.',
        de: 'Unter Android sind Ranglisten und Erfolge von Play Games noch nicht aktiv: Bis dahin wird nichts übertragen.',
      },
    ],
  },
  // PixelCraft (projet `pixel_art`) : `pubspec.yaml` lie google_mobile_ads,
  // app_tracking_transparency, firebase_analytics, firebase_crashlytics,
  // image_picker, share_plus et flutter_local_notifications ; aucun achat
  // intégré (ni `in_app_purchase`, ni RevenueCat). `lib/data/ad_units.dart`
  // déclare des unités AdMob de production (interstitiel et récompensée) hors
  // mode debug, `ads_admob.dart` les charge, `ads_consent.dart` demande le
  // consentement UMP puis l'ATT sur iOS. La médiation AdMob peut désormais
  // confier l'annonce à Liftoff Monetize, dont le SDK est embarqué sur les deux
  // plateformes : adaptateur `com.google.ads.mediation:vungle` dans
  // `android/app/build.gradle.kts`, pod `GoogleMobileAdsMediationVungle` dans
  // `ios/Podfile` — tous deux tirent le SDK Liftoff (VungleAds) avec eux.
  pixelcraft: {
    platforms: ['iOS', 'Android'],
    localData: [
      'dessins coloriés et cases peintes',
      'toiles du mode libre et timelapses des dessins terminés',
      'dessins importés depuis vos photos',
      'pièces, indices et boosters',
      'série de jours, dessin du jour, défis et primes déjà réclamés',
      'trophées et statistiques',
      'réglages (sons, musique, thème, rappel)',
    ],
    ads: {
      network: 'Google AdMob',
      formats: ['interstitial', 'rewarded'],
      ump: true,
      att: true,
      // `ads_consent.dart` expose `showPrivacyOptions()`, et les réglages
      // ouvrent le formulaire dès que la zone du joueur l'exige
      // (`privacyOptionsRequired`) : la clause de retrait est exacte.
      mediation: [
        { name: 'Liftoff Monetize (VungleAdsSDK)', privacyUrl: 'https://liftoff.ai/privacy-policy/' },
      ],
    },
    purchases: [],
    analytics: {
      vendors: ['Firebase Analytics', 'Firebase Crashlytics'],
      // Consentement préalable : rien n'est envoyé tant que le joueur n'a pas
      // répondu au bandeau de l'accueil, et le refus est la valeur de départ.
      optOut: true,
      purpose: {
        fr: "savoir quels dessins sont terminés ou abandonnés, et recevoir les rapports de plantage pour corriger ce qui casse. Rien n'est envoyé avant votre accord, et le réglage « Statistiques anonymes » le retire à tout moment",
        en: 'to learn which pictures get finished or abandoned, and to receive crash reports so that what breaks can be fixed. Nothing is sent before you agree, and the « Statistiques anonymes » setting withdraws that agreement at any time',
      },
    },
    network: {
      purpose: {
        fr: "le chargement des publicités et de leur écran de consentement, puis l'envoi des statistiques d'usage et des rapports de plantage à Firebase. Le coloriage lui-même se joue hors ligne",
        en: 'loading advertising and its consent form, then sending usage statistics and crash reports to Firebase. Colouring itself works offline',
      },
    },
    accounts: null,
    forChildren: false,
    updated: '2026-09-07',
    notes: [
      {
        fr: "PixelCraft est gratuit grâce à la publicité, et le reste : aucun achat intégré ne la retire. L'interstitiel n'apparaît qu'entre deux dessins — jamais pendant un coloriage — au plus une fois toutes les quatre minutes et après trois dessins terminés. La vidéo récompensée ne se lance que si vous appuyez vous-même sur le bouton qui la propose (recharge d'indices, pièces doublées, booster supplémentaire).",
        en: 'PixelCraft is free thanks to advertising, and stays that way: no in-app purchase removes it. The interstitial only appears between two pictures — never while you are colouring — at most once every four minutes and after three finished pictures. The rewarded video only starts if you tap the button offering it yourself (hint refill, doubled coins, extra booster).',
      },
      {
        fr: "L'écran de consentement publicitaire (UMP) et, sur iOS, la demande de suivi (ATT) sont présentés au lancement. Un refus ne bloque jamais le jeu : les publicités restent affichées, simplement sans personnalisation.",
        en: 'The advertising consent form (UMP) and, on iOS, the tracking request (ATT) are shown at launch. Declining never blocks the game: ads are still shown, simply without personalisation.',
      },
      {
        fr: "L'import d'une photo passe par le sélecteur d'images du système : vous choisissez le fichier, la conversion en pixel art est faite sur votre appareil, et l'image obtenue est gardée localement. Ni la photo d'origine ni le dessin ne sont envoyés à un serveur du studio.",
        en: 'Importing a photo goes through the system image picker: you pick the file, the conversion to pixel art happens on your device, and the resulting picture is kept locally. Neither the original photo nor the drawing is sent to a studio server.',
      },
      {
        fr: "Le rappel quotidien est une notification locale : elle est programmée par l'appareil, sans serveur, et se coupe depuis les réglages du jeu.",
        en: 'The daily reminder is a local notification: it is scheduled by the device itself, with no server involved, and can be turned off in the game settings.',
      },
      {
        fr: "Le partage d'un dessin terminé passe par la feuille de partage du système : c'est vous qui choisissez le destinataire, l'image ne transite par aucun serveur du studio.",
        en: 'Sharing a finished drawing goes through the system share sheet: you pick the recipient, and the image never passes through a studio server.',
      },
    ],
  },
  // Hold Fire — lu dans ~/StudioProjects/Hold_fire (version 2.0) le 24
  // septembre 2026. `pubspec.yaml` lie google_mobile_ads,
  // app_tracking_transparency, gma_mediation_unity, gma_mediation_liftoffmonetize,
  // firebase_analytics et firebase_crashlytics ; aucun achat intégré.
  // `lib/game/systems/ads.dart` : formulaire UMP d'abord, puis ATT sur iOS,
  // puis initialisation d'AdMob seulement si `canRequestAds()`. Aucun appel à
  // `showPrivacyOptionsForm` (d'où `umpReopen: false`), aucune restriction de
  // contenu (`familyContent: false`). `ios/Podfile.lock` tire UnityAds et
  // VungleAds (Liftoff). `lib/game/systems/telemetry.dart` : Firebase actif en
  // version publiée, sans interrupteur dans le jeu ; événements `run_ended`
  // et `pact_signed`, plus Crashlytics. Le pod GoogleAppMeasurement embarque
  // IdentitySupport : l'identifiant publicitaire peut être associé si l'ATT
  // est accepté, d'où `anonymous: false`. Données locales : meta_store,
  // run_store, settings_store, review_store (SharedPreferences).
  holdfire: {
    platforms: ['iOS', 'Android'],
    localData: [
      {
        fr: 'record (vague la plus haute atteinte)',
        en: 'best score (highest wave reached)',
      },
      {
        fr: 'fragments et modules permanents débloqués',
        en: 'fragments and permanent modules unlocked',
      },
      {
        fr: 'partie en cours, pour la reprendre après une interruption',
        en: 'the run in progress, so it can be resumed after an interruption',
      },
      {
        fr: 'réglages (langue, son, musique, vibrations)',
        en: 'settings (language, sound, music, vibration)',
      },
      {
        fr: "nombre de parties terminées et date de la dernière demande d'avis, pour ne pas la répéter",
        en: 'number of finished runs and date of the last review request, so it is not repeated',
      },
    ],
    ads: {
      network: 'Google AdMob',
      formats: ['interstitial', 'rewarded'],
      ump: true,
      att: true,
      umpReopen: false,
      familyContent: false,
      mediation: [
        { name: 'Unity Ads', privacyUrl: 'https://unity.com/legal/game-player-and-app-user-privacy-policy' },
        { name: 'Liftoff Monetize (VungleAdsSDK)', privacyUrl: 'https://liftoff.ai/privacy-policy/' },
      ],
    },
    purchases: [],
    analytics: {
      vendors: ['Firebase Analytics', 'Firebase Crashlytics'],
      optOut: false,
      anonymous: false,
      purpose: {
        fr: "mesurer le déroulement des parties (vague et secteur atteints, victoire ou défaite, sursis utilisé, fragments gagnés, pactes signés) afin d'équilibrer la difficulté, et recevoir les rapports de plantage pour corriger les erreurs. Ces mesures ne contiennent ni nom ni contenu personnel ; Firebase y associe toutefois un identifiant d'installation, et l'identifiant publicitaire de l'appareil — sur iPhone, seulement si vous avez accepté la demande de suivi. Elles ne se désactivent pas depuis le jeu",
        en: 'measure how runs unfold (wave and sector reached, victory or defeat, revive used, fragments earned, pacts signed) so as to balance the difficulty, and receive crash reports to fix errors. These measurements contain no name or personal content; Firebase does however attach an installation identifier, and the device advertising identifier — on iPhone, only if you accepted the tracking request. They cannot be switched off from within the game',
      },
    },
    network: {
      purpose: {
        fr: "le chargement des publicités et de leur écran de consentement, puis l'envoi des statistiques de partie et des rapports de plantage à Firebase. Le jeu lui-même se joue hors ligne",
        en: 'loading advertising and its consent form, then sending run statistics and crash reports to Firebase. The game itself plays offline',
      },
    },
    accounts: null,
    forChildren: false,
    updated: '2026-09-24',
    notes: [
      {
        fr: "Hold Fire est gratuit grâce à la publicité, et aucun achat intégré ne la retire. Un interstitiel peut s'afficher toutes les trois vagues, au début de la phase de construction : le jeu est alors figé, et l'annonce n'interrompt jamais une vague en cours. Un autre peut s'afficher en revenant à l'accueil, après une fin de partie ou un abandon depuis la pause, au plus une fois toutes les trois parties et jamais moins de quatre minutes après une autre annonce. Les deux vidéos récompensées — le sursis, qui permet de reprendre la vague, et le doublement des fragments en fin de partie — ne se lancent que si vous appuyez vous-même sur leur bouton.",
        en: 'Hold Fire is free thanks to advertising, and no in-app purchase removes it. An interstitial may appear every three waves, at the start of the build phase: the game is frozen, and the ad never interrupts a wave in progress. Another may appear when you return to the home screen, after a run ends or when you quit from the pause menu, at most once every three runs and never less than four minutes after another ad. The two rewarded videos — the revive, which lets you resume the wave, and doubling your fragments at the end of a run — only start if you tap their button yourself.',
      },
      {
        fr: "L'écran de consentement publicitaire (UMP) puis, sur iPhone, la demande de suivi (ATT) sont présentés au lancement. Un refus ne bloque jamais le jeu : les publicités restent affichées, sans personnalisation.",
        en: 'The advertising consent form (UMP) and then, on iPhone, the tracking request (ATT) are shown at launch. Declining never blocks the game: ads are still shown, without personalisation.',
      },
    ],
  },

  sudoku: {
    platforms: ['iOS'],
    localData: ['carnet de tampons', 'rangs', 'séries', 'records de temps', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.dailysudoku.noads' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Les grilles sont générées sur votre appareil : le défi du jour ne nécessite aucun échange avec un serveur.',
        en: 'Grids are generated on your device: the daily challenge requires no exchange with any server.',
      },
    ],
  },

  tengo: {
    platforms: ['iOS'],
    localData: ['dix meilleurs scores', 'partie en cours', 'pièces', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.tengo.noads' },
      { kind: 'consumable', what: 'des pièces (4 paliers)', productId: 'com.tengo.coins.tier1' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement' },
    forChildren: false,
    updated: REVIEWED,
  },

  glyphe: {
    platforms: ['iOS'],
    localData: ['séries', 'scores', 'thème choisi'],
    ads: adFunded('Glyphe+'),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité et les indices illimités (« Glyphe+ »)', productId: 'com.appcraft31.glyphe.plus' },
    ],
    analytics: null,
    network: { purpose: 'la synchronisation du classement en ligne, à votre demande' },
    accounts: { service: 'Game Center', what: 'le classement mondial' },
    forChildren: false,
    updated: REVIEWED,
  },

  binero: {
    platforms: ['iOS'],
    localData: ['progression du mode histoire', 'meilleurs temps', 'réglages'],
    // Binero n'affiche pas de bannière : AdManager ne charge qu'un interstitiel
    // et une vidéo récompensée. Depuis la 1.4.4, la médiation AdMob peut confier
    // l'annonce à Liftoff Monetize, dont le SDK est embarqué dans l'app.
    ads: {
      network: 'Google AdMob',
      formats: ['interstitial', 'rewarded'],
      ump: true,
      att: true,
      mediation: [
        { name: 'Liftoff Monetize (VungleAdsSDK)', privacyUrl: 'https://liftoff.ai/privacy-policy/' },
      ],
    },
    purchases: [
      { kind: 'non-consumable', what: 'le mode libre', productId: 'com.appcraft31.binero.freemode' },
    ],
    // Firebase Analytics est lié à l'app (AppAnalytics) : événements de partie et
    // d'affichage publicitaire. Aucun réglage de l'app ne permet de les couper.
    analytics: {
      vendors: ['Firebase Analytics'],
      optOut: false,
      purpose: {
        fr: "mesurer l'usage du jeu et les revenus publicitaires, et évaluer l'efficacité des campagnes d'acquisition",
        en: 'measure game usage and advertising revenue, and assess the effectiveness of acquisition campaigns',
      },
    },
    network: null,
    accounts: { service: 'Game Center', what: 'le classement mondial des meilleurs temps' },
    forChildren: false,
    // Revu à l'ajout de la médiation Liftoff Monetize (app 1.4.4).
    updated: '2026-08-18',
  },

  zenkuro: {
    platforms: ['iOS'],
    localData: ['records par difficulté', 'grille en cours', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.kakuro.removeads' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
  },

  tinta: {
    platforms: ['iOS'],
    localData: ['progression des 300 niveaux', 'étoiles obtenues', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.tinta.removeads' },
      { kind: 'consumable', what: 'des pièces (3 paliers)', productId: 'com.appcraft31.tinta.coins.small' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
  },

  contree: {
    platforms: ['iOS'],
    localData: ['parties en cours', 'statistiques', 'réglages'],
    ads: adFunded(),
    purchases: [],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le multijoueur et les parties entre amis' },
    forChildren: false,
    updated: REVIEWED,
  },

  combo: {
    platforms: ['iOS'],
    localData: ['meilleurs scores', 'partie en cours', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.squarelink.removeads' },
      { kind: 'non-consumable', what: 'un lot de cosmétiques', productId: 'com.appcraft31.squarelink.cosmetics.pack' },
      { kind: 'non-consumable', what: 'le mode infini', productId: 'com.appcraft31.squarelink.infinite.v2' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement' },
    forChildren: false,
    updated: REVIEWED,
  },

  graviwords: {
    platforms: ['iOS'],
    localData: ['pièces', 'pouvoirs débloqués', 'meilleurs scores', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'consumable', what: 'des pièces pour la boutique de pouvoirs (3 paliers)', productId: 'com.appcraft31.graviword.coins.small' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement mondial' },
    forChildren: false,
    updated: REVIEWED,
  },

  orbis: {
    platforms: ['iOS'],
    localData: ['progression', 'meilleurs scores', 'réglages'],
    ads: adFunded(),
    purchases: [],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'les classements iPhone et iPad' },
    forChildren: false,
    updated: REVIEWED,
  },

  meliz: {
    platforms: ['iOS', 'Android', 'Web'],
    localData: ['meilleurs scores par thème et difficulté', 'partie en cours', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.meliz.removeads' },
      { kind: 'consumable', what: 'des pièces (3 paliers)', productId: 'com.appcraft31.meliz.coins.small' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'La version jouable dans le navigateur conserve vos scores dans le stockage local de votre navigateur, et nulle part ailleurs.',
        en: 'The browser version keeps your scores in your browser’s local storage, and nowhere else.',
      },
    ],
  },

  motfleche: {
    platforms: ['iOS'],
    localData: ['grilles en cours', 'étoiles', 'thèmes débloqués', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'consumable', what: 'des étoiles pour débloquer des thèmes (4 paliers)', productId: 'com.appcraft31.motfleche.stars.handful' },
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.motfleche.removeads' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement' },
    forChildren: false,
    updated: REVIEWED,
  },

  randompix: {
    platforms: ['iOS'],
    localData: ['pseudonyme choisi pour la partie', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.randompix.noads' },
      { kind: 'non-consumable', what: 'des packs d’emojis', productId: 'com.appcraft31.randompix.emojis.fete' },
    ],
    analytics: null,
    network: {
      purpose:
        'la partie en réseau : le code de salon, les votes et les photos de la manche en cours transitent entre les joueurs',
    },
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Les photos que vous validez sont chiffrées le temps de la partie, puis supprimées automatiquement. Elles ne servent qu’à la manche en cours et ne sont jamais conservées après.',
        en: 'The photos you approve are encrypted for the duration of the game, then deleted automatically. They serve only the round being played and are never kept afterwards.',
      },
    ],
  },

  talon: {
    platforms: ['iOS', 'Android'],
    localData: ['parties en cours', 'statistiques', 'donne du jour', 'réglages'],
    // Pas d'`adFunded()` ici : l'aide déclare les trois formats, or Talon
    // n'affiche aucune bannière — c'est une promesse tenue par le code
    // (`lib/services/ads_service.dart`), pas une intention.
    ads: {
      network: 'Google AdMob',
      formats: ['interstitial', 'rewarded'],
      ump: true,
      att: true,
      removedBy: 'Sans publicité',
    },
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.talon.noads' },
    ],
    // `analytics` et `network` étaient à `null` : la politique affirmait donc
    // que l'application n'embarquait aucune mesure d'audience et ne se
    // connectait à rien. C'était faux avant même la publicité — `pubspec.yaml`
    // dépend de `firebase_analytics` depuis la première version, et
    // `docs/store-checklist.md` la déclarait bien aux deux stores. Corrigé le
    // 17 août 2026.
    analytics: {
      vendors: ['Firebase Analytics (statistiques d’usage anonymes)'],
      optOut: true,
    },
    network: {
      purpose:
        'afficher les annonces publicitaires, recueillir le consentement correspondant et envoyer les statistiques d’usage anonymes',
    },
    accounts: null,
    forChildren: false,
    updated: '2026-08-17',
    notes: [
      {
        fr: 'Le jeu lui-même reste hors ligne : les donnes, la donne du jour et les codes de défi sont calculés sur l’appareil, et une partie se joue entièrement sans réseau. Seules la publicité et la mesure d’audience communiquent — une annonce entre deux parties, jamais pendant, jamais sur la donne du jour, et aucune bannière. L’achat « Sans publicité » retire définitivement la publicité, et un interrupteur des réglages coupe la mesure.',
        en: 'The game itself stays offline: deals, the daily deal and challenge codes are computed on the device, and a game is played entirely without a network. Only advertising and analytics communicate — one ad between two games, never during play, never on the daily deal, and no banners. The “Remove ads” purchase permanently removes advertising, and a switch in the settings turns analytics off.',
      },
    ],
  },

  keeply: {
    platforms: ['iOS'],
    localData: ['missions effectuées', 'corbeille de sécurité', 'réglages'],
    ads: null,
    purchases: [
      { kind: 'subscription', what: 'l’abonnement Premium (mensuel ou annuel, avec période d’essai)', productId: 'com.appcraft31.keeply.premium.monthly' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'L’analyse de votre photothèque est faite entièrement sur l’appareil. Aucune photo, aucune vignette et aucune empreinte d’image n’est envoyée sur un serveur.',
        en: 'Your photo library is analysed entirely on the device. No photo, no thumbnail and no image fingerprint is ever sent to a server.',
      },
    ],
  },

  remindo: {
    platforms: ['iOS', 'Android'],
    localData: ['notes', 'rappels', 'routines', 'objectifs', 'réglages'],
    ads: null,
    purchases: [],
    analytics: {
      vendors: ['statistiques d’usage anonymes', 'rapports de plantage'],
      optOut: true,
    },
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Vos notes vivent dans une base de données locale et ne sont jamais envoyées nulle part : l’application fonctionne intégralement sans réseau.',
        en: 'Your notes live in a local database and are never sent anywhere: the app works entirely without a network.',
      },
    ],
  },

  // Shizuku — relu dans ~/StudioProjects/timer_café le 22 septembre 2026 :
  // `Bloom/Engine/StoreManager.swift` gère un achat unique « Shizuku Pro »
  // (StoreKit 2) qui débloque bibliothèque complète, recettes personnalisées,
  // pilotage vocal et Apple Watch. Aucune régie, aucune mesure d'audience.
  shizuku: {
    platforms: ['iOS', 'watchOS'],
    localData: ['recettes', 'historique de brassage', 'réglages'],
    ads: null,
    purchases: [
      {
        kind: 'non-consumable',
        what: 'Shizuku Pro (bibliothèque complète, recettes personnalisées, pilotage vocal et Apple Watch)',
        productId: 'com.appcraft31.bloom.pro',
      },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: '2026-09-22',
    notes: [
      {
        fr: 'La reconnaissance vocale utilise le service de dictée d’Apple, activé uniquement quand vous allumez le micro depuis l’écran de brassage.',
        en: 'Voice recognition uses Apple’s speech service, active only while you turn the microphone on from the brew screen.',
      },
    ],
  },

  // Poddroid — relu dans ~/StudioProjects/poddroid le 22 septembre 2026 :
  // `ui/components/BannerAd.kt` affiche une bannière AdMob (unité de
  // production) sur la liste des podcasts et sur le lecteur ; l'ID
  // d'application est déclaré dans `AndroidManifest.xml`. Aucun formulaire
  // UMP n'est implémenté : la politique ne promet donc aucun écran de choix.
  poddroid: {
    platforms: ['Android'],
    localData: ['abonnements', 'progression d’écoute', 'épisodes téléchargés', 'réglages'],
    ads: {
      network: 'Google AdMob',
      formats: ['banner'],
      ump: false,
      att: false,
      umpReopen: false,
      familyContent: false,
    },
    purchases: [],
    analytics: null,
    network: {
      purpose:
        'la recherche de podcasts, le téléchargement des flux RSS et des épisodes auxquels vous êtes abonné',
    },
    accounts: null,
    forChildren: false,
    updated: '2026-09-22',
    notes: [
      {
        fr: 'En dehors de la bannière publicitaire, l’application ne contacte que les serveurs des podcasts que vous écoutez et l’annuaire de recherche. Aucun compte, aucune mesure d’audience.',
        en: 'Apart from the advertising banner, the app only contacts the servers of the podcasts you listen to and the search directory. No account, no analytics.',
      },
    ],
  },

  ecopompe: {
    platforms: ['iOS', 'Android'],
    localData: [
      'stations favorites',
      'carburant préféré',
      'capacité du réservoir et consommation du véhicule',
      'alertes de prix',
      'historique des prix des favoris',
      { fr: 'pleins saisis dans le suivi de budget', en: 'fill-ups entered in the budget tracker' },
      'réglages',
    ],
    ads: null,
    // EcoPompe Pro : achat unique via StoreKit 2 (`Pro/PurchaseService.swift`)
    // et Google Play Billing (`data/pro/PurchaseService.kt`). La fiche disait
    // `purchases: []` — corrigé le 21 septembre 2026.
    purchases: [
      {
        kind: 'non-consumable',
        what: 'EcoPompe Pro (itinéraire, alertes illimitées, historique de 90 jours, budget illimité et export, widget « autour de moi »)',
        productId: 'com.appcraft31.ecopompe.pro.lifetime',
      },
    ],
    analytics: null,
    // Le mode « Sur mon trajet » appelle Mapbox (`RoutePlanner.swift` /
    // `RoutePlanner.kt`) : géocodage de la destination saisie, puis calcul de
    // l'itinéraire depuis la position de départ.
    network: {
      purpose: {
        fr: 'télécharger les prix publiés en données ouvertes par les stations-service françaises et, uniquement en mode « Sur mon trajet », calculer votre itinéraire avec Mapbox',
        en: 'downloading the prices published as open data by French fuel stations and, only in the “On my route” mode, calculating your route with Mapbox',
      },
    },
    accounts: null,
    forChildren: false,
    updated: '2026-09-21',
    notes: [
      {
        fr: 'Votre position sert, sur votre appareil, à trier les stations par distance. Elle n’est envoyée à aucun serveur, sauf lorsque vous utilisez le mode « Sur mon trajet » : la destination saisie, votre point de départ et les coordonnées de la destination sont alors envoyés à Mapbox, Inc. (États-Unis) pour proposer des adresses et calculer l’itinéraire, sans aucun identifiant vous concernant. Mapbox les traite selon sa propre politique de confidentialité : https://www.mapbox.com/legal/privacy',
        en: 'Your location is used on your device to sort stations by distance. It is never sent to any server, except when you use the “On my route” mode: the destination you type, your starting point and the destination coordinates are then sent to Mapbox, Inc. (United States) to suggest addresses and calculate the route, without any identifier about you. Mapbox processes them under its own privacy policy: https://www.mapbox.com/legal/privacy',
      },
    ],
  },

  /*
   * AdMob Companion (projet `~/essaies_dev/Admob`, hors du périmètre de
   * `audit-sdk.mjs`, qui ne parcourt que `~/StudioProjects`). Faits relevés
   * dans le code :
   *
   * - `app/build.gradle.kts` ne déclare aucun SDK de régie, aucun moteur
   *   d'achat intégré, aucun outil de mesure : OkHttp, Room, DataStore,
   *   WorkManager, Compose et Glance, rien d'autre. D'où `ads: null`,
   *   `purchases: []` et `analytics: null` — malgré le nom de l'app, qui
   *   *lit* les revenus AdMob d'un compte sans jamais afficher d'annonce.
   * - `auth/OAuthManager.kt` : OAuth 2.0 PKCE dans un Custom Tab, périmètre
   *   `admob.readonly` et `email`.
   * - `auth/TokenStore.kt` : jeton de rafraîchissement chiffré en AES/GCM par
   *   une clé du Keystore Android.
   * - `AndroidManifest.xml` : INTERNET, ACCESS_NETWORK_STATE, POST_NOTIFICATIONS.
   *   Aucune permission de localisation, de contacts, de stockage ou de caméra.
   */
  'admob-companion': {
    platforms: ['Android'],
    localData: [
      {
        fr: 'les métriques AdMob synchronisées (revenus, impressions, clics, eCPM, taux de correspondance), par jour et par dimension',
        en: 'the synced AdMob metrics (earnings, impressions, clicks, eCPM, match rate), by day and by dimension',
      },
      {
        fr: 'la liste des applications et des blocs d’annonces du compte',
        en: 'the list of the account’s apps and ad units',
      },
      {
        fr: 'vos règles d’alerte et l’historique des alertes déclenchées',
        en: 'your alert rules and the history of triggered alerts',
      },
      {
        fr: 'vos réglages : devise d’affichage, fréquence de synchronisation, profondeur d’historique, notifications',
        en: 'your settings: display currency, sync frequency, history depth, notifications',
      },
    ],
    ads: null,
    purchases: [],
    analytics: null,
    network: {
      purpose: {
        fr: 'vous connecter à votre compte Google (accounts.google.com, oauth2.googleapis.com) puis lire les rapports de votre compte AdMob (admob.googleapis.com). L’application ne contacte aucun autre serveur, et notamment aucun serveur d’AppCraft31 : les chiffres vont de Google à votre appareil, sans intermédiaire',
        en: 'signing you in to your Google account (accounts.google.com, oauth2.googleapis.com) and then reading your AdMob account’s reports (admob.googleapis.com). The app contacts no other server, and in particular no AppCraft31 server: the figures go from Google to your device, with nothing in between',
      },
    },
    accounts: {
      service: 'compte Google',
      what: 'lire les rapports de votre propre compte AdMob',
      body: [
        {
          fr: 'AdMob Companion ne crée aucun compte et n’a pas de serveur. Pour lire vos rapports, vous vous connectez à votre compte Google selon le protocole OAuth 2.0 avec PKCE, dans un onglet du navigateur du système : l’application ne voit jamais votre mot de passe, et ne reçoit qu’un jeton d’accès.',
          en: 'AdMob Companion creates no account and has no server. To read your reports, you sign in to your Google account using OAuth 2.0 with PKCE, in a system browser tab: the app never sees your password, and only ever receives a token.',
        },
        {
          fr: 'L’autorisation demandée est « https://www.googleapis.com/auth/admob.readonly », en lecture seule : l’application peut consulter les rapports et l’inventaire de votre compte AdMob, jamais les modifier. S’y ajoute « email », qui sert uniquement à afficher l’adresse du compte connecté dans les réglages.',
          en: 'The scope requested is “https://www.googleapis.com/auth/admob.readonly”, read-only: the app can view your AdMob account’s reports and inventory, never change them. Alongside it, “email” is used solely to show the signed-in account’s address in the settings.',
        },
        {
          fr: 'Les jetons délivrés par Google sont conservés sur l’appareil, chiffrés en AES/GCM par une clé qui ne quitte jamais le Keystore Android. Ils ne sont transmis qu’à Google, pour renouveler l’accès. Se déconnecter depuis les réglages les efface ; vous pouvez également retirer l’accès à tout moment depuis la page « Applications tierces » de votre compte Google.',
          en: 'The tokens issued by Google are kept on the device, encrypted with AES/GCM by a key that never leaves the Android Keystore. They are sent to Google only, to renew access. Signing out from the settings erases them; you can also revoke access at any time from the “Third-party apps” page of your Google account.',
        },
      ],
    },
    forChildren: false,
    updated: '2026-09-06',
    notes: [
      {
        fr: 'Ces éléments sont écrits dans une base de données locale, sur votre appareil, pour que l’application reste consultable hors ligne. Ils y restent jusqu’à la désinstallation.',
        en: 'These are written to a local database on your device, so the app stays readable offline. They remain there until you uninstall it.',
      },
      {
        fr: 'Les notifications d’alerte sont calculées sur l’appareil, à partir de cette base : aucun service de notification distant n’est utilisé, et rien n’est envoyé pour les produire.',
        en: 'Alert notifications are computed on the device from that database: no remote notification service is involved, and nothing is sent out to produce them.',
      },
    ],
  },
};

export function getPrivacyFacts(slug: string): PrivacyFacts {
  const facts = PRIVACY_FACTS[slug];
  if (!facts) {
    throw new Error(`Aucun fait de confidentialité pour « ${slug} » dans privacy-facts.ts`);
  }
  return facts;
}
