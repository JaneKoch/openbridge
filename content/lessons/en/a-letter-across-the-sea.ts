import type { Lesson } from "@/lib/content/types";

/**
 * Level 3 · English — two children on opposite sides of an ocean build a
 * friendship one slow letter at a time, and learn the patience of seeds.
 */
export const aLetterAcrossTheSea: Lesson = {
  slug: "a-letter-across-the-sea",
  language: "en",
  level: 3,
  title: "A Letter Across the Sea",
  subtitle: "Two towns, one ocean, and a friendship that keeps writing",
  description:
    "Tomás writes to an island he has only seen on maps — and discovers that letters are slow travelers with big hearts.",
  minutes: 6,
  emoji: "💌",
  palette: "ocean",
  story: {
    title: "A Letter Across the Sea",
    sections: [
      "Tomás lived in a windy port town where the gulls argued all day and the boats came home smelling of salt. His class had a new project: every child would write letters to a child in a country across the sea. Tomás’s letter was going to an island he had only seen on maps. He practiced his best handwriting on three sheets of paper before he was happy.",
      "He wrote about the lighthouse on the point, the fog that swallowed the harbor, and his dog Biscuit, who was afraid of crabs. He drew Biscuit at the bottom, with a crab looking at him. Then he folded the letter into an envelope, stuck on a stamp with a picture of a whale, and walked it to the post office himself. The clerk told him it would travel by ship. Letters, she said, are slow travelers, but they always arrive.",
      "Waiting was the hardest part. Tomás checked the mail every day after school. Two weeks passed. Then three. Just when he had decided the sea must have eaten his letter, a fat blue envelope arrived with stamps shaped like birds. Inside was a letter from Leilani, and a small photograph of a beach where the sand was pink.",
      "Leilani wrote that her island had no fog, but it had rain that fell warm and sudden, like someone tipping a bucket from the sky. She wrote about her grandmother’s garden, where the bananas grew taller than the roof. At night, she said, the waves sometimes glowed blue, as if the sea had swallowed the stars. She had drawn the glowing waves on the back of the letter, and Tomás kept it on his wall.",
      "After that, the letters went back and forth like a slow, happy game. Tomás sent a gull’s feather and the word for harbor in his language. Leilani sent a shell that whispered when you held it to your ear, and the word for friend in hers. They traded riddles, drawings, and one terrible joke each. Tomás learned that a letter could hold a whole day of someone’s life, if you wrote it carefully.",
      "Then one month, no blue envelope came. Tomás waited through the first week, and the second. He asked the post office clerk, who told him a storm had kept the mail ship in port for many days. The letters were safe, she said, just delayed. Tomás went home and stared at the empty space on his wall where the next letter should have been.",
      "His grandmother found him there. She told him that when she was young, letters sometimes took a whole season to arrive, and nobody stopped writing. A letter is like a seed, she said. You plant it, and you trust the soil, even when you cannot see anything growing. So Tomás sat down and wrote anyway — about Biscuit, who had finally made friends with a crab.",
      "When the mail ship finally came, it brought two blue envelopes at once. Leilani had written twice, and in the second letter she explained the storm and the waiting. She had worried too, she wrote. She had checked her mailbox every day, just like him. Inside the envelope was also a drawing: two towns, one on each side of a wide blue sea, joined by a dotted line of little letters.",
      "Under the drawing, Leilani had written one sentence in Tomás’s language, carefully copied from his letters: A friend is a harbor you can carry with you. Tomás read it three times. Then he pinned the drawing beside the glowing waves and started his next letter. The sea was wide, but it was not wider than two children who kept writing.",
    ],
  },
  glossary: [
    {
      term: "envelope",
      definition: "the paper cover you fold a letter into before sending it",
    },
    {
      term: "stamp",
      definition:
        "a small sticker you buy and put on a letter to pay for its journey",
    },
    {
      term: "harbor",
      definition:
        "a sheltered place by the sea where boats can rest safely out of the waves",
    },
    {
      term: "delayed",
      definition: "made to arrive later than expected, but still on the way",
    },
    {
      term: "riddle",
      definition:
        "a puzzling question with a clever answer, fun to trade with friends",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "What did Leilani send inside her very first letter?",
      options: [
        {
          text: "A photograph of a beach with pink sand",
          rationale:
            "The story says the fat blue envelope held Leilani’s letter and a small photograph of a pink-sand beach.",
        },
        {
          text: "A gull’s feather",
          rationale:
            "The feather traveled the other way — Tomás sent it to Leilani in a later letter.",
        },
        {
          text: "A stamp with a picture of a whale",
          rationale:
            "The whale stamp was on Tomás’s first letter, the one he walked to the post office himself.",
        },
        {
          text: "A drawing of Biscuit the dog",
          rationale:
            "Tomás drew Biscuit and the crab at the bottom of his own letter — Leilani had never met the dog yet.",
        },
      ],
      correctIndex: 0,
      explanation:
        "When the first blue envelope finally arrives, the story tells us exactly what is inside: a letter from Leilani and a small photograph of a beach where the sand was pink.",
    },
    {
      id: "q2",
      skill: "vocabulary",
      prompt:
        "The clerk says the letters are safe, just delayed. What does delayed mean?",
      options: [
        {
          text: "Lost forever in the storm",
          rationale:
            "The clerk says the letters are safe — delayed means late, not lost.",
        },
        {
          text: "Written in a secret code",
          rationale:
            "Leilani and Tomás trade riddles, but their letters are plain and friendly, not secret.",
        },
        {
          text: "Made to arrive later than expected",
          rationale:
            "The storm kept the mail ship in port, so the letters were late — but still coming.",
        },
        {
          text: "Delivered by airplane instead of ship",
          rationale:
            "The letters travel by mail ship in this story, and the delay is the ship waiting out the storm.",
        },
      ],
      correctIndex: 2,
      explanation:
        "Delayed means something is late but still on its way. The storm kept the mail ship in port, so the letters arrived later than Tomás hoped — and they did arrive.",
    },
    {
      id: "q3",
      skill: "inference",
      prompt: "Why did Tomás keep writing even when no reply came?",
      options: [
        {
          text: "He wanted to win a class prize",
          rationale:
            "The story never mentions a prize — Tomás writes because the friendship matters to him.",
        },
        {
          text: "He trusted his letters would arrive, like seeds planted in soil",
          rationale:
            "His grandmother’s seed idea is exactly why he sits down and writes anyway.",
        },
        {
          text: "The clerk told him he had to",
          rationale:
            "The clerk only explains the delay — nobody makes Tomás write; he chooses to.",
        },
        {
          text: "He had nothing else to do after school",
          rationale:
            "Tomás checks the mail every day and misses his friend — writing is hopeful, not bored.",
        },
      ],
      correctIndex: 1,
      explanation:
        "Grandmother tells him a letter is like a seed: you plant it and trust the soil even when you see nothing growing. Tomás believes his letter will reach Leilani, so he keeps writing.",
    },
    {
      id: "q4",
      skill: "sequence",
      prompt: "Which of these happened first in the story?",
      options: [
        {
          text: "A storm kept the mail ship in port",
          rationale:
            "The storm comes later, after many letters have already crossed the sea.",
        },
        {
          text: "Two blue envelopes arrived at once",
          rationale:
            "The double delivery happens near the end, when the mail ship finally comes after the storm.",
        },
        {
          text: "Tomás mailed his first letter with a whale stamp",
          rationale:
            "This is where the whole friendship begins — before any reply, any storm, or any drawing.",
        },
        {
          text: "Tomás pinned the drawing of the two towns on his wall",
          rationale:
            "The drawing of the two towns arrives in the last envelope, at the very end of the story.",
        },
      ],
      correctIndex: 2,
      explanation:
        "The story starts with Tomás writing and mailing his first letter with the whale stamp. Everything else — the replies, the storm, the drawing — grows from that first step.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "What is this story mostly about?",
      options: [
        {
          text: "Two children who build a friendship across the sea by writing letters",
          rationale:
            "From the first whale-stamped letter to the dotted line of little letters, the whole story is about a friendship carried by mail.",
        },
        {
          text: "A boy who trains his dog to like crabs",
          rationale:
            "Biscuit’s crab friendship is a sweet detail in the letters, but it is not what the story is about.",
        },
        {
          text: "A post office clerk who sails ships",
          rationale:
            "The clerk explains the delay, but she stays in the post office — the ships sail without her.",
        },
        {
          text: "A girl who moves to a windy port town",
          rationale:
            "Leilani stays on her warm island the whole story — the letters travel, not the children.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Every part of the story — the first letter, the waiting, the storm, the drawing of two towns joined by letters — shows the same big idea: friendship can cross an ocean if you keep writing.",
    },
    {
      id: "q6",
      skill: "prediction",
      prompt: "What will Tomás most likely write about in his next letter?",
      options: [
        {
          text: "A goodbye, because the sea is too wide",
          rationale:
            "The story ends with Tomás starting his next letter — the waiting made the friendship stronger, not weaker.",
        },
        {
          text: "The waiting, the storm, and how happy the two letters made him",
          rationale:
            "Tomás writes about his real days, and this month’s big event was the wait and the joyful double delivery.",
        },
        {
          text: "A complaint that Leilani should stop writing",
          rationale:
            "Tomás checked the mail every day and missed her letters — he wants more, not fewer.",
        },
        {
          text: "Nothing, because he will quit the project",
          rationale:
            "The last lines show him pinning up the drawing and starting a new letter — he is more committed than ever.",
        },
      ],
      correctIndex: 1,
      explanation:
        "Tomás shares his real life in letters, and he has just lived through a month of waiting that ended in two letters at once. That is exactly the kind of news he and Leilani trade.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, vocabulary in context, inference, sequence, main idea, prediction. Discussion: what would you send a pen pal to show them your home, and why do letters take patience? Vocabulary focus: envelope, stamp, harbor, delayed, riddle. Writing prompt: write the first paragraph of a letter to a child in another country — tell them three true things about your day.",
};
