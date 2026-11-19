interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
