import type { Lang } from '@/lib/types';

/**
 * Textes du jeu web Tinta (grille du jour), dans les six langues du site.
 *
 * Tout ce qui est dit de l'app se vérifie dans son code (dépôt Tinta) :
 * 360 niveaux (`GridCipher/puzzles.json`), crayon (`PlayerBoard.marks`),
 * indices expliqués (`PuzzleEngine/Hints.swift`), une grille du jour identique
 * pour tous (`DailyPuzzle.swift`).
 */

export interface TintaCopy {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  intro: string;
  loading: string;
  noPuzzle: string;
  colors: [string, string, string, string];
  paletteLabel: string;
  erase: string;
  pencil: string;
  undo: string;
  help: string;
  wrong: string;
  mistakes: (n: number) => string;
  format: (size: number, colors: number) => string;
  winTitle: [string, string, string];
  winBody: string;
  share: string;
  copied: string;
  streak: (n: number) => string;
  nextIn: (hhmm: string) => string;
  ctaTitle: string;
  ctaBody: string;
  ctaBadgeAlt: string;
  tutoTitle: string;
  tuto: [string, string, string];
  tutoGo: string;
  rulesTitle: string;
  rules: string[];
  aboutApp: string;
  cellLabel: (r: number, c: number, color: string | null, locked: boolean) => string;
  chipLabel: (line: 'row' | 'col', i: number, n: number, color: string) => string;
}

const fr: TintaCopy = {
  metaTitle: 'Tinta — la grille du jour',
  metaDescription:
    'Jouez gratuitement à la grille du jour de Tinta dans votre navigateur : un puzzle de logique en couleurs, le même pour tous, à partager en emojis. Sans inscription.',
  kicker: 'Tinta · grille du jour',
  title: 'La grille du jour',
  intro: 'Un puzzle de logique en couleurs, le même pour tout le monde. Une nouvelle grille chaque jour à minuit.',
  loading: 'Chargement de la grille…',
  noPuzzle: 'Pas de grille du jour disponible pour cette date. Retrouvez-les toutes dans l’app.',
  colors: ['teal', 'ambre', 'rose', 'violet'],
  paletteLabel: 'Couleurs',
  erase: 'Gomme',
  pencil: 'Crayon',
  undo: 'Annuler',
  help: 'Comment jouer',
  wrong: 'Quelque chose cloche',
  mistakes: (n) => (n <= 1 ? `${n} erreur` : `${n} erreurs`),
  format: (s, c) => `${s}×${s} · ${c} couleurs`,
  winTitle: ['Résolue !', 'Bien joué !', 'Parfait !'],
  winBody: 'Revenez demain pour la prochaine grille.',
  share: 'Partager',
  copied: 'Résultat copié',
  streak: (n) => (n <= 1 ? `Série : ${n} jour` : `Série : ${n} jours`),
  nextIn: (t) => `Prochaine grille dans ${t}`,
  ctaTitle: 'Encore une ?',
  ctaBody: '360 niveaux, le crayon et des indices expliqués pas à pas : tout est dans l’app Tinta, sur iPhone et iPad.',
  ctaBadgeAlt: 'Télécharger dans l’App Store',
  tutoTitle: 'Comment jouer',
  tuto: [
    'Coloriez chaque case : choisissez une couleur, puis touchez la case.',
    'Une pastille au bord compte les cases d’une couleur sur sa rangée ou sa colonne.',
    '= : même couleur. ≠ : couleurs différentes. Les cases à cadenas sont données.',
  ],
  tutoGo: 'C’est parti',
  rulesTitle: 'Les règles de Tinta',
  rules: [
    'La grille (5×5 à 7×7) se remplit avec trois ou quatre couleurs : teal, ambre, rose et, le samedi, violet.',
    'Les pastilles placées au bord d’une rangée ou d’une colonne donnent le nombre exact de cases de cette couleur sur la ligne. Une pastille atteinte s’estompe ; dépassée, elle passe au rouge.',
    'Un marqueur = entre deux cases voisines impose la même couleur, un marqueur ≠ deux couleurs différentes. Les cases à cadenas sont révélées d’office.',
    'La solution est unique et se trouve par déduction, sans jamais deviner. Une grille pleine mais fausse compte une erreur ; sans erreur, c’est trois étoiles.',
    'Le crayon sert à barrer les couleurs impossibles d’une case vide.',
  ],
  aboutApp: 'À propos de l’app Tinta',
  cellLabel: (r, c, color, locked) =>
    `Ligne ${r + 1}, colonne ${c + 1}, ${color ?? 'vide'}${locked ? ', verrouillée' : ''}`,
  chipLabel: (line, i, n, color) => `${line === 'row' ? 'Ligne' : 'Colonne'} ${i + 1} : ${n} ${color}`,
};

