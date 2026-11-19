import type { ReactNode } from "react";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ExternalLink({
  href,
  children,
  className = "",
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 rounded-sm font-semibold text-foreground underline decoration-primary/60 decoration-2 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${className}`}
    >
      {children}
      <ExternalLinkIcon className="size-3.5 shrink-0" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
