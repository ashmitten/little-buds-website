import Link from "next/link";

import { AdmissionCta } from "@/components/ui/admission-cta";
import { CONTACT } from "@/data/contact";
import { programmes } from "@/data/programmes";
import { ADMISSION_CTA, NAV_ITEMS, SITE } from "@/lib/constants";

import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-white">
      <div className="container-site section-padding">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:text-left">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <SiteLogo className="h-11 lg:h-14" />
            </Link>
            <p className="mt-3 hidden text-base leading-relaxed text-muted lg:block">
              A warm, child-centred preschool based in Kolkata.
            </p>
            <div className="mt-3 lg:mt-4">
              <AdmissionCta size="sm" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wide text-primary lg:text-sm">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-1.5 lg:mt-4 lg:space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary lg:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={ADMISSION_CTA.href}
                  className="text-sm font-semibold text-action transition-colors hover:text-action/80 lg:text-base"
                >
                  {ADMISSION_CTA.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div className="hidden lg:block">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-primary">
              Programmes
            </h3>
            <ul className="mt-4 space-y-2">
              {programmes.map((programme) => (
                <li key={programme.id}>
                  <Link
                    href="/programmes"
                    className="text-base text-muted transition-colors hover:text-primary"
                  >
                    {programme.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wide text-primary lg:text-sm">
              Contact
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted lg:mt-4 lg:space-y-2 lg:text-base">
              <li>{CONTACT.address}</li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="break-all transition-colors hover:text-primary"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-primary/10 pt-4 text-center text-xs text-muted lg:mt-10 lg:pt-6 lg:text-base">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
