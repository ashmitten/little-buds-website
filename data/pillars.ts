/**
 * Why Little Buds pillars — values that guide the preschool.
 */
export interface Pillar {
  id: string;
  name: string;
  description: string;
  icon: "heart" | "leaf" | "star" | "book" | "users" | "sun";
}

export const pillars: Pillar[] = [
  {
    id: "pillar-1",
    name: "Learning by Doing",
    description:
      "Children learn best when they can touch, try, build, move and explore — not just listen.",
    icon: "heart",
  },
  {
    id: "pillar-2",
    name: "Curiosity Comes First",
    description:
      "We encourage children to ask questions, follow their interests and find out how things work.",
    icon: "leaf",
  },
  {
    id: "pillar-3",
    name: "Growing Independence",
    description:
      "From putting things away to tackling a new activity, children get plenty of chances to do things for themselves.",
    icon: "star",
  },
  {
    id: "pillar-4",
    name: "Learning Beyond Books",
    description:
      "Stories, art, music, movement, conversation and play all have a place in how children learn.",
    icon: "book",
  },
  {
    id: "pillar-5",
    name: "Growing Together",
    description:
      "Children learn to share, listen, cooperate and navigate the little challenges of being part of a group.",
    icon: "users",
  },
  {
    id: "pillar-6",
    name: "Ready for the Next Step",
    description:
      "We build strong foundations in language, numbers, thinking and everyday skills — preparing children with the confidence and abilities they need for the years of learning ahead.",
    icon: "sun",
  },
];
