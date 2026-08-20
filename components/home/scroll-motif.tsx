"use client";

import { useEffect, useRef, useState } from "react";

import { FLOWER_MOTIFS, GutterFlower } from "@/components/home/doodle-flowers";
import { cn } from "@/lib/utils";

const PLANE_COLORS = {
  sky: "var(--color-brand-sky)",
  deep: "var(--color-brand-deep)",
  green: "var(--color-brand-green)",
  yellow: "var(--color-brand-yellow)",
  coral: "var(--color-brand-coral)",
  white: "#ffffff",
} as const;

/** Matches --container-max in globals.css */
const CONTAINER_MAX = "72rem";

interface EyeConfig {
  x: number;
  y: number;
  pupilDx: number;
  pupilDy: number;
}

/** Googly-eye placement tuned per letter. */
const LETTER_EYES: Record<string, EyeConfig[]> = {
  L: [
    { x: -6, y: -14, pupilDx: 1, pupilDy: -1 },
    { x: 8, y: -12, pupilDx: -1, pupilDy: 1 },
  ],
  I: [
    { x: -5, y: -14, pupilDx: 1, pupilDy: 0 },
    { x: 7, y: -14, pupilDx: -1, pupilDy: 1 },
  ],
  T: [
    { x: -8, y: -14, pupilDx: 1, pupilDy: -1 },
    { x: 10, y: -12, pupilDx: -1, pupilDy: 0 },
  ],
  B: [
    { x: -6, y: -14, pupilDx: 0, pupilDy: -1 },
    { x: 10, y: -10, pupilDx: -1, pupilDy: 1 },
  ],
  D: [
    { x: -4, y: -14, pupilDx: 1, pupilDy: 0 },
    { x: 12, y: -12, pupilDx: -1, pupilDy: -1 },
  ],
  E: [
    { x: -6, y: -14, pupilDx: 1, pupilDy: 0 },
    { x: 8, y: -14, pupilDx: -1, pupilDy: 1 },
  ],
  U: [
    { x: -8, y: -14, pupilDx: 1, pupilDy: -1 },
    { x: 10, y: -14, pupilDx: -1, pupilDy: 0 },
  ],
  S: [
    { x: -6, y: -14, pupilDx: 0, pupilDy: -1 },
    { x: 10, y: -12, pupilDx: -1, pupilDy: 1 },
  ],
  P: [
    { x: -5, y: -14, pupilDx: 1, pupilDy: -1 },
    { x: 9, y: -12, pupilDx: -1, pupilDy: 0 },
  ],
  R: [
    { x: -6, y: -14, pupilDx: 0, pupilDy: -1 },
    { x: 11, y: -10, pupilDx: -1, pupilDy: 1 },
  ],
  C: [
    { x: -7, y: -14, pupilDx: 1, pupilDy: 0 },
    { x: 9, y: -14, pupilDx: -1, pupilDy: -1 },
  ],
  H: [
    { x: -8, y: -14, pupilDx: 1, pupilDy: -1 },
    { x: 10, y: -12, pupilDx: -1, pupilDy: 1 },
  ],
  O: [
    { x: -6, y: -14, pupilDx: 0, pupilDy: -1 },
    { x: 8, y: -14, pupilDx: -1, pupilDy: 1 },
  ],
  A: [
    { x: -7, y: -14, pupilDx: 1, pupilDy: -1 },
    { x: 9, y: -12, pupilDx: -1, pupilDy: 0 },
  ],
  F: [
    { x: -5, y: -14, pupilDx: 1, pupilDy: 0 },
    { x: 8, y: -14, pupilDx: -1, pupilDy: -1 },
  ],
  G: [
    { x: -6, y: -14, pupilDx: 0, pupilDy: -1 },
    { x: 10, y: -12, pupilDx: -1, pupilDy: 1 },
  ],
  N: [
    { x: -7, y: -14, pupilDx: 0, pupilDy: -1 },
    { x: 10, y: -12, pupilDx: -1, pupilDy: 0 },
  ],
  W: [
    { x: -9, y: -14, pupilDx: 1, pupilDy: 0 },
    { x: 11, y: -14, pupilDx: -1, pupilDy: 1 },
  ],
  Y: [
    { x: -6, y: -14, pupilDx: 1, pupilDy: -1 },
    { x: 10, y: -12, pupilDx: -1, pupilDy: 1 },
  ],
};

interface MotifConfig {
  side: "left" | "right";
  top: string;
  rotate: number;
  /** Horizontal nudge within gutter (px toward viewport edge). */
  shiftX: number;
  /** Fine vertical nudge (px). */
  shiftY: number;
  letter: string;
  /** Dotted trail in local coords — ends at letter leading edge (0, 0). */
  trail: string;
  color: keyof typeof PLANE_COLORS;
  accent: keyof typeof PLANE_COLORS;
  delay: string;
  duration: string;
}

