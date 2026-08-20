import { ProgrammeDetailCard } from "@/components/programme/programme-detail-card";
import { programmes } from "@/data/programmes";

export function ProgrammesList() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site space-y-10 md:space-y-14">
        {programmes.map((programme, index) => (
          <ProgrammeDetailCard
            key={programme.id}
            programme={programme}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}
