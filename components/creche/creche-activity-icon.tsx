import type { CrecheActivityIcon } from "@/data/creche";

interface CrecheActivityIconProps {
  icon: CrecheActivityIcon;
}

/**
 * Playful filled doodles — same visual language as the site flowers,
 * not generic stroke/corporate icons.
 */
export function CrecheActivityIcon({ icon }: CrecheActivityIconProps) {
  const shared = {
    width: 52,
    height: 52,
    viewBox: "0 0 52 52",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "music":
      return (
        <svg {...shared}>
          <circle cx="16" cy="38" r="7" fill="var(--color-brand-deep)" />
          <circle cx="34" cy="42" r="6" fill="var(--color-brand-sky)" />
          <path
            d="M22 38V14c0-1.2.8-2.3 2-2.6l14-3.2c1.7-.4 3.2.9 3.2 2.6v20"
            stroke="var(--color-brand-deep)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M22 22l17-4"
            stroke="var(--color-brand-sky)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle cx="42" cy="12" r="3" fill="var(--color-brand-yellow)" />
        </svg>
      );
    case "dance":
      return (
        <svg {...shared}>
          <circle cx="27" cy="11" r="5.5" fill="var(--color-brand-coral)" />
          <path
            d="M27 17.5c-4.2 2.2-7 6.4-7.2 11.2-.1 2.2 1.6 3.8 3.6 3.8h7.2c2 0 3.7-1.6 3.6-3.8C34 23.9 31.2 19.7 27 17.5Z"
            fill="var(--color-brand-yellow)"
          />
          <path
            d="M19.5 31.5 12 42"
            stroke="var(--color-brand-deep)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M34.5 31.5 42 41"
            stroke="var(--color-brand-deep)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M22 42c1.6-4 4.2-6.5 5.2-7.2 1.2.8 3.6 3.4 5 7.2"
            stroke="var(--color-brand-coral)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 18c3-1.5 5.5.5 6.5 2"
            stroke="var(--color-brand-sky)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M41 16c-2.8-2-5.5-.4-6.8 1.4"
            stroke="var(--color-brand-sky)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "creative":
      return (
        <svg {...shared}>
          <path
            d="M10 36c0-10 7.5-18 16-18s16 8 16 18H10Z"
            fill="var(--color-brand-yellow)"
          />
          <circle cx="18" cy="30" r="3.2" fill="var(--color-brand-coral)" />
          <circle cx="26" cy="28" r="3.2" fill="var(--color-brand-sky)" />
          <circle cx="34" cy="31" r="3.2" fill="var(--color-brand-green)" />
          <path
            d="M26 18V9"
            stroke="var(--color-brand-deep)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M22 10.5h8"
            stroke="var(--color-brand-deep)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M14 40h24"
            stroke="var(--color-brand-deep)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "tutoring":
      return (
        <svg {...shared}>
          <path
            d="M10 14c0-1.7 1.3-3 3-3h12.5L26 14.5 16 40H13c-1.7 0-3-1.3-3-3V14Z"
            fill="var(--color-brand-green)"
          />
          <path
            d="M42 14c0-1.7-1.3-3-3-3H26.5L26 14.5 36 40h3c1.7 0 3-1.3 3-3V14Z"
            fill="var(--color-brand-sky)"
          />
          <path
            d="M26 14.5V40"
            stroke="var(--color-brand-deep)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M33 22l8-10 3 2-7.5 11-4.2-1.2L33 22Z"
            fill="var(--color-brand-yellow)"
            stroke="var(--color-brand-coral)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