/** Little Buds Preschool letters + scattered PLAY · GROW · FUN. Anchored in page gutters. */
const MOTIFS: MotifConfig[] = [
  {
    side: "left",
    top: "4%",
    letter: "E",
    rotate: 54,
    shiftX: 4,
    shiftY: -6,
    trail: "M -52 -10 C -36 -16, -18 -4, 0 0",
    color: "coral",
    accent: "yellow",
    delay: "0.2s",
    duration: "5.6s",
  },
  {
    side: "right",
    top: "8%",
    letter: "F",
    rotate: 76,
    shiftX: 8,
    shiftY: -4,
    trail: "M -58 -6 C -42 -12, -24 -4, 0 0",
    color: "coral",
    accent: "sky",
    delay: "1.3s",
    duration: "5.7s",
  },
  {
    side: "right",
    top: "16%",
    letter: "T",
    rotate: 84,
    shiftX: 10,
    shiftY: 8,
    trail: "M -62 12 C -46 6, -28 0, 0 0",
    color: "sky",
    accent: "deep",
    delay: "1s",
    duration: "6.1s",
  },
  {
    side: "right",
    top: "22%",
    letter: "Y",
    rotate: 57,
    shiftX: 6,
    shiftY: 6,
    trail: "M -54 10 C -38 4, -20 -2, 0 0",
    color: "yellow",
    accent: "deep",
    delay: "0.65s",
    duration: "6.2s",
  },
  {
    side: "left",
    top: "11%",
    letter: "L",
    rotate: 67,
    shiftX: 14,
    shiftY: 4,
    trail: "M -48 8 C -34 14, -16 6, 0 0",
    color: "sky",
    accent: "deep",
    delay: "0s",
    duration: "5.5s",
  },
  {
    side: "left",
    top: "18%",
    letter: "A",
    rotate: 63,
    shiftX: 12,
    shiftY: -8,
    trail: "M -50 -8 C -36 -14, -18 -4, 0 0",
    color: "yellow",
    accent: "coral",
    delay: "0.55s",
    duration: "5.9s",
  },
  {
    side: "left",
    top: "23%",
    letter: "P",
    rotate: 55,
    shiftX: 10,
    shiftY: -5,
    trail: "M -50 -6 C -36 -12, -18 -2, 0 0",
    color: "green",
    accent: "yellow",
    delay: "0.7s",
    duration: "5.7s",
  },
  {
    side: "right",
    top: "28%",
    letter: "I",
    rotate: 48,
    shiftX: 2,
    shiftY: -10,
    trail: "M -54 -4 C -38 -12, -20 -6, 0 0",
    color: "green",
    accent: "deep",
    delay: "0.8s",
    duration: "6s",
  },
  {
    side: "left",
    top: "36%",
    letter: "T",
    rotate: 79,
    shiftX: 6,
    shiftY: 12,
    trail: "M -56 -8 C -40 -14, -22 -6, 0 0",
    color: "coral",
    accent: "deep",
    delay: "0.4s",
    duration: "6.2s",
  },
  {
    side: "right",
    top: "39%",
    letter: "C",
    rotate: 52,
    shiftX: 8,
    shiftY: -12,
    trail: "M -55 4 C -40 -4, -22 -8, 0 0",
    color: "coral",
    accent: "sky",
    delay: "1.1s",
    duration: "6.0s",
  },
  {
    side: "right",
    top: "45%",
    letter: "N",
    rotate: 69,
    shiftX: 10,
    shiftY: -6,
    trail: "M -60 -4 C -44 -10, -26 -6, 0 0",
    color: "green",
    accent: "yellow",
    delay: "1.45s",
    duration: "5.8s",
  },
  {
    side: "left",
    top: "50%",
    letter: "R",
    rotate: 71,
    shiftX: 4,
    shiftY: 6,
    trail: "M -54 10 C -38 4, -20 -2, 0 0",
    color: "yellow",
    accent: "deep",
    delay: "0.3s",
    duration: "6.5s",
  },
  {
    side: "right",
    top: "49%",
    letter: "L",
    rotate: 61,
    shiftX: 16,
    shiftY: -4,
    trail: "M -60 6 C -44 12, -26 4, 0 0",
    color: "yellow",
    accent: "deep",
    delay: "1.2s",
    duration: "5.8s",
  },
  {
    side: "right",
    top: "58%",
    letter: "H",
    rotate: 65,
    shiftX: 14,
    shiftY: 4,
    trail: "M -62 -4 C -46 -10, -28 -6, 0 0",
    color: "green",
    accent: "deep",
    delay: "0.5s",
    duration: "5.6s",
  },
  {
    side: "left",
    top: "62%",
    letter: "B",
    rotate: 42,
    shiftX: 8,
    shiftY: -8,
    trail: "M -50 10 C -36 4, -18 -2, 0 0",
    color: "green",
    accent: "sky",
    delay: "0.6s",
    duration: "6.4s",
  },
  {
    side: "left",
    top: "76%",
    letter: "G",
    rotate: 51,
    shiftX: 6,
    shiftY: 4,
    trail: "M -52 6 C -38 0, -20 -6, 0 0",
    color: "sky",
    accent: "green",
    delay: "1.05s",
    duration: "6.0s",
  },
  {
    side: "right",
    top: "74%",
    letter: "D",
    rotate: 73,
    shiftX: 6,
    shiftY: 6,
    trail: "M -58 -6 C -42 -12, -24 -4, 0 0",
    color: "sky",
    accent: "green",
    delay: "1.6s",
    duration: "5.4s",
  },
  {
    side: "right",
    top: "66%",
    letter: "U",
    rotate: 88,
    shiftX: 12,
    shiftY: -14,
    trail: "M -64 8 C -48 2, -30 -4, 0 0",
    color: "yellow",
    accent: "coral",
    delay: "0.9s",
    duration: "5.9s",
  },
  {
    side: "left",
    top: "88%",
    letter: "S",
    rotate: 58,
    shiftX: 2,
    shiftY: 10,
    trail: "M -46 -6 C -32 -12, -14 -4, 0 0",
    color: "coral",
    accent: "sky",
    delay: "1.4s",
    duration: "6.3s",
  },
  {
    side: "right",
    top: "86%",
    letter: "O",
    rotate: 46,
    shiftX: 4,
    shiftY: -6,
    trail: "M -56 8 C -42 2, -24 -4, 0 0",
    color: "sky",
    accent: "coral",
    delay: "1.8s",
    duration: "6.1s",
  },
  {
    side: "right",
    top: "93%",
    letter: "W",
    rotate: 82,
    shiftX: 12,
    shiftY: 8,
    trail: "M -64 4 C -48 -2, -30 -8, 0 0",
    color: "green",
    accent: "deep",
    delay: "0.35s",
    duration: "6.4s",
  },
];

