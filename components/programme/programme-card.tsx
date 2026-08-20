import Image from "next/image";
import Link from "next/link";

import { AdmissionCta } from "@/components/ui/admission-cta";
import { DoodleBorder } from "@/components/ui/doodle-border";
import { cn } from "@/lib/utils";
import type { Programme } from "@/types/programme";

interface ProgrammeCardProps {
  programme: Programme;
  className?: string;
  size?: "default" | "lg";
}

export function ProgrammeCard({
  programme,
  className,
  size = "default",
}: ProgrammeCardProps) {
  const isLarge = size === "lg";

  return (
    <article
      className={cn(
        "group relative flex flex-col cursor-pointer transition-all duration-300 ease-out",
        "[@media(hover:hover)]:hover:-translate-y-2 [@media(hover:hover)]:hover:scale-[1.02] [@media(hover:hover)]:hover:shadow-elevated",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100",
        className,
      )}
    >
      <Link
        href={`/programmes#${programme.id}`}
        className="absolute inset-0 z-[1] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2"
        aria-label={`View ${programme.name} programme details`}
      />

      <DoodleBorder className="relative z-0 flex flex-1 flex-col">
        <div
          className={cn(
            "relative bg-brand-yellow/30",
            isLarge ? "aspect-[5/4]" : "aspect-[4/3]",
          )}
        >
          <Image
            src={programme.image.src}
            alt={programme.image.alt}
            fill
            className="object-cover"
            style={
              programme.image.objectPosition
                ? { objectPosition: programme.image.objectPosition }
                : undefined
            }
            sizes={
              isLarge
                ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
          />
        </div>

        <div
          className={cn(
            "pointer-events-none flex flex-1 flex-col gap-2 text-center lg:gap-3 lg:text-left",
            isLarge ? "p-2.5 lg:p-7" : "p-2.5 lg:p-6",
          )}
        >
          <div>
            <p
              className={cn(
                "font-display font-semibold text-brand-green",
                isLarge ? "text-[0.65rem] lg:text-base" : "text-[0.65rem] lg:text-sm",
              )}
            >
              {programme.ageRange}
            </p>
            <h3
              className={cn(
                "mt-1 font-display font-bold text-primary",
                isLarge ? "text-sm lg:text-2xl" : "text-sm lg:text-xl",
              )}
            >
              {programme.name}
            </h3>
            <p
              className={cn(
                "mt-1 text-xs leading-snug text-muted lg:mt-2 lg:block lg:text-base lg:leading-relaxed",
              )}
            >
              {programme.tagline}
            </p>
          </div>

          <div className="relative z-[2] mt-auto hidden justify-center px-1 pt-3 lg:flex">
            <AdmissionCta
              size="sm"
              className={cn(
                "pointer-events-auto whitespace-nowrap",
                isLarge ? "px-3 text-xs" : "px-4",
              )}
            />
          </div>
        </div>
      </DoodleBorder>
    </article>
  );
}
