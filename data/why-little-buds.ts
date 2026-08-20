import { SITE_IMAGES } from "@/data/site-images";
import type { SiteImage } from "@/types/image";

export interface WhyStat {
  id: string;
  value: string;
  label: string;
}

export interface LearningTile {
  id: string;
  title: string;
  description: string;
  image: SiteImage;
}

export const WHY_STATS: WhyStat[] = [
  {
    id: "experience",
    value: "15+",
    label: "Years of early childhood experience",
  },
  {
    id: "programmes",
    value: "4",
    label: "Age-specific programmes from Playgroup to Upper KG",
  },
  {
    id: "hours",
    value: "8AM–8PM",
    label: "Extended day with creche and after-school care",
  },
];

export const LEARNING_TILES: LearningTile[] = [
  {
    id: "nep",
    title: "NEP-Aligned Foundations",
    description:
      "Literacy, numeracy and life skills through activity-based learning.",
    image: SITE_IMAGES.chalkboardLesson,
  },
  {
    id: "holistic",
    title: "Holistic Development",
    description:
      "Social, emotional and physical growth woven into every day.",
    image: SITE_IMAGES.boyReading,
  },
  {
    id: "creative",
    title: "Creativity & Expression",
    description: "Art, music and movement — many ways to think and communicate.",
    image: SITE_IMAGES.craftActivity,
  },
  {
    id: "explore",
    title: "Exploration & Discovery",
    description: "Hands-on play and guided discovery that fuel curiosity.",
    image: SITE_IMAGES.playroomShelf,
  },
];

export const SECOND_HOME = {
  title: "A Second Home After Yours",
  paragraphs: [
    "You trust us with the most important person in your world — and we take that seriously.",
    "Clean spaces, attentive supervision, and a caring environment designed around your child. With strong safety practices and dependable healthcare support, you can have peace of mind while they learn and grow.",
  ],
  proofPoints: [
    "Safe & supervised",
    "Clean spaces",
    "Experienced care",
    "Healthcare support",
  ],
  image: SITE_IMAGES.teacherWithStudents,
} as const;

export const LET_THEM_BE_LITTLE = {
  headline: "Let Them Be Little. Let Them Grow.",
  copy: "Confidence. Independence. Curiosity. Self-expression. The freedom to be unapologetically kid-like — because childhood is not a rehearsal for adulthood. It is the foundation.",
  image: SITE_IMAGES.kitchenPlay,
} as const;

export const GIVE_THEM_A_STAGE = {
  title: "Give Them a Stage. Watch Them Find Their Voice.",
  paragraphs: [
    "Some children find their voice in a classroom conversation. Others on a stage, in a dance, through art or in front of an audience for the very first time.",
    "Little Buds gives children regular opportunities to perform, present and participate — building the confidence to express themselves, take pride in their work and stand tall when it matters.",
  ],
  proofPoints: [
    "Annual day & cultural events",
    "Class presentations & celebrations",
    "Music, dance & creative showcases",
  ],
  image: SITE_IMAGES.kidsOnStage,
} as const;

export const STRONG_BEGINNING = {
  title: "A Strong Beginning for What Comes Next",
  paragraphs: [
    "The right preschool does more than keep children busy — it prepares them for what comes next. At Little Buds, children build strong foundations in language, numbers, thinking and everyday skills, progressing through structured programmes that meet them where they are.",
    "Our graduates move on to some of Kolkata’s leading schools with confidence, curiosity and the habits of a capable learner.",
  ],
  image: SITE_IMAGES.girlsWritingTogether,
} as const;

export const GROWING_TOGETHER = {
  title: "Growing Together",
  paragraphs: [
    "A child’s education works best when school and home move in the same direction. We keep parents closely connected to their child’s journey — through regular communication, updates and conversations that matter.",
    "Alongside that partnership, Little Buds offers the practical support busy families need — safe transport options, healthcare on campus and extended hours that fit real life.",
  ],
  proofPoints: [
    "Regular parent communication",
    "Safe transport available",
    "Healthcare support",
    "Extended day care hours",
  ],
  image: SITE_IMAGES.girlsAtDesk,
} as const;

export const THE_INVESTMENT = {
  title: "The Investment",
  paragraphs: [
    "Choosing a preschool is not a transaction — it is an investment in who your child becomes.",
    "At Little Buds, that investment goes into confidence, communication, independence, curiosity and a love of learning that outlasts any worksheet. The returns show up in the child who raises their hand, tries again after failing, makes a friend, and walks into primary school ready — not just prepared on paper, but prepared in spirit.",
  ],
  image: SITE_IMAGES.childSmile,
} as const;