const en: TintaCopy = {
  metaTitle: 'Tinta — the daily grid',
  metaDescription:
    'Play Tinta’s daily grid for free in your browser: a colourful logic puzzle, the same for everyone, with an emoji result to share. No sign-up.',
  kicker: 'Tinta · daily grid',
  title: 'The daily grid',
  intro: 'A colourful logic puzzle, the same for everyone. A new grid every day at midnight.',
  loading: 'Loading the grid…',
  noPuzzle: 'No daily grid is available for this date. Find them all in the app.',
  colors: ['teal', 'amber', 'rose', 'violet'],
  paletteLabel: 'Colours',
  erase: 'Eraser',
  pencil: 'Pencil',
  undo: 'Undo',
  help: 'How to play',
  wrong: 'Something’s not right',
  mistakes: (n) => (n === 1 ? '1 mistake' : `${n} mistakes`),
  format: (s, c) => `${s}×${s} · ${c} colours`,
  winTitle: ['Solved!', 'Well played!', 'Perfect!'],
  winBody: 'Come back tomorrow for the next grid.',
  share: 'Share',
  copied: 'Result copied',
  streak: (n) => (n === 1 ? 'Streak: 1 day' : `Streak: ${n} days`),
  nextIn: (t) => `Next grid in ${t}`,
  ctaTitle: 'One more?',
  ctaBody: '360 levels, the pencil and step-by-step hints: it’s all in the Tinta app, on iPhone and iPad.',
  ctaBadgeAlt: 'Download on the App Store',
  tutoTitle: 'How to play',
  tuto: [
    'Colour every cell: pick a colour, then tap the cell.',
    'A badge on the edge counts the cells of one colour in its row or column.',
    '= means same colour, ≠ different colours. Locked cells are given.',
  ],
  tutoGo: 'Let’s go',
  rulesTitle: 'How Tinta works',
  rules: [
    'The grid (5×5 to 7×7) is filled with three or four colours: teal, amber, rose and, on Saturdays, violet.',
    'Badges on the edge of a row or column give the exact number of cells of that colour in the line. A badge fades once reached and turns red when exceeded.',
    'An = marker between two neighbouring cells means the same colour, a ≠ marker two different colours. Locked cells are revealed from the start.',
    'There is exactly one solution, reachable by deduction alone. A full but wrong grid counts as a mistake; no mistakes earns three stars.',
    'Use the pencil to cross out colours that cannot go in an empty cell.',
  ],
  aboutApp: 'About the Tinta app',
  cellLabel: (r, c, color, locked) =>
    `Row ${r + 1}, column ${c + 1}, ${color ?? 'empty'}${locked ? ', locked' : ''}`,
  chipLabel: (line, i, n, color) => `${line === 'row' ? 'Row' : 'Column'} ${i + 1}: ${n} ${color}`,
};

