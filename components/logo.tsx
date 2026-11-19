import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The OpenBridge mark: a warm sun rising over a little suspension bridge —
 * learning that carries children across to new worlds.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-hidden="true"
      className={cn("size-9 shrink-0", className)}
    >
      <defs>
        <linearGradient id="ob-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#ob-grad)" />
      {/* main cable */}
      <path
        d="M8 27 C 8 17.5, 32 17.5, 32 27"
        fill="none"
        stroke="#fff"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* deck */}
      <path
        d="M5 27 H35"
        stroke="#fff"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* hangers */}
      <path
        d="M14 27 V22.4 M20 27 V20.4 M26 27 V22.4"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* rising sun */}
      <circle cx="31.5" cy="10.5" r="2.7" fill="#FFF7E6" />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
    >
      <LogoMark />
      <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
        Open<span className="text-primary">Bridge</span>
      </span>
    </span>
  );
}

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className
      )}
      aria-label="OpenBridge home"
    >
      <LogoMark />
      {showWordmark ? (
        <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
          Open<span className="text-primary">Bridge</span>
        </span>
      ) : null}
    </Link>
  );
}
