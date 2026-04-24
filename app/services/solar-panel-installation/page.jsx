
import CompanyDetailMenu from '@/components/UI/companies/detail/CompanyDetailMenu'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { lab, text } from 'd3';

function SolarPanelInstallationsPage() {
    const menuItems = [
        {
            label: "Solar Panel Installation Services",
            items: [
                {
                    label: "Complete System Design & Engineering",
                    text: [
                        "We provide complete system design and engineering services, where our team carries out detailed site assessments and load analysis to develop solar solutions tailored to each project’s specific requirements. This includes accurate load calculations, design optimization, and the preparation of engineering drawings and solar layout plans. We also perform shading analysis and performance simulations to ensure maximum efficiency, along with comprehensive AC and DC electrical design to support safe and reliable system operation"
                    ],
                    // subItems: [
                    //     "Load calculation & design optimization",
                    //     "Engineering drawings & solar layout planning",
                    //     "Shading analysis & performance simulation",
                    //     "AC/DC electrical design"
                    // ]
                },
                {
                    label: "Professional Installation & Commissioning",
                    text: [
                        "Our services extend to professional installation and commissioning, delivering a fully integrated, end-to-end solution. From mounting structure fabrication and installation to precise solar panel alignment and interconnection, every step is executed with attention to detail. We handle all AC and DC cabling, earthing, and surge protection, followed by thorough system testing, commissioning, and grid synchronization to ensure the system operates efficiently and meets all required standards."
                    ],
                    // subItems: [
                    //     "Mounting structure fabrication & installation",
                    //     "Solar panel alignment and interconnection",
                    //     "AC/DC cabling, earthing, and surge protection",
                    //     "System testing, commissioning & grid synchronization"
                    // ]
                }
            ]
        },
        {
            label: "Car Parking & Structural Solar Mounting Solutions",
            items: [
                {
                    label: "Car Parking & Structural Solar Mounting Solutions",
                    text: [
                        "We provide advanced car parking and structural solar mounting solutions that are custom-engineered to perform reliably in the UAE’s demanding environmental conditions, including high temperatures, humidity, and strong wind loads. Our capabilities cover the full scope of steel canopy design and fabrication, shaded car park structures, and reinforced mounting frames with robust foundations. Each system is designed with integrated electrical routing and efficient cable management, complemented by anti-corrosion treatments and high-quality powder-coated finishes to ensure durability and long service life. These structures not only offer effective vehicle shading but also generate clean energy, contributing to enhanced sustainability and optimized space utilization"
                    ],
                    // subItems: [
                    //     "Steel canopy design & fabrication",
                    //     "Shaded car park structures",
                    //     "Reinforced mounting frames & foundations",
                    //     "Integrated electrical routing & cable management",
                    //     "Anti-corrosion coatings & powder-coated finishes"
                    // ],
                    // endText: "These structures deliver both shading value and renewable energy production, enhancing property sustainability."
                },
                {
                    label: "Inverter & Electrical Control Panel Installation",
                    text: [
                        "In addition, our team specializes in inverter and electrical control panel installation, ensuring efficient power management and system reliability. We handle the setup and configuration of on-grid and hybrid solar inverters, AC and DC control panels, and essential protection components such as isolators, MCBs, MCCBs, and surge protection devices. Our solutions also include combiner boxes and SCADA-based monitoring systems for real-time performance tracking and control. Every installation is executed in full compliance with UAE electrical standards and safety regulations, ensuring a safe, efficient, and fully integrated solar power system."
                    ],
                    subItems: [
                        "On-grid & hybrid solar inverters",
                        "AC/DC control panels",
                        "Isolators, MCBs, MCCBs & protection systems",
                        "Combiner boxes & surge protection devices",
                        "SCADA-based monitoring units"
                    ],
                    // endText: "All installations comply with UAE electrical standards and safety regulations."
                }
            ]
        },
        {
            label: "Authority Approvals & Compliance",
            items: [
                {
                    label: "Authority Approvals & Compliance",
                    text: [
                        "We provide comprehensive support for authority approvals and regulatory compliance, ensuring that every solar project progresses smoothly from planning to final handover. Our team manages the complete approval process, including obtaining necessary NOCs for solar installations, securing grid connection approvals, and ensuring full compliance with regulations set by authorities such as DEWA, ADWEA, SEWA, and FEWA."
                    ],
                    // subItems: [
                    //     "Solar installation NOCs",
                    //     "Grid connection approvals",
                    //     "DEWA/ADWEA/SEWA/FEWA compliance",
                    //     "Final inspection & safety certifications",
                    //     "As-built documentation & technical submissions"
                    // ],
                    // endText: "Our team ensures smooth coordination with UAE authorities for fast and compliant project delivery."
                },
                {
                    label: "Final Inspection, Safety Certifications & Documentation",
                    text: [
                        "In addition, we coordinate final inspections, safety certifications, and the preparation of detailed as-built documentation and technical submissions required by governing bodies. With strong experience in dealing with UAE authorities, we ensure efficient coordination, reduced approval timelines, and full adherence to all regulatory requirements, enabling fast, compliant, and hassle-free project delivery."
                    ],
                   
                }
            ]
        },
        {
            label: "O&M, Preventive & Corrective Maintenance Services",
            items: [
                {
                    label: "Preventive Maintenance",
                    text: "We provide comprehensive preventive maintenance services designed to ensure optimal performance and long-term reliability of solar systems. Our approach includes scheduled inspections, professional solar panel cleaning using approved methods, and routine electrical connection checks with proper tightening to maintain system integrity. We also conduct inverter performance testing, thermal imaging to identify potential hotspots, and verification of monitoring systems to ensure accurate performance tracking and early issue detection.",
                    // subItems: [
                    //     "Scheduled inspections",
                    //     "Solar panel cleaning using approved methods",
                    //     "Electrical connection tightening",
                    //     "Inverter performance testing",
                    //     "Thermal imaging to detect hotspots",
                    //     "Monitoring system verification"
                    // ],
                },
                {
                    label: "Corrective Maintenance",
                    text: "In addition to preventive care, we offer complete corrective maintenance services to address any operational issues quickly and effectively. This includes detailed fault diagnosis and troubleshooting, inverter repair or replacement, cable rectification with insulation testing, and replacement of any damaged components. We also carry out system resets and recalibration to restore optimal performance. To further enhance efficiency, we provide real-time monitoring and detailed performance reporting, helping maximize energy output and extend the overall lifespan of the system.",
                    // subItems: [
                    //     "Fault diagnosis and troubleshooting",
                    //     "Inverter repair & replacement",
                    //     "Cable rectification & insulation testing",
                    //     "Damaged component replacement",
                    //     "System reset & recalibration"
                    // ],
                    // endText: "Real-time monitoring and detailed performance reporting are also available to maximize output and system lifespan."
                }
            ]
        },
        {
            label: "Solar Panel Replacement & System Upgrades",
            items: [
                {
                    label: "Solar Panel Replacement & System Upgrades",
                    text: [
                        "We provide end-to-end solar panel replacement and system upgrade solutions to ensure your installation continues to perform at its best over time. Our services include the replacement of damaged, aged, or underperforming panels with high-efficiency alternatives, as well as inverter upgrades that enhance overall system performance and energy conversion efficiency.",
                    ],
                    // subItems: [
                    //     "Replacement of damaged, aged, or underperforming panels",
                    //     "Inverter upgrades to improve efficiency",
                    //     "System expansion for increased load requirements",
                    //     "Integration of new technology for improved yield"
                    // ],
                    // endText: "These services ensure your solar system remains optimized for current and future needs."
                },
                {
                    label: "System Expansion & Technology Integration",
                    text: "We also support system expansion to accommodate increased load requirements, along with the integration of advanced technologies that improve energy yield and operational intelligence. These upgrades are carefully planned and executed to align with your current usage and future energy needs, ensuring your solar system remains efficient, reliable, and future-ready."
                }
            ]
        },
        {
            label: "What's Included",
            items: [
                {
                    label: "Complete Solar Solutions Include:",
                    text: "Our complete solar solutions cover every stage of the project lifecycle, delivering a fully integrated approach from supply to long-term support. We provide high-quality solar panels from leading brands such as Astro Energy, GINKO, and LONGI, along with professional installation services for a wide range of applications including homes, villas, warehouses, factories, and shopping malls. Our capabilities also include structural mounting systems and steel solar car parking solutions designed for durability and efficient space utilization.",
                    // subItems: [
                    //     "Supply of Astro Energy, GINKO, and LONGI solar panels",
                    //     "Solar installation for homes, villas, warehouses, factories & malls",
                    //     "Structural mounting & steel solar car parking systems",
                    //     "Inverter & electrical control panel installation",
                    //     "Preventive & corrective maintenance contracts",
                    //     "O&M service agreements with performance assurance",
                    //     "Panel replacement, upgrades & system expansion",
                    //     "Full support for all authority approvals & compliance"
                    // ]
                },
                {
                    label: "Authority Approvals, Maintenance & Support",
                    text: "In addition to installation, we handle inverter and electrical control panel setup to ensure efficient power management and system reliability. Our services extend to preventive and corrective maintenance contracts, as well as comprehensive operation and maintenance agreements with performance assurance to maximize system output and longevity. We also support panel replacement, system upgrades, and expansion to meet evolving energy needs, while providing full assistance with all authority approvals and compliance requirements to ensure a smooth and fully compliant project execution."
                }
            ]
        },
    ];

    return (
        <main>
            <SubPageHeading
            fullHeight
                title={"Solar Panel Installation & O&M Services"}
                description={"We deliver end-to-end solar energy solutions for residential, commercial, and industrial projects across the UAE covering system design, engineering, installation, commissioning, and long-term maintenance. Our solutions feature high-efficiency solar panels from globally trusted brands such as Astro Energy, GINKO, and LONGI, ensuring maximum energy generation, long-term stability, and superior performance under challenging UAE climate conditions."}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777030778/1_o6b5gu.jpg"}
            />
            <CompanyDetailMenu
                items={menuItems}
            />
            {/* <SolarPanelInstallations />
            <SolarPanelImageGrid />
            <SolarPanelInstallationsGrid />
            <SolarPanelQuoteGrid />
            <SolarPanelNumbers />
            <SolarPanelImagesGrid /> */}
        </main>
    )
}

export default SolarPanelInstallationsPage