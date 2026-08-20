import type { SiteImage } from "@/types/image";

const PERUSAL = "/images/perusal";

/** Shared dimensions for perusal photography. */
const LANDSCAPE = { width: 3984, height: 2240 } as const;
const PORTRAIT = { width: 2240, height: 3984 } as const;

function perusalImage(
  filename: string,
  alt: string,
  role: SiteImage["role"],
  dimensions: { width: number; height: number } = LANDSCAPE,
  objectPosition?: string,
): SiteImage {
  return {
    src: `${PERUSAL}/${filename}`,
    alt,
    role,
    ...dimensions,
    ...(objectPosition ? { objectPosition } : {}),
  };
}

/** Little Buds photography used across the site */
export const SITE_IMAGES = {
  classroomNotebook: {
    src: "/images/home/little_buds_notebook.jpg",
    alt: "Little Buds students learning in the classroom",
    role: "classroom" as const,
    width: 3984,
    height: 2240,
  },
  principal: {
    src: "/images/about/principal.jpg",
    alt: "Mrs. Lipika Manna, Principal & Founder of Little Buds",
    role: "principal" as const,
    width: 900,
    height: 1200,
    objectPosition: "50% 12%",
  },
  bagsOnWindow: perusalImage(
    "bags_on_window.jpg",
    "Little Buds school bags displayed by the window",
    "campus",
  ),
  childHeadshot1: perusalImage(
    "child_headshot1.jpg",
    "Little Buds student portrait",
    "gallery",
  ),
  childHeadshot2: perusalImage(
    "child_headshot2.jpg",
    "Little Buds student smiling",
    "gallery",
  ),
  classGroupPeace: perusalImage(
    "class_group_girl_peace.jpg",
    "Little Buds student giving a peace sign in class",
    "gallery",
  ),
  classroomAlphabets: perusalImage(
    "classroom_alphabets.jpg",
    "Alphabet learning display in a Little Buds classroom",
    "classroom",
  ),
  classroomBoard: perusalImage(
    "classroom_board.jpg",
    "Colourful classroom display board at Little Buds",
    "classroom",
  ),
  classroomBoard2: perusalImage(
    "classroom_board2.jpg",
    "Classroom learning wall at Little Buds",
    "classroom",
  ),
  playgroupCard: perusalImage(
    "playgroup_card.jpg",
    "Playgroup children sitting on the play mat with a teacher, exploring beads and toys",
    "programme",
    LANDSCAPE,
    "48% 50%",
  ),
  nurseryCard: perusalImage(
    "Nursery.JPG",
    "Nursery children at a table practising colour and shape matching with paper circles",
    "programme",
    LANDSCAPE,
    "42% 38%",
  ),
  artsCloseup: perusalImage(
    "arts_bshot.jpg",
    "Children's art and craft supplies at Little Buds",
    "activity",
  ),
  childSmile: perusalImage(
    "child_smile.jpg",
    "Little Buds student smiling happily",
    "gallery",
    LANDSCAPE,
    "50% 40%",
  ),
  childWriting: perusalImage(
    "child_writing.jpg",
    "Little Buds student practising writing",
    "gallery",
  ),
  childWritingCandid: perusalImage(
    "child_writing_candid.jpg",
    "Student writing at her desk with a teacher nearby",
    "gallery",
  ),
  childrenPlaying: perusalImage(
    "children_playing.jpg",
    "Children playing together in the Little Buds play area",
    "activity",
  ),
  colourPens: perusalImage(
    "colour_pen_bshot.jpg",
    "Colourful pens and Little Buds notebooks",
    "activity",
  ),
  playroomToys: perusalImage(
    "playroom_toys.jpg",
    "Playroom toys and learning materials at Little Buds",
    "activity",
  ),
  schoolBag: perusalImage(
    "shool_bag.jpg",
    "Little Buds school bag and supplies",
    "campus",
  ),
  teacherChild: perusalImage(
    "teacher_child.jpg",
    "Teacher and student smiling together at Little Buds",
    "gallery",
    LANDSCAPE,
    "50% 32%",
  ),
  // —— New perusal uploads ——
  toddlerOnFloor: perusalImage(
    "IMG_5726.JPG",
    "Young child sitting in the Little Buds play area",
    "gallery",
    PORTRAIT,
  ),
  girlsAtDesk: perusalImage(
    "IMG_5832.JPG",
    "Two Little Buds students working together at their desks",
    "classroom",
    LANDSCAPE,
    "52% 42%",
  ),
  teacherWithStudents: perusalImage(
    "IMG_5835.JPG",
    "Teacher guiding Little Buds students through a writing activity",
    "classroom",
    LANDSCAPE,
    "55% 38%",
  ),
  girlsWritingTogether: perusalImage(
    "IMG_5842.JPG",
    "Little Buds students practising handwriting at a classroom table",
    "classroom",
  ),
  girlWritingClose: perusalImage(
    "IMG_5846.JPG",
    "Student concentrating on a writing exercise at Little Buds",
    "classroom",
  ),
  childrenAtTable: perusalImage(
    "IMG_6039.JPG",
    "Little Buds students smiling together in class",
    "gallery",
  ),
  boyPeaceSign: perusalImage(
    "IMG_6120.JPG",
    "Little Buds student giving a peace sign with a big smile",
    "gallery",
    LANDSCAPE,
    "52% 40%",
  ),
  kidsOnStage: perusalImage(
    "kids on stage.jpeg",
    "Little Buds children performing on stage at Annual Day",
    "activity",
    { width: 4160, height: 2773 },
    "50% 42%",
  ),
  playroomShelf: perusalImage(
    "IMG_6174.JPG",
    "Colourful toys and learning materials on the Little Buds playroom shelves",
    "activity",
    LANDSCAPE,
    "50% 40%",
  ),
  boyReading: perusalImage(
    "IMG_6282.JPG",
    "Little Buds student reading a picture book",
    "activity",
  ),
  kitchenPlay: perusalImage(
    "IMG_6303.JPG",
    "Children playing together at the Little Buds activity kitchen",
    "activity",
    LANDSCAPE,
    "48% 38%",
  ),
  boyPortrait: perusalImage(
    "IMG_6342.JPG",
    "Little Buds student portrait in uniform",
    "gallery",
    PORTRAIT,
    "50% 20%",
  ),
  boyPeaceSmile: perusalImage(
    "IMG_6359.JPG",
    "Little Buds student smiling with a peace sign",
    "gallery",
    PORTRAIT,
  ),
  childWithPlush: perusalImage(
    "IMG_6504.JPG",
    "Young child cuddling a soft toy at Little Buds",
    "gallery",
    PORTRAIT,
  ),
  boyHeadshot: perusalImage(
    "IMG_6532.JPG",
    "Little Buds student smiling in the classroom",
    "gallery",
  ),
  girlOnStairs: perusalImage(
    "IMG_6598.JPG",
    "Little Buds student standing on the school stairs",
    "gallery",
    PORTRAIT,
    "55% 28%",
  ),
  craftActivity: perusalImage(
    "IMG_6985.JPG",
    "Hands-on craft activity at Little Buds",
    "activity",
    LANDSCAPE,
    "55% 55%",
  ),
  girlAtDesk: perusalImage(
    "IMG_6999.JPG",
    "Little Buds student resting at her desk with a gentle smile",
    "gallery",
    LANDSCAPE,
    "50% 32%",
  ),
  chalkboardLesson: perusalImage(
    "IMG_7014.JPG",
    "Teacher writing a lesson on the chalkboard at Little Buds",
    "classroom",
    LANDSCAPE,
    "48% 42%",
  ),
  crecheToddler: perusalImage(
    "creche.JPG",
    "Toddler in the Little Buds creche",
    "gallery",
    PORTRAIT,
  ),
  crecheSiblings: perusalImage(
    "creche2.JPG",
    "Young children sharing a tender moment at Little Buds creche",
    "gallery",
    LANDSCAPE,
    "52% 35%",
  ),
} as const satisfies Record<string, SiteImage>;
