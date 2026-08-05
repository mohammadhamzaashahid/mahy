import CompaniesSectors from "@/components/CompaniesSectors";
import EngProcessSection from "@/components/Services/EngProcessSection";
import PageHeading from "@/components/UI/PageHeading";
import { text } from "d3";

export const metadata = {
  title: "VINZOR Aluminum Ladders",
  description:
    "MAHY Khoory Group supplies VINZOR aluminum ladders crafted from high-grade, corrosion-resistant aluminum designed for long-term durability across all ladder types.",
  alternates: { canonical: "/products/vinzor-aluminum-ladders" },
};

function VinzorAluminumLaddersPage() {

    const advantages = [
    {
      heading: "Premium Aluminum Construction",
      text: "Crafted from high grade, corrosion resistant aluminum designed for long term durability across all ladder types.",
    },
    {
      heading: "Lightweight Yet High Strength Design",
      text: "Engineered to offer maximum stability while remaining easy to carry, position, and store",
    },
    {
      heading: "Enhanced Safety StandardsPrecision",
      text: "Equipped with anti slip steps, reinforced side rails, and secure locking mechanisms across the full range",
    },
    {
      heading: "Versatile Product Range",
      text: "Includes step ladders, platform ladders, extension ladders, and multipurpose configurations to suit residential, commercial, and industrial needs.",
    },
    {
      heading: "Precision Engineering",
      text: "Manufactured with strict quality control to ensure consistent performance, structural integrity, and user safety.",
    },
    {
      heading: "Ergonomic & User Friendly",
      text: "Designed for comfortable climbing, stable footing, and smooth operation in both indoor and outdoor environments",
    },
    {
      heading: "Weather & Rust Resistant",
      text: "Built to withstand harsh climates, moisture, and heavy usage without compromising strength"
    },
    {
      heading: "Trusted for Professional Use",
      text: "Suitable for contractors, technicians, warehouses, retail spaces, and home maintenance tasks.",
    },
  ];
  return (
    <main>
      <PageHeading
        title={"VINZOR Aluminum Ladders"}
        // description={
        //   "Global Water Solutions Pressure Tanks are engineered to ensure efficient pressure control, system stability, and long service life in water supply applications. Designed for consistent performance, these tanks support smooth operation of pumps and water networks."
        // }
        image="/assets/products/vinzor-aluminum-ladders/ladders-1_fzdatr.jpg"
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={"/assets/products/vinzor-aluminum-ladders/ladders-2_bb8efs.png"}
          title={"Key Highlights"}
          texts={[
            "VINZOR Aluminum Ladders are designed to deliver strength, stability, and lightweight performance for a wide range of applications. Manufactured using high-quality aluminum, these ladders offer excellent load-bearing capacity while remaining easy to handle and transport.",
            "Suitable for household tasks, professional maintenance, and industrial work, VINZOR ladders are built with safety-focused features such as anti-slip steps and reinforced joints, ensuring reliable performance in daily use.",
          ]}
          items={[
            "Lightweight yet strong aluminum construction",
            "Suitable for household, professional, and industrial use",
            "Stable design with enhanced safety features",
            "Long-lasting and corrosion-resistant",
          ]}
        />

         <EngProcessSection
                heading="Vinzor Aluminum Ladders"
                items={advantages}
                images={[
                  "/assets/products/vinzor-aluminum-ladders/manual-worker-leaning-ladder_zxfo9v.jpg",
                  "/assets/products/vinzor-aluminum-ladders/silver-aluminum-step-ladder-standing-glossy-floor-modern-hangar_svuvrv.jpg",
                  "/assets/products/vinzor-aluminum-ladders/metal-staircase-stands-near-beautifully-textured-black-concrete-wall-lit-from_wwgozl.jpg",
                  "/assets/products/vinzor-aluminum-ladders/front-view-girl-cute-dog-christmas-concept_lwqzl9.jpg"
                   
                ]}
                imageAspect={"portrait"}
              />
      </section>
    </main>
  );
}

export default VinzorAluminumLaddersPage;
