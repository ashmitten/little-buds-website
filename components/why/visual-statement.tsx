import Image from "next/image";

import type { SiteImage } from "@/types/image";

interface VisualStatementProps {
  headline: string;
  copy: string;
  image: SiteImage;
}

export function VisualStatement({ headline, copy, image }: VisualStatementProps) {
  return (
    <section className="relative min-h-[240px] overflow-hidden lg:min-h-[600px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        style={
          image.objectPosition
            ? { objectPosition: image.objectPosition }
            : undefined
        }
        sizes="100vw"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"
        aria-hidden="true"
      />
      <div className="container-site relative flex min-h-[240px] items-center py-10 lg:min-h-[600px] lg:py-28">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <h2 className="font-display text-xl font-bold leading-tight text-white lg:text-6xl">
            {headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 lg:mt-6 lg:text-xl">
            {copy}
          </p>
        </div>
      </div>
    </section>
  );
}
