import type { AppCopy, Lang } from '@/lib/types';
import { copy as fr } from './copy.fr';
import { copy as en } from './copy.en';
import { copy as ja } from './copy.ja';
import { copy as ko } from './copy.ko';
import { copy as es } from './copy.es';
import { copy as de } from './copy.de';

/**
 * Textes de la page `apps/zellige.html`.
 *
 * Tout ce qui est chiffré ici se lit dans le code du jeu
 * (`~/StudioProjects/Tectonic`) : les paliers et tailles de grille dans
 * `lib/models/difficulty.dart` (5×5 jusqu'au niveau 5, 6×6, 7×8, 9×9, 10×10,
 * puis 12×12 à partir du niveau 60, sans fin), la grille du jour 12×12 dans
 * `Difficulty.daily`, les 3 classements et 12 succès Game Center dans
 * `lib/core/game_center_ids.dart`, les 21 locales dans `lib/l10n/`. Le
 * `pubspec.yaml` lie `google_mobile_ads` (interstitiel toutes les deux
 * grilles, vidéo récompensée pour des pièces) et `firebase_analytics`, aucun
 * achat intégré : la page ne promet donc ni « sans publicité » ni boutique.
 */
export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en, ja, ko, es, de };
