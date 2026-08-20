import type { ComponentType } from "react";

import { cn } from "@/lib/utils";

const FLOWER_COLORS = {
  sky: "var(--color-brand-sky)",
  deep: "var(--color-brand-deep)",
  green: "var(--color-brand-green)",
  yellow: "var(--color-brand-yellow)",
  coral: "var(--color-brand-coral)",
} as const;

export type FlowerVariant =
  | "bloom"
  | "daisy"
  | "bud"
  | "tulip"
  | "sunflower"
  | "clover"
  | "vine";

export interface FlowerConfig {
  side: "left" | "right";
  top: string;
  rotate: number;
  shiftX: number;
  shiftY: number;
  variant: FlowerVariant;
  petalColor: keyof typeof FLOWER_COLORS;
  centerColor: keyof typeof FLOWER_COLORS;
  scale: number;
  delay: string;
  duration: string;
}

/** Scattered in gutter gaps between letter motifs. */
export const FLOWER_MOTIFS: FlowerConfig[] = [
  {
    side: "left",
    top: "6%",
    rotate: -14,
    shiftX: 6,
    shiftY: 2,
    variant: "clover",
    petalColor: "green",
    centerColor: "yellow",
    scale: 0.92,
    delay: "0.1s",
    duration: "5.9s",
  },
  {
    side: "right",
    top: "5%",
    rotate: 18,
    shiftX: 4,
    shiftY: -3,
    variant: "sunflower",
    petalColor: "yellow",
    centerColor: "coral",
    scale: 0.88,
    delay: "1.2s",
    duration: "6.1s",
  },
  {
    side: "right",
    top: "12%",
    rotate: 22,
    shiftX: 10,
    shiftY: 4,
    variant: "daisy",
    petalColor: "yellow",
    centerColor: "coral",
    scale: 0.85,
    delay: "0.9s",
    duration: "5.8s",
  },
  {
    side: "left",
    top: "15%",
    rotate: 26,
    shiftX: 10,
    shiftY: -4,
    variant: "tulip",
    petalColor: "coral",
    centerColor: "green",
    scale: 0.9,
    delay: "0.55s",
    duration: "6.3s",
  },
  {
    side: "right",
    top: "19%",
    rotate: -20,
    shiftX: 8,
    shiftY: 6,
    variant: "vine",
    petalColor: "green",
    centerColor: "sky",
    scale: 0.95,
    delay: "1.4s",
    duration: "5.7s",
  },
  {
    side: "left",
    top: "27%",
    rotate: -10,
    shiftX: 14,
    shiftY: 0,
    variant: "bud",
    petalColor: "green",
    centerColor: "yellow",
    scale: 0.87,
    delay: "0.35s",
    duration: "6.2s",
  },
  {
    side: "left",
    top: "30%",
    rotate: -18,
    shiftX: 18,
    shiftY: 0,
    variant: "bloom",
    petalColor: "coral",
    centerColor: "yellow",
    scale: 0.9,
    delay: "0.15s",
    duration: "6.2s",
  },
  {
    side: "right",
    top: "33%",
    rotate: -12,
    shiftX: 14,
    shiftY: -6,
    variant: "clover",
    petalColor: "green",
    centerColor: "sky",
    scale: 0.95,
    delay: "0.4s",
    duration: "6.4s",
  },
  {
    side: "left",
    top: "40%",
    rotate: 16,
    shiftX: 4,
    shiftY: 6,
    variant: "sunflower",
    petalColor: "yellow",
    centerColor: "deep",
    scale: 0.82,
    delay: "0.8s",
    duration: "5.6s",
  },
  {
    side: "left",
    top: "44%",
    rotate: 14,
    shiftX: 8,
    shiftY: 8,
    variant: "daisy",
    petalColor: "sky",
    centerColor: "yellow",
    scale: 0.8,
    delay: "1.1s",
    duration: "5.6s",
  },
  {
    side: "right",
    top: "42%",
    rotate: -8,
    shiftX: 6,
    shiftY: -8,
    variant: "tulip",
    petalColor: "sky",
    centerColor: "yellow",
    scale: 0.93,
    delay: "0.65s",
    duration: "6s",
  },
  {
    side: "right",
    top: "52%",
    rotate: 28,
    shiftX: 6,
    shiftY: 0,
    variant: "bloom",
    petalColor: "green",
    centerColor: "yellow",
    scale: 0.88,
    delay: "0.6s",
    duration: "6.1s",
  },
  {
    side: "left",
    top: "55%",
    rotate: -22,
    shiftX: 12,
    shiftY: -6,
    variant: "vine",
    petalColor: "green",
    centerColor: "coral",
    scale: 0.9,
    delay: "1.55s",
    duration: "5.8s",
  },
  {
    side: "right",
    top: "61%",
    rotate: 12,
    shiftX: 10,
    shiftY: 4,
    variant: "bud",
    petalColor: "green",
    centerColor: "coral",
    scale: 0.86,
    delay: "0.45s",
    duration: "6.5s",
  },
  {
    side: "left",
    top: "69%",
    rotate: -24,
    shiftX: 16,
    shiftY: -4,
    variant: "tulip",
    petalColor: "yellow",
    centerColor: "coral",
    scale: 0.92,
    delay: "1.3s",
    duration: "5.9s",
  },
  {
    side: "right",
    top: "70%",
    rotate: -30,
    shiftX: 8,
    shiftY: -10,
    variant: "daisy",
    petalColor: "coral",
    centerColor: "sky",
    scale: 0.84,
    delay: "1s",
    duration: "6.2s",
  },
  {
    side: "left",
    top: "76%",
    rotate: 8,
    shiftX: 2,
    shiftY: 8,
    variant: "clover",
    petalColor: "green",
    centerColor: "yellow",
    scale: 0.88,
    delay: "0.25s",
    duration: "6.4s",
  },
  {
    side: "right",
    top: "80%",
    rotate: -16,
    shiftX: 12,
    shiftY: 6,
    variant: "sunflower",
    petalColor: "yellow",
    centerColor: "coral",
    scale: 0.82,
    delay: "0.25s",
    duration: "6.3s",
  },
  {
    side: "left",
    top: "82%",
    rotate: 20,
    shiftX: 4,
    shiftY: -8,
    variant: "bloom",
    petalColor: "coral",
    centerColor: "sky",
    scale: 0.86,
    delay: "0.75s",
    duration: "5.7s",
  },
  {
    side: "right",
    top: "84%",
    rotate: 6,
    shiftX: 4,
    shiftY: 0,
    variant: "vine",
    petalColor: "green",
    centerColor: "yellow",
    scale: 0.91,
    delay: "1.7s",
    duration: "5.9s",
  },
  {
    side: "left",
    top: "91%",
    rotate: -12,
    shiftX: 10,
    shiftY: 4,
    variant: "bud",
    petalColor: "green",
    centerColor: "yellow",
    scale: 0.9,
    delay: "0.5s",
    duration: "6.1s",
  },
  {
    side: "right",
    top: "90%",
    rotate: 10,
    shiftX: 8,
    shiftY: -2,
    variant: "tulip",
    petalColor: "coral",
    centerColor: "green",
    scale: 0.78,
    delay: "1.5s",
    duration: "6s",
  },
  {
    side: "right",
    top: "96%",
    rotate: -18,
    shiftX: 6,
    shiftY: 6,
    variant: "clover",
    petalColor: "green",
    centerColor: "coral",
    scale: 0.85,
    delay: "0.95s",
    duration: "6.3s",
  },
];

