import type { Lesson } from "@/lib/content/types";

/**
 * Level 1 · English — early reader lesson.
 */
export const benAndTheBumblebee: Lesson = {
  slug: "ben-and-the-bumblebee",
  language: "en",
  level: 1,
  title: "Ben and the Bumblebee",
  subtitle: "A golden garden visitor and a boy who learns to look closely",
  description:
    "When a loud, fuzzy bumblebee lands on Ben’s sunflower, his grandma shows him all the wonderful work one tiny bee can do.",
  minutes: 3,
  emoji: "🐝",
  palette: "meadow",
  story: {
    title: "Ben and the Bumblebee",
    sections: [
      "Ben and his grandma grew tall sunflowers in green pots on their sunny porch. Ben watered them every morning with his blue can.",
      "One warm morning, Ben heard a deep buzz. Bzzzz! A fat, fuzzy bumblebee flew down and landed right on the biggest yellow flower.",
      "Ben took two fast steps back. \u201cGrandma!\u201d he called. \u201cThere is a big bee on my flower!\u201d",
      "Grandma walked out with a gentle smile. \u201cStand very still and watch,\u201d she whispered. \u201cShe is not here to bother you. She is eating breakfast.\u201d",
      "Ben held his breath and looked closely. The bee had yellow stripes and dusty gold pollen stuck all over her furry legs.",
      "The bee sipped sweet nectar from the center of the flower. Then she buzzed over to the tomato blossoms next door.",
      "\u201cShe carries pollen from flower to flower,\u201d Grandma said. \u201cThat helps our tomatoes and sunflowers make seeds and fruit.\u201d",
      "Ben smiled and waved one finger as the bee flew into the sky. \u201cThank you for helping our garden, little bee!\u201d he said.",
    ],
  },
  glossary: [
    {
      term: "pollen",
      definition:
        "fine yellow dust inside flowers that plants need to make seeds and fruit",
    },
    {
      term: "nectar",
      definition: "sweet liquid inside flowers that bees and birds love to drink",
    },
    {
      term: "blossoms",
      definition: "the flowers on a plant that will later grow into fruit",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "Where did the bumblebee land first?",
      options: [
        {
          text: "On the biggest yellow sunflower",
          rationale:
            "The story says the fat, fuzzy bumblebee flew down and landed right on the biggest yellow flower.",
        },
        {
          text: "On Ben’s nose",
          rationale:
            "Ben stepped back when he heard the buzz; the bee stayed on the flowers, not on Ben.",
        },
        {
          text: "Inside the blue watering can",
          rationale:
            "Ben used the blue watering can to water the pots, but the bee wanted flower nectar, not water.",
        },
        {
          text: "On Grandma’s shoulder",
          rationale:
            "Grandma came outside to watch with Ben, and the bee stayed busy in the garden pots.",
        },
      ],
      correctIndex: 0,
      explanation:
        "When Ben first heard the deep buzz, the bumblebee flew down and landed right on the biggest yellow sunflower.",
    },
    {
      id: "q2",
      skill: "inference",
      prompt: "Why did Ben take two fast steps back when he first saw the bee?",
      options: [
        {
          text: "He felt startled and a little afraid of the loud bee",
          rationale:
            "Stepping back quickly and calling for Grandma shows that Ben was surprised and worried the bee might sting him.",
        },
        {
          text: "He wanted to run inside and get his breakfast",
          rationale:
            "It was the bee eating breakfast from the flower; Ben stayed on the porch with Grandma.",
        },
        {
          text: "He was playing a game of hide-and-seek",
          rationale:
            "Ben was watering his sunflowers when the bee arrived, not playing hide-and-seek.",
        },
        {
          text: "He dropped his blue watering can on his toe",
          rationale:
            "The story never says Ben dropped his watering can—he stepped back because of the buzzing bee.",
        },
      ],
      correctIndex: 0,
      explanation:
        "When someone takes fast steps back and calls for help, it shows they are startled. Once Grandma explained what the bee was doing, Ben felt calm and curious.",
    },
    {
      id: "q3",
      skill: "vocabulary",
      prompt:
        "What is the dusty gold pollen stuck on the bumblebee’s furry legs?",
      options: [
        {
          text: "Fine yellow dust from flowers that helps plants make seeds and fruit",
          rationale:
            "Grandma explains that carrying this yellow dust from flower to flower helps the sunflowers and tomatoes grow seeds and fruit.",
        },
        {
          text: "Wet mud from the bottom of the green flower pots",
          rationale:
            "Pollen is bright gold dust from the center of the flower, not mud from the soil.",
        },
        {
          text: "Tiny drops of water from Ben’s blue watering can",
          rationale:
            "The story calls the pollen dusty and gold, not wet drops of water.",
        },
        {
          text: "Crumbs of toast from Grandma’s kitchen table",
          rationale:
            "Bees get their food right from flowers, not from kitchen toast.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Pollen is the fine yellow dust inside flowers. As bees sip nectar, pollen sticks to their furry legs and travels to the next blossom.",
    },
    {
      id: "q4",
      skill: "main-idea",
      prompt: "What important lesson does Ben learn in this story?",
      options: [
        {
          text: "Bees are gentle, hard workers that help gardens grow",
          rationale:
            "By standing still and watching, Ben learns that the bee is peaceful and helps their flowers and tomatoes grow.",
        },
        {
          text: "You should only water sunflowers late at night",
          rationale:
            "Ben waters his sunflowers every morning, and the story never says to change that.",
        },
        {
          text: "Tomato plants grow taller than sunflowers",
          rationale:
            "The story mentions both plants on the porch, but it is not about comparing their height.",
        },
        {
          text: "Loud insects should be chased away from porches",
          rationale:
            "Grandma teaches Ben the exact opposite: to stand still, watch kindly, and welcome the bee’s help.",
        },
      ],
      correctIndex: 0,
      explanation:
        "At first Ben is nervous about the bee, but by watching closely with Grandma, he discovers that bees are helpful friends to the garden.",
    },
    {
      id: "q5",
      skill: "prediction",
      prompt:
        "What will Ben most likely do the NEXT time he sees a bumblebee on his porch?",
      options: [
        {
          text: "Stand still and happily watch it visit the flowers",
          rationale:
            "By the end of the story, Ben smiles, waves, and thanks the bee, so next time he will welcome it calmly.",
        },
        {
          text: "Shoo it away with his blue watering can",
          rationale:
            "Ben now knows the bee helps his sunflowers and tomatoes grow, so he would not chase it away.",
        },
        {
          text: "Move all the flower pots inside the house",
          rationale:
            "Sunflowers and bees both belong outside on the sunny porch, and Ben is happy to share his garden with the bee.",
        },
        {
          text: "Stop growing sunflowers and tomatoes",
          rationale:
            "Ben cares for his plants every morning and thanked the bee for helping them grow.",
        },
      ],
      correctIndex: 0,
      explanation:
        "Now that Ben understands how bees help his plants make seeds and fruit, he will be excited—not scared—to see a bee again.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, character inference, vocabulary in context, main idea, prediction. Discussion: How did Ben’s feelings about the bumblebee change from the beginning of the story to the end? Vocabulary focus: pollen, nectar, blossoms. Writing prompt: \u201cOne small creature in nature that does an important job is…\u201d",
};
