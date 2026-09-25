import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/elastichero.html`.
 *
 * Écrits le 25 septembre 2026 d'après le code de
 * `/Volumes/Appcraft/MAQUETTES/Elastic_Hero` : 4 sortes de prises
 * (`lib/game/components/anchor_point.dart`), abeilles et boules à piques
 * (`components/enemies`), piques, barres tournantes et champignons
 * (`components/obstacles`), 5 bonus (`progress/power_up.dart`), 9 défis puis
 * des défis sans fin (`progress/challenges.dart`), 12 couleurs, 12 chapeaux et
 * 9 traînées (`skins/shop_items.dart`), 10 points par mètre
 * (`config/level_config.dart`), classements SEMAINE et TOUJOURS (Unity Gaming
 * Services, `online/*`), 45 fichiers de traduction (`lib/l10n/app_*.arb`).
 * Le jeu est financé par AdMob, sans aucun achat intégré : la boutique ne
 * prend que des bonbons gagnés en jouant.
 */
const fr: AppCopy = {
  tagline: 'Jeu d’escalade élastique · gratuit sur iPhone, iPad et Android',

  headline: {
    lead: 'Étirez. Visez. Lâchez.',
    highlight: 'Et grimpez sans fin.',
  },

  intro:
    'Dans Elastic Hero, vous guidez un héros en gelée rose aux bras et aux jambes élastiques. Tirez une main vers une boule en bonbon pour vous y accrocher, étirez un pied, puis lâchez : il part comme une fronde. La tour n’a pas de sommet, et chaque mètre gravi rapporte dix points.',

  stats: [
    { value: '4', label: 'sortes de prises' },
    { value: '5', label: 'bonus' },
    { value: '9', label: 'défis, puis des défis sans fin' },
    { value: '33', label: 'objets à débloquer' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Le principe',
      title: 'Un doigt, quatre membres, une fronde',
      items: [
        { title: 'Attrapez', body: 'Tirez une main vers une boule jaune : elle s’y accroche et le héros reste suspendu.' },
        { title: 'Étirez', body: 'Tirez un pied vers le bas : le membre s’allonge comme un élastique, et une trajectoire en pointillés montre où vous allez partir.' },
        { title: 'Lâchez', body: 'Relâchez et le héros est catapulté vers le haut. Plus l’étirement est fort, plus le saut est grand.' },
        { title: 'Un à la fois', body: 'Une seule prise tient : attraper une nouvelle boule fait lâcher la précédente.' },
        { title: 'Gare à la tête', body: 'Un bras ou une jambe piqué reste étourdi un instant. Si c’est le corps qui touche une abeille ou des piques, la partie s’arrête.' },
        { title: 'Ne tombez pas', body: 'Si le héros sort par le bas de l’écran, c’est perdu. Une vidéo facultative permet de continuer, une fois par partie.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'En pleine ascension',
    },
    {
      id: 'features',
      kicker: 'Ce qui vous attend',
      title: 'Une tour sans fin, et tout ce qu’on y croise',
      items: [
        {
          title: 'Le ciel change',
          body: 'Le jour, puis le coucher de soleil, puis la nuit étoilée : le ciel suit votre hauteur. Dépassez la ligne de votre record pour le battre.',
        },
        {
          title: 'Quatre prises',
          body: 'La boule classique, la rebondissante qui vous propulse (BOING !), le biscuit fragile qui casse si vous traînez (CRAC !) et le glaçon sur lequel la main glisse.',
        },
        {
          title: 'Abeilles et piques',
          body: 'Des abeilles patrouillent, des boules à piques tournent autour des prises, des barres en sucre d’orge pivotent, des piques garnissent les murs. Un champignon en gelée vous renvoie vers le haut. Une main lancée assez vite assomme une abeille : BONK !',
        },
        {
          title: 'Cinq bonus',
          body: 'Gants de boxe, Super élastique, Super boxeur, Étoile (score doublé) et Pluie de bonbons, à attraper dans des bulles le long de la montée. Un seul à la fois : le suivant remplace le précédent.',
        },
        {
          title: 'Défis et combos',
          body: 'Neuf défis apprennent le jeu — prises, lancers, enchaînements, rebonds, glaçons —, puis des défis sans fin prennent le relais. Enchaînez les prises toujours plus haut sans vous poser pour faire monter le combo.',
        },
        {
          title: 'La boutique',
          body: '12 couleurs, 12 chapeaux et 9 traînées à combiner, payés avec les bonbons ramassés en jouant. Aucun achat en argent réel.',
        },
        {
          title: 'Classements',
          body: 'Deux classements communs à l’iPhone, à l’iPad et à Android : la SEMAINE, remise à zéro chaque lundi, et TOUJOURS. Le top 50, votre rang et un pseudo que vous choisissez.',
        },
        {
          title: 'Tout en cartoon',
          body: 'Un héros tout en gelée, des musiques et des bruitages composés pour le jeu, des vibrations à chaque prise, et 45 langues.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte, un pseudo et c’est tout',
      body: 'Records, bonbons, boutique et défis sont enregistrés sur l’appareil. Pour le classement, le jeu crée un joueur anonyme chez Unity Gaming Services et y envoie vos scores sous votre pseudo. La publicité (Google AdMob) et la mesure d’audience (Firebase Analytics, sans identifiant publicitaire) complètent les échanges. En Europe, l’écran de consentement vous laisse le choix dès le premier lancement, et le bouton « Confidentialité » des Réglages le rouvre.',
    },
  ],

  cta: {
    title: 'Bientôt sur l’App Store et Google Play',
    body: 'Elastic Hero sera gratuit sur iPhone, iPad et Android. En attendant, découvrez nos autres jeux.',
  },

  meta: {
    title: 'Elastic Hero — le jeu d’escalade élastique',
    description:
      'Un jeu d’escalade sans fin, gratuit sur iPhone, iPad et Android : étirez les bras et les jambes d’un héros en gelée, accrochez les boules en bonbon et catapultez-vous toujours plus haut. Cinq bonus, des défis et des classements mondiaux.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Stretchy climbing game · free on iPhone, iPad and Android',

  headline: {
    lead: 'Stretch. Aim. Let go.',
    highlight: 'And climb forever.',
  },

  intro:
    'In Elastic Hero, you guide a pink jelly hero with rubbery arms and legs. Pull a hand towards a candy knob to grab it, stretch a foot, then let go: off it flies like a slingshot. The tower has no top, and every meter climbed is worth ten points.',

  stats: [
    { value: '4', label: 'kinds of knobs' },
    { value: '5', label: 'power-ups' },
    { value: '9', label: 'challenges, then endless ones' },
    { value: '33', label: 'items to unlock' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How it plays',
      title: 'One finger, four limbs, one slingshot',
      items: [
        { title: 'Grab', body: 'Pull a hand towards a yellow knob: it holds on and the hero hangs there.' },
        { title: 'Stretch', body: 'Pull a foot downwards: the limb stretches like a rubber band, and a dotted trajectory shows where you’ll fly.' },
        { title: 'Let go', body: 'Release and the hero is flung upwards. The harder the stretch, the bigger the jump.' },
        { title: 'One at a time', body: 'Only one grip holds: grabbing a new knob lets go of the previous one.' },
        { title: 'Mind your head', body: 'A stung arm or leg is stunned for a moment. If the body touches a bee or spikes, the run is over.' },
        { title: 'Don’t fall', body: 'If the hero drops off the bottom of the screen, you lose. An optional video lets you continue, once per run.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Mid-climb',
    },
    {
      id: 'features',
      kicker: 'What awaits you',
      title: 'An endless tower, and everything on the way',
      items: [
        {
          title: 'A changing sky',
          body: 'Daylight, then sunset, then a starry night: the sky follows your height. Pass the line of your record to beat it.',
        },
        {
          title: 'Four knobs',
          body: 'The classic knob, the bouncy one that launches you (BOING!), the fragile cookie that breaks if you linger (CRACK!) and the ice knob your hand slides off.',
        },
        {
          title: 'Bees and spikes',
          body: 'Bees patrol, spike balls circle the knobs, candy-cane bars spin and spikes line the walls. A jelly mushroom bounces you back up. A hand thrown fast enough knocks a bee out: BONK!',
        },
        {
          title: 'Five power-ups',
          body: 'Boxing Gloves, Super Elastic, Super Boxer, Star (double score) and Candy Rain, caught in bubbles along the climb. One at a time: the next one replaces the last.',
        },
        {
          title: 'Challenges and combos',
          body: 'Nine challenges teach the game — grabs, launches, chains, bounces, ice — then endless challenges take over. Chain grabs ever higher without landing to build your combo.',
        },
        {
          title: 'The shop',
          body: '12 colors, 12 hats and 9 trails to mix and match, paid for with candies collected while playing. No real-money purchases.',
        },
        {
          title: 'Leaderboards',
          body: 'Two leaderboards shared by iPhone, iPad and Android: WEEK, reset every Monday, and ALL TIME. The top 50, your rank and a nickname of your choice.',
        },
        {
          title: 'All cartoon',
          body: 'A hero made of jelly, music and sound effects made for the game, vibrations on every grab, and 45 languages.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account, just a nickname',
      body: 'Records, candies, shop and challenges are saved on the device. For the leaderboard, the game creates an anonymous player with Unity Gaming Services and sends your scores there under your nickname. Advertising (Google AdMob) and analytics (Firebase Analytics, without the advertising identifier) make up the rest of the traffic. In Europe, the consent form lets you choose from the first launch, and the “Privacy” button in the Settings reopens it.',
    },
  ],

  cta: {
    title: 'Coming soon to the App Store and Google Play',
    body: 'Elastic Hero will be free on iPhone, iPad and Android. Meanwhile, have a look at our other games.',
  },

  meta: {
    title: 'Elastic Hero — the stretchy climbing game',
    description:
      'A free endless climbing game for iPhone, iPad and Android: stretch the arms and legs of a jelly hero, grab candy knobs and fling yourself ever higher. Five power-ups, challenges and global leaderboards.',
  },

  chips: [],
};

const ja: AppCopy = {
  tagline: '伸びるクライミングゲーム · iPhone・iPad・Androidで無料',

  headline: {
    lead: '伸ばして、狙って、放す。',
    highlight: 'どこまでも登ろう。',
  },

  intro:
    'Elastic Heroでは、ゴムのように伸びる腕と脚をもつピンクのゼリーのヒーローを操ります。手をキャンディのノブへ引っぱってつかまり、足を伸ばして放せば、パチンコのように飛んでいきます。タワーに頂上はなく、1メートル登るごとに10ポイント。',

  stats: [
    { value: '4', label: '種類のノブ' },
    { value: '5', label: 'つのパワーアップ' },
    { value: '9', label: 'のチャレンジ、その先はエンドレス' },
    { value: '33', label: '個のアイテム' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: '遊びかた',
      title: '指1本、手足4本、パチンコ1つ',
      items: [
        { title: 'つかむ', body: '手を黄色いノブへ引っぱると、つかまってヒーローがぶら下がります。' },
        { title: '伸ばす', body: '足を下へ引っぱると、手足がゴムのように伸び、点線の軌道が飛ぶ先を示します。' },
        { title: '放す', body: '指を離すとヒーローが上へ飛び出します。強く伸ばすほど大きくジャンプ。' },
        { title: 'つかめるのは1本だけ', body: '新しいノブをつかむと、前のノブは放れます。' },
        { title: '頭に注意', body: '刺された腕や脚は少しのあいだしびれます。体がハチやトゲに触れるとゲームオーバー。' },
        { title: '落ちないで', body: 'ヒーローが画面の下に消えたら負け。任意の動画を見れば、1回のプレイにつき1度だけ続けられます。' },
      ],
    },
    {
      id: 'gallery-device',
      title: '登っている最中',
    },
    {
      id: 'features',
      kicker: 'お楽しみ',
      title: '終わりのないタワーと、そこで出会うもの',
      items: [
        {
          title: '高さで変わる空',
          body: '昼から夕焼け、そして星空へ。空はあなたの高さに合わせて変わります。記録のラインを越えれば新記録です。',
        },
        {
          title: '4種類のノブ',
          body: 'ふつうのノブ、飛ばしてくれるバウンドノブ（BOING!）、ぐずぐずすると割れるクッキー（CRACK!）、手がすべる氷。',
        },
        {
          title: 'ハチ、トゲ、回るバー',
          body: 'ハチが飛び回り、トゲボールがノブのまわりを回り、キャンディのバーが回転し、壁にはトゲ。ゼリーのキノコは上へはね返してくれます。すばやく振った手でハチをノックアウト：BONK!',
        },
        {
          title: '5つのパワーアップ',
          body: 'ボクシンググローブ、スーパーゴム、スーパーボクサー、スター（スコア2倍）、キャンディの雨。泡の中にあり、効果は1つずつ：新しいものが前のものと入れ替わります。',
        },
        {
          title: 'チャレンジとコンボ',
          body: '9つのチャレンジで遊びかたを覚え、その先はエンドレスのチャレンジへ。着地せずにより高いノブをつかみ続けてコンボを伸ばそう。',
        },
        {
          title: 'キャンディのショップ',
          body: '12色、12の帽子、9つの軌跡を組み合わせて。支払いはプレイ中に集めたキャンディで、現金での購入はありません。',
        },
        {
          title: '世界ランキング',
          body: 'iPhone・iPad・Android共通の2つのランキング：毎週月曜にリセットされる「週間」と「総合」。トップ50、あなたの順位、好きなニックネーム。',
        },
        {
          title: 'カートゥーンの世界',
          body: 'ゼリーでできたヒーロー、このゲームのために作った音楽と効果音、つかむたびの振動、そして45の言語。',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'プライバシー',
      title: 'アカウント不要、ニックネームだけ',
      body: '記録、キャンディ、ショップ、チャレンジは端末に保存されます。ランキングのために、ゲームはUnity Gaming Servicesに匿名のプレイヤーを作成し、ニックネームとともにスコアを送ります。そのほかの通信は広告（Google AdMob）とアクセス解析（Firebase Analytics、広告IDは使いません）です。ヨーロッパでは初回起動時の同意画面で選ぶことができ、設定の「プライバシー」ボタンからいつでも開き直せます。',
    },
  ],

  cta: {
    title: 'App StoreとGoogle Playに近日登場',
    body: 'Elastic HeroはiPhone・iPad・Androidで無料になります。それまでは、ほかのゲームもどうぞ。',
  },

  meta: {
    title: 'Elastic Hero — 伸びるクライミングゲーム',
    description:
      'iPhone・iPad・Android向けの無料エンドレスクライミングゲーム。ゼリーのヒーローの腕と脚を伸ばし、キャンディのノブをつかんで、どこまでも高く飛び上がろう。5つのパワーアップ、チャレンジ、世界ランキング。',
  },

  chips: [],
};

const ko: AppCopy = {
  tagline: '쭉쭉 늘어나는 등반 게임 · iPhone, iPad, Android 무료',

  headline: {
    lead: '늘리고, 조준하고, 놓으세요.',
    highlight: '그리고 끝없이 오르세요.',
  },

  intro:
    'Elastic Hero에서는 고무줄처럼 늘어나는 팔다리를 가진 분홍 젤리 히어로를 조종합니다. 손을 사탕 손잡이 쪽으로 당겨 붙잡고, 발을 늘렸다가 놓으면 새총처럼 날아갑니다. 탑에는 꼭대기가 없고, 1미터 오를 때마다 10점을 얻습니다.',

  stats: [
    { value: '4', label: '가지 손잡이' },
    { value: '5', label: '가지 파워업' },
    { value: '9', label: '개의 도전, 그다음은 끝없는 도전' },
    { value: '33', label: '개의 잠금 해제 아이템' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: '플레이 방법',
      title: '손가락 하나, 팔다리 넷, 새총 하나',
      items: [
        { title: '잡기', body: '손을 노란 손잡이 쪽으로 당기면 붙잡고 히어로가 매달립니다.' },
        { title: '늘리기', body: '발을 아래로 당기면 팔다리가 고무줄처럼 늘어나고, 점선 궤적이 날아갈 곳을 보여 줍니다.' },
        { title: '놓기', body: '손을 떼면 히어로가 위로 튕겨 나갑니다. 세게 늘릴수록 더 높이 뛰어오릅니다.' },
        { title: '한 번에 하나만', body: '붙잡는 것은 하나뿐: 새 손잡이를 잡으면 이전 손잡이는 놓습니다.' },
        { title: '머리를 조심하세요', body: '쏘인 팔이나 다리는 잠시 마비됩니다. 몸이 벌이나 가시에 닿으면 게임 오버입니다.' },
        { title: '떨어지지 마세요', body: '히어로가 화면 아래로 사라지면 패배입니다. 선택형 영상을 보면 한 판에 한 번 이어서 할 수 있습니다.' },
      ],
    },
    {
      id: 'gallery-device',
      title: '오르는 중',
    },
    {
      id: 'features',
      kicker: '즐길 거리',
      title: '끝없는 탑, 그리고 그 길에서 만나는 것들',
      items: [
        {
          title: '높이에 따라 바뀌는 하늘',
          body: '낮에서 노을로, 그리고 별이 빛나는 밤으로. 하늘은 당신의 높이를 따라 바뀝니다. 기록선을 넘으면 새 기록입니다.',
        },
        {
          title: '네 가지 손잡이',
          body: '기본 손잡이, 튕겨 주는 탱탱한 손잡이(BOING!), 머뭇거리면 부서지는 쿠키(CRACK!), 손이 미끄러지는 얼음.',
        },
        {
          title: '벌, 가시, 회전 막대',
          body: '벌이 날아다니고, 가시 공이 손잡이 주위를 돌고, 사탕 막대가 회전하고, 벽에는 가시가 있습니다. 젤리 버섯은 위로 튕겨 줍니다. 빠르게 휘두른 손으로 벌을 기절시키세요: BONK!',
        },
        {
          title: '다섯 가지 파워업',
          body: '권투 장갑, 슈퍼 고무줄, 슈퍼 복서, 별(점수 2배), 사탕 비. 오르는 길의 거품 속에 있으며 한 번에 하나씩: 새 파워업이 이전 것을 대신합니다.',
        },
        {
          title: '도전과 콤보',
          body: '아홉 개의 도전으로 게임을 익히고, 그다음은 끝없는 도전이 이어집니다. 착지하지 않고 더 높은 손잡이를 연달아 잡아 콤보를 올리세요.',
        },
        {
          title: '사탕 상점',
          body: '12가지 색, 12가지 모자, 9가지 궤적을 조합하세요. 게임에서 모은 사탕으로 사며, 현금 결제는 없습니다.',
        },
        {
          title: '세계 순위표',
          body: 'iPhone, iPad, Android 공통의 두 순위표: 매주 월요일 초기화되는 주간과 전체. 상위 50명, 내 순위, 직접 고르는 닉네임.',
        },
        {
          title: '카툰 세계',
          body: '젤리로 된 히어로, 이 게임을 위해 만든 음악과 효과음, 잡을 때마다의 진동, 그리고 45개 언어.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: '개인정보',
      title: '계정 없이, 닉네임 하나면 충분',
      body: '기록, 사탕, 상점, 도전은 기기에 저장됩니다. 순위표를 위해 게임은 Unity Gaming Services에 익명 플레이어를 만들고 닉네임과 함께 점수를 보냅니다. 그 밖의 통신은 광고(Google AdMob)와 사용 통계(Firebase Analytics, 광고 식별자 없음)입니다. 유럽에서는 첫 실행 때 동의 화면에서 선택할 수 있으며, 설정의 «개인정보» 버튼으로 언제든 다시 열 수 있습니다.',
    },
  ],

  cta: {
    title: 'App Store와 Google Play에 곧 출시',
    body: 'Elastic Hero는 iPhone, iPad, Android에서 무료로 제공될 예정입니다. 그동안 다른 게임도 둘러보세요.',
  },

  meta: {
    title: 'Elastic Hero — 쭉쭉 늘어나는 등반 게임',
    description:
      'iPhone, iPad, Android용 무료 무한 등반 게임. 젤리 히어로의 팔다리를 늘려 사탕 손잡이를 잡고 더 높이 튕겨 올라가세요. 5가지 파워업, 도전 과제, 세계 순위표.',
  },

  chips: [],
};

const es: AppCopy = {
  tagline: 'Juego de escalada elástica · gratis en iPhone, iPad y Android',

  headline: {
    lead: 'Estira. Apunta. Suelta.',
    highlight: 'Y sube sin parar.',
  },

  intro:
    'En Elastic Hero guías a un héroe de gelatina rosa con brazos y piernas elásticos. Tira de una mano hacia un pomo de caramelo para agarrarte, estira un pie y suelta: sale disparado como con un tirachinas. La torre no tiene cima, y cada metro que subes vale diez puntos.',

  stats: [
    { value: '4', label: 'tipos de pomos' },
    { value: '5', label: 'potenciadores' },
    { value: '9', label: 'retos, y después retos sin fin' },
    { value: '33', label: 'objetos por desbloquear' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Cómo se juega',
      title: 'Un dedo, cuatro extremidades, un tirachinas',
      items: [
        { title: 'Agarra', body: 'Tira de una mano hacia un pomo amarillo: se agarra y el héroe queda colgado.' },
        { title: 'Estira', body: 'Tira de un pie hacia abajo: la extremidad se estira como una goma y una trayectoria punteada muestra hacia dónde vas a salir.' },
        { title: 'Suelta', body: 'Suelta y el héroe sale catapultado hacia arriba. Cuanto más estiras, más grande es el salto.' },
        { title: 'De una en una', body: 'Solo aguanta un agarre: al coger un pomo nuevo se suelta el anterior.' },
        { title: 'Cuidado con la cabeza', body: 'Un brazo o una pierna picados se quedan aturdidos un momento. Si es el cuerpo el que toca una abeja o unos pinchos, se acaba la partida.' },
        { title: 'No te caigas', body: 'Si el héroe sale por la parte de abajo de la pantalla, pierdes. Un vídeo opcional te deja continuar, una vez por partida.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'En plena escalada',
    },
    {
      id: 'features',
      kicker: 'Lo que te espera',
      title: 'Una torre sin fin, y todo lo que hay por el camino',
      items: [
        {
          title: 'El cielo cambia',
          body: 'El día, después la puesta de sol y por fin la noche estrellada: el cielo sigue tu altura. Supera la línea de tu récord para batirlo.',
        },
        {
          title: 'Cuatro pomos',
          body: 'El pomo clásico, el saltarín que te impulsa (¡BOING!), la galleta frágil que se rompe si tardas (¡CRAC!) y el hielo en el que resbala la mano.',
        },
        {
          title: 'Abejas y pinchos',
          body: 'Las abejas patrullan, las bolas de pinchos giran alrededor de los pomos, las barras de caramelo dan vueltas y los muros tienen pinchos. Una seta de gelatina te devuelve hacia arriba. Una mano lanzada con fuerza deja K.O. a una abeja: ¡BONK!',
        },
        {
          title: 'Cinco potenciadores',
          body: 'Guantes de boxeo, Súper elástico, Súper boxeador, Estrella (puntuación doble) y Lluvia de caramelos, dentro de burbujas a lo largo de la subida. Uno cada vez: el siguiente sustituye al anterior.',
        },
        {
          title: 'Retos y combos',
          body: 'Nueve retos te enseñan el juego —agarres, lanzamientos, cadenas, rebotes, hielo— y después llegan los retos sin fin. Encadena agarres cada vez más altos sin posarte para subir el combo.',
        },
        {
          title: 'La tienda',
          body: '12 colores, 12 sombreros y 9 estelas para combinar, que se pagan con los caramelos recogidos al jugar. Sin compras con dinero real.',
        },
        {
          title: 'Clasificaciones',
          body: 'Dos clasificaciones compartidas por iPhone, iPad y Android: la SEMANA, que se reinicia cada lunes, y SIEMPRE. El top 50, tu puesto y un apodo que eliges tú.',
        },
        {
          title: 'Todo cartoon',
          body: 'Un héroe todo de gelatina, música y efectos de sonido creados para el juego, vibraciones en cada agarre y 45 idiomas.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacidad',
      title: 'Sin cuenta, solo un apodo',
      body: 'Los récords, los caramelos, la tienda y los retos se guardan en el dispositivo. Para la clasificación, el juego crea un jugador anónimo en Unity Gaming Services y envía allí tus puntuaciones con tu apodo. La publicidad (Google AdMob) y la medición de uso (Firebase Analytics, sin el identificador publicitario) completan las comunicaciones. En Europa, la pantalla de consentimiento te deja elegir desde el primer inicio, y el botón «Privacidad» de los Ajustes la vuelve a abrir.',
    },
  ],

  cta: {
    title: 'Muy pronto en el App Store y Google Play',
    body: 'Elastic Hero será gratis en iPhone, iPad y Android. Mientras tanto, descubre nuestros otros juegos.',
  },

  meta: {
    title: 'Elastic Hero — el juego de escalada elástica',
    description:
      'Un juego de escalada sin fin, gratis para iPhone, iPad y Android: estira los brazos y las piernas de un héroe de gelatina, agárrate a los pomos de caramelo y catapúltate cada vez más alto. Cinco potenciadores, retos y clasificaciones mundiales.',
  },

  chips: [],
};

const de: AppCopy = {
  tagline: 'Elastisches Kletterspiel · kostenlos für iPhone, iPad und Android',

  headline: {
    lead: 'Dehnen. Zielen. Loslassen.',
    highlight: 'Und endlos klettern.',
  },

  intro:
    'In Elastic Hero steuerst du einen rosa Gummihelden aus Wackelpudding mit dehnbaren Armen und Beinen. Zieh eine Hand zu einem Bonbon-Knauf, um dich festzuhalten, dehne einen Fuß und lass los: Er fliegt davon wie aus einer Schleuder. Der Turm hat keine Spitze, und jeder erkletterte Meter bringt zehn Punkte.',

  stats: [
    { value: '4', label: 'Arten von Knäufen' },
    { value: '5', label: 'Power-ups' },
    { value: '9', label: 'Herausforderungen, danach endlos weitere' },
    { value: '33', label: 'Artikel zum Freischalten' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'So wird gespielt',
      title: 'Ein Finger, vier Gliedmaßen, eine Schleuder',
      items: [
        { title: 'Greifen', body: 'Zieh eine Hand zu einem gelben Knauf: Sie hält sich fest und der Held hängt daran.' },
        { title: 'Dehnen', body: 'Zieh einen Fuß nach unten: Das Glied dehnt sich wie ein Gummiband, und eine gepunktete Flugbahn zeigt, wohin es geht.' },
        { title: 'Loslassen', body: 'Lass los und der Held wird nach oben katapultiert. Je stärker die Dehnung, desto größer der Sprung.' },
        { title: 'Eins nach dem anderen', body: 'Nur ein Griff hält: Wer einen neuen Knauf packt, lässt den vorherigen los.' },
        { title: 'Achtung, Kopf', body: 'Ein gestochener Arm oder ein gestochenes Bein ist kurz betäubt. Berührt der Körper eine Biene oder Stacheln, ist die Runde vorbei.' },
        { title: 'Nicht fallen', body: 'Rutscht der Held unten aus dem Bildschirm, ist es verloren. Ein freiwilliges Video lässt dich einmal pro Runde weiterspielen.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Mitten im Aufstieg',
    },
    {
      id: 'features',
      kicker: 'Was dich erwartet',
      title: 'Ein endloser Turm und alles, was dir unterwegs begegnet',
      items: [
        {
          title: 'Der Himmel wechselt',
          body: 'Tag, dann Sonnenuntergang, dann Sternennacht: Der Himmel folgt deiner Höhe. Überquere die Linie deines Rekords, um ihn zu brechen.',
        },
        {
          title: 'Vier Knäufe',
          body: 'Der normale Knauf, der federnde, der dich hochschleudert (BOING!), der zerbrechliche Keks, der bricht, wenn du trödelst (KRACH!), und das Eis, von dem die Hand abrutscht.',
        },
        {
          title: 'Bienen und Stacheln',
          body: 'Bienen patrouillieren, Stachelkugeln kreisen um die Knäufe, Zuckerstangen drehen sich und die Wände sind mit Stacheln bespickt. Ein Wackelpilz federt dich nach oben. Eine schnell geworfene Hand schickt eine Biene k.o.: BONK!',
        },
        {
          title: 'Fünf Power-ups',
          body: 'Boxhandschuhe, Super-Gummi, Superboxer, Stern (doppelte Punkte) und Bonbonregen, in Blasen entlang des Aufstiegs. Immer nur eins: Das nächste ersetzt das vorige.',
        },
        {
          title: 'Herausforderungen und Kombos',
          body: 'Neun Herausforderungen bringen dir das Spiel bei — Griffe, Würfe, Ketten, Sprünge, Eis —, danach geht es mit endlosen Herausforderungen weiter. Greif immer höher, ohne zu landen, und treib die Kombo nach oben.',
        },
        {
          title: 'Der Shop',
          body: '12 Farben, 12 Hüte und 9 Spuren zum Kombinieren, bezahlt mit den Bonbons, die du beim Spielen sammelst. Keine Käufe mit echtem Geld.',
        },
        {
          title: 'Bestenlisten',
          body: 'Zwei Bestenlisten für iPhone, iPad und Android gemeinsam: die WOCHE, die jeden Montag neu beginnt, und ALLZEIT. Die Top 50, dein Rang und ein Spielername, den du selbst wählst.',
        },
        {
          title: 'Ganz im Cartoon-Stil',
          body: 'Ein Held ganz aus Wackelpudding, Musik und Soundeffekte eigens für das Spiel, Vibrationen bei jedem Griff und 45 Sprachen.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Datenschutz',
      title: 'Kein Konto, nur ein Spielername',
      body: 'Rekorde, Bonbons, Shop und Herausforderungen werden auf dem Gerät gespeichert. Für die Bestenliste legt das Spiel bei Unity Gaming Services einen anonymen Spieler an und sendet deine Punkte unter deinem Spielernamen dorthin. Dazu kommen die Werbung (Google AdMob) und die Nutzungsmessung (Firebase Analytics, ohne Werbe-ID). In Europa lässt dir das Einwilligungsformular ab dem ersten Start die Wahl, und die Schaltfläche „Datenschutz“ in den Einstellungen öffnet es wieder.',
    },
  ],

  cta: {
    title: 'Bald im App Store und bei Google Play',
    body: 'Elastic Hero wird kostenlos für iPhone, iPad und Android erscheinen. Bis dahin: Entdecke unsere anderen Spiele.',
  },

  meta: {
    title: 'Elastic Hero — das elastische Kletterspiel',
    description:
      'Ein kostenloses Endlos-Kletterspiel für iPhone, iPad und Android: Dehne Arme und Beine eines Gummihelden, schnapp dir die Bonbon-Knäufe und katapultiere dich immer höher. Fünf Power-ups, Herausforderungen und weltweite Bestenlisten.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en, ja, ko, es, de };
