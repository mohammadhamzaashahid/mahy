import CareersShowcaseSection from "@/components/UI/careers/CareersShowcaseSection";
import FeaturedDepartments from "@/components/UI/careers/FeaturedDepartments";
import JoinUs from "@/components/UI/careers/JoinUs";
import PageHeading from "@/components/UI/PageHeading";
import React from "react";

function Careers() {
  const heading = {
    title: "Careers",
    description:
      "Explore exciting opportunities to grow your skills and make a real impact. Join a dynamic workplace that values innovation, teamwork, and long-term growth.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1766132761/careers_tkbmhq.avif",
  };

  return (
    <main>
      <PageHeading
        title={heading.title}
        description={heading.description}
        image={heading.image}
      />

      <CareersShowcaseSection
        title={"Life At MAHY Khoory."}
        imageUrl={
          "https://res.cloudinary.com/db3fd1qah/image/upload/v1766132766/OMODA_JAECOO_expands_UAE_presence_with_MAHY_Khoory_Automotive_as_the_____imgupscaler.ai_Sharpener_4K_ofh9sq.png"
        }
        imageAlt="MAHY Life"
      />
      <FeaturedDepartments />
      <JoinUs />
    </main>
  );
}

export default Careers;
