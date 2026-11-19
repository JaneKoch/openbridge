import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FactCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function FactCard({ icon: Icon, title, children }: FactCardProps) {
  return (
    <Card className="h-full gap-4 rounded-3xl p-6 shadow-warm ring-1 ring-border/70">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-bold leading-snug">{title}</h3>
      <div className="text-sm leading-7 text-muted-foreground">{children}</div>
    </Card>
  );
}
