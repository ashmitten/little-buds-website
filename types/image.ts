/** Semantic image roles for authentic Little Buds photography */
export type ImageRole =
  | "hero"
  | "programme"
  | "classroom"
  | "activity"
  | "principal"
  | "campus"
  | "gallery";

export interface SiteImage {
  src: string;
  alt: string;
  role: ImageRole;
  /** Intrinsic dimensions — used where the image should keep its natural aspect ratio */
  width?: number;
  height?: number;
  /** Fine-tune object-cover framing when used in cropped containers */
  objectPosition?: string;
}
