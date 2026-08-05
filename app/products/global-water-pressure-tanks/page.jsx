import EngProcessSection from "@/components/Services/EngProcessSection";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";

export const metadata = {
  title: "Global Water Solutions Pressure Tanks",
  description:
    "MAHY Khoory Group supplies Global Water Solutions pressure tanks manufactured from premium steel and composite materials for long-term durability and corrosion resistance.",
  alternates: { canonical: "/products/global-water-pressure-tanks" },
};

function GlobalWaterPressureTanksPage() {

    const advantages = [
    {
      heading: "Advanced Composite & Steel Construction",
      text: "Manufactured using premium steel and composite materials designed for long‑term durability, corrosion resistance, and superior structural integrity.",
    },
    {
      heading: "Engineered for High Performance",
      text: "Built to maintain consistent water pressure, reduce pump cycling, and enhance overall system efficiency across residential, commercial, and industrial applications.",
    },
    {
      heading: "Wide Product Range ",
      text: "Includes diaphragm tanks, bladder tanks, composite tanks, and specialized models for potable water, irrigation, HVAC, and booster systems.",
    },
    {
      heading: "Reliable Internal Components",
      text: "Equipped with high‑grade diaphragms and liners designed to prevent leaks, ensure clean water contact, and deliver stable pressure performance",
    },
    {
      heading: "Corrosion & Rust Protection",
      text: "Features advanced coatings, composite shells, and internal barriers that protect against moisture, chemical exposure, and harsh environmental conditions.",
    },
    {
      heading: "Optimized for System Efficiency",
      text: "Designed to extend pump life, reduce energy consumption, and maintain steady water flow in demanding installations.",
    },
    {
      heading: "Certified Quality Standards ",
      text: "Manufactured in compliance with global performance and safety standards, ensuring reliability and long‑term operational confidence."
    },
    {
      heading: "Versatile Installation Compatibility",
      text: "Suitable for homes, buildings, farms, booster pump systems, RO systems, and industrial water supply networks.",
    },
  ];
  return (
    <main>
      <PageHeading
        title={"Global Water Solutions Pressure Tanks"}
        description={
          "Global Water Solutions Pressure Tanks are engineered to ensure efficient pressure control, system stability, and long service life in water supply applications. Designed for consistent performance, these tanks support smooth operation of pumps and water networks."
        }
        image="/assets/products/global-water-pressure-tanks/ptanks1_pgasx4.png"
      />
      <div className="my-8">
        <SolarPanelQuoteGrid
          image="/assets/shared/ptanks2_uafxz4.png"
          heading="Key Highlights"
          text="Ideal for booster pump systems, filtration units, and residential or commercial water supply networks, Global Water Solutions tanks help reduce pump cycling, maintain steady pressure, and protect system components."
          items={[
            "High-quality pressure vessels with durable construction",
            "Designed for booster pumps and filtration systems",
            "Improves system efficiency and pump lifespan",
            "Suitable for residential, commercial, and industrial use",
          ]}
          quoteText="Global Water Solutions Pressure Tanks deliver reliable pressure management and dependable water system performance."
        />

        <EngProcessSection
          heading="Water Solutions"
          items={advantages}
          imageAspect="landscape"
          images={[
            "/assets/products/global-water-pressure-tanks/steel-pipelines-cables-plant_1_zwqhdq.jpg",
            "/assets/products/global-water-pressure-tanks/steel-pipelines-cables-plant_osu4vz.jpg",
            "/assets/products/global-water-pressure-tanks/equipment-contemporary-winery_jx6xqr.jpg"
          ]}
        />
      </div>
    </main>
  );
}

export default GlobalWaterPressureTanksPage;
