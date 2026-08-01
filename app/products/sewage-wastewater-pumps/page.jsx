import KitchenItems from "@/components/Services/Kitchen/KitchenItems";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Sewage & Wastewater Pumps",
  description:
    "MAHY Khoory Group supplies sewage and wastewater pumps capable of handling large solid particles, fibrous waste and sludge for smooth operation in sewage networks and treatment plants.",
  alternates: { canonical: "/products/sewage-wastewater-pumps" },
};

function SewagePumpsPage() {
  const features = [
    {
      title: "Advanced Non-Clog Hydraulics",
      text: "quipped with vortex, semi-open channel, or closed channel impellers, providing exceptional solids-handling capability while minimizing clogging and blockage.",
      image: "/assets/sewage-water-pumps1.png_jxevnp.jpg",
    },
    {
      title: "Solids-Handling Capacity",
      text: "Capable of handling large solid particles, fibrous waste, and sludge—ensuring smooth operation in sewage networks and wastewater plants.",
      image: "/assets/sewage-water-pumps2.png.jpg_sdwjwk.png",
    },
    {
      title: "Cutter & Grinder Options",
      text: "Select models include integrated cutter or grinder mechanisms, ideal for applications involving sanitary products, wipes, plastics, and fibrous materials.",
      image: "/assets/sewage-water-pumps3.png.jpg_hzqjlj.png",
    },
    {
      title: "Heavy-Duty Cast Iron Construction",
      text: "Pump body, motor housing, and critical components built with corrosion-resistant cast iron for enhanced durability and long operating life.",
      image: "/assets/sewage-water-pumps4_ku2vqq.png",
    },
    {
      title: "Auto-Coupling System Compatibility",
      text: "Available with guide rails and auto-coupling bases, allowing quick installation and easy removal for maintenance without entering the wet well.",
      image: "/assets/sewage-water-pumps5_z1lkaf.png",
    },
    {
      title: "Reliable Motor Protection",
      text: "Includes thermal overload protection, oil-chamber sealing, double mechanical seals, moisture sensors (optional), and high-grade bearings for extended life.",
      image: "/assets/sewage-water-pumps6.png_dcedw0.jpg",
    },
    {
      title: "Wide Duty Range",
      text: "Offered in various capacities—from small commercial sump pumps to large municipal sewage transfer units.",
      image: "/assets/sewage-water-pumps7_iljkxj.png",
    },
  ];
  const applications = [
    {
      title: "Sewage Lifting Stations & Pumping Chambers",
      text: "Ideal for underground pits, STP inlets, and municipal pumping stations.",
    },
    {
      title: "Municipal Wastewater Networks",
      text: "Designed for raw sewage transfer, stormwater pumping, and mainline sewer systems.",
    },
    {
      title: "Industrial Wastewater Treatment",
      text: "Suitable for effluent transfer, sludge handling, and wastewater process streams in factories and plants.",
    },
    {
      title: "Commercial Building Sewage Discharge",
      text: "Used in malls, hotels, hospitals, residential towers, labour camps, and complexes with basement sewage pits.",
    },
    {
      title: "Treatment Plant Inlet/Outlet & Return Stations",
      text: "Supports STP operations including inlet channels, secondary sludge movement, equalization tank transfer, and clarifier return systems.",
    },
  ];

  return (
    <main>
      {/* <SubPageHeading
                title={"Sewage & Wastewater Pumps"}
                image={"/gallery/gallery-1.jpg"}
            /> */}

      <PageHeading
        title={"Sewage & Wastewater Pumps"}
        // description={
        //   "Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."
        // }
        image="/assets/sewage-water-pumps_puwwwp.png"
      />
      <KitchenMenu
        heading="Product-Oriented Key Features"
        text="Sewage and wastewater pumps are engineered for the demanding task of transporting solids-laden liquids, sludge, and raw sewage in municipal, industrial, and commercial environments. Designed for heavy-duty, continuous operation, these pumps feature robust construction, advanced impeller technology, and reliable motor protection systems—ensuring long-term performance even under harsh conditions. They are suitable for both dry and wet pit installations and support fully automatic operation through compatible control systems."
        items={features}
      />
      <KitchenItems image="/assets/sewage-water-pumps8_ipfngh.png" title="Applications" items={applications} />
    </main>
  );
}

export default SewagePumpsPage;
