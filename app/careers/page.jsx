import CareersShowcaseSection from "@/components/UI/careers/CareersShowcaseSection";
import FeaturedDepartments from "@/components/UI/careers/FeaturedDepartments";
import JoinUs from "@/components/UI/careers/JoinUs";
import PageHeading from "@/components/UI/PageHeading";
import { getTranslations } from "next-intl/server";
import React from "react";

async function Careers() {
  const translations = await getTranslations("CareersPage");

  const heading = {
    title: translations("Heading"),
    description: translations("Description"),
    image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1766132761/careers_tkbmhq.avif",
  };
  const departments = [
    { title: translations("Featured1"), description: translations("Description1"), image: "/gallery/gallery-1.jpg" },
    { title: translations("Featured2"), description: translations("Description2"), image: "/gallery/gallery-2.jpg" },
    { title: translations("Featured3"), description: translations("Description3"), image: "/gallery/gallery-3.jpg" },
    { title: translations("Featured4"), description: translations("Description4"), image: "/gallery/gallery-4.jpg" },
  ];

  return (
    <main>
      <PageHeading
        title={heading.title}
        description={heading.description}
        image={heading.image}
      />

      <CareersShowcaseSection
        title={translations("ShowcaseTitle")}
        imageUrl={"https://res.cloudinary.com/db3fd1qah/image/upload/v1766132766/OMODA_JAECOO_expands_UAE_presence_with_MAHY_Khoory_Automotive_as_the_____imgupscaler.ai_Sharpener_4K_ofh9sq.png"}
        imageAlt="MAHY Life"
      />
      <FeaturedDepartments title={translations("FeaturedTitle")} departments={departments} cta={translations("Cta")} />
      <JoinUs title={translations("JoinUs")} text={translations("JoinUsText")} cta={translations("JoinCta")} />
    </main>
  );
}

export default Careers;
