import { crecheMetrics } from "@/data/creche";

export function CrecheMetrics() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:gap-4">
      {crecheMetrics.map((metric) => (
        <article
          key={metric.id}
          className="rounded-xl border border-primary/10 bg-white p-3 text-center lg:p-6"
        >
          <p className="font-display text-2xl font-bold text-brand-green lg:text-5xl">
            {metric.value}
          </p>
          <h3 className="mt-1 font-display text-[0.65rem] font-bold uppercase tracking-wide text-primary lg:mt-2 lg:text-sm">
            {metric.label}
          </h3>
        </article>
      ))}
    </div>
  );
}
