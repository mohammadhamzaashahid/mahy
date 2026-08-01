import CompaniesSectors from "@/components/CompaniesSectors";
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import { object } from "zod";

export const metadata = {
  title: "Union Sustainable Packaging Solutions",
  description:
    "Union Sustainable Packaging Solutions (USPS) closes the loop on wood usage, complementing MAHY Khoory Group's manufacturing and recycling divisions with sustainable packaging products.",
  alternates: { canonical: "/companies/details/union-sustainable-packaging" },
};

function UnionSustainablePackagingPage() {
  const services = [
    {
      title: "Comprehensive Wooden Packaging Solutions",
      objectFit: "cover",
      text: "USPS offers a comprehensive wooden packaging portfolio tailored for industrial needs. Its product range includes new and refurbished wooden pallets (Euro-format, block pallets, A/B/C grade reused pallets) and pallet collars; crates, boxes and timber containers; as well as packaging accessories and dunnage—all designed for durability and reuse. The company also provides pallet repair, pooling, buy-back and rental services, extending pallet life and reducing waste.",
      image: "/assets/Comprehensive_Wooden_Packaging_lmnwp4.jpg",
    },
    {
      title: "Innovative Recycled Pallet Technology",
      text: "A signature offering is the compressed pallet block, made by Union Wood Works – this is a dense wood block made from waste wood – which replaces traditional solid blocks. These blocks (100% recycled wood) are economical, uniform in size, free of bark or fissures, and exhibit superior nail-holding strength. All products comply with international quality and phytosanitary (ISPM-15) standards, ensuring they can be used for global exports.",
      image: "/assets/Innovative_recycled_Pallet_pv6isz.jpg",
    },
  ];

  const overview = [
    {
      heading: "Strategic Alignment within the Group",
      text: "PalletBiz (USPS) reinforces MAHY Khoory Group's reputation as a leader in industrial innovation and environmental solutions.",
      lastText:
        "It complements the group's manufacturing and recycling divisions (such as paper mills and waste management) by closing the loop on wood usage.",
    },
    {
      heading: "Strategic Partnership & Global Reach",
      text: "Strategically, USPS leverages MAHY's local presence and resources while gaining global reach through PalletBiz.",
      lastText:
        "This synergy allows the group to offer integrated supply-chain solutions: from sourcing reclaimed wood to producing green packaging to distributing it worldwide.",
    },
    {
      heading: "Commitment to Sustainability & Quality",
      text: "In summary, Union Sustainable Packaging Solutions exemplifies MAHY's commitment to technology, quality and sustainability – serving both local Gulf markets and international partners with eco-friendly wooden packaging.",
    },
  ];

  return (
    <main>
      <CompanyOverview
      video={"/assets/Video_Project_15_tv7yzn.mp4"}
        // image="/assets/office_jaeuiz.webp"
        heading="Union Sustainable Packaging Solutions (USPS)"
        texts={[
          "Company Overview: Union Sustainable Packaging Solutions (USPS) is the MAHY Khoory Group's dedicated wooden packaging arm, based in Dubai. It evolved from Union Wood Works, a long-standing MAHY subsidiary, and specializes in wooden packaging.",
          "USPS operates PalletBiz, which is an international network specializing in the production of wood and metal packaging materials, with strategically placed production units and distribution depots.",
        ]}
      />

      <KitchenMenu heading="Products and Solutions" items={services} />

      <CompanyTextOnBackground
        heading="Market Focus and Industry Applications"
        image="/assets/IMG_aovlhd.png"
        align="left"
        text="USPS serves a broad spectrum of industries that depend on safe, efficient wooden packaging. Its pallets and crates are used across manufacturing, automotive, electronics, retail/consumer goods, FMCG/e-commerce, agriculture and pharmaceuticals. The company's solutions are well-suited to warehousing and logistics as well as heavy-industry transport, providing reliable handling for everything from machinery parts to consumer products."
        endText="In healthcare and food sectors, the chemical-free, insect-free compressed blocks meet stringent safety requirements. By fitting into PalletBiz's global network, USPS can also tap into adjacent markets (oil & gas, construction, etc.) where durable, reusable packaging helps customers reduce costs and environmental impact."
      />

      <WhoWeAre
        heading="Technology, Design, and Manufacturing Capabilities"
        topHeading=""
        text="USPS operates cutting-edge manufacturing with high automation and precision. A dedicated in-house engineering team designs custom packaging to exact specifications, optimizing dimensions, load ratings and material treatments. The UAE facility ensures consistent product quality and fast production cycles. By combining M.A.H.Y. Khoory's design expertise with PalletBiz's best practices, USPS can rapidly scale production of bespoke wooden packaging to meet client specifications anywhere in the world."
        showButton={false}
        invert={false}
        image="/assets/technology_design_and_manufacturing_ffwywm.jpg"
        imageAlt="Technology, Design, and Manufacturing Capabilities"
        gap
      />

      <WhoWeAre
        topHeading=""
        heading="Sustainability Commitment"
        text="Sustainability is integral to USPS's operations. All compressed blocks and repair programs use 100% recycled wood, diverting millions of kilograms of used lumber from waste. Their facility repairs or reuses old pallets and recycles offcuts into new blocks (through Union Wood Works), embodying a repair-reuse-recycle approach. The compressed blocks require no chemicals or heat treatment (reducing emissions and contamination risk) and are naturally pest-free. These practices align with UAE and Middle East green initiatives (UAE Green Agenda 2030) and PalletBiz's circular-economy goals. By providing reusable pallets and promoting pallet pooling, USPS helps customers lower their carbon footprint and total packaging cost."
        image="/assets/sustainability_commitment_iix88o.jpg"
        imageAlt="Sustainability Commitment"
        showButton={false}
        invert={true}
      />

      <FeaturesEngineeringSection
        heading="Company Overview"
        items={overview}
        image="/assets/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
      />
    </main>
  );
}

