import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { pillars } from "@/data/pillars";

import { PillarIcon } from "./pillar-icon";

export function WhySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <SectionHeading
          title="Why Little Buds?"
          description="We want children to learn beyond the worksheet — to ask questions, try things, make mistakes and discover what they can do."
          align="center"
          className="mx-auto"
        />

        <div className="mt-6 grid grid-cols-1 gap-3 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              className="rounded-xl bg-white p-4 text-center shadow-soft lg:p-6 lg:text-left"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-brand-sky/15 text-brand-deep lg:mx-0 lg:h-12 lg:w-12">
                <PillarIcon icon={pillar.icon} />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-primary lg:mt-4 lg:text-lg">
                {pillar.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted lg:text-base">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center lg:mt-10">
          <ButtonLink href="/why-little-buds" variant="primary" size="xl">
            Discover Why Little Buds
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
