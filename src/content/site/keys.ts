/**
 * Le dictionnaire français fait référence : il définit les clés.
 * Les autres langues peuvent être incomplètes — le rendu retombe alors sur le
 * français, plutôt que d'afficher une clé brute au visiteur.
 */

import { dict as fr } from './fr';

export type SiteKey = keyof typeof fr;
export type SiteDict = Partial<Record<SiteKey, string>>;
