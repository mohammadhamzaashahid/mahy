
import Navbar from "@/components/Layout/Navbar.jsx";
import SectionNavigator from "@/components/Navigator/SectionNavigator.jsx";
import BusinessSteps from "@/components/UI/BusinessSteps";
import DesignProcess from "@/components/UI/DesignProcess";
import HeroCarousel from "@/components/UI/HeroCarousel.jsx";


export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "vehicles", label: "Vehicles" },
  { id: "after-sales", label: "After Sales" },
  { id: "contact", label: "Contact" },
  { id: "careers", label: "Careers" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/1.jpeg',
    title: "We are innovation. We are technology.",
    subtitle: "We want to be the leading company by innovation, expanding our businesses by diversification & geographical growth exceeding all stakeholders expectations.",
    cta: { label: "Consult With Us" },
  },
  {
    id: 2,
    image: "/2.jpeg",
    title: "Design that inspires confidence",
    subtitle: "Advanced engineering for every journey.",
    cta: { label: "Explore Models" },
  },
  {
    id: 3,
    image: "/3.jpeg",
    title: "Performance redefined",
    subtitle: "Precision meets innovation.",
    cta: { label: "Learn More" },
  },
];

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <SectionNavigator sections={SECTIONS} />
      <div id="home">
        <HeroCarousel slides={HERO_SLIDES} />
      </div>
      <DesignProcess />
      <BusinessSteps />
    </main>
  );
}
