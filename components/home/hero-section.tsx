import Link from "next/link";

import { HeroFaceCarousels } from "@/components/home/hero-face-carousels";
import { AdmissionCta } from "@/components/ui/admission-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { ADMISSION_CTA } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background lg:min-h-[600px]">
      <div className="container-site relative z-10">
        <div className="grid items-center gap-5 py-8 lg:min-h-[600px] lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="flex max-w-xl flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <Link
              href={ADMISSION_CTA.href}
              className="inline-flex w-fit cursor-pointer items-center rounded-full bg-action/10 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-action transition-colors hover:bg-action/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2 lg:px-5 lg:py-2 lg:text-base"
            >
              Admissions Open
            </Link>

            <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-primary lg:mt-4 lg:text-[3.25rem]">
              Where Little Minds Learn, Explore &amp; Grow.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted lg:mt-5 lg:text-lg">
              Little Buds is a preschool built around how young children
              actually learn — by doing, asking, trying and trying again.
              <span className="hidden lg:inline">
                {" "}
                Our days bring together guided learning, play and hands-on
                activities, giving children the space to build skills,
                confidence and curiosity.
              </span>
            </p>

            <div className="mt-5 flex flex-row flex-wrap justify-center gap-2 lg:mt-8 lg:justify-start lg:gap-3">
              <AdmissionCta size="xl" />
              <ButtonLink href="/programmes" variant="outline" size="lg">
                Explore Programmes
              </ButtonLink>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <HeroFaceCarousels />
          </div>
        </div>
      </div>
    </section>
  );
}
