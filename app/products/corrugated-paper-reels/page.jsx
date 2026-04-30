import HoverableColumns from "@/components/HoverableColumns";
import BoosterPumpRevealSection from "@/components/Products/BoosterPumpRevealSection";
import WasteCollectionGrid from "@/components/Services/WasteCollection/WasteCollectionGrid";
import ServicesPumping from "@/components/ServicesPumping";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";
import { TbPaperBag } from "react-icons/tb";

function CorrugatedPaperReelsPage() {
  const keyProductFeatures = [
    {
      title: "Union Testliner (90–200 GSM)",
      desc: "High-quality recycled linerboard suitable for outer layers of corrugated packaging, offering strength, printability, and cost efficiency.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104677/Testlinear_ikbc7c.png",
    },
    {
      title: "Unionflute (90–175 GSM)",
      desc: "Durable fluting medium designed for corrugated board applications, providing excellent rigidity, cushioning, and structural performance.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104675/Union_Flute_scjkz4.png",
    },
    {
      title: "Unioncore Board (190–450 GSM)",
      desc: "Heavy-duty core board used in paper tubes, cores, and industrial applications, delivering superior strength and load-bearing capacity.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104674/coreboard_ysfopp.png",
    },
    {
      title: "Semikraft Liner (125–200 GSM)",
      desc: "Semi-chemical kraft liner combining strength and surface quality, ideal for packaging solutions requiring enhanced durability and appearance.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104675/Semikraft_knjtkd.png",
    },
    // {
    //   title: "Customizable Widths & Specifications",
    //   desc: "Reels can be supplied in tailored widths to fit any corrugator or converting line, with options for:• Kraft liner• Test liner• Fluting paper• Medium paper",
    //   image:
    //     "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg",
    // },
    // {
    //   title: "Eco-Friendly Manufacturing",
    //   desc: "Produced using recycled fiber, optimized resource consumption, and environmentally responsible processes to support sustainable packaging.",
    //   image:
    //     "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg",
    // },
  ];

  const applications = [
    {
      no: "01",
      title: "Corrugated Carton Manufacturing",
      desc: "Ideal for producing single-wall, double-wall, and triple-wall corrugated boards.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822187/gallery-1_exhyck.jpg",
    },
    {
      no: "02",
      title: "Packaging & Logistics Operations",
      desc: "Used for outer cartons, protective sheets, pallet packaging, and export-grade boxes.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822184/gallery-2_qwc2me.jpg",
    },
    {
      no: "03",
      title: "Industrial Packing Solutions",
      desc: "Suitable for heavy-duty protective packaging in factories, warehouses, and distribution centers.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg",
    },
    {
      no: "04",
      title: "E-Commerce & Retail Packaging",
      desc: "High-quality kraft reels suitable for mailer boxes, retail cartons, inserts, and die-cut packaging.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822205/gallery-4_oxzrpw.jpg",
    },
  ];

  const whyChooseUs = [
    { query: "Enhanced strength for demanding packaging" },
    { query: "Smooth and consistent performance on converting machinery" },
    { query: "Options for custom GSM, width, and kraft quality" },
    { query: "Eco-friendly and recyclable materials" },
    { query: "Reliable supply for UAE and regional industries" },
  ];

  return (
    <main>
      <PageHeading
        title="Corrugated Paper Reels"
        // description={
        //   "Global Water Solutions Pressure Tanks are engineered to ensure efficient pressure control, system stability, and long service life in water supply applications. Designed for consistent performance, these tanks support smooth operation of pumps and water networks."
        // }
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1777103591/Our_Mission_juz165.jpg"
      />
      <BoosterPumpRevealSection image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770199645/UPM.4_ir521p.jpg" text="Our high-quality corrugated paper reels are available in a comprehensive range of widths, kraft grades, and GSM options, making them the preferred choice for packaging manufacturers, carton converters, and industrial packing operations across the UAE. Engineered for superior strength, stability, and smooth machinability, these reels deliver consistent performance in demanding converting and packaging applications." />
      <ServicesPumping
        title1="Our Key"
        title2="Product Features"
        items={keyProductFeatures}
      />
      {/* <HoverableColumns title="Applications" items={applications} /> */}
      <WasteCollectionGrid
      image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1777115296/image010_r5rssl.png"
        heading="Why Choose Our Corrugated Paper Reels?"
        items={whyChooseUs}
        icon={<TbPaperBag size={25} />}
      />
    </main>
  );
}

export default CorrugatedPaperReelsPage;
