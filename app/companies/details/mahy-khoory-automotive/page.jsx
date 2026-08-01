import CompaniesSectors from "@/components/CompaniesSectors"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu"
import PumpingServiceCards from "@/components/Services/PumpingServiceCards"
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"
import WhoWeAre from "@/components/UI/home/WhoWeAre"
import { object } from "zod"

export const metadata = {
  title: "MAHY Khoory Automotive",
  description:
    "MAHY Khoory Automotive is the exclusive Dongfeng distributor in the UAE, operating flagship showrooms and service facilities in Dubai and Abu Dhabi.",
  alternates: { canonical: "/companies/details/mahy-khoory-automotive" },
};

function MahyKhooryAutomotivePage() {
    const features = [
        {
            title: "Market Entry & Expansion",
            objectFit: "contain",
            text: "The brand’s debut was marked by the opening of a flagship showroom and service facility in Dubai, followed by showrooms in Abu Dhabi and ongoing expansion plans, establishing a strong foundation for national expansion.",
            image: "/assets/Startegic_expansion_yswyze.png",
        },
        {
            title: "Automotive Division Launch",
            objectFit: "contain",
            text: "Building on the MAHY Khoory Group’s 96 years of legacy as a distributor of global brands, including established American automotive marques, the Automotive division was launched as part of the Group’s diversification strategy. The decision to partner with Dongfeng reflects a forward-looking approach, recognizing the rising global competitiveness and technological maturity of Chinese automotive manufacturers.",
            image: "/assets/Re-entry_into_automotive_section_pjhg1t.png",
        },
    ];
    const adpmCardsData = [
        {
            title: "Vehicle Sales",
            text: "Our exclusive Dongfeng range features modern sedans and SUVs designed with advanced safety features, intuitive connectivity, and contemporary styling that aligns with the needs of today’s UAE customers.",
            image: "/solar/solar-1.svg",
        },
        {
            title: "After-Sales Service",
            text: "State-of-the-art service centers in Dubai and Abu Dhabi staffed by certified technicians provides scheduled maintenance, diagnostics, repairs, and warranty services using genuine parts.",
            image: "/solar/solar-2.svg",
        },
        {
            title: "Customer Support Solutions",
            text: "From warranty services and roadside assistance to finance solutions, we provide comprehensive support designed to ensure confidence and convenience throughout the ownership experience.",
            image: "/solar/solar-2.svg",
        },
        {
            title: "Future Mobility Solutions",
            text: "As the automotive landscape evolves, we are committed to introducing electric vehicles and smart mobility solutions from Dongfeng, aligning with the UAE’s sustainability goals and consumer demand for innovative transportation options.",
            image: "/solar/solar-1.svg",
        }

    ];
    const overview = [
        {
            heading: "Operations and Network Development",
            text: "The division’s key operational milestone is the establishment of a flagship Dubai showroom and service workshop along with similar facilities in Abu Dhabi, designed as modern, customer-focused automotive experience centers. In line with its growth strategy, MAHY Khoory Automotive is preparing to launch additional showrooms and after sales facilities across the country, expanding its national footprint.",
            lastText: "These facilities form the backbone of an integrated sales-and-service network, ensuring accessibility, consistency, and high service standards across the UAE.",
        },
        {
            heading: "Innovation and Future Outlook",
            text: "Innovation is central to MAHY Khoory Automotive’s strategy. The division embraces digital showroom experiences, online engagement platforms, and customer-centric technologies to enhance the buying and ownership journey. Future plans include the introduction of additional Dongfeng models, including electric vehicles and smart mobility solutions, as these technologies become available in the region.",
            lastText: "Through a proactive and technology-driven approach, MAHY Khoory Automotive aims to establish itself as a trusted automotive brand partner and a key contributor to the Group’s long-term growth.",
        }
    ];
    return (
        <main>
            <CompanyOverview
                video={"/assets/Mka_Mkm_wu2ejg.mp4"}
                // image="/assets/office_jaeuiz.webp"
                heading="MAHY Khoory Automotive"
                texts={[
                    "MAHY Khoory Automotive represents the MAHY Khoory Group’s strategic expansion into the automotive sector introducing modern, valuedriven and technology-forward mobility solutions to the UAE. As the Group’s curated entry into the automotive sector, the division has forged a strong partnership with Dongfeng Motor Corporation, one of China’s most respected and innovative automotive manufacturers.",
                    "Through Dongfeng, MAHY Khoory Automotive introduces a new generation of vehicles engineered for modern lifestyles - combining futuristic design, intelligent technology, and reliable performance. The wide range of model line-up from sub compact crossovers, off-road capable pickup trucks to electric vehicles, reflects the division’s commitment to accessible, highquality mobility."
                ]}
            />
            <WhoWeAre
                heading="Our Mission"
                topHeading=""
                text="To deliver intelligent, reliable, and future ready mobility solutions that elevate everyday life in the UAE.
MAHY Khoory Automotive is committed to combining engineering excellence, advanced technology, and uncompromising service standards to provide customers with vehicles that inspire confidence, convenience, and long term value.
Through a customer centric culture, professional expertise, and a fully integrated sales to service ecosystem, we aim to create an ownership experience defined by trust, transparency, and continuous support."
                showButton={false}
                invert={false}
                image="/assets/Mission_toqp8t.jpg"
                imageAlt="Our Mission"
            />
            <WhoWeAre
                heading="Our Vision"
                topHeading=""
                text="To become one of the UAE’s most trusted and forward thinking automotive providers, recognized for championing next‑generation mobility technologies, sustainable transportation solutions, and exceptional customer experiences.
MAHY Khoory Automotive aspires to build a nationwide network of modern automotive facilities, introduce a diverse portfolio of innovative vehicles, and set new benchmarks in quality, accessibility, and service excellence—shaping the future of mobility in alignment with the UAE’s progressive vision."
                showButton={false}
                invert={true}
                image="/assets/visiion_ccccqb.webp"
                imageAlt="Our Vision"
            />
            <KitchenMenu
                heading="Our Story"
                items={features}
                text={"MAHY Khoory Automotive introduces a new generation of vehicles engineered for modern lifestyles combining futuristic design, intelligent technology, and reliable performance. The wide range of model line-up from sub compact crossovers, off-road capable pickup trucks to electric vehicles, reflects the division’s commitment to accessible, highquality mobility."}

            />
            <PumpingServiceCards
                cards={adpmCardsData}
                heading="Products and Services"
                tag="[ AUTOMOTIVE ]"
                text={"MAHY Khoory Automotive delivers a fully integrated automotive offering, covering sales, after-sales, and customer support:"}
                backgroundImage="/assets/visiion_ccccqb.webp"
            />
            <FeaturesEngineeringSection
                heading="Company Overview"
                items={overview}
                textPosition="left"
                image="/assets/car-is-moving-up-graph-with-yellow-arrow-pointing-up_m85bck.jpg"
                
            />
        </main>
    )
}

export default MahyKhooryAutomotivePage