/**
 * Site-wide constants.
 */
export const SITE = {
  name: "Little Buds",
  tagline: "Play, Learn, Grow",
  location: "Kolkata",
  description:
    "Little Buds is a warm, child-centred preschool in Kolkata. Admissions open — explore our programmes and enquire today.",
} as const;

/** Brand logo — file in public/images/logo/ */
export const SITE_LOGO = {
  src: "/images/logo/logo_main.png",
  alt: "Little Buds — Play, Learn, Grow",
  width: 200,
  height: 72,
} as const;

/** Primary conversion CTA — use consistently across the site */
export const ADMISSION_CTA = {
  label: "Enquire for Admission",
  href: "/admission-enquiry",
} as const;

/** Main navigation */
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Creche", href: "/creche" },
  { label: "Why Little Buds", href: "/why-little-buds", highlight: true },
  { label: "Contact", href: "/#get-in-touch" },
] as const;
