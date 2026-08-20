import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_IMAGES } from "@/data/site-images";

export function IntroSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <div className="grid items-center gap-6 lg:grid-cols-5 lg:gap-12">
          <div className="overflow-hidden rounded-2xl shadow-card lg:col-span-3">
            <Image
              src={SITE_IMAGES.classroomNotebook.src}
              alt={SITE_IMAGES.classroomNotebook.alt}
              width={SITE_IMAGES.classroomNotebook.width ?? 1600}
              height={SITE_IMAGES.classroomNotebook.height ?? 900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="lg:col-span-2">
            <SectionHeading
              title="Welcome to Little Buds"
              description="At Little Buds, we see preschool as more than preparation for the next class. It is where children begin to discover how they learn, interact and make sense of the world around them. Through a mix of guided learning, play and hands-on experiences, we give children the space to explore, build confidence and develop at their own pace."
            />
            <div className="mt-4 flex justify-center lg:mt-8 lg:justify-start">
              <ButtonLink href="/about" variant="primary">
                Learn More About Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
