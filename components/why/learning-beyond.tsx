import Image from "next/image";

import { LEARNING_TILES } from "@/data/why-little-buds";

export function LearningBeyond() {
  return (
    <section className="section-padding bg-section-sky">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-green">
            How We Teach
          </p>
          <h2 className="mt-2 font-display text-xl font-bold text-primary lg:text-5xl">
            Learning Beyond the Classroom
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted lg:mt-5 lg:text-lg">
            Education at Little Buds is not confined to desks and textbooks.
            <span className="hidden lg:inline">
              {" "}
              It lives in conversation, movement, creativity and the everyday
              discoveries that make children want to learn more.
            </span>
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {LEARNING_TILES.map((tile, index) => (
            <article
              key={tile.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft lg:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tile.image.src}
                  alt={tile.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={
                    tile.image.objectPosition
                      ? { objectPosition: tile.image.objectPosition }
                      : undefined
                  }
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/15 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 font-display text-[0.65rem] font-bold tracking-widest text-brand-green shadow-soft backdrop-blur-sm lg:left-4 lg:top-4 lg:px-2.5 lg:py-1 lg:text-xs">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-2.5 text-center lg:p-6 lg:text-left">
                <h3 className="font-display text-sm font-bold leading-snug text-primary lg:text-xl">
                  {tile.title}
                </h3>
                <p className="mt-1 text-xs leading-snug text-muted lg:mt-2 lg:text-base lg:leading-relaxed">
                  {tile.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