export default UnionSustainablePackagingPage;















// import CompaniesSectors from "@/components/CompaniesSectors";
// import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
// import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
// import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
// import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
// import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground";
// import WhoWeAre from "@/components/UI/home/WhoWeAre";

// function UnionSustainablePackagingPage() {
//   const services = [
//     {
//       title: "Comprehensive Wooden Packaging Solutions",
//       text: "USPS offers a comprehensive wooden packaging portfolio tailored for industrial needs. Its product range includes new and refurbished wooden pallets (Euro-format, block pallets, A/B/C grade reused pallets) and pallet collars; crates, boxes and timber containers; as well as packaging accessories and dunnage—all designed for durability and reuse. The company also provides pallet repair, pooling, buy-back and rental services, extending pallet life and reducing waste.",
//       image: "/gallery/gallery-1.jpg",
//     },
//     {
//       title: "Innovative Recycled Pallet Technology",
//       text: "A signature offering is the compressed pallet block, made by Union Wood Works – this is a dense wood block made from waste wood – which replaces traditional solid blocks. These blocks (100% recycled wood) are economical, uniform in size, free of bark or fissures, and exhibit superior nail-holding strength. All products comply with international quality and phytosanitary (ISPM-15) standards, ensuring they can be used for global exports.",
//       image: "/gallery/gallery-1.jpg",
//     }
//   ];
//   const overview = [
//     {
//       heading: "Strategic Alignment within the Group",
//       text: "PalletBiz (USPS) reinforces MAHY Khoory Group’s reputation as a leader in industrial innovation and environmental solutions.",
//       lastText: "It complements the group’s manufacturing and recycling divisions (such as paper mills and waste management) by closing the loop on wood usage."
//     },
//     {
//       heading: "Strategic Partnership & Global Reach",
//       text: "Strategically, USPS leverages MAHY’s local presence and resources while gaining global reach through PalletBiz.",
//       lastText: "This synergy allows the group to offer integrated supply-chain solutions: from sourcing reclaimed wood to producing green packaging to distributing it worldwide."
//     },
//     {
//       heading: "Commitment to Sustainability & Quality",
//       text: "In summary, Union Sustainable Packaging Solutions exemplifies MAHY’s commitment to technology, quality and sustainability – serving both local Gulf markets and international partners with eco-friendly wooden packaging.",
//     }
//   ];
//   return (
//     <main>
//       <CompanyOverview
//         image="/assets/office_jaeuiz.webp"
//         heading="MAHY Khoory Motors"
//         texts={[
//           "Company Overview: Union Sustainable Packaging Solutions (USPS) is the MAHY Khoory Group’s dedicated wooden packaging arm, based in Dubai. It evolved from Union Wood Works, a long-standing MAHY subsidiary, and specializes in wooden packaging.",
//           "USPS operates PalletBiz, which is an international network specializing in the production of wood and metal packaging materials, with strategically placed production units and distribution depots.",
//         ]}
//       />
//       <KitchenMenu
//         heading="Products and Solutions"
//         items={services}
//       />
//       <CompanyTextOnBackground
//         heading="Market Focus and Industry Applications"
//         image="/assets/commitment-to-growth_qhzgjt.jpg"
//         align="left"
//         text="USPS serves a broad spectrum of industries that depend on safe, efficient wooden packaging. Its pallets and crates are used across manufacturing, automotive, electronics, retail/consumer goods, FMCG/e-commerce, agriculture and pharmaceuticals. The company’s solutions are well-suited to warehousing and logistics as well as heavy-industry transport, providing reliable handling for everything from machinery parts to consumer products."
//         endText={
//           "In healthcare and food sectors, the chemical-free, insect-free compressed blocks meet stringent safety requirements. By fitting into PalletBiz’s global network, USPS can also tap into adjacent markets (oil & gas, construction, etc.) where durable, reusable packaging helps customers reduce costs and environmental impact."
//         }
//       />
//       <WhoWeAre
//         heading=""
//         topHeading="Technology, Design, and Manufacturing Capabilities"
//         text="USPS operates cutting-edge manufacturing with high automation and precision. A dedicated in-house engineering team designs custom packaging to exact specifications, optimizing dimensions, load ratings and material treatments. The UAE facility ensures consistent product quality and fast production cycles. By combining M.A.H.Y. Khoory’s design expertise with PalletBiz’s best practices, USPS can rapidly scale production of bespoke wooden packaging to meet client specifications anywhere in the world."
//         showButton={false}
//         invert={false}
//         image="/assets/commitment-to-growth_qhzgjt.jpg"
//         imageAlt=""
//       />
//       <WhoWeAre
//         topHeading="Sustainability Commitment"
//         heading=""
//         text="USPS operates cutting-edge manufacturing with high automation and precision. A dedicated in-house engineering team designs custom packaging to exact specifications, optimizing dimensions, load ratings and material treatments. The UAE facility ensures consistent product quality and fast production cycles. By combining M.A.H.Y. Khoory’s design expertise with PalletBiz’s best practices, USPS can rapidly scale production of bespoke wooden packaging to meet client specifications anywhere in the world."
//         image="/assets/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
//         imageAlt="Our Vision"
//         showButton={false}
//         invert={true}
//       />
//       <FeaturesEngineeringSection
//         heading="Company Overview"
//         items={overview}
//         image="/assets/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
//       />
//     </main>
//   );
// }

// export default UnionSustainablePackagingPage;
