import type { Metadata } from "next";

import { ContactSection } from "@/components/home/contact-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { LifeSection } from "@/components/home/life-section";
import { ProgrammesSection } from "@/components/home/programmes-section";
import { TrustSection } from "@/components/home/trust-section";
import { WhySection } from "@/components/home/why-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteMain } from "@/components/layout/site-main";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Preschool in ${SITE.location} | Admissions Open`,
  description:
    "Little Buds is a warm, child-centred preschool in Kolkata. Explore our programmes for Playgroup, Nursery, KG I and KG II. Admissions open — enquire today.",
  openGraph: {
    title: `${SITE.name} | Preschool in ${SITE.location}`,
    description:
      "Where little minds learn, explore and grow. Admissions open at Little Buds Preschool, Kolkata.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <SiteMain>
          <HeroSection />
          <IntroSection />
          <ProgrammesSection />
          <WhySection />
          <LifeSection />
          <TrustSection />
          <ContactSection />
          <FinalCtaSection />
      </SiteMain>
      <SiteFooter />
    </>
  );
}
