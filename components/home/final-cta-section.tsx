import { AdmissionCta } from "@/components/ui/admission-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { CONTACT } from "@/data/contact";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Subtle accent */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-sky/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-brand-green/20"
        aria-hidden="true"
      />

      <div className="container-site relative section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-xl font-bold text-white lg:text-4xl">
            Admissions Open
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 lg:mt-4 lg:text-lg">
            <strong>The right start can make all the difference.</strong>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85 lg:mt-4 lg:text-lg">
            Come see how your child could learn, play and grow at Little Buds.
            <span className="hidden lg:inline">
              {" "}
              Speak to us about our programmes, ask your questions and find the
              right fit for your child.
            </span>
          </p>
          <p className="mt-4 hidden text-lg leading-relaxed text-white/85 lg:block">
            Enquire today. We&apos;d love to hear from you.
          </p>

          <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-2 lg:mt-8 lg:gap-3">
            <AdmissionCta size="lg" />
            <ButtonLink
              href={CONTACT.phoneHref}
              variant="outline"
              size="lg"
              className="call-cta-attention border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              Call Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
