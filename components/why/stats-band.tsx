import Image from "next/image";

import { WHY_STATS, STRONG_BEGINNING } from "@/data/why-little-buds";

export function StatsBand() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-xl font-bold leading-tight text-primary lg:text-[2.75rem]">
              {STRONG_BEGINNING.title}
            </h2>
            <div className="mt-3 space-y-5 text-sm leading-relaxed text-muted lg:mt-6 lg:text-lg">
              {STRONG_BEGINNING.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index > 0 ? "hidden lg:block" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-1 lg:gap-5">
            {WHY_STATS.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center justify-center gap-3 rounded-xl border border-primary/10 bg-white p-3 text-center shadow-soft lg:justify-start lg:gap-6 lg:rounded-2xl lg:p-8 lg:text-left"
              >
                <p className="shrink-0 whitespace-nowrap font-display text-xl font-bold leading-none text-brand-green lg:text-[2.75rem]">
                  {stat.value}
                </p>
                <p className="text-sm leading-snug text-muted lg:text-base lg:leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl shadow-card lg:mt-14 lg:rounded-3xl">
          <Image
            src={STRONG_BEGINNING.image.src}
            alt={STRONG_BEGINNING.image.alt}
            width={STRONG_BEGINNING.image.width ?? 1600}
            height={STRONG_BEGINNING.image.height ?? 900}
            className="h-auto w-full object-cover"
            style={
              STRONG_BEGINNING.image.objectPosition
                ? { objectPosition: STRONG_BEGINNING.image.objectPosition }
                : undefined
            }
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}
