import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/vroomics.html`.
 *
 * Écrits le 18 octobre 2026 d'après la fiche App Store
 * (`~/essaies_dev/kart/store/app_store/metadata/<locale>/description.txt`) et
 * le code du jeu (`~/essaies_dev/kart`, Godot 4.7) : 7 planètes et 4 circuits
 * de compétition, soit 11 tracés, et 4 coupes (`Catalog.PLANETS`,
 * `Catalog.CIRCUITS`, `Catalog.CUPS` dans scripts/data/catalog.gd) ; 12 pilotes
 * par course (`Catalog.POINTS`) ; 6 bonus (`BONUS_ORDER` de
 * scripts/race/race.gd) ; 6 coques et 6 modèles de moteur, d'ailes et d'arme,
 * 14 couleurs en trois zones de peinture, autocollants (`Catalog.NAMES`,
 * `PAINTS`, `STICKERS`) ; courses en ligne à 8 au plus (`MAX_PLAYERS` de
 * scripts/net.gd) ; 15 langues (`Game.LANGS`). Le jeu est financé par AdMob
 * (interstitiel et vidéo récompensée « ×2 CRÉDITS »), sans aucun achat
 * intégré : la page ne promet donc jamais l'absence de publicité.
 */
const fr: AppCopy = {
  tagline: 'Course de vaisseaux anti-gravité en BD · sur iPhone',

  headline: {
    lead: 'Plein gaz dans une bande dessinée.',
    highlight: 'BOUM ! CRAC ! BADABOUM !',
  },

  intro:
    'Vroomics est une course de vaisseaux anti-gravité, nerveuse et colorée, où chaque virage, chaque tir et chaque explosion sort tout droit d’une case de BD. Enchaînez les coupes, battez votre rival attitré, affrontez votre fantôme au contre-la-montre ou de vrais joueurs en ligne, et construisez le bolide qui vous ressemble.',

  stats: [
    { value: '11', label: 'circuits spectaculaires' },
    { value: '4', label: 'coupes à remporter' },
    { value: '6', label: 'bonus pour renverser la course' },
    { value: '15', label: 'langues' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Les modes',
      title: 'Une course, plusieurs façons de gagner',
      items: [
        { title: 'Compétition', body: 'De la Coupe Bronze à la Coupe Comète puis au Grand Tour : chaque arrivée rapporte des points, et le podium du classement général ouvre la coupe suivante et paie la prime.' },
        { title: 'Un rival attitré', body: 'Chaque course a son rival. Battez-le en duel : il vous provoquera encore la fois suivante, jusqu’à vous céder son emblème.' },
        { title: 'Courses en ligne', body: 'Une course ouverte à tous en un seul toucher, des robots pour compléter la grille s’il manque des pilotes. Ou un salon privé, et un code pour inviter vos amis.' },
        { title: 'Contre-la-montre', body: 'Seul sur la piste face à votre fantôme : gagnez des médailles, grimpez dans le classement mondial et défiez le fantôme des meilleurs pilotes.' },
        { title: 'Commandes au doigt', body: 'Gauche, droite, BOOST et TIR : des commandes simples, des sensations arcade pures.' },
        { title: '×2 crédits', body: 'À l’arrivée, une vidéo facultative double vos gains. C’est toujours vous qui choisissez de la regarder.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'De la grille de départ au podium',
    },
    {
      id: 'features',
      kicker: 'Ce qui vous attend',
      title: 'Des explosions en pleine page',
      items: [
        {
          title: '11 circuits',
          body: 'Désert des dunes, monde de glace, planète volcanique, jungle alien, anneau orbital, mégapole néon, lune de cristal… Loopings au-dessus du vide, double spirale autour d’une tour, plongeons en montagnes russes, pont suspendu à la cime des arbres.',
        },
        {
          title: 'Des bonus qui renversent tout',
          body: 'SALVE : 8 roquettes à tête chercheuse. MÉTÉORE : frappez celui qui mène, il a 3 secondes pour se protéger. FUSÉE : pilote automatique à pleine vitesse, intouchable. Et BOUCLIER, MINE, BOOST.',
        },
        {
          title: 'Selon votre place',
          body: 'Les bonus s’adaptent au classement : en tête on se défend, en queue on revient.',
        },
        {
          title: 'Votre bolide, vos règles',
          body: 'Coque, moteur, ailes, arme : six modèles de chaque, à combiner et à améliorer avec les crédits gagnés en course.',
        },
        {
          title: 'Peinture et autocollants',
          body: 'Trois zones de peinture, quatorze couleurs, des autocollants à placer. Montez en niveau pour débloquer des peintures et des autocollants exclusifs.',
        },
        {
          title: 'Un vrai style BD',
          body: 'Ciels tramés, onomatopées, contours à l’encre : PAF ! BOUM ! CRAC ! Chaque course se lit comme une planche.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte, un nom de pilote',
      body: 'Ni compte ni e-mail : votre progression reste sur l’appareil. Pour les classements, les fantômes et les courses en ligne, le jeu crée un joueur anonyme chez Unity Gaming Services ; votre nom de pilote, votre vaisseau et vos meilleurs temps y sont visibles des autres joueurs. Le jeu est gratuit grâce à la publicité (Google AdMob), sans aucun achat intégré ; le formulaire de consentement se rouvre depuis PARAMÈTRES.',
    },
  ],

  cta: {
    title: 'Bientôt sur l’App Store',
    body: 'Vroomics sera gratuit sur iPhone, en 15 langues ; la version Android suivra. En attendant, découvrez nos autres jeux.',
  },

  meta: {
    title: 'Vroomics — course de vaisseaux anti-gravité en BD',
    description:
      'Une course de vaisseaux anti-gravité gratuite sur iPhone, dans un monde de bande dessinée : 4 coupes, 11 circuits, des roquettes et des météores, un rival attitré, des courses en ligne et un garage pour construire votre bolide.',
  },

  chips: [],

  schema: {
    alternateName: ['Vroomics : course de vaisseaux en BD'],
  },
};

const en: AppCopy = {
  tagline: 'Comic book anti-gravity racing · on iPhone',

  headline: {
    lead: 'Full throttle through a comic book.',
    highlight: 'BOOM! CRASH! KABOOM!',
  },

  intro:
    'Vroomics is a fast, colorful anti-gravity ship racing game where every turn, every shot and every explosion leaps straight out of a comic panel. Race through the cups, beat your sworn rival, take on your own ghost in time trial or real players online, and build the racer that suits you.',

  stats: [
    { value: '11', label: 'spectacular tracks' },
    { value: '4', label: 'cups to win' },
    { value: '6', label: 'power-ups to turn the race around' },
    { value: '15', label: 'languages' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Game modes',
      title: 'One race, many ways to win',
      items: [
        { title: 'Competition', body: 'From the Bronze Cup to the Comet Cup and on to the Grand Tour: every finish earns points, and the overall podium unlocks the next cup and pays the prize money.' },
        { title: 'A sworn rival', body: 'Every race has its rival. Beat them head-to-head: they will challenge you again next time, until they hand over their emblem.' },
        { title: 'Online races', body: 'Jump into an open race with a single tap, with bots filling the grid if drivers are missing. Or open a private lobby and invite your friends with a code.' },
        { title: 'Time trial', body: 'Alone on the track against your own ghost: earn medals, climb the global leaderboard and take on the ghosts of the best pilots.' },
        { title: 'Touch controls', body: 'Left, right, BOOST and FIRE: simple controls, pure arcade thrills.' },
        { title: '×2 credits', body: 'At the finish, an optional video doubles your winnings. Watching it is always your call.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'From the starting grid to the podium',
    },
    {
      id: 'features',
      kicker: 'What awaits you',
      title: 'Explosions across the page',
      items: [
        {
          title: '11 tracks',
          body: 'Dune desert, ice world, volcanic planet, alien jungle, orbital ring, neon megacity, crystal moon… Loops over the void, a double spiral around a tower, roller-coaster drops and a suspension bridge high in the treetops.',
        },
        {
          title: 'Power-ups that flip the race',
          body: 'SALVO: 8 homing rockets. METEOR: strike the leader, who gets 3 seconds to protect themselves. ROCKET: full-speed autopilot, untouchable. Plus SHIELD, MINE and BOOST.',
        },
        {
          title: 'Based on your position',
          body: 'Power-ups adapt to the standings: defend when you lead, fight back when you trail.',
        },
        {
          title: 'Your racer, your rules',
          body: 'Hull, engine, wings, weapon: six models of each, to mix and match and upgrade with the credits you earn racing.',
        },
        {
          title: 'Paint and stickers',
          body: 'Three paint zones, fourteen colors, stickers to place. Level up to unlock exclusive paint jobs and stickers.',
        },
        {
          title: 'True comic book style',
          body: 'Halftone skies, sound effects, inked outlines: POW! BOOM! CRASH! Every race reads like a comic page.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account, just a pilot name',
      body: 'No account, no email: your progress stays on the device. For leaderboards, ghosts and online races, the game creates an anonymous player with Unity Gaming Services; your pilot name, ship and best times are visible to other players there. The game is free thanks to advertising (Google AdMob), with no in-app purchases at all; the consent form can be reopened from SETTINGS.',
    },
  ],

  cta: {
    title: 'Coming soon to the App Store',
    body: 'Vroomics will be free on iPhone, in 15 languages; the Android version will follow. Meanwhile, have a look at our other games.',
  },

  meta: {
    title: 'Vroomics — comic book anti-gravity racing',
    description:
      'A free anti-gravity ship racing game for iPhone, set in a comic book world: 4 cups, 11 tracks, rockets and meteors, a sworn rival, online races and a garage to build your racer.',
  },

  chips: [],

  schema: {
    alternateName: ['Vroomics: Comic Book Space Racing'],
  },
};

const ja: AppCopy = {
  tagline: 'コミック風・反重力宇宙レース · iPhone',

  headline: {
    lead: 'コミックの中をフルスロットル。',
    highlight: 'ドカーン！バキッ！ズドドーン！',
  },

  intro:
    'Vroomicsは、スピード感あふれるカラフルな反重力宇宙船レースゲームです。カーブも、ショットも、爆発も、すべてがマンガのコマから飛び出してきます。カップを勝ち進み、因縁のライバルを倒し、タイムアタックで自分のゴーストと、オンラインで本物のプレイヤーと競い、自分だけのマシンを組み立てましょう。',

  stats: [
    { value: '11', label: '圧巻のコース' },
    { value: '4', label: '勝ち取るカップ' },
    { value: '6', label: 'レースをひっくり返すアイテム' },
    { value: '15', label: '対応言語' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'ゲームモード',
      title: 'ひとつのレース、いくつもの勝ち方',
      items: [
        { title: 'コンペティション', body: 'ブロンズカップからコメットカップ、そしてグランドツアーへ。ゴールするたびにポイントを獲得し、総合順位で表彰台に上がれば次のカップが解放され、賞金も手に入ります。' },
        { title: '因縁のライバル', body: 'どのレースにもライバルが登場します。一騎打ちで倒しても、次のレースでまた挑んできます。最後にはエンブレムを譲ってくれるまで。' },
        { title: 'オンラインレース', body: 'ワンタップで誰でも参加できるレースへ。参加者が足りなければボットがグリッドを埋めます。プライベートルームを作って、コードで友達を招待することもできます。' },
        { title: 'タイムアタック', body: 'コースにいるのは自分のゴーストだけ。メダルを獲得して世界ランキングを駆け上がり、トップパイロットのゴーストにも挑戦しましょう。' },
        { title: 'タッチ操作', body: '左、右、ブースト、ショット。シンプルな操作で、純度100％のアーケード体験。' },
        { title: 'クレジット2倍', body: 'ゴール後、任意の動画を見ると獲得クレジットが2倍になります。見るかどうかは、いつでもあなた次第です。' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'スタートグリッドから表彰台まで',
    },
    {
      id: 'features',
      kicker: '注目ポイント',
      title: 'ページいっぱいの大爆発',
      items: [
        {
          title: '11のコース',
          body: '砂丘の砂漠、氷の世界、火山惑星、エイリアンのジャングル、軌道リング、ネオンのメガシティ、クリスタルの月…。奈落の上のループ、塔を巡る二重らせん、ジェットコースターのような急降下、木々のてっぺんにかかる吊り橋。',
        },
        {
          title: '形勢逆転のアイテム',
          body: 'サルボ：8発のホーミングロケット。メテオ：トップを狙い撃ち、防御できるのは3秒だけ。ロケット：最高速の自動操縦で誰にも止められない。さらにシールド、マイン、ブースト。',
        },
        {
          title: '順位に合わせて',
          body: 'アイテムは順位に合わせて変化します。トップなら守り、後方なら一気に追い上げ。',
        },
        {
          title: 'キミのマシン、キミのルール',
          body: 'ボディ、エンジン、ウイング、武器。それぞれ6種類のパーツを組み合わせ、レースで稼いだクレジットで強化できます。',
        },
        {
          title: 'ペイントとステッカー',
          body: '3つの塗り分けエリア、14色、好きな場所に貼れるステッカー。レベルを上げれば限定ペイントやステッカーが解放されます。',
        },
        {
          title: '本物のコミックスタイル',
          body: '網点の空、擬音、インクの輪郭線。バシッ！ドカーン！バキッ！どのレースもマンガの1ページのように読めます。',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'プライバシー',
      title: 'アカウント不要、パイロット名だけ',
      body: 'アカウントもメールアドレスも不要で、進行状況は端末に保存されます。ランキング、ゴースト、オンラインレースのために、ゲームはUnity Gaming Servicesに匿名のプレイヤーを作成し、パイロット名、マシン、ベストタイムがほかのプレイヤーに表示されます。ゲームは広告（Google AdMob）によって無料で、アプリ内課金は一切ありません。同意画面は「設定」から開き直せます。',
    },
  ],

  cta: {
    title: 'App Storeに近日登場',
    body: 'VroomicsはiPhoneで無料、15言語で遊べるようになります。Android版もそのあとに続きます。それまでは、ほかのゲームもどうぞ。',
  },

  meta: {
    title: 'Vroomics — コミック風・反重力宇宙レース',
    description:
      'マンガの世界を駆けるiPhone向けの無料反重力宇宙船レース。4つのカップ、11のコース、ロケットとメテオ、因縁のライバル、オンラインレース、そして自分のマシンを組み立てるガレージ。',
  },

  chips: [],

  schema: {
    alternateName: ['Vroomics：コミック風宇宙レース'],
  },
};

const ko: AppCopy = {
  tagline: '코믹 스타일 반중력 우주 레이싱 · iPhone',

  headline: {
    lead: '만화 속을 풀스로틀로.',
    highlight: '쾅! 콰직! 콰콰쾅!',
  },

  intro:
    'Vroomics는 빠르고 화려한 반중력 우주선 레이싱 게임입니다. 모든 코너, 모든 사격, 모든 폭발이 만화 칸에서 그대로 튀어나옵니다. 컵을 차례로 정복하고, 전담 라이벌을 꺾고, 타임 어택에서는 자신의 고스트와, 온라인에서는 실제 플레이어와 겨루며, 나만의 머신을 만들어 보세요.',

  stats: [
    { value: '11', label: '화려한 트랙' },
    { value: '4', label: '차지할 우승컵' },
    { value: '6', label: '판도를 뒤집는 아이템' },
    { value: '15', label: '지원 언어' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: '게임 모드',
      title: '하나의 레이스, 여러 가지 승리 방법',
      items: [
        { title: '컴페티션', body: '브론즈 컵에서 혜성 컵, 그리고 그랜드 투어까지. 결승선을 통과할 때마다 포인트를 얻고, 종합 순위 시상대에 오르면 다음 컵이 열리고 상금을 받습니다.' },
        { title: '전담 라이벌', body: '레이스마다 라이벌이 있습니다. 대결에서 이겨도 다음 레이스에서 또다시 도발해 옵니다. 결국 자신의 엠블럼을 넘겨줄 때까지요.' },
        { title: '온라인 레이스', body: '터치 한 번으로 누구나 참여하는 레이스에 합류하세요. 인원이 부족하면 봇이 그리드를 채웁니다. 비공개 방을 만들어 코드로 친구를 초대할 수도 있습니다.' },
        { title: '타임 어택', body: '트랙 위에는 나와 나의 고스트뿐. 메달을 따고 세계 랭킹을 올리고, 최고 파일럿들의 고스트에도 도전하세요.' },
        { title: '터치 조작', body: '왼쪽, 오른쪽, 부스트, 사격. 간단한 조작, 순수한 아케이드의 짜릿함.' },
        { title: '크레딧 2배', body: '결승선을 통과한 뒤 선택형 동영상을 보면 보상이 두 배가 됩니다. 볼지 말지는 언제나 직접 정합니다.' },
      ],
    },
    {
      id: 'gallery-device',
      title: '출발선에서 시상대까지',
    },
    {
      id: 'features',
      kicker: '주요 특징',
      title: '페이지를 가득 채우는 폭발',
      items: [
        {
          title: '트랙 11개',
          body: '모래 언덕 사막, 얼음 세계, 화산 행성, 외계 정글, 궤도 링, 네온 메가시티, 크리스탈 달… 허공 위의 루프, 탑을 감싸는 이중 나선, 롤러코스터 같은 급강하, 나무 꼭대기에 걸린 현수교까지.',
        },
        {
          title: '판도를 뒤집는 아이템',
          body: '일제 사격: 유도 로켓 8발. 운석: 선두를 강타, 방어할 시간은 단 3초. 로켓: 최고 속도 자동 주행, 무적 상태. 그리고 방패, 지뢰, 부스트.',
        },
        {
          title: '순위에 따라',
          body: '아이템은 순위에 맞춰 달라집니다. 선두라면 방어하고, 뒤처졌다면 역전하세요.',
        },
        {
          title: '나만의 머신, 나만의 규칙',
          body: '선체, 엔진, 날개, 무기: 각각 6가지 모델을 조합하고, 레이스에서 번 크레딧으로 업그레이드하세요.',
        },
        {
          title: '페인트와 스티커',
          body: '세 가지 도색 부위, 14가지 색상, 원하는 곳에 붙이는 스티커. 레벨을 올리면 전용 페인트와 스티커가 열립니다.',
        },
        {
          title: '진짜 만화 스타일',
          body: '망점 하늘, 의성어, 잉크 윤곽선. 퍽! 쾅! 콰직! 모든 레이스가 만화 한 페이지처럼 읽힙니다.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: '개인정보',
      title: '계정 없이, 파일럿 이름 하나로',
      body: '계정도 이메일도 필요 없으며, 진행 상황은 기기에 저장됩니다. 순위표, 고스트, 온라인 레이스를 위해 게임은 Unity Gaming Services에 익명 플레이어를 만들고, 파일럿 이름과 우주선, 최고 기록이 다른 플레이어에게 보입니다. 게임은 광고(Google AdMob) 덕분에 무료이며 인앱 구매는 전혀 없습니다. 동의 화면은 «설정»에서 다시 열 수 있습니다.',
    },
  ],

  cta: {
    title: 'App Store에 곧 출시',
    body: 'Vroomics는 iPhone에서 무료로, 15개 언어로 제공될 예정이며 Android 버전도 뒤따릅니다. 그동안 다른 게임도 둘러보세요.',
  },

  meta: {
    title: 'Vroomics — 코믹 스타일 반중력 우주 레이싱',
    description:
      '만화 세계를 달리는 iPhone용 무료 반중력 우주선 레이싱. 컵 4개, 트랙 11개, 로켓과 운석, 전담 라이벌, 온라인 레이스, 그리고 나만의 머신을 만드는 차고.',
  },

  chips: [],

  schema: {
    alternateName: ['Vroomics: 코믹 우주 레이싱'],
  },
};

const es: AppCopy = {
  tagline: 'Carreras de naves antigravedad de cómic · en iPhone',

  headline: {
    lead: 'A todo gas dentro de un cómic.',
    highlight: '¡BUM! ¡CRAC! ¡CATAPUM!',
  },

  intro:
    'Vroomics es un juego de carreras de naves antigravedad, trepidante y lleno de color, donde cada curva, cada disparo y cada explosión salen directamente de una viñeta. Encadena las copas, vence a tu rival, enfréntate a tu propio fantasma en la contrarreloj o a jugadores reales online, y construye el bólido que va contigo.',

  stats: [
    { value: '11', label: 'circuitos espectaculares' },
    { value: '4', label: 'copas por ganar' },
    { value: '6', label: 'objetos para dar la vuelta a la carrera' },
    { value: '15', label: 'idiomas' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Los modos',
      title: 'Una carrera, muchas formas de ganar',
      items: [
        { title: 'Competición', body: 'De la Copa Bronce a la Copa Cometa y al Gran Tour: cada llegada suma puntos, y el podio de la clasificación general abre la copa siguiente y paga el premio.' },
        { title: 'Un rival que no te suelta', body: 'Cada carrera tiene su rival. Gánale el duelo: volverá a provocarte la próxima vez, hasta cederte su emblema.' },
        { title: 'Carreras online', body: 'Únete a una carrera abierta con un solo toque; si faltan pilotos, los bots completan la parrilla. O crea una sala privada e invita a tus amigos con un código.' },
        { title: 'Contrarreloj', body: 'Solo en la pista frente a tu fantasma: gana medallas, sube en la clasificación mundial y desafía al fantasma de los mejores pilotos.' },
        { title: 'Controles táctiles', body: 'Izquierda, derecha, TURBO y DISPARO: controles sencillos, pura emoción arcade.' },
        { title: '×2 créditos', body: 'Al llegar a la meta, un vídeo opcional duplica tus ganancias. Verlo siempre es decisión tuya.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'De la parrilla de salida al podio',
    },
    {
      id: 'features',
      kicker: 'Lo que te espera',
      title: 'Explosiones a toda página',
      items: [
        {
          title: '11 circuitos',
          body: 'Desierto de dunas, mundo helado, planeta volcánico, jungla alienígena, anillo orbital, megaciudad de neón, luna de cristal… Rizos sobre el vacío, doble espiral alrededor de una torre, caídas de montaña rusa y un puente colgante entre las copas de los árboles.',
        },
        {
          title: 'Objetos que lo cambian todo',
          body: 'RÁFAGA: 8 cohetes teledirigidos. METEORITO: golpea al líder, que tiene 3 segundos para protegerse. COHETE: piloto automático a toda velocidad, intocable. Y además ESCUDO, MINA y TURBO.',
        },
        {
          title: 'Según tu posición',
          body: 'Los objetos se adaptan a la clasificación: en cabeza te defiendes, en la cola remontas.',
        },
        {
          title: 'Tu bólido, tus reglas',
          body: 'Casco, motor, alas, arma: seis modelos de cada uno, para combinarlos y mejorarlos con los créditos ganados en carrera.',
        },
        {
          title: 'Pintura y pegatinas',
          body: 'Tres zonas de pintura, catorce colores y pegatinas para colocar. Sube de nivel para desbloquear pinturas y pegatinas exclusivas.',
        },
        {
          title: 'Estilo cómic de verdad',
          body: 'Cielos de trama, onomatopeyas, contornos de tinta: ¡PAF! ¡BUM! ¡CRAC! Cada carrera se lee como una página de cómic.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacidad',
      title: 'Sin cuenta, solo un nombre de piloto',
      body: 'Ni cuenta ni correo: tu progreso se queda en el dispositivo. Para las clasificaciones, los fantasmas y las carreras online, el juego crea un jugador anónimo en Unity Gaming Services; tu nombre de piloto, tu nave y tus mejores tiempos son visibles para los demás jugadores. El juego es gratuito gracias a la publicidad (Google AdMob), sin ninguna compra integrada; el formulario de consentimiento se vuelve a abrir desde AJUSTES.',
    },
  ],

  cta: {
    title: 'Muy pronto en el App Store',
    body: 'Vroomics será gratis en iPhone, en 15 idiomas; la versión para Android llegará después. Mientras tanto, descubre nuestros otros juegos.',
  },

  meta: {
    title: 'Vroomics — carreras de naves antigravedad de cómic',
    description:
      'Un juego gratuito de carreras de naves antigravedad para iPhone, en un mundo de cómic: 4 copas, 11 circuitos, cohetes y meteoritos, un rival que no te suelta, carreras online y un garaje para construir tu bólido.',
  },

  chips: [],

  schema: {
    alternateName: ['Vroomics: carreras espaciales de cómic'],
  },
};

const de: AppCopy = {
  tagline: 'Antigravitations-Rennen im Comic-Stil · für das iPhone',

  headline: {
    lead: 'Vollgas im Comic.',
    highlight: 'BUMM! KRACH! KAWUMM!',
  },

  intro:
    'Vroomics ist ein rasantes, knallbuntes Antigravitations-Rennspiel, in dem jede Kurve, jeder Schuss und jede Explosion direkt aus einem Comicbild springt. Fahr dich durch die Pokale, schlag deinen Erzrivalen, tritt im Zeitfahren gegen deinen eigenen Geist oder online gegen echte Spieler an, und bau den Flitzer, der zu dir passt.',

  stats: [
    { value: '11', label: 'spektakuläre Strecken' },
    { value: '4', label: 'Pokale zu gewinnen' },
    { value: '6', label: 'Power-ups, die das Rennen drehen' },
    { value: '15', label: 'Sprachen' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Die Modi',
      title: 'Ein Rennen, viele Wege zum Sieg',
      items: [
        { title: 'Wettbewerb', body: 'Vom Bronze-Pokal über den Kometen-Pokal bis zur Grand Tour: Jede Zieleinfahrt bringt Punkte, und das Podest der Gesamtwertung schaltet den nächsten Pokal frei und zahlt die Prämie aus.' },
        { title: 'Ein Erzrivale', body: 'Jedes Rennen hat seinen Rivalen. Schlag ihn im Duell: Er fordert dich beim nächsten Mal wieder heraus, bis er dir sein Emblem überlässt.' },
        { title: 'Online-Rennen', body: 'Mit einem einzigen Tippen in ein offenes Rennen; fehlen Fahrer, füllen Bots das Feld auf. Oder eine private Lobby, und ein Code für deine Freunde.' },
        { title: 'Zeitfahren', body: 'Allein auf der Strecke gegen deinen Geist: Gewinne Medaillen, steig in der weltweiten Rangliste auf und fordere die Geister der besten Piloten heraus.' },
        { title: 'Touch-Steuerung', body: 'Links, rechts, BOOST und FEUER: einfache Steuerung, pures Arcade-Feeling.' },
        { title: '×2 Credits', body: 'Im Ziel verdoppelt ein freiwilliges Video deine Gewinne. Ob du es ansiehst, entscheidest immer du.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Von der Startaufstellung aufs Podest',
    },
    {
      id: 'features',
      kicker: 'Was dich erwartet',
      title: 'Explosionen auf jeder Seite',
      items: [
        {
          title: '11 Strecken',
          body: 'Dünenwüste, Eiswelt, Vulkanplanet, Alien-Dschungel, Orbitalring, Neon-Megacity, Kristallmond … Loopings über dem Abgrund, eine Doppelspirale um einen Turm, Achterbahn-Abfahrten und eine Hängebrücke hoch in den Baumwipfeln.',
        },
        {
          title: 'Power-ups, die alles drehen',
          body: 'SALVE: 8 zielsuchende Raketen. METEOR: Triff den Führenden, der 3 Sekunden hat, um sich zu schützen. RAKETE: Autopilot mit Höchstgeschwindigkeit, unantastbar. Dazu SCHILD, MINE und BOOST.',
        },
        {
          title: 'Je nach Platzierung',
          body: 'Die Power-ups passen sich der Wertung an: Vorne verteidigst du dich, hinten holst du auf.',
        },
        {
          title: 'Dein Flitzer, deine Regeln',
          body: 'Rumpf, Triebwerk, Flügel, Waffe: jeweils sechs Modelle, die du kombinierst und mit den im Rennen verdienten Credits aufrüstest.',
        },
        {
          title: 'Lack und Sticker',
          body: 'Drei Lackierzonen, vierzehn Farben und Sticker zum Platzieren. Steig im Level auf, um exklusive Lackierungen und Sticker freizuschalten.',
        },
        {
          title: 'Echter Comic-Stil',
          body: 'Gerasterte Himmel, Lautmalereien, Tuschekonturen: PAFF! BUMM! KRACH! Jedes Rennen liest sich wie eine Comicseite.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Datenschutz',
      title: 'Kein Konto, nur ein Pilotenname',
      body: 'Weder Konto noch E-Mail: Dein Fortschritt bleibt auf dem Gerät. Für Bestenlisten, Geister und Online-Rennen legt das Spiel bei Unity Gaming Services einen anonymen Spieler an; dein Pilotenname, dein Schiff und deine Bestzeiten sind dort für andere Spieler sichtbar. Das Spiel ist dank Werbung (Google AdMob) kostenlos und hat keinerlei In-App-Käufe; das Einwilligungsformular lässt sich unter OPTIONEN erneut öffnen.',
    },
  ],

  cta: {
    title: 'Bald im App Store',
    body: 'Vroomics erscheint kostenlos für das iPhone, in 15 Sprachen; die Android-Version folgt. Bis dahin: Entdecke unsere anderen Spiele.',
  },

  meta: {
    title: 'Vroomics — Antigravitations-Rennen im Comic-Stil',
    description:
      'Ein kostenloses Antigravitations-Raumschiffrennen für das iPhone in einer Comicwelt: 4 Pokale, 11 Strecken, Raketen und Meteore, ein Erzrivale, Online-Rennen und eine Garage, in der du deinen Flitzer baust.',
  },

  chips: [],

  schema: {
    alternateName: ['Vroomics: Comic-Raumschiff-Rennen'],
  },
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en, ja, ko, es, de };
