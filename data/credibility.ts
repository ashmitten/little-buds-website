/**
 * Trust and credibility items for the home page.
 */
export interface CredibilityItem {
  id: string;
  label: string;
  value: string;
  /** When set, rendered larger/bolder before the value text */
  emphasis?: string;
  /** Applies distinct card styling to draw attention */
  highlight?: boolean;
  /** lg breakpoint grid placement (Tailwind grid classes) */
  gridClass?: string;
}

export const credibilityItems: CredibilityItem[] = [
  {
    id: "experience",
    label: "Experience",
    emphasis: "15+",
    value: "years of early childhood care experience",
    highlight: true,
    gridClass: "col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col justify-center",
  },
  {
    id: "approach",
    label: "Educational Approach",
    value: "Inspired by Montessori and Reggio Emilia, with hands-on learning and exploration.",
    gridClass: "lg:col-start-2 lg:row-start-1",
  },
  {
    id: "curriculum",
    label: "Curriculum",
    value: "Building strong foundations in language, maths, creativity and everyday skills.",
    gridClass: "lg:col-start-3 lg:row-start-1",
  },
  {
    id: "development",
    label: "Child Development",
    value: "Growing communication, confidence, independence and social skills.",
    gridClass: "lg:col-start-2 lg:row-start-2",
  },
  {
    id: "environment",
    label: "School Environment",
    value: "We see the environment as the child’s third parent — shaping how they explore, learn and grow.",
    gridClass: "lg:col-start-3 lg:row-start-2",
  },
];