const GUTTER_WIDTH = `max(0px, (100vw - ${CONTAINER_MAX}) / 2)`;

/** Shorter pages compress %-positioned motifs — thin out gutters automatically. */
const SPARSE_PAGE_HEIGHT = 2800;
const SPARSE_FLOWER_CUTOFF = 2000;

function filterSideBySpacing<T extends { top: string }>(
  items: T[],
  pageHeight: number,
  minSpacingPx: number,
): T[] {
  const sorted = [...items].sort(
    (a, b) => parseFloat(a.top) - parseFloat(b.top),
  );

  const kept: T[] = [];
  let lastPx = -Infinity;

  for (const item of sorted) {
    const px = (parseFloat(item.top) / 100) * pageHeight;
    if (kept.length === 0 || px - lastPx >= minSpacingPx) {
      kept.push(item);
      lastPx = px;
    }
  }

  return kept;
}

function GooglyEye({ x, y, pupilDx, pupilDy }: EyeConfig) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="5"
        fill={PLANE_COLORS.white}
        stroke="var(--color-brand-deep)"
        strokeWidth="1.2"
      />
      <circle
        cx={x + pupilDx}
        cy={y + pupilDy}
        r="2.2"
        fill="var(--color-brand-deep)"
      />
    </g>
  );
}

function CartoonyLetter({
  letter,
  color,
  accent,
  animate,
  delay,
  duration,
}: {
  letter: string;
  color: string;
  accent: string;
  animate: boolean;
  delay: string;
  duration: string;
}) {
  const eyes = LETTER_EYES[letter] ?? [
    { x: -6, y: -14, pupilDx: 1, pupilDy: 0 },
    { x: 8, y: -12, pupilDx: -1, pupilDy: 1 },
  ];

  return (
    <g
      className={cn(animate && "motif-plane-float")}
      style={{ animationDelay: delay, animationDuration: duration }}
    >
      <circle cx="0" cy="0" r="3" fill={color} opacity="0.45" />

      <ellipse cx="2" cy="6" rx="24" ry="22" fill={accent} opacity="0.2" />

      <text
        x="0"
        y="10"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-display)"
        fontSize="44"
        fontWeight="800"
        fill={color}
        stroke="var(--color-brand-deep)"
        strokeWidth="2.5"
        paintOrder="stroke fill"
      >
        {letter}
      </text>

      {eyes.map((eye, index) => (
        <GooglyEye key={index} {...eye} />
      ))}
    </g>
  );
}

