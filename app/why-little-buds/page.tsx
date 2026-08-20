import type { Metadata } from "next";

import { EditorialSplit } from "@/components/why/editorial-split";
import { InvestmentSection } from "@/components/why/investment-section";
import { LearningBeyond } from "@/components/why/learning-beyond";
import { StatsBand } from "@/components/why/stats-band";
import { VisualStatement } from "@/components/why/visual-statement";
import { WhyFinalCta } from "@/components/why/why-final-cta";
import { WhyHero } from "@/components/why/why-hero";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteMain } from "@/components/layout/site-main";
import {
  GIVE_THEM_A_STAGE,
  GROWING_TOGETHER,
  LET_THEM_BE_LITTLE,
  SECOND_HOME,
} from "@/data/why-little-buds";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Little Buds",
  description: `Discover why families choose ${SITE.name} — a safe, joyful foundation for confident, curious children in ${SITE.location}.`,
  openGraph: {
    title: `Why Little Buds | ${SITE.name}`,
    description:
      "Because the early years shape everything that follows. Explore what makes Little Buds a preschool worth choosing.",
    type: "website",
  },
};

export default function WhyLittleBudsPage() {
  return (
    <>
      <SiteHeader />
      <SiteMain>
        <WhyHero />

        <EditorialSplit
          title={SECOND_HOME.title}
          paragraphs={SECOND_HOME.paragraphs}
          proofPoints={SECOND_HOME.proofPoints}
          image={SECOND_HOME.image}
          imagePosition="left"
          bg="background"
        />

        <VisualStatement
          headline={LET_THEM_BE_LITTLE.headline}
          copy={LET_THEM_BE_LITTLE.copy}
          image={LET_THEM_BE_LITTLE.image}
        />

        <LearningBeyond />

        <EditorialSplit
          title={GIVE_THEM_A_STAGE.title}
          paragraphs={GIVE_THEM_A_STAGE.paragraphs}
          proofPoints={GIVE_THEM_A_STAGE.proofPoints}
          image={GIVE_THEM_A_STAGE.image}
          imagePosition="right"
          bg="white"
        />

        <StatsBand />

        <EditorialSplit
          title={GROWING_TOGETHER.title}
          paragraphs={GROWING_TOGETHER.paragraphs}
          proofPoints={GROWING_TOGETHER.proofPoints}
          image={GROWING_TOGETHER.image}
          imagePosition="left"
          bg="sky"
        />

        <InvestmentSection />

        <WhyFinalCta />
      </SiteMain>
      <SiteFooter />
    </>
  );
}
