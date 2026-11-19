import type { Lesson } from "@/lib/content/types";

/**
 * Level 4 · English — a storm bears down on a harbor town, the guiding lamp
 * fails, and two children rebuild an old road of light along the breakwater.
 */
export const stormOverHarborTown: Lesson = {
  slug: "storm-over-harbor-town",
  language: "en",
  level: 4,
  title: "Storm Over Harbor Town",
  subtitle: "One light is a dot. A line of lights is a road.",
  description:
    "The boats are coming home in the dark, the harbor lamp is broken, and Nia remembers her grandmother’s oldest story.",
  minutes: 8,
  emoji: "⛈️",
  palette: "ocean",
  story: {
    title: "Storm Over Harbor Town",
    sections: [
      "Nia could read the sky the way other children read books. Her grandmother, Gran Ada, had taught her: watch the gulls, watch the water, watch the glass. That afternoon the gulls flew inland in noisy crowds, the swell rolled in long and oily, and the barometer in the hallway dropped faster than Nia had ever seen it. The radio said a storm would arrive by nightfall. Gran Ada looked at the falling glass and said one word: soon.",
      "Harbor Town had a plan for storms, and the plan woke up before the wind did. The fishing boats radioed that they were turning for home early. The fish market sat low beside the water, so the surge could flood it; crews filled sandbags and stacked them along its doors. The small boats were hauled up the slipway, out of the sea’s reach. Everyone had a job. Nia’s job was to help Gran Ada check the harbor lamp.",
      "The harbor lamp was an old oil lamp on the point of the breakwater, and it mattered more than anything that night. The storm’s early waves had already dragged the electric buoy lights off their anchors, so the channel markers were gone. In the dark and the rain, a boat feeling its way home could miss the harbor entrance entirely and find the rocks instead. The lamp was the one fixed star left. It showed the boats where the door was.",
      "Nia and Gran Ada climbed the breakwater path in the first gusts. What they found made Nia’s stomach drop. A flying branch had smashed the lamp’s glass, and the rain had soaked the wick. Gran Ada tried to light it twice; the matches died in the wind. The lamp keeper’s own boat could not come out in this weather. The one fixed star was out, and the boats were still at sea.",
      "Gran Ada sat back on her heels, and Nia saw her thinking. Then the old woman told a story from her girlhood, before the lamp was built. In those days, when boats came home in a storm, the fishers’ families stood along the breakwater with lanterns, one after another, all the way to the harbor mouth. One light is a dot, Gran Ada had always said. A line of lights is a road. The boats steered down the road of lanterns and came home.",
      "Nia was already running. She and her friend Sam went door to door through the rising wind, asking for every light the houses could spare. The baker brought his big bread-oven lamp. The teacher brought two storm lanterns. Someone brought a bicycle light, and someone else a jar with a candle inside, and the little kids brought flashlights with dinosaur stickers. Sam’s arms were so full he had to open doors with his elbow.",
      "They spaced themselves along the breakwater, one child and one grown-up at every post, each holding a light high. The wind tried to steal the flames. They shielded them with coats, with hats, with their own bodies. Sam’s lantern went out twice, and twice he relit it with shaking hands, cupping the match like a baby bird. Nobody left their post. Down the line, the lights held, one after another, all the way to the harbor mouth.",
      "Out in the dark, the boat Morning Star and two others were feeling their way home. Uncle Pao, Nia’s uncle, stood at the wheel and could see nothing — no buoys, no shore, only rain. Then he saw it: a line of small lights along the black breakwater, steady as a runway. He called the other boats on the radio, and one by one they followed the road of light, past the rocks, through the mouth, into the calm water behind the wall.",
      "The last boat slid into the harbor just as the surge topped the seawall and slapped the stones. From the windows of Harbor Town came a cheer that the wind could not drown. The boats were moored with double lines. The fish market stood dry behind its sandbags. The sea had thrown everything it had, and the town had caught it.",
      "Inside, wet and laughing, Gran Ada wrapped Nia in a blanket. The mayor came to thank them, and Nia said it was Gran Ada’s idea. Gran Ada shook her head. The idea is a hundred years old, she said. The legs that carried it tonight were young. Sam, relighting his lantern for the third time in his imagination, grinned so hard his ears moved.",
      "Morning came quiet and washed-clean. The town counted its losses — a roof, some crates, the lamp’s glass — and its saves: every boat, every fisher, the market. At the town meeting that week, everyone agreed on two things. The lamp would be fixed with stronger glass. And a box of storm lanterns would live at the breakwater steps, checked every month by the school children, so the old road of light would never be forgotten again.",
      "Nia understood something now that she could not have said before the storm. A harbor is not just walls and water. A harbor is people who show up for each other in the dark. The new glass went in, and the lamp shone again, and it was good. But everyone in Harbor Town knew about the night the town itself was the light.",
    ],
  },
  glossary: [
    {
      term: "barometer",
      definition:
        "a tool that measures the air’s pressure; when it falls fast, a storm is usually on the way",
    },
    {
      term: "breakwater",
      definition:
        "a strong wall built out into the sea to calm the water and protect a harbor",
    },
    {
      term: "surge",
      definition:
        "a big rush of seawater pushed up by a storm, higher than the normal tide",
    },
    {
      term: "slipway",
      definition:
        "a smooth ramp sloping into the water, where boats can be pulled up onto land",
    },
    {
      term: "moor",
      definition:
        "to tie a boat up firmly so it cannot drift away, as the town did with double lines",
    },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt:
        "What was wrong with the harbor lamp when Nia and Gran Ada reached it?",
      options: [
        {
          text: "It had run out of oil",
          rationale:
            "The lamp has oil — the problem is the broken glass and the rain-soaked wick that will not catch.",
        },
        {
          text: "A branch had smashed its glass and the rain had soaked the wick",
          rationale:
            "The story describes exactly this: smashed glass, a soaked wick, and matches dying in the wind.",
        },
        {
          text: "Gran Ada had forgotten the matches",
          rationale:
            "Gran Ada tries to light the lamp twice, so she has matches — the wind and the wet defeat them.",
        },
        {
          text: "The lamp keeper had taken it home",
          rationale:
            "The keeper’s boat cannot come out in the weather, but the lamp is still on the point, broken.",
        },
      ],
      correctIndex: 1,
      explanation:
        "The story tells us plainly: a flying branch smashed the lamp’s glass and the rain soaked the wick. That is why the one fixed star of the harbor could not be lit.",
    },
    {
      id: "q2",
      skill: "inference",
      prompt: "Why did the boats need the line of lanterns that night?",
      options: [
        {
          text: "The boats wanted to race each other home",
          rationale:
            "The boats are feeling their way carefully in dangerous weather — this is a rescue, not a race.",
        },
        {
          text: "The lanterns were meant to scare fish into the harbor",
          rationale:
            "Nobody is fishing that night — the lights exist to show boats the way in.",
        },
        {
          text: "The buoy lights had dragged anchor, so in the dark the boats could not find the harbor entrance",
          rationale:
            "With the channel markers gone and the lamp broken, the lantern line was the only thing showing the door.",
        },
        {
          text: "The mayor had ordered a festival on the breakwater",
          rationale:
            "The mayor thanks the children afterward — the lights were an emergency plan, not a celebration.",
        },
      ],
      correctIndex: 2,
      explanation:
        "The storm’s waves dragged the buoy lights off their anchors, and the lamp was broken. Without any markers, boats could miss the entrance and hit the rocks — so the line of lanterns became the road that showed them the way.",
    },
    {
      id: "q3",
      skill: "sequence",
      prompt:
        "What happened just before the children and grown-ups took their posts along the breakwater?",
      options: [
        {
          text: "The boats were already safe inside the harbor",
          rationale:
            "The boats come home after the line of lights is lit — that is the whole point of the line.",
        },
        {
          text: "The mayor came to thank everyone",
          rationale:
            "The thanks happen afterward, inside, with blankets — long after the dangerous work is done.",
        },
        {
          text: "The storm had passed and the sky was clear",
          rationale:
            "The storm arrives that night; the posts are held in the wind and rain, not after them.",
        },
        {
          text: "Nia and Sam went door to door gathering lanterns, lamps, and flashlights",
          rationale:
            "First they collect every light the houses can spare, then they space themselves along the wall.",
        },
      ],
      correctIndex: 3,
      explanation:
        "The order is: the lamp fails, Gran Ada tells the old story, the children gather lights from every house, and only then do they take their posts. Gathering came right before the line was formed.",
    },
    {
      id: "q4",
      skill: "vocabulary",
      prompt: "In this story, what is a breakwater?",
      options: [
        {
          text: "A strong wall built out into the sea to calm the water and protect a harbor",
          rationale:
            "The lamp stands on its point, the lantern line runs along it, and the calm water lies behind it.",
        },
        {
          text: "A kind of fishing boat",
          rationale:
            "The boats in the story are the Morning Star and its friends — the breakwater is what they steer toward.",
        },
        {
          text: "A wall inside a house that keeps rooms warm",
          rationale:
            "The breakwater is outside, taking the storm’s waves — it protects the whole harbor, not one room.",
        },
        {
          text: "A tool for fixing broken lamps",
          rationale:
            "The lamp is fixed with new glass at the end — the breakwater is the stone wall the lamp stands on.",
        },
      ],
      correctIndex: 0,
      explanation:
        "A breakwater is a strong wall built out into the sea. In the story it shields the harbor from the waves, carries the lamp on its point, and becomes the road of lanterns.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "What is this story mostly about?",
      options: [
        {
          text: "A community that protects itself by working together, with children whose quick thinking saves the boats",
          rationale:
            "Sandbags, slipways, lanterns, and posts — the whole town acts, and Nia’s remembered story is the key that lights the way.",
        },
        {
          text: "A girl who hates storms and wants to move away",
          rationale:
            "Nia reads the sky calmly and runs toward the problem — she never wishes to leave Harbor Town.",
        },
        {
          text: "A mayor who builds a new electric lamp",
          rationale:
            "The lamp is repaired, not rebuilt, and the mayor’s part is small — the heart of the story is the people.",
        },
        {
          text: "A fishing contest between three boats",
          rationale:
            "The three boats are coming home from the storm, not competing — they follow each other to safety.",
        },
      ],
      correctIndex: 0,
      explanation:
        "From the storm plan to the lantern line to the morning count, the story shows one big idea: a harbor is people who show up for each other. The children’s courage is part of the town’s strength.",
    },
    {
      id: "q6",
      skill: "prediction",
      prompt:
        "A year later, another big storm is forecast. What will Harbor Town most likely do?",
      options: [
        {
          text: "Trust the electric buoys, because they never fail",
          rationale:
            "The town learned the hard way that buoys can drag anchor — they will not trust them alone again.",
        },
        {
          text: "Bring out the checked storm lanterns and be ready to light the road along the breakwater",
          rationale:
            "The town meeting created exactly this plan: a lantern box at the steps, checked monthly by the school children.",
        },
        {
          text: "Send all the children away from the harbor",
          rationale:
            "The children proved they are part of the town’s strength — the plan gives them a job, not an exit.",
        },
        {
          text: "Leave the boats at sea until the storm passes",
          rationale:
            "The whole storm plan starts with calling the boats home early — the town will do that again.",
        },
      ],
      correctIndex: 1,
      explanation:
        "The story ends with a new plan: storm lanterns kept at the breakwater steps and checked every month. So when the next storm comes, the town will be ready to light the old road again.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, inference about cause and effect, sequence, vocabulary in context, main idea, prediction. Discussion: what old knowledge in your community could help in an emergency? Why did Gran Ada say the idea was old but the legs were young? Vocabulary focus: barometer, breakwater, surge, slipway, moor. Writing prompt: describe a time people in your neighborhood worked together against a problem — what did each person carry?",
};
