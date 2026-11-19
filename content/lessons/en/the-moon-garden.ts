import type { Lesson } from "@/lib/content/types";

/**
 * Level 2 · English — early chapter reader lesson.
 */
export const theMoonGarden: Lesson = {
  slug: "the-moon-garden",
  language: "en",
  level: 2,
  title: "The Moon Garden",
  subtitle: "A rooftop at dusk, a late train, and flowers that wake in the dark",
  description:
    "Tariq’s mother works until after sunset, so he and his neighbor Mr. Lin plant a special rooftop garden that saves its brightest magic for the night.",
  minutes: 5,
  emoji: "🌙",
  palette: "cosmos",
  story: {
    title: "The Moon Garden",
    sections: [
      "Tariq lived on the top floor of a brick apartment building in a busy city. Up on the flat roof, neighbors grew herbs, peppers, and bright orange marigolds in wooden boxes.",
      "Tariq loved the rooftop garden, especially his mother’s favorite morning glories. Their blue petals opened wide in the morning sun. Moving like little hands, they curled tightly shut every evening before dark.",
      "That summer, Tariq’s mother started a new job at the city hospital. Her train did not bring her home until the streetlamps were glowing and the sky had turned deep purple. By the time she climbed up to the roof with Tariq, every flower was fast asleep.",
      "\u201cI miss seeing the colors after work,\u201d his mother said softly one Tuesday, resting her chin on Tariq’s shoulder. \u201cEven the marigolds look gray in the dark.\u201d Tariq wished he could hold the sunshine in a jar until her train arrived.",
      "The next afternoon, Tariq talked to Mr. Lin, who was tying up his bean vines on the roof. \u201cIs there a flower that stays awake for people who come home late?\u201d Tariq asked.",
      "Mr. Lin’s eyes crinkled with a warm smile. He reached into his wooden tool shed and brought out a small paper packet filled with large, wrinkly white seeds. \u201cThese are moonflowers,\u201d Mr. Lin said. \u201cThey sleep all through the hot afternoon and open only when the stars come out.\u201d",
      "For six weeks, Tariq tended a secret wooden box in the corner of the roof. He watered the dark soil, trained the climbing vines up a bamboo trellis, and watched long green buds twist like tiny umbrellas. He did not tell his mother yet; he wanted it to be a surprise.",
      "At last, on a warm Friday night with a full silver moon, Tariq led his mother up the roof stairs with her eyes closed. \u201cLook now,\u201d he whispered. Right before them, six snow-white blossoms slowly uncurled, glowing like little lanterns in the moonlight and filling the roof with a sweet, lemony fragrance.",
      "His mother gasped and hugged Tariq tight. \u201cYou grew a garden out of moonlight,\u201d she said, smiling down at the luminous petals. From that night on, no matter how late her train arrived, the rooftop always had flowers waiting just for her.",
    ],
  },
  glossary: [
    {
      term: "trellis",
      definition:
        "a wooden or bamboo frame that climbing plants hold onto as they grow upward",
    },
    {
      term: "buds",
      definition:
        "tightly closed baby flowers before their petals open up",
    },
    {
      term: "fragrance",
      definition: "a sweet, pleasant smell",
    },
    {
      term: "luminous",
      definition: "shining or glowing brightly in the dark",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt:
        "Why couldn’t Tariq’s mother see the morning glories open anymore?",
      options: [
        {
          text: "She came home from work after dark, when the daytime flowers had already curled shut",
          rationale:
            "Her new job at the city hospital meant her train arrived after sunset, when the morning glories were already closed for the night.",
        },
        {
          text: "The hot summer sun dried up all the wooden boxes on the roof",
          rationale:
            "The rooftop garden was healthy and full of herbs, peppers, and marigolds.",
        },
        {
          text: "The apartment building locked the roof door at sunset",
          rationale:
            "Tariq and his mother went up to the roof together at night, so the door was not locked.",
        },
        {
          text: "Mr. Lin replaced the morning glories with bean vines",
          rationale:
            "Mr. Lin grew his own bean vines and helped Tariq; he did not remove the morning glories.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Morning glories open in the daytime sun and curl shut before dark. Because Tariq’s mother now worked until night, the flowers were asleep whenever she got home.",
    },
    {
      id: "q2",
      skill: "inference",
      prompt:
        "What did the story mean when it said Tariq “wished he could hold the sunshine in a jar until her train arrived”?",
      options: [
        {
          text: "He wanted a way to keep the daytime flowers open and bright so his mother would feel happy after work",
          rationale:
            "Seeing how much his mother missed the bright flowers, Tariq wished he could save the daytime beauty for the evening when she came home.",
        },
        {
          text: "He was trying to build a glass flashlight for the dark roof stairs",
          rationale:
            "The streetlamps and moon gave plenty of light; Tariq was thinking about how to keep the flowers open for his mother.",
        },
        {
          text: "He wanted to collect fireflies instead of growing plants",
          rationale:
            "Tariq never looks for fireflies—he asks Mr. Lin about a flower that stays awake at night.",
        },
        {
          text: "He hoped his mother would stop riding the train",
          rationale:
            "Tariq knew his mother needed the train to get home from the hospital; he wanted a surprise waiting for her when she arrived.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Of course no one can put real sunshine in a jar! That sentence is a picture in words showing how much Tariq wanted to save the daytime garden’s color and joy for his mother.",
    },
    {
      id: "q3",
      skill: "vocabulary",
      prompt:
        "In the last part of the story, what does the word luminous mean when describing the moonflower petals?",
      options: [
        {
          text: "Shining or glowing brightly in the dark",
          rationale:
            "The snow-white blossoms looked like little lanterns in the moonlight, so luminous means glowing in the dark.",
        },
        {
          text: "Prickly and sharp to touch",
          rationale:
            "Moonflower petals are soft and smooth as they uncurl, not thorny or sharp.",
        },
        {
          text: "Heavy and wet from the rain",
          rationale:
            "It was a clear Friday night with a full silver moon, not a rainy night.",
        },
        {
          text: "Shrinking smaller and smaller",
          rationale:
            "The buds were opening wide into big white blossoms, not shrinking.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Luminous means shining or glowing in the dark. Because the moonflower petals were bright white, they reflected the silver moonlight like little lanterns.",
    },
    {
      id: "q4",
      skill: "sequence",
      prompt:
        "Which event happened AFTER Mr. Lin gave Tariq the packet of wrinkly white seeds?",
      options: [
        {
          text: "Tariq watered the soil and trained the vines up a bamboo trellis for six weeks",
          rationale:
            "Right after getting the seeds from Mr. Lin, Tariq spent six weeks secretly planting, watering, and guiding the vines up the trellis.",
        },
        {
          text: "Tariq’s mother started her new job at the city hospital",
          rationale:
            "His mother started her hospital job earlier in the story—that is what gave Tariq the idea to ask Mr. Lin for help.",
        },
        {
          text: "His mother said that even the marigolds looked gray in the dark",
          rationale:
            "She said this on Tuesday night BEFORE Tariq talked to Mr. Lin the next afternoon.",
        },
        {
          text: "Mr. Lin tied up his bean vines on the roof",
          rationale:
            "Mr. Lin was already tying his bean vines when Tariq first walked over to ask his question.",
        },
      ],
      correctIndex: 0,
      explanation:
        "First Tariq’s mother missed the flowers, then Mr. Lin shared the moonflower seeds, and after that Tariq cared for the growing vines for six patient weeks before the big surprise.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "What is this story mostly about?",
      options: [
        {
          text: "A thoughtful boy who grows night-blooming flowers to bring joy to his hard-working mother",
          rationale:
            "The whole story follows Tariq noticing what his mother misses and patiently growing a moon garden just for her.",
        },
        {
          text: "Why city rooftops are better than backyards for growing peppers and beans",
          rationale:
            "The story takes place on a city rooftop, but it does not compare rooftops to backyards.",
        },
        {
          text: "How hospital trains run through the city late at night",
          rationale:
            "The late train explains why Tariq’s mother comes home after dark, but the heart of the story is on the rooftop garden.",
        },
        {
          text: "An old gardener who collects rare seeds in his wooden tool shed",
          rationale:
            "Mr. Lin is a kind neighbor who helps Tariq, but the main story belongs to Tariq and his surprise for his mother.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Every part of the story connects to Tariq’s love for his mother—noticing her wish, learning about moonflowers from Mr. Lin, and growing a garden that blooms when she comes home.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, figurative language & inference, vocabulary in context, sequence of events, main idea. Discussion: How did Tariq turn a problem he could not change (his mother’s late work schedule) into something special? Vocabulary focus: trellis, buds, fragrance, luminous. Writing prompt: \u201cA thoughtful surprise I would love to make or grow for someone in my family is…\u201d",
};
