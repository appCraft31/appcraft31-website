# Mêliz Web

Version jouable en ligne de Mêliz : défi du jour + parties libres. HTML/CSS/JS
statique, sans build ni dépendance — Vercel sert les fichiers tels quels.

## Périmètre

Volontairement plus restreint que les apps natives : pas de mode histoire, de
boutique, de statistiques ni de succès, qui restent l'argument de téléchargement.
Les indices sont gratuits mais limités à 3 par partie (les apps les débloquent
par pub récompensée ou pièces).

## Origine du code

La logique est un portage du code Kotlin de l'app Android
(`~/StudioProjects/meliz/android/app/src/main/java/com/appcraft31/meliz/`) :

| Fichier web | Source Kotlin |
|---|---|
| `js/generator.js` | `domain/generator/GridGenerator.kt`, `domain/model/{GridDirection,Difficulty,PuzzleTheme}.kt`, `domain/text/WordNormalizer.kt`, `domain/ScoreFormula.kt` |
| `js/daily.js` | `domain/daily/{DailyDates,DailyPuzzle}.kt` |
| `js/game.js` | `ui/game/{GameViewModel,GameUiState}.kt` |
| `js/ui.js` | `ui/game/{GridView,WordListView,HudView}.kt` |
| `js/store.js` | `data/daily/DailyRepository.kt`, `data/score/DataStoreScoreStore.kt` |

Les noms et constantes ont été conservés pour que la parité reste vérifiable à
la lecture.

## Deux écarts assumés par rapport au mobile

1. **Grille du jour.** La graine et la clé du jour sont calculées à l'identique,
   mais le tirage utilise mulberry32 là où Kotlin utilise XorWoW. La grille du
   jour est donc la même pour tous les joueurs *web*, et différente de celle des
   apps. Sans conséquence : les classements ne sont pas partagés.
2. **Tirage des mots.** `pickWords` écarte les mots plus longs que la grille
   *avant* le tirage. Le mobile ne filtre qu'au placement, ce qui produisait en
   8×8 des grilles très incomplètes (mesuré : 4,7 mots placés sur 6 demandés, et
   jusqu'à 0). Aucune règle du jeu n'est modifiée.

## Banques de mots

`data/{fr,en}/*.json` est une **copie** de
`meliz/android/app/src/main/assets/wordbanks/`. C'est la troisième copie de ces
listes (iOS et Android en ont chacune une) et elles ne sont **pas synchronisées
automatiquement** : toute modification de contenu doit être reportée à la main.

## Développement

`fetch` impose un serveur HTTP — ouvrir le fichier en `file://` ne fonctionne pas.

```bash
python3 -m http.server 8000   # à la racine du site
open http://localhost:8000/play/meliz/
```

`?lang=fr` ou `?lang=en` force la langue (par défaut celle du navigateur, repli
sur l'anglais).
