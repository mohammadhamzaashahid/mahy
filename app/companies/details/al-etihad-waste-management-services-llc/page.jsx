import CompaniesSectors from "@/components/CompaniesSectors";
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import { object } from "zod";

function AlEtihadWasteManagementPage() {
  const overview = [
    {
      heading: "Operations and Coverage",
      text: "Al Etihad Waste Management operates a multi-branch network across Oman, with facilities in Muscat (head office), Sohar, Salalah, and Al Buraimi. Each branch is supported by dedicated fleets and trained personnel, enabling efficient service delivery across diverse geographic and industrial environments.",
      lastText:
        "The company serves government institutions, industrial operators, commercial establishments, hospitality facilities, and private developments, providing nationwide coverage through its distributed operational model.",
    },
    {
      heading: "Geographic Reach",
      text: "With four strategically located branches, Al Etihad Waste Management offers country-wide coverage across the Sultanate of Oman.",
      lastText:
        "This extensive footprint enables the company to work with clients across oil & gas, infrastructure, manufacturing, hospitality, and retail sectors.",
    },
    {
      heading: "Strategic Importance to the MAHY Khoory Group",
      text: "Al Etihad Waste Management represents one of the Group’s most significant international ventures, extending recycling and environmental services expertise beyond the UAE.",
      lastText:
        "It strengthens regional presence, diversifies revenue streams, and reinforces the Group’s position as a leader in circular economy solutions aligned with Oman’s sustainability priorities.",
    },
    {
      heading: "Leadership and Governance",
      text: "The company is overseen by a board and management team comprising MAHY Khoory executives and experienced local professionals.",
      lastText:
        "This structure combines international expertise with local market knowledge, emphasizing compliance, engagement, and operational discipline.",
    },
    {
      heading: "Quality, Safety, and Regulatory Compliance",
      text: "Operations comply fully with Omani environmental regulations and international waste management standards, using modern approved equipment and documented processes.",
      lastText:
        "These controls ensure reliability, traceability, and strict adherence to regulatory requirements across all activities.",
    },
  ];

  const features = [
    {
      title: "Establishment & Growth",
      text: "Launched in 2013 in Muscat, Al Etihad Waste Management was established as a strategic partnership between the MAHY Khoory Group and a prominent local firm, enabling immediate market access and regulatory alignment.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777307167/Establishment_and_Growth_dnusgs.jpg",
    },
    {
      title: "Expansion & National Impact",
      objectFit: "contain",
      text: "Over the past decade, the company has expanded rapidly in scale, coverage, and operational capability through continuous investment in infrastructure, fleet, and workforce development.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777307152/Expansion_and_National_Impact_oozjjj.jpg",
    },
  ];

  const adpmCardsData = [
    {
      title: "Collection and Recycling Services",
      text: "Collection of paper, plastics, metals, and other recyclable materials from residential, commercial, and institutional clients.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Waste Containers and Segregation Solutions",
      text: "Deployment of bins, skips, and segregation systems to promote effective waste separation at source.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "On-Site Industrial Services",
      text: "Provision of balers, compactors, and customized collection schedules for industrial and high-volume waste generators.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Awareness and Engagement Programs",
      text: "Community outreach and education initiatives to increase recycling participation and promote best practices.",
      image: "/solar/solar-1.svg",
    },
  ];

  return (
    <main>
      {/* OVERVIEW */}
      <CompanyOverview
        video={
          "https://res.cloudinary.com/dpn6mdpxd/video/upload/v1777307313/Al_Ethihad_Video_bxlvlg.mp4"
        }
        // image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Al Etihad Waste Management Services LLC"
        texts={[
          "Al Etihad Waste Management Services LLC is the MAHY Khoory Group’s recyclable waste management subsidiary in the Sultanate of Oman. Established in 2013 through a joint venture with local partners and now fully owned by the Group, the company has grown to become one of Oman’s largest recyclable waste management operators.",
          "Operating under the MAHY Khoory brand, Al Etihad Waste Management delivers modern, structured, and scalable recycling solutions across the Sultanate, supporting both public and private sector clients in achieving responsible waste management and sustainability objectives.",
        ]}
      />

      <WhoWeAre
        heading="Our Mission"
        topHeading=""
        text="Al Etihad Waste Management Services LLC is committed to advancing sustainable waste practices across Oman by delivering reliable, efficient, and world‑class recycling and waste management solutions. The company strives to reduce environmental impact through innovation, operational excellence, and community engagement, ensuring that recyclable materials are transformed into valuable resources supporting a cleaner, greener future."
        showButton={false}
        invert={false}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777307082/Our_Mission_mbwcnw.jpg"
        imageAlt="Our Mission"
      />

      <WhoWeAre
        topHeading=""
        heading="Our Vision"
        text="o be Oman’s leading partner in sustainable waste management, driving the nation’s transition toward a circular and resource‑efficient economy. Al Etihad Waste Management Services LLC envisions a future where environmental responsibility and technological progress work hand‑in‑hand to create lasting value for communities, industries, and the environment."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777307088/Our_Vision_i5osfh.jpg"
        imageAlt="Our Vision"
        showButton={false}
        invert={true}
      />

      <KitchenMenu heading="Establishment and Growth" items={features} />

      <PumpingServiceCards
        cards={adpmCardsData}
        heading="Services and Capabilities"
        tag="[ WASTE MANAGEMENT ]"
        text={
          "Al Etihad Waste Management focuses on recyclable waste collection, processing, and awareness, offering:"
        }
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
        endText="Collected materials are sorted and baled at company facilities before being directed to approved recycling processors or export markets."
      />

      <FeaturesEngineeringSection
        heading="Al Etihad Waste Management Overview"
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777307306/Image_-_Al_Etihad_dgv2kq.jpg"
      />

      <CompanyTextOnBackground
        heading="Environmental Impact and Sustainability Contribution"
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777307932/environmental-conservation-garden-children_r6eyc2.jpg"
        align="right"
        text="The company’s core objective is to convert waste into valuable resources, reducing landfill dependency and supporting Oman’s circular economy ambitions."
        endText="Through systematic recycling operations and partnerships with processors, it contributes to environmental protection, resource conservation, and emissions reduction."
      />

      <WhoWeAre
        heading="Infrastructure and Fleet"
        topHeading=""
        text="Al Etihad Waste Management operates a modern fleet of compactor trucks, collection vehicles, and material handling equipment designed for Oman’s geographic needs. Each branch includes sorting lines, baling equipment, and storage yards to ensure efficient processing and timely collections."
        showButton={false}
        invert={true}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
        imageAlt="Infrastructure and Fleet"
      />

      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777307832/innovation-technology-be-creative-futuristic-concept_kkofpi.jpg"}
          title={"Innovation and Continuous Development"}
          texts={[
            "The company introduces advanced recycling techniques including mechanized baling, data-driven route planning, and performance monitoring systems.",
            "Through continuous investment in employee training, community engagement, and partnerships with schools and institutions, Al Etihad Waste Management promotes recycling awareness and strengthens its position as a future-focused industry leader.",
          ]}
        />
      </section>
    </main>
  );
}

export default AlEtihadWasteManagementPage;
