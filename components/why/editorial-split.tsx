import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SiteImage } from "@/types/image";

interface EditorialSplitProps {
  title: string;
  paragraphs: readonly string[];
  proofPoints?: readonly string[];
  image: SiteImage;
  imagePosition?: "left" | "right";
  className?: string;
  bg?: "white" | "background" | "sky";
}

const SECTION_BG = {
  white: "bg-white",
  background: "bg-background",
  sky: "bg-section-sky",
} as const;

export function EditorialSplit({
  title,
  paragraphs,
  proofPoints,
  image,
  imagePosition = "left",
  className,
  bg = "background",
}: EditorialSplitProps) {
  const imageFirst = imagePosition === "left";

  return (
    <section
      className={cn("section-padding", SECTION_BG[bg], className)}
    >
      <div className="container-site">
        <div
          className={cn(
            "grid items-center gap-6 lg:grid-cols-2 lg:gap-16 xl:gap-20",
            !imageFirst && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div className="overflow-hidden rounded-2xl shadow-card lg:rounded-3xl">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1600}
              height={image.height ?? 900}
              className="h-auto w-full object-cover"
              style={
                image.objectPosition
                  ? { objectPosition: image.objectPosition }
                  : undefined
              }
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="max-w-lg text-center lg:max-w-none lg:text-left">
            <h2 className="font-display text-xl font-bold leading-tight text-primary lg:text-[2.75rem]">
              {title}
            </h2>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted lg:mt-6 lg:space-y-5 lg:text-lg">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index > 0 ? "hidden lg:block" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {proofPoints && proofPoints.length > 0 && (
              <ul className="mt-4 flex flex-wrap justify-center gap-2 lg:mt-8 lg:justify-start lg:gap-3">
                {proofPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-soft lg:px-5 lg:py-2.5 lg:text-base"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
