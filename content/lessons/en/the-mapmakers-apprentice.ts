import type { Lesson } from "@/lib/content/types";

/**
 * Level 4 · English — an apprentice mapmaker must choose between an old
 * master's pride and a mountain's new truth, with a caravan's medicine
 * hanging on the answer.
 */
export const theMapmakersApprentice: Lesson = {
  slug: "the-mapmakers-apprentice",
  language: "en",
  level: 4,
  title: "The Mapmaker’s Apprentice",
  subtitle: "A mountain changes, a map must change, and a boy must be brave",
  description:
    "Every map says the shortcut is closed. A shepherd girl says it is open. Tarek has two days to find out which is true.",
  minutes: 8,
  emoji: "🗺️",
  palette: "forest",
  story: {
    title: "The Mapmaker’s Apprentice",
    sections: [
      "In the mountain town of Stonepass, travelers trusted one thing above all: Master Halim’s maps. For forty years his shop had smelled of ink and cedar shavings, and his maps had guided caravans over every pass. Tarek was his apprentice. He ground the ink, stretched the paper, and learned to draw the thin lines that told a mountain’s shape. He loved the work, but he loved the rule above it even more. A map is a promise, Master Halim said. Every line says: I have been here, and this is true.",
      "Master Halim was proud of his maps, and he had earned the pride. But his knees had grown stiff, and he had not walked the high passes in years. Instead he copied his own old maps, and his master’s maps before them, line for careful line. The mountains stayed the same on paper, year after year, because no one went up to ask them otherwise.",
      "That autumn the snow came early. A caravan from the lowlands waited at the inn, its mules loaded with medicine for the town’s clinic, whose shelves were nearly empty. The long pass road would take six days, and the snow would close it in two. The caravan leader stood in the map shop with his hat in his hands. There is a shortcut, he said. The Needle’s Eye. Why does your map mark it closed?",
      "Tarek knew the mark by heart: a small black cross beside the Needle’s Eye, and the words closed — rockfall. It had been on every map for forty years. But that morning, Zaina, a shepherd girl who came to buy paper for her school lessons, had said something strange. Her flock had crossed the Needle’s Eye last week, she said. The mountain changed two summers ago, when the earth shook and a whole slope slid down. The old rockfall was still there, but beside it the slide had left a new ramp of stone, wide enough for mules.",
      "Tarek’s heart beat fast. If Zaina was right, the map was wrong — and the medicine could reach the clinic in two days instead of six. He asked Master Halim to change the mark. The old man’s pen stopped. His master had drawn that cross, he said. Forty years of maps had carried it. The mountain does not change its mind. Tarek heard the words, but he also heard something underneath them, something the old man did not say: if one line is wrong, what else might be?",
      "That night Tarek could not sleep. He thought of the clinic’s empty shelves and the caravan leader counting days. At dawn he stood in the shop door. Let me survey the pass myself, he said. Let me measure it and draw what is really there. If I am wrong, I will copy the old map a hundred times as punishment. Master Halim was silent for a long time. Then he took his brass compass from the shelf — the one his own master had given him — and put it in Tarek’s hand. Bring me the truth, he said. Not a guess.",
      "Tarek and Zaina climbed before sunrise. Up close, the mountain told its story plainly: the old scar of the rockfall, black and jagged, and beside it the new ramp the landslide had built, pale stone sloping gently toward the pass. Zaina showed him hoofprints pressed into the dust. Tarek measured the width with a rope, counted his paces, and sketched the walls. He marked the one dangerous place, where loose stones lay stacked on the east side, ready to slide if anything heavy touched them.",
      "On the climb home, doubt crept in like cold. What if he had misread the slope? What if the ramp narrowed higher up, where he had not walked? A map is a promise, and a promise made from a guess is a broken one. So Tarek turned around and climbed again, checking every measurement twice, until the light went orange and Zaina laughed and called him the most stubborn boy in Stonepass. He did not mind. The ink had to be sure.",
      "Master Halim studied the sketch for a long time. His hands trembled — not from age, Tarek realized, but from choice. Then the old man dipped his pen, drew the Needle’s Eye open in one clean stroke, and wrote beneath it: Surveyed by Tarek and Zaina, in the early snow. A mapmaker who cannot be wrong, he said quietly, cannot be trusted. Tarek understood then that the hardest line to draw is the one that crosses out your own.",
      "The caravan went through the Needle’s Eye the next morning, mules picking their way up the new ramp, away from the loose stones on the east side. They reached Stonepass in two days, before the snow sealed the long road. The clinic’s shelves filled. The caravan leader shook Tarek’s hand and asked who had drawn the new pass. Tarek pointed at Zaina, and Zaina pointed at Tarek, and they both pointed at the mountain, which had done the real work.",
      "In spring, Master Halim’s new map hung in the inn, and beneath its title were two small names. Tarek still ground the ink and stretched the paper, but now he also kept a survey bag packed by the door, with the brass compass in its pocket. He had learned the lesson under the lesson: the mountain changed, and the map changed with it. Truth is not a line you draw once. It is a place you keep walking toward.",
    ],
  },
  glossary: [
    {
      term: "apprentice",
      definition:
        "a young person who learns a craft by working beside a master, like Tarek in the map shop",
    },
    {
      term: "pass",
      definition:
        "a low gap between mountains where people and animals can cross to the other side",
    },
    {
      term: "caravan",
      definition:
        "a group of travelers and pack animals journeying together, often carrying goods over long distances",
    },
    {
      term: "survey",
      definition:
        "to measure and study a place carefully so you can describe it truly, as Tarek does on the mountain",
    },
    {
      term: "compass",
      definition:
        "a small tool with a needle that always points north, helping travelers and mapmakers find their direction",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "inference",
      prompt: "Why did Master Halim first refuse to change the map?",
      options: [
        {
          text: "He had never heard of the Needle’s Eye",
          rationale:
            "He knows the pass well — his own master drew the closed mark, and Halim has copied it for forty years.",
        },
        {
          text: "He trusted the old maps and feared what it would mean to be wrong",
          rationale:
            "The story hints at his hidden worry: if one line is wrong, what else might be? Pride and fear held his pen still.",
        },
        {
          text: "He wanted the caravan to leave Stonepass",
          rationale:
            "Halim is not unkind — he is struggling with his own pride, not trying to send the medicine away.",
        },
        {
          text: "He was angry at Zaina’s sheep",
          rationale:
            "Nothing in the story suggests anger at the flock — the sheep are simply the witnesses that the pass is open.",
        },
      ],
      correctIndex: 1,
      explanation:
        "Halim says the mountain does not change its mind, but Tarek hears the unspoken fear underneath: if one line is wrong, what else might be? His refusal comes from pride in forty years of maps — and the fear of finding a mistake in them.",
    },
    {
      id: "q2",
      skill: "literal",
      prompt: "What did the old maps say about the Needle’s Eye?",
      options: [
        {
          text: "It was closed by a rockfall",
          rationale:
            "Every map for forty years carried a black cross and the words closed — rockfall.",
        },
        {
          text: "It was the fastest road to the lowlands",
          rationale:
            "That is what the caravan leader hopes, but the old maps say the opposite — they mark it closed.",
        },
        {
          text: "It was flooded every spring",
          rationale:
            "No water is mentioned at the Needle’s Eye — the danger on the maps is fallen stone.",
        },
        {
          text: "It had never been surveyed",
          rationale:
            "The pass was surveyed long ago by Halim’s master — the problem is that the survey is forty years out of date.",
        },
      ],
      correctIndex: 0,
      explanation:
        "The story tells us exactly what Tarek knows by heart: a small black cross beside the Needle’s Eye, and the words closed — rockfall, on every map for forty years.",
    },
    {
      id: "q3",
      skill: "sequence",
      prompt:
        "What happened right after Tarek brought his measurements and sketch back to the shop?",
      options: [
        {
          text: "The caravan left immediately without waiting for a map",
          rationale:
            "The caravan waits for the corrected map — they cross the next morning, after Halim draws the pass open.",
        },
        {
          text: "Tarek copied the old map a hundred times",
          rationale:
            "That punishment was only if Tarek turned out to be wrong — and his careful survey proved him right.",
        },
        {
          text: "Master Halim studied the sketch, then drew the pass open and wrote the surveyors’ names",
          rationale:
            "The story shows Halim’s long look, his trembling choice, the clean stroke, and the words Surveyed by Tarek and Zaina.",
        },
        {
          text: "Zaina moved her flock to the lowlands",
          rationale:
            "Zaina stays in Stonepass — she even points at the mountain when the caravan leader asks who drew the new pass.",
        },
      ],
      correctIndex: 2,
      explanation:
        "The order matters: Tarek surveys and double-checks, then Halim studies the sketch and makes his hard choice, drawing the pass open with the children’s names beneath it. Only then does the caravan cross.",
    },
    {
      id: "q4",
      skill: "vocabulary",
      prompt: "What does it mean to survey a place, as Tarek does?",
      options: [
        {
          text: "To draw it from memory without visiting",
          rationale:
            "That is what the old maps became — copies of copies. Tarek does the opposite: he climbs up to see for himself.",
        },
        {
          text: "To sell it to travelers",
          rationale:
            "The maps are sold in the shop, but surveying is the careful work that happens on the mountain first.",
        },
        {
          text: "To hide it so no one else can find it",
          rationale:
            "Tarek wants the pass known and used — hiding it would defeat the whole purpose of the map.",
        },
        {
          text: "To measure and study it carefully so you can describe it truly",
          rationale:
            "Tarek measures with a rope, counts paces, sketches the walls, and checks twice — that is surveying.",
        },
      ],
      correctIndex: 3,
      explanation:
        "To survey is to measure and study a place carefully. Tarek uses a rope, his paces, and his sketchbook — and checks everything twice — so the map can tell the truth about the mountain.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "Which lesson does this story teach best?",
      options: [
        {
          text: "Old people are always wrong about the world",
          rationale:
            "Halim is wise and skilled — his mistake is trusting an old line too long, and his greatness is correcting it.",
        },
        {
          text: "Even trusted maps must be checked, because the world changes and truth matters more than pride",
          rationale:
            "The mountain changed, the map had to change, and Halim chose truth over pride — that is the heart of the story.",
        },
        {
          text: "Mountains are too dangerous to cross",
          rationale:
            "The caravan crosses safely because someone measured the danger honestly — the story is about care, not fear.",
        },
        {
          text: "Apprentices should never question their masters",
          rationale:
            "Tarek questions respectfully and proves his case with evidence — and his master honors him for it.",
        },
      ],
      correctIndex: 1,
      explanation:
        "The story’s last lines say it plainly: truth is not a line you draw once, it is a place you keep walking toward. Halim’s courage in crossing out his own line is what makes the map — and the man — trustworthy.",
    },
    {
      id: "q6",
      skill: "prediction",
      prompt: "What will Tarek most likely do in the years to come?",
      options: [
        {
          text: "Leave Stonepass and never draw another map",
          rationale:
            "Tarek loves the work more than ever — the story ends with his survey bag packed and ready.",
        },
        {
          text: "Burn all the old maps in the shop",
          rationale:
            "Halim keeps his old maps as history, and Tarek learned respect for the craft — correcting is not destroying.",
        },
        {
          text: "Keep walking the passes with the compass, checking that the maps stay true",
          rationale:
            "The packed survey bag and the lesson under the lesson both point to a life of keeping the promise fresh.",
        },
        {
          text: "Stop speaking to Zaina after their argument",
          rationale:
            "They never argue — they climb together, laugh together, and point at each other when credit is given.",
        },
      ],
      correctIndex: 2,
      explanation:
        "Tarek has learned that truth is a place you keep walking toward, and he keeps a survey bag packed by the door. We can expect him to spend his life re-measuring the mountains so the maps keep their promise.",
    },
  ],
  teachingNotes:
    "Skills: inference about motives, literal recall, sequence, vocabulary in context, main idea, prediction. Discussion: when is it hard to admit you were wrong? What did Master Halim’s choice cost him, and what did it win? Vocabulary focus: apprentice, pass, caravan, survey, compass. Writing prompt: write about a time you checked something everyone believed — what did you find, and what did you do with it?",
};
