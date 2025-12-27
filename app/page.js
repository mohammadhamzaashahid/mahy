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
    translations("Gallery.Item5")
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <FloatingMenu floatingMenuItems={floatingMenuItems} />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <section id="about">
        <DesignProcessContainer />
      </section>

      <section id="gallery">
        <Gallery galleryItems={galleryItems} />
      </section>

      <KeyStatsSection />

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="enterprise">
        <EnterprisePinnedContainer />
        {/* <PinnedScrollSection /> */}
        {/* <PinnedSection /> */}
      </section>

      <section id="after-sales">
        <BusinessStepsContainer />
      </section>
      <section id="why-us">
        <WhyUsContainer />
      </section>
    </main>
  );
}
