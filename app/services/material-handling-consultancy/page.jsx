import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection";
import HoverableColumns from "@/components/HoverableColumns";
import EngProcessSection from "@/components/Services/EngProcessSection";
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import OfferingsSection from "@/components/Services/OfferingsSection";
import ServicesPumping from "@/components/ServicesPumping";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Pumping System Engineering & Technical Services",
  description:
    "Reliable pumping system engineering and technical services from MAHY Khoory Group, delivering optimal performance and long-term efficiency from installation through maintenance.",
  alternates: { canonical: "/services/engineering-technical-services" },
};

function MaterialHandlingConsultancy() {
const processes = [
  {
    id: 1,
    title: "Consulting Agreement",
    description:
      "Consulting Agreement which will allow us to investigate your current setup in detail.",
    icon: "/processes/planning.png",
    leftShift: "-left-8",
    rightShift: "-right-8",
  },
  {
    id: 2,
    title: "Site Review",
    description:
      "After identifying your situation and the key aspects for consideration, we will schedule a comprehensive site review.",
    icon: "/processes/design.png",
    leftShift: "left-12",
    rightShift: "right-12",
  },
  {
    id: 3,
    title: "Analysis Report",
    description:
      "Based on our findings, we prepare a detailed analysis report with practical recommendations for improvement.",
    icon: "/processes/development.png",
    leftShift: "left-17",
    rightShift: "right-17",
  },
  {
    id: 4,
    title: "Implementation",
    description:
      "Implementation commences in accordance with the agreed Consulting Agreement options.",
    icon: "/processes/deployment.png",
    leftShift: "left-12",
    rightShift: "right-12",
  },
  {
    id: 5,
    title: "Project Review",
    description:
      "Project completion, conclusions, and a final review to ensure objectives have been achieved.",
    icon: "/processes/planning.png",
    leftShift: "left-0",
    rightShift: "right-0",
  },
];

  const consultativeApproach = [
    {
      heading: "Handling Materials Assessment",
      description:
        "Evaluate the suitability of your handling materials and identify opportunities for optimization.",
      icon: "📦",
    },
    {
      heading: "Process & Equipment Analysis",
      description:
        "Review material handling processes and equipment to uncover efficiency improvements.",
      icon: "⚙️",
    },
    {
      heading: "Industry & Goods Evaluation",
      description:
        "Assess your industry requirements and the type of goods transported to ensure the right handling solutions.",
      icon: "🚚",
    },
    {
      heading: "Performance Optimization",
      description:
        "Recommend practical improvements that enhance productivity, safety, and operational efficiency.",
      icon: "📈",
    },
  ];
  return (
    <main>
      <SubPageHeading
        title={"Material Handling Consultancy"}
        fullHeight
        description={""}
        image={"/assets/services/material-handling-consultancy/bg.png"}
      />
      <FeaturesEngineeringSection />
      <OfferingsSection
        image={"/assets/services/material-handling-consultancy/potential.png"}
        heading="Consultative Approach Analysis "
        subheading="No-Cure-No-Pay"
        texts={[
          "We investigate and analyze key areas of your packaging and material handling operations on a no-cure-no-pay basis, helping you identify improvement opportunities without upfront risk.",

          "Our consultants evaluate your handling materials, operational processes, equipment, and industry-specific transportation requirements to recommend practical solutions that improve efficiency, reduce costs, and enhance overall performance.",
        ]}
        items={consultativeApproach}
      />
      <WhoWeAre
        invert={true}
        topHeading="Optimization Potential"
        showButton={false}
        image="/assets/services/material-handling-consultancy/potential.png"
        text="Most companies spend on average 3% of their turnover on tertiary packaging & handling materials. PalletBiz can reduce these costs by a minimum of 4%, optimizing your Total Cost of Ownership through our Consultancy Services."
        heading="The hidden opportunity"
      />
      <DesignProcessContainer
        heading={"THE PROCESS"}
        processes={processes}
        image={"/assets/shared/air-condioning-3_aphpe6.png"}
        text1={
          "Engaging PalletBiz, you will find below steps the standard process with a time perspective of no more than 3 months"
        }
      />
    </main>
  );
}

export default MaterialHandlingConsultancy;
