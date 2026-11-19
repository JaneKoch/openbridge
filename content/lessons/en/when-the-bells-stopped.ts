import type { Lesson } from "@/lib/content/types";

/** Level 5 · English — a young bell ringer learns to listen before leading. */
export const whenTheBellsStopped: Lesson = {
  slug: "when-the-bells-stopped",
  language: "en",
  level: 5,
  title: "When the Bells Stopped",
  subtitle: "A quiet square, a missing rhythm, and a song made together",
  description:
    "When the town clock falls silent before the lantern festival, Lina discovers that its old rhythm belongs to everyone.",
  minutes: 9,
  emoji: "🔔",
  palette: "sunrise",
  story: {
    title: "When the Bells Stopped",
    sections: [
      "Every evening, the bells of Bellweather rang seven notes across the square. Lina knew their pattern so well that she could tap it on a table with her eyes closed: three quick notes, a pause, then four slow ones. Her grandfather said the rhythm had guided the town home for generations. Lina was proud to be the youngest bell ringer, and she planned to lead the festival ringing on Saturday.",
      "On Friday morning, the clock tower stood quiet. Lina climbed the winding steps and found the bell ropes still, tangled around a wooden beam. A storm had loosened the beam overnight. The clockmaker could not repair it before the festival, and the heavy bells were unsafe to pull. Lina stared through the tower window at the square below. By sunset, visitors would arrive expecting the familiar song.",
      "“I can make a new rhythm,” Lina told her grandfather. “I’ll ring the handbells from the stage.” He nodded, but asked her to listen first. Lina hurried down. In the square, she heard a baker tapping a cooling rack, a child drumming on a bucket, and a gardener humming as she tied up strings of lanterns. The sounds did not match. Lina thought they were only noise.",
      "Then a little boy carrying a paper star stopped beside her. “My aunt is coming from the north road,” he said. “She knows the bells mean she’s near home. How will she find us?” Lina looked toward the darkening road. The bells had never been only music. They were a promise the town made to people who were still on their way.",
      "Lina returned to the tower and studied the ropes. She could not safely move the beam, but she could see a small bronze handbell kept for visitors. One bell would not make the old pattern. She nearly gave up, then heard the baker tap the rack again: three quick beats. The child answered with four slow taps on the bucket. The gardener’s humming filled the pause between them.",
      "Lina ran down the steps. “Could we try those sounds together?” she asked. The baker frowned at first; his rack was for cooling bread, not making music. The child lifted his sticks. The gardener smiled and began her low tune. Lina showed them the bell pattern, and together they adjusted it: three quick taps, a breath of humming, four slow beats. The square listened as the separate sounds found their places.",
      "By dusk, the lanterns glowed above a crowd. Lina stood at the center with her handbell. The baker held his rack, the child his bucket, and the gardener kept the tune. Lina lifted her hand, but did not begin alone. She waited until everyone was ready. Then the little bell rang three bright notes, the hum carried the pause, and the taps rolled out slowly beneath the lanterns.",
      "From the north road came a wave. The little boy’s aunt had heard the pattern and found the square. Soon other travelers followed the sound, smiling as they arrived. The clock tower remained silent that night, yet the town did not feel as if anything were missing. People had made the rhythm together, and everyone could hear a place for themselves in it.",
      "The clockmaker repaired the beam the next week. At the next evening ringing, Lina invited the baker, the gardener, and the child to stand beside her. The old seven notes rang across Bellweather, followed by their new festival pattern. Lina learned that leading did not mean being the loudest voice. Sometimes it meant listening closely enough to help many voices become one song.",
    ],
  },
  glossary: [
    { term: "pattern", definition: "a repeated order of sounds or events" },
    { term: "beam", definition: "a long, strong piece of wood or metal that supports something" },
    { term: "adjusted", definition: "changed a little so something would work better" },
    { term: "rhythm", definition: "a pattern of sounds with a steady beat" },
  ],
  questions: [
    {
      id: "q1",
      skill: "literal",
      prompt: "Why could Lina not ring the tower bells for the festival?",
      options: [
        { text: "A storm had loosened a beam and tangled the ropes", rationale: "The story says the damaged beam made the bells unsafe to pull." },
        { text: "The bells had been sent to another town", rationale: "The bells remain in the tower; their ropes are the problem." },
        { text: "Lina had forgotten the seven-note pattern", rationale: "She remembers the pattern clearly from the beginning." },
        { text: "The festival had been moved to the north road", rationale: "The festival still takes place in the square." },
      ],
      correctIndex: 0,
      explanation: "You found the practical problem: the storm loosened the support and tangled the ropes, so pulling the bells could be dangerous.",
    },
    {
      id: "q2",
      skill: "inference",
      prompt: "Why did Lina’s grandfather ask her to listen before making a new rhythm?",
      options: [
        { text: "He wanted the festival to be canceled", rationale: "He supports Lina and helps her think through the challenge." },
        { text: "He thought the old bells were too loud", rationale: "The story gives no sign that he dislikes the bells." },
        { text: "He wanted her to notice the sounds and people already around her", rationale: "Listening helped Lina discover that the square could contribute parts of a shared pattern." },
        { text: "He wanted her to wait for the clockmaker to arrive", rationale: "The clockmaker cannot repair the tower before the festival." },
      ],
      correctIndex: 2,
      explanation: "His gentle suggestion gives Lina time to notice what others can offer. Their everyday sounds become the pieces of a new song.",
    },
    {
      id: "q3",
      skill: "sequence",
      prompt: "What did Lina do after she recognized the bell pattern in the sounds from the square?",
      options: [
        { text: "She climbed the tower and repaired the beam", rationale: "The clockmaker repairs the beam the following week." },
        { text: "She asked them to try their sounds together", rationale: "After seeing how their beats and hum could fit, Lina invited them to make music as a group." },
        { text: "She sent the visitors back along the road", rationale: "The visitors arrive later by following the new rhythm." },
        { text: "She asked the town to stop making noise", rationale: "She first dismisses the sounds, but then learns to arrange them." },
      ],
      correctIndex: 1,
      explanation: "First Lina notices the separate sounds. Then she sees how they might fit and invites the makers to build a pattern together.",
    },
    {
      id: "q4",
      skill: "vocabulary",
      prompt: "What does “adjusted” mean when the group adjusted the rhythm?",
      options: [
        { text: "Forgot it completely", rationale: "The group keeps the familiar bell pattern as a guide." },
        { text: "Played it much louder", rationale: "The story describes arranging the parts, not simply increasing volume." },
        { text: "Copied it without listening", rationale: "They listen and make small changes to fit their sounds together." },
        { text: "Changed it a little so it worked better", rationale: "They shaped the timing so each sound could fit the shared pattern." },
      ],
      correctIndex: 3,
      explanation: "To adjust something is to change it a little. The group keeps the pattern’s shape while making room for each sound.",
    },
    {
      id: "q5",
      skill: "main-idea",
      prompt: "Which idea best expresses the story’s message?",
      options: [
        { text: "Old traditions should always be replaced", rationale: "The town keeps its old bells and adds a new pattern beside them." },
        { text: "Only trained musicians can make useful music", rationale: "The baker, child, and gardener create the pattern with ordinary objects and a hum." },
        { text: "A good leader listens and helps others contribute", rationale: "Lina’s plan succeeds when she listens and makes a place for the community’s voices." },
        { text: "A festival matters only when the clock works", rationale: "The festival is meaningful even while the tower is silent." },
      ],
      correctIndex: 2,
      explanation: "Lina begins by wanting to lead alone. Once she listens and brings others in, their different sounds create something the whole town can share.",
    },
  ],
  teachingNotes:
    "Skills: literal recall, inference, sequence, vocabulary in context, and main idea. Discuss: When has listening helped a group solve a problem? What makes a tradition welcoming to new voices? Writing prompt: Describe a familiar sound from your community and imagine how it might join a song.",
};
