import { SITE_IMAGES } from "@/data/site-images";
import type { Programme } from "@/types/programme";

/**
 * Programme data — single source of truth for programme cards and the programmes page.
 */
export const programmes: Programme[] = [
  {
    id: "playgroup",
    name: "Playgroup",
    ageRange: "1.5 – 3 years",
    tagline: "A first step into learning, playfully.",
    description:
      "A gentle introduction to school life where children learn through play, movement, exploration and everyday experiences. The focus is on helping children become comfortable in a group, express themselves and begin doing things independently.",
    highlights: [
      "Builds comfort with routines and classroom life",
      "Encourages communication and vocabulary",
      "Develops gross and fine motor skills",
      "Introduces colours, shapes, numbers and everyday concepts",
      "Encourages sharing, turn-taking and social interaction",
      "Builds early independence through simple tasks",
    ],
    image: SITE_IMAGES.playgroupCard,
  },
  {
    id: "nursery",
    name: "Nursery",
    ageRange: "3 – 4 years",
    tagline: "Curiosity Starts Taking Shape.",
    description:
      "Nursery builds on children’s natural curiosity with more structured activities, conversations and hands-on learning. Children begin connecting what they see and experience with early concepts in language, numbers, creativity and the world around them.",
    highlights: [
      "Strengthens listening and speaking skills",
      "Develops early number sense and counting",
      "Introduces letters, sounds and pre-writing skills",
      "Builds recognition of shapes, colours and patterns",
      "Encourages observation and questioning",
      "Develops coordination through art, craft and practical activities",
    ],
    image: SITE_IMAGES.nurseryCard,
  },
  {
    id: "kg-i",
    name: "Lower Kindergarten",
    ageRange: "4 – 5 years",
    tagline: "Learning becomes more purposeful.",
    description:
      "Lower KG brings greater structure and independence to learning. Children begin working with concepts more deliberately while continuing to learn through activities, stories, conversation and hands-on experiences.",
    highlights: [
      "Builds stronger phonics and early reading foundations",
      "Develops writing readiness and pencil control",
      "Strengthens counting, number recognition and basic mathematical thinking",
      "Encourages sentence formation and confident communication",
      "Develops concentration and ability to follow multi-step instructions",
      "Encourages greater independence in classroom tasks",
    ],
    image: SITE_IMAGES.girlWritingClose,
  },
  {
    id: "kg-ii",
    name: "Upper Kindergarten",
    ageRange: "5 – 6 years",
    tagline: "Ready to learn, think and take on more.",
    description:
      "Upper KG prepares children for the transition to formal schooling without losing the curiosity and activity-based learning that make the early years enjoyable. Children apply what they know, think more independently and become increasingly confident learners.",
    highlights: [
      "Strengthens reading, phonics, comprehension and writing",
      "Develops number operations and practical mathematical thinking",
      "Builds reasoning, classification and problem-solving skills",
      "Encourages clear communication and independent expression",
      "Develops the ability to complete tasks with greater focus",
      "Builds readiness for the expectations of primary school",
    ],
    image: SITE_IMAGES.girlAtDesk,
  },
];

export function getProgrammeById(id: string): Programme | undefined {
  return programmes.find((p) => p.id === id);
}
