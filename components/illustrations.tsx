import { cn } from "@/lib/utils";

/**
 * Pip — OpenBridge's paper-boat mascot. A little boat that carries readers
 * across the river to new worlds. Pure inline SVG: crisp at any size, no
 * binary assets, instant on slow connections.
 */
export type PipMood = "happy" | "thinking" | "celebrating" | "waving";

export function PipBoat({
  mood = "happy",
  className,
}: {
  mood?: PipMood;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 56"
      role="img"
      aria-hidden="true"
      className={cn("h-14 w-14", className)}
    >
      <defs>
        <linearGradient id="pip-hull" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <linearGradient id="pip-sail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFEDD5" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>

      {/* sail fold */}
      <path d="M32 6 L44 32 L20 32 Z" fill="url(#pip-sail)" />
      <path d="M32 6 L32 32 L20 32 Z" fill="url(#pip-hull)" opacity="0.35" />

      {/* hull */}
      <path d="M10 34 L54 34 L47 45 L17 45 Z" fill="url(#pip-hull)" />
      <path
        d="M10 34 L54 34 L52 37 L12 37 Z"
        fill="#fff"
        opacity="0.25"
      />

      {/* face on the hull */}
      <circle cx="25" cy="39.5" r="2.1" fill="#431407" />
      <circle cx="39" cy="39.5" r="2.1" fill="#431407" />
      {mood === "celebrating" ? (
        <path
          d="M29 42 Q32 45.5 35 42"
          fill="none"
          stroke="#431407"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : mood === "thinking" ? (
        <path
          d="M29.5 42.6 L34.5 42.6"
          stroke="#431407"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M29 41.8 Q32 44.2 35 41.8"
          fill="none"
          stroke="#431407"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}

      {/* thought dots / sparkles by mood */}
      {mood === "thinking" && (
        <g fill="#F97316">
          <circle cx="47" cy="14" r="1.6" />
          <circle cx="51" cy="9" r="2.1" />
          <circle cx="56" cy="4.5" r="2.6" />
        </g>
      )}
      {mood === "celebrating" && (
        <g stroke="#F97316" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 20 L12 12 M8 16 L16 16" />
          <path d="M52 24 L52 16 M48 20 L56 20" />
          <path d="M6 8 L6 2 M3 5 L9 5" opacity="0.6" />
        </g>
      )}
      {mood === "waving" && (
        <g stroke="#F97316" strokeWidth="1.8" strokeLinecap="round">
          <path d="M50 30 Q56 26 57 20" fill="none" />
        </g>
      )}

      {/* water */}
      <path
        d="M8 51 Q14 48.5 20 51 T32 51 T44 51 T56 51"
        fill="none"
        stroke="#99F6E4"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

/** A gentle wave band for section transitions. */
export function WaveBand({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-8 w-full", className)}
    >
      <path
        d="M0 30 C 100 55, 200 5, 300 30 S 500 55, 600 30 S 800 5, 900 30 S 1100 55, 1200 30 L1200 60 L0 60 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Small celebration spark — for wins, badges, and CTAs. */
export function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-4 w-4", className)}>
      <path
        d="M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 C11 16 8 13 2 12 C8 11 11 8 12 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
