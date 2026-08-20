"use client";

import { useId } from "react";

import { cn } from "@/lib/utils";

/** Hand-drawn card outline in 0–100 coordinate space */
export const DOODLE_PATH =
  "M 5 8 C 4 4, 9 2.5, 14 4 L 42 3 C 48 2, 52 4, 58 3 L 86 4 C 91 2.5, 96 5, 95 10 L 96 42 C 97 48, 95 52, 96 58 L 95 88 C 96 93, 91 96.5, 86 95.5 L 58 96.5 C 52 97.5, 48 95.5, 42 96.5 L 14 95.5 C 9 97, 4 93.5, 5 88 L 4 58 C 3 52, 5 48, 4 42 L 5 12 C 4.5 9, 3 8.5, 5 8 Z";

interface DoodleBorderProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card shaped by a hand-drawn outline — no rectangular box visible.
 */
export function DoodleBorder({ children, className }: DoodleBorderProps) {
  const clipId = useId();

  return (
    <div className={cn("relative flex flex-col", className)}>
      {/* White fill + doodle stroke (defines the visible card edge) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_2px_12px_rgb(9_96_179_/_8%)]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={DOODLE_PATH}
          fill="white"
          stroke="var(--color-brand-deep)"
          strokeOpacity="0.35"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Clip content to the doodle shape */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={DOODLE_PATH} transform="scale(0.01)" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative flex flex-1 flex-col"
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