const STROKE = "var(--color-brand-deep)";

function BloomFlower({
  petalColor,
  centerColor,
}: {
  petalColor: string;
  centerColor: string;
}) {
  const petalPath =
    "M 0 -15 C 5 -13, 7 -5, 0 1 C -7 -5, -5 -13, 0 -15 Z";

  return (
    <g>
      {[0, 72, 144, 216, 288].map((angle) => (
        <path
          key={angle}
          d={petalPath}
          fill={petalColor}
          stroke={STROKE}
          strokeWidth="1.6"
          strokeLinejoin="round"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle
        cx="0"
        cy="0"
        r="4.5"
        fill={centerColor}
        stroke={STROKE}
        strokeWidth="1.4"
      />
      <path
        d="M 0 5 Q 1 14 0 22"
        stroke={FLOWER_COLORS.green}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 0 12 Q 8 10 10 16 Q 4 15 0 12"
        fill={FLOWER_COLORS.green}
        opacity="0.55"
        stroke={STROKE}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </g>
  );
}

function DaisyFlower({
  petalColor,
  centerColor,
}: {
  petalColor: string;
  centerColor: string;
}) {
  const petalPath = "M 0 -12 C 2 -11, 3 -4, 0 0 C -3 -4, -2 -11, 0 -12 Z";

  return (
    <g>
      {Array.from({ length: 8 }, (_, index) => index * 45).map((angle) => (
        <path
          key={angle}
          d={petalPath}
          fill={petalColor}
          stroke={STROKE}
          strokeWidth="1.4"
          strokeLinejoin="round"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle
        cx="0"
        cy="0"
        r="3.5"
        fill={centerColor}
        stroke={STROKE}
        strokeWidth="1.3"
      />
      <path
        d="M 0 4 L 0 18"
        stroke={FLOWER_COLORS.green}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse
        cx="-7"
        cy="11"
        rx="5"
        ry="2.5"
        fill={FLOWER_COLORS.green}
        opacity="0.5"
        transform="rotate(-30 -7 11)"
        stroke={STROKE}
        strokeWidth="0.8"
      />
    </g>
  );
}

function BudFlower({
  petalColor,
  centerColor,
}: {
  petalColor: string;
  centerColor: string;
}) {
  return (
    <g>
      <path
        d="M 0 6 Q 1 16 0 26"
        stroke={petalColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 0 14 Q -9 12 -10 18 Q -3 17 0 14"
        fill={petalColor}
        opacity="0.6"
        stroke={STROKE}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M 0 -2 C -6 -4, -7 4, 0 8 C 7 4, 6 -4, 0 -2 Z"
        fill={centerColor}
        stroke={STROKE}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M 0 -2 C -3 -8, 3 -8, 0 -2"
        fill={petalColor}
        opacity="0.35"
        stroke={STROKE}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </g>
  );
}

function TulipFlower({
  petalColor,
  centerColor,
}: {
  petalColor: string;
  centerColor: string;
}) {
  return (
    <g>
      <path
        d="M -9 -2 C -10 -14, -2 -18, 0 -10 C 2 -18, 10 -14, 9 -2 C 6 4, -6 4, -9 -2 Z"
        fill={petalColor}
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M -5 -2 C -4 -12, 0 -14, 0 -8 C 0 -14, 4 -12, 5 -2 C 3 2, -3 2, -5 -2 Z"
        fill={centerColor}
        opacity="0.45"
        stroke={STROKE}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M 0 4 Q 1 14 0 24"
        stroke={FLOWER_COLORS.green}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 0 14 Q 9 12 11 18"
        fill="none"
        stroke={FLOWER_COLORS.green}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </g>
  );
}

function SunflowerFlower({
  petalColor,
  centerColor,
}: {
  petalColor: string;
  centerColor: string;
}) {
  const petalPath = "M 0 -10 C 1 -9, 2 -3, 0 0 C -2 -3, -1 -9, 0 -10 Z";

  return (
    <g>
      {Array.from({ length: 12 }, (_, index) => index * 30).map((angle) => (
        <path
          key={angle}
          d={petalPath}
          fill={petalColor}
          stroke={STROKE}
          strokeWidth="1.2"
          strokeLinejoin="round"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle
        cx="0"
        cy="0"
        r="5"
        fill={centerColor}
        stroke={STROKE}
        strokeWidth="1.4"
      />
      <circle cx="-1.5" cy="-1" r="0.8" fill={STROKE} opacity="0.25" />
      <circle cx="2" cy="1.5" r="0.7" fill={STROKE} opacity="0.2" />
      <path
        d="M 0 5 L 0 20"
        stroke={FLOWER_COLORS.green}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}

function CloverFlower({
  petalColor,
  centerColor,
}: {
  petalColor: string;
  centerColor: string;
}) {
  const leafPath = "M 0 -8 C 4 -10, 8 -4, 0 2 C -8 -4, -4 -10, 0 -8 Z";

  return (
    <g>
      {[0, 120, 240].map((angle) => (
        <path
          key={angle}
          d={leafPath}
          fill={petalColor}
          stroke={STROKE}
          strokeWidth="1.4"
          strokeLinejoin="round"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle
        cx="0"
        cy="0"
        r="2.5"
        fill={centerColor}
        stroke={STROKE}
        strokeWidth="1.1"
      />
      <path
        d="M 0 2 Q -1 12 0 18"
        stroke={FLOWER_COLORS.green}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function VineFlower({
  petalColor,
  centerColor,
}: {
  petalColor: string;
  centerColor: string;
}) {
  const miniPetal = "M 0 -4 C 1 -3, 1 -1, 0 0 C -1 -1, -1 -3, 0 -4 Z";

  return (
    <g>
      <path
        d="M 0 20 Q -6 10, -2 0 Q 4 -8, 0 -14 Q -4 -6, 2 2 Q 8 12, 0 20"
        fill="none"
        stroke={petalColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g transform="translate(0, -14)">
        {[0, 120, 240].map((angle) => (
          <path
            key={angle}
            d={miniPetal}
            fill={centerColor}
            stroke={STROKE}
            strokeWidth="1"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
      <g transform="translate(-2, 0)">
        {[0, 90, 180, 270].map((angle) => (
          <path
            key={angle}
            d={miniPetal}
            fill={centerColor}
            stroke={STROKE}
            strokeWidth="1"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
      <ellipse
        cx="8"
        cy="8"
        rx="4"
        ry="2"
        fill={petalColor}
        opacity="0.5"
        transform="rotate(35 8 8)"
        stroke={STROKE}
        strokeWidth="0.8"
      />
    </g>
  );
}

const FLOWER_COMPONENTS: Record<
  FlowerVariant,
  ComponentType<{ petalColor: string; centerColor: string }>
> = {
  bloom: BloomFlower,
  daisy: DaisyFlower,
  bud: BudFlower,
  tulip: TulipFlower,
  sunflower: SunflowerFlower,
  clover: CloverFlower,
  vine: VineFlower,
};

function DoodleFlowerSvg({
  variant,
  petalColor,
  centerColor,
  animate,
  delay,
  duration,
}: {
  variant: FlowerVariant;
  petalColor: string;
  centerColor: string;
  animate: boolean;
  delay: string;
  duration: string;
}) {
  const Flower = FLOWER_COMPONENTS[variant];

  return (
    <g
      className={cn(animate && "motif-plane-float")}
      style={{ animationDelay: delay, animationDuration: duration }}
    >
      <Flower petalColor={petalColor} centerColor={centerColor} />
    </g>
  );
}

export function GutterFlower({
  flower,
  reduceMotion,
}: {
  flower: FlowerConfig;
  reduceMotion: boolean;
}) {
  const isRight = flower.side === "right";
  const innerInset = `calc(0.25rem + ${flower.shiftX}px)`;
  const motifOrigin = isRight ? "left center" : "right center";

  return (
    <div
      className="motif-letter absolute"
      style={{
        top: `calc(${flower.top} + ${flower.shiftY}px)`,
        ...(isRight ? { left: innerInset } : { right: innerInset }),
        transform: "translateY(-50%)",
      }}
    >
      <div
        className="motif-flower-scale"
        style={{ transformOrigin: motifOrigin }}
      >
        <div
          style={{
            transform: `rotate(${isRight ? -flower.rotate : flower.rotate}deg) scale(${flower.scale})`,
            transformOrigin: motifOrigin,
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="-20 -22 40 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible opacity-90"
            aria-hidden="true"
          >
            <DoodleFlowerSvg
              variant={flower.variant}
              petalColor={FLOWER_COLORS[flower.petalColor]}
              centerColor={FLOWER_COLORS[flower.centerColor]}
              animate={!reduceMotion}
              delay={flower.delay}
              duration={flower.duration}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
