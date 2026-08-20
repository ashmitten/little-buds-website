import { SectionHeading } from "@/components/ui/section-heading";
import { credibilityItems } from "@/data/credibility";

export function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <SectionHeading
          title="A Preschool You Can Trust"
          description="Choosing a preschool is a big decision. We want parents to know what happens behind the classroom door — how we teach, what children learn and the kind of environment we create for them."
          align="center"
          className="mx-auto"
        />

        <div className="mt-6 grid grid-cols-2 gap-2 lg:mt-10 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
          {credibilityItems.map((item) => (
            <article
              key={item.id}
              className={[
                item.highlight
                  ? "rounded-xl border-2 border-brand-green/25 bg-brand-green/5 p-4 text-center shadow-soft lg:p-8 lg:text-left"
                  : "rounded-xl border border-primary/10 bg-white p-3 text-center lg:p-6 lg:text-left",
                item.gridClass,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h3
                className={[
                  "font-display font-bold uppercase tracking-wide text-brand-green",
                  item.highlight ? "text-xs lg:text-lg" : "text-[0.65rem] lg:text-sm",
                ].join(" ")}
              >
                {item.label}
              </h3>
              <p
                className={[
                  "text-muted",
                  item.highlight
                    ? "mt-2 text-sm leading-snug lg:mt-4 lg:text-lg lg:leading-relaxed"
                    : "mt-1 text-sm leading-relaxed lg:mt-2 lg:text-base",
                ].join(" ")}
              >
                {item.emphasis ? (
                  <>
                    <span
                      className={[
                        "font-display font-bold leading-none text-brand-green",
                        item.highlight
                          ? "text-2xl lg:text-6xl"
                          : "text-3xl",
                      ].join(" ")}
                    >
                      {item.emphasis}
                    </span>
                    <span> {item.value}</span>
                  </>
                ) : (
                  item.value
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
