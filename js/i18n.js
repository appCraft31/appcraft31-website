/* ===== AppCraft31 — i18n + thème clair/sombre ===== */
(function () {
  "use strict";

  // Langues disponibles (français par défaut)
  var LANGS = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ja", label: "日本語", flag: "🇯🇵" },
    { code: "ko", label: "한국어", flag: "🇰🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" }
  ];

  var I18N = {
    fr: {
      "nav.apps": "Applications",
      "nav.games": "Jeux",
      "nav.about": "À propos",
      "hero.tagline": "Créateur d'expériences mobiles.",
      "hero.sub": "Des applications et des jeux iOS pensés avec soin — utiles, rapides et respectueux de votre vie privée.",
      "hero.cta_apps": "Nos applications",
      "hero.cta_games": "Nos jeux",
      "hero.cta_links": "Tous nos liens",
      "badge.available": "Disponible",
      "badge.soon": "Bientôt",
      "common.learn_more": "En savoir plus",
      "apps.pill": "Applications",
      "apps.title": "Des outils du quotidien",
      "apps.subtitle": "Utiles, rapides, sans pub ni tracking.",
      "portfolio.title": "Nos Créations",
      "portfolio.subtitle": "Des applications utiles et des jeux soignés, respectueux de votre vie privée.",
      "portfolio.filter_all": "Tout",
      "portfolio.filter_apps": "Applications",
      "portfolio.filter_games": "Jeux",
      "games.pill": "Jeux",
      "games.title": "Des jeux pour s'évader",
      "games.subtitle": "Minimalistes, zen, conçus pour durer.",
      "ecopompe.tagline": "Prix carburant en temps réel",
      "ecopompe.desc": "Comparez les prix des ~10 000 stations-service de France. Trouvez la moins chère près de chez vous, suivez vos favorites et consultez l'historique des prix — le tout sans pub ni tracking.",
      "ecopompe.c1": "Prix temps réel",
      "ecopompe.c2": "Stations favorites",
      "ecopompe.c3": "Géolocalisation",
      "ecopompe.c4": "Widget écran d'accueil",
      "ecopompe.c5": "Recherche intelligente",
      "ecopompe.c6": "Variations de prix",
      "keeply.tagline": "Le tri photo sans stress",
      "keeply.desc": "Balayez, gardez, libérez. Keeply transforme des milliers de photos en missions courtes et rassurantes — doublons, similaires, captures d'écran, vidéos lourdes — 100 % local, aucune donnée collectée.",
      "keeply.c1": "Missions guidées",
      "keeply.c2": "Corbeille de sécurité",
      "keeply.c3": "Doublons & similaires",
      "keeply.c4": "Vidéos lourdes",
      "keeply.c5": "100 % local",
      "keeply.c6": "Export libre",
      "shizuku.tagline": "Minuteur café filtre · Pour Over",
      "shizuku.desc": "Le minuteur mains libres pour réussir votre café filtre. Suivez chaque étape de versement au rythme parfait, pilotez à la voix ou depuis votre Apple Watch, et ajustez vos recettes grâce au calculateur de ratio — sans toucher l'écran.",
      "shizuku.c1": "Commandes vocales",
      "shizuku.c2": "Mains libres",
      "shizuku.c3": "Minuteur par étape",
      "shizuku.c4": "Apple Watch",
      "shizuku.c5": "Calculateur de ratio",
      "shizuku.c6": "Recettes personnalisées",
      "poddroid.tagline": "Vos podcasts, sans distraction",
      "poddroid.desc": "Recherchez, abonnez-vous et écoutez. PodDroid assemble votre journée d'écoute, vous suit au volant et respecte votre vie privée — sans pub ni pistage. Disponible sur Android.",
      "poddroid.c1": "File « Ma journée »",
      "poddroid.c2": "Flux immersif",
      "poddroid.c3": "Minuteur de sommeil",
      "poddroid.c4": "Écoute hors-ligne",
      "poddroid.c5": "Android Auto",
      "poddroid.c6": "Sans pub ni pistage",
      "randompix.tagline": "Devine à qui est la photo",
      "randompix.desc": "Le party game qui pioche dans VOS souvenirs. Chacun ajoute quelques photos au hasard de sa galerie, et tout le monde devine à qui elles appartiennent. De 2 à 10 joueurs, 5 minutes par partie, fous rires garantis.",
      "randompix.c1": "Vos vraies photos",
      "randompix.c2": "2 à 10 joueurs",
      "randompix.c3": "10s pour deviner",
      "randompix.c4": "Combos x2",
      "randompix.c5": "Réactions emoji",
      "randompix.c6": "Photos éphémères",
      "binero.tagline": "La logique en noir et blanc",
      "binero.desc": "Le Binero (Takuzu / Binairo) : la détente du sudoku, en binaire. Remplissez la grille de 0 et de 1 par pure déduction — 50 niveaux du 6×6 au 14×14, une grille du jour et un classement mondial.",
      "binero.c1": "50 niveaux",
      "binero.c2": "Grille du jour",
      "binero.c3": "Difficulté adaptative",
      "binero.c4": "Classement mondial",
      "binero.c5": "100 % hors-ligne",
      "binero.c6": "Indices & aide",
      "glyphe.tagline": "Le code du jour, par pure déduction",
      "glyphe.desc": "Une énigme de déduction par jour. Percez le code de quatre glyphes en six essais, gardez votre série et grimpez au classement mondial — sans publicité.",
      "glyphe.c1": "Une partie par jour",
      "glyphe.c2": "Classement mondial",
      "glyphe.c3": "Clair & sombre",
      "glyphe.c4": "Mode daltonien",
      "glyphe.c5": "100 % hors-ligne",
      "glyphe.c6": "Sans publicité",
      "graviwords.tagline": "Le puzzle de mots arcade rétro",
      "graviwords.desc": "Un mélange nerveux de jeu de mots et de puzzle de briques rétro. Les lettres tombent et s'empilent : trace des mots pour les faire exploser, déclenche 7 pouvoirs et empêche la pile de déborder.",
      "graviwords.c1": "Trace des mots",
      "graviwords.c2": "Physique des blocs",
      "graviwords.c3": "7 pouvoirs",
      "graviwords.c4": "Classement Game Center",
      "graviwords.c5": "Bilingue FR / EN",
      "graviwords.c6": "Boutique & pièces",
      "tengo.tagline": "Relie. Additionne. Libère.",
      "tengo.desc": "Un puzzle minimaliste et apaisant : trace un chemin sur une grille de bulles colorées pour former des sommes de 10 pile. Plus la chaîne est longue, plus le score grimpe.",
      "tengo.c1": "Objectif 10",
      "tengo.c2": "Combos XL",
      "tengo.c3": "Classement",
      "tengo.c4": "10 langues",
      "tengo.c5": "Sauvegarde auto",
      "tengo.c6": "Haptique + sons",
      "orbis.tagline": "Un toucher. Un univers.",
      "orbis.desc": "Appuie et maintiens pour déployer un cercle de lumière. Relâche pour l'ancrer. Couvre 75 % de l'arène sans frôler les ennemis. Un puzzle zen à un seul geste.",
      "orbis.c1": "Un geste unique",
      "orbis.c2": "Niveaux infinis",
      "orbis.c3": "Son synthétisé",
      "orbis.c4": "Game Center",
      "orbis.c5": "Design zen",
      "orbis.c6": "Une main suffit",
      "meliz.tagline": "Trouve les mots, retrouve le calme.",
      "meliz.desc": "Un jeu de mots mêlés au design pastel apaisant. Six univers colorés (Animaux, Fruits, Pays, Sports, Couleurs, Métiers), trois niveaux de difficulté et un chrono pour défier tes meilleurs scores.",
      "meliz.c1": "Design pastel",
      "meliz.c2": "Chrono & score",
      "meliz.c3": "Indices à la demande",
      "meliz.c4": "Bilingue FR / EN",
      "meliz.c5": "Haptiques fines",
      "meliz.c6": "Données locales",
      "motfleche.tagline": "Déchiffrez les mots interdits",
      "motfleche.desc": "Un jeu de mots fléchés au style vintage 1952. Des thèmes à débloquer avec des étoiles (Nature, Animaux, Cuisine, Espace…), des indices à la carte et une sauvegarde automatique.",
      "motfleche.c1": "Édition censurée",
      "motfleche.c2": "Boutique d'étoiles",
      "motfleche.c3": "Indices Lettre/Mot",
      "motfleche.c4": "Carnet de bord",
      "motfleche.c5": "Hors-ligne",
      "motfleche.c6": "Sauvegarde auto",
      "about.title": "À propos d'AppCraft31",
      "about.p1": "AppCraft31 est un studio indépendant basé à Toulouse (Haute-Garonne). Je conçois et développe des applications iOS en solo — de l'idée à la mise en ligne sur l'App Store.",
      "about.p2": "Ma philosophie : des apps <strong>utiles</strong>, <strong>rapides</strong> et <strong>respectueuses</strong>. Pas de dark patterns, pas de monétisation à outrance, pas de données revendues.",
      "about.stat_app_label": "Applications",
      "about.stat_games_label": "Jeux",
      "footer.privacy": "Confidentialité",
      "footer.support": "Support",
      "ui.theme_label": "Changer de thème",
      "ui.lang_label": "Changer de langue"
    },
    en: {
      "nav.apps": "Apps",
      "nav.games": "Games",
      "nav.about": "About",
      "hero.tagline": "Creator of mobile experiences.",
      "hero.sub": "Thoughtfully crafted iOS apps and games — useful, fast, and respectful of your privacy.",
      "hero.cta_apps": "Our apps",
      "hero.cta_games": "Our games",
      "hero.cta_links": "All our links",
      "badge.available": "Available",
      "badge.soon": "Coming soon",
      "common.learn_more": "Learn more",
      "apps.pill": "Apps",
      "apps.title": "Everyday tools",
      "apps.subtitle": "Useful, fast, no ads or tracking.",
      "portfolio.title": "Our Creations",
      "portfolio.subtitle": "Useful apps and carefully crafted games, respectful of your privacy.",
      "portfolio.filter_all": "All",
      "portfolio.filter_apps": "Apps",
      "portfolio.filter_games": "Games",
      "games.pill": "Games",
      "games.title": "Games to get away",
      "games.subtitle": "Minimalist, zen, built to last.",
      "ecopompe.tagline": "Real-time fuel prices",
      "ecopompe.desc": "Compare prices across France's ~10,000 gas stations. Find the cheapest one near you, track your favorites, and check price history — all with no ads or tracking.",
      "ecopompe.c1": "Real-time prices",
      "ecopompe.c2": "Favorite stations",
      "ecopompe.c3": "Geolocation",
      "ecopompe.c4": "Home screen widget",
      "ecopompe.c5": "Smart search",
      "ecopompe.c6": "Price changes",
      "keeply.tagline": "Stress-free photo cleanup",
      "keeply.desc": "Swipe, keep, free up space. Keeply turns thousands of photos into short, reassuring missions — duplicates, similar shots, screenshots, heavy videos — 100% on-device, no data collected.",
      "keeply.c1": "Guided missions",
      "keeply.c2": "Safety trash",
      "keeply.c3": "Duplicates & similar",
      "keeply.c4": "Heavy videos",
      "keeply.c5": "100% on-device",
      "keeply.c6": "Free export",
      "shizuku.tagline": "Pour Over coffee timer",
      "shizuku.desc": "The hands-free timer for brewing the perfect pour over. Follow every pour step at just the right pace, control it by voice or from your Apple Watch, and fine-tune your recipes with the ratio calculator — without ever touching the screen.",
      "shizuku.c1": "Voice control",
      "shizuku.c2": "Hands-free",
      "shizuku.c3": "Step-by-step timer",
      "shizuku.c4": "Apple Watch",
      "shizuku.c5": "Ratio calculator",
      "shizuku.c6": "Custom recipes",
      "poddroid.tagline": "Your podcasts, distraction-free",
      "poddroid.desc": "Search, subscribe and listen. PodDroid builds your listening day, follows you on the road and respects your privacy — no ads, no tracking. Available on Android.",
      "poddroid.c1": "\"My day\" queue",
      "poddroid.c2": "Immersive feed",
      "poddroid.c3": "Sleep timer",
      "poddroid.c4": "Offline listening",
      "poddroid.c5": "Android Auto",
      "poddroid.c6": "No ads or tracking",
      "randompix.tagline": "Guess whose photo it is",
      "randompix.desc": "The party game that digs into YOUR memories. Everyone adds a few random photos from their gallery, and the group guesses who they belong to. 2 to 10 players, 5 minutes per round, laughs guaranteed.",
      "randompix.c1": "Your real photos",
      "randompix.c2": "2 to 10 players",
      "randompix.c3": "10s to guess",
      "randompix.c4": "x2 combos",
      "randompix.c5": "Emoji reactions",
      "randompix.c6": "Ephemeral photos",
      "binero.tagline": "Logic in black and white",
      "binero.desc": "Binero (Takuzu / Binairo): the calm of sudoku, in binary. Fill the grid with 0s and 1s by pure deduction — 50 levels from 6×6 to 14×14, a daily puzzle and a global leaderboard.",
      "binero.c1": "50 levels",
      "binero.c2": "Daily puzzle",
      "binero.c3": "Adaptive difficulty",
      "binero.c4": "Global leaderboard",
      "binero.c5": "100% offline",
      "binero.c6": "Hints & help",
      "glyphe.tagline": "The daily code, by pure deduction",
      "glyphe.desc": "A deduction puzzle every day. Crack the code of four glyphs in six tries, keep your streak and climb the global leaderboard — no ads.",
      "glyphe.c1": "One game a day",
      "glyphe.c2": "Global leaderboard",
      "glyphe.c3": "Light & dark",
      "glyphe.c4": "Colorblind mode",
      "glyphe.c5": "100% offline",
      "glyphe.c6": "No ads",
      "graviwords.tagline": "The retro arcade word puzzle",
      "graviwords.desc": "A fast-paced blend of word game and retro brick puzzle. Letters fall and stack up: trace words to blow them up, trigger 7 power-ups, and keep the pile from overflowing.",
      "graviwords.c1": "Trace words",
      "graviwords.c2": "Block physics",
      "graviwords.c3": "7 power-ups",
      "graviwords.c4": "Game Center leaderboard",
      "graviwords.c5": "Bilingual FR / EN",
      "graviwords.c6": "Shop & coins",
      "tengo.tagline": "Connect. Add up. Clear.",
      "tengo.desc": "A minimalist, calming puzzle: trace a path across a grid of colorful bubbles to form sums of exactly 10. The longer the chain, the higher the score.",
      "tengo.c1": "Make 10",
      "tengo.c2": "XL combos",
      "tengo.c3": "Leaderboard",
      "tengo.c4": "10 languages",
      "tengo.c5": "Auto-save",
      "tengo.c6": "Haptics + sound",
      "orbis.tagline": "One touch. One universe.",
      "orbis.desc": "Tap and hold to grow a circle of light. Release to anchor it. Cover 75% of the arena without grazing the enemies. A zen single-gesture puzzle.",
      "orbis.c1": "A single gesture",
      "orbis.c2": "Endless levels",
      "orbis.c3": "Synthesized sound",
      "orbis.c4": "Game Center",
      "orbis.c5": "Zen design",
      "orbis.c6": "One-handed play",
      "meliz.tagline": "Find the words, find your calm.",
      "meliz.desc": "A word search game with a soothing pastel design. Six colorful worlds (Animals, Fruits, Countries, Sports, Colors, Jobs), three difficulty levels, and a timer to challenge your best scores.",
      "meliz.c1": "Pastel design",
      "meliz.c2": "Timer & score",
      "meliz.c3": "Hints on demand",
      "meliz.c4": "Bilingual FR / EN",
      "meliz.c5": "Subtle haptics",
      "meliz.c6": "Local data",
      "motfleche.tagline": "Crack the forbidden words",
      "motfleche.desc": "A crossword game with a vintage 1952 style. Themes to unlock with stars (Nature, Animals, Cooking, Space…), à la carte hints, and automatic saving.",
      "motfleche.c1": "Censored edition",
      "motfleche.c2": "Star shop",
      "motfleche.c3": "Letter/Word hints",
      "motfleche.c4": "Logbook",
      "motfleche.c5": "Offline",
      "motfleche.c6": "Auto-save",
      "about.title": "About AppCraft31",
      "about.p1": "AppCraft31 is an independent studio based in Toulouse (Haute-Garonne). I design and build iOS apps solo — from the idea to the App Store launch.",
      "about.p2": "My philosophy: apps that are <strong>useful</strong>, <strong>fast</strong>, and <strong>respectful</strong>. No dark patterns, no excessive monetization, no data sold off.",
      "about.stat_app_label": "Apps",
      "about.stat_games_label": "Games",
      "footer.privacy": "Privacy",
      "footer.support": "Support",
      "ui.theme_label": "Switch theme",
      "ui.lang_label": "Switch language"
    },
    ja: {
      "nav.apps": "アプリ",
      "nav.games": "ゲーム",
      "nav.about": "概要",
      "hero.tagline": "モバイル体験を、つくる。",
      "hero.sub": "丁寧に設計したiOSアプリとゲーム。役立ち、軽快で、あなたのプライバシーを大切にします。",
      "hero.cta_apps": "アプリを見る",
      "hero.cta_games": "ゲームを見る",
      "hero.cta_links": "すべてのリンク",
      "badge.available": "配信中",
      "badge.soon": "近日公開",
      "common.learn_more": "詳しく見る",
      "apps.pill": "アプリ",
      "apps.title": "毎日に役立つツール",
      "apps.subtitle": "役立ち、軽快、広告もトラッキングもなし。",
      "portfolio.title": "プロダクト",
      "portfolio.subtitle": "プライバシーを尊重した、便利なアプリと丁寧に作られたゲーム。",
      "portfolio.filter_all": "すべて",
      "portfolio.filter_apps": "アプリ",
      "portfolio.filter_games": "ゲーム",
      "games.pill": "ゲーム",
      "games.title": "ひと息つけるゲーム",
      "games.subtitle": "ミニマルで、心地よく、長く遊べる。",
      "ecopompe.tagline": "ガソリン価格をリアルタイムで",
      "ecopompe.desc": "フランス全土の約10,000カ所のガソリンスタンドの価格を比較。近くの最安スタンドを見つけ、お気に入りを登録し、価格の推移も確認できます。広告もトラッキングも一切ありません。",
      "ecopompe.c1": "リアルタイム価格",
      "ecopompe.c2": "お気に入りスタンド",
      "ecopompe.c3": "位置情報検索",
      "ecopompe.c4": "ホーム画面ウィジェット",
      "ecopompe.c5": "スマート検索",
      "ecopompe.c6": "価格変動",
      "keeply.tagline": "ストレスフリーな写真整理",
      "keeply.desc": "スワイプして、残して、容量を解放。Keeplyは何千枚もの写真を短く安心できるミッションに変えます——重複、似た写真、スクリーンショット、重い動画。100% オンデバイス処理で、データ収集は一切ありません。",
      "keeply.c1": "ガイド付きミッション",
      "keeply.c2": "安全なゴミ箱",
      "keeply.c3": "重複 & 類似写真",
      "keeply.c4": "重い動画",
      "keeply.c5": "100% オンデバイス",
      "keeply.c6": "自由なエクスポート",
      "shizuku.tagline": "ハンドドリップ用タイマー · Pour Over",
      "shizuku.desc": "ハンドドリップを成功させる、手を使わないタイマー。最適なリズムで注湯の各ステップをガイドし、音声やApple Watchで操作。比率計算機でレシピも調整できます。画面に触れる必要はありません。",
      "shizuku.c1": "音声コマンド",
      "shizuku.c2": "ハンズフリー",
      "shizuku.c3": "ステップ別タイマー",
      "shizuku.c4": "Apple Watch",
      "shizuku.c5": "比率計算機",
      "shizuku.c6": "カスタムレシピ",
      "poddroid.tagline": "集中できるポッドキャスト",
      "poddroid.desc": "検索して、登録して、聴く。PodDroidはあなたの一日の再生リストを組み立て、運転中もサポートし、プライバシーを尊重します。広告なし、追跡なし。Androidで利用できます。",
      "poddroid.c1": "「マイデイ」キュー",
      "poddroid.c2": "没入型フィード",
      "poddroid.c3": "スリープタイマー",
      "poddroid.c4": "オフライン再生",
      "poddroid.c5": "Android Auto",
      "poddroid.c6": "広告・追跡なし",
      "randompix.tagline": "この写真は誰のもの?",
      "randompix.desc": "みんなの思い出から出題するパーティーゲーム。各自がギャラリーから写真を数枚ランダムに追加し、それが誰のものかをみんなで当てます。2〜10人、1ゲーム5分、大笑い間違いなし。",
      "randompix.c1": "あなたの実際の写真",
      "randompix.c2": "2〜10人",
      "randompix.c3": "回答は10秒",
      "randompix.c4": "コンボ x2",
      "randompix.c5": "絵文字リアクション",
      "randompix.c6": "消える写真",
      "binero.tagline": "ロジックを白と黒で",
      "binero.desc": "Binero(Takuzu / Binairo)は、数独のような安らぎをバイナリで。0と1だけを純粋な推理で埋めていきます。6×6から14×14までの50レベル、デイリーパズル、そして世界ランキングを搭載。",
      "binero.c1": "50レベル",
      "binero.c2": "デイリーパズル",
      "binero.c3": "適応型の難易度",
      "binero.c4": "世界ランキング",
      "binero.c5": "100% オフライン",
      "binero.c6": "ヒント & ヘルプ",
      "glyphe.tagline": "今日のコードを、純粋な推理で",
      "glyphe.desc": "毎日ひとつの推理パズル。4つのグリフからなるコードを6回以内で解き明かし、連勝記録を伸ばして世界ランキングを駆け上がりましょう。広告はありません。",
      "glyphe.c1": "1日1ゲーム",
      "glyphe.c2": "世界ランキング",
      "glyphe.c3": "ライト & ダーク",
      "glyphe.c4": "色覚サポートモード",
      "glyphe.c5": "100% オフライン",
      "glyphe.c6": "広告なし",
      "graviwords.tagline": "レトロアーケードの単語パズル",
      "graviwords.desc": "単語ゲームとレトロなブロックパズルが融合した、スリリングな一作。落ちて積み上がる文字をなぞって単語をつくり、爆発させて消去。7種のパワーを発動し、積み上がりを防ぎましょう。",
      "graviwords.c1": "単語をなぞる",
      "graviwords.c2": "ブロック物理演算",
      "graviwords.c3": "7種のパワー",
      "graviwords.c4": "Game Centerランキング",
      "graviwords.c5": "バイリンガル FR / EN",
      "graviwords.c6": "ショップ & コイン",
      "tengo.tagline": "つないで。たして。消す。",
      "tengo.desc": "ミニマルで心安らぐパズル。色とりどりのバブルのグリッド上で道をなぞり、合計ちょうど10をつくります。チェーンが長いほど、スコアもぐんぐん伸びます。",
      "tengo.c1": "目標は10",
      "tengo.c2": "XLコンボ",
      "tengo.c3": "ランキング",
      "tengo.c4": "10言語対応",
      "tengo.c5": "自動セーブ",
      "tengo.c6": "触覚 + サウンド",
      "orbis.tagline": "ひと触れで、ひとつの世界。",
      "orbis.desc": "押し続けて光の円を広げ、離して固定。敵に触れずにアリーナの75%を覆いましょう。ひとつの操作だけで楽しめる、心安らぐパズルです。",
      "orbis.c1": "操作はひとつだけ",
      "orbis.c2": "無限のステージ",
      "orbis.c3": "シンセサウンド",
      "orbis.c4": "Game Center",
      "orbis.c5": "ゼンなデザイン",
      "orbis.c6": "片手でプレイ",
      "meliz.tagline": "言葉を見つけて、心を整える。",
      "meliz.desc": "心安らぐパステルデザインのワードサーチゲーム。6つのカラフルなテーマ(動物、果物、国、スポーツ、色、職業)、3段階の難易度、そしてベストスコアに挑むタイマーを搭載。",
      "meliz.c1": "パステルデザイン",
      "meliz.c2": "タイマー & スコア",
      "meliz.c3": "ヒントはいつでも",
      "meliz.c4": "バイリンガル FR / EN",
      "meliz.c5": "繊細な触覚",
      "meliz.c6": "データはローカル保存",
      "motfleche.tagline": "禁じられた言葉を解き明かせ",
      "motfleche.desc": "1952年風ヴィンテージスタイルのクロスワードゲーム。スターで解放するテーマ(自然、動物、料理、宇宙…)、お好みのヒント、そして自動セーブを搭載。",
      "motfleche.c1": "検閲版",
      "motfleche.c2": "スターショップ",
      "motfleche.c3": "文字/単語ヒント",
      "motfleche.c4": "プレイ記録",
      "motfleche.c5": "オフライン対応",
      "motfleche.c6": "自動セーブ",
      "about.title": "AppCraft31について",
      "about.p1": "AppCraft31は、Toulouse(Haute-Garonne)を拠点とする独立系スタジオです。アイデアからApp Storeでの公開まで、iOSアプリをひとりで設計・開発しています。",
      "about.p2": "私の哲学は、<strong>役立ち</strong>、<strong>軽快</strong>で、<strong>誠実</strong>なアプリ。ダークパターンも、過剰な収益化も、データの転売もありません。",
      "about.stat_app_label": "アプリ",
      "about.stat_games_label": "ゲーム",
      "footer.privacy": "プライバシー",
      "footer.support": "サポート",
      "ui.theme_label": "テーマを切り替え",
      "ui.lang_label": "言語を切り替え"
    },
    ko: {
      "nav.apps": "앱",
      "nav.games": "게임",
      "nav.about": "소개",
      "hero.tagline": "모바일 경험을 창조합니다.",
      "hero.sub": "정성껏 설계한 iOS 앱과 게임 — 유용하고, 빠르며, 당신의 프라이버시를 존중합니다.",
      "hero.cta_apps": "앱 둘러보기",
      "hero.cta_games": "게임 둘러보기",
      "hero.cta_links": "모든 링크 보기",
      "badge.available": "출시됨",
      "badge.soon": "출시 예정",
      "common.learn_more": "자세히 보기",
      "apps.pill": "앱",
      "apps.title": "일상을 위한 도구",
      "apps.subtitle": "유용하고 빠르며, 광고와 추적이 없습니다.",
      "portfolio.title": "우리의 작품",
      "portfolio.subtitle": "개인정보를 존중하고 정성스럽게 만든 유용한 앱과 게임.",
      "portfolio.filter_all": "전체",
      "portfolio.filter_apps": "앱",
      "portfolio.filter_games": "게임",
      "games.pill": "게임",
      "games.title": "일상에서 벗어나는 게임",
      "games.subtitle": "미니멀하고 편안하며, 오래 즐기도록 만들었습니다.",
      "ecopompe.tagline": "실시간 주유 가격",
      "ecopompe.desc": "프랑스 전역 약 10,000개 주유소의 가격을 비교하세요. 가까운 곳에서 가장 저렴한 주유소를 찾고, 즐겨찾기를 관리하며, 가격 변동 내역을 확인하세요 — 광고도 추적도 없이.",
      "ecopompe.c1": "실시간 가격",
      "ecopompe.c2": "즐겨찾는 주유소",
      "ecopompe.c3": "위치 기반 검색",
      "ecopompe.c4": "홈 화면 위젯",
      "ecopompe.c5": "스마트 검색",
      "ecopompe.c6": "가격 변동",
      "keeply.tagline": "스트레스 없는 사진 정리",
      "keeply.desc": "스와이프하고, 보관하고, 용량을 확보하세요. Keeply는 수천 장의 사진을 짧고 안심되는 미션으로 바꿔줍니다 — 중복 사진, 유사 사진, 스크린샷, 용량이 큰 동영상. 100% 기기 내 처리, 데이터 수집 없음.",
      "keeply.c1": "안내형 미션",
      "keeply.c2": "안전한 휴지통",
      "keeply.c3": "중복 & 유사 사진",
      "keeply.c4": "용량 큰 동영상",
      "keeply.c5": "100% 온디바이스",
      "keeply.c6": "자유로운 내보내기",
      "shizuku.tagline": "핸드드립 타이머 · Pour Over",
      "shizuku.desc": "완벽한 핸드드립 커피를 위한 핸즈프리 타이머. 정확한 리듬으로 모든 추출 단계를 따라가고, 음성이나 Apple Watch로 조작하며, 비율 계산기로 레시피를 조정하세요 — 화면을 만지지 않고.",
      "shizuku.c1": "음성 명령",
      "shizuku.c2": "핸즈프리",
      "shizuku.c3": "단계별 타이머",
      "shizuku.c4": "Apple Watch",
      "shizuku.c5": "비율 계산기",
      "shizuku.c6": "맞춤 레시피",
      "poddroid.tagline": "방해 없는 팟캐스트",
      "poddroid.desc": "검색하고, 구독하고, 들으세요. PodDroid는 하루치 청취 목록을 구성하고, 운전 중에도 함께하며, 개인정보를 존중합니다 — 광고와 추적 없이. Android에서 이용할 수 있습니다.",
      "poddroid.c1": "'마이 데이' 대기열",
      "poddroid.c2": "몰입형 피드",
      "poddroid.c3": "취침 타이머",
      "poddroid.c4": "오프라인 청취",
      "poddroid.c5": "Android Auto",
      "poddroid.c6": "광고·추적 없음",
      "randompix.tagline": "누구의 사진인지 맞혀 보세요",
      "randompix.desc": "여러분의 추억에서 뽑아내는 파티 게임. 각자 갤러리에서 사진 몇 장을 무작위로 추가하면, 모두가 누구의 사진인지 맞힙니다. 2~10명, 한 판에 5분, 폭소 보장.",
      "randompix.c1": "진짜 내 사진",
      "randompix.c2": "2~10명",
      "randompix.c3": "10초 추측",
      "randompix.c4": "콤보 x2",
      "randompix.c5": "이모지 반응",
      "randompix.c6": "사라지는 사진",
      "binero.tagline": "흑백의 논리",
      "binero.desc": "Binero(Takuzu / Binairo)는 스도쿠의 편안함을 이진법으로 옮긴 게임. 순수한 추리로 0과 1만 채워 넣으세요. 6×6부터 14×14까지 50개 레벨, 데일리 퍼즐, 그리고 글로벌 순위표를 제공합니다.",
      "binero.c1": "50개 레벨",
      "binero.c2": "데일리 퍼즐",
      "binero.c3": "적응형 난이도",
      "binero.c4": "글로벌 순위표",
      "binero.c5": "100% 오프라인",
      "binero.c6": "힌트 & 도움말",
      "glyphe.tagline": "오늘의 코드를, 순수한 추리로",
      "glyphe.desc": "매일 하나의 추리 퍼즐. 네 개의 글리프로 된 코드를 여섯 번 안에 풀고, 연승 기록을 이어가며 글로벌 순위표를 올라가세요 — 광고 없이.",
      "glyphe.c1": "하루 한 판",
      "glyphe.c2": "글로벌 순위표",
      "glyphe.c3": "라이트 & 다크",
      "glyphe.c4": "색약 모드",
      "glyphe.c5": "100% 오프라인",
      "glyphe.c6": "광고 없음",
      "graviwords.tagline": "레트로 아케이드 단어 퍼즐",
      "graviwords.desc": "단어 게임과 레트로 블록 퍼즐을 짜릿하게 결합했습니다. 글자가 떨어져 쌓이면, 단어를 그어 터뜨리고, 7가지 파워를 발동해 더미가 넘치지 않게 막으세요.",
      "graviwords.c1": "단어 긋기",
      "graviwords.c2": "블록 물리",
      "graviwords.c3": "7가지 파워",
      "graviwords.c4": "Game Center 순위",
      "graviwords.c5": "이중 언어 FR / EN",
      "graviwords.c6": "상점 & 코인",
      "tengo.tagline": "잇고. 더하고. 비우고.",
      "tengo.desc": "미니멀하고 편안한 퍼즐 — 색색의 버블 그리드에 경로를 그어 합이 정확히 10이 되게 만드세요. 사슬이 길수록 점수는 더 높아집니다.",
      "tengo.c1": "목표 10",
      "tengo.c2": "XL 콤보",
      "tengo.c3": "순위표",
      "tengo.c4": "10개 언어",
      "tengo.c5": "자동 저장",
      "tengo.c6": "햅틱 + 사운드",
      "orbis.tagline": "한 번의 터치, 하나의 세계.",
      "orbis.desc": "누르고 있으면 빛의 원이 퍼져 나갑니다. 손을 떼면 고정됩니다. 적과 닿지 않고 아레나의 75%를 덮으세요. 단 하나의 동작으로 즐기는 편안한 퍼즐.",
      "orbis.c1": "단 하나의 동작",
      "orbis.c2": "무한 레벨",
      "orbis.c3": "합성 사운드",
      "orbis.c4": "Game Center",
      "orbis.c5": "젠 디자인",
      "orbis.c6": "한 손으로 충분",
      "meliz.tagline": "단어를 찾고, 마음을 가다듬으세요.",
      "meliz.desc": "차분한 파스텔 디자인의 단어 찾기 게임. 여섯 가지 다채로운 테마(동물, 과일, 나라, 스포츠, 색깔, 직업), 세 가지 난이도, 그리고 최고 기록에 도전하는 타이머.",
      "meliz.c1": "파스텔 디자인",
      "meliz.c2": "타이머 & 점수",
      "meliz.c3": "원할 때 힌트",
      "meliz.c4": "이중 언어 FR / EN",
      "meliz.c5": "섬세한 햅틱",
      "meliz.c6": "로컬 데이터",
      "motfleche.tagline": "금지된 단어를 풀어내세요",
      "motfleche.desc": "1952년 빈티지 스타일의 크로스워드 게임. 별로 잠금 해제하는 테마(자연, 동물, 요리, 우주…), 원하는 만큼 쓰는 힌트, 그리고 자동 저장.",
      "motfleche.c1": "검열판 에디션",
      "motfleche.c2": "별 상점",
      "motfleche.c3": "글자/단어 힌트",
      "motfleche.c4": "진행 기록",
      "motfleche.c5": "오프라인",
      "motfleche.c6": "자동 저장",
      "about.title": "AppCraft31 소개",
      "about.p1": "AppCraft31은 Toulouse(Haute-Garonne)에 자리한 독립 스튜디오입니다. 아이디어부터 App Store 출시까지, iOS 앱을 혼자서 기획하고 개발합니다.",
      "about.p2": "제 철학은 <strong>유용하고</strong>, <strong>빠르며</strong>, <strong>존중하는</strong> 앱입니다. 다크 패턴도, 과도한 수익화도, 데이터 판매도 없습니다.",
      "about.stat_app_label": "앱",
      "about.stat_games_label": "게임",
      "footer.privacy": "개인정보 보호",
      "footer.support": "지원",
      "ui.theme_label": "테마 변경",
      "ui.lang_label": "언어 변경"
    },
    es: {
      "nav.apps": "Aplicaciones",
      "nav.games": "Juegos",
      "nav.about": "Acerca de",
      "hero.tagline": "Creador de experiencias móviles.",
      "hero.sub": "Aplicaciones y juegos iOS pensados con cuidado: útiles, rápidos y respetuosos con tu privacidad.",
      "hero.cta_apps": "Nuestras aplicaciones",
      "hero.cta_games": "Nuestros juegos",
      "hero.cta_links": "Todos nuestros enlaces",
      "badge.available": "Disponible",
      "badge.soon": "Próximamente",
      "common.learn_more": "Saber más",
      "apps.pill": "Aplicaciones",
      "apps.title": "Herramientas para el día a día",
      "apps.subtitle": "Útiles, rápidas, sin anuncios ni rastreo.",
      "portfolio.title": "Nuestras Creaciones",
      "portfolio.subtitle": "Aplicaciones útiles y juegos cuidados, respetuosos con su privacidad.",
      "portfolio.filter_all": "Todos",
      "portfolio.filter_apps": "Aplicaciones",
      "portfolio.filter_games": "Juegos",
      "games.pill": "Juegos",
      "games.title": "Juegos para evadirte",
      "games.subtitle": "Minimalistas, zen, diseñados para durar.",
      "ecopompe.tagline": "Precios de carburante en tiempo real",
      "ecopompe.desc": "Compara los precios de las ~10.000 gasolineras de Francia. Encuentra la más barata cerca de ti, sigue tus favoritas y consulta el historial de precios, todo sin anuncios ni rastreo.",
      "ecopompe.c1": "Precios en tiempo real",
      "ecopompe.c2": "Gasolineras favoritas",
      "ecopompe.c3": "Geolocalización",
      "ecopompe.c4": "Widget de inicio",
      "ecopompe.c5": "Búsqueda inteligente",
      "ecopompe.c6": "Variaciones de precio",
      "keeply.tagline": "Ordena tus fotos sin estrés",
      "keeply.desc": "Desliza, conserva, libera espacio. Keeply convierte miles de fotos en misiones cortas y tranquilizadoras: duplicados, similares, capturas de pantalla, vídeos pesados. 100 % local, sin recopilación de datos.",
      "keeply.c1": "Misiones guiadas",
      "keeply.c2": "Papelera de seguridad",
      "keeply.c3": "Duplicados y similares",
      "keeply.c4": "Vídeos pesados",
      "keeply.c5": "100 % local",
      "keeply.c6": "Exportación libre",
      "shizuku.tagline": "Temporizador de café filtrado · Pour Over",
      "shizuku.desc": "El temporizador manos libres para clavar tu café filtrado. Sigue cada fase de vertido al ritmo perfecto, contrólalo por voz o desde tu Apple Watch y ajusta tus recetas con la calculadora de ratio, sin tocar la pantalla.",
      "shizuku.c1": "Control por voz",
      "shizuku.c2": "Manos libres",
      "shizuku.c3": "Temporizador por fases",
      "shizuku.c4": "Apple Watch",
      "shizuku.c5": "Calculadora de ratio",
      "shizuku.c6": "Recetas personalizadas",
      "poddroid.tagline": "Tus pódcasts, sin distracciones",
      "poddroid.desc": "Busca, suscríbete y escucha. PodDroid arma tu jornada de escucha, te acompaña al volante y respeta tu privacidad: sin anuncios ni rastreo. Disponible en Android.",
      "poddroid.c1": "Cola «Mi día»",
      "poddroid.c2": "Feed inmersivo",
      "poddroid.c3": "Temporizador de apagado",
      "poddroid.c4": "Escucha sin conexión",
      "poddroid.c5": "Android Auto",
      "poddroid.c6": "Sin anuncios ni rastreo",
      "randompix.tagline": "Adivina de quién es la foto",
      "randompix.desc": "El party game que tira de TUS recuerdos. Cada uno añade unas fotos al azar de su galería y todos adivinan a quién pertenecen. De 2 a 10 jugadores, 5 minutos por partida y risas garantizadas.",
      "randompix.c1": "Tus fotos reales",
      "randompix.c2": "De 2 a 10 jugadores",
      "randompix.c3": "10 s para adivinar",
      "randompix.c4": "Combos x2",
      "randompix.c5": "Reacciones emoji",
      "randompix.c6": "Fotos efímeras",
      "binero.tagline": "La lógica en blanco y negro",
      "binero.desc": "Binero (Takuzu / Binairo): la calma del sudoku, en binario. Rellena la cuadrícula de 0 y 1 por pura deducción: 50 niveles del 6×6 al 14×14, un reto diario y un ranking mundial.",
      "binero.c1": "50 niveles",
      "binero.c2": "Reto diario",
      "binero.c3": "Dificultad adaptativa",
      "binero.c4": "Ranking mundial",
      "binero.c5": "100 % sin conexión",
      "binero.c6": "Pistas y ayuda",
      "glyphe.tagline": "El código del día, por pura deducción",
      "glyphe.desc": "Un enigma de deducción cada día. Descifra el código de cuatro glifos en seis intentos, mantén tu racha y sube en el ranking mundial — sin anuncios.",
      "glyphe.c1": "Una partida al día",
      "glyphe.c2": "Ranking mundial",
      "glyphe.c3": "Claro y oscuro",
      "glyphe.c4": "Modo daltónico",
      "glyphe.c5": "100 % sin conexión",
      "glyphe.c6": "Sin anuncios",
      "graviwords.tagline": "El puzle de palabras arcade retro",
      "graviwords.desc": "Una mezcla frenética de juego de palabras y puzle de ladrillos retro. Las letras caen y se apilan: traza palabras para hacerlas explotar, activa 7 poderes y evita que la pila se desborde.",
      "graviwords.c1": "Traza palabras",
      "graviwords.c2": "Física de bloques",
      "graviwords.c3": "7 poderes",
      "graviwords.c4": "Ranking Game Center",
      "graviwords.c5": "Bilingüe FR / EN",
      "graviwords.c6": "Tienda y monedas",
      "tengo.tagline": "Conecta. Suma. Libera.",
      "tengo.desc": "Un puzle minimalista y relajante: traza un camino por una cuadrícula de burbujas de colores para formar sumas de exactamente 10. Cuanto más larga es la cadena, más sube la puntuación.",
      "tengo.c1": "Objetivo 10",
      "tengo.c2": "Combos XL",
      "tengo.c3": "Ranking",
      "tengo.c4": "10 idiomas",
      "tengo.c5": "Guardado automático",
      "tengo.c6": "Háptica y sonidos",
      "orbis.tagline": "Un toque. Un universo.",
      "orbis.desc": "Mantén pulsado para desplegar un círculo de luz. Suelta para fijarlo. Cubre el 75 % de la arena sin rozar a los enemigos. Un puzle zen de un solo gesto.",
      "orbis.c1": "Un solo gesto",
      "orbis.c2": "Niveles infinitos",
      "orbis.c3": "Sonido sintetizado",
      "orbis.c4": "Game Center",
      "orbis.c5": "Diseño zen",
      "orbis.c6": "Con una mano",
      "meliz.tagline": "Encuentra las palabras, recupera la calma.",
      "meliz.desc": "Una sopa de letras con un diseño pastel relajante. Seis universos llenos de color (Animales, Frutas, Países, Deportes, Colores, Profesiones), tres niveles de dificultad y un cronómetro para batir tus mejores marcas.",
      "meliz.c1": "Diseño pastel",
      "meliz.c2": "Cronómetro y puntos",
      "meliz.c3": "Pistas a demanda",
      "meliz.c4": "Bilingüe FR / EN",
      "meliz.c5": "Háptica precisa",
      "meliz.c6": "Datos locales",
      "motfleche.tagline": "Descifra las palabras prohibidas",
      "motfleche.desc": "Un juego de crucigramas con estilo vintage de 1952. Temas que desbloquear con estrellas (Naturaleza, Animales, Cocina, Espacio…), pistas a la carta y guardado automático.",
      "motfleche.c1": "Edición censurada",
      "motfleche.c2": "Tienda de estrellas",
      "motfleche.c3": "Pistas Letra/Palabra",
      "motfleche.c4": "Diario de a bordo",
      "motfleche.c5": "Sin conexión",
      "motfleche.c6": "Guardado automático",
      "about.title": "Acerca de AppCraft31",
      "about.p1": "AppCraft31 es un estudio independiente con sede en Toulouse (Haute-Garonne). Diseño y desarrollo aplicaciones iOS en solitario, desde la idea hasta la publicación en la App Store.",
      "about.p2": "Mi filosofía: apps <strong>útiles</strong>, <strong>rápidas</strong> y <strong>respetuosas</strong>. Sin dark patterns, sin monetización excesiva, sin datos revendidos.",
      "about.stat_app_label": "Aplicaciones",
      "about.stat_games_label": "Juegos",
      "footer.privacy": "Privacidad",
      "footer.support": "Soporte",
      "ui.theme_label": "Cambiar de tema",
      "ui.lang_label": "Cambiar de idioma"
    },
    de: {
      "nav.apps": "Apps",
      "nav.games": "Spiele",
      "nav.about": "Über uns",
      "hero.tagline": "Gestalter mobiler Erlebnisse.",
      "hero.sub": "Sorgfältig durchdachte iOS-Apps und -Spiele — nützlich, schnell und respektvoll gegenüber Ihrer Privatsphäre.",
      "hero.cta_apps": "Unsere Apps",
      "hero.cta_games": "Unsere Spiele",
      "hero.cta_links": "Alle unsere Links",
      "badge.available": "Verfügbar",
      "badge.soon": "Bald",
      "common.learn_more": "Mehr erfahren",
      "apps.pill": "Apps",
      "apps.title": "Werkzeuge für den Alltag",
      "apps.subtitle": "Nützlich, schnell, ohne Werbung und Tracking.",
      "portfolio.title": "Unsere Kreationen",
      "portfolio.subtitle": "Nützliche Apps und sorgfältig gestaltete Spiele, die Ihre Privatsphäre respektieren.",
      "portfolio.filter_all": "Alle",
      "portfolio.filter_apps": "Apps",
      "portfolio.filter_games": "Spiele",
      "games.pill": "Spiele",
      "games.title": "Spiele zum Abschalten",
      "games.subtitle": "Minimalistisch, entspannend, gemacht für die Dauer.",
      "ecopompe.tagline": "Kraftstoffpreise in Echtzeit",
      "ecopompe.desc": "Vergleichen Sie die Preise der ~10.000 Tankstellen in Frankreich. Finden Sie die günstigste in Ihrer Nähe, behalten Sie Ihre Favoriten im Blick und sehen Sie sich den Preisverlauf an — alles ohne Werbung und Tracking.",
      "ecopompe.c1": "Echtzeitpreise",
      "ecopompe.c2": "Lieblingstankstellen",
      "ecopompe.c3": "Standortsuche",
      "ecopompe.c4": "Homescreen-Widget",
      "ecopompe.c5": "Intelligente Suche",
      "ecopompe.c6": "Preisänderungen",
      "keeply.tagline": "Fotos aufräumen ohne Stress",
      "keeply.desc": "Wischen, behalten, Platz freimachen. Keeply verwandelt Tausende Fotos in kurze, beruhigende Missionen — Duplikate, ähnliche Fotos, Screenshots, große Videos. 100 % lokal, keine Datenerfassung.",
      "keeply.c1": "Geführte Missionen",
      "keeply.c2": "Sicherer Papierkorb",
      "keeply.c3": "Duplikate & Ähnliche",
      "keeply.c4": "Große Videos",
      "keeply.c5": "100 % lokal",
      "keeply.c6": "Freier Export",
      "shizuku.tagline": "Timer für Filterkaffee · Pour Over",
      "shizuku.desc": "Der freihändige Timer für den perfekten Filterkaffee. Begleiten Sie jeden Aufgussschritt im idealen Rhythmus, steuern Sie per Stimme oder über Ihre Apple Watch und passen Sie Ihre Rezepte mit dem Ratio-Rechner an — ganz ohne den Bildschirm zu berühren.",
      "shizuku.c1": "Sprachbefehle",
      "shizuku.c2": "Freihändig",
      "shizuku.c3": "Timer pro Schritt",
      "shizuku.c4": "Apple Watch",
      "shizuku.c5": "Ratio-Rechner",
      "shizuku.c6": "Eigene Rezepte",
      "poddroid.tagline": "Deine Podcasts, ohne Ablenkung",
      "poddroid.desc": "Suchen, abonnieren und hören. PodDroid stellt deinen Hörtag zusammen, begleitet dich am Steuer und respektiert deine Privatsphäre – ohne Werbung, ohne Tracking. Verfügbar für Android.",
      "poddroid.c1": "„Mein Tag\"-Warteschlange",
      "poddroid.c2": "Immersiver Feed",
      "poddroid.c3": "Sleep-Timer",
      "poddroid.c4": "Offline hören",
      "poddroid.c5": "Android Auto",
      "poddroid.c6": "Ohne Werbung & Tracking",
      "randompix.tagline": "Errate, wessen Foto es ist",
      "randompix.desc": "Das Partyspiel, das in EUREN Erinnerungen stöbert. Jeder fügt ein paar zufällige Fotos aus seiner Galerie hinzu, und alle raten, wem sie gehören. Von 2 bis 10 Spielern, 5 Minuten pro Runde, Lachanfälle garantiert.",
      "randompix.c1": "Eure echten Fotos",
      "randompix.c2": "2 bis 10 Spieler",
      "randompix.c3": "10 Sek. zum Raten",
      "randompix.c4": "Combos x2",
      "randompix.c5": "Emoji-Reaktionen",
      "randompix.c6": "Vergängliche Fotos",
      "binero.tagline": "Logik in Schwarz und Weiß",
      "binero.desc": "Binero (Takuzu / Binairo): die Ruhe von Sudoku, in Binär. Füllen Sie das Gitter mit 0 und 1 durch reine Deduktion — 50 Level von 6×6 bis 14×14, ein tägliches Rätsel und eine weltweite Rangliste.",
      "binero.c1": "50 Level",
      "binero.c2": "Tägliches Rätsel",
      "binero.c3": "Adaptive Schwierigkeit",
      "binero.c4": "Weltweite Rangliste",
      "binero.c5": "100 % offline",
      "binero.c6": "Tipps & Hilfe",
      "glyphe.tagline": "Der Code des Tages, durch reine Deduktion",
      "glyphe.desc": "Ein Deduktionsrätsel pro Tag. Knacke den Code aus vier Glyphen in sechs Versuchen, halte deine Serie und klettere in der weltweiten Rangliste — ohne Werbung.",
      "glyphe.c1": "Eine Partie pro Tag",
      "glyphe.c2": "Weltweite Rangliste",
      "glyphe.c3": "Hell & Dunkel",
      "glyphe.c4": "Farbsehmodus",
      "glyphe.c5": "100 % offline",
      "glyphe.c6": "Ohne Werbung",
      "graviwords.tagline": "Das Retro-Arcade-Wortpuzzle",
      "graviwords.desc": "Eine nervenaufreibende Mischung aus Wortspiel und Retro-Blockpuzzle. Die Buchstaben fallen und stapeln sich: Zeichne Wörter, um sie zum Explodieren zu bringen, löse 7 Power-ups aus und verhindere, dass der Stapel überläuft.",
      "graviwords.c1": "Wörter ziehen",
      "graviwords.c2": "Block-Physik",
      "graviwords.c3": "7 Power-ups",
      "graviwords.c4": "Game-Center-Rangliste",
      "graviwords.c5": "Zweisprachig FR / EN",
      "graviwords.c6": "Shop & Münzen",
      "tengo.tagline": "Verbinden. Addieren. Befreien.",
      "tengo.desc": "Ein minimalistisches, beruhigendes Puzzle: Zeichne einen Pfad über ein Raster aus bunten Blasen, um Summen von genau 10 zu bilden. Je länger die Kette, desto höher der Punktestand.",
      "tengo.c1": "Ziel 10",
      "tengo.c2": "XL-Combos",
      "tengo.c3": "Rangliste",
      "tengo.c4": "10 Sprachen",
      "tengo.c5": "Auto-Speichern",
      "tengo.c6": "Haptik + Sound",
      "orbis.tagline": "Eine Berührung. Ein Universum.",
      "orbis.desc": "Tippe und halte, um einen Lichtkreis auszubreiten. Lass los, um ihn zu verankern. Bedecke 75 % der Arena, ohne die Gegner zu berühren. Ein Zen-Puzzle mit nur einer Geste.",
      "orbis.c1": "Eine einzige Geste",
      "orbis.c2": "Endlose Level",
      "orbis.c3": "Synthetischer Sound",
      "orbis.c4": "Game Center",
      "orbis.c5": "Zen-Design",
      "orbis.c6": "Einhandbedienung",
      "meliz.tagline": "Finde die Wörter, finde die Ruhe.",
      "meliz.desc": "Ein Buchstabensalat-Spiel im beruhigenden Pastell-Design. Sechs bunte Welten (Tiere, Früchte, Länder, Sport, Farben, Berufe), drei Schwierigkeitsstufen und ein Timer, um deine Bestleistungen zu überbieten.",
      "meliz.c1": "Pastell-Design",
      "meliz.c2": "Timer & Punkte",
      "meliz.c3": "Tipps auf Abruf",
      "meliz.c4": "Zweisprachig FR / EN",
      "meliz.c5": "Feine Haptik",
      "meliz.c6": "Lokale Daten",
      "motfleche.tagline": "Entschlüssle die verbotenen Wörter",
      "motfleche.desc": "Ein Schwedenrätsel im Vintage-Stil von 1952. Themen, die sich mit Sternen freischalten lassen (Natur, Tiere, Küche, Weltraum…), Tipps nach Wahl und automatisches Speichern.",
      "motfleche.c1": "Zensierte Ausgabe",
      "motfleche.c2": "Sterne-Shop",
      "motfleche.c3": "Tipps Buchstabe/Wort",
      "motfleche.c4": "Logbuch",
      "motfleche.c5": "Offline",
      "motfleche.c6": "Auto-Speichern",
      "about.title": "Über AppCraft31",
      "about.p1": "AppCraft31 ist ein unabhängiges Studio mit Sitz in Toulouse (Haute-Garonne). Ich entwerfe und entwickle iOS-Apps im Alleingang — von der Idee bis zur Veröffentlichung im App Store.",
      "about.p2": "Meine Philosophie: Apps, die <strong>nützlich</strong>, <strong>schnell</strong> und <strong>respektvoll</strong> sind. Keine Dark Patterns, keine übertriebene Monetarisierung, kein Weiterverkauf von Daten.",
      "about.stat_app_label": "Apps",
      "about.stat_games_label": "Spiele",
      "footer.privacy": "Datenschutz",
      "footer.support": "Support",
      "ui.theme_label": "Design wechseln",
      "ui.lang_label": "Sprache wechseln"
    }
  };

  // ---- Stockage ----
  var LS_LANG = "ac31_lang";
  var LS_THEME = "ac31_theme";

  function getStored(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function setStored(key, val) {
    try { localStorage.setItem(key, val); } catch (e) {}
  }

  // ---- Détection langue : stockée > navigateur > français ----
  function detectLang() {
    var stored = getStored(LS_LANG);
    if (stored && I18N[stored]) return stored;
    var nav = (navigator.languages || [navigator.language || "fr"]);
    for (var i = 0; i < nav.length; i++) {
      var code = (nav[i] || "").slice(0, 2).toLowerCase();
      if (I18N[code]) return code;
    }
    return "fr";
  }

  // ---- Détection thème : stocké > préférence système ----
  function detectTheme() {
    var stored = getStored(LS_THEME);
    if (stored === "light" || stored === "dark") return stored;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
    return "dark";
  }

  // ---- Application des traductions ----
  function applyLang(lang) {
    var dict = I18N[lang] || I18N.fr;
    document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = dict[key];
      if (val == null) val = I18N.fr[key];
      if (val != null) el.innerHTML = val;
    });

    // Attributs traduisibles (aria-label, title, etc.)
    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    attrNodes.forEach(function (el) {
      // format : "attribut:clé;attribut2:clé2"
      var spec = el.getAttribute("data-i18n-attr");
      spec.split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length === 2) {
          var attr = parts[0].trim();
          var k = parts[1].trim();
          var v = dict[k] != null ? dict[k] : I18N.fr[k];
          if (v != null) el.setAttribute(attr, v);
        }
      });
    });

    // Mise à jour de l'état visuel du sélecteur de langue
    document.querySelectorAll("[data-lang-option]").forEach(function (opt) {
      opt.setAttribute("aria-current", opt.getAttribute("data-lang-option") === lang ? "true" : "false");
    });
    var current = document.getElementById("lang-current");
    if (current) {
      var info = LANGS.filter(function (l) { return l.code === lang; })[0];
      if (info) current.textContent = info.flag + " " + info.code.toUpperCase();
    }
  }

  function setLang(lang) {
    if (!I18N[lang]) lang = "fr";
    setStored(LS_LANG, lang);
    applyLang(lang);
  }

  // ---- Thème ----
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      var isDark = theme === "dark";
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      var icon = btn.querySelector(".theme-icon");
      if (icon) icon.textContent = isDark ? "☾" : "☀";
    }
  }

  function setTheme(theme) {
    setStored(LS_THEME, theme);
    applyTheme(theme);
  }

  // ---- Initialisation (appel le plus tôt possible pour éviter le flash) ----
  function initTheme() {
    applyTheme(detectTheme());
  }

  function initUI() {
    // Construction du menu de langues
    var menu = document.getElementById("lang-menu");
    if (menu) {
      menu.innerHTML = "";
      LANGS.forEach(function (l) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "lang-option";
        b.setAttribute("data-lang-option", l.code);
        b.setAttribute("lang", l.code);
        b.innerHTML = '<span class="lang-flag">' + l.flag + "</span><span>" + l.label + "</span>";
        b.addEventListener("click", function () {
          setLang(l.code);
          closeLangMenu();
        });
        menu.appendChild(b);
      });
    }

    // Sélecteur de langue (ouverture/fermeture)
    var trigger = document.getElementById("lang-trigger");
    if (trigger) {
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", open ? "false" : "true");
        if (menu) menu.classList.toggle("open", !open);
      });
      document.addEventListener("click", closeLangMenu);
    }

    // Bouton thème
    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme");
        setTheme(current === "dark" ? "light" : "dark");
      });
    }

    applyLang(detectLang());

    // Suivi des changements de préférence système (si pas de choix manuel)
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (e) {
        if (!getStored(LS_THEME)) applyTheme(e.matches ? "dark" : "light");
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  function closeLangMenu() {
    var trigger = document.getElementById("lang-trigger");
    var menu = document.getElementById("lang-menu");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    if (menu) menu.classList.remove("open");
  }

  // Applique le thème immédiatement (le script est chargé dans <head> avec defer => DOM prêt)
  if (document.readyState === "loading") {
    initTheme();
    document.addEventListener("DOMContentLoaded", initUI);
  } else {
    initTheme();
    initUI();
  }

  // Exposition minimale pour debug
  window.AppCraftI18N = { setLang: setLang, setTheme: setTheme, langs: LANGS };
})();
