import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { ADMISSION_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AdmissionCtaProps {
  href?: string;
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** Subtle pulse + shimmer to draw attention. Off when user prefers reduced motion. */
  attention?: boolean;
  className?: string;
}

/**
 * Primary conversion CTA — "Enquire for Admission".
 * Use this instead of generic "Learn More" where admission enquiry is the goal.
 */
export function AdmissionCta({
  href = ADMISSION_CTA.href,
  label = ADMISSION_CTA.label,
  size = "md",
  attention = true,
  className,
}: AdmissionCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "action", size }),
        attention && "cta-attention",
        className,
      )}
    >
      {label}
    </Link>
  );
}
