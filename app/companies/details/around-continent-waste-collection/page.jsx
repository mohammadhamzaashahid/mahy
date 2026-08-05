import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import { object } from "zod";

export const metadata = {
  title: "Around Continent Waste Collection",
  description:
    "Around Continent Waste Collection provides collection and transport of non-recyclable general waste and construction debris from commercial, industrial and project sites across the UAE.",
  alternates: { canonical: "/companies/details/around-continent-waste-collection" },
};

function AroundContinentWasteCollection() {
  const services = [
    {
      title: "General Waste Collection and Transportation",
      text: "Collection and transport of non-recyclable general waste from commercial, industrial, and project sites to approved disposal facilities.",
      image: "/assets/companies/details/around-continent-waste-collection/general_waste_collection_and_transportation_nxxytu.jpg",
    },
    {
      title: "Construction and Demolition (C&D) Waste",
      text: "Handling and transportation of construction debris, demolition waste, and project-related waste materials generated from infrastructure and development activities.",
      image: "/assets/companies/details/around-continent-waste-collection/construction_waste_nxffs8.jpg",
    },
    {
      title: "Hazardous Waste Transportation",
      text: "Collection and transport of regulated hazardous waste in accordance with UAE environmental and safety regulations, including controlled solid and liquid waste streams.",
      image: "/assets/companies/details/around-continent-waste-collection/hazardous_waste_r3w6sh.jpg",
    },
    {
      title: "Solid and Liquid Waste Handling",
      text: "Authorized handling and transportation of solid waste materials, liquid waste including oils, sludge, and chemical residues, and industrial by-products requiring controlled disposal.",
      image: "/assets/companies/details/around-continent-waste-collection/Liquid_waste_pdr9ve.jpg",
    },
    {
      title: "Disposal and Treatment Coordination",
      text: "Coordinates closely with licensed treatment and disposal facilities to ensure all waste is processed in full regulatory compliance.",
      image: "/assets/companies/details/around-continent-waste-collection/Disposal_of_waste_rllbyw.jpg",
    },
  ];

  const cards = [
    {
      title: "Operations and Industry Applications",
      text: "Around Continent Waste Collection operates a dedicated waste logistics network supported by trained personnel and purpose-built vehicles. It serves manufacturing, construction, commercial establishments, warehouses, logistics operations, and institutions generating regulated waste.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Geographic Coverage",
      text: "Although primarily licensed and managed from Dubai, the company provides services across the UAE, transporting waste to approved facilities in multiple emirates.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Strategic Role within the Group",
      text: "The company strengthens MAHY Khoory Group’s environmental services portfolio by focusing on general, construction, and hazardous waste logistics, supporting compliance and environmental protection.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Leadership and Oversight",
      text: "Managed by experienced professionals in waste management and environmental compliance, ensuring all operations adhere strictly to laws, permits, and safety protocols.",
      image: "/solar/solar-1.svg",
    },
  ];

  // OVERVIEW SECTION
  const overview = [
    {
      heading: "Establishment and Regulatory Framework",
      text: "Around Continent Waste Collection was established as part of the MAHY Khoory Group’s strategic expansion into environmental and waste management services. The company is licensed by relevant UAE authorities, including Dubai Municipality.",
      lastText:
        "Its establishment reflects the Group’s commitment to providing compliant waste logistics and disposal coordination services.",
    },
    {
      heading: "Safety, Quality, and Regulatory Compliance",
      text: "Safety and compliance are central to all operations. All vehicles are equipped with secure containment systems, spill response kits, and emergency equipment.",
      bullets: [
        "Certified and trained drivers and handlers",
        "Traceable and documented waste movements",
        "Full regulatory reporting compliance",
      ],
      lastText:
        "Ensures transparency, accountability, and strict adherence to UAE environmental regulations.",
    },
    {
      heading: "Environmental Protection and Risk Mitigation",
      text: "The company ensures controlled collection, transport, and disposal of waste, preventing environmental contamination and public safety risks.",
      bullets: [
        "Minimizes land, water, and air impact",
        "Supports environmental compliance for clients",
        "Promotes waste segregation and safe handling",
      ],
      lastText:
        "Improves operational efficiency while reducing environmental risk.",
    },
    {
      heading: "Fleet and Infrastructure",
      text: "The company operates a modern fleet designed for diverse waste streams.",
      bullets: [
        "Tanker vehicles for liquid waste",
        "Sealed containers for solid and hazardous waste",
        "Specialized vehicles for regulated materials",
      ],
      lastText:
        "All vehicles comply with transport standards and undergo strict maintenance programs.",
    },
    {
      heading: "Technology and Operational Excellence",
      text: "Advanced tracking and documentation systems enhance safety, efficiency, and transparency.",
      bullets: [
        "GPS fleet monitoring",
        "Digital waste manifests",
        "Real-time tracking and reporting",
      ],
      lastText:
        "Provides visibility of waste movements and supports proactive risk management.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        video={"/assets/companies/details/around-continent-waste-collection/Around_Continent_Waste_Collection_Green_Arabia_mgylog.mp4"}
        heading="Around Continent Waste Collection"
        texts={[
          "Around Continent Waste Collection is an environmental services subsidiary within the MAHY Khoory Group, specializing in the collection, handling, and transportation of general waste, construction and demolition waste, hazardous waste, and solid and liquid waste.",
          "The company operates under approved regulatory permits and is authorized to manage and transport a wide range of controlled and regulated waste streams across the United Arab Emirates.",
          "It supports industrial, commercial, and project-based operations by ensuring waste is collected, transported, and directed to approved treatment or disposal facilities in strict compliance with UAE environmental, health, and safety regulations.",
        ]}
      />
      <WhoWeAre
        heading="Our Mission"
        topHeading=""
        text="The mission of Around Continent Waste Collection is to deliver safe, compliant, and dependable waste collection and transportation services that protect public health, preserve environmental quality, and support the operational continuity of industries across the UAE. The company is dedicated to ensuring that every waste stream—whether general waste, construction debris, or hazardous solid and liquid waste—is handled with strict regulatory discipline, secure containment, and complete traceability. Through a trained workforce, purpose-built vehicles, and rigorous adherence to environmental and safety standards, Around Continent Waste Collection strives to provide clients with reliable, transparent, and risk‑controlled waste logistics that minimize environmental impact and uphold the highest levels of operational integrity."
        showButton={false}
        invert={false}
        image="/assets/companies/details/around-continent-waste-collection/Our_Mission_pbud9l.png"
        imageAlt="Our Mission"
      />

      <WhoWeAre
        heading="Our Vision"
        topHeading=""
        text="The vision of Around Continent Waste Collection is to become the UAE’s leading specialized waste logistics provider, recognized for excellence in the safe handling, transportation, and management of regulated waste across all emirates. The company aims to set the national benchmark for compliance-driven waste movement by continuously enhancing its fleet capabilities, operational systems, and safety protocols. It aspires to be the trusted partner of choice for organizations requiring professional waste management solutions, particularly in general, construction, and hazardous waste categories. By integrating advanced tracking technologies, strengthening regulatory alignment, and supporting the MAHY Khoory Group’s broader environmental services portfolio, Around Continent Waste Collection seeks to build a future where waste logistics are managed with precision, responsibility, and unwavering commitment to environmental protection."
        showButton={false}
        invert={true}
        image="/assets/companies/details/around-continent-waste-collection/Our_Vision_yv0c4h.jpg"
        imageAlt="Our Vision"
      />
      {/* <ValuesSection
        title="Mission"
        description=""
          imageSrc="/assets/shared/commitment-to-growth_qhzgjt.jpg"
          imageAlt="Mission"
          ctaHref={false}
          imagePosition="right"
        />

        <ValuesSection
          title="Vision"
          description=""
          imageSrc="/assets/shared/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
          imageAlt="Vision"
          ctaHref={false}
          imagePosition="left"
        /> */}

      <KitchenMenu
        heading="Services and Licensed Capabilities"
        text="Around Continent Waste Collection provides a broad range of waste collection and transportation services to industrial, commercial, and project-based clients."
        items={services}
      />

      <PumpingServiceCards
        cards={cards}
        heading="Around Continent Waste Collection"
        subHeading="Environmental Waste Logistics & Compliance Solutions"
        tag="[ ENVIRONMENTAL SERVICES ]"
        backgroundImage="/assets/shared/photorealistic-view-tree-nature-with-branches-trunk.jpg_mtzsxt.jpg"
      />

      <FeaturesEngineeringSection
        heading="Company Overview"
        items={overview}
        image="/assets/companies/details/around-continent-waste-collection/Base_image_-_Around_continet_sr0aob.jpg"
      />
    </main>
  );
}

export default AroundContinentWasteCollection;
