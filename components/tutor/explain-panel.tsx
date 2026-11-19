"use client";

import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useT } from "@/lib/i18n/use-locale";

export function ExplainPanel({
  explanation,
  source,
}: {
  explanation: string;
  source: "ai" | "offline";
}) {
  const t = useT();

  return (
    <Card
      data-testid="explain-panel"
      aria-live="polite"
      className="border-primary/20 bg-card shadow-warm"
    >
      <CardHeader className="flex-row items-center justify-between gap-3">
        <CardTitle className="flex items-center gap-2 font-display text-lg font-extrabold">
          <Sparkles aria-hidden="true" className="size-5 text-primary" />
          {t.tutor.explanationTitle}
        </CardTitle>
        <Badge variant="secondary" className="h-auto max-w-44 whitespace-normal text-center">
          {source === "ai" ? "AI" : t.tutor.coachOfflineBadge}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-foreground">{explanation}</p>
      </CardContent>
    </Card>
  );
}
