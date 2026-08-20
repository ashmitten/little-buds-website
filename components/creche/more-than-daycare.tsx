import { SectionHeading } from "@/components/ui/section-heading";
import { crecheActivities } from "@/data/creche";
import { cn } from "@/lib/utils";

import { CrecheActivityIcon } from "./creche-activity-icon";

const ACCENT_WELL = {
  sky: "bg-brand-sky/15",
  coral: "bg-brand-coral/10",
  yellow: "bg-brand-yellow/50",
  green: "bg-brand-green/15",
} as const;

export function MoreThanDaycare() {
  return (
    <section className="section-padding bg-brand-green/[0.06]">
      <div className="container-site">
        <SectionHeading
          title="More Than Daycare"
          description="Learning, creativity and fun are part of the day at Little Buds."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-2 lg:mt-12 lg:gap-6">
          {crecheActivities.map((activity) => (
            <article
              key={activity.id}
              className="overflow-hidden rounded-xl bg-white p-3 text-center shadow-soft lg:rounded-2xl lg:p-8 lg:text-left"
            >
              <div
                className={cn(
                  "mx-auto flex h-10 w-10 items-center justify-center rounded-xl lg:mx-0 lg:h-16 lg:w-16 lg:rounded-2xl",
                  ACCENT_WELL[activity.accent],
                )}
              >
                <CrecheActivityIcon icon={activity.icon} />
              </div>
              <h3 className="mt-3 font-display text-sm font-bold text-primary lg:mt-5 lg:text-xl">
                {activity.title}
              </h3>
              <p className="mt-2 text-xs leading-snug text-muted lg:text-base lg:leading-relaxed">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
