import { AdmissionCta } from "@/components/ui/admission-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT } from "@/data/contact";

export function ContactSection() {
  return (
    <section className="section-padding bg-white" id="get-in-touch">
      <div className="container-site">
        <SectionHeading
          title="Get in Touch"
          description="We'd love to hear from you. Call, message, or visit us to learn more about Little Buds and see if we're the right fit for your child."
          align="center"
          className="mx-auto"
        />

        <div className="mt-6 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-12">
          {/* Contact details */}
          <div className="rounded-2xl border border-primary/10 bg-background p-4 text-center lg:p-8 lg:text-left">
            <dl className="space-y-3 lg:space-y-4">
              <div>
                <dt className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
                  Address
                </dt>
                <dd className="mt-1 text-muted">{CONTACT.address}</dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
                  Phone
                </dt>
                <dd className="mt-1 text-muted">{CONTACT.phone}</dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
                  WhatsApp
                </dt>
                <dd className="mt-1 text-muted">{CONTACT.whatsapp}</dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
                  Email
                </dt>
                <dd className="mt-1 break-words text-muted">{CONTACT.email}</dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
                  Hours
                </dt>
                <dd className="mt-1 text-muted">{CONTACT.hours}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-row flex-wrap justify-center gap-2 lg:mt-8 lg:justify-start lg:gap-3">
              <ButtonLink
                href={CONTACT.phoneHref}
                variant="primary"
                className="call-cta-attention"
              >
                Call Us
              </ButtonLink>
              <ButtonLink href={CONTACT.whatsappHref} variant="secondary">
                WhatsApp Us
              </ButtonLink>
              <ButtonLink
                href={CONTACT.mapsUrl}
                variant="outline"
                className="hidden lg:inline-flex"
              >
                Get Directions
              </ButtonLink>
            </div>

            <div className="mt-3 flex justify-center lg:mt-6 lg:justify-start">
              <AdmissionCta />
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="hidden overflow-hidden rounded-2xl border border-primary/10 lg:block">
            <iframe
              src={CONTACT.mapsEmbedUrl}
              title="Little Buds Preschool & Day Care Kasba location on Google Maps"
              className="aspect-[4/3] w-full border-0 lg:aspect-auto lg:min-h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
