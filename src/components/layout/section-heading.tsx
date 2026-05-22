import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  accent: string;
  title: string;
  description?: string;
  stat?: { value: string; label: string };
  id?: string;
  className?: string;
};

export function SectionHeading({
  accent,
  title,
  description,
  stat,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl space-y-3">
        <p className="font-heading text-sm font-bold tracking-[0.2em] text-molinart-yellow uppercase md:text-base">
          {accent}
        </p>
        <h2
          id={id}
          className="font-heading text-3xl font-bold tracking-wide text-white uppercase md:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-molinart-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {stat ? (
        <div className="shrink-0 text-left md:text-right">
          <p className="font-heading text-4xl font-bold text-molinart-yellow md:text-5xl">
            {stat.value}
          </p>
          <p className="text-sm text-molinart-muted">{stat.label}</p>
        </div>
      ) : null}
    </div>
  );
}