const es: TintaCopy = {
  metaTitle: 'Tinta — la cuadrícula del día',
  metaDescription:
    'Juega gratis a la cuadrícula del día de Tinta en tu navegador: un puzle de lógica con colores, el mismo para todos, con un resultado en emojis para compartir. Sin registro.',
  kicker: 'Tinta · cuadrícula del día',
  title: 'La cuadrícula del día',
  intro: 'Un puzle de lógica con colores, el mismo para todos. Una cuadrícula nueva cada día a medianoche.',
  loading: 'Cargando la cuadrícula…',
  noPuzzle: 'No hay cuadrícula del día para esta fecha. Encuéntralas todas en la app.',
  colors: ['turquesa', 'ámbar', 'rosa', 'violeta'],
  paletteLabel: 'Colores',
  erase: 'Goma',
  pencil: 'Lápiz',
  undo: 'Deshacer',
  help: 'Cómo jugar',
  wrong: 'Algo no cuadra',
  mistakes: (n) => (n === 1 ? '1 error' : `${n} errores`),
  format: (s, c) => `${s}×${s} · ${c} colores`,
  winTitle: ['¡Resuelta!', '¡Bien jugado!', '¡Perfecto!'],
  winBody: 'Vuelve mañana para la próxima cuadrícula.',
  share: 'Compartir',
  copied: 'Resultado copiado',
  streak: (n) => (n === 1 ? 'Racha: 1 día' : `Racha: ${n} días`),
  nextIn: (t) => `Próxima cuadrícula en ${t}`,
  ctaTitle: '¿Otra más?',
  ctaBody: '360 niveles, el lápiz y pistas explicadas paso a paso: todo está en la app Tinta, para iPhone y iPad.',
  ctaBadgeAlt: 'Descargar en el App Store',
  tutoTitle: 'Cómo jugar',
  tuto: [
    'Colorea cada casilla: elige un color y toca la casilla.',
    'Una pastilla en el borde cuenta las casillas de un color en su fila o su columna.',
    '= significa mismo color; ≠, colores distintos. Las casillas con candado ya vienen dadas.',
  ],
  tutoGo: '¡Vamos!',
  rulesTitle: 'Las reglas de Tinta',
  rules: [
    'La cuadrícula (de 5×5 a 7×7) se rellena con tres o cuatro colores: turquesa, ámbar, rosa y, los sábados, violeta.',
    'Las pastillas del borde de una fila o columna indican el número exacto de casillas de ese color en la línea. Una pastilla alcanzada se atenúa; superada, se vuelve roja.',
    'Un marcador = entre dos casillas vecinas exige el mismo color, y un marcador ≠ dos colores distintos. Las casillas con candado se revelan desde el principio.',
    'La solución es única y se encuentra por deducción, sin adivinar. Una cuadrícula llena pero incorrecta cuenta como un error; sin errores, son tres estrellas.',
    'El lápiz sirve para tachar los colores imposibles de una casilla vacía.',
  ],
  aboutApp: 'Sobre la app Tinta',
  cellLabel: (r, c, color, locked) =>
    `Fila ${r + 1}, columna ${c + 1}, ${color ?? 'vacía'}${locked ? ', bloqueada' : ''}`,
  chipLabel: (line, i, n, color) => `${line === 'row' ? 'Fila' : 'Columna'} ${i + 1}: ${n} ${color}`,
};

const de: TintaCopy = {
  metaTitle: 'Tinta — das Tagesrätsel',
  metaDescription:
    'Spiele das Tagesrätsel von Tinta kostenlos im Browser: ein farbiges Logikrätsel, für alle gleich, mit einem Emoji-Ergebnis zum Teilen. Ohne Anmeldung.',
  kicker: 'Tinta · Tagesrätsel',
  title: 'Das Tagesrätsel',
  intro: 'Ein farbiges Logikrätsel, für alle gleich. Jeden Tag um Mitternacht ein neues Gitter.',
  loading: 'Gitter wird geladen…',
  noPuzzle: 'Für dieses Datum gibt es kein Tagesrätsel. Alle Rätsel findest du in der App.',
  colors: ['Türkis', 'Bernstein', 'Rosa', 'Violett'],
  paletteLabel: 'Farben',
  erase: 'Radierer',
  pencil: 'Bleistift',
  undo: 'Rückgängig',
  help: 'Spielregeln',
  wrong: 'Da stimmt etwas nicht',
  mistakes: (n) => (n === 1 ? '1 Fehler' : `${n} Fehler`),
  format: (s, c) => `${s}×${s} · ${c} Farben`,
  winTitle: ['Gelöst!', 'Gut gespielt!', 'Perfekt!'],
  winBody: 'Komm morgen für das nächste Rätsel wieder.',
  share: 'Teilen',
  copied: 'Ergebnis kopiert',
  streak: (n) => (n === 1 ? 'Serie: 1 Tag' : `Serie: ${n} Tage`),
  nextIn: (t) => `Nächstes Rätsel in ${t}`,
  ctaTitle: 'Noch eins?',
  ctaBody: '360 Level, der Bleistift und Schritt für Schritt erklärte Tipps: alles in der Tinta-App, für iPhone und iPad.',
  ctaBadgeAlt: 'Laden im App Store',
  tutoTitle: 'Spielregeln',
  tuto: [
    'Färbe jedes Feld: Wähle eine Farbe und tippe dann auf das Feld.',
    'Ein Plättchen am Rand zählt die Felder einer Farbe in seiner Zeile oder Spalte.',
    '= heißt gleiche Farbe, ≠ verschiedene Farben. Felder mit Schloss sind vorgegeben.',
  ],
  tutoGo: 'Los geht’s',
  rulesTitle: 'So funktioniert Tinta',
  rules: [
    'Das Gitter (5×5 bis 7×7) wird mit drei oder vier Farben gefüllt: Türkis, Bernstein, Rosa und samstags Violett.',
    'Die Plättchen am Rand einer Zeile oder Spalte geben die genaue Zahl der Felder dieser Farbe in der Linie an. Ist sie erreicht, verblasst das Plättchen; wird sie überschritten, wird es rot.',
    'Ein =-Zeichen zwischen zwei Nachbarfeldern verlangt die gleiche Farbe, ein ≠-Zeichen zwei verschiedene. Felder mit Schloss sind von Anfang an aufgedeckt.',
    'Es gibt genau eine Lösung, und sie lässt sich ohne Raten herleiten. Ein volles, aber falsches Gitter zählt als Fehler; ohne Fehler gibt es drei Sterne.',
    'Mit dem Bleistift streichst du Farben, die in einem leeren Feld nicht möglich sind.',
  ],
  aboutApp: 'Über die Tinta-App',
  cellLabel: (r, c, color, locked) =>
    `Zeile ${r + 1}, Spalte ${c + 1}, ${color ?? 'leer'}${locked ? ', gesperrt' : ''}`,
  chipLabel: (line, i, n, color) => `${line === 'row' ? 'Zeile' : 'Spalte'} ${i + 1}: ${n} ${color}`,
};

