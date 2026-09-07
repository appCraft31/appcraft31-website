import type { AppCopy } from '@/lib/types';

export const copy: AppCopy = {
  tagline: 'Tectonic y Suguru en azulejos de cerámica',

  headline: {
    lead: 'Tres reglas, ningún cálculo,',
    highlight: 'nunca al azar.',
  },

  intro:
    'En Francia lo llaman Tectonic; en otros sitios, Suguru: una cuadrícula dividida en bloques irregulares, cifras que colocar y solo el razonamiento para lograrlo. Zellige lo viste de azulejos —azul de Delft, terracota, salvia, ocre— separados por una junta que lo dice todo sobre el trazado. Cada cuadrícula se genera en tu teléfono y después se verifica: su solución es única, y su dificultad se mide por el razonamiento que exige, no por el número de casillas vacías.',

  stats: [
    { value: '5×5 → 12×12', label: 'tamaños de cuadrícula' },
    { value: '5', label: 'niveles de dificultad' },
    { value: '1', label: 'cuadrícula del día, la misma para todos' },
    { value: '21', label: 'idiomas' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Las reglas',
      title: 'Tres reglas, ni una más',
      items: [
        {
          title: 'Un bloque de N casillas contiene del 1 al N',
          body: 'Un bloque de tres casillas lleva el 1, el 2 y el 3, una vez cada uno. Un bloque de una sola casilla vale siempre 1, y eso ya es un punto de apoyo para razonar.',
        },
        {
          title: 'Dos casillas vecinas nunca llevan la misma cifra',
          body: 'Diagonales incluidas: cada casilla tiene hasta ocho vecinas y ninguna puede repetir su cifra. Es la regla que no existe ni en el sudoku ni en el binario, y la que da toda la gracia al juego.',
        },
        {
          title: 'La solución es única',
          body: 'Cada cuadrícula pasa por el solucionador antes de llegar a ti. Nunca hay que adivinar: si te atascas, es que en algún sitio te espera una deducción.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'En el juego',
    },
    {
      id: 'features',
      kicker: 'Lo que se juega',
      title: 'De la primera cuadrícula a la del día',
      items: [
        {
          title: 'Una progresión que te sigue',
          body: 'Cinco cuadrículas de 5×5 para tomar el pulso, y luego 6×6, 7×8, 9×9, 10×10; a partir del nivel 60, 12×12 sin final. La proporción de pistas baja poco a poco y se ajusta a tus últimos resultados.',
        },
        {
          title: 'La cuadrícula del día',
          body: 'Una 12×12 experta, la misma para todo el mundo, cada día. Termínala para alargar tu racha y compara tu tiempo en la clasificación de Game Center del día.',
        },
        {
          title: 'Notas, deshacer, pistas',
          body: 'Anota tus hipótesis, vuelve sobre una jugada sin perderlas y haz que se te señalen los conflictos —o quita esa red en los ajustes—. Una pista revela una casilla a cambio de monedas, ganadas jugando o viendo un vídeo.',
        },
        {
          title: 'Dibujado, no generado',
          body: 'Cada icono es un trazo hecho a mano y cada casilla, un azulejo colocado en su junta. El tema oscuro no es el negativo del claro: allí la junta se convierte en la sombra entre los azulejos. La cuadrícula entera se lee con VoiceOver y un error nunca se señala solo con el color.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacidad',
      title: 'Sin cuenta, con cuadrículas hechas en el propio aparato',
      body: 'Zellige no pide cuenta ni registro: progreso, monedas, racha y ajustes se quedan en el dispositivo, y las cuadrículas se generan localmente. El juego es gratuito gracias a la publicidad (Google AdMob, un anuncio a pantalla completa cada dos cuadrículas y un vídeo que eliges ver), envía métricas de uso anónimas a Firebase Analytics, y Game Center solo sirve para las clasificaciones y los logros. Todo está detallado en la política de privacidad.',
    },
  ],

  cta: {
    title: 'Disponible en la App Store y en Google Play',
    body: 'Zellige se descarga ya mismo. Descubre también nuestros otros juegos de lógica, para jugar sin conexión.',
  },

  meta: {
    title: 'Zellige — Tectonic y Suguru, cuadrículas de solución única',
    description:
      'Juego de Tectonic (Suguru) en azulejos de cerámica: cuadrículas generadas en tu dispositivo y verificadas con solución única, del 5×5 al 12×12, cuadrícula del día, notas, deshacer, tema oscuro. Sin cuenta y en 21 idiomas.',
  },

  chips: [],
};
