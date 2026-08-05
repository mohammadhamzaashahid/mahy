import SustainabilitySection from "@/components/UI/about-us/sustainability/Sustainability";
import FeaturedDepartments from "@/components/UI/careers/FeaturedDepartments";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Transfer Pumps",
  description:
    "MAHY Khoory Group supplies transfer pumps in cast iron, stainless steel and composite materials, offering excellent strength and corrosion resistance for various water qualities.",
  alternates: { canonical: "/products/transfer-pumps" },
};

function TransferPumpsPage() {
  const features = [
    {
      title: "Heavy-Duty Construction",
      description:
        "Available in robust cast iron, stainless steel, and composite materials, providing excellent strength and corrosion resistance for various water qualities and operating conditions.",
      image: "/assets/products/transfer-pumps/tpumps1_oazzuh.jpg",
    },
    {
      title: "Potable & Non-Potable Water Compatibility",
      description:
        "Designed to safely handle drinking water, process water, chilled water, hot water, and treated secondary water.",
      image: "/assets/shared/tpumps2_qbtnwi.jpg",
    },
    {
      title: "High Hydraulic Efficiency",
      description:
        "Optimized impeller geometry and hydraulic design ensure maximum flow output, reduced power consumption, and enhanced system performance.",
      image: "/assets/products/transfer-pumps/tpumps3_iiy0fc.jpg",
    },
    {
      title: "Wide Operating Range",
      description:
        "Offered in multiple sizes and configurations with broad flow and head capabilities, making them adaptable to diverse transfer and circulation requirements.",
      image: "/assets/products/transfer-pumps/tpumps4_asxv1k.jpg",
    },
    {
      title: "User-Friendly Installation & Maintenance",
      description:
        "Equipped with back-pull-out design (for selected models), accessible components, and standardized connections, enabling quick servicing and reduced downtime.",
      image: "/assets/products/transfer-pumps/tpumps5_klvwsf.jpg",
    },
    {
      title: "Reliable Motor Performance",
      description:
        "Fitted with TEFC motors, thermal protection, and high-quality bearings for long service life and dependable operation.",
      image: "/assets/products/transfer-pumps/tpumps6_yyzgjh.jpg",
    },
  ];

  const applications = [
    {
      title: "Water Transfer & Circulation Systems",
      text: "Ideal for domestic and commercial water movement, utility networks, and continuous recirculation loops.",
      image: "/assets/products/transfer-pumps/2_ctl0l3.jpg",
    },
    {
      title: "Building Services & Mechanical Rooms",
      text: "Used widely in HVAC systems, plumbing networks, and facility service rooms for fluid distribution.",
      image: "/assets/shared/ptanks2_uafxz4.png",
    },
    {
      title: "District Cooling & Chilled Water Plants",
      text: "Suited for chilled water circulation, condenser water loops, and primary/secondary pumping arrangements.",
      image: "/assets/products/transfer-pumps/2_m6mvzw.jpg",
    },
    {
      title: "Industrial Process Water",
      text: "Supports manufacturing processes, cooling systems, washdown operations, and utility water distribution.",
      image: "/assets/shared/1_ywexpd.jpg",
    },
    {
      title: "Chilled & Hot Water Distribution",
      text: "Suitable for hydronic heating, cooling pipelines, AHU/FCU supply lines, and closed-loop systems.",
      image: "/assets/shared/chilled-water-pumps1_n8dxpq.png",
    },
  ];

  return (
    <main>
      <PageHeading
        title={"Transfer Pumps"}
        description={
          "Transfer pumps are designed for efficient and dependable movement of water and various liquids within residential, commercial, and industrial systems. Engineered for durability and continuous-duty operation, these pumps support circulation, distribution, and fluid transfer tasks across HVAC, utility, and process environments. Their versatile performance and broad operating range make them ideal for both general-purpose and specialized applications."
        }
        image="/assets/shared/psol3_free9g.png"
      />
      <FeaturedDepartments
        title={"Product-Oriented Key Features"}
        departments={features}
      />
      <SustainabilitySection heading="Applications" items={applications} />
    </main>
  );
}

export default TransferPumpsPage;
