import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection";
import HoverableColumns from "@/components/HoverableColumns";
import EngProcessSection from "@/components/Services/EngProcessSection";
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import OfferingsSection from "@/components/Services/OfferingsSection";
import ServicesPumping from "@/components/ServicesPumping";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Pumping System Engineering & Technical Services",
  description:
    "Reliable pumping system engineering and technical services from MAHY Khoory Group, delivering optimal performance and long-term efficiency from installation through maintenance.",
  alternates: { canonical: "/services/engineering-technical-services" },
};

function PumpingSystemServicesPage() {
  return (
    <main>
      <SubPageHeading
        title={"Engineering & Technical Services"}
        fullHeight
        description={
          "Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."
        }
        image={"/assets/data-center-admins-monitoring-artificial-intelligence-llm-visualization.jpg_x17h5t.jpg"}
      />
      <FeaturesEngineeringSection />
      <OfferingsSection/>
      {/* <EngProcessSection/> */}


    </main>
  );
}

export default PumpingSystemServicesPage;
