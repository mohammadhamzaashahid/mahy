import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid";

function MahyKhooryGroupPage() {
  const features = [
    
    {
      text: "Advanced Automated Manufacturing Facilities",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777124189/Manufactring_hsht41.jpg",
    },
    {
      text: "Centralized & Regional Warehousing",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777124123/Engineering_k7gzg4.jpg",
    },
    {
      text: "Specialized Workshops & Technical Capabilities",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777030779/3_a8sput.jpg",
    },
    {
      text: "Integrated Logistics & Supply Chain Network",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777124121/transp_mqqea6.jpg",
    },
    {
      text: "By leveraging its established expertise across pumping systems, electromechanical solutions, recycling, and environmental services, the MAHY Khoory Group is well positioned to deliver sustainable long-term value for customers, partners, and stakeholders.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777124203/Waste_Management_s1kndw.jpg",
    }
  ];
  const overview = [
    {
      heading: "Operating Across Industries and Markets",
      text: "As a holding company, M.A.H.Y. Khoory & Co. LLC provides strategic leadership, governance, and centralized oversight across the Group’s subsidiaries. The holding structure is designed to ensure clarity of ownership, consistency in governance standards, and alignment with the Group’s long-term strategic objectives. While each subsidiary operates as an independent legal entity with responsibility for its day-to-day operations and sector-specific performance, all companies function within a unified framework of governance, values, and performance expectations established at the Group level.",
      lastText: "",
    },
    {
      heading: "Our Workforce",
      text: "The MAHY Khoory Group employs over 3,100 professionals representing more than 30 nationalities, reflecting a diverse and experienced workforce that supports the Group’s operations across its various sectors and geographies. The Group places strong emphasis on professional development, technical capability, and operational discipline, enabling its companies to deliver reliable solutions and maintain long-standing relationships with customers, partners, and suppliers.",
      lastText: "",
    },
    {
      heading: "Partnerships",
      text: "Long-term partnerships with leading international manufacturers and technology providers form a core strength of the Group",
      lastText: "Through these relationships, the MAHY Khoory Group represents and distributes globally recognized brands in pumping, electromechanical, HVAC, and industrial systems, ensuring access to proven technologies and high-quality products. These partnerships enhance the Group’s ability to deliver integrated solutions and support complex projects across infrastructure, industrial, commercial, and environmental applications.",
    },
    {
      heading: "Sustainability and Growth",
      text: "Long-term partnerships with leading international manufacturers and technology providers form a core strength of the Group",
      lastText: "Sustainability and responsible growth are integral to the Group’s operating philosophy. Recycling, resource recovery, and environmental services form a significant part of the Group’s business portfolio, with manufacturing operations converting waste paper and wood into value-added products and waste management companies supporting circular economy initiatives. Across its businesses, the Group also promotes energy-efficient technologies and systems that help customers reduce environmental impact, operating costs, and resource consumption.",
    }
  ];

  return (
    <main>
      <CompanyOverview
      video={"https://res.cloudinary.com/dpn6mdpxd/video/upload/v1770212592/Large-Industrial-Pumping-Structure-Releasing-Waste-2025-12-09-08-06-36-Utc_heqlt4.mp4"}
        // image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="MAHY Khoory Group"
        texts={[
          "M.A.H.Y. Khoory & Co. LLC is the holding company of the MAHY Khoory Group, a diversified enterprise group headquartered in Dubai with a distinguished heritage dating back to 1930. Over more than nine decades, the Group has grown from a pioneering entrepreneurial venture into a well-established organization with a strong reputation for technical expertise, operational reliability, and long-term value creation across the Middle East and selected international markets.",
        ]}
      />
      <CompanyTextGrid
        showImage={false}
        heading="About Us"
        paragraphs={[
          "The Group operates through a portfolio of specialized companies active across a broad range of sectors, including water and wastewater pumping systems, electromechanical and power solutions, HVAC and industrial machinery, paper recycling and packaging manufacturing, environmental and waste management services, logistics and warehousing, and hospitality. This diversified portfolio reflects a balanced mix of industrial, commercial, service-oriented, and environmental activities, enabling the Group to serve multiple industries while maintaining focused expertise within each business segment.",
        ]}
        image="/MAHY.png"
        rightText="Headquartered in Dubai, the MAHY Khoory Group maintains a strong operational footprint across the United Arab Emirates, with offices, warehouses, manufacturing facilities, and service centers in Abu Dhabi, Al Ain, Sharjah, and Ras Al Khaimah. Beyond the UAE, the Group serves customers and supports projects in more than 29 countries, spanning the GCC, Africa, and South Asia. This geographic reach allows the Group to combine deep local market knowledge with the capability to support regional and international projects of varying scale and complexity."
      />
      <KitchenMenu
        heading="Infrastructure & Long-Term Vision"
        text={"The Group’s extensive infrastructure underpins its ability to operate at scale and deliver consistently across markets. This includes centralized and regional warehouses, advanced manufacturing facilities equipped with automated production systems, specialized workshops, and robust logistics networks."}
        text2="Looking ahead, M.A.H.Y. Khoory & Co. LLC continues to guide the Group with a long-term perspective focused on controlled diversification, geographic expansion, and technology adoption. Ongoing investment in digital initiatives and operational optimization supports the Group’s ambition to remain competitive and resilient in evolving markets."
        items={features}
      />
      <FeaturesEngineeringSection
        heading="Company Overview"
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777222436/Copilot_20260425_153801_nxlyei.png"
      />
    </main>
  );
}

export default MahyKhooryGroupPage;
