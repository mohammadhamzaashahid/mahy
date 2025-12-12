"use client";

import { useState } from "react";
import StickyMediaPane from "../UI/StickySection/StickyMediaPane";
import ScrollNarrativePane from "../UI/StickySection/ScrollNarrativePane";

const IMAGES = [
  "/processes/UAE.avif",
  "/processes/manufacturer.avif",
  "/processes/customer-service.avif",
];

export default function EnterprisePinnedSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen">
          
          <StickyMediaPane image={IMAGES[activeIndex]} />

          <ScrollNarrativePane onActiveChange={setActiveIndex} />

        </div>
      </div>
    </section>
  );
}
