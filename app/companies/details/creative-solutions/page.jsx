import CompaniesSectors from "@/components/CompaniesSectors"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu"
import PumpingServiceCards from "@/components/Services/PumpingServiceCards"
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"
import { object } from "zod"

export const metadata = {
  title: "Creative Solutions Green Building Consultancy",
  description:
    "Creative Solutions Green Building Consultancy supports developers, architects and public-sector clients with sustainability, regulatory compliance and green-building expertise.",
  alternates: { canonical: "/companies/details/creative-solutions" },
};

function CreativeSolutionsPage() {
    const services = [
        {
            text: "Green-building assessments and certification advisory",
            image: "/assets/companies/details/creative-solutions/green_building-2_ei71gx.jpg",
        },
        // {
        //     text: "LEED, WELL, ESTIDAMA, and Dubai Green Building compliance",
        //     image: "/gallery/gallery-2.jpg",
        // },
        {
            text: "Energy audits and performance benchmarking",
            image: "/assets/companies/details/creative-solutions/energy_audits_qsb37r.jpg",
        },
        {
            text: "Energy and water modeling and optimization",
            objectFit: "contain",
            image: "/assets/companies/details/creative-solutions/Energy_and_water_modeling_am6bpz.jpg",
        },
        {
            text: "Mechanical and electrical system commissioning",
            objectFit: "contain",
            image: "/assets/companies/details/creative-solutions/mechanical_and_electrical_system_sqknrp.jpg",
        },
        {
            text: "Post-occupancy performance monitoring",
            image: "/assets/companies/details/creative-solutions/Performance_monitoring_ral6mx.jpg",
        }
    ];
    const cards = [
        {
            title: "Developments",
            text: "Commercial and office developments",
            image: "/solar/solar-1.svg",
        },
        {
            title: "Projects",
            text: "Hospitality and mixed-use projects",
            image: "/solar/solar-2.svg",
        },
        {
            title: "Buildings",
            text: "Residential and institutional buildings",
            image: "/solar/solar-2.svg",
        },
        {
            title: "Infrastructure",
            text: "Public infrastructure and government facilities",
            image: "/solar/solar-1.svg",
        },
        {
            title: "Sites",
            text: "Industrial and manufacturing sites",
            image: "/solar/solar-1.svg",
        },
        {
            title: "Clients",
            text: "Clients include developers, architects, consultants, asset owners, and public-sector entities seeking improved operational efficiency, regulatory compliance, and reduced environmental impact.",
            image: "/solar/solar-1.svg",
        },
    ];
    const overview = [
        {
            heading: "Technology and Innovation",
            text: "The consultancy leverages advanced digital tools, including energy-modeling software, daylight simulations, and Building Information Modeling (BIM). Its team includes U.S. Department of Energy–certified Pumping Systems Assessors and internationally accredited sustainability professionals.",
            lastText: "Creative Solutions remains actively engaged with global green-building platforms and professional forums, ensuring access to the latest sustainability technologies, smart-building systems, and renewable-energy integration strategies."
        },
        {
            heading: "Strategic Projects and Partnerships",
            text: "Creative Solutions has contributed to high-profile projects, including sustainability initiatives within MAHY Khoory Group’s own facilities and advisory roles on environmentally responsible developments across Dubai and the wider UAE.",
            lastText: "The consultancy collaborates with international technology providers, certification bodies, architecture firms, and engineering consultants, delivering integrated sustainability solutions aligned with project objectives and regulatory frameworks."
        },
        {
            heading: "Sustainability Impact",
            text: "The firm measures success through quantifiable energy and water savings, reduced operating costs, and verified certification outcomes. By training facility operators and implementing continuous monitoring, Creative Solutions ensures that sustainability measures translate into long-term performance gains.",
            lastText: "Its role within the Group enables knowledge transfer across MAHY Khoory’s industrial, hospitality, and real-estate assets, strengthening sustainability performance at a group-wide level."
        },
        {
            heading: "Leadership and Team",
            text: "Creative Solutions is led by senior professionals with recognized credentials in green architecture, energy engineering, and sustainability management. The team operates in close alignment with MAHY Khoory Group leadership, ensuring strategic consistency and technical excellence.",
        }
    ];

    return (
        <main>
            <CompanyOverview
            video={"/assets/companies/details/creative-solutions/Video_Project_19_k9zzvb.mp4"}
                // image="/assets/shared/office_jaeuiz.webp"
                heading="Creative Solutions Green Building Consultancy"
                texts={[
                    "Creative Solutions Green Building Consultancy is MAHY Khoory Group’s specialized sustainability and green-building advisory arm, established to support environmentally responsible design, energy efficiency, and high-performance building operations. The consultancy integrates architectural insight with environmental and energy engineering expertise to help clients achieve internationally recognized green-building standards.",
                    "Serving as the Group’s center of excellence for sustainable development, Creative Solutions translates MAHY Khoory’s sustainability commitments into practical, measurable building strategies across the UAE."
                ]}
            />
            <KitchenMenu
                heading="Services and Expertise"
                text="Creative Solutions provides end-to-end sustainability consultancy services. The consultancy supports projects from early design through construction and operational handover, ensuring that sustainability goals are embedded throughout the building lifecycle."
                items={services}
            />
            <PumpingServiceCards
                cards={cards}
                heading="Markets and Client Sectors"
                text={"Creative Solutions serves clients across:"}
                tag="[ CREATIVE SOLUTIONS ]"
                backgroundImage="/assets/shared/man-standing-road-front-skyscraper-sunset_y5zykp.jpg"
                endText={""}
            />
            <FeaturesEngineeringSection
                heading="Company Overview"
                items={overview}
                image="/assets/companies/details/creative-solutions/magnified-analysis-data-graphs-monitoring-screen_ju82mb.jpg"
            />
        </main>
    )
}

export default CreativeSolutionsPage