import type { Lesson } from "@/lib/content/types";
import { theLittleRedBoat } from "../the-little-red-boat";
import { benAndTheBumblebee } from "../ben-and-the-bumblebee";
import { theMoonGarden } from "../the-moon-garden";

/**
 * Content pack: English · Levels 1–2 (early readers).
 * Each lesson lives in its own file next to this one and is exported here.
 *
 * LESSON AUTHORS: create your lesson file(s) in this folder, then import
 * them below and add them to the array. See
 * `content/lessons/en/maya-and-the-river-bridge.ts` for the reference
 * quality bar (story voice, option rationales, glossary, teaching notes).
 */
export const lessonsLevel1to2En: Lesson[] = [
  theLittleRedBoat,
  benAndTheBumblebee,
  theMoonGarden,
];
