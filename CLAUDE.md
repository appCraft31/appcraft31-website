# appcraft31.app — site vitrine

Site du studio AppCraft31 (Toulouse) : une page d'accueil, et pour chacune des
20 apps une page marketing et une politique de confidentialité.

## La règle qui prime sur toutes les autres : les URLs

`/apps/<slug>.html` et `/privacy/<slug>.html` sont déclarées dans des fiches
App Store et Google Play **déjà validées**. Une URL qui change, c'est une fiche
qui pointe dans le vide et un refus à la prochaine soumission.

- `scripts/urls-historiques.txt` liste les 44 URLs du site d'origine.
- `npm run check:urls` échoue si le build en perd une. À lancer après tout
  changement de routage.
- Trois URLs s'écartent de la convention et sont **figées** :
  `privacy/index.html` (c'est la politique d'**EcoPompe**, pas un index),
  `privacy/contree-privacy.html`, `privacy/zenkuto-privacy.html`.
- Le produit s'appelle *Zenkuro* mais son slug est `zenkuto` (coquille
  historique). L'URL fait foi.
- Le produit s'appelle *SquareLink* mais son slug est `combo`.

Le `.html` est conservé sans effort : en export statique sans `trailingSlash`,
la route `/apps/tengo` produit exactement `out/apps/tengo.html`.

## Architecture

```
src/app/(fr)/…          URLs sans préfixe : celles du site historique
src/app/(intl)/[lang]/… en · ja · ko · es · de, même arbre
src/content/apps/<slug>/page-copy.ts   textes de la page, par langue
src/content/apps/<slug>/legacy-copy.json  textes courts migrés de l'ancien i18n
src/content/themes.ts   l'univers graphique des 20 produits
src/content/site/*.ts   dictionnaire du site, 6 langues (fr = référence)
src/components/backdrops/  9 moteurs de fond, en CSS pur
src/components/marketing/  blocs de page produit, pilotés par theme.layout
src/lib/apps.ts         registre : source unique des params et du sitemap
_legacy/                l'ancien site, gardé comme source de contenu
```

Deux layouts racines (route groups `(fr)` et `(intl)`) : c'est ce qui permet à
chaque langue d'avoir son propre `<html lang>` en export statique.

## Le système d'univers

Une page produit n'a pas de mise en page à elle : `themes.ts` déclare une
palette, deux polices, un fond animé, une forme et un `layout` — la liste
ordonnée des blocs. `lib/theme.ts` traduit ça en variables `--u-*`, et les
composants marketing ne connaissent que ces variables. Aucune règle CSS ne
nomme un produit.

- `accent` est décoratif ; `accentText` est sa variante lisible, à renseigner
  quand l'accent est trop clair sur son propre fond (rose pastel sur beige).
- Les polices passent par `var(--font-…)` : `next/font` renomme les familles,
  donc écrire `'Chakra Petch'` dans une variable CSS ne marcherait pas.
- Les fonds scéniques (grille néon, orbites, route) sont bornés en hauteur ;
  les textures (papier, feutre, plan) courent sur toute la page.

## Ce qu'on écrit sur les apps doit être vérifiable dans leur code

Les projets sources sont dans `~/StudioProjects/`. `npm run audit:sdk` les
parcourt et écrit `src/content/sdk-audit.json`.

Attention : plusieurs pages de l'ancien site affirmaient l'inverse de ce que
fait le code. Exemple relevé et corrigé : **Glyphe** annonçait « aucune
publicité » alors que `MonetizationConfig.swift` déclare des unités AdMob de
production (bannière, interstitiel, récompensée) et un achat « Glyphe+ » qui
retire la pub. Vérifier avant d'écrire, toujours — surtout dans une politique
de confidentialité.

## Commandes

```bash
npm run dev            # développement
npm run verify         # build + parité des URLs + couverture du contenu
npm run start          # sert out/ comme Vercel le fera (serve.json, cleanUrls off)
npm run check:urls     # les 44 URLs historiques sont-elles toujours produites ?
npm run check:content  # chaque produit a-t-il une page rédigée, en fr et en ?
npm run check:claims   # une affirmation du site contredit-elle le code d'une app ?
npm run check:clickable # les liens visibles sont-ils vraiment cliquables ? (site servi requis)
npm run check:live     # une fois déployé : ces URLs répondent-elles 200 ?
npm run audit:sdk      # que contient réellement le code des apps ?
```

`check:clickable` pilote Chrome et demande, pour chaque lien visible, quel
élément se trouve sous le point qu'on viserait à la souris. Il vérifie en plus
que les cartes de l'accueil sont cliquables sur toute leur surface, en
échantillonnant douze points par carte. Il a besoin du site servi
(`npm run start`), et n'entre donc pas dans `verify`.

**Le piège des cartes cliquables** : l'overlay est un `::after` en
`position: absolute; inset: 0` sur le lien du titre. Il se cale sur le premier
ancêtre positionné. Donner `position: relative` à `.app-card-head` — ou à tout
bloc intermédiaire — réduit l'overlay à ce bloc, et le reste de la carte
devient inerte sans que rien ne se voie. C'est exactement ce qui rendait
« En savoir plus » inutilisable sur les vingt cartes.

`check:claims` confronte les textes (dans les six langues) et les faits de
confidentialité à l'audit du code : il refuse qu'une app qui charge AdMob soit
présentée comme « sans publicité ». Il tolère les formulations nuancées
(« aucune publicité pendant la partie », vrai pour Hold Fire) et ignore les
commentaires du code.

`npm run check:live` accepte une URL d'aperçu :
`node scripts/check-live.mjs https://mon-apercu.vercel.app`. À lancer après le
premier déploiement : `check:urls` prouve que les fichiers existent,
`check:live` prouve que l'hébergeur les sert sans les rediriger.

Attention à `cleanUrls` : activé, il transformerait chaque `/apps/<slug>.html`
en redirection. Il est explicitement à `false` dans `vercel.json`, et
`serve.json` fait de même pour l'aperçu local (sans quoi `serve` redirige et
donne une fausse alerte).

## Scripts de migration, à ne relancer qu'en connaissance de cause

`migrate-i18n.mjs`, `extract-icons.mjs` et `convert-webp.mjs` ont fait leur
office ; ils lisaient `_legacy/`, qui n'existe plus. Ils restent pour mémoire de
la provenance du contenu. `wrap-games.mjs` et les scripts `check:*` sont, eux,
à relancer librement — ils sont idempotents.

Travail local uniquement : ne rien committer ni pousser sans demande explicite.
