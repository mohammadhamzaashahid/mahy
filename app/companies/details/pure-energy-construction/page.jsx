import CompaniesSectors from "@/components/CompaniesSectors"
import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"

export const metadata = {
  title: "Pure Energy Construction",
  description:
    "Pure Energy Construction LLC delivers turnkey solar EPC solutions, from procurement of modules, inverters and batteries to installation and long-term system performance.",
  alternates: { canonical: "/companies/details/pure-energy-construction" },
};
import { en } from "zod/v4/locales";

function PureEnergyConstructionPage() {
    const features = [
        {
            text: "Feasibility studies and site assessments",
            image: "/assets/companies/details/pure-energy-construction/Feasibility_Study_jyrbyq.png",
        },
        {
            text: "System design and detailed engineering",
            image: "/assets/companies/details/pure-energy-construction/System_Design-2-2-2-2_kcu7ag.png",
        },
        {
            text: "Procurement of solar modules, inverters, batteries, and balance-of-system components are systems with energy storage",
            image: "/assets/companies/details/pure-energy-construction/Procurement_of_Solar_lzk7k3.jpg",
        },
        {
            text: "Operations and maintenance (O&M) services",
            image: "/assets/companies/details/pure-energy-construction/Operation_and_Maintainance_domjru.jpg",
        },
        {
            text: "EV charging infrastructure design, supply, and installation",
            image: "/assets/companies/details/pure-energy-construction/EV_charging_txkwm2.jpg",
        },
        // {
        //     text: "This turnkey approach enables clients to adopt renewable energy solutions with minimal complexity while ensuring regulatory compliance, optimized system performance and long-term operational reliability.",
        //     image: "/assets/shared/Testlinear_ikbc7c.png",
        // }
    ];
    const overview = [
        {
            heading: "Market Focus & Client Segments",
            text: "Pure Energy serves a diverse portfolio of commercial, industrial, and institutional clients across the UAE, including:",
            bullets: [
                "Real estate developers and master-planned communities",
                "Manufacturing plants and industrial facilities",
                "Shopping malls and commercial complexes",
                "Corporate offices, business parks, and logistics hubs",
                "Educational institutions and healthcare facilities"
            ],
            lastText: "With successful project delivery across Dubai, Abu Dhabi, Ajman, and Al Ain, Pure Energy demonstrates strong nationwide execution capability. By enabling energy cost reduction and carbon footprint minimization, the company positions itself as a trusted solar EPC partner for organizations pursuing net-zero targets and ESG commitments."
        },
        {
            heading: "Advanced Technology & Engineering Excellence",
            text: "Pure Energy applies best-in-class renewable energy technologies to ensure maximum energy yield, system reliability, and long-term financial returns. Our engineering expertise includes:",
            bullets: [
                "Deployment of high-efficiency solar PV modules",
                "Advanced inverter systems and battery energy storage solutions",
                "Smart energy management and digital monitoring platforms",
                "Yield optimization through precise tilt, orientation, and shading analysis"
            ],
            lastText: "Real-time performance monitoring allows proactive maintenance, rapid fault detection, and continuous optimization throughout the system lifecycle."
        },
        {
            heading: "Strategic Projects & Partnerships",
            text: "Pure Energy collaborates closely with government entities, utilities, and private-sector stakeholders to deliver renewable energy projects aligned with the UAE Clean Energy Strategy and national decarbonization goals.",
            lastText: "The company maintains strong partnerships with leading global technology manufacturers, equipment suppliers, and financial institutions, enabling the structuring of scalable, commercially viable renewable energy projects. Leveraging the extensive intra-group synergies of the MAHY Khoory Group, Pure Energy integrates engineering, logistics, and construction expertise to execute complex projects efficiently, safely, and to the highest quality standards."
        },
        {
            heading: "Sustainability & Environmental Stewardship",
            text: "Sustainability is fundamental to Pure Energy’s corporate philosophy and operational approach. Through the deployment of high-performance renewable energy systems, the company actively contributes to:",
            bullets: [
                "Reduction of carbon emissions",
                "Decreased reliance on conventional fossil fuels",
                "Enhanced energy efficiency and long-term cost savings for clients"
            ],
            lastText: "Pure Energy operates in accordance with international environmental best practices and supports the UAE’s long-term clean energy, climate resilience, and sustainability ambitions."
        }
    ];

    return (
        <main>
            <CompanyOverview
            video={"/assets/companies/details/pure-energy-construction/Video_Project_16_-_pure_koqyzk.mp4"}
                // image="/assets/shared/office_jaeuiz.webp"
                heading="Pure Energy Construction LLC"
                texts={[
                    "Pure Energy Construction LLC is the renewable energy engineering, procurement, and construction (EPC) arm of the MAHY Khoory Group, established in 2017 to support the UAE’s transition toward clean, reliable, and sustainable energy solutions.",
                    "The company specializes in the design and delivery of bankable renewable energy projects, with a primary focus on solar photovoltaic (PV) systems and select small-scale wind solutions. Pure Energy optimizes underutilized assets, including rooftops, carports, Groundmount and open land to create efficient, cost-effective energy infrastructure for commercial and industrial clients.",
                    "Backed by the MAHY Khoory Group’s decades of experience in engineering, trading, and project execution, Pure Energy combines technical excellence with disciplined delivery to support national and regional sustainability objectives."
                ]}
            />
            <KitchenMenu
                heading="Core Services and Solutions"
                text={"Pure Energy offers end-to-end renewable energy solutions through a fully integrated EPC and lifecycle support model. Services include"}
                items={features}
            />
            <FeaturesEngineeringSection
                heading="Company Overview"
                items={overview}
                image="/assets/companies/details/pure-energy-construction/sustainable-energy-breathtaking-sunset-landscape-dotted-with-solar-panels-wind-turbines-symbolizing-clean-energy-environmental-responsibility_p7sclx.jpg"
            />
        </main>
    )
}

export default PureEnergyConstructionPage