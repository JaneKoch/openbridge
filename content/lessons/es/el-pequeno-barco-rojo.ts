import type { Lesson } from "@/lib/content/types";

/**
 * Nivel 1 · Español — frases cortas (5 a 10 palabras) y vocabulario
 * cotidiano para lectores que empiezan.
 *
 * Sigue el mismo contrato de calidad que
 * `content/lessons/en/maya-and-the-river-bridge.ts`: retroalimentación
 * cálida y específica en cada opción, glosario que pre-enseña palabras
 * y notas para el aula.
 */
export const elPequenoBarcoRojo: Lesson = {
  slug: "el-pequeno-barco-rojo",
  language: "es",
  level: 1,
  title: "El pequeño barco rojo",
  subtitle: "No hay que ser grande para ayudar",
  description:
    "Soplito es un barco pequeño y rojo que sueña con ayudar como los barcos grandes. Cuando una gaviota cae al agua, Soplito descubre que no hay que ser grande para hacer algo importante.",
  minutes: 3,
  emoji: "⛵",
  palette: "ocean",
  story: {
    title: "El pequeño barco rojo",
    sections: [
      "En el puerto vive un barco pequeño. Es de color rojo y se llama Soplito. Le encanta mecerse en el agua.",
      "Cerca de Soplito hay barcos muy grandes. Ellos viajan por todo el mar. Soplito solo pasea cerca del puerto.",
      "—Yo también quiero ayudar —dice Soplito—. Los barcos grandes sonríen con cariño. —Eres pequeño, pero tu corazón es enorme.",
      "Un día, el viento sopla muy fuerte. Una gaviota cae al agua. Sus alas están mojadas y no puede volar.",
      "Soplito no piensa dos veces. Navega rápido hacia la gaviota. —¡Súbete a mi cubierta! —grita Soplito.",
      "La gaviota se sube al barco rojo. Allí descansa, quieta y caliente. Poco a poco, el sol le seca las alas.",
      "—¡Gracias, Soplito! —dice la gaviota—. Luego vuela alto y contenta. Los barcos grandes tocan sus sirenas para saludar.",
      "Soplito brilla de pura felicidad. Ahora lo sabe muy bien. No hay que ser grande para ayudar.",
    ],
  },
  glossary: [
    {
      term: "puerto",
      definition: "lugar junto al mar donde los barcos se detienen a descansar",
    },
    {
      term: "gaviota",
      definition: "pájaro de plumas blancas y grises que vive junto al mar",
    },
    {
      term: "cubierta",
      definition:
        "el piso de un barco, donde las personas y los animales pueden ponerse de pie",
    },
    {
      term: "sirena",
      definition:
        "aparato de los barcos que hace un sonido fuerte para avisar o saludar",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "¿Qué le pasa a la gaviota cuando sopla el viento fuerte?",
      options: [
        {
          text: "Cae al agua y no puede volar",
          rationale:
            "¡Bien visto! El cuento dice que la gaviota cae al agua y que sus alas mojadas no la dejan volar.",
        },
        {
          text: "Aprende a nadar como los peces",
          rationale:
            "La gaviota no aprendió a nadar; lo que necesitaba era salir del agua y secarse.",
        },
        {
          text: "Se queda dormida en su nido",
          rationale:
            "La gaviota no estaba en su nido: la sorprendió el viento fuerte sobre el mar.",
        },
        {
          text: "Vuela más alto que antes",
          rationale:
            "Al contrario: con las alas mojadas, volar le resultaba imposible.",
        },
      ],
      correctIndex: 0,
      explanation:
        "El viento fuerte sorprende a la gaviota y la tira al agua. Como sus alas están mojadas, no puede volar. Por eso necesita la ayuda de Soplito.",
    },
    {
      id: "q2",
      skill: "vocabulary",
      prompt: "En este cuento, ¿qué es la cubierta de un barco?",
      options: [
        {
          text: "Un viento muy fuerte que sopla en el mar",
          rationale:
            "El viento sopla sobre el mar, pero su nombre no es cubierta.",
        },
        {
          text: "La vela blanca que empuja al barco",
          rationale:
            "Soplito no usa velas en este cuento, y una vela tampoco es la cubierta.",
        },
        {
          text: "El piso del barco, donde puedes ponerte de pie",
          rationale:
            "¡Exacto! La gaviota se sube a la cubierta de Soplito para descansar y secarse al sol.",
        },
        {
          text: "Una casa pequeña junto al puerto",
          rationale:
            "Las casas están en la orilla; la cubierta es una parte del barco.",
        },
      ],
      correctIndex: 2,
      explanation:
        "La cubierta es el piso de un barco. En el cuento, la gaviota descansa en la cubierta de Soplito mientras el sol le seca las alas.",
    },
    {
      id: "q3",
      skill: "inference",
      prompt: "¿Cómo se siente Soplito cuando la gaviota le da las gracias?",
      options: [
        {
          text: "Enojado, porque la gaviota pesaba mucho",
          rationale:
            "Nada del cuento molesta a Soplito; al contrario, ayuda con mucho gusto.",
        },
        {
          text: "Feliz y orgulloso, porque su ayuda fue importante",
          rationale:
            "¡Muy bien! Soplito brilla de felicidad: ayudar a la gaviota lo hace sentirse grande por dentro.",
        },
        {
          text: "Asustado, porque nunca había visto una gaviota",
          rationale:
            "Soplito no siente miedo: navega derecho hasta la gaviota para ayudarla.",
        },
        {
          text: "Triste, porque quería ser un barco grande",
          rationale:
            "Al final Soplito se siente contento tal como es; no desea ser otro barco.",
        },
      ],
      correctIndex: 1,
      explanation:
        "Cuando la gaviota le da las gracias, Soplito brilla de felicidad. Eso nos muestra que se siente orgulloso y contento porque su ayuda fue muy valiosa.",
    },
    {
      id: "q4",
      skill: "main-idea",
      prompt: "¿De qué trata este cuento?",
      options: [
        {
          text: "De un puerto donde nunca sopla el viento",
          rationale:
            "El viento sopla fuerte justo en el momento más importante del cuento.",
        },
        {
          text: "De una gaviota que enseña a nadar a un barco",
          rationale:
            "Es al revés: Soplito ayuda a la gaviota, no la gaviota a Soplito.",
        },
        {
          text: "De barcos grandes que viajan por todo el mar",
          rationale:
            "Los barcos grandes aparecen al principio, pero el cuento se centra en alguien más pequeño.",
        },
        {
          text: "De un barquito pequeño que descubre que también puede ayudar",
          rationale:
            "¡Ese es el corazón del cuento! Soplito ayuda a la gaviota y aprende que no hay que ser grande para ser útil.",
        },
      ],
      correctIndex: 3,
      explanation:
        "Todo el cuento gira alrededor de Soplito, un barco pequeño que rescata a una gaviota. Por eso su idea principal es que no hay que ser grande para ayudar.",
    },
    {
      id: "q5",
      skill: "prediction",
      prompt: "¿Qué crees que hará Soplito mañana?",
      options: [
        {
          text: "Se esconderá para no ayudar más",
          rationale:
            "Después de sentirse tan bien ayudando, esconderse no parece nada de Soplito.",
        },
        {
          text: "Pedirá ser de otro color",
          rationale:
            "A Soplito le gusta ser rojo; el cuento nunca dice que quiera cambiar.",
        },
        {
          text: "Estará pendiente del mar, listo para ayudar a quien lo necesite",
          rationale:
            "¡Qué buena predicción! Soplito descubrió que puede ayudar, así que lo más probable es que siga con los ojos bien abiertos.",
        },
        {
          text: "Se quedará dormido todo el día",
          rationale:
            "Soplito ama el mar y ahora confía en sí mismo; no se perdería un día entero durmiendo.",
        },
      ],
      correctIndex: 2,
      explanation:
        "Soplito acaba de descubrir que puede ayudar a otros y se siente orgulloso. Lo más probable es que mañana siga navegando, atento a quien necesite su ayuda.",
    },
  ],
  teachingNotes:
    "Habilidades: comprensión literal, vocabulario en contexto, inferencia, idea principal y predicción. Para conversar: ¿alguna vez ayudaste a alguien aunque te sintieras pequeño o pequeña? ¿Cómo te sentiste después? Vocabulario clave: puerto, gaviota, cubierta, sirena. Escritura: “Hoy ayudé a alguien cuando…” o “Una cosa pequeña que puedo hacer para ayudar es…”",
};
