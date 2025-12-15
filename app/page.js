
import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection";
import Navbar from "@/components/Layout/Navbar.jsx";
import PartnersSection from "@/components/Layout/PartnersSection";
import SectionNavigator from "@/components/Navigator/SectionNavigator.jsx";
import BusinessSteps from "@/components/UI/home/BusinessSteps";
import DesignProcess from "@/components/UI/home/DesignProcess";
import HeroCarousel from "@/components/UI/HeroCarousel.jsx";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import PinnedSection from "@/components/UI/PinnedSection";
import Gallery from "@/components/UI/home/Gallery";
import Footer from "@/components/Layout/Footer";
import WhyUs from "@/components/UI/home/WhyUs";


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

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/1.jpeg',
    title: "M.A.H.Y. KHOORY & CO., LLC",
    subtitle: "As one of the leading business hubs in the region we set an example for best practice in trade, design and service. We are a diversified group of companies with eight independent business units with our corporate office in Dubai.",
    cta: { label: "Our Business Groups" },
  },
  {
    id: 2,
    image: "/2.jpeg",
    title: "M.A.H.Y. KHOORY ENGINEERING",
    subtitle: "Designing and installing Pumping Systems\nOur engineering division has been designing and installing pumping systems since 1935.",
    cta: { label: "Learn More" },
    otherCta: { label: "Our Products" },
  },
  {
    id: 3,
    image: "/3.jpeg",
    title: "Innovation in Research & Trading",
    subtitle: "Empowering The GCC Skyline.",
    cta: { label: "Products" },
  },
];

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      {/* <SectionNavigator sections={SECTIONS} /> */}
      <FloatingMenu />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={HERO_SLIDES} />
      </div>

      <section id="about">
        <DesignProcess />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="enterprise">
        <EnterprisePinnedSection />
        {/* <PinnedSection /> */}
      </section>

      <section id="after-sales">
        <BusinessSteps />
      </section>

      <section id="why-us">
        <WhyUs />
      </section>

      <section id="useful-links">
        <Footer />
      </section>
    </main>
  );
}
