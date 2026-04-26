import CompaniesSectors from "@/components/CompaniesSectors";
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import React from "react";

function CleanEarthLLCPage() {
  const services = [
    {
      title: "Reusable Industrial Oil Collection",
      text: "Safe collection and recovery of used lubricants and industrial oils for re-refining or approved recycling processes.",
      image: "/gallery/gallery-1.jpg",
    },
    {
      title: "Used Cooking Oil Collection",
      text: "Scheduled pickup services for hotels, restaurants, catering facilities, and commercial kitchens, ensuring responsible handling and recycling of cooking oils.",
      image: "/gallery/gallery-2.jpg",
    },
    {
      title: "Metal and Iron Scrap Recovery",
      text: "Collection, segregation, and supply of ferrous and non-ferrous metal scrap to authorized recycling markets.",
      image: "/gallery/gallery-3.jpg",
    },
    {
      title: "Glass Scrap Collection",
      text: "Handling and transportation of broken and reusable glass for processing into recycled cullet and new glass products.",
      image: "/gallery/gallery-4.jpg",
    }
  ];
  const cards = [
    {
      title: "Programs",
      text: "Secure and scheduled waste collection programs",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Documentation",
      text: "Proper documentation and traceability of collected materials",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Recycling",
      text: "Environmentally responsible transport and downstream recycling pathways",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Efficiency",
      text: "This structured approach ensures regulatory compliance while maintaining operational efficiency.",
      image: "/solar/solar-1.svg",
    },
  ];
  const overview = [
    {
      heading: "Market Focus",
      text: "Clean Earth LLC serves a diverse client base, including:",
      bullets: [
        "Hotels, restaurants, and catering establishments",
        "Industrial and manufacturing facilities",
        "Retail and commercial properties",
        "Educational and institutional organizations",
      ],
      lastText: "By offering customizable collection schedules and tailored recycling solutions, the company supports clients of varying sizes and operational needs."
    },
    {
      heading: "Sustainability and Environmental Impact",
      text: "Sustainability is at the core of Clean Earth LLC’s operations. By recovering oils, metals, and glass for reuse and recycling, the company:",
      bullets: [
        "Diverts valuable materials from landfills",
        "Conserves natural resources",
        "Reduces environmental pollution",
        "Supports circular supply chains",
      ],
      lastText: "Its services help businesses integrate responsible waste management into daily operations while contributing to Dubai’s broader sustainability and environmental goals."
    },
    {
      heading: "Strategic Value to Clients",
      text: "Through professional operations and strategic recycling partnerships, Clean Earth LLC enables clients to:",
      bullets: [
        "Meet environmental and regulatory requirements",
        "Improve corporate sustainability performance",
        "Reduce waste-handling risks",
        "Demonstrate environmental responsibility to stakeholders",
      ],
      lastText: "By combining operational reliability with environmental expertise, Clean Earth LLC acts as a trusted partner for sustainable waste management."
    }
  ];

  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Clean Earth LLC"
        texts={[
          "Clean Earth LLC is a Dubai-based environmental services and recycling company providing professional collection, recovery, and recycling solutions for industrial and commercial waste streams. The company operates with a strong focus on sustainability, environmental responsibility, and regulatory compliance, supporting Dubai’s long-term environmental and circular economy objectives.",
          "Clean Earth LLC specializes in the recovery of high-value recyclable materials, helping businesses divert waste from landfills while transforming discarded resources into reusable inputs for recycling and re-processing industries.",
        ]}
      />
      <WhoWeAre
        heading="Our Mission"
        topHeading=""
        text="Clean Earth LLC is a Dubai-based environmental services and recycling company providing professional collection, recovery, and recycling solutions for industrial and commercial waste streams. The company operates with a strong focus on sustainability, environmental responsibility, and regulatory compliance, supporting Dubai’s long-term environmental and circular economy objectives."
        showButton={false}
        invert={false}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777146022/image002_lmmmfu.png"
        imageAlt="Our Mission"
      />
      <WhoWeAre
        heading="Our Vision"
        topHeading=""
        text="Clean Earth LLC specializes in the recovery of high-value recyclable materials, helping businesses divert waste from landfills while transforming discarded resources into reusable inputs for recycling and re-processing industries."
        showButton={false}
        invert={true}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777146183/image003_je11qk.png"
        imageAlt="Our Vision"
      />
      <KitchenMenu
        heading="Core Services and Capabilities"
        text="Clean Earth LLC offers a focused portfolio of waste collection and recycling services designed to meet the needs of hospitality, industrial, retail, and institutional clients:"
        items={services}
      />
      <PumpingServiceCards
        cards={cards}
        heading="Operations and Compliance"
        text={"Clean Earth LLC operates in full alignment with Dubai’s environmental regulations and waste-management standards. All collection and transportation activities are supported by trained logistics personnel and compliant vehicles designed to meet safety and environmental requirements."}
        tag="[ ENVIRONMENTAL SERVICES ]"
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776682027/photorealistic-view-tree-nature-with-branches-trunk.jpg_mtzsxt.jpg"
      />
      <FeaturesEngineeringSection
        heading="Company Overview"
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
      />
    </main>
  );
}

export default CleanEarthLLCPage;
