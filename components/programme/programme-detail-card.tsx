import Image from "next/image";

import { AdmissionCta } from "@/components/ui/admission-cta";
import { cn } from "@/lib/utils";
import type { Programme } from "@/types/programme";

interface ProgrammeDetailCardProps {
  programme: Programme;
  /** Alternate image left / right on desktop */
  imagePosition: "left" | "right";
}

export function ProgrammeDetailCard({
  programme,
  imagePosition,
}: ProgrammeDetailCardProps) {
  const imageFirst = imagePosition === "left";

  return (
    <article
      id={programme.id}
      className="scroll-mt-28 overflow-hidden rounded-2xl bg-white shadow-card"
    >
      <div
        className={cn(
          "grid items-stretch lg:grid-cols-2",
          !imageFirst && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* Programme image */}
        <div className="relative min-h-[160px] bg-brand-yellow/20 lg:min-h-[380px]">
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
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Programme content */}
        <div className="flex flex-col justify-center gap-3 p-4 text-center lg:gap-5 lg:p-12 lg:text-left">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-brand-green lg:text-sm">
              {programme.ageRange}
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-primary lg:mt-2 lg:text-4xl">
              {programme.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-primary/80 lg:mt-3 lg:text-lg">
              {programme.tagline}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted lg:text-base">
            {programme.description}
          </p>

          <ul className="hidden space-y-2 lg:block">
            {programme.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex gap-3 text-base leading-relaxed text-muted"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-sky"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex justify-center pt-1 lg:justify-start lg:pt-2">
            <AdmissionCta />
          </div>
        </div>
      </div>
    </article>
  );
}
