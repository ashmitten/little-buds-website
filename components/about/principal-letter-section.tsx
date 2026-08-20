import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { PRINCIPAL } from "@/data/principal";

export function PrincipalLetterSection() {
  return (
    <section className="section-padding bg-brand-yellow/15">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="From the Principal's Desk"
            description="A few words from the person behind Little Buds — and the belief that has guided us from the very beginning."
            align="center"
            className="mx-auto"
          />

          <div className="mt-6 rounded-2xl border border-primary/10 bg-white p-4 shadow-card lg:mt-10 lg:p-10">
            {/* Portrait photograph — 3:4 matches the source, so the face is not cropped tight */}
            <div className="mx-auto w-[7.5rem] lg:w-[10.5rem]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-4 border-white shadow-card">
                <Image
                  src={PRINCIPAL.image.src}
                  alt={PRINCIPAL.image.alt}
                  fill
                  className="object-cover"
                  style={
                    PRINCIPAL.image.objectPosition
                      ? { objectPosition: PRINCIPAL.image.objectPosition }
                      : undefined
                  }
                  sizes="168px"
                />
              </div>
            </div>

            <div className="mt-4 text-center lg:mt-8">
              <p className="font-display text-base font-bold text-primary lg:text-xl">
                {PRINCIPAL.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-green">
                {PRINCIPAL.title}
              </p>
            </div>

            {/* Letter body */}
            <div className="mt-5 space-y-5 border-t border-primary/10 pt-5 text-center text-sm leading-relaxed text-muted lg:mt-8 lg:pt-8 lg:text-left lg:text-lg">
              {PRINCIPAL.letter.map((paragraph, index) => (
                <p
                  key={index}
                  className={index > 0 ? "hidden lg:block" : undefined}
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-8 text-center font-light italic text-muted lg:text-right">
                Warmly,
                <br />
                {PRINCIPAL.name}
                <br />
                {PRINCIPAL.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
