import Image from "next/image";

import { THE_INVESTMENT } from "@/data/why-little-buds";

export function InvestmentSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-site">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="text-center lg:col-span-5 lg:text-left">
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-brand-yellow lg:text-sm">
              What You&apos;re Choosing
            </p>
            <h2 className="mt-2 font-display text-xl font-bold leading-tight lg:mt-3 lg:text-5xl">
              {THE_INVESTMENT.title}
            </h2>
            <div className="mt-3 space-y-6 text-sm leading-relaxed text-white/85 lg:mt-8 lg:text-lg">
              {THE_INVESTMENT.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index > 0 ? "hidden lg:block" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:mt-10 lg:justify-start lg:gap-3">
              {[
                "Confidence",
                "Communication",
                "Independence",
                "Curiosity",
                "Lifelong learning",
              ].map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-brand-yellow/40 bg-brand-yellow px-3 py-1 font-display text-xs font-semibold text-primary shadow-soft lg:px-5 lg:py-2 lg:text-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-elevated lg:col-span-7 lg:rounded-3xl">
            <Image
              src={THE_INVESTMENT.image.src}
              alt={THE_INVESTMENT.image.alt}
              width={THE_INVESTMENT.image.width ?? 800}
              height={THE_INVESTMENT.image.height ?? 1000}
              className="h-auto w-full object-cover"
              style={
                THE_INVESTMENT.image.objectPosition
                  ? { objectPosition: THE_INVESTMENT.image.objectPosition }
                  : undefined
              }
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
