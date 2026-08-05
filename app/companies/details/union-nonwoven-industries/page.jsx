import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu"
import PumpingServiceCards from "@/components/Services/PumpingServiceCards"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"

export const metadata = {
  title: "Union Nonwoven Industries",
  description:
    "Union Nonwoven Industries manufactures technical nonwoven textiles locally in the UAE, reducing the carbon footprint associated with imports while supporting national sustainability objectives.",
  alternates: { canonical: "/companies/details/union-nonwoven-industries" },
};

function UnionNonWovenIndustriesPage() {
    const services = [
        {
            text: "Composite and laminated nonwoven sheets",
            image: "/assets/companies/details/union-nonwoven-industries/composite_fabrics_d6kyeb.jpg",
        },
        {
            text: "Spunbond and meltblown nonwoven fabrics",
            image: "/assets/companies/details/union-nonwoven-industries/spunbond_and-2_zjzau4.jpg",
        },
        {
            text: "Geotextile felts and industrial textile layers",
            image: "/assets/companies/details/union-nonwoven-industries/geotextile-roll-construction-site_rtobee.jpg",
        }
    ];
    const adpmCardsData = [
        {
            text: "Hygiene and medical product manufacturers",
            image: "/solar/solar-1.svg",
        },
        {
            text: "Water treatment and filtration operators",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Construction and infrastructure contractors",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Automotive and industrial component suppliers",
            image: "/solar/solar-2.svg",
        },
    ];
    const overview = [
        {
            heading: "Technology, Innovation, and R&D",
            text: "Manufacturing operations are supported by advanced spunbond, meltblown, and needle-punch technologies, enabling the production of both single-layer and composite nonwoven structures. Union Nonwoven continuously invests in research and process optimization to enhance fabric strength, absorbency, filtration efficiency, and cost performance.",
            lastText: "The company collaborates with global equipment suppliers and technology licensors and explores the integration of recycled polymer feedstocks in line with MAHY Khoory Group’s sustainability legacy. In-house laboratories conduct mechanical, durability, and filtration testing to ensure compliance with international performance standards."
        },
        {
            heading: "Sustainability and Environmental Responsibility",
            text: "Sustainability is embedded in Union Nonwoven’s operations. Production waste is minimized through material recovery and reprocessing, while environmentally responsible bonding and finishing methods are prioritized. The company operates in line with international environmental management standards, supporting green construction, hygiene safety, and reduced lifecycle environmental impact.",
            lastText: "By manufacturing locally, Union Nonwoven also reduces the carbon footprint associated with imported technical textiles, supporting national sustainability objectives."
        },
        {
            heading: "Leadership and Operations",
            text: "Union Nonwoven is led by experienced textile engineers and manufacturing specialists with international exposure in nonwoven technologies. Leadership benefits from cross-functional expertise drawn from MAHY Khoory Group’s broader manufacturing portfolio, ensuring disciplined execution, operational safety, and continuous improvement.",
        }
    ];
    return (
        <main className="pb-12">
            <CompanyOverview
            video={"/assets/companies/details/union-nonwoven-industries/Video_Project_19_bxkpbt.mp4"}
                // image="/assets/shared/office_jaeuiz.webp"
                heading="Union Nonwoven Industries"
                texts={[
                    "Union Nonwoven Industries is a MAHY Khoory Group–affiliated manufacturer specializing in advanced nonwoven textile solutions for industrial, healthcare, hygiene, filtration, and construction applications. Building on the Group’s long-standing expertise in recycling and industrial manufacturing, Union Nonwoven produces high-performance polypropylene and polyester nonwoven fabrics engineered to meet demanding functional and regulatory requirements.",
                    "Operating from a modern manufacturing facility in Abu Dhabi, the company combines automated production technologies with stringent quality-control systems to deliver consistent, custom-engineered nonwoven rolls. Union Nonwoven reflects the Group’s commitment to innovation, transforming technical textile requirements into scalable, market-ready solutions."
                ]}
            />
            <KitchenMenu
                heading="Products and Capabilities"
                text="Union Nonwoven manufactures a comprehensive range of technical nonwoven materials. These products are designed for diverse end uses such as medical gowns, hygiene wipes, filtration media, insulation pads, agricultural fabrics, and geotechnical applications. The company provides technical advisory services, supporting clients with product selection, material customization, fiber blends, GSM specifications, and surface treatments (hydrophobic and hydrophilic finishes)."
                text2="Post-production services include cutting, packaging, and just-in-time delivery, enabling customers to integrate Union Nonwoven materials seamlessly into their own manufacturing processes."
                items={services}
            />
            <PumpingServiceCards
                cards={adpmCardsData}
                heading="Markets and Applications"
                text={"Union Nonwoven serves regional and international markets across the GCC and wider MENA region. Its customer base includes:"}
                endText={"The company also supports landscaping and civil-engineering projects through geotextile solutions used in erosion control, soil stabilization, and drainage systems. Clients range from government and public-sector entities to private industrial and commercial organizations seeking locally manufactured, high-quality technical textiles."}
                tag="[ NONWOVEN INDUSTRIES ]"
                backgroundImage="/assets/shared/skyscrapers-tokyo.jpg_e2niyf.jpg"
            />
            <FeaturesEngineeringSection
                heading="Company Overview"
                items={overview}
                image="/assets/shared/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
            />
        </main>
    )
}

export default UnionNonWovenIndustriesPage