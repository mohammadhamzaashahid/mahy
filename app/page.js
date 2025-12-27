import PartnersSection from "@/components/Layout/PartnersSection";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import Gallery from "@/components/UI/home/Gallery";
import KeyStatsSection from "@/components/UI/home/KeyStatsSection";
import { getTranslations } from "next-intl/server";
import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import BusinessStepsContainer from "@/components/UI/home/BusinessStepsContainer";
import WhyUsContainer from "@/components/UI/home/WhyUsContainer";
import MissionVisionValuesSection from "@/components/MissionVisionValuesSection";
import SustainabilityPanels from "@/components/SustainabilityPanels";
import NextAdvantagesSection from "@/components/NextAdvantagesSection";

export default async function Home() {
  const translations = await getTranslations("HomePage");

  const slides = [
    {
      title: translations("Hero1Title"),
      subtitle: translations("Hero1Subtitle"),
      cta: { label: translations("Hero1CtaLabel") },
    },
    {
      title: translations("Hero2Title"),
      subtitle: translations("Hero2Subtitle"),
      cta: { label: translations("Hero2CtaLabel") },
      otherCta: { label: translations("Hero2OtherCtaLabel") },
    },
    {
      title: translations("Hero3Title"),
      subtitle: translations("Hero3Subtitle"),
      cta: { label: translations("Hero3CtaLabel") },
    },
  ];

  const items = [
    {
      title: "Green Procurement",
      image: "/al-quba.jpg",
      bullets: [
        "Guided 100 suppliers in completing organizational-level carbon inventory.",
        "Guided 10 suppliers in setting carbon reduction targets and measures.",
      ],
    },
    {
      title: "Green Manufacturing",
      image: "/burj.jpg",
      description:
        "Five major manufacturing bases saved 10.83M kWh electricity with a 4.57% YoY decrease in total industrial electricity consumption.",
    },
    {
      title: "Green Recycling",
      image: "/mosque.JPG",
      bullets: [
        'Establishing a "dual-circulation" model to reduce resource consumption.',
        "Partnered with 89 recycling organizations globally. Reuse 660 tons of metals.",
        "Reuse 70 tons of organic plastics from scrap materials.",
      ],
    },
    {
      title: "Green Logistics",
      image: "/dubai-pano.jpg",
      description:
        "Making reverse logistics processes standardized, intelligent, and efficient to enhance recycling rates.",
    },
  ];

  const items2 = [
    {
      title: "Green Procurement",
      image: "/al-quba.jpg",
      bullets: [
        "Guided 100 suppliers in completing organizational-level carbon inventory.",
        "Guided 10 suppliers in setting carbon reduction targets and measures.",
      ],
    },
    {
      title: "Green Manufacturing",
      image: "/burj.jpg",
      description:
        "Five major manufacturing bases saved 10.83M kWh electricity with a 4.57% YoY decrease in total industrial electricity consumption.",
    },
  ];
  const floatingMenuItems = [
    translations("FloatingMenu.Item1"),
    translations("FloatingMenu.Item2"),
    translations("FloatingMenu.Item3"),
    translations("FloatingMenu.Item4"),
    translations("FloatingMenu.Item5"),
    translations("FloatingMenu.Item6"),
    translations("FloatingMenu.Item7"),
  ];
  const galleryItems = [
    translations("Gallery.Item1"),
    translations("Gallery.Item2"),
    translations("Gallery.Item3"),
    translations("Gallery.Item4"),
    translations("Gallery.Item5"),
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <FloatingMenu floatingMenuItems={floatingMenuItems} />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <NextAdvantagesSection/>

      <section id="about">
        <DesignProcessContainer />
      </section>

      <section id="gallery">
        <Gallery galleryItems={galleryItems} />
      </section>

      <KeyStatsSection />
      <SustainabilityPanels items={items} cols={4} />

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="enterprise">
        <EnterprisePinnedContainer />
        {/* <PinnedScrollSection /> */}
        {/* <PinnedSection /> */}
      </section>

      {/* <div className="px-4 sm:px-6 lg:px-10 py-10"> */}
      {/* </div> */}
      {/* <SustainabilityPanels items={items2} cols={2} /> */}
      <section id="after-sales">
        <BusinessStepsContainer />
      </section>

      <section id="why-us">
        <WhyUsContainer />
      </section>
    </main>
  );
}
