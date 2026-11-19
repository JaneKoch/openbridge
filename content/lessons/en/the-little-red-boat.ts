import type { Lesson } from "@/lib/content/types";

/**
 * Level 1 · English — early reader lesson.
 */
export const theLittleRedBoat: Lesson = {
  slug: "the-little-red-boat",
  language: "en",
  level: 1,
  title: "The Little Red Boat",
  subtitle: "A toy boat, a sudden breeze, and a clever rescue",
  description:
    "Lina sails her wooden boat in the harbor tide pool, and finds a smart way to bring it home when the breeze pushes it out of reach.",
  minutes: 3,
  emoji: "⛵",
  palette: "ocean",
  story: {
    title: "The Little Red Boat",
    sections: [
      "Lina had a little red boat made of smooth wood. It had a white paper sail on top.",
      "Every afternoon, Lina went down to the quiet harbor with her aunt. She liked to float her boat in a wide tide pool between the rocks.",
      "One day, a sudden breeze blew across the water. The white sail puffed out, and the little boat drifted to the middle of the pool.",
      "\u201cCome back, little boat!\u201d Lina called. She reached out her hand, but the water was too far.",
      "Lina did not jump in. She looked around the sandy shore and spotted a long piece of driftwood.",
      "She knelt on a flat rock and stretched the stick over the water. Still, the boat was just an inch too far away.",
      "Then Lina had an idea. She scooped water with her hand and made small waves behind the boat. Push, splash, push! The gentle ripples carried the little red boat right back into her hands.",
    ],
  },
  glossary: [
    {
      term: "harbor",
      definition:
        "a safe, calm place by the sea where boats rest away from big waves",
    },
    {
      term: "breeze",
      definition: "a light and gentle wind",
    },
    {
      term: "driftwood",
      definition: "a piece of wood that has washed onto the shore by the water",
    },
    {
      term: "ripples",
      definition: "tiny waves that move across the top of water",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "What pushed Lina’s little red boat to the middle of the pool?",
      options: [
        {
          text: "A sudden breeze",
          rationale:
            "The story says a sudden breeze blew across the water and puffed out the white paper sail.",
        },
        {
          text: "A big green fish",
          rationale:
            "There are rocks and water in the tide pool, but no fish pushes the boat in the story.",
        },
        {
          text: "Her aunt’s paddle",
          rationale:
            "Lina goes to the harbor with her aunt, but her aunt does not push the boat.",
        },
        {
          text: "A heavy raindrop",
          rationale:
            "It is a breezy afternoon at the harbor, not a rainy day.",
        },
      ],
      correctIndex: 0,
      explanation:
        "When the breeze blew across the tide pool, it filled the boat’s paper sail and pushed it out to the middle.",
    },
    {
      id: "q2",
      skill: "sequence",
      prompt:
        "What did Lina try FIRST to get her boat back before she splashed the water?",
      options: [
        {
          text: "She reached for it with a long piece of driftwood",
          rationale:
            "First Lina found a long piece of driftwood on the shore and stretched it over the water, before she thought of making waves.",
        },
        {
          text: "She swam out to the middle of the pool",
          rationale:
            "The story says Lina did not jump in the water at all.",
        },
        {
          text: "She threw small pebbles past the sail",
          rationale:
            "Lina knelt on a flat rock, but she never threw pebbles in the water.",
        },
        {
          text: "She folded a new paper boat",
          rationale:
            "Lina wanted to rescue her wooden boat, not make a new one.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Before splashing ripples, Lina looked along the sandy shore, picked up a piece of driftwood, and tried to reach the boat with it.",
    },
    {
      id: "q3",
      skill: "vocabulary",
      prompt: "In the story, what are ripples?",
      options: [
        {
          text: "Tiny waves moving across the water",
          rationale:
            "When Lina splashed with her hand, she made small waves—ripples—that carried the boat back.",
        },
        {
          text: "Sharp shells hidden in the sand",
          rationale:
            "Shells live on the shore, while ripples happen on the surface of the water.",
        },
        {
          text: "Ropes used to tie up big ships",
          rationale:
            "Ropes hold boats still, while the ripples in the story gently moved the boat across the pool.",
        },
        {
          text: "White clouds high in the sky",
          rationale:
            "Lina made the ripples by scooping water with her hand, so they are in the pool, not the sky.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Ripples are tiny, gentle waves on top of the water. Lina’s splashes made ripples that pushed her boat back to the rock.",
    },
    {
      id: "q4",
      skill: "inference",
      prompt: "What does Lina’s rescue show us about her?",
      options: [
        {
          text: "She stays calm and tries new ideas when a problem happens",
          rationale:
            "When her hand and the driftwood could not reach, Lina did not give up—she thought of using ripples to move the boat.",
        },
        {
          text: "She does not care very much about her red boat",
          rationale:
            "Lina tried three different ways to save her boat, which shows she cared about it a lot.",
        },
        {
          text: "She is afraid of sitting near the water",
          rationale:
            "Lina visits the tide pool every afternoon and kneels right on a rock by the water.",
        },
        {
          text: "She prefers playing indoors instead of outside",
          rationale:
            "Lina loves bringing her boat outside to the harbor every afternoon.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Even when her first two tries did not work, Lina stayed patient and used a clever new idea to solve the problem safely.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "What is this story mostly about?",
      options: [
        {
          text: "How Lina uses clever thinking to bring her toy boat back to shore",
          rationale:
            "Every part of the story follows Lina’s boat drifting out and the smart ways she tries to bring it back.",
        },
        {
          text: "How to carve a wooden boat and fold a paper sail",
          rationale:
            "Lina already has her boat at the start of the story; we never see her carving or folding it.",
        },
        {
          text: "Why the ocean has high and low tides every day",
          rationale:
            "Lina plays in a tide pool, but the story is about her boat adventure, not a science lesson on ocean tides.",
        },
        {
          text: "A race between many toy boats in a harbor",
          rationale:
            "Lina’s little red boat is the only toy boat in the tide pool.",
        },
      ],
      correctIndex: 0,
      explanation:
        "The whole story focuses on Lina’s little red boat drifting out into the tide pool and how she figures out a smart way to rescue it.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, sequence of events, vocabulary in context, character inference, main idea. Discussion: Have you ever tried to fix a problem and your first idea did not work? What did you try next? Vocabulary focus: harbor, breeze, driftwood, ripples. Writing prompt: \u201cIf I sailed a tiny boat, I would want it to go to…\u201d",
};
