import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection";
import PartnersSection from "@/components/Layout/PartnersSection";
import BusinessSteps from "@/components/UI/home/BusinessSteps";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import Gallery from "@/components/UI/home/Gallery";
import WhyUs from "@/components/UI/home/WhyUs";
import KeyStatsSection from "@/components/UI/home/KeyStatsSection";
import { getTranslations } from 'next-intl/server';
import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import BusinessStepsContainer from "@/components/UI/home/BusinessStepsContainer";
import WhyUsContainer from "@/components/UI/home/WhyUsContainer";


export default async function Home() {
  const translations = await getTranslations('HomePage');

  const slides = [
    {
      title: translations('Hero1Title'),
      subtitle: translations('Hero1Subtitle'),
      cta: { label: translations('Hero1CtaLabel') }
    },
    {
      title: translations('Hero2Title'),
      subtitle: translations('Hero2Subtitle'),
      cta: { label: translations('Hero2CtaLabel') },
      otherCta: { label: translations('Hero2OtherCtaLabel') }
    },
    {
      title: translations('Hero3Title'),
      subtitle: translations('Hero3Subtitle'),
      cta: { label: translations('Hero3CtaLabel') }
    }
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <FloatingMenu />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <section id="about">
        <DesignProcessContainer />
      </section>

      <section id="gallery">
        <Gallery />
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
