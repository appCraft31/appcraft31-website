import { serialize } from '@/lib/jsonld';

/**
 * Insère un graphe schema.org dans la page.
 *
 * Les données structurées ne passent pas par l'API `metadata` de Next : elles
 * vivent dans un `<script>` du corps, rendu côté serveur — donc présent dans le
 * HTML exporté, sans JavaScript à exécuter.
 */
export function JsonLd({ nodes }: { nodes: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(nodes) }}
    />
  );
}
