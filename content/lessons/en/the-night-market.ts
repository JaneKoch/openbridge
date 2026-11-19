import type { Lesson } from "@/lib/content/types";

/**
 * Level 3 · English — a coastal night market loses its power, and a girl
 * with a storeroom full of old lanterns helps the whole lane glow again.
 */
export const theNightMarket: Lesson = {
  slug: "the-night-market",
  language: "en",
  level: 3,
  title: "The Night Market",
  subtitle: "When the lights go out, a market learns to glow",
  description:
    "A sudden power cut darkens the seaside night market — and Mira has an idea that shines.",
  minutes: 6,
  emoji: "🏮",
  palette: "sunset",
  story: {
    title: "The Night Market",
    sections: [
      "In the coastal city of Port Amber, the best hours came after dark. Every evening the night market woke up: stalls rolled into the lanes, grills hissed, and strings of lights blinked on like rows of small moons. Mira loved it all. Her family sold hot noodle soup at stall number twelve.",
      "Mira’s job was to greet customers and count the coins into the blue tin. She knew the market’s sounds by heart — the chop-chop of Auntie Bo’s knife, the sizzle of Uncle Ren’s pancakes, the laugh of the lantern seller at the corner. On busy nights the lane smelled of ginger, warm bread, and sea salt.",
      "One Saturday the wind came in hard from the harbor. It rattled the stall covers and pushed the smoke sideways. Then, with a soft pop, every light in the market went out at once. The grills still hissed, but nobody could see a thing.",
      "A power cut, the vendors said. The whole lane was dark, and the night was only half over. Customers drifted away toward the bright streets. Auntie Bo sighed and folded her arms. Without light, she said, a market is just a road.",
      "Mira thought of her grandmother’s storeroom above the shop. Grandmother used to sell paper lanterns, and the old ones still hung there, folded flat like sleeping birds. Mira asked if she could borrow them. Her mother nodded. Take a candle for each one, she said, and take your cousin Kai to help.",
      "The two children climbed the stairs and came down with their arms full of red and gold lanterns. They lit the candles inside and hung the lanterns on the stall poles, one by one. Other kids saw the glow and ran home for lamps, jars, and flashlights. Soon the whole lane was carrying little lights.",
      "Something wonderful happened. The market did not look like a market anymore — it looked like a festival. The lantern light made the soup steam glow gold and turned the puddles into mirrors. People came back to see it. Some carried their dinners from stall to stall, eating under the warm red light.",
      "By the time the electric lights buzzed back on, nobody cheered. The lanterns were prettier. Auntie Bo laughed and said the customers had stayed longer than ever. Mira counted the coins in the blue tin and found it heavier than on any Saturday before.",
      "From then on, the market kept a lantern lit at every stall, even on bright nights. Travelers heard about the glowing lane by the sea and came to walk it. Mira liked to tell them the truth: the lights went out, and the market made its own. The best light, her grandmother said, is the kind people make together.",
    ],
  },
  glossary: [
    {
      term: "stall",
      definition:
        "a small open shop or table at a market where one family sells its food or goods",
    },
    {
      term: "vendor",
      definition: "a person who sells things, like the cooks at the night market",
    },
    {
      term: "lantern",
      definition:
        "a lamp with a cover around its light, often made of paper or glass, that you can carry or hang up",
    },
    {
      term: "power cut",
      definition:
        "a time when the electricity stops working, so electric lights and machines go dark",
    },
    {
      term: "harbor",
      definition:
        "a sheltered place by the sea where boats can rest safely out of the waves",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "What made the whole market go dark?",
      options: [
        {
          text: "A power cut turned off every electric light at once",
          rationale:
            "The story says the lights went out with a soft pop, and the vendors call it a power cut.",
        },
        {
          text: "The vendors switched the lights off to save money",
          rationale:
            "The vendors were upset about the dark — they wanted the light, because customers were leaving.",
        },
        {
          text: "The wind blew the moon behind a cloud",
          rationale:
            "The wind did blow hard from the harbor, but moonlight never lit the market — the electric lights did.",
        },
        {
          text: "Auntie Bo blew out all the candles",
          rationale:
            "The candles came later, inside Mira’s lanterns. Before that, there were no candles to blow out.",
        },
      ],
      correctIndex: 0,
      explanation:
        "The story tells us directly: with a soft pop, every light went out, and the vendors say it is a power cut. That means the electricity stopped.",
    },
    {
      id: "q2",
      skill: "vocabulary",
      prompt: "In this story, what is a stall?",
      options: [
        {
          text: "A kind of boat that fishes at night",
          rationale:
            "Boats rest in the harbor in this story, but a stall is not a boat — it never leaves the lane.",
        },
        {
          text: "A small open shop or table where a family sells things at a market",
          rationale:
            "Mira’s family sells noodle soup at stall number twelve — that is their little market shop.",
        },
        {
          text: "A bedroom above a shop",
          rationale:
            "The storeroom above the shop is where the lanterns sleep, but a stall is down in the market lane.",
        },
        {
          text: "A tall street lamp",
          rationale:
            "The lights hang above the stalls, but the stall itself is the place where food is cooked and sold.",
        },
      ],
      correctIndex: 1,
      explanation:
        "A stall is a small open shop at a market. Mira greets customers and counts coins at her family’s stall, number twelve, where they sell hot noodle soup.",
    },
    {
      id: "q3",
      skill: "sequence",
      prompt: "What did Mira do first, after the lights went out?",
      options: [
        {
          text: "She hung lanterns on the stall poles",
          rationale:
            "Hanging the lanterns came later — first she had to find them and light them.",
        },
        {
          text: "She counted the coins in the blue tin",
          rationale:
            "Mira counts the heavy tin at the end of the night, after the lanterns have saved the market.",
        },
        {
          text: "She asked to borrow her grandmother’s old paper lanterns",
          rationale:
            "Right after the dark, Mira remembers the storeroom and asks her mother if she can borrow the lanterns.",
        },
        {
          text: "She lit candles inside the lanterns",
          rationale:
            "Lighting the candles happens after she and Kai carry the lanterns down the stairs.",
        },
      ],
      correctIndex: 2,
      explanation:
        "First Mira thinks of the storeroom and asks to borrow the lanterns. Then she and Kai fetch them, light the candles, and hang them up — in that order.",
    },
    {
      id: "q4",
      skill: "inference",
      prompt: "Why did customers come back to the market while it was still dark?",
      options: [
        {
          text: "The noodle soup became free",
          rationale:
            "The blue tin ends up heavier than ever, so people were still paying — the soup was not free.",
        },
        {
          text: "The electric lights came back on brighter than before",
          rationale:
            "The electric lights return only at the end, and nobody cheers — the lanterns were the prettier light.",
        },
        {
          text: "The lanterns made the market look like a festival they wanted to see",
          rationale:
            "The story says the glowing lane looked like a festival, and people came back to see it.",
        },
        {
          text: "They wanted to help the vendors clean up",
          rationale:
            "Nobody is cleaning — the customers came to walk the glowing lane and eat under the warm red light.",
        },
      ],
      correctIndex: 2,
      explanation:
        "The lanterns turned the dark market into something beautiful — steam glowing gold, puddles like mirrors. People returned because the festival of light was worth seeing.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "What is this story mostly about?",
      options: [
        {
          text: "A girl who is afraid of the dark",
          rationale:
            "Mira is never shown being afraid — she is the one who runs toward a solution.",
        },
        {
          text: "A market community that makes its own light when the power fails",
          rationale:
            "From the power cut to the lanterns to the glowing lane, the whole story shows people lighting their market together.",
        },
        {
          text: "A grandmother who sells noodle soup",
          rationale:
            "Grandmother used to sell lanterns, and it is Mira’s family who sells soup — and neither is the center of the story.",
        },
        {
          text: "A storm that destroys the harbor",
          rationale:
            "The wind is strong, but nothing in the harbor is destroyed — the trouble is only the dark.",
        },
      ],
      correctIndex: 1,
      explanation:
        "Every part of the story points one way: the lights fail, and the people of the market — starting with Mira — make their own light together. That is the big idea.",
    },
    {
      id: "q6",
      skill: "prediction",
      prompt: "What will the market most likely do on future busy nights?",
      options: [
        {
          text: "Close early whenever the wind blows",
          rationale:
            "The market learned it can survive a dark, windy night — closing early would throw away what it learned.",
        },
        {
          text: "Stop selling noodle soup",
          rationale:
            "The soup stall was busier than ever under the lanterns, so there is no reason to stop.",
        },
        {
          text: "Move to a bright street far from the sea",
          rationale:
            "Travelers now come to the glowing lane by the sea — the market’s home is exactly what makes it special.",
        },
        {
          text: "Keep lanterns ready and light them together",
          rationale:
            "The story ends with a lantern lit at every stall, so the market has clearly made lanterns part of its life.",
        },
      ],
      correctIndex: 3,
      explanation:
        "The last section tells us the market now keeps a lantern lit at every stall. We can safely guess the lanterns will stay ready for any night, dark or bright.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, vocabulary in context, sequence, inference, main idea, prediction. Discussion: when something goes wrong in your neighborhood, what could people make or share to fix it together? Vocabulary focus: stall, vendor, lantern, power cut, harbor. Writing prompt: “The night our street went dark, we…”",
};
