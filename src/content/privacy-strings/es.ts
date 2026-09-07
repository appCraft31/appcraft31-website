import type { PrivacyStrings } from './keys';

const MONTHS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

export const strings: PrivacyStrings = {
  referenceVersion: (url) =>
    `Este documento es una traducción. En caso de discrepancia, la versión francesa disponible en ${url} es el texto de referencia.`,

  responsibleTitle: 'Quién es responsable',
  publishedBy: (app, email) =>
    `${app} está editada por AppCraft31, estudio independiente con sede en Toulouse (Francia). Para cualquier duda sobre esta política, escribe a ${email}.`,
  policyScope: (platforms) =>
    `Esta política describe lo que la aplicación hace realmente con los datos, en ${platforms}.`,

  localTitle: 'Lo que se queda en tu dispositivo',
  localIntro: (app) =>
    `${app} guarda lo siguiente en el almacenamiento de tu dispositivo. Nada de ello se envía a ningún servidor, y todo desaparece si desinstalas la aplicación.`,

  adsTitle: 'Publicidad',
  adsIntro: (app, network, formats) =>
    `${app} es gratuita e incorpora el SDK de ${network}, en los formatos siguientes: ${formats}. ${network} lo presta Google Ireland Limited para los usuarios del Espacio Económico Europeo, el Reino Unido y Suiza, y Google LLC en el resto del mundo.`,
  adsProcessing:
    'En ese marco, Google puede tratar el identificador publicitario del dispositivo, identificadores vinculados a la aplicación y datos de interacción con los anuncios (impresiones, clics).',
  adsMediation: (partners) =>
    `Las solicitudes de anuncios las arbitra la mediación de AdMob, que puede confiarlas a otras redes cuyo SDK está integrado en la aplicación: ${partners}. Cuando se les adjudica un anuncio, esas redes tratan a su vez el identificador publicitario, los identificadores vinculados a la aplicación y los datos de interacción con el anuncio, según su propia política de privacidad.`,
  adsMediationConsent:
    'La elección que hagas en la pantalla de consentimiento se aplica a esas redes igual que a Google: se les transmite con cada solicitud de anuncio.',
  adsAtt:
    'En iOS, el sistema te pregunta en el primer arranque si autorizas el seguimiento de tu actividad. Si lo rechazas, no se comparte ningún identificador publicitario (IDFA) y los anuncios no se personalizan.',
  adsUmp:
    'En el Espacio Económico Europeo, el Reino Unido y Suiza se muestra una pantalla de consentimiento conforme al RGPD a través de Google User Messaging Platform. Puedes aceptar, rechazar o personalizar el uso de tus datos con fines publicitarios.',
  adsUmpNoReopen:
    'Esa elección la conserva el SDK de Google. La aplicación todavía no ofrece una pantalla para volver a abrir el formulario: desinstalarla y volver a instalarla lo muestra de nuevo.',
  adsUmpReopen: 'Puedes cambiar esa elección desde los ajustes de la aplicación.',
  adsRemovedBy: (purchase) =>
    `La compra «${purchase}» retira definitivamente la publicidad de la aplicación.`,
  adsNone: (app) =>
    `${app} no muestra ningún anuncio. No hay ninguna red publicitaria integrada en la aplicación y no se lee ningún identificador publicitario.`,

  purchasesTitle: 'Compras integradas',
  purchasesSome: (app) =>
    `${app} ofrece compras integradas. Los pagos los gestiona la App Store o Google Play: nunca recibimos tu número de tarjeta, tu dirección ni ningún dato de facturación.`,
  purchasesNone: (app) => `${app} no ofrece ninguna compra integrada.`,

  analyticsTitle: 'Analítica de uso',
  analyticsPurpose: (app, vendors, purpose) => `${app} envía datos a ${vendors}, para ${purpose}.`,
  analyticsDefault: (app, vendors) =>
    `${app} envía datos a ${vendors}, con el único fin de corregir los fallos de la aplicación.`,
  analyticsOptOut: 'Puedes desactivar este envío en cualquier momento desde los ajustes de la aplicación.',
  analyticsAnonymous: 'Estos datos no permiten identificarte.',
  analyticsNone: (app) =>
    `${app} no incorpora ninguna herramienta de analítica, de estadísticas de uso ni de informes de fallos.`,

  networkTitle: 'Conexión de red',
  networkPurpose: (purpose) => `La aplicación usa tu conexión para ${purpose}.`,
  networkOffline: (app, hasAds) =>
    `${app} funciona por completo sin conexión. La aplicación no necesita ninguna conexión para usarse${hasAds ? ', salvo para cargar los anuncios' : ''}.`,

  accountsSignInTitle: 'Iniciar sesión en tu cuenta',
  accountsServiceTitle: 'Cuentas y servicios de juego',
  accountsNoneTitle: 'Cuentas',
  accountsService: (app, service, what) =>
    `${app} nunca te pide crear una cuenta. ${service} se usa para ${what}: en ese marco solo se transmiten tu apodo de ${service} y tus puntuaciones, a través del servicio de Apple.`,
  accountsNone: (app) =>
    `${app} nunca te pide crear una cuenta y no usa ningún servicio de identificación.`,

  childrenTitle: 'Menores',
  childrenAimed: (app) =>
    `${app} está dirigida a los menores y cumple por ello las reglas de los programas familiares de las tiendas.`,
  childrenNotAimed: (app) =>
    `${app} no está dirigida específicamente a menores de 13 años, y no recogemos conscientemente datos personales sobre ellos.`,
  childrenAds:
    'Los anuncios que se muestran están configurados para respetar las categorías de contenido familiar.',

  rightsTitle: 'Tus derechos',
  rightsUninstall:
    'Como los datos descritos arriba se quedan en tu dispositivo, la forma más directa de borrarlos es desinstalar la aplicación: todo se va con ella.',
  rightsGdpr: (email) =>
    `El Reglamento General de Protección de Datos te reconoce además derechos de acceso, rectificación, supresión, limitación y oposición. Para ejercerlos, escribe a ${email}.`,
  rightsAdNetworks: (networks) =>
    `Para los datos tratados por las redes publicitarias, esos derechos se ejercen ante cada una de ellas: ${networks}. Tus preferencias publicitarias siguen siendo modificables en cualquier momento desde los ajustes de la aplicación y los de tu dispositivo.`,

  changesTitle: 'Modificaciones',
  changes: (date) =>
    `Esta política puede cambiar al mismo tiempo que la aplicación. Toda modificación se publica en esta página, con su fecha. Última actualización: ${date}.`,

  contactTitle: 'Contacto',
  contact: (email) =>
    `¿Una pregunta, una petición, una duda sobre este documento? Escribe a ${email}. Respondemos a todas las peticiones.`,

  formats: { banner: 'banner', interstitial: 'intersticial', rewarded: 'vídeo recompensado' },
  kinds: {
    'non-consumable': 'compra definitiva',
    consumable: 'compra consumible',
    subscription: 'suscripción',
  },

  joinLast: (head, last) => `${head} y ${last}`,
  formatDate: (y, m, d) => `${d} de ${MONTHS[m - 1]} de ${y}`,
};
