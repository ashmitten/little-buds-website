import type { Metadata } from "next";
import Image from "next/image";

import { CrecheMetrics } from "@/components/creche/creche-metrics";
import { MoreThanDaycare } from "@/components/creche/more-than-daycare";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteMain } from "@/components/layout/site-main";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CRECHE_CTA,
  crecheAgeRange,
  crecheDescription,
  crecheImage,
} from "@/data/creche";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Creche",
  description: `Explore ${SITE.name} creche and daycare services in ${SITE.location} — nurturing, attentive care for young children in a safe and welcoming environment.`,
};

export default function CrechePage() {
  return (
    <>
      <SiteHeader />
      <SiteMain motifDensity="sparse">
        <section className="border-b border-primary/10 bg-background py-8 lg:py-16">
          <div className="container-site">
            <SectionHeading
              eyebrow={crecheAgeRange}
              title="Creche & Daycare"
              description="Little Buds provides a caring creche and daycare service where children are looked after with warmth, patience and individual attention throughout the day."
              align="center"
              className="mx-auto"
            />
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={crecheImage.src}
                  alt={crecheImage.alt}
                  width={crecheImage.width ?? 1600}
                  height={crecheImage.height ?? 900}
                  className="h-auto w-full object-cover"
                  style={
                    crecheImage.objectPosition
                      ? { objectPosition: crecheImage.objectPosition }
                      : undefined
                  }
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              <div className="mt-5 space-y-4 text-center text-sm leading-relaxed text-muted lg:mt-10 lg:text-left lg:text-lg">
                {crecheDescription.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index > 0 ? "hidden lg:block" : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MoreThanDaycare />

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="mx-auto max-w-3xl">
              <CrecheMetrics />

              <div className="mt-6 text-center lg:mt-10">
                <ButtonLink href={CRECHE_CTA.href} variant="action" size="lg">
                  {CRECHE_CTA.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </SiteMain>
      <SiteFooter />
    </>
  );
}
