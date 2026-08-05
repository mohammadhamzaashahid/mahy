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
      label: "Wooden Boxes & Crates",
      text: "Wooden Boxes and Crates provide durable, versatile packaging solutions for safe transportation and storage of heavy equipment, machinery, and goods. Manufactured from heat-treated wood, PalletBiz offers standard and customized solutions including solid boxes, seaworthy crates, and specialized designs to ensure secure handling and product protection.",
      // bullets: [
      //   "Exceptional structural strength",
      //   "Fire resistance",
      //   "Long service life with minimal maintenance",
      //   "Hygienic and moisture-resistant performance",
      // ],
      // endText:
      //   "Ideal for industries requiring reusable, long-lasting, and contamination-free pallet solutions.",
      image:
        "/assets/products/premium-wooden-pallets/wooden-pallets.png",
    },
    {
      label: "Dunnage",
      text: "Dunnage solutions protect goods during transportation and storage by providing cushioning, support, and stability. Wooden grooves and runners help secure uniquely shaped items, prevent movement, and minimize damage, ensuring safe handling and product integrity throughout the supply chain.",
      image:
        "/assets/products/premium-wooden-pallets/dunage.png",
    },
    {
      label: "Pallet Collars (Frames)",
      text: "Pallet Collars offer a flexible solution for converting pallets into secure storage and transport containers. Easy to assemble, dismantle, and store, they optimize space while providing efficient handling and protection for loose goods and components across various industries.",
      // bullets: [
      //   "Custom dimensions",
      //   "Reinforced load-bearing structures",
      //   "Specialized coatings or treatments",
      // ],
      image:
        "/assets/products/premium-wooden-pallets/pallets.png",
    },
    {
      label: "Metal Pallets",
      text: "Metal Pallets provide durable, high-strength solutions for industrial handling, storage, and transportation. Designed for demanding environments, they offer excellent load capacity, reliability, and resistance to harsh conditions. PalletBiz provides customized metal solutions including steel pallets, gitterboxes, and wire mesh containers.",
      // bullets: [
      //   "Custom dimensions",
      //   "Reinforced load-bearing structures",
      //   "Specialized coatings or treatments",
      // ],
      image:
        "/assets/products/premium-wooden-pallets/metal.png",
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
        image="/assets/shared/IMG_gzq8fj.png"
      />
      <TrustedBusinessAdvisor
        images={[
          "/assets/products/premium-wooden-pallets/wooden-pallets.png",
          "/assets/products/premium-wooden-pallets/dunage.png",
          "/assets/products/premium-wooden-pallets/metal.png",
          "/assets/products/premium-wooden-pallets/pallets.png",
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
          "/assets/shared/Sustainable_Origins_ttvxce.jpg",
          "/assets/shared/image003_je11qk.png",
           
        ]}
      />
      <TrustedAdvisorSection images={["/assets/shared/Advance_recycling_n7hyqc.jpg", "/assets/shared/3d-view-puzzle-pieces_ng78lk.jpg"]} heading="Applications" bullets={applications} />
    </main>
  );
}

export default PremiumWoodenPallets;