function LetterWithTrail({
  motif,
  reduceMotion,
}: {
  motif: MotifConfig;
  reduceMotion: boolean;
}) {
  const isRight = motif.side === "right";
  const motifOrigin = isRight ? "right center" : "left center";
  const positionStyle = isRight
    ? {
        right: `calc(0.5rem + ${motif.shiftX * 0.45}px + 10cqw)`,
      }
    : {
        left: `calc(0.25rem + ${motif.shiftX}px)`,
      };

  return (
    <div
      className="motif-letter absolute"
      style={{
        top: `calc(${motif.top} + ${motif.shiftY}px)`,
        ...positionStyle,
        transform: "translateY(-50%)",
      }}
    >
      <div
        className="motif-letter-scale"
        style={{ transformOrigin: motifOrigin }}
      >
        <div
          style={{
            transform: `rotate(${isRight ? -motif.rotate : motif.rotate}deg)`,
            transformOrigin: motifOrigin,
          }}
        >
          <svg
            width="110"
            height="72"
            viewBox="-75 -38 55 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
            aria-hidden="true"
          >
            <path
              d={motif.trail}
              transform={isRight ? "scale(-1, 1)" : undefined}
              stroke="var(--color-brand-deep)"
              strokeOpacity="0.35"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 7"
              fill="none"
            />

            <CartoonyLetter
              letter={motif.letter}
              color={PLANE_COLORS[motif.color]}
              accent={PLANE_COLORS[motif.accent]}
              animate={!reduceMotion}
              delay={motif.delay}
              duration={motif.duration}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ScrollMotif({ density = "auto" }: { density?: "auto" | "sparse" }) {
  const motifRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const main = motifRef.current?.closest("main");
    if (!main) return;

    const updateHeight = () => setPageHeight(main.offsetHeight);

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(main);
    updateHeight();

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    function handleMotionChange() {
      setReduceMotion(mediaQuery.matches);
    }

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  const forceSparse = density === "sparse";
  const isSparse =
    forceSparse || (pageHeight > 0 && pageHeight < SPARSE_PAGE_HEIGHT);
  const showFlowers =
    forceSparse || !isSparse || pageHeight >= SPARSE_FLOWER_CUTOFF;
  const letterSpacing = forceSparse ? 320 : isSparse ? 260 : 0;
  const flowerSpacing = forceSparse
    ? pageHeight > 0 && pageHeight < 1600
      ? 380
      : 300
    : isSparse
      ? 320
      : 0;

  const leftMotifs = filterSideBySpacing(
    MOTIFS.filter((motif) => motif.side === "left"),
    pageHeight,
    letterSpacing,
  );
  const rightMotifs = filterSideBySpacing(
    MOTIFS.filter((motif) => motif.side === "right"),
    pageHeight,
    letterSpacing,
  );
  const leftFlowers = showFlowers
    ? filterSideBySpacing(
        FLOWER_MOTIFS.filter((flower) => flower.side === "left"),
        pageHeight,
        flowerSpacing,
      )
    : [];
  const rightFlowers = showFlowers
    ? filterSideBySpacing(
        FLOWER_MOTIFS.filter((flower) => flower.side === "right"),
        pageHeight,
        flowerSpacing,
      )
    : [];

  return (
    <div
      ref={motifRef}
      className="pointer-events-none absolute inset-x-0 top-0 z-[1]"
      style={{ height: pageHeight || "100%" }}
      aria-hidden="true"
    >
      <div
        className="motif-gutter absolute top-0 bottom-0 left-0 hidden overflow-hidden xl:block"
        style={{ width: GUTTER_WIDTH }}
      >
        {leftMotifs.map((motif) => (
          <LetterWithTrail
            key={`${motif.letter}-${motif.top}`}
            motif={motif}
            reduceMotion={reduceMotion}
          />
        ))}
        {leftFlowers.map((flower) => (
          <GutterFlower
            key={`flower-${flower.variant}-${flower.top}`}
            flower={flower}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      <div
        className="motif-gutter absolute top-0 bottom-0 right-0 hidden overflow-hidden xl:block"
        style={{ width: GUTTER_WIDTH }}
      >
        {rightMotifs.map((motif) => (
          <LetterWithTrail
            key={`${motif.letter}-${motif.top}`}
            motif={motif}
            reduceMotion={reduceMotion}
          />
        ))}
        {rightFlowers.map((flower) => (
          <GutterFlower
            key={`flower-${flower.variant}-${flower.top}`}
            flower={flower}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </div>
  );
}
