import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import OfferingsSection from "@/components/Services/OfferingsSection";
import SparePartsTimeline from "@/components/Shop/SparePartsTimeline";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import SubPageHeading from "@/components/UI/SubPageHeading";

function SparePartsPage() {
  const coverage = [
    {
      heading: "GRUNDFOS Pumps",
      text: "Complete spare part kits for booster systems, transfer pumps, submersibles, chilled water pumps, and wastewater pumps. Available items include mechanical seals, impellers, bearings, O-rings, motor components, control modules, and more.",
    },
    {
      heading: "Lister Petter Engines",
      text: "Authentic engine components such as filters, pistons, injector nozzles, gaskets, belts, cooling components, and overhaul kits for reliable generator and diesel engine maintenance.",
    },
    {
      heading: "VEM Motors",
      text: "OEM-approved motor spares including bearings, cooling fans, terminal blocks, rotors, stators, and motor protection accessories.",
    },
    {
      heading: "DEWALT Power Tools",
      text: "Genuine DEWALT spare parts including switches, carbon brushes, chucks, housings, gears, armatures, and service kits for drills, grinders, saws, and impact tools.",
    },
    {
      heading: "Safety Products & Accessories",
      text: "A wide selection of essential safety items and consumables for maintenance teams and field technicians.",
    },
  ];
  const support = [
    {
      heading: "Maintenance Companies & Facility Management Firms",
      icon: "🛠️",
    },
    {
      heading: "Government Departments & Public Sector Entities",
      icon: "🏛️",
    },
    {
      heading: "Industrial Plants & Utilities",
      icon: "🏭",
    },
    {
      heading: "MEP Contractors",
      icon: "🔧",
    },
    {
      heading: "End Users & Residential Customers",
      icon: "🏠",
    },
  ];

  const items = [
    {
      title: "Understanding Customer Needs",
      text: "We analyze your requirements and identify the exact spare parts needed to keep your operations running smoothly.",
    },
    {
      title: "Sourcing & Quality Assurance",
      text: "We work with trusted suppliers to ensure high-quality, reliable spare parts that meet industry standards.",
    },
    {
      title: "Inventory & Availability",
      text: "Critical parts are stocked and managed efficiently to ensure quick availability and minimal downtime.",
    },
    {
      title: "Fast Delivery & Support",
      text: "We provide timely delivery and ongoing support to ensure your business operations continue without interruption.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        video={
          "https://res.cloudinary.com/dpn6mdpxd/video/upload/v1777150506/Spare_Parts_grpztq.mp4"
        }
        // image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Spare Parts"
        texts={[
            "Our Spare Parts Division is built on a strong operational framework that prioritizes accuracy, efficiency, and reliability at every stage. From identifying the correct component to final delivery, our processes are designed to eliminate delays and ensure that customers receive exactly what they need, when they need it. Leveraging deep product knowledge and technical expertise, our team supports clients in selecting the right parts for both routine maintenance and complex repair requirements. We understand that equipment downtime can directly impact productivity and operational continuity. That is why we focus on maintaining optimal inventory levels, streamlined logistics, and responsive service support across all our locations.",
        ]}
      />
      {/* <SubPageHeading
    
      title={"Spare Parts"}
        fullHeight
        image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776984818/spare-parts-background-beautiful-illustration-picture-generative-ai.jpg_yanoie.jpg"}
      /> */}
      <ValuesSection
        description="Our Spare Parts Division is built on a strong operational framework that prioritizes accuracy, efficiency, and reliability at every stage. From identifying the correct component to final delivery, our processes are designed to eliminate delays and ensure that customers receive exactly what they need, when they need it. Leveraging deep product knowledge and technical expertise, our team supports clients in selecting the right parts for both routine maintenance and complex repair requirements. We understand that equipment downtime can directly impact productivity and operational continuity. That is why we focus on maintaining optimal inventory levels, streamlined logistics, and responsive service support across all our locations. Our integrated supply chain enables us to respond quickly to urgent requirements, ensuring that critical components are readily available and delivered with minimal lead time, helping businesses maintain smooth and uninterrupted operations. Beyond supply, we are committed to building long-term partnerships by delivering consistent value through dependable service and technical support. Our customers rely on us not only for genuine spare parts, but also for expert guidance, transparency, and after-sales support that enhances the lifecycle and performance of their equipment. This commitment reinforces our position as a trusted partner for industries and organizations across the region."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/video/upload/v1777552035/Spare-parts_ar3bnn.mp4"
        imageAlt="Spare Parts Division"
        ctaHref={false}
        width="max-w-7xl mx-auto"
        imagePosition="left"
      />
      {/* <ValuesSection
        description="Every spare part is sourced directly from leading global brands and engineered to deliver long service life, optimal compatibility, and consistent performance in the region’s demanding operating conditions."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421591/61_8ev0eJXL._AC_SL1000__vbdhct.png"
        imageAlt="Spare Part"
        width="max-w-7xl mx-auto"
        ctaHref={false}
        imagePosition="right"
      /> */}
      <FeaturesEngineeringSection
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776984884/transportation.jpg_f3k4sm.jpg"
        heading="Product Coverage"
        items={coverage}
      />
      <OfferingsSection
        heading="Service Support & Availability"
        texts={[
          "To ensure uninterrupted operation for our clients, we maintain ready stock for fast replacement and service needs across multiple sectors",
          "Whether it is an emergency breakdown, scheduled servicing, or major overhaul, our Spare Parts Division ensures prompt delivery, accurate part identification, and technical assistance to restore system performance quickly and efficiently.",
        ]}
        items={support}
      />
      <SparePartsTimeline items={items} />
    </main>
  );
}

export default SparePartsPage;
