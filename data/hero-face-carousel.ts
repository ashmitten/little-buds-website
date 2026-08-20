/**
 * Hero vertical face carousel — student portraits.
 * Mix of processed crops (hero-faces/) and perusal headshots.
 */

export interface HeroFaceImage {
  src: string;
  alt: string;
  /** Fine-tune face framing inside the passport crop */
  objectPosition?: string;
}

export const heroFaceImages: HeroFaceImage[] = [
  {
    src: "/images/home/hero-faces/face-01.jpg",
    alt: "Little Buds student smiling in uniform",
    objectPosition: "50% 20%",
  },
  {
    src: "/images/home/hero-faces/face-02.jpg",
    alt: "Little Buds student at school",
    objectPosition: "50% 16%",
  },
  {
    src: "/images/home/hero-faces/face-03.jpg",
    alt: "Little Buds student giving a peace sign",
    objectPosition: "50% 25%",
  },
  {
    src: "/images/home/hero-faces/face-04.jpg",
    alt: "Little Buds student with teacher",
    objectPosition: "62% 24%",
  },
  {
    src: "/images/home/hero-faces/face-05.jpg",
    alt: "Little Buds students in the hallway",
    objectPosition: "50% 30%",
  },
  {
    src: "/images/home/hero-faces/face-06.jpg",
    alt: "Little Buds student playing with a puppet",
    objectPosition: "50% 25%",
  },
  {
    src: "/images/home/hero-faces/face-07.jpg",
    alt: "Little Buds student portrait",
    objectPosition: "50% 20%",
  },
  {
    src: "/images/home/hero-faces/face-08.jpg",
    alt: "Little Buds student smiling at school",
    objectPosition: "50% 25%",
  },
  {
    src: "/images/perusal/IMG_6532.JPG",
    alt: "Little Buds student smiling in class",
    objectPosition: "32% 38%",
  },
  {
    src: "/images/perusal/IMG_6359.JPG",
    alt: "Little Buds student smiling with a peace sign",
    objectPosition: "50% 28%",
  },
  {
    src: "/images/perusal/IMG_6999.JPG",
    alt: "Little Buds student resting at her desk",
    objectPosition: "50% 38%",
  },
  {
    src: "/images/perusal/IMG_6504.JPG",
    alt: "Young child at Little Buds with a soft toy",
    objectPosition: "52% 28%",
  },
  {
    src: "/images/perusal/IMG_6342.JPG",
    alt: "Little Buds student portrait in uniform",
    objectPosition: "50% 25%",
  },
  {
    src: "/images/home/hero-faces/face-09.jpg",
    alt: "Little Buds student in uniform",
    objectPosition: "50% 25%",
  },
  {
    src: "/images/home/hero-faces/face-10.jpg",
    alt: "Little Buds student at her desk",
    objectPosition: "50% 22%",
  },
  {
    src: "/images/home/hero-faces/face-11.jpg",
    alt: "Little Buds student giving a peace sign",
    objectPosition: "54% 26%",
  },
];