const ja: TintaCopy = {
  metaTitle: 'Tinta — 今日のグリッド',
  metaDescription:
    'Tinta の「今日のグリッド」をブラウザで無料プレイ。色で解くロジックパズルで、問題は全員共通。結果は絵文字でシェアできます。登録は不要です。',
  kicker: 'Tinta · 今日のグリッド',
  title: '今日のグリッド',
  intro: '色で解くロジックパズル。問題は全員共通で、毎日午前0時に新しいグリッドが届きます。',
  loading: 'グリッドを読み込み中…',
  noPuzzle: 'この日付の「今日のグリッド」はありません。すべてのグリッドはアプリで遊べます。',
  colors: ['ティール', 'アンバー', 'ローズ', 'バイオレット'],
  paletteLabel: '色',
  erase: '消しゴム',
  pencil: '鉛筆',
  undo: '元に戻す',
  help: '遊び方',
  wrong: 'どこかが違うようです',
  mistakes: (n) => `ミス ${n} 回`,
  format: (s, c) => `${s}×${s} · ${c} 色`,
  winTitle: ['クリア！', 'お見事！', 'パーフェクト！'],
  winBody: '明日また次のグリッドで会いましょう。',
  share: 'シェア',
  copied: '結果をコピーしました',
  streak: (n) => `連続 ${n} 日`,
  nextIn: (t) => `次のグリッドまで ${t}`,
  ctaTitle: 'もう1問いかが？',
  ctaBody: '360 のレベル、鉛筆メモ、手順を説明するヒント。すべて iPhone・iPad 用アプリ Tinta に入っています。',
  ctaBadgeAlt: 'App Store からダウンロード',
  tutoTitle: '遊び方',
  tuto: [
    'すべてのマスを塗ります。色を選んで、マスをタップしてください。',
    '端のバッジは、その行または列にある、その色のマスの数を表します。',
    '= は同じ色、≠ は違う色。鍵のついたマスは最初から決まっています。',
  ],
  tutoGo: 'はじめる',
  rulesTitle: 'Tinta のルール',
  rules: [
    'グリッド（5×5〜7×7）を 3 色または 4 色で塗り分けます。ティール、アンバー、ローズ、そして土曜日はバイオレットが加わります。',
    '行や列の端にあるバッジは、そのラインにある色のマスの正確な数です。数が揃うとバッジは薄くなり、超えると赤くなります。',
    '隣り合う 2 マスの間の = は同じ色、≠ は違う色を意味します。鍵のついたマスは最初から公開されています。',
    '答えはひとつだけで、推測なしの推理だけでたどり着けます。全部埋めて間違っているとミス 1 回。ミスなしなら星 3 つです。',
    '鉛筆を使うと、空いたマスに入らない色に印をつけられます。',
  ],
  aboutApp: 'アプリ Tinta について',
  cellLabel: (r, c, color, locked) =>
    `${r + 1} 行 ${c + 1} 列、${color ?? '空'}${locked ? '、固定' : ''}`,
  chipLabel: (line, i, n, color) => `${i + 1} ${line === 'row' ? '行' : '列'}：${color} ${n}`,
};

