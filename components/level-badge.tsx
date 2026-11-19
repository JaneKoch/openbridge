import { cn } from "@/lib/utils";
import {
  READING_LEVELS,
  levelName,
  type ReadingLevelInfo,
} from "@/lib/content/levels";
import type { ReadingLevel } from "@/lib/content/types";

/** Warm pill showing a reading level: colored dot + level number + name. */
export function LevelBadge({
  level,
  locale = "en",
  showName = true,
  className,
}: {
  level: ReadingLevel;
  locale?: "en" | "es";
  showName?: boolean;
  className?: string;
}) {
  const meta = READING_LEVELS[level];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/85 px-2.5 py-1 text-xs font-bold text-foreground shadow-sm backdrop-blur",
        className
      )}
    >
      <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", meta.dotClass)} />
      <span aria-hidden="true">{meta.emoji}</span>
      {showName && <span>{levelName(level, locale)}</span>}
    </span>
  );
}
