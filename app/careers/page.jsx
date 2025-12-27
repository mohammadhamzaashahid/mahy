import Breadcrumb from "@/components/UI/Breadcrumb";
import CareersShowcaseSection from "@/components/UI/careers/CareersShowcaseSection";
import FeaturedDepartments from "@/components/UI/careers/FeaturedDepartments";
import JoinUs from "@/components/UI/careers/JoinUs";
import PageHeading from "@/components/UI/PageHeading";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

async function Careers() {
  const t = await getTranslations("CareersPage");
  const locale = await getLocale();

  const heading = {
    title: t("Heading"),
    description: t("Description"),
    image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1766132761/careers_tkbmhq.avif",
  };
  const departments = [
    { title: t("Featured1"), description: t("Description1"), image: "/gallery/gallery-1.jpg" },
    { title: t("Featured2"), description: t("Description2"), image: "/gallery/gallery-2.jpg" },
    { title: t("Featured3"), description: t("Description3"), image: "/gallery/gallery-3.jpg" },
    { title: t("Featured4"), description: t("Description4"), image: "/gallery/gallery-4.jpg" },
  ];

  return (
    <main>
      <PageHeading
        title={heading.title}
        description={heading.description}
        image={heading.image}
      />
      <Breadcrumb segments={[{ label: t("Page"), href: "/careers" }]} locale={locale} />
      <CareersShowcaseSection
        title={t("ShowcaseTitle")}
        imageUrl={"https://res.cloudinary.com/db3fd1qah/image/upload/v1766132766/OMODA_JAECOO_expands_UAE_presence_with_MAHY_Khoory_Automotive_as_the_____imgupscaler.ai_Sharpener_4K_ofh9sq.png"}
        imageAlt="MAHY Life"
      />
      <FeaturedDepartments title={t("FeaturedTitle")} departments={departments} cta={t("Cta")} />
      <JoinUs title={t("JoinUs")} text={t("JoinUsText")} cta={t("JoinCta")} />
    </main>
  );
}

export default Careers;
