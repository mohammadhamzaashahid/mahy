import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import WhoWeAre from "@/components/UI/home/WhoWeAre";

function RecyclableWasteManagementDivision() {
  const services = [
    {
      title: "Waste Paper and Cardboard Collection",
      text: "Scheduled collection of commercial, industrial, and institutional paper waste using roll-off containers, compactors, and pickup vehicles.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777288916/Waste_Paper_and_Cartboard_collection_y4aqvf.jpg",
    },
    {
      title: "Multi-Recyclables Management",
      text: "Collection and segregation of additional recyclable materials such as plastics, metals, and beverage cans.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777289029/Multi_recylable_Mangement-2_fkt6uo.jpg",
    },

    {
      title: "On-Site Recycling Solutions",
      text: "Provision of balers, bins, dumpsters, and staff training to enable effective source segregation at client locations.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777288912/On_Site_Recycling_Solution_owmis2.jpg",
    },
    {
      title: "Closed-Loop Recycling Support",
      text: "Direct coordination with the Group’s paper mills to ensure recovered materials are efficiently reintegrated into production.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777288897/Closed_loop_recycling_support_hs0ynv.jpg",
    },
  ];

  const cards = [
    {
      title: "Operations and Scale",
      text: "RWMD operates large-scale collection and processing across Dubai and the Northern Emirates, serving schools, factories, warehouses, offices, and commercial centers with daily collection routes and consolidation activities.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Geographic Coverage",
      text: "Based in Dubai, RWMD serves the entire emirate and supports nationwide recycling efforts, working alongside Al Dhafra Waste Collection to ensure UAE-wide recyclable waste coverage.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Strategic Importance",
      text: "RWMD secures locally collected recycled fibre, reduces reliance on imports, stabilizes production costs, and enables 100% recycled content in paper products.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Leadership and Workforce",
      text: "Managed by experienced recycling and logistics professionals, supported by trained field teams ensuring safe handling, logistics coordination, and uninterrupted supply chains.",
      image: "/solar/solar-1.svg",
    },
  ];

  const overview = [
    {
      heading: "Background and Establishment",
      text: "RWMD was established as part of the MAHY Khoory Group’s long-term sustainability strategy to secure a stable source of recycled fibre for Union Paper Mills and Al Dhafra Paper Manufacturing.",
      lastText:
        "Operating under the Green Arabia platform, it links waste collection directly with manufacturing within a vertically integrated recycling network.",
    },
    {
      heading: "Quality, Safety, and Regulatory Compliance",
      text: "The division operates in full compliance with local waste management regulations, with all vehicles and equipment meeting safety and regulatory standards.",
      bullets: [
        "Routine inspections and preventive maintenance",
        "Strict hygiene and safety protocols",
        "Controlled collection, sorting, and baling processes",
      ],
      lastText:
        "Ensures worker safety, operational reliability, and consistent material quality.",
    },
    {
      heading: "Environmental Impact and Sustainability",
      text: "RWMD delivers measurable environmental benefits through structured recycling programs and efficient waste diversion.",
      bullets: [
        "Conservation of trees and natural resources",
        "Reduction of landfill usage",
        "Lower energy consumption through recycling",
      ],
      lastText:
        "Supports UAE environmental goals and extends sustainability practices to customers and communities.",
    },
    {
      heading: "Infrastructure and Fleet",
      text: "RWMD maintains modern infrastructure to support large-scale recycling operations.",
      bullets: [
        "Fleet of recyclable waste collection trucks",
        "Forklifts and material-handling equipment",
        "Sorting lines and high-capacity baling machines",
        "Bins, containers, and compactors at customer sites",
      ],
      lastText:
        "Digital tracking systems monitor collection volumes and material flows for optimization.",
    },
    {
      heading: "Innovation and Continuous Improvement",
      text: "Innovation is central to RWMD operations, focusing on efficiency and environmental responsibility.",
      bullets: [
        "Digital route optimization",
        "Low-emission vehicles",
        "Customer recycling performance reporting tools",
      ],
      lastText:
        "These initiatives reinforce RWMD’s position as a modern recycling service provider.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        video={
          "https://res.cloudinary.com/dpn6mdpxd/video/upload/v1773132024/RWMD_lrlpyc.mp4"
        }
        heading="Recyclable Waste Management Division"
        texts={[
          "The Recyclable Waste Management Division (RWMD) is the Dubai-based recycling arm of the MAHY Khoory Group, supporting its integrated recycling and manufacturing ecosystem.",
          "RWMD plays a critical role in the collection, consolidation, and supply of recyclable materials—primarily waste paper and cardboard—to the Group’s manufacturing facilities.",
          "With the capacity to process over 1,300 metric tonnes of waste paper per day, RWMD ensures a consistent and sustainable supply of recovered fibre within the Group’s circular economy model.",
        ]}
      />
      <WhoWeAre
        heading="Our Mission"
        topHeading=""
        text="RWMD’s mission is to drive the UAE’s transition toward a fully circular, resource‑efficient economy by delivering high‑performance, reliable, and scalable recyclable waste management solutions.
The division is dedicated to maximizing landfill diversion, improving recycling participation across commercial and industrial sectors, and ensuring a continuous supply of high‑quality recovered fibre for the Group’s manufacturing units.
Through modern equipment, optimized logistics, digital monitoring, and customer‑focused recycling programs, RWMD strives to enhance operational efficiency, reduce environmental impact, and support national sustainability objectives while maintaining the highest standards of safety, compliance, and service excellence."
        showButton={false}
        invert={false}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777287829/Mission-2_uxdx8g.jpg"
        imageAlt="Our Mission"
      />
      <WhoWeAre
        heading="Our Vision"
        topHeading=""
        text="RWMD envisions becoming the UAE’s leading and most innovative recyclable waste management provider—recognized for its environmental impact, operational excellence, and seamless integration within the MAHY Khoory Group’s recycling‑to‑manufacturing value chain.
The division aims to set new benchmarks in recycling efficiency, digital transformation, and sustainable resource recovery by expanding its capabilities, adopting low‑emission technologies, and strengthening partnerships across industries and communities.
RWMD aspires to shape a future where waste is viewed as a valuable resource, enabling a fully circular manufacturing ecosystem that supports national sustainability goals and reinforces the Group’s leadership in responsible, future‑ready recycling solutions."
        showButton={false}
        invert={true}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777287703/Vision_kd0x6t.jpg"
        imageAlt="Our Vision"
      />
      <KitchenMenu
        heading="Services and Capabilities"
        text="RWMD delivers comprehensive recyclable waste management services across industrial, commercial, and institutional sectors."
        items={services}
      />
      <PumpingServiceCards
        cards={cards}
        heading="Recyclable Waste Management Division"
        subHeading="Recycling Infrastructure & Circular Economy Solutions"
        tag="[ RECYCLING DIVISION ]"
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
      />
      <FeaturesEngineeringSection
        heading="RWMD Overview"
        items={overview}
        textPosition="right"
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777288921/RWMD_-_Base_image_pwl9eh.png"
      />
    </main>
  );
}

export default RecyclableWasteManagementDivision;
