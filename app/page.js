
import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection";
import PartnersSection from "@/components/Layout/PartnersSection";
import BusinessSteps from "@/components/UI/home/BusinessSteps";
import DesignProcess from "@/components/UI/home/DesignProcess";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import Gallery from "@/components/UI/home/Gallery";
import WhyUs from "@/components/UI/home/WhyUs";
import KeyStatsSection from "@/components/UI/KeyStatsSection";
import { getTranslations } from 'next-intl/server';


export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "partners", label: "Partners" },
  { id: "enterprise", label: "Enterprise" },
  { id: "after-sales", label: "After Sales" },
  { id: "useful-links", label: "Important Links" },
  { id: "contact", label: "Contact" },
  { id: "careers", label: "Careers" },
];



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
      {/* <SectionNavigator sections={SECTIONS} /> */}
      <FloatingMenu />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <section id="about">
        <DesignProcess />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <KeyStatsSection />

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="enterprise">
        <EnterprisePinnedSection />
        {/* <PinnedScrollSection /> */}
        {/* <PinnedSection /> */}
      </section>

      <section id="after-sales">
        <BusinessSteps />
      </section>

      <section id="why-us">
        <WhyUs />
      </section>
    </main>
  );
}
