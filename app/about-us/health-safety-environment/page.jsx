import DiscoverSection from "@/components/UI/about-us/health-safety/DiscoverSection";
import InfoNavigationSection from "@/components/UI/about-us/health-safety/InfoNavigationSection";
import GovernanceContent from "@/components/UI/about-us/leadership-and-management/GovernanceContent";
import GovernanceTabs from "@/components/UI/about-us/leadership-and-management/GovernanceTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Health, Safety & Environment",
  description:
    "MAHY Khoory Group's approach to health, safety and environmental management, supporting safe operations and environmental responsibility across all Group companies.",
  alternates: { canonical: "/about-us/health-safety-environment" },
};

export default function GovernancePage() {
  return (
    <main className="bg-white">
      <SubPageHeading
        title="Health Safety & Environment"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="/gallery/ADGM.png"
        align="center"
        fullHeight
      />
      <DiscoverSection
        eyebrow="Discover More"
        title="MAHY Khoory Center"
        description="Find out more about MAHY events, read the latest media announcements and publications, or access our video and image gallery via the MAHY Media Centre."
        image="/assets/about-us/health-safety-environment/woman-reading-diagrams-tablet-device-helped-by-specialist.jpg_epm3nu.jpg"
      />
      <InfoNavigationSection />
    </main>
  );
}
