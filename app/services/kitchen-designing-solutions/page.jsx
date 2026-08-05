import BlobImageSection from "@/components/Services/Kitchen/BlobImageSection";
import KitchenBackgroundGrid from "@/components/Services/Kitchen/KitchenBackgroundGrid";
import KitchenHorizontalItems from "@/components/Services/Kitchen/KitchenHorizontalItems";
import KitchenImageGrid from "@/components/Services/Kitchen/KitchenImageGrid";
import KitchenImageScaledGrid from "@/components/Services/Kitchen/KitchenImageScaledGrid";
import KitchenItems from "@/components/Services/Kitchen/KitchenItems";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import CompanyDetailMenu from "@/components/UI/companies/detail/CompanyDetailMenu";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { text } from "d3";
import React from "react";

export const metadata = {
  title: "Kitchen Designing Solutions",
  description:
    "MAHY Khoory Group represents world-class kitchen brands including Siemens, Bosch, MVP, ARREDO3 and COMPOSIT, delivering unmatched craftsmanship and kitchen design excellence.",
  alternates: { canonical: "/services/kitchen-designing-solutions" },
};

function KitchenDesignPage() {
  const overviewItems = [
    {
      text: "We proudly represent world-class brands such as Siemens, Bosch, MVP, and luxury Italian kitchen brands ARREDO3 and COMPOSIT, offering unmatched craftsmanship and design excellence.",
      icon: "/kitchen/1.svg",
    },
    {
      text: "Whether you are building a new kitchen or upgrading an existing one, we provide end-to-end design, manufacturing, supply, and installation services, including complete kitchen re-design projects.",
      icon: "/kitchen/2.svg",
    },
  ];
  const featuresData = [
    {
      label: "Product Oriented Features",
      items: [
        {
          label: "Premium Kitchen Appliances",
          text: [
            "We supply and install a complete range of premium kitchen appliances from leading global brands such as Siemens, Bosch, and MVP, ensuring high performance, reliability, and modern functionality for every kitchen space. Complementing these appliances, we offer a wide selection of high-quality countertops, including quartz, granite, and marble, carefully chosen for their durability, elegance, and long-lasting performance.",
          ],
          subItems: ["Siemens", "Bosch", "MVP"],
          // lastText: "Italian premium brands for built-in cooking, cooling, and ventilation systems. Our appliances offer advanced technology, energy efficiency, and long lifespan for modern living."
        },
        {
          label: "Comprehensive Range",
          text: [
            "Our solutions also include a comprehensive range of designer sinks, mixers, and kitchen accessories, all tailored to enhance convenience, hygiene, and efficient kitchen workflows. In addition, we provide custom kitchen cabinets and furniture that are expertly crafted to maximize storage, ensure smooth functionality, and elevate the overall aesthetic",
          ],
        },
        {
          label: "Variety",
          text: [
            "These include soft-closing drawers and hinges, modular and tailor-made cabinet options, and a variety of finishes such as matte, glossy, wooden, and premium Italian styles, all designed with ergonomic layouts to support optimal usability.",
          ],
          subItems: ["soft-closing drawers", "hinges", "cabinet"],
        },
        // {
        //     label: "Custom Kitchen Cabinets & Furniture",
        //     text: [
        //         "Expertly crafted cabinets designed for maximum storage, smooth functionality, and aesthetic appeal. Options include:"
        //     ],
        //     subItems: [
        //         "Soft-closing drawers & hinges",
        //         "Modular and tailor-made cabinets",
        //         "Matte, glossy, wooden, and Italian finishes",
        //         "Ergonomic layouts for optimal workflow"
        //     ]
        // },
      ],
    },
    {
      label: "Wardrobes & Closet Solutions",
      items: [
        {
          label: "Built In Wardrobes",
          text: [
            "Our built-in wardrobes are thoughtfully designed to maximize space while enhancing the overall look and feel of your interiors. With modern finishes and fully customizable configurations, these wardrobes seamlessly blend functionality with style, offering practical storage solutions tailored to your space.",
          ],
        },
        {
          label: "Open Closets & Walk-In Closets",
          text: [
            "We also specialize in open closets and walk-in wardrobes, delivering luxurious and highly organized storage systems that elevate everyday living. Each design incorporates features such as integrated LED lighting, custom shelving, and dedicated drawer units to ensure optimal organization. Additional elements like shoe racks, glass shutters, and premium hardware further enhance both usability and aesthetics, creating a refined and efficient storage environment.",
          ],
          subItems: [
            "LED lighting",
            "Custom shelving",
            "Drawer units",
            "Shoe racks",
            "Glass shutters and premium hardware",
          ],
        },
      ],
    },
    {
      label: "Service Oriented Offerings",
      items: [
        {
          label: "Complete Kitchen Design & Layout Planning",
          text: [
            "We provide complete kitchen design and layout planning services, where our expert team develops detailed 2D and 3D concepts tailored to your preferences, available space, and functional requirements. Every design is carefully planned to ensure an efficient workflow, optimal space utilization, and a seamless blend of aesthetics and practicality.",
          ],
        },
        {
          label: "Kitchen Re-Designing & Upgradation",
          text: [
            "For existing kitchens, we offer comprehensive re-design and upgrade solutions that transform outdated spaces into modern, highly functional environments. This includes removing old cabinetry, upgrading appliances, replacing countertops and sinks, improving storage solutions, and enhancing overall workflow to create a more efficient and visually appealing kitchen.",
          ],
          subItems: [
            "Removing old cabinetry",
            "Upgrading appliances",
            "Changing countertops and sinks",
            "Improving storage and workflow",
            "Modernizing the overall design",
          ],
        },
        {
          label: "End to End Installation",
          text: [
            "Our services extend through end-to-end installation, where skilled technicians handle everything from fabrication to final setup with precision and attention to detail. We ensure timely delivery, high-quality workmanship, and a premium finish that reflects the design intent.",
          ],
        },
        {
          label: "Measurement, Consultation & After-Sales Support",
          text: [
            "To support our customers throughout the process, we also provide measurement, consultation, and after-sales services. This includes free site inspections, professional guidance on design and materials, and ongoing support after installation to ensure long-term performance, reliability, and customer satisfaction.",
          ],
        },
      ],
    },
    {
      label: "Advantages & Applications",
      items: [
        {
          label: "Performance Advantages",
          text: "Our kitchen solutions are designed to deliver exceptional performance, combining premium European and Italian brands with tailor-made designs that seamlessly match any interior style. Every project is executed using high-quality materials and durable hardware to ensure long-lasting reliability and a refined finish. With a strong focus on space optimization, we create layouts that enhance functionality while maintaining aesthetic appeal. From initial design to final installation, our professional approach ensures precision, while our dependable after-sales support provides long-term peace of mind.",
          subItems: [
            "Premium European and Italian brands",
            "Tailor-made designs to match any interior style",
            "High-quality materials and hardware",
            "Space-optimized layouts",
            "Durable finishing with long service life",
          ],
        },
        {
          label: "Applications",
          text: "These solutions are suitable for a wide range of applications, including residential kitchens in apartments, villas, and townhouses, as well as commercial and hospitality environments. We also cater to pantry and service kitchens, along with walk-in wardrobes, dressing rooms, and fully customized storage solutions, offering versatility to meet diverse lifestyle and operational needs.",
          subItems: [
            "Residential kitchens (apartments, villas, townhouses)",
            "Commercial & hospitality kitchens",
            "Pantry and service kitchens",
            "Walk-in wardrobes",
            "Dressing rooms and custom storage solutions",
          ],
        },
      ],
    },
  ];

  const cards = [
    {
      count: "01",
      title: "Strategic Visionaries",
      text: "We start by understanding your business at its core. Our team of seasoned consultants collaborates with you to craft a strategic vision that aligns with your goals.",
    },
    {
      count: "16",
      title: "Customized Solutions",
      text: "No two businesses are alike, and we recognize that. Our team develops bespoke solutions tailored to your specific needs.",
    },
    {
      count: "40",
      title: "Collaborative Execution",
      text: "We believe in partnership. Once a strategy is in place, we work side by side with your team to implement the recommended changes.",
    },
  ];

  return (
    <main>
      <SubPageHeading
        fullHeight
        title={"Kitchen Designing Solutions"}
        image={
          "/assets/services/kitchen-designing-solutions/collezioni-frida-03-pg126-127_olpgru.jpg"
        }
      />
      <KitchenImageScaledGrid
        heading="Overview"
        texts={[
          "Our Kitchen Designing Division specializes in delivering complete, high-quality kitchen solutions—from concept planning to full installation. We provide modern, functional, and aesthetically refined kitchen layouts tailored to villas, apartments, commercial kitchens, and hospitality projects across the UAE.",
          "With a comprehensive range of premium appliances, custom cabinetry, high-quality countertops, sinks, and storage systems, we create kitchens that combine elegance, durability, and everyday practicality.",
        ]}
        items={overviewItems}
        image="/assets/services/kitchen-designing-solutions/collezioni-frida-03-pg129_qhzqdu.jpg"
      />
      <CompanyDetailMenu items={featuresData} />
      <KitchenImageGrid image="/assets/services/kitchen-designing-solutions/fusion-03-pg28-29_drgi9r.jpg" />
      <KitchenMenu />
      <KitchenBackgroundGrid
        items={cards}
        bgImage="/assets/services/kitchen-designing-solutions/collezioni-asolo-03-pg152-153_rg2cfg.jpg" // <-- replace with your actual image path
      />{" "}
      <KitchenHorizontalItems />
      <KitchenItems image="/assets/services/kitchen-designing-solutions/collezioni-asolo-04-pg164-165-166_zrtzth.jpg" />
      <BlobImageSection
        image={
          "/assets/services/kitchen-designing-solutions/collezioni-asolo-01-pg142-143_xxk9at.jpg"
        }
      />
    </main>
  );
}

export default KitchenDesignPage;
