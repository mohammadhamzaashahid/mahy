import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"

function NationalPaperIndustryPage() {
    const features = [
        {
            text: "Single-wall and double-wall corrugated cartons",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777311479/Single_wall_double_wall_v9gkge.jpg",
        },
        {
            text: "Custom-designed boxes and die-cut packaging",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777311514/Custom_Designed_boxes_uqistj.jpg",
        },
        {
            text: "Heavy-duty and specialty packaging configurations",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777311548/Heavy_Duty_boxes_sew5y5.jpg",
        },
        {
            text: "Printed corrugated solutions",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777311490/Printed_Cartoon_boxes_cllghh.jpg",
        },
        // {
        //     text: "The company offers end-to-end packaging services, supporting customers from initial design and prototyping through large-scale production and delivery. This integrated approach ensures consistency in quality, performance, and lead times.",
        //     image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104677/Testlinear_ikbc7c.png",
        // }
    ];
    const adpmCardsData = [
        {
            text: "Fast-moving consumer goods (food and beverages)",
            image: "/solar/solar-1.svg",
        },
        {
            text: "Consumer electronics and appliances",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Industrial products, including ceramics and lubricants",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Agriculture and fresh produce packaging",
            image: "/solar/solar-1.svg",
        }
    ];
    const overview = [
        {
            heading: "Manufacturing Capabilities and Technology",
            text: "NPI’s facility is equipped with advanced corrugation, printing, and converting machinery, enabling high-speed and high-precision production. Core capabilities include:",
            bullets: [
                "Automated corrugators and flexographic printing lines",
                "Computerized flat-bed and rotary die-cutters",
                "Finishing equipment",
                "Automated stacking and material-handling systems"
            ],
            lastText: "The company operates in-house quality control laboratories to test paper strength, compression resistance, and print durability, ensuring products meet client specifications and industry standards. Continuous investment in automation and production-planning systems supports efficiency, accuracy, and waste reduction."
        },
        {
            heading: "Strategic Integration and Partnerships",
            text: "NPI benefits from close integration with Union Paper Mills, another MAHY Khoory Group company that supplies 100% recycled test liner and fluting medium and semi kraft. This vertical integration ensures consistent raw material quality while supporting the Group’s circular manufacturing model.",
            lastText: "The company also partners with leading international machinery and technology providers (e.g., BHS, EMBA, BOBST) ensuring access to modern corrugation and converting solutions and continuous enhancement of production capabilities. Recent capacity expansions have positioned NPI to meet growing demand across multiple sectors."
        },
        {
            heading: "Sustainability and Environmental Responsibility",
            text: "Sustainability is embedded in NPI’s operating model. By utilizing recycled paper as its primary raw material, the company significantly reduces reliance on virgin fiber and contributes to landfill diversion. Manufacturing processes are designed to minimize waste, with paper trim and scrap recycled back into production wherever possible.",
            lastText: "NPI’s operations comply with environmental standards and ISO-certified management systems, supported by modern, energy-efficient equipment that minimizes emissions and resource consumption. Through sustainable packaging solutions, NPI also helps customers reduce product damage and packaging waste across supply chains."
        },
        {
            heading: "Leadership and Workforce",
            text: "NPI is managed by an experienced leadership team overseeing production, quality, sales, and operations. The plant is supported by a dedicated workforce of engineers, technicians, machine operators, and logistics personnel, enabling continuous and reliable production.",
            lastText: "Strong emphasis is placed on operational discipline, safety, and workforce training to maintain consistent performance and customer satisfaction."
        }
    ];

    return (
        <main>
            <CompanyOverview
                video={"https://res.cloudinary.com/dpn6mdpxd/video/upload/v1772793964/National_Paper_Industries_bhhmav.mp4"}
                heading="National Paper Industry (S.P.S – L.L.C)"
                texts={[
                    "National Paper Industry (S.P.S – L.L.C)   (NPI) is a leading manufacturer of corrugated cartons and packaging solutions in the United Arab Emirates. Headquartered in Ajman, NPI operates as part of the MAHY Khoory Group’s manufacturing division, serving a broad customer base across the UAE and selected regional markets.",
                    "The company operates a state-of-the-art manufacturing facility spanning approximately 180,000 square feet and employs more than 157 skilled professionals. Over the years, NPI has established a strong reputation for reliability, technical capability, and innovation in the design and production of high-quality corrugated packaging."
                ]}
            />
            <KitchenMenu
                heading="Products and Services"
                text={"The company offers end-to-end packaging services, supporting customers from initial design and prototyping through large-scale production and delivery. This integrated approach ensures consistency in quality, performance, and lead times."}
                items={features}
            />
            <PumpingServiceCards
                cards={adpmCardsData}
                heading="Market Focus and Client Sectors"
                tag="[ PAPER INDUSTRY ]"
                text={"NPI serves a wide range of industries across domestic and regional markets. Key client sectors include:"}
                backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
                endText={"By customizing carton strength, dimensions, and print quality, NPI supports both large industrial clients and small-to-medium enterprises seeking durable, branded, and cost-effective packaging solutions."}
            />
            <FeaturesEngineeringSection
                heading="Company Overview"
                items={overview}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777311768/IMG_-_44_yw68el.jpg"
            />
        </main>
    )
}

export default NationalPaperIndustryPage