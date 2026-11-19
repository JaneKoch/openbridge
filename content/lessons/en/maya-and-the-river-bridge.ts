import type { Lesson } from "@/lib/content/types";

/**
 * Level 2 · English — the flagship sample lesson.
 *
 * This file is the reference implementation for lesson quality: warm and
 * specific feedback on every option, a glossary that pre-teaches harder
 * words, and teaching notes for classroom use.
 */
export const mayaAndTheRiverBridge: Lesson = {
  slug: "maya-and-the-river-bridge",
  language: "en",
  level: 2,
  title: "Maya and the River Bridge",
  subtitle: "A flood, a dream, and a village that builds together",
  description:
    "When the river washes the old bridge away, Maya learns that big dreams are how bridges begin.",
  minutes: 5,
  emoji: "🌉",
  palette: "sunrise",
  story: {
    title: "Maya and the River Bridge",
    sections: [
      "Maya lived in a small village where the houses were painted the colors of sunset. Every morning she walked a dusty path to school. The school stood on the far side of the Silver River, where the water ran quick and cold.",
      "An old wooden bridge crossed the river. It creaked when the wind blew. \u201cOne day I will build a better bridge,\u201d Maya said. Her grandfather laughed kindly. \u201cThat is a big dream for a small person. But big dreams are how bridges begin.\u201d",
      "One night, rain fell for hours and hours. Thunder rolled over the hills like a giant drum. When Maya woke, she ran to the river — and her heart sank. The old bridge was gone. The water had carried it away in the dark.",
      "Maya stood at the water's edge and watched the broken pieces float by. Without the bridge, some children could not reach school at all. Their teacher, Ms. Amina, rowed across in a small boat to bring them lessons. But the boat was slow, and the river was dangerous.",
      "That evening, Maya knocked on every door in the village. \u201cWe need a bridge,\u201d she said. \u201cNot a wooden one the river can steal. A stone one.\u201d Some neighbors shook their heads. Stones are heavy, they said. Stone bridges take a long time, they said.",
      "But the mason, Mr. Kofi, rubbed his chin and looked at the river. \u201cA small person had a big dream,\u201d he said. \u201cAnd I have strong hands. Let us see what we can build together.\u201d",
      "All through the dry season, the village worked. Maya carried small stones in her basket. Mr. Kofi shaped them. The children fetched water for the cement. Little by little, a stone bridge grew over the Silver River, arch by patient arch.",
      "When it was finished, Maya was the first to walk across. The bridge did not creak. It did not sway. It stood as steady as a mountain. Maya smiled. \u201cBig dreams,\u201d she said, \u201care how bridges begin.\u201d",
    ],
  },
  glossary: [
    {
      term: "mason",
      definition: "a person whose job is building with stone and brick",
    },
    {
      term: "cement",
      definition:
        "a gray powder mixed with water that hardens like stone and holds things together",
    },
    {
      term: "arch",
      definition:
        "a curved shape that carries weight and makes bridges strong",
    },
    {
      term: "steady",
      definition: "firm and not shaking or falling",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "main-idea",
      prompt: "What is this story mostly about?",
      options: [
        {
          text: "A village that works together to build a strong new bridge",
          rationale:
            "This is the heart of the story: Maya's dream becomes a real stone bridge built by everyone together.",
        },
        {
          text: "A girl who is afraid of thunderstorms",
          rationale:
            "The storm frightens Maya, but her fear is only one small moment — the story is about much more than that.",
        },
        {
          text: "A teacher who rows a boat to school every day",
          rationale:
            "Ms. Amina rows only while the bridge is gone, and it is not the center of the story.",
        },
        {
          text: "A grandfather who builds wooden bridges",
          rationale:
            "Her grandfather tells Maya to dream big — the story never says he builds bridges.",
        },
      ],
      correctIndex: 0,
      explanation:
        "From Maya's dream, to the flood, to the finished stone bridge, every part of the story shows the village building something strong together.",
    },
    {
      id: "q2",
      skill: "literal",
      prompt: "What happened to the old wooden bridge during the storm?",
      options: [
        {
          text: "The rain and the river carried it away",
          rationale:
            "The story says the water carried the bridge away during the dark, stormy night.",
        },
        {
          text: "The rain made it stronger",
          rationale:
            "The storm destroyed the bridge — water and wind made it weaker, not stronger.",
        },
        {
          text: "The wind moved it next to the school",
          rationale:
            "The bridge was not moved to the school; it was swept down the river.",
        },
        {
          text: "Ms. Amina took it apart to build a boat",
          rationale:
            "Ms. Amina rows a boat, but the story never says she took the bridge apart.",
        },
      ],
      correctIndex: 0,
      explanation:
        "The heavy rain made the river rise, and in the dark the water carried the old bridge away.",
    },
    {
      id: "q3",
      skill: "vocabulary",
      prompt: "In this story, what is a mason?",
      options: [
        {
          text: "A person who builds with stone and brick",
          rationale:
            "Mr. Kofi is the mason — he shapes the stones for the new bridge.",
        },
        {
          text: "A person who rows boats across the river",
          rationale:
            "That describes Ms. Amina in the story, but rowing is not what a mason does.",
        },
        {
          text: "A scientist who studies the weather",
          rationale: "No one in the story studies the weather.",
        },
        {
          text: "A teacher who works in a small village",
          rationale:
            "Teaching is a different job — Ms. Amina teaches, Mr. Kofi builds with stone.",
        },
      ],
      correctIndex: 0,
      explanation:
        "A mason is someone whose job is building with stone and brick. Mr. Kofi shapes the stones for the new bridge.",
    },
    {
      id: "q4",
      skill: "inference",
      prompt: "How did Maya most likely feel when she saw the bridge was gone?",
      options: [
        {
          text: "Sad and worried, because crossing the river became hard",
          rationale:
            "Her heart sank, and the story shows she worried about getting to school.",
        },
        {
          text: "Excited, because she wanted to ride in a boat",
          rationale:
            "The flood was not exciting for Maya — the boat was slow and dangerous.",
        },
        {
          text: "Angry at her grandfather for laughing",
          rationale:
            "Her grandfather laughed kindly, and Maya was not angry at him.",
        },
        {
          text: "Bored, because nothing had really changed",
          rationale:
            "A lot changed — the bridge was gone and school became hard to reach.",
        },
      ],
      correctIndex: 0,
      explanation:
        "When the story says her heart sank, it tells us Maya felt heavy and sad. She also worried about school across the river.",
    },
    {
      id: "q5",
      skill: "prediction",
      prompt:
        "What will Maya most likely do next, after the bridge is finished?",
      options: [
        {
          text: "Think of a new big dream and start working toward it",
          rationale:
            "Maya loves big dreams, and she just learned that patience and teamwork can make them real.",
        },
        {
          text: "Tear the stone bridge down",
          rationale:
            "Maya is proud of the stone bridge — she would never replace it with something weaker.",
        },
        {
          text: "Never cross the river again",
          rationale:
            "Maya is the very first to walk across the new bridge, so she is not afraid to cross.",
        },
        {
          text: "Stop going to school now that the work is done",
          rationale:
            "School is exactly why the bridge matters to Maya — she would keep going.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Maya began with a big dream and finished it with help. We can guess she will dream again — and act again.",
    },
  ],
  teachingNotes:
    "Skills: main idea, literal recall, vocabulary in context, inference, prediction. Discussion: how do communities solve problems together? Vocabulary focus: mason, cement, arch, steady. Writing prompt: \u201cA big dream I could start with one small step is…\u201d",
};
