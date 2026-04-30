import DewaltStrategySection from "@/components/Services/DewaltStrategySection";
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

function Dewalt() {
  const timelineItems = [
    {
      title: "Professional-Grade Power Tools",
      text: "Professional‑grade power tools deliver reliable strength, precision, and durability for demanding work. Built with advanced engineering, they maintain consistent performance even under heavy use. Designed for professionals who expect accuracy and endurance, these tools provide dependable power for every task.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1769421630/81D2e2wZkEL._AC_SL1500__pjnjwy.png",
    },
    {
      title: "Certified Industrial Safety Footwear",
      text: "Certified industrial safety footwear is designed to provide reliable protection in demanding work environments. Built with reinforced materials and compliant with strict safety standards, it ensures stability, durability, and all‑day comfort. Ideal for industrial and construction settings, this footwear helps safeguard workers against impact, slips, and harsh conditions.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027389/power-tools-1_zo4m4y.png",
    },
    {
      title: "Built for Demanding Environments",
      text: "Built for demanding environments, these solutions are engineered to withstand tough conditions while delivering consistent performance. Their durable construction ensures reliability in high‑stress, high‑intensity work settings. Designed for professionals who face challenging tasks daily, they offer long‑lasting strength and dependable operation.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027393/power-tools-4_jmppuk.png",
    },
    {
      title: "Built for Reliable Performance",
      text: "Engineered for comfort and protection, this design combines supportive structure with performance‑driven materials to keep you secure throughout long work hours. Its ergonomic build enhances mobility while reducing fatigue, ensuring you stay comfortable without compromising safety. Crafted for demanding tasks, it delivers dependable protection in every environment.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027375/power-tools-2_zj7ofz.jpg",
    },
     {
      title: "Engineered for Comfort & Protection",
      text: "Built for reliable performance, these solutions are crafted to deliver consistent power and efficiency across every task. Their robust design ensures dependable operation in tough conditions, helping professionals work with confidence. With a focus on durability and safety, they provide the assurance needed to perform at a high standard every day.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027375/power-tools-3_xcs0f6.jpg",
    }
  ];

  return (
    <main>
      <PageHeading
        title={"DEWALT Power Tools & Safety Shoes"}
        // description={
        //   "Global Water Solutions Pressure Tanks are engineered to ensure efficient pressure control, system stability, and long service life in water supply applications. Designed for consistent performance, these tanks support smooth operation of pumps and water networks."
        // }
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027385/power-tools-5_vkzikd.png"
      />
      <WasteCollectionTimeline
        heading="Key Highlights"
        text="DEWALT Power Tools & Safety Shoes are built for maximum performance, durability, and workplace safety. Trusted by professionals worldwide, DEWALT products are engineered to withstand demanding job-site conditions while delivering consistent, high-quality results."
        text2="The power tools range offers precision, strength, and reliability for construction, maintenance, and industrial applications. Complementing this, DEWALT safety shoes provide certified protection, comfort, and durability, ensuring workers remain safe without compromising productivity."
        text3="DEWALT"
        text4="Power Tools & Safety Shoes"
        endHeading="Built for Reliable Performance"
        endText="DEWALT solutions ensure confidence, efficiency, and safety across every task."
        items={timelineItems}
        bottomSection={false}
        bottomImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027375/power-tools-3_xcs0f6.jpg"
      />
      <DewaltStrategySection image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777554817/worker-using-drill-front-view_yavfah.jpg" imageFit="contain" />
    </main>
  );
}

export default Dewalt;
