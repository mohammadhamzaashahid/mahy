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

function GreenlandGeneralTransportPage() {
    const features = [
        {
            title: "Strategic Foundation",
            text: "Greenland General Transport was established in response to the MAHY Khoory Group’s expanding operational footprint and increasing demand for centralized logistics control.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104677/Testlinear_ikbc7c.png",
        },
        {
            title: "Growth & Operational Expansion",
            text: "As the Group diversified into manufacturing, engineering, waste management, renewable energy, automotive, and hospitality sectors, the need for an internal, dependable transportation network became strategically essential. Over time, the division has expanded in scale and capability, growing alongside the Group.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104675/Union_Flute_scjkz4.png",
        }
    ];
    const adpmCardsData = [
        {
            title: "Intra-Group Logistics",
            text: "Scheduled and on-demand transportation of goods, equipment, and materials between MAHY Khoory facilities, warehouses, factories, and project sites.",
            image: "/solar/solar-1.svg",
        },
        {
            title: "Project and Heavy Transport",
            text: "Specialized transportation for large pumps, machinery, industrial equipment, and construction materials supporting infrastructure and industrial projects.",
            image: "/solar/solar-2.svg",
        },
        {
            title: "Staff Transportation Services",
            text: "Operation of buses and passenger vehicles for employee transport and project-related mobility requirements.",
            image: "/solar/solar-2.svg",
        },
        {
            title: "General Cargo and Distribution",
            text: "Cargo haulage and delivery services for spare parts, retail distribution, and selected external clients, optimizing fleet utilization and service efficiency.",
            image: "/solar/solar-1.svg",
        }
    ];
    const overview = [
        {
            heading: "Operations and Execution",
            text: "The division operates with round-the-clock logistics coordination to support both planned operations and urgent transportation requirements. Scheduled haulage supports manufacturing facilities and warehouses, while rapid-response services address time-critical project and service needs.",
            lastText: "Greenland General Transport has played a key role in supporting landmark projects across Dubai, Abu Dhabi, and other Emirates, transporting pumps, electromechanical equipment, and industrial systems integral to the Group’s core businesses.",
        },
        {
            heading: "Geographic Coverage",
            text: "Headquartered in Dubai, Greenland General Transport provides nationwide coverage across the United Arab Emirates. Its fleet operates regular routes connecting facilities in Abu Dhabi, Sharjah, Ras Al Khaimah, and other strategic locations.",
            lastText: "The division is structured to scale operations and extend services into the wider GCC region as required by project demands and Group expansion plans.",
        },
        {
            heading: "Strategic Importance within the Group",
            text: "By maintaining an in-house logistics operation, the MAHY Khoory Group benefits from full control over delivery schedules, reduced dependency on third-party transport providers, enhanced cost efficiency, and improved asset protection.",
            lastText: "Greenland General Transport strengthens the Group’s execution capability by enabling rapid mobilization of equipment and materials, supporting tight project timelines, and enhancing overall operational agility.",
        },
        {
            heading: "Leadership and Workforce",
            text: "Greenland General Transport is managed by an experienced logistics and operations leadership team responsible for fleet management, safety, compliance, and service quality.",
            lastText: "Drivers, dispatchers, and logistics staff are professionally trained in road safety, operational discipline, and customer service, reflecting the Group’s high standards of reliability and accountability.",
        },
        {
            heading: "Quality, Safety, and Compliance",
            text: "Safety and compliance are fundamental to operations. All vehicles undergo regular inspection, preventive maintenance, and safety checks in accordance with UAE transport regulations.",
            lastText: "Vehicles are fully insured and licensed, and drivers hold appropriate professional certifications. Operations strictly comply with traffic laws, labor regulations, and occupational health and safety standards.",
        },
    ];

    return (
        <main>
            <CompanyOverview
                video={"https://res.cloudinary.com/dpn6mdpxd/video/upload/v1772478875/0205_tlzogv.mp4"}
                // image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Greenland General Transport"
                texts={[
                    "Greenland General Transport is the in-house logistics and transportation division of the MAHY Khoory Group, established to provide reliable, efficient, and fully integrated transport services across the Group’s diverse business operations.",
                    "As a dedicated internal logistics arm, the division owns and operates a modern fleet of heavy-duty trucks, delivery vehicles, and passenger buses, ensuring seamless movement of goods, equipment, and personnel across the UAE while supporting multiple business sectors."
                ]}
            />
            <WhoWeAre
                heading="Our Mission"
                topHeading=""
                text="Greenland General Transport’s mission is to deliver safe, dependable, and timely transportation solutions that connect MAHY Khoory Group companies, partners, and customers. The division is committed to operational excellence, service reliability, and continuous improvement across all logistics activities."
                showButton={false}
                invert={false}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777146022/image002_lmmmfu.png"
                imageAlt="Our Mission"
            />
            <WhoWeAre
                heading="Our Vision"
                topHeading=""
                text="Its vision is to develop into a leading regional logistics provider recognized for efficiency, safety, and technology-enabled fleet management, while supporting the Group’s long-term growth, diversification, and project execution capabilities."
                showButton={false}
                invert={true}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777146183/image003_je11qk.png"
                imageAlt="Our Vision"
            />
            <KitchenMenu
                heading="Background and Development"
                items={features}
            />
            <PumpingServiceCards
                cards={adpmCardsData}
                heading="Core Services and Capabilities"
                tag="[ TRANSPORT ]"
                backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
                endText={"These services ensure continuity, responsiveness, and reliability across the Group’s operations."}
            />
            <FeaturesEngineeringSection
                heading="Greenland General Transport Overview"
                items={overview}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
            />
            <CompanyTextOnBackground
                heading="Sustainability and Environmental Responsibility"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776762183/commitment-to-growth_qhzgjt.jpg"
                align="left"
                text="Greenland General Transport actively supports the MAHY Khoory Group’s sustainability objectives through responsible fleet and route management."
                endText="The division operates modern, fuel-efficient vehicles and applies route optimization technologies to reduce fuel consumption and emissions, with future initiatives including lower-emission and alternative-fuel vehicles."
            />
            <ValuesSection
                width="max-w-7xl mx-auto"
                title="Infrastructure and Fleet"
                description="The division operates a diversified fleet comprising heavy-duty flatbed and box trucks, medium and light delivery vehicles, and passenger buses for staff transport. It utilizes central warehousing infrastructure and maintains an in-house vehicle maintenance facility, ensuring high fleet availability and minimal downtime."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Fleet"
                ctaHref={false}
                imagePosition="left"
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Innovation and Digital Enablement"}
                    texts={[
                        "Innovation is integral to Greenland General Transport’s operating model. The division leverages telematics, GPS tracking, and digital route-planning systems to enhance efficiency, safety, and service reliability.",
                        "Integration with the MAHY Khoory Group’s enterprise systems enables real-time shipment tracking and operational transparency, ensuring that products and systems are delivered safely, efficiently, and on schedule."
                    ]}
                />
            </section>

        </main>
    )
}

export default GreenlandGeneralTransportPage