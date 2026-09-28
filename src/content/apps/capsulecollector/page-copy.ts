import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/capsulecollector.html`.
 *
 * Écrits le 28 septembre 2026 d'après le code de
 * `~/StudioProjects/Capsule_collector` : 200 niveaux conçus et vérifiés
 * solubles par un solveur, de 3 à 9 couleurs et des tubes de 3 à 5 capsules,
 * puis des variantes sans fin (`lib/data/levels.dart`, `lib/logic/solver.dart`),
 * 1 à 3 étoiles, 3 annulations par niveau, 1 pièce par niveau réussi et
 * 2 pièces par tour de machine (`lib/core/economy.dart`), 48 figurines en
 * 4 séries de 12 — 5 N, 3 R, 2 SR, 1 SSR, 1 SECRET, tirées à 55/25/14/5/1 %,
 * garantie après 4 doublons d'affilée (`lib/data/collections.dart`,
 * `lib/logic/gacha.dart`), niveaux de figurine jusqu'à MAX, machines débloquées
 * aux niveaux de collectionneur 3, 6 et 8, chambre de 8 puis 16 emplacements
 * au niveau 5 (`lib/logic/progression.dart`), 5 décors, 4 langues
 * (`lib/l10n/app_*.arb`). Le jeu est financé par AdMob, sans aucun achat
 * intégré, et se joue hors ligne.
 */
const fr: AppCopy = {
  tagline: 'Puzzle de tri et capsules à collectionner · sur iPhone et Android',

  headline: {
    lead: 'Trie. Tourne. Collectionne.',
    highlight: 'Une capsule, une surprise.',
  },

  intro:
    'Dans Capsule Collector, vous rangez des capsules colorées d’un tube à l’autre jusqu’à ce que chaque tube ne contienne plus qu’une couleur : il file alors dans la mini-machine de sa couleur. Chaque niveau réussi rapporte une pièce ; avec deux pièces, vous tournez la poignée d’une machine à capsules à la japonaise, et une figurine kawaii vous attend à l’intérieur.',

  stats: [
    { value: '200', label: 'niveaux, puis des variantes sans fin' },
    { value: '48', label: 'figurines à collectionner' },
    { value: '4', label: 'séries, une machine chacune' },
    { value: '5', label: 'décors pour votre chambre' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Le principe',
      title: 'Trier, gagner une pièce, tourner la poignée',
      items: [
        { title: 'Déplacez', body: 'Une capsule à la fois, d’un tube à l’autre : vers un tube vide, ou sur une capsule de la même couleur.' },
        { title: 'Rangez', body: 'Un tube rempli d’une seule couleur est aspiré dans la mini-machine de sa couleur. Le niveau est gagné quand toutes les couleurs sont rangées.' },
        { title: 'Sans stress', body: 'Pas de chrono, pas d’échec. Trois annulations par niveau, et le bouton Recommencer quand vous voulez.' },
        { title: 'Visez trois étoiles', body: 'De une à trois étoiles, selon votre nombre de coups comparé à l’objectif du niveau.' },
        { title: 'Gagnez des pièces', body: 'Un niveau réussi rapporte une pièce ; rejoué, il ne rapporte que si vous battez votre record. Un tour de machine coûte deux pièces, et la première capsule est offerte.' },
        { title: 'Tournez', body: 'Glissez la pièce dans la fente, tournez la poignée du doigt, la capsule tombe : touchez-la pour l’ouvrir.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Du tube à l’étagère',
    },
    {
      id: 'features',
      kicker: 'Ce qui vous attend',
      title: 'Une boutique de gachapon dans votre poche',
      items: [
        {
          title: '200 niveaux vérifiés',
          body: 'De 3 à 9 couleurs, des tubes de 3 à 5 capsules, et chaque niveau vérifié soluble par un solveur. Après le 200e, des variantes aux couleurs et aux tubes permutés permettent de jouer sans fin.',
        },
        {
          title: 'Quatre séries',
          body: 'Collection Neko (des chats), Cuisine japonaise, Créatures marines et Café de Séoul, avec ses douceurs coréennes : dalgona, bungeoppang, bingsu, hotteok, ours barista… Douze figurines par série.',
        },
        {
          title: 'N, R, SR, SSR, SECRET',
          body: 'Chaque série compte 5 N, 3 R, 2 SR, 1 SSR et 1 SECRET, tirées à 55, 25, 14, 5 et 1 %. Après quatre doublons d’affilée sur une machine, le tirage suivant est forcément une figurine jamais obtenue.',
        },
        {
          title: 'Des doublons utiles',
          body: 'Un doublon fait monter la figurine de niveau jusqu’au niveau MAX : socle, halo, paillettes, puis animation.',
        },
        {
          title: 'Niveau de collectionneur',
          body: 'Chaque figurine rapporte de l’XP. La machine Cuisine japonaise s’ouvre au niveau 3, Créatures marines au 6, Café de Séoul au 8 ; au niveau 5, la chambre passe de 8 à 16 emplacements.',
        },
        {
          title: 'L’album',
          body: 'Un catalogue de cartes numérotées de No.001 à No.048, avec un badge NEW sur chaque nouvelle venue.',
        },
        {
          title: 'Votre chambre',
          body: 'Exposez vos figurines, ou laissez le bouton « Remplir » s’en charger. Touchez-en une : elle saute avec des cœurs. Chaque série complétée débloque un décor : Maison des chats, Bar à sushis, Aquarium, Café de Séoul.',
        },
        {
          title: 'Kawaii jusqu’au bout',
          body: 'Auvent rayé rouge et blanc, rubans, pétales de sakura, une musique de boîte à musique, des effets sonores et des vibrations — chacun se coupe dans les Réglages. En français, anglais, japonais et coréen.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte, pas de mesure d’audience',
      body: 'Pièces, figurines, progression et chambre sont enregistrées sur l’appareil. Le jeu se joue entièrement hors ligne : la connexion ne sert qu’à charger les publicités (Google AdMob) et leur formulaire de consentement. Aucun achat intégré, aucun outil de statistiques. Au lancement, le formulaire de consentement de Google puis, sur iPhone, la demande de suivi d’Apple vous laissent le choix, et là où le consentement est requis, le bouton « Choix de confidentialité des pubs » des Réglages le rouvre.',
    },
  ],

  cta: {
    title: 'Bientôt sur l’App Store et Google Play',
    body: 'Capsule Collector arrive sur iPhone et Android. En attendant, découvrez nos autres jeux.',
  },

  meta: {
    title: 'Capsule Collector — puzzle de tri et capsules kawaii',
    description:
      'Un puzzle de tri de capsules sur iPhone et Android : 200 niveaux, des pièces à gagner et une machine à capsules à la japonaise. Collectionnez 48 figurines kawaii en 4 séries et exposez-les dans votre chambre.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Sorting puzzle and capsules to collect · on iPhone and Android',

  headline: {
    lead: 'Sort. Spin. Collect.',
    highlight: 'One capsule, one surprise.',
  },

  intro:
    'In Capsule Collector, you move colorful capsules from tube to tube until each tube holds a single color: it then whooshes into the mini machine of its color. Every level you clear earns a coin; with two coins, you turn the handle of a Japanese-style capsule machine, and a kawaii figure is waiting inside.',

  stats: [
    { value: '200', label: 'levels, then endless variations' },
    { value: '48', label: 'figures to collect' },
    { value: '4', label: 'series, one machine each' },
    { value: '5', label: 'decors for your room' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How it plays',
      title: 'Sort, earn a coin, turn the handle',
      items: [
        { title: 'Move', body: 'One capsule at a time, from one tube to another: into an empty tube, or onto a capsule of the same color.' },
        { title: 'Sort', body: 'A tube filled with a single color is sucked into the mini machine of its color. The level is won once every color is sorted.' },
        { title: 'No stress', body: 'No timer, no failing. Three undos per level, and the Restart button whenever you like.' },
        { title: 'Aim for three stars', body: 'One to three stars, depending on your number of moves compared to the level’s target.' },
        { title: 'Earn coins', body: 'A cleared level earns one coin; replayed, it only pays if you beat your record. A spin costs two coins, and the first capsule is free.' },
        { title: 'Spin', body: 'Slide the coin into the slot, turn the handle with your finger, the capsule drops: tap it to open it.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'From tube to shelf',
    },
    {
      id: 'features',
      kicker: 'What awaits you',
      title: 'A gachapon shop in your pocket',
      items: [
        {
          title: '200 verified levels',
          body: '3 to 9 colors, tubes of 3 to 5 capsules, and each level checked solvable by a solver. After level 200, variations with shuffled colors and tubes let you play forever.',
        },
        {
          title: 'Four series',
          body: 'Neko Collection (cats), Japanese Food, Sea Creatures and Seoul Café, with its Korean treats: dalgona, bungeoppang, bingsu, hotteok, a barista bear… Twelve figures per series.',
        },
        {
          title: 'N, R, SR, SSR, SECRET',
          body: 'Each series has 5 N, 3 R, 2 SR, 1 SSR and 1 SECRET, drawn at 55, 25, 14, 5 and 1%. After four duplicates in a row on one machine, the next draw is guaranteed to be a figure you have never had.',
        },
        {
          title: 'Useful duplicates',
          body: 'A duplicate levels the figure up, all the way to MAX: pedestal, halo, sparkles, then animation.',
        },
        {
          title: 'Collector level',
          body: 'Every figure earns XP. The Japanese Food machine opens at level 3, Sea Creatures at 6, Seoul Café at 8; at level 5, your room grows from 8 to 16 spots.',
        },
        {
          title: 'The album',
          body: 'A catalog of cards numbered No.001 to No.048, with a NEW badge on every newcomer.',
        },
        {
          title: 'Your room',
          body: 'Display your figures, or let the “Fill” button do it. Tap one: it hops with hearts. Each completed series unlocks a decor: Neko House, Sushi Bar, Aquarium, Seoul Café.',
        },
        {
          title: 'Kawaii all the way',
          body: 'A red and white striped awning, ribbons, sakura petals, music-box music, sound effects and vibrations — each can be turned off in Settings. In English, French, Japanese and Korean.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account, no analytics',
      body: 'Coins, figures, progress and room are saved on the device. The game plays entirely offline: the connection is only used to load ads (Google AdMob) and their consent form. No in-app purchases, no statistics tool. At launch, Google’s consent form and then, on iPhone, Apple’s tracking request let you choose, and where consent is required, the “Ad privacy choices” button in Settings reopens it.',
    },
  ],

  cta: {
    title: 'Coming soon to the App Store and Google Play',
    body: 'Capsule Collector is on its way to iPhone and Android. Meanwhile, have a look at our other games.',
  },

  meta: {
    title: 'Capsule Collector — sorting puzzle and kawaii capsules',
    description:
      'A capsule sorting puzzle for iPhone and Android: 200 levels, coins to earn and a Japanese-style capsule machine. Collect 48 kawaii figures across 4 series and display them in your room.',
  },

  chips: [],
};

const ja: AppCopy = {
  tagline: 'カプセル仕分けパズルとコレクション · iPhone・Android',

  headline: {
    lead: 'そろえて、まわして、あつめよう！',
    highlight: 'カプセルの中は、おたのしみ。',
  },

  intro:
    'カプセルコレクターでは、色とりどりのカプセルをチューブからチューブへ移し、1本のチューブを1色だけにそろえます。そろったチューブは同じ色のミニマシンへ吸いこまれます。レベルをクリアするたびにコインが1枚。2枚たまったら日本のガチャガチャのようなカプセルマシンのハンドルをまわしましょう。中にはかわいいフィギュアが待っています。',

  stats: [
    { value: '200', label: 'のレベル、その先はエンドレス' },
    { value: '48', label: '体のフィギュア' },
    { value: '4', label: 'つのシリーズ、それぞれにガチャ' },
    { value: '5', label: 'つのおへやの内装' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: '遊びかた',
      title: 'そろえて、コインをもらって、ハンドルをまわす',
      items: [
        { title: '動かす', body: 'カプセルは1つずつ、チューブからチューブへ。空のチューブか、同じ色のカプセルの上に動かせます。' },
        { title: 'そろえる', body: '1色だけになったチューブは、同じ色のミニマシンへ吸いこまれます。すべての色をそろえたらクリア。' },
        { title: 'のんびり', body: '時間制限もゲームオーバーもありません。1レベルにつき3回もどせて、いつでも「やりなおし」できます。' },
        { title: '星3つをめざそう', body: 'レベルの目標手数とくらべて、星1つから3つで評価されます。' },
        { title: 'コインを集める', body: 'クリアしたレベルごとにコイン1枚。遊びなおしたレベルは記録を更新したときだけもらえます。ガチャは1回コイン2枚で、最初のカプセルは無料です。' },
        { title: 'まわす', body: 'コインをスロットに入れ、指でハンドルをまわすと、カプセルがころん。タップして開けましょう。' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'チューブから棚まで',
    },
    {
      id: 'features',
      kicker: 'お楽しみ',
      title: 'ポケットの中のガチャガチャ屋さん',
      items: [
        {
          title: '検証済みの200レベル',
          body: '3〜9色、チューブには3〜5個のカプセル。どのレベルもソルバーで解けることを確認済みです。200レベルの先は、色とチューブを入れかえたバリエーションでずっと遊べます。',
        },
        {
          title: '4つのシリーズ',
          body: 'ねこコレクション、和食コレクション、海のいきもの、そして韓国スイーツのソウルカフェ（ダルゴナ、プンオパン、ピンス、ホットク、バリスタのクマ…）。各シリーズ12体です。',
        },
        {
          title: 'N・R・SR・SSR・SECRET',
          body: '各シリーズはN 5体、R 3体、SR 2体、SSR 1体、SECRET 1体。出る確率は55・25・14・5・1％。同じマシンで4回続けてダブったら、次はまだ持っていないフィギュアが必ず出ます。',
        },
        {
          title: 'ダブりもムダにならない',
          body: 'ダブったフィギュアはレベルアップ。台座、光の輪、キラキラ、アニメーションと進んでMAXまで育ちます。',
        },
        {
          title: 'コレクターレベル',
          body: 'フィギュアを手に入れるたびに経験値。和食コレクションのガチャはレベル3、海のいきものは6、ソウルカフェは8で解放。レベル5でおへやの飾り場所が8から16に増えます。',
        },
        {
          title: 'コレクション図鑑',
          body: 'No.001からNo.048まで番号つきのカードが並ぶカタログ。新しく来た子にはNEWバッジがつきます。',
        },
        {
          title: 'マイルーム',
          body: 'フィギュアを飾ったり、「おまかせ」で自動で並べたり。タップするとハートを出してぴょんと跳ねます。シリーズをコンプリートするたびに内装が解放：ねこハウス、寿司バー、水族館、ソウルのカフェ。',
        },
        {
          title: 'すみずみまでかわいく',
          body: '赤と白のしましまの日よけ、リボン、桜の花びら、オルゴールの音楽、効果音と振動。どれも設定でオフにできます。日本語、英語、フランス語、韓国語に対応。',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'プライバシー',
      title: 'アカウント不要、アクセス解析なし',
      body: 'コイン、フィギュア、進行状況、おへやは端末に保存されます。ゲームは完全にオフラインで遊べ、通信は広告（Google AdMob）とその同意画面の読み込みだけに使われます。アプリ内課金も統計ツールもありません。起動時にGoogleの同意画面、続いてiPhoneではAppleのトラッキング許可で選ぶことができ、同意が必要な地域では設定の「広告のプライバシー設定」ボタンから開き直せます。',
    },
  ],

  cta: {
    title: 'App StoreとGoogle Playに近日登場',
    body: 'カプセルコレクターはまもなくiPhoneとAndroidに登場します。それまでは、ほかのゲームもどうぞ。',
  },

  meta: {
    title: 'Capsule Collector — カプセル仕分けパズルとかわいいガチャ',
    description:
      'iPhone・Android向けのカプセル仕分けパズル。200のレベル、集めるコイン、そして日本のガチャガチャのようなカプセルマシン。4シリーズ48体のかわいいフィギュアを集めて、おへやに飾ろう。',
  },

  chips: [],
};

const ko: AppCopy = {
  tagline: '캡슐 정렬 퍼즐과 수집 · iPhone과 Android',

  headline: {
    lead: '정렬하고, 돌리고, 모으자!',
    highlight: '캡슐 속엔 깜짝 선물.',
  },

  intro:
    '캡슐 컬렉터에서는 알록달록한 캡슐을 튜브에서 튜브로 옮겨, 튜브마다 한 가지 색만 남도록 정리합니다. 한 색으로 채워진 튜브는 같은 색의 미니 기계로 쏙 빨려 들어갑니다. 레벨을 깰 때마다 코인 1개. 코인 2개가 모이면 일본식 캡슐 뽑기 기계의 손잡이를 돌려 보세요. 안에는 귀여운 피규어가 기다리고 있습니다.',

  stats: [
    { value: '200', label: '개의 레벨, 그다음은 끝없는 변형' },
    { value: '48', label: '종의 피규어' },
    { value: '4', label: '개 시리즈, 시리즈마다 뽑기 기계' },
    { value: '5', label: '가지 방 테마' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: '플레이 방법',
      title: '정렬하고, 코인을 받고, 손잡이를 돌리고',
      items: [
        { title: '옮기기', body: '캡슐은 한 번에 하나씩, 튜브에서 튜브로. 빈 튜브나 같은 색 캡슐 위로 옮길 수 있습니다.' },
        { title: '정리하기', body: '한 가지 색으로 채워진 튜브는 같은 색의 미니 기계로 빨려 들어갑니다. 모든 색을 정리하면 레벨 클리어.' },
        { title: '느긋하게', body: '시간 제한도, 실패도 없습니다. 레벨마다 되돌리기 3번, 언제든 다시 하기 버튼.' },
        { title: '별 3개를 노리세요', body: '레벨 목표와 비교한 이동 횟수에 따라 별 1개에서 3개까지.' },
        { title: '코인 모으기', body: '레벨을 깨면 코인 1개. 다시 한 레벨은 기록을 깼을 때만 코인을 줍니다. 뽑기 한 번은 코인 2개이고, 첫 캡슐은 무료입니다.' },
        { title: '돌리기', body: '코인을 투입구에 넣고 손가락으로 손잡이를 돌리면 캡슐이 톡. 터치해서 열어 보세요.' },
      ],
    },
    {
      id: 'gallery-device',
      title: '튜브에서 선반까지',
    },
    {
      id: 'features',
      kicker: '즐길 거리',
      title: '주머니 속 캡슐 뽑기 가게',
      items: [
        {
          title: '검증된 200개 레벨',
          body: '3~9가지 색, 캡슐 3~5개가 들어가는 튜브. 모든 레벨은 솔버로 풀 수 있는지 확인했습니다. 200레벨 이후에는 색과 튜브를 바꾼 변형으로 끝없이 즐길 수 있습니다.',
        },
        {
          title: '네 가지 시리즈',
          body: '고양이 컬렉션, 일본 음식, 바다 친구들, 그리고 한국 디저트의 서울 카페(달고나, 붕어빵, 빙수, 호떡, 바리스타 곰…). 시리즈마다 피규어 12종.',
        },
        {
          title: 'N, R, SR, SSR, SECRET',
          body: '시리즈마다 N 5종, R 3종, SR 2종, SSR 1종, SECRET 1종이며, 확률은 55, 25, 14, 5, 1%입니다. 한 기계에서 4번 연속 중복이 나오면 다음 뽑기는 반드시 아직 없는 피규어입니다.',
        },
        {
          title: '쓸모 있는 중복',
          body: '중복 피규어는 레벨이 올라 MAX까지 성장합니다: 받침대, 후광, 반짝이, 그리고 애니메이션.',
        },
        {
          title: '컬렉터 레벨',
          body: '피규어를 얻을 때마다 경험치. 일본 음식 기계는 레벨 3, 바다 친구들은 6, 서울 카페는 8에 열립니다. 레벨 5가 되면 방의 자리가 8개에서 16개로 늘어납니다.',
        },
        {
          title: '도감',
          body: 'No.001부터 No.048까지 번호가 붙은 카드 카탈로그. 새로 온 피규어에는 NEW 배지가 붙습니다.',
        },
        {
          title: '내 방',
          body: '피규어를 전시하거나 «자동 배치» 버튼에 맡기세요. 터치하면 하트와 함께 폴짝 뜁니다. 시리즈를 완성할 때마다 테마가 열립니다: 고양이 하우스, 스시 바, 아쿠아리움, 서울 카페.',
        },
        {
          title: '끝까지 귀엽게',
          body: '빨강과 하양 줄무늬 차양, 리본, 벚꽃잎, 오르골 음악, 효과음과 진동. 모두 설정에서 끌 수 있습니다. 한국어, 일본어, 영어, 프랑스어 지원.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: '개인정보',
      title: '계정 없이, 사용 통계 없이',
      body: '코인, 피규어, 진행 상황, 방은 기기에 저장됩니다. 게임은 완전히 오프라인으로 즐길 수 있으며, 연결은 광고(Google AdMob)와 그 동의 화면을 불러올 때만 쓰입니다. 인앱 구매도 통계 도구도 없습니다. 실행 시 Google의 동의 화면, 이어서 iPhone에서는 Apple의 추적 허용 요청으로 선택할 수 있고, 동의가 필요한 지역에서는 설정의 «광고 개인정보 설정» 버튼으로 다시 열 수 있습니다.',
    },
  ],

  cta: {
    title: 'App Store와 Google Play에 곧 출시',
    body: '캡슐 컬렉터가 곧 iPhone과 Android에 찾아옵니다. 그동안 다른 게임도 둘러보세요.',
  },

  meta: {
    title: 'Capsule Collector — 캡슐 정렬 퍼즐과 귀여운 뽑기',
    description:
      'iPhone과 Android용 캡슐 정렬 퍼즐. 200개의 레벨, 모으는 코인, 일본식 캡슐 뽑기 기계. 4개 시리즈 48종의 귀여운 피규어를 모아 내 방에 전시하세요.',
  },

  chips: [],
};

const es: AppCopy = {
  tagline: 'Puzle de ordenar y cápsulas para coleccionar · en iPhone y Android',

  headline: {
    lead: 'Ordena. Gira. Colecciona.',
    highlight: 'Una cápsula, una sorpresa.',
  },

  intro:
    'En Capsule Collector mueves cápsulas de colores de un tubo a otro hasta que cada tubo tenga un solo color: entonces se va volando a la minimáquina de su color. Cada nivel superado da una moneda; con dos monedas giras la manivela de una máquina de cápsulas al estilo japonés, y dentro te espera una figura kawaii.',

  stats: [
    { value: '200', label: 'niveles, y después variantes sin fin' },
    { value: '48', label: 'figuras para coleccionar' },
    { value: '4', label: 'series, con su máquina cada una' },
    { value: '5', label: 'decorados para tu habitación' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Cómo se juega',
      title: 'Ordenar, ganar una moneda, girar la manivela',
      items: [
        { title: 'Mueve', body: 'Una cápsula cada vez, de un tubo a otro: a un tubo vacío o encima de una cápsula del mismo color.' },
        { title: 'Ordena', body: 'Un tubo lleno de un solo color es absorbido por la minimáquina de su color. El nivel se gana cuando todos los colores están ordenados.' },
        { title: 'Sin estrés', body: 'Sin reloj y sin derrotas. Tres deshacer por nivel, y puedes reiniciar el nivel cuando quieras.' },
        { title: 'A por tres estrellas', body: 'De una a tres estrellas, según tu número de movimientos comparado con el objetivo del nivel.' },
        { title: 'Gana monedas', body: 'Un nivel superado da una moneda; si lo repites, solo paga cuando bates tu récord. Una tirada cuesta dos monedas, y la primera cápsula es de regalo.' },
        { title: 'Gira', body: 'Mete la moneda en la ranura, gira la manivela con el dedo, cae la cápsula: tócala para abrirla.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Del tubo a la estantería',
    },
    {
      id: 'features',
      kicker: 'Lo que te espera',
      title: 'Una tienda de gachapon en el bolsillo',
      items: [
        {
          title: '200 niveles verificados',
          body: 'De 3 a 9 colores, tubos de 3 a 5 cápsulas, y cada nivel comprobado como resoluble por un solucionador. Después del 200, variantes con los colores y los tubos cambiados permiten jugar sin fin.',
        },
        {
          title: 'Cuatro series',
          body: 'Colección Neko (gatos), Comida japonesa, Criaturas marinas y Café de Seúl, con sus dulces coreanos: dalgona, bungeoppang, bingsu, hotteok, un oso barista… Doce figuras por serie.',
        },
        {
          title: 'N, R, SR, SSR, SECRET',
          body: 'Cada serie tiene 5 N, 3 R, 2 SR, 1 SSR y 1 SECRET, que salen al 55, 25, 14, 5 y 1 %. Tras cuatro repetidas seguidas en una máquina, la siguiente tirada es por fuerza una figura que nunca has tenido.',
        },
        {
          title: 'Repetidas que sirven',
          body: 'Una figura repetida sube de nivel hasta el nivel MAX: peana, halo, purpurina y, por último, animación.',
        },
        {
          title: 'Nivel de coleccionista',
          body: 'Cada figura da XP. La máquina de Comida japonesa se abre en el nivel 3, Criaturas marinas en el 6 y Café de Seúl en el 8; en el nivel 5, la habitación pasa de 8 a 16 huecos.',
        },
        {
          title: 'El álbum',
          body: 'Un catálogo de cartas numeradas de No.001 a No.048, con una insignia NEW en cada recién llegada.',
        },
        {
          title: 'Tu habitación',
          body: 'Expón tus figuras o deja que el relleno automático lo haga por ti. Toca una: salta con corazones. Cada serie completada desbloquea un decorado: Casa de los gatos, Barra de sushi, Acuario y Café de Seúl.',
        },
        {
          title: 'Kawaii hasta el final',
          body: 'Un toldo de rayas rojas y blancas, lazos, pétalos de sakura, música de caja de música, efectos de sonido y vibraciones: cada uno se desactiva en los Ajustes. La app está en francés, inglés, japonés y coreano.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacidad',
      title: 'Sin cuenta y sin medición de uso',
      body: 'Las monedas, las figuras, el progreso y la habitación se guardan en el dispositivo. El juego funciona por completo sin conexión: la red solo sirve para cargar los anuncios (Google AdMob) y su formulario de consentimiento. Ninguna compra integrada, ninguna herramienta de estadísticas. Al iniciar, el formulario de consentimiento de Google y después, en iPhone, la solicitud de seguimiento de Apple te dejan elegir, y donde el consentimiento es obligatorio, el botón «Ad privacy choices» de los Ajustes lo vuelve a abrir.',
    },
  ],

  cta: {
    title: 'Muy pronto en el App Store y Google Play',
    body: 'Capsule Collector llega pronto a iPhone y Android. Mientras tanto, descubre nuestros otros juegos.',
  },

  meta: {
    title: 'Capsule Collector — puzle de ordenar y cápsulas kawaii',
    description:
      'Un puzle de ordenar cápsulas para iPhone y Android: 200 niveles, monedas por ganar y una máquina de cápsulas al estilo japonés. Colecciona 48 figuras kawaii en 4 series y exponlas en tu habitación.',
  },

  chips: [],
};

const de: AppCopy = {
  tagline: 'Sortierpuzzle und Kapseln zum Sammeln · für iPhone und Android',

  headline: {
    lead: 'Sortieren. Drehen. Sammeln.',
    highlight: 'Eine Kapsel, eine Überraschung.',
  },

  intro:
    'In Capsule Collector schiebst du bunte Kapseln von Röhre zu Röhre, bis jede Röhre nur noch eine Farbe enthält: Dann saust sie in den Mini-Automaten ihrer Farbe. Jedes geschaffte Level bringt eine Münze; mit zwei Münzen drehst du die Kurbel eines Kapselautomaten nach japanischem Vorbild, und darin wartet eine Kawaii-Figur auf dich.',

  stats: [
    { value: '200', label: 'Level, danach endlose Varianten' },
    { value: '48', label: 'Figuren zum Sammeln' },
    { value: '4', label: 'Serien mit je einem Automaten' },
    { value: '5', label: 'Dekors für dein Zimmer' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'So wird gespielt',
      title: 'Sortieren, eine Münze verdienen, die Kurbel drehen',
      items: [
        { title: 'Verschieben', body: 'Immer eine Kapsel, von einer Röhre zur anderen: in eine leere Röhre oder auf eine Kapsel derselben Farbe.' },
        { title: 'Einsortieren', body: 'Eine Röhre mit nur einer Farbe wird in den Mini-Automaten ihrer Farbe gesaugt. Das Level ist geschafft, wenn alle Farben einsortiert sind.' },
        { title: 'Ohne Stress', body: 'Keine Zeitbegrenzung, kein Scheitern. Drei Rückgängig-Züge pro Level, und neu starten kannst du jederzeit.' },
        { title: 'Drei Sterne', body: 'Ein bis drei Sterne, je nachdem, wie viele Züge du im Vergleich zum Ziel des Levels brauchst.' },
        { title: 'Münzen verdienen', body: 'Ein geschafftes Level bringt eine Münze; ein wiederholtes nur, wenn du deinen Rekord brichst. Eine Drehung kostet zwei Münzen, und die erste Kapsel ist gratis.' },
        { title: 'Drehen', body: 'Steck die Münze in den Schlitz, dreh die Kurbel mit dem Finger, die Kapsel fällt heraus: Tipp sie an, um sie zu öffnen.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Von der Röhre ins Regal',
    },
    {
      id: 'features',
      kicker: 'Was dich erwartet',
      title: 'Ein Gachapon-Laden für die Hosentasche',
      items: [
        {
          title: '200 geprüfte Level',
          body: '3 bis 9 Farben, Röhren für 3 bis 5 Kapseln, und jedes Level von einem Löser als lösbar geprüft. Nach Level 200 geht es mit Varianten weiter, in denen Farben und Röhren vertauscht sind – ohne Ende.',
        },
        {
          title: 'Vier Serien',
          body: 'Neko-Kollektion (Katzen), Japanische Küche, Meerestiere und Seoul-Café mit koreanischen Leckereien: Dalgona, Bungeoppang, Bingsu, Hotteok, ein Barista-Bär… Zwölf Figuren pro Serie.',
        },
        {
          title: 'N, R, SR, SSR, SECRET',
          body: 'Jede Serie hat 5 N, 3 R, 2 SR, 1 SSR und 1 SECRET, gezogen mit 55, 25, 14, 5 und 1 %. Nach vier Doppelten in Folge an einem Automaten ist die nächste Ziehung garantiert eine Figur, die du noch nie hattest.',
        },
        {
          title: 'Doppelte lohnen sich',
          body: 'Eine doppelte Figur steigt eine Stufe auf, bis zur Stufe MAX: Sockel, Heiligenschein, Glitzer und zuletzt eine Animation.',
        },
        {
          title: 'Sammlerstufe',
          body: 'Jede Figur bringt XP. Der Automat Japanische Küche öffnet auf Stufe 3, Meerestiere auf 6 und Seoul-Café auf 8; auf Stufe 5 wächst das Zimmer von 8 auf 16 Plätze.',
        },
        {
          title: 'Das Album',
          body: 'Ein Katalog mit Karten von No.001 bis No.048 und einem NEW-Abzeichen für jeden Neuzugang.',
        },
        {
          title: 'Dein Zimmer',
          body: 'Stell deine Figuren aus oder überlass das der automatischen Füllfunktion. Tipp eine an: Sie hüpft mit Herzchen. Jede vollständige Serie schaltet ein Dekor frei: Katzenhaus, Sushi-Bar, Aquarium und Seoul-Café.',
        },
        {
          title: 'Kawaii bis ins Detail',
          body: 'Eine rot-weiß gestreifte Markise, Schleifen, Kirschblüten, Spieluhrmusik, Soundeffekte und Vibrationen – jedes davon lässt sich in den Einstellungen abschalten. Die App ist auf Französisch, Englisch, Japanisch und Koreanisch.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Datenschutz',
      title: 'Kein Konto, keine Nutzungsmessung',
      body: 'Münzen, Figuren, Fortschritt und Zimmer werden auf dem Gerät gespeichert. Das Spiel läuft komplett offline: Die Verbindung dient nur dazu, die Werbung (Google AdMob) und ihr Einwilligungsformular zu laden. Keine In-App-Käufe, kein Statistikwerkzeug. Beim Start lassen dir das Einwilligungsformular von Google und danach, auf dem iPhone, die Tracking-Anfrage von Apple die Wahl, und wo eine Einwilligung erforderlich ist, öffnet die Schaltfläche „Ad privacy choices“ in den Einstellungen es erneut.',
    },
  ],

  cta: {
    title: 'Bald im App Store und bei Google Play',
    body: 'Capsule Collector kommt bald auf iPhone und Android. Bis dahin: Entdecke unsere anderen Spiele.',
  },

  meta: {
    title: 'Capsule Collector — Sortierpuzzle und Kawaii-Kapseln',
    description:
      'Ein Kapsel-Sortierpuzzle für iPhone und Android: 200 Level, Münzen zum Verdienen und ein Kapselautomat nach japanischem Vorbild. Sammle 48 Kawaii-Figuren in 4 Serien und stell sie in deinem Zimmer aus.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en, ja, ko, es, de };
