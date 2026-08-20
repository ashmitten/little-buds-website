import type { Metadata } from "next";

import { AdmissionEnquiryForm } from "@/components/admission/admission-enquiry-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteMain } from "@/components/layout/site-main";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT } from "@/data/contact";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enquire for Admission",
  description: `Submit an admission enquiry for ${SITE.name} preschool in ${SITE.location}. We'll be in touch to help you find the right programme for your child.`,
};

export default function AdmissionEnquiryPage() {
  return (
    <>
      <SiteHeader />
      <SiteMain motifDensity="sparse">
        <section className="section-padding bg-background">
          <div className="container-site">
            <div className="mx-auto max-w-xl">
              <SectionHeading
                eyebrow="Admissions Open"
                title="Enquire for Admission"
                description="Fill in the form below and our team will get back to you about programmes and the admission process at Little Buds."
                align="center"
                className="mx-auto"
              />

              <p className="mt-3 text-center text-sm text-muted lg:mt-4">
                Prefer to talk? Call us on{" "}
                <a
                  href={CONTACT.phoneHref}
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </p>

              <div className="mt-6 rounded-2xl border border-primary/10 bg-white p-4 shadow-card lg:mt-8 lg:p-8">
                <AdmissionEnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </SiteMain>
      <SiteFooter />
    </>
  );
}
