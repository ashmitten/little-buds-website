import { SITE_IMAGES } from "@/data/site-images";
import type { SiteImage } from "@/types/image";

export interface LifeGalleryItem {
  id: string;
  category: string;
  image: SiteImage;
  /** Grid layout hint for asymmetric composition */
  span: "normal" | "wide" | "tall";
  /** Fine-tune framing inside object-cover cells */
  objectPosition?: string;
}

/**
 * Life at Little Buds gallery — order tuned for a gap-free 4×4 grid on lg screens.
 */
export const lifeGalleryItems: LifeGalleryItem[] = [
  {
    id: "classroom",
    category: "Classroom",
    image: SITE_IMAGES.classroomAlphabets,
    span: "wide",
    objectPosition: "50% 38%",
  },
  {
    id: "creative",
    category: "Creative Activity",
    image: SITE_IMAGES.artsCloseup,
    span: "normal",
    objectPosition: "55% 58%",
  },
  {
    id: "joy",
    category: "Joyful Moments",
    image: SITE_IMAGES.boyPeaceSign,
    span: "normal",
    objectPosition: "50% 35%",
  },
  {
    id: "play",
    category: "Play",
    image: SITE_IMAGES.kitchenPlay,
    span: "tall",
    objectPosition: "50% 42%",
  },
  {
    id: "learning",
    category: "Learning",
    image: SITE_IMAGES.girlWritingClose,
    span: "wide",
    objectPosition: "50% 45%",
  },
  {
    id: "teacher",
    category: "Teacher Interaction",
    image: SITE_IMAGES.teacherChild,
    span: "normal",
    objectPosition: "50% 32%",
  },
  {
    id: "portraits",
    category: "Our Students",
    image: SITE_IMAGES.boyPortrait,
    span: "normal",
    objectPosition: "50% 20%",
  },
  {
    id: "group",
    category: "Group Activity",
    image: SITE_IMAGES.childrenAtTable,
    span: "normal",
    objectPosition: "48% 42%",
  },
  {
    id: "smiles",
    category: "Happy Faces",
    image: SITE_IMAGES.girlOnStairs,
    span: "normal",
    objectPosition: "55% 28%",
  },
  {
    id: "campus",
    category: "School Life",
    image: SITE_IMAGES.bagsOnWindow,
    span: "wide",
    objectPosition: "50% 28%",
  },
  {
    id: "supplies",
    category: "Ready to Learn",
    image: SITE_IMAGES.colourPens,
    span: "wide",
    objectPosition: "42% 52%",
  },
];
