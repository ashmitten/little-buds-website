import { ProgrammeCard } from "@/components/programme/programme-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { programmes } from "@/data/programmes";

export function ProgrammesSection() {
  return (
    <section className="section-padding bg-white" id="programmes">
      <div className="container-site max-w-[96rem] px-4 lg:px-6 2xl:max-w-[100rem]">
        <SectionHeading
          title="Our Programmes"
          description="Little Buds offers age-appropriate programmes designed to support young children's learning and development at every stage."
          align="center"
          className="mx-auto"
        />

        <div className="mt-6 grid grid-cols-2 gap-2 lg:mt-12 lg:grid-cols-4 lg:gap-3">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.id} programme={programme} size="lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
