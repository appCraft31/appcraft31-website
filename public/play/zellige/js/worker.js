/**
 * Génération hors du fil principal, comme l'isolate de l'app : une 12×12 se
 * compte en centaines de millisecondes, et la page se figerait sans cela.
 */
import { generateDaily, generateLevel } from './engine.js';

self.onmessage = ({ data }) => {
  const puzzle = data.mode === 'daily' ? generateDaily(data.dayKey) : generateLevel(data.level);
  self.postMessage({ id: data.id, puzzle });
};
