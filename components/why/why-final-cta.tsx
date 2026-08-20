import { ButtonLink } from "@/components/ui/button-link";
import { CONTACT } from "@/data/contact";

export function WhyFinalCta() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-site section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-xl font-bold leading-tight text-primary lg:text-5xl">
            Don&apos;t choose a preschool from a brochure.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted lg:mt-6 lg:text-xl">
            Visit Little Buds. Walk through the classrooms. Meet the team.
            <span className="hidden lg:inline">
              {" "}
              Watch children learning, playing and growing — and decide with
              your own eyes whether this is the right place for your child.
            </span>
          </p>
          <p className="mt-4 hidden text-lg leading-relaxed text-muted lg:block">
            We would love to show you what makes Little Buds different.
          </p>

          <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-2 lg:mt-10 lg:gap-3">
            <ButtonLink
              href={CONTACT.mapsUrl}
              variant="action"
              size="xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Little Buds
            </ButtonLink>
            <ButtonLink
              href={CONTACT.phoneHref}
              variant="outline"
              size="lg"
              className="call-cta-attention"
            >
              Talk to Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
