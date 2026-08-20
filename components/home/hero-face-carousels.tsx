import Image from "next/image";

import { heroFaceImages, type HeroFaceImage } from "@/data/hero-face-carousel";
import { cn } from "@/lib/utils";

/** Even-index faces — left column only */
const LEFT_COLUMN_FACES: HeroFaceImage[] = heroFaceImages.filter(
  (_, index) => index % 2 === 0,
);

/** Odd-index faces — right column only (no overlap with left) */
const RIGHT_COLUMN_FACES: HeroFaceImage[] = heroFaceImages.filter(
  (_, index) => index % 2 === 1,
);

interface FaceColumnProps {
  direction: "up" | "down";
  faces: HeroFaceImage[];
  duration: string;
}

function FaceColumn({ direction, faces, duration }: FaceColumnProps) {
  const items = [...faces, ...faces];

  return (
    <div className="hero-face-carousel-mask relative h-full w-[5.75rem] overflow-hidden sm:w-32 lg:w-[11.5rem]">
      <div
        className={cn(
          "hero-face-carousel-track flex flex-col items-center gap-4 sm:gap-6 lg:gap-8",
          direction === "up"
            ? "hero-face-carousel-up"
            : "hero-face-carousel-down",
        )}
        style={{ animationDuration: duration }}
      >
        {items.map((face, index) => (
          <div
            key={`${face.src}-${index}`}
            className="relative aspect-[3/4] w-[5.25rem] shrink-0 overflow-hidden rounded-md bg-background shadow-soft ring-2 ring-white/90 sm:w-28 lg:w-44"
          >
            <Image
              src={face.src}
              alt=""
              width={176}
              height={235}
              sizes="(max-width: 640px) 84px, (max-width: 1024px) 112px, 176px"
              className="size-full object-cover"
              style={{ objectPosition: face.objectPosition ?? "50% 25%" }}
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroFaceCarousels() {
  return (
    <div
      className="pointer-events-none flex h-[220px] items-center justify-center gap-3 sm:h-[360px] sm:gap-5 lg:h-[min(640px,85vh)] lg:gap-8"
      aria-hidden="true"
    >
      <FaceColumn direction="up" faces={LEFT_COLUMN_FACES} duration="50s" />
      <FaceColumn direction="down" faces={RIGHT_COLUMN_FACES} duration="50s" />
    </div>
  );
}
