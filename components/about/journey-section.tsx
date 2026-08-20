import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_JOURNEY } from "@/data/about";

export function JourneySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="About Us"
            title={ABOUT_JOURNEY.title}
            align="center"
            className="mx-auto"
          />

          <div className="mt-5 overflow-hidden rounded-2xl shadow-card lg:mt-10">
            <Image
              src={ABOUT_JOURNEY.image.src}
              alt={ABOUT_JOURNEY.image.alt}
              width={ABOUT_JOURNEY.image.width ?? 1600}
              height={ABOUT_JOURNEY.image.height ?? 900}
              className="h-auto w-full object-cover"
              style={
                ABOUT_JOURNEY.image.objectPosition
                  ? { objectPosition: ABOUT_JOURNEY.image.objectPosition }
                  : undefined
              }
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="mt-5 space-y-6 text-center text-sm leading-relaxed text-muted lg:mt-10 lg:text-left lg:text-lg">
            {ABOUT_JOURNEY.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={index > 0 ? "hidden lg:block" : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
