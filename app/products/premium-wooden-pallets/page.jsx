import EngProcessSection from "@/components/Services/EngProcessSection";
import TrustedBusinessAdvisor from "@/components/Services/TrustedAdvisorTabs";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";

export const metadata = {
  title: "Premium Wooden Pallets",
  description:
    "MAHY Khoory Group supplies premium wooden and metal pallets designed for demanding environments including manufacturing plants, heavy industries and cold-storage rooms.",
  alternates: { canonical: "/products/premium-wooden-pallets" },
};

function PremiumWoodenPallets() {
  const features = [
    {
      label: "Heavy-Duty Metal Pallets",
      text: "Designed for the most demanding environments—manufacturing plants, heavy industries, chemical warehouses, and cold-storage rooms—our metal pallets offer:",
      bullets: [
        "Exceptional structural strength",
        "Fire resistance",
        "Long service life with minimal maintenance",
        "Hygienic and moisture-resistant performance",
      ],
      endText:
        "Ideal for industries requiring reusable, long-lasting, and contamination-free pallet solutions.",
      image:
        "/assets/pure-wood-pure-pellets-factory-price_ggev6t.jpg",
    },
    {
      label: "Export-Ready Construction",
      text: "Our pallets comply with regional and international shipping standards, making them suitable for global logistics companies, export warehouses, and manufacturing hubs.",
      image:
        "/assets/Pine-Wood-Pellets_mq1yfw.jpg",
    },
    {
      label: "Custom Engineering & Fabrication",
      text: "We design and manufacture pallets tailored to customer-specific requirements, including:",
      bullets: [
        "Custom dimensions",
        "Reinforced load-bearing structures",
        "Specialized coatings or treatments",
      ],
      image:
        "/assets/firewood-fg55-64_1000_w42qyr.jpg",
    },
  ];
  const advantages = [
    {
      heading: "Sustainability",
      text: "Sustainable Manufacturing using 100% recycled compressed wood blocks",
    },
    {
      heading: "Durability",
      text: "High Durability for heavy-duty industrial applications",
    },
    {
      heading: "Precision",
      text: "Precision Fabrication ensuring consistent quality in every pallet",
    },
    {
      heading: "Responsibility",
      text: "Eco-Friendly Supply Chain aligned with global sustainability goals",
    },
    {
      heading: "Longevity",
      text: "Long Service Life for both wooden and metal pallets",
    },
    {
      heading: "Efficiency",
      text: "Cost-Effective & Reliable packaging and handling solutions",
    },
  ];
  const applications = [
    "Logistics & warehouse operations",
    "Export and international shipping",
    "Manufacturing and industrial handling",
    "Retail distribution centres",
    "Chemical, pharmaceutical & food industries",
    "Heavy-duty storage and racking systems",
  ];

  return (
    <main>
      <PageHeading
        title={"Premium Wooden Pallets"}
        image="/assets/IMG_gzq8fj.png"
      />
      <TrustedBusinessAdvisor
        images={[
          "/assets/image002_lmmmfu.png",
          "/assets/IMG_-_2_stmfpe.png",
          "/assets/biomass-wood-pellet-500x500_wxke1f.jpg",
        ]}
        heading="Premium Wooden Pallets"
        text="Manufactured using heat-treated, high-density compressed wood blocks and quality timber, our wooden pallets are engineered for:"
        bullets={[
          "Export compliance(ISPM - 15 ready)",
          "High load - bearing capacity",
          "Dimensional stability and long - term durability",
          "Compatibility with automated handling systems",
        ]}
        endText="Available in standard and custom sizes, including 2-way, 4-way, stringer, and block pallet configurations."
        items={features}
      />
      <EngProcessSection
        heading="Premimun Pallets"
        items={advantages}
        images={[
          "/assets/Sustainable_Origins_ttvxce.jpg",
          "/assets/image003_je11qk.png",
           
        ]}
      />
      <TrustedAdvisorSection images={["/assets/Advance_recycling_n7hyqc.jpg", "/assets/3d-view-puzzle-pieces_ng78lk.jpg"]} heading="Applications" bullets={applications} />
    </main>
  );
}

export default PremiumWoodenPallets;
