import { cn } from "@/lib/utils";
import { PALETTES, type LessonPalette } from "@/lib/content/types";

/**
 * The signature OpenBridge lesson cover: a warm gradient tile with the
 * story's emoji floating inside decorative rings. Pure CSS + SVG — no
 * binary assets, so lessons stay lightweight on 2G connections.
 */
export function LessonCover({
  emoji,
  palette,
  size = "card",
  className,
}: {
  emoji: string;
  palette: LessonPalette;
  size?: "card" | "hero" | "wide";
  className?: string;
}) {
  const theme = PALETTES[palette];
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex select-none items-center justify-center overflow-hidden bg-gradient-to-br",
        theme.gradient,
        size === "card" && "h-36 w-full rounded-2xl",
        size === "hero" && "h-44 w-full rounded-3xl sm:h-52",
        size === "wide" && "h-full min-h-52 w-full rounded-2xl",
        className
      )}
    >
      {/* soft light bloom */}
      <div className="pointer-events-none absolute -left-8 -top-10 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-6 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
      {/* dashed orbit */}
      <svg
        className="pointer-events-none absolute h-full w-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="white"
          strokeWidth="0.8"
          strokeDasharray="2.5 4"
        />
      </svg>
      <span
        className={cn(
          "relative drop-shadow-sm",
          size === "hero" ? "text-6xl sm:text-7xl" : "text-5xl"
        )}
        role="img"
      >
        {emoji}
      </span>
    </div>
  );
}
