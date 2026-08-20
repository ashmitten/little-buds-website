import type { SiteImage } from "./image";

export interface Programme {
  id: string;
  /** Placeholder until confirmed by Little Buds */
  name: string;
  /** Placeholder — e.g. "[Ages X–Y — to be confirmed]" */
  ageRange: string;
  /** Placeholder description */
  description: string;
  /** Short tagline for cards — placeholder */
  tagline: string;
  /** Placeholder highlights for programme detail page */
  highlights: string[];
  image: SiteImage;
}
