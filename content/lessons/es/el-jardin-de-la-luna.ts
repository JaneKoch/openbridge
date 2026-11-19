import type { Lesson } from "@/lib/content/types";

/**
 * Nivel 2 · Español — capítulos cortos, imágenes descritas con palabras y
 * personajes amables.
 *
 * Sigue el mismo contrato de calidad que
 * `content/lessons/en/maya-and-the-river-bridge.ts`: retroalimentación
 * cálida y específica en cada opción, glosario que pre-enseña el
 * vocabulario nuevo y notas para el aula.
 */
export const elJardinDeLaLuna: Lesson = {
  slug: "el-jardin-de-la-luna",
  language: "es",
  level: 2,
  title: "El jardín de la Luna",
  subtitle: "Una esquina seca, un secreto de la abuela y flores que brillan de noche",
  description:
    "Alba riega cada tarde la esquina más seca del jardín de su abuela. Con paciencia y cariño descubre un secreto: hay flores que esperan la luz de la luna para abrirse.",
  minutes: 5,
  emoji: "🌙",
  palette: "cosmos",
  story: {
    title: "El jardín de la Luna",
    sections: [
      "En la casa de la abuela Pilar hay un jardín lleno de flores de colores. Alba, su nieta, lo riega cada tarde con una regadera azul. Pero en una esquina del jardín la tierra está seca y nunca crece nada. —Esa esquina está dormida —dice la abuela con una sonrisa misteriosa.",
      "—¿Dormida? —pregunta Alba, abriendo mucho los ojos—. La abuela acaricia la tierra con cariño y le cuenta un secreto: —Aquí duermen las flores de luna. Solo abren para quien las espera con paciencia.",
      "Alba no está muy segura de entender, pero decide intentarlo. Cada tarde riega la esquina seca. También le habla a la tierra bajito, como quien cuenta un secreto.",
      "Los vecinos pasan por la calle y menean la cabeza. —Esa esquina nunca florece —dicen—. La tierra es muy pobre. Pero Alba no se da por vencida y sigue regando, día tras día.",
      "Una mañana, Alba encuentra unos brotes verdes asomando de la tierra. ¡Son más pequeños que granos de arroz! Los cuida como si fueran un tesoro: quita las malas hierbas y les da un poquito de sombra al mediodía.",
      "Poco a poco, los brotes crecen y forman capullos blancos, redondos y cerrados. —Todavía no —parecen decir. Alba espera con calma, riega cada tarde y cuenta los días con los dedos.",
      "Una noche de luna llena, la abuela llama a Alba en voz bajita. —Ven pronto; el jardín te está buscando. En la esquina seca, cientos de flores blancas se abren despacio y brillan como lunas pequeñas. El rocío destella sobre los pétalos como un collar de gotas.",
      "Las flores de luna tienen un perfume dulce que llena el aire. Luciérnagas curiosas llegan de visita y el jardín se enciende de lucecitas. La abuela abraza a Alba con orgullo. —La paciencia también florece —le dice al oído.",
      "Desde esa noche, el jardín de la luna recibe visitantes con linternas. Los vecinos ya no menean la cabeza: traen sillas para mirar las flores. Y Alba guarda semillas en un sobrecito de papel para regalar. Quiere que cada casa del barrio tenga su propia luna pequeña.",
    ],
  },
  glossary: [
    {
      term: "paciencia",
      definition:
        "quedarse tranquilo y seguir intentando, aunque algo tarde en suceder",
    },
    {
      term: "brote",
      definition: "una plantita pequeñita que acaba de nacer de una semilla",
    },
    {
      term: "capullo",
      definition:
        "una flor todavía cerrada, como un paquete que guarda los pétalos adentro",
    },
    {
      term: "luciérnaga",
      definition: "un insectito que brilla en la noche, como una lamparita viva",
    },
    {
      term: "rocío",
      definition:
        "gotitas de agua que aparecen sobre las plantas al amanecer",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "¿Qué encuentra Alba una mañana en la esquina seca?",
      options: [
        {
          text: "Un sobrecito lleno de semillas",
          rationale:
            "El sobrecito con semillas aparece al final del cuento, cuando Alba decide compartir su alegría.",
        },
        {
          text: "Unos brotes verdes, pequeños como granos de arroz",
          rationale:
            "¡Bien visto! Una mañana Alba descubre brotes verdes asomando de la tierra seca.",
        },
        {
          text: "Un collar hecho de gotas de rocío",
          rationale:
            "El rocío aparece más tarde, brillando sobre las flores ya abiertas.",
        },
        {
          text: "Una regadera azul y brillante",
          rationale:
            "La regadera azul ya era de Alba desde el principio del cuento; no es un descubrimiento nuevo.",
        },
      ],
      correctIndex: 1,
      explanation:
        "Una mañana, Alba encuentra brotes verdes asomando de la tierra seca, tan pequeños como granos de arroz. Es la primera señal de que su cuidado está funcionando.",
    },
    {
      id: "q2",
      skill: "sequence",
      prompt: "¿Qué hace Alba primero para despertar la esquina seca?",
      options: [
        {
          text: "Riega la tierra cada tarde y le habla bajito",
          rationale:
            "¡En orden! Antes de ver brotes o capullos, Alba riega la esquina todos los días y le habla con cariño.",
        },
        {
          text: "Guarda semillas en un sobrecito de papel",
          rationale:
            "Eso ocurre al final del cuento, mucho después de que las flores ya florecieron.",
        },
        {
          text: "Invita a los vecinos a mirar el jardín con linternas",
          rationale:
            "Los vecinos llegan de noche solo cuando el jardín de la luna ya está abierto para todos.",
        },
        {
          text: "Cuenta los días esperando que abran los capullos",
          rationale:
            "Alba cuenta los días, pero eso sucede después de que aparecen los capullos, no al principio.",
        },
      ],
      correctIndex: 0,
      explanation:
        "El cuento cuenta los pasos en orden: primero Alba riega y cuida la esquina cada tarde. Solo después aparecen los brotes, luego los capullos y, por último, las flores abiertas.",
    },
    {
      id: "q3",
      skill: "vocabulary",
      prompt: "En este cuento, ¿qué es un capullo?",
      options: [
        {
          text: "Un insectito que brilla en la noche",
          rationale:
            "Eso es una luciérnaga, que también visita el jardín, pero no es un capullo.",
        },
        {
          text: "Una gotita de agua que brilla al amanecer",
          rationale:
            "Eso es el rocío; las gotitas aparecen sobre las flores ya abiertas.",
        },
        {
          text: "Una flor todavía cerrada que guarda sus pétalos adentro",
          rationale:
            "¡Exacto! Los capullos blancos guardaban las flores cerradas hasta la noche de luna llena.",
        },
        {
          text: "Una plantita recién nacida de una semilla",
          rationale:
            "Eso es un brote; los brotes aparecen primero y después forman los capullos.",
        },
      ],
      correctIndex: 2,
      explanation:
        "Un capullo es una flor cerrada que todavía no muestra sus pétalos. En el cuento, los capullos blancos se abren la noche de luna llena y se convierten en flores brillantes.",
    },
    {
      id: "q4",
      skill: "inference",
      prompt: "¿Por qué la abuela dice que la esquina está “dormida”?",
      options: [
        {
          text: "Porque la esquina tiene sueño, como las personas",
          rationale:
            "Las esquinas no duermen de verdad: la abuela habla con poesía y cariño.",
        },
        {
          text: "Porque en esa tierra nunca se puede plantar nada",
          rationale:
            "La abuela jamás dice que la esquina esté perdida; ella sabe que ahí hay flores esperando.",
        },
        {
          text: "Porque alguien enterró piedras en esa tierra",
          rationale:
            "El cuento no habla de piedras; lo que guarda la tierra son flores de luna.",
        },
        {
          text: "Porque las flores de luna descansan bajo la tierra, esperando paciencia y cuidado",
          rationale:
            "¡Qué bien leíste entre líneas! Para la abuela, “dormida” significa que las flores esperan bajo la tierra hasta que alguien las cuida con paciencia.",
        },
      ],
      correctIndex: 3,
      explanation:
        "La abuela habla con poesía: dice que las flores de luna “duermen” bajo la tierra. Alba demuestra que es verdad, porque con paciencia y cuidado la esquina despierta llena de flores.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "¿De qué trata principalmente este cuento?",
      options: [
        {
          text: "De una niña que, con paciencia y cuidado, despierta un jardín y comparte su alegría",
          rationale:
            "¡Ese es el corazón del cuento! La esquina seca florece gracias al cuidado constante de Alba, y ella lo comparte con todo el barrio.",
        },
        {
          text: "De una abuela que colecciona regaderas azules",
          rationale:
            "La abuela es sabia y cariñosa, pero el cuento no trata de coleccionar regaderas.",
        },
        {
          text: "De unas luciérnagas que iluminan toda la ciudad",
          rationale:
            "Las luciérnagas solo visitan el jardín; la historia se centra en Alba y su paciencia.",
        },
        {
          text: "De unos vecinos que nunca cambian de opinión",
          rationale:
            "Al final los vecinos sí cambian: llegan con sillas para admirar las flores.",
        },
      ],
      correctIndex: 0,
      explanation:
        "El cuento sigue a Alba desde que riega la esquina seca hasta que regala semillas a sus vecinos. Todo muestra lo mismo: la paciencia y el cuidado hacen florecer hasta lo más dormido.",
    },
  ],
  teachingNotes:
    "Habilidades: comprensión literal, secuencia de eventos, vocabulario en contexto, inferencia e idea principal. Para conversar: ¿qué cosas valen la pena esperar con paciencia? ¿Has visto despertar algo gracias a un cuidado constante? Vocabulario clave: paciencia, brote, capullo, luciérnaga, rocío. Escritura: “Algo que quiero cuidar con paciencia es…”",
};
