import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small label above the heading, e.g. "Our Programmes" */
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  /** Centre-align for standalone sections */
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "mx-auto text-center lg:mx-0 lg:text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-brand-green">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-xl font-bold text-primary lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted lg:mt-3 lg:line-clamp-none lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
