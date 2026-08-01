import SolarPanelImagesGrid from "@/components/Services/SolarPanel/SolarPanelImagesGrid";
import WasteCollectionItems from "@/components/Services/WasteCollection/WasteCollectionItems";
import WasteCollectionScrollMovingCards from "@/components/Services/WasteCollection/WasteCollectionScrollMovingCards";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Chilled Water Pumps",
  description:
    "Chilled water pumps from MAHY Khoory Group are purpose-built for HVAC circulation, district cooling systems and centralized air-conditioning networks.",
  alternates: { canonical: "/products/chilled-water-pumps" },
};

function ChilldWaterPumpsPage() {
  const overviewItems = [
    {
      title: "Optimized for HVAC & District Cooling",
      bgImage:
        "/assets/chilled-water-pumps2.png_tslxu6.jpg",
      text: "Chilled water pumps are purpose-built for HVAC circulation, district cooling systems, and centralized air-conditioning networks, ensuring highly efficient cooling water movement and stable thermal performance.",
    },

    {
      title: "Reliable Continuous-Duty Performance",
      bgImage: "/assets/factory-with-blue-pipe-blue-pipe-with-word-power-it_fseudd.jpg",
      text: "Designed for continuous-duty operation, these pumps maintain precise flow rates and consistent pressure to support heat exchangers, AHUs, FCUs, and large-scale cooling loops. Their robust construction, energy-efficient motors, and compatibility with modern control systems make them essential for high-performance HVAC infrastructure.",
    },
    {
      title: "Energy-Efficient Operation",
      bgImage: "/assets/comprehensive-pumping-system-4_do1k9f.jpg",
      text: "Engineered with high-efficiency motors and optimized hydraulic design, these pumps significantly reduce energy consumption while maintaining optimal performance. Their ability to adapt to variable load conditions ensures cost-effective operation in both commercial and industrial cooling applications.",
    },

    {
      title: "Robust & Low-Maintenance Design",
      bgImage: "/assets/tpumps2_qbtnwi.jpg",
      text: "Built with durable materials and precision engineering, these pumps are designed to withstand demanding environments with minimal maintenance requirements. Their reliability reduces downtime and ensures long-term operational stability across HVAC and district cooling systems.",
    },
  ];
  const features = [
    {
      title: "Heavy-Duty, Long-Life Construction",
      text: "Engineered with cast iron or ductile iron castings, stainless steel impellers, and high-grade bearings for long-term reliability under 24/7 operational conditions.",
      icon: "/waste/waste-1.svg",
    },
    {
      title: "High-Efficiency Motors (IE3 / IE4)",
      text: "Equipped with premium-efficiency motors that significantly reduce operating costs, enhance system performance, and comply with global energy standards.",
      icon: "/waste/waste-2.svg",
    },
    {
      title: "VFD (Variable Frequency Drive) Compatibility",
      text: "Designed for seamless integration with VFD control systems, enabling variable-speed operation, reduced energy consumption, lower system stress, and extended equipment lifespan.",
      icon: "/waste/waste-3.svg",
    },
    {
      title: "Low-Noise, Vibration-Optimized Hydraulics",
      text: "Hydraulically balanced impellers, vibration-dampened bases, and precision-manufactured components ensure exceptionally quiet operation—ideal for mechanical rooms and commercial environments.",
      icon: "/waste/waste-4.svg",
    },
    {
      title: "Multiple Configurations Available",
      text: "Options include:",
      options: [
        "Inline centrifugal pumps for compact pipe-aligned installations",
        "End-suction horizontal pumps for high-flow and high-head requirements",
        "Split-case pumps (optional) for large-capacity district cooling applications",
        "Close-coupled or long-coupled designs for system flexibility",
      ],
      icon: "/waste/waste-1.svg",
    },
    {
      title: "Ease of Service & Maintenance",
      text: "Features such as back-pull-out design (for selected models), replaceable wear rings, and accessible components help minimize downtime and simplify servicing.",
      icon: "/waste/waste-2.svg",
    },
  ];
  const applications = [
    {
      title: "HVAC Chilled Water Networks",
      text: "Ensures efficient circulation between chillers, AHUs, FCUs, and cooling coils.",
      bgImage:
        "/assets/HVAC_Chilled_water_network_ohvuyf.jpg",
    },
    {
      title: "Central A/C Systems",
      text: "Supports centralized chilled-water air-conditioning systems in mixed-use developments.",
      bgImage:
        "/assets/Central_AC_System_uqjejj.jpg",
    },
    // {
    //   title: "District Cooling Plants",
    //   text: "Ideal for primary, secondary, and tertiary pumping systems across large cooling networks.",
    // },
    {
      title: "Commercial Building Cooling Loops",
      bgImage:
        "/assets/Commercial_Building_loops_lazkbs.jpg",
      text: "Used in malls, hotels, hospitals, residential towers, and office complexes requiring reliable cooling water distribution.",
    },

    {
      title: "Industrial Cooling Processes",
      text: "Suitable for industrial heat exchangers, machinery cooling loops, process chillers, and production facility cooling lines.",
      bgImage:
        "/assets/Industrial_Cooling_process_k1maer.jpg",
    },
  ];

  return (
    <main>
      {/* <SubPageHeading
        title="Chilled Water Pumps"
        image="/assets/gallery-1_exhyck.jpg"
      /> */}

      <PageHeading
        title="Chilled Water Pumps"
        // description={
        //   "Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."
        // }
        image="/assets/chilled-water-pumps1_n8dxpq.png"
      />
      <div className="my-20">
        <SolarPanelImagesGrid
          images={[
            "/assets/Copilot_20260421_090656_huhtpp.png",
            "/assets/chilled-water-pumps3.png_lug0j8.jpg",
            "/assets/chilled-water-pumps2.png_tslxu6.jpg",
            "/assets/vertical-shot-river-roads-city-clear-blue-sky_rbu8an.jpg",
          ]}
          heading="Overview"
          items={overviewItems}
          text1="Trusted"
          text2="for Thermal Stability"
        />
      </div>
      <WasteCollectionItems
        heading={"Product-Oriented Key Features"}
        items={features}
      />
      <WasteCollectionScrollMovingCards
        heading="Applications"
        items={applications}
      />
    </main>
  );
}

export default ChilldWaterPumpsPage;
