import React from "react";

import { getLocale, getTranslations } from "next-intl/server";
import AboutUsSection from "@/components/UI/about-us/mission-vision-values/AboutUsSection";
import MissionVisionSection from "@/components/UI/about-us/mission-vision-values/MissionVisionSection";
import AnimatedLines from "@/components/UI/AnimatedLines";

export const metadata = {
  title: "Mission, Vision & Values",
  description:
    "Discover the mission, vision and core values that guide M.A.H.Y. Khoory Group's operations and long-term strategy across the UAE and beyond.",
  alternates: { canonical: "/about-us/mission-vision-values" },
};

async function MissionVisionValues() {

  return (
    <main className="bg-gray-50">
     <AboutUsSection image="/assets/young-company-colleagues-sitting-row-talking-each-other.jpg"/>
     <MissionVisionSection image="/assets/designer-concept_axdjf2.jpg"/>
    </main>
  );
}

export default MissionVisionValues;
