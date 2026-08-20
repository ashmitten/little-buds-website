import type { Metadata } from "next";

import { FinalCtaSection } from "@/components/home/final-cta-section";
import { ProgrammesList } from "@/components/programme/programmes-list";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteMain } from "@/components/layout/site-main";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programmes",
  description: `Explore ${SITE.name} preschool programmes in ${SITE.location} — Playgroup, Nursery, KG I and KG II. Age-appropriate learning for every stage.`,
};

export default function ProgrammesPage() {
  return (
    <>
      <SiteHeader />
      <SiteMain motifDensity="sparse">
        <section className="border-b border-primary/10 bg-white py-8 lg:py-16">
          <div className="container-site">
            <SectionHeading
              title="Our Programmes"
              description="From their first days at preschool to getting ready for primary school, our programmes grow with your child — with the right mix of learning, play and independence at every stage."
              align="center"
              className="mx-auto"
            />
          </div>
        </section>

        <ProgrammesList />
        <FinalCtaSection />
      </SiteMain>
      <SiteFooter />
    </>
  );
}