const ko: TintaCopy = {
  metaTitle: 'Tinta — 오늘의 그리드',
  metaDescription:
    'Tinta의 오늘의 그리드를 브라우저에서 무료로 플레이하세요. 모두에게 같은 색깔 논리 퍼즐이며, 결과를 이모지로 공유할 수 있습니다. 가입이 필요 없습니다.',
  kicker: 'Tinta · 오늘의 그리드',
  title: '오늘의 그리드',
  intro: '색으로 푸는 논리 퍼즐, 모두에게 같은 문제입니다. 매일 자정에 새 그리드가 열립니다.',
  loading: '그리드를 불러오는 중…',
  noPuzzle: '이 날짜에는 오늘의 그리드가 없습니다. 앱에서 모든 그리드를 만나 보세요.',
  colors: ['청록', '호박색', '장미색', '보라'],
  paletteLabel: '색상',
  erase: '지우개',
  pencil: '연필',
  undo: '되돌리기',
  help: '플레이 방법',
  wrong: '어딘가 맞지 않아요',
  mistakes: (n) => `실수 ${n}회`,
  format: (s, c) => `${s}×${s} · ${c}색`,
  winTitle: ['해결!', '잘했어요!', '완벽해요!'],
  winBody: '내일 다음 그리드로 다시 만나요.',
  share: '공유',
  copied: '결과를 복사했습니다',
  streak: (n) => `연속 ${n}일`,
  nextIn: (t) => `다음 그리드까지 ${t}`,
  ctaTitle: '한 판 더?',
  ctaBody: '360개의 레벨, 연필 메모, 단계별로 설명하는 힌트까지. 모두 iPhone·iPad용 Tinta 앱에 있습니다.',
  ctaBadgeAlt: 'App Store에서 다운로드',
  tutoTitle: '플레이 방법',
  tuto: [
    '모든 칸을 칠하세요. 색을 고른 뒤 칸을 탭합니다.',
    '가장자리의 배지는 그 행이나 열에 있는 해당 색 칸의 수를 알려 줍니다.',
    '=는 같은 색, ≠는 다른 색입니다. 자물쇠가 있는 칸은 처음부터 정해져 있습니다.',
  ],
  tutoGo: '시작하기',
  rulesTitle: 'Tinta 규칙',
  rules: [
    '그리드(5×5~7×7)를 세 가지 또는 네 가지 색으로 채웁니다. 청록, 호박색, 장미색, 그리고 토요일에는 보라가 더해집니다.',
    '행이나 열 가장자리의 배지는 그 줄에 있는 해당 색 칸의 정확한 수입니다. 수를 채우면 배지가 흐려지고, 넘치면 빨갛게 바뀝니다.',
    '이웃한 두 칸 사이의 =는 같은 색, ≠는 서로 다른 색을 뜻합니다. 자물쇠가 있는 칸은 처음부터 공개됩니다.',
    '정답은 하나뿐이며 추측 없이 추론만으로 찾을 수 있습니다. 가득 채웠는데 틀리면 실수 1회, 실수가 없으면 별 세 개입니다.',
    '연필로 빈 칸에 들어갈 수 없는 색을 지워 둘 수 있습니다.',
  ],
  aboutApp: 'Tinta 앱 소개',
  cellLabel: (r, c, color, locked) =>
    `${r + 1}행 ${c + 1}열, ${color ?? '빈 칸'}${locked ? ', 고정됨' : ''}`,
  chipLabel: (line, i, n, color) => `${i + 1}${line === 'row' ? '행' : '열'}: ${color} ${n}`,
};

export const TINTA_COPY: Record<Lang, TintaCopy> = { fr, en, es, de, ja, ko };
