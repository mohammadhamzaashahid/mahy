import CompaniesSectors from "@/components/CompaniesSectors";
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import React from "react";

export const metadata = {
  title: "Clean Earth LLC",
  description:
    "Clean Earth LLC provides safe collection and recovery of used lubricants, industrial oils and cooking oils from hotels, restaurants and commercial kitchens across the UAE.",
  alternates: { canonical: "/companies/details/clean-earth-llc" },
};

function CleanEarthLLCPage() {
  const services = [
    {
      title: "Reusable Industrial Oil Collection",
      text: "Safe collection and recovery of used lubricants and industrial oils for re-refining or approved recycling processes.",
      image: "/assets/Reusabel_Industrial_Oil-2_yhb062.png",
    },
    {
      title: "Used Cooking Oil Collection",
      text: "Scheduled pickup services for hotels, restaurants, catering facilities, and commercial kitchens, ensuring responsible handling and recycling of cooking oils.",
      image: "/assets/reusabale_cooking_oil_wqa5aw.jpg",
    },
    {
      title: "Metal and Iron Scrap Recovery",
      text: "Collection, segregation, and supply of ferrous and non-ferrous metal scrap to authorized recycling markets.",
      image: "/assets/metal_and_iron_scrap_wsps3j.jpg",
    },
    {
      title: "Glass Scrap Collection",
      text: "Handling and transportation of broken and reusable glass for processing into recycled cullet and new glass products.",
      image: "/assets/Glass_collection_yyrru9.jpg",
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
      video={"/assets/Clean_Earth_yf3e44.mov"}
        // image="/assets/office_jaeuiz.webp"
        heading="Clean Earth LLC"
        texts={[
          "Clean Earth LLC is a Dubai-based environmental services and recycling company providing professional collection, recovery, and recycling solutions for industrial and commercial waste streams. The company operates with a strong focus on sustainability, environmental responsibility, and regulatory compliance, supporting Dubai’s long-term environmental and circular economy objectives.",
          "Clean Earth LLC specializes in the recovery of high-value recyclable materials, helping businesses divert waste from landfills while transforming discarded resources into reusable inputs for recycling and re-processing industries.",
        ]}
      />
      <WhoWeAre
        heading="Our Mission"
        topHeading=""
        text="Clean Earth LLC is committed to delivering reliable, compliant, and environmentally responsible waste collection and recycling services that help businesses reduce their environmental footprint and meet regulatory standards. The company’s mission is to recover valuable materials through safe, efficient, and sustainable processes—supporting clients in adopting responsible waste practices while contributing to Dubai’s long‑term circular economy goals."
        showButton={false}
        invert={false}
        image="/assets/Our_Mission_r6qq9z.jpg"
        imageAlt="Our Mission"
      />
      <WhoWeAre
        heading="Our Vision"
        topHeading=""
        text="Clean Earth LLC aims to be a leading partner in sustainable waste management across the UAE, recognized for its role in promoting resource recovery, reducing landfill dependency, and advancing circular economy principles. The company envisions a cleaner, greener urban environment where businesses actively participate in responsible waste handling, supported by modern recycling solutions and strong environmental stewardship."
        showButton={false}
        invert={true}
        image="/assets/Our_Vision_t50wqq.jpg"
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
        backgroundImage="/assets/photorealistic-view-tree-nature-with-branches-trunk.jpg_mtzsxt.jpg"
      />
      <FeaturesEngineeringSection
        heading="Company Overview"
        items={overview}
        image="/assets/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
      />
    </main>
  );
}

export default CleanEarthLLCPage;
