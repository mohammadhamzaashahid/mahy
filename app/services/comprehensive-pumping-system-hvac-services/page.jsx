import CompaniesSectors from "@/components/CompaniesSectors";
import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection";
import HoverableColumns from "@/components/HoverableColumns";
import ServicedHotelApartments from "@/components/Services/ServicedHotelApartments";
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import ServicesPumping from "@/components/ServicesPumping";
import ServicesGlobally from "@/components/UI/companies/detail/ServicesGlobally";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import PageHeading from "@/components/UI/PageHeading";

function PumpingSystemServicesPage() {
  const items = [
    "Pre-Installation Inspection",
    "Detailed inspection of all supplied pumps and accessories",
    "Verification of quality, specifications, and site readiness",
    "Early issue detection to prevent future failures",
    "Professional Commissioning",
    "Complete commissioning of all installed pump sets",
    "Precise laser alignment for chilled water and other critical pumps",
    "Performance verification for smooth, quiet, and efficient operation from day one",
    "Comprehensive Repair & Support",
    "Warranty Repairs: Execution of all warranty-covered work as per manufacturer terms",
    "Non-Warranty Repairs: Fast, accurate fault diagnosis and repair to restore operation quickly",
    "Workshop Overhauls: Fully equipped workshop for major repairs, refurbishment, and rebalancing",
    "Warranty Claim Management: End-to-end handling of claims and coordination with manufacturers, saving you time and effort",
  ];

  const steps = [
    {
      title: "Integrated HVAC, Water Heating & Pumping Solutions",
      desc:
        "End‑to‑end supply of VRF/VRV systems, DX units, electric and solar water heaters, pressure booster sets, industrial pumps, and energy‑efficient electric motors—supported by design assistance, system sizing, and technical consultation",
    },
    {
      title: "Technical Support, Commissioning & After‑Sales Services",
      desc: "Comprehensive engineering support including installation guidance, testing, commissioning, diagnostics, preventive maintenance, and availability of genuine spare parts to ensure long‑term system reliability."
    },
    {
      title: "Project‑Driven Electromechanical Expertise",
      desc: "Delivery of coordinated HVAC and pumping solutions for commercial, residential, hospitality, industrial, and mixed‑use developments, working closely with consultants, contractors, and developers from design to final commissioning"
    },
    {
      title: "Sustainable & Energy‑Efficient System Advisory",
      desc: "Promotion and integration of high‑efficiency technologies—such as inverter-driven compressors, variable‑speed pumping, high‑efficiency motors, and solar-assisted heating—helping clients reduce energy consumption and operational costs."
    }
  ]

  const hoverItems = [
  {
    no: "01",
    title: "Pumping System Installation & Commissioning",
    desc:
      "We support projects with structured planning, precise system selection, and technical guidance from concept to completion. Our development approach ensures every solution is engineered for efficiency, reliability, and long‑term performance.",
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777614302/industrial-ventilation-system-with-metal-ducts-hvac-units-2_uaydfh.jpg",
  },
  {
    no: "02",
    title: "Air Conditioning Installation, Care & Repair",
    desc:
      "We analyze industry trends, customer needs, and competitive landscapes to guide smarter decision‑making and product positioning. Our insights help shape strategies that align with market demand and drive sustainable business growth.",
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777614151/air-conditioning-hvac-roof-industrial-building_yepg08.jpg",
  },
  {
    no: "03",
    title: "Annual Maintenance Contracts",
    desc:
      "We provide strategic guidance that helps organizations streamline operations, strengthen decision‑making, and unlock new growth opportunities. Our consulting approach focuses on aligning processes, technology, and market needs to drive measurable, long‑term business performance.",
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777614146/3d-rendering-ventilation-system_sjedm3.jpg",
  },
  {
    no: "04",
    title: "Repair, Overhaul & Warranty Support",
    desc:
      "We strengthen project value by promoting energy‑efficient HVAC, water heating, and pumping technologies that reduce long‑term operating costs and improve lifecycle performance",
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777614146/industrial-hvac-system-manufacturing-plant_nioui4.jpg",
  },
];
  const acItems = [
    {
      title: "Expert Installation & Commissioning",
      textItems: [
        "Installation of new AC systems in line with design drawings and specifications",
        "Thorough testing, balancing, and commissioning of units",
        "Verification of capacity, airflow, and temperature performance",
      ],
    },
    {
      title: "Hassle-Free Warranty Repairs",
      textItems: [
        "Direct coordination with OEMs for warranty-covered issues",
        "Genuine spare parts and documented service",
        "Minimal disruption to occupants and operations",
      ],
    },
    {
      title: "Reliable Non-Warranty Repairs",
      textItems: [
        "Prompt response to breakdowns and performance complaints",
        "Transparent fault reporting and cost estimates",
        "Long-lasting repair solutions, not just temporary fixes",
      ],
    },
  ];


   const Eitems = [
    {
      title: "Collaborative",
      text: "We work collaboratively with clients, consultants, and contractors to ensure every system is seamlessly integrated and optimized for performance. Our team-driven approach fosters transparency, alignment, and efficiency, delivering solutions that meet project goals with precision.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1777616461/Collabrative_gphizt.jpg",
    },
    {
      title: "Proven Results",
      text: "Our track record spans decades of successful HVAC and pumping installations across major UAE developments. We consistently deliver systems that perform reliably, meet project demands, and exceed client expectations.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1777616457/Proven_results_qgyjp4.jpg",
    },
    {
      title: "Tailored Solutions",
      text: "We customize every HVAC, water heating, and pumping system to match each project’s unique technical, operational, and efficiency requirements. Our solutions are engineered around your environment, ensuring optimal performance, reliability, and long‑term value.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1777616454/Tailored_Solutions_d6xth2.jpg",
    },
  ]

  return (
    <main>
      <PageHeading
        title={"Comprehensive Pumping System & HVAC Solutions"}
        description="Expert installation, commissioning, repair, and Annual Maintenance Contracts (AMC) for air conditioning, pumping systems, water heaters, swimming pools, and fountains. Your single-point solution for mechanical system reliability."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776840938/maintenance-engineers-inspect-system-pumping-stations-pipes-delivering-clean-water-water-storage-tanks-community_zgcca6.jpg"
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777025256/comprehensive-pumping-system-3_cvxj3a.jpg"
          title={"Precision from Start to Finish"}
          texts={[
            "We provide end-to-end services for chilled water, domestic water supply (transfer & booster), sewerage , and other pumping systems, focusing on optimal performance and minimal downtime.",
          ]}
          items={items}
          noCheck={[0, 4, 8]}
          boldLabels={true}
        />
      </section>
      <SolarPanelImageGrid
        heading="Air Conditioning: Installation, Care & Repair"
        text={
          "We offer complete solutions for air conditioning and ventilation systems, ensuring consistent comfort, reliability, and energy efficiency."
        }
        items={acItems}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777025222/comprehensive-pumping-system-2_kt1cfj.png"
      />
      <SolarPanelQuoteGrid
        heading="Annual Maintenance Contracts (AMC): Proactive Peace of Mind"
        text={
          "Our Annual Maintenance Contracts (AMC) are designed to keep your systems running at peak performance while reducing unexpected repair costs and downtime."
        }
        text2={"We offer tailored AMC packages for:"}
        items={[
          "Pumping Systems: Chilled water, booster, transfer, sewerage and related systems",
          "Water Heaters & Calorifiers",
          "Swimming Pool Filtration & Plant Systems",
          "Water Fountains & Water Feature Systems",
          "Air Conditioning & Ventilation Systems",
        ]}
        quoteText="Key Benefits of Our AMC"
        quoteItems={[
          "Regular, planned inspections and servicing to detect and address issues early.",
          "Faster response times and priority scheduling for contract customers.",
          "Fine-tuning and cleaning of equipment to improve efficiency and reduce utility costs.",
          "Proper care and timely interventions that protect your investment over the long term.",
          "Fixed or structured costs that make it easier to plan and control maintenance expenses.",
        ]}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777025219/comprehensive-pumping-system-1_tzdqvk.jpg"
      />

      <WhoWeAre
        showButton={false}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777613764/worker-refilling-hvac-system-refrigerant_r0wiym.jpg"
        text="Whether you need a one-time repair, a full system overhaul, or a long-term maintenance partner, our service team delivers reliability, accountability, and technical excellence. Talk to us today to discuss a service plan or AMC tailored to your building and operational needs."
        heading="Your Single-Point Solution for Mechanical System Reliability"
      />
      <HoverableColumns items={hoverItems} />
      <ServicedHotelApartments items={Eitems} text = "Backed by decades of industry experience, we provide precise, reliable solutions that perform from day one." heading = "Expertise That Delivers Results" topHeading = "Why Choose Us" />
      <ComprehensiveProcessSection 
      heading="Our Services"
      subHeading=""
      steps={steps}
      image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777615511/freelancer-developing-startup-project-analyzing-financial-statistics_gclscz.jpg"
      />
      {/* <ServicesPumping /> */}
    </main>
  );
}

export default PumpingSystemServicesPage;



  




// subHeading = "Our process"
//   image = "/gallery/gallery-1.jpg"
//   heading = "A simple yet powerful and efficient process"
//   steps = [
//     {
//       title: "Market research",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
//     },
//     {
//       title: "Business consulting",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
//     },
//     {
//       title: "Finance strategy",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
//     },
//     {
//       title: "Business planning",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
//     },
//   ]