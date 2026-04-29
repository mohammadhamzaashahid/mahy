import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import WhoWeAre from "@/components/UI/home/WhoWeAre";

function MahyKhooryMotorsPage() {
  const features = [
    {
      title: "Re-Entry into Automotive Sector",
      text: "MAHY Khoory Motors represents the latest phase in the Group’s automotive evolution. With a legacy dating back to the early 20th century and previous partnerships with major global automotive brands, the MAHY Khoory Group re-entered the automotive sector in 2024 through its national partnership with Dongfeng Motor Corporation.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777467098/re-entry_into_l22d57.jpg",
    },
    {
      title: "Strategic Expansion with New-Age Brands",
      text: "Building on this foundation and recognizing the rapid advancement of Chinese automotive technology, the Group established MAHY Khoory Motors as a dedicated entity exclusively for OMODA and JAECOO, next-generation marques under the Chery Automobile umbrella. This move reflects strategic agility and a forward-looking response to growing demand for technologically advanced electric and hybrid vehicles in the UAE.",
      image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777467102/startegic_expansion_kc50pe.jpg",
    }
  ];
  const overview = [
    {
      heading: "Exclusive Partnership with OMODA & JAECOO",
      text: "MAHY Khoory Motors holds the exclusive franchise for OMODA & JAECOO in Abu Dhabi and the Western Region. Under this mandate, the company is responsible for sales, marketing, customer experience, and after-sales operations in strict accordance with brand standards.",
      lastText:
        "The operational footprint includes flagship showrooms on Airport Road and in Mussafah, with a third showroom planned in Al Ain, ensuring comprehensive regional coverage. These facilities form part of a nationwide network that guarantees complete UAE accessibility for the brands. Beyond retail, MAHY Khoory Motors delivers a premium brand ecosystem encompassing financing solutions, after-sales excellence, and customer lifecycle management.",
    },
    {
      heading: "Retail Experience and Customer Engagement",
      text: "MAHY Khoory Motors’ showrooms are designed as immersive, technology-led brand environments. Customers experience a futuristic retail concept incorporating digital configurators, interactive displays, and AI-enabled brand ambassadors. Online booking platforms, personalized consultations, and structured handover experiences ensure a seamless journey from first interaction to ownership.",
      lastText:
        "The emphasis on experience-driven retail reflects the company’s commitment to redefining automotive engagement in the region.",
    },
    {
      heading: "Sales and After-Sales Infrastructure",
      text: "The company is developing a robust, future-ready infrastructure to support long-term customer confidence. Dedicated service centers in Mussafah and Al Ain are equipped with advanced diagnostic tools and staffed by factory-trained technicians specializing in EV and hybrid systems.",
      lastText:
        "Parts availability is supported by a regional Jebel Ali distribution hub, ensuring rapid access to genuine components and minimizing vehicle downtime. Service operations adhere to strict quality protocols, supported by extended warranties, roadside assistance, and structured maintenance programs.",
    },
    {
      heading: "Strategic Role within the MAHY Khoory Group",
      text: "Within the Group’s diversified portfolio, MAHY Khoory Motors serves as the dedicated mobility platform for next-generation electric and hybrid vehicles. It strengthens the Group’s presence in consumer-focused, technology-led sectors while leveraging shared infrastructure, governance, and financial strength.",
      lastText:
        "The division aligns with the Group’s broader strategy of diversification into future-ready industries, reinforcing MAHY Khoory’s reputation for introducing global innovations to regional markets.",
    },
    {
      heading: "Innovation and Future Outlook",
      text: "Innovation is central to the company’s growth trajectory. MAHY Khoory Motors is preparing for the introduction of advanced EV platforms, AI-enabled vehicle interfaces, over-the-air software updates, and smart mobility technologies. Supported by the global R&D strength of Chery Automotive, the division is well positioned to adapt to evolving customer expectations and regulatory frameworks.",
      lastText:
        "By combining Chinese automotive innovation with MAHY Khoory’s operational discipline and brand credibility, MAHY Khoory Motors is building a sustainable, technology-driven automotive business poised to play a defining role in the UAE’s evolving mobility landscape.",
    },
  ];

  return (
    <main>
      <CompanyOverview
        video={
          "https://res.cloudinary.com/dpn6mdpxd/video/upload/v1777467113/Video_Project_18_zhdwpz.mp4"
        }
        // image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="MAHY Khoory Motors"
        texts={[
          "MAHY Khoory Motors is the automotive arm of the MAHY Khoory Group in Abu Dhabi, established to bring OMODA & JAECOO to the capital and the Western Region under an exclusive distribution mandate. Created with a focus on modern mobility and brand excellence, the company combines the Group’s long-standing strengths in trading and distribution with a forwardlooking approach to the evolving automotive landscape.",
          "In January 2025, MAHY Khoory Motors was appointed as the exclusive distributor for OMODA & JAECOO in Abu Dhabi and the Western Region, preceding the brands’ UAE introduction in Q1 2025. This appointment designates the company as the official representative for the capital, working alongside dealer partners in Dubai and the Northern Emirates to form a unified nationwide network.",
          "The establishment of MAHY Khoory Motors reflects the Group’s commitment to expanding its automotive footprint and supporting the region’s transition toward advanced hybrid, electric, and intelligent mobility solutions. As the exclusive partner for OMODA and JAECOO in the capital region, the company aims to deliver a refined customer experience backed by modern facilities, professional service standards, and a long-term vision aligned with the UAE’s mobility ambitions.",
        ]}
      />
      <WhoWeAre
        heading="Our Mission"
        topHeading=""
        text="To deliver intelligent, sustainable, and customer‑focused mobility solutions that redefine automotive excellence in Abu Dhabi and the Western Region.
MAHY Khoory Motors is dedicated to combining engineering innovation, global brand partnerships, and professional service standards to provide vehicles that embody reliability, technology, and modern design.
Through a deeply customer‑centric approach, we aim to create a seamless ownership experience supported by advanced facilities, transparent processes, and a commitment to long‑term satisfaction."
        showButton={false}
        invert={false}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777467095/Misison_t9weaj.jpg"
        imageAlt="Our Mission"
        gap
      />
      <WhoWeAre
        topHeading=""
        heading="Our Vision"
        text="To establish MAHY Khoory Motors as the leading automotive distributor and mobility innovator in Abu Dhabi and the Western Region—recognized for introducing next‑generation hybrid, electric, and intelligent vehicles that align with the UAE’s sustainability and smart mobility goals.
We aspire to build a future‑ready network that sets new benchmarks in service quality, technological advancement, and customer engagement, positioning MAHY Khoory Motors as a trusted name in the evolution of modern motoring."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777467107/Visiion_f9avin.jpg"
        imageAlt="Our Vision"
        showButton={false}
        invert={true}
      />
      <KitchenMenu
        heading="Background and Formation"
        items={features}
      />
      <FeaturesEngineeringSection
        heading="MAHY Khoory Motors Overview"
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777467099/SL_052021_43150_03_mmsiny.jpg"
      />
    </main>
  );
}

export default MahyKhooryMotorsPage;
