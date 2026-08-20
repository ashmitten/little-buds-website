import Image from "next/image";

import { SITE_LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  priority?: boolean;
}

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Image
      src={SITE_LOGO.src}
      alt={SITE_LOGO.alt}
      width={SITE_LOGO.width}
      height={SITE_LOGO.height}
      priority={priority}
      className={cn("h-12 w-auto object-contain sm:h-14 lg:h-[4.25rem]", className)}
    />
  );
}
