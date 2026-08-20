import Image from "next/image";

import { AdmissionCta } from "@/components/ui/admission-cta";
import { SITE_IMAGES } from "@/data/site-images";

export function WhyHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-site">
        <div className="grid items-center gap-6 py-8 lg:min-h-[640px] lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-brand-green lg:text-sm">
              Why Little Buds?
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold leading-[1.15] text-primary lg:mt-4 lg:text-[3.5rem]">
              Because the early years shape everything that follows.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted lg:mt-6 lg:text-xl">
              Little Buds is a safe, joyful preschool where children build
              confidence and curiosity from day one.
              <span className="hidden lg:inline">
                {" "}
                Warm care, purposeful learning, and space to grow at their own
                pace.
              </span>
            </p>
            <div className="mt-5 flex justify-center lg:mt-10 lg:justify-start">
              <AdmissionCta size="xl" />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elevated lg:rounded-3xl">
              <Image
                src={SITE_IMAGES.teacherChild.src}
                alt={SITE_IMAGES.teacherChild.alt}
                width={SITE_IMAGES.teacherChild.width ?? 1600}
                height={SITE_IMAGES.teacherChild.height ?? 900}
                className="h-auto w-full object-cover"
                style={
                  SITE_IMAGES.teacherChild.objectPosition
                    ? { objectPosition: SITE_IMAGES.teacherChild.objectPosition }
                    : undefined
                }
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="pointer-events-none absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full bg-brand-yellow/30 lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
