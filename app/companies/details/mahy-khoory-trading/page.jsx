import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid";

export const metadata = {
  title: "MAHY Khoory Trading",
  description:
    "MAHY Khoory Trading supports GCC and regional distribution, ensuring consistent product quality, supplier relationships and technical standards across the Group.",
  alternates: { canonical: "/companies/details/mahy-khoory-trading" },
};

function MahyKhooryTradingPage() {
  const features = [
    {
      text: "Channel Partners",
      image: "/assets/companies/details/mahy-khoory-trading/Channel_Partners_dnqnjz.jpg",
    },
    {
      text: "MEP and EPC contractors",
      image: "/assets/companies/details/mahy-khoory-trading/MEP_and_PEC_Contractors_io2u3c.jpg",
    },
    {
      text: "Real estate developers",
      image: "/assets/companies/details/mahy-khoory-trading/Real_Estate_Develolopers_gqozxh.jpg",
    },
    {
      text: "Government and municipal utilities",
      image: "/assets/companies/details/mahy-khoory-trading/Government_and_Municipality_na3sgn.jpg",
    },
    {
      text: "Industrial and manufacturing operators",
      image: "/assets/companies/details/mahy-khoory-trading/Industrial_and_Manufacturing_mgdvo9.jpg",
    },
    {
      text: "Hospitality and commercial facility owners",
      image: "/assets/companies/details/mahy-khoory-trading/Hospitality_and_Commercial_xktgcp.jpg",
    },
  ];
  const overview = [
    {
      heading: "Geographic Coverage",
      text: "Headquartered in Dubai, M.A.H.Y. Khoory Trading operates extensively across the GCC, with a particularly strong presence in the UAE and Oman. Supported by the Group’s logistics and warehousing infrastructure, the division ensures efficient distribution and product availability across regional markets.",
      lastText:
        "In addition to its GCC focus, the division also supports re-export activities to neighboring regions, including Africa and selected international markets.",
    },
    {
      heading: "Role Within the MAHY Khoory Group",
      text: "Within the Group’s structure, M.A.H.Y. Khoory Trading serves as a foundational business unit and central procurement channel. It supports both external customers and internal subsidiaries by sourcing, stocking, and distributing equipment required for engineering, manufacturing, and service operations across the Group.",
      lastText:
        "This integrated role ensures consistency in product quality, supplier relationships, technical standards, and commercial practices throughout the MAHY Khoory Group.",
    },
    {
      heading: "Quality and Regulatory Compliance",
      text: "Quality assurance and regulatory compliance are integral to the Trading division’s operations. All products are sourced from reputable, ISO-certified manufacturers and comply with applicable UAE and international standards, including electrical, fire safety, and performance regulations.",
      lastText:
        "Rigorous inspection, documentation, and traceability processes are applied to ensure reliable, safe, and compliant deliveries for every project.",
    },
    {
      heading: "Sustainability and Energy Efficiency",
      text: "While operating as a trading business, M.A.H.Y. Khoory Trading actively supports sustainability objectives by promoting energy-efficient and environmentally responsible products. These include high-efficiency motors, inverter-based HVAC systems, smart pumping solutions, and solar-assisted water heating technologies.",
      lastText:
        "Through these offerings, the division helps customers reduce energy consumption, operating costs, and environmental impact.",
    },
    {
      heading: "Infrastructure and Technical Support",
      text: "The Trading division is supported by extensive infrastructure, including large-scale warehouses, showrooms, spare-parts facilities, and technical support teams. Product specialists and engineers provide system selection guidance, training, and after-sales assistance to ensure optimal system performance.",
      lastText:
        "Digital tools such as e-catalogs, product selection software, and online ordering platforms further enhance service efficiency and customer experience.",
    },
    {
      heading: "Strategic Direction",
      text: "M.A.H.Y. Khoory Trading continues to expand its portfolio and market reach through strategic partnerships, digital enablement, and alignment with emerging technologies.",
      lastText:
        "By leveraging the Group’s global supplier network and strong market presence, the division remains a key driver of commercial growth and long-term value creation within the MAHY Khoory Group.",
    },
  ];
  return (
    <main>
      <CompanyOverview
        video={"/assets/companies/details/mahy-khoory-trading/M.A.H.Y._KHOORY_CO._jtklrf.mp4"}
        //   image="/assets/shared/office_jaeuiz.webp"
        heading="MAHY Khoory Trading"
        texts={[
          "M.A.H.Y. Khoory Trading is the commercial and distribution arm of the MAHY Khoory Group, serving as a key supplier of industrial, electromechanical, and building services equipment across the GCC and selected international markets. The division plays a central role in supporting infrastructure, construction, industrial, and utility sectors through the supply of reliable, high-quality products sourced from leading global manufacturers. With decades of experience in import, distribution, and project supply, M.A.H.Y. Khoory Trading has established itself as a trusted partner for contractors, developers, and institutional clients, delivering both products and technical support at scale.",
        ]}
      />
      <CompanyTextGrid
        showImage={false}
        heading="Market Experience and Project Support"
        paragraphs={[
          "M.A.H.Y. Khoory Trading has supplied equipment to a wide range of major residential, commercial, industrial, and infrastructure projects across the UAE and the wider region. Its products are widely specified in high-rise towers, mixed-use developments, utilities networks, industrial facilities, hospitality projects, and oil & gas installations.",
        ]}
        image="/MAHY.png"
        rightText="The division works closely with consultants, contractors, and developers from early design stages through delivery, commissioning, and after-sales support. This project-oriented approach ensures technical compatibility, timely execution, and long-term system reliability."
      />
      <KitchenMenu
        heading="Client Segments"
        text={"Its ability to supply multiple product categories under a single commercial platform makes it a preferred partner for large, multi-discipline projects. The Trading division serves a diverse client base that includes:"}
        items={features}
      />
      <FeaturesEngineeringSection
        heading="Company Overview"
        text={
          "M.A.H.Y. Khoory Trading is a GCC-wide procurement and distribution division that delivers compliant, energy-efficient solutions through strong infrastructure, technical support, and global partnerships, driving consistent quality, operational efficiency, and long-term growth across the Group."
        }
        items={overview}
      />
    </main>
  );
}

export default MahyKhooryTradingPage;
