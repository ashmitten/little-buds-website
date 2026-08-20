import type { Metadata } from "next";

import { JourneySection } from "@/components/about/journey-section";
import { PrincipalLetterSection } from "@/components/about/principal-letter-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteMain } from "@/components/layout/site-main";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} preschool in ${SITE.location} — our journey, values, and a message from our Principal.`,
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <SiteMain>
        <section className="border-b border-primary/10 bg-background py-8 lg:py-16">
          <div className="container-site">
            <SectionHeading
              title="About Little Buds"
              description="A little about where we started, what we believe in, and what makes Little Buds the place it is today."
              align="center"
              className="mx-auto"
            />
          </div>
        </section>

        <JourneySection />
        <PrincipalLetterSection />
      </SiteMain>
      <SiteFooter />
    </>
  );
}
