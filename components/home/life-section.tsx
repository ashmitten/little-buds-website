import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT } from "@/data/contact";
import { lifeGalleryItems } from "@/data/life-gallery";
import { cn } from "@/lib/utils";

const spanClasses = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 row-span-1 lg:col-span-2",
  tall: "col-span-1 row-span-1 lg:row-span-2",
} as const;

export function LifeSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeading
          title="Life at Little Buds"
          description="Learning, playing and growing — a glimpse into everyday moments at our preschool."
          align="center"
          className="mx-auto"
        />

        <div className="mt-6 grid auto-rows-[100px] grid-cols-2 gap-2 lg:mt-10 lg:auto-rows-[200px] lg:grid-cols-4 lg:gap-4">
          {lifeGalleryItems.map((item) => (
            <a
              key={item.id}
              href={CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative block h-full overflow-hidden rounded-xl shadow-soft",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2",
                spanClasses[item.span],
              )}
              aria-label={`${item.category} — view more on Facebook`}
            >
              <figure className="relative h-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={
                    item.objectPosition
                      ? { objectPosition: item.objectPosition }
                      : undefined
                  }
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent px-4 pb-3 pt-8">
                <span className="font-display text-xs font-semibold text-white lg:text-sm">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
