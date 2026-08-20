import { SITE_IMAGES } from "@/data/site-images";
import type { SiteImage } from "@/types/image";

/**
 * Creche and daycare page content.
 */

export interface CrecheMetric {
  id: string;
  value: string;
  label: string;
}

export const crecheMetrics: CrecheMetric[] = [
  {
    id: "happy-children",
    value: "35+",
    label: "Happy children so far",
  },
  {
    id: "nanny-ratio",
    value: "1:2",
    label: "Nanny to child ratio",
  },
];

export const crecheDescription: string[] = [
  "Little Buds offers a warm, safe and nurturing daycare environment where young children are cared for with patience, attention and genuine warmth throughout the day.",
  "Our trained caregivers support each child's routine — meals, rest, play and gentle learning — so families can feel confident that their little ones are in caring hands while they are away.",
  "With a low nanny-to-child ratio, every child receives the close supervision and personal care they need to feel secure, happy and well looked after.",
];

export const crecheAgeRange = "6 months – 12 years";

export type CrecheActivityIcon =
  | "music"
  | "dance"
  | "creative"
  | "tutoring";

export interface CrecheActivity {
  id: string;
  title: string;
  description: string;
  icon: CrecheActivityIcon;
  accent: "sky" | "coral" | "yellow" | "green";
}

export const crecheActivities: CrecheActivity[] = [
  {
    id: "music-movement",
    title: "Music & Movement",
    description:
      "Rhythm, expression and confidence through music and movement.",
    icon: "music",
    accent: "sky",
  },
  {
    id: "dance-activities",
    title: "Dance & Activities",
    description:
      "Fun, active sessions that build coordination and confidence.",
    icon: "dance",
    accent: "coral",
  },
  {
    id: "creative-exploration",
    title: "Creative Exploration",
    description: "Art, crafts and hands-on activities that spark curiosity.",
    icon: "creative",
    accent: "yellow",
  },
  {
    id: "tutoring-support",
    title: "Tutoring Support",
    description: "Extra support with schoolwork, revision and learning.",
    icon: "tutoring",
    accent: "green",
  },
];

export const crecheImage: SiteImage = SITE_IMAGES.crecheSiblings;

export const CRECHE_CTA = {
  label: "Contact for Daycare Services",
  href: "/#get-in-touch",
} as const;
