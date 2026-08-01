import Filters from "@/components/UI/companies/Filters";
import PageHeading from "@/components/UI/PageHeading";
import List from "@/components/UI/companies/List";
import React from "react";
import Breadcrumb from "@/components/UI/Breadcrumb";
import { getLocale, getTranslations } from "next-intl/server";
import SectorsSection from "@/components/UI/companies/SectorsSection";
import { companiesSectors } from "@/constants/sectors";

export const metadata = {
  title: "Our Companies",
  description:
    "MAHY Khoory Group of Companies is a Dubai-based diversified holding group comprising 25 operating companies and business divisions spanning trading, engineering, manufacturing, recycling, sustainability, logistics, automotive, hospitality and food & beverage.",
  alternates: { canonical: "/companies" },
};

async function Companies({ searchParams }) {
  const params = await searchParams;
  const search = params.search || "";
  const t = await getTranslations("CompaniesPage");
  const locale = await getLocale();

  const sectorsI = companiesSectors;

  const companies = [
    {
      name: "MAHY Khoory Group of Companies",
      slug: "mahy-khoory-group",
      image:
        "/assets/mahy-comp-removebg-preview_p7rg9d.png",
      sector: "group",
      size: "large",
      location: "uae",
      emirate: "dubai",
      preview:
        "A diversified conglomerate operating across manufacturing, trading, engineering, logistics, automotive, hospitality, and sustainability sectors.",
    },
    {
      name: "MAHY Khoory Trading",
      slug: "mahy-khoory-trading",
      image:
        "/assets/union-industries_qsyee7.png",
      sector: "trading",
      size: "medium",
      location: "ksa",
      emirate: "dubai",
      preview:
        "The Group's commercial arm supplying industrial, electromechanical, HVAC, and infrastructure equipment across the GCC.",
    },
    {
      name: "Al Khoory Engineering",
      slug: "al-khoory-engineering",
      image: "/assets/32f40b96-2c09-4429-99c1-a4ea6b99c595.png",
      sector: "engineering",
      size: "large",
      location: "uae",
      emirate: "dubai",
      preview:
        "Provides end-to-end engineering, design, and turnkey execution of water and wastewater pumping systems.",
    },
    {
      name: "Union Paper Mills",
      slug: "union-paper-mills",
      image:
        "/assets/Union_Paper_Mills_yg4zsr.png",
      sector: "manufacturing",
      size: "large",
      location: "uae",
      emirate: "dubai",
      preview:
        "Manufactures recycled linerboard and fluting medium from waste paper for sustainable packaging.",
    },
    {
      name: "Al Dhafra Paper Manufacturing",
      slug: "al-dhafra-paper-manufacturing",
      image:
        "/assets/Al_Dhafra_Paper_Manufacturing_ibg1np.png",
      sector: "manufacturing",
      size: "large",
      location: "uae",
      emirate: "abu-dhabi",
      preview:
        "Produces high-quality recycled containerboard for packaging industries.",
    },
    {
      name: "Union Wood Works",
      slug: "union-wood-works",
      image:
        "/assets/Union_Wood_Works_zah5u9.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview:
        "Produces compressed wood blocks from recycled fibers for industrial applications.",
    },
    {
      name: "Recyclable Waste Management Division",
      slug: "rwmd",
      image:
        "/assets/Al_Dhafra_Waste_Collection_yihnwv.png",
      sector: "waste management",
      size: "large",
      location: "uae",
      emirate: "dubai",
      preview:
        "Handles large-scale recyclable waste processing supporting circular economy initiatives.",
    },
    {
      name: "Al Dhafra Waste Collection",
      slug: "al-dhafra-waste-collection",
      image:
        "/assets/Al_Dhafra_Waste_Collection_yihnwv.png",
      sector: "waste management",
      size: "medium",
      location: "uae",
      emirate: "abu-dhabi",
      preview:
        "Provides waste collection services across Abu Dhabi supporting recycling supply chains.",
    },
    {
      name: "Around Continent Waste Collection",
      slug: "around-continent-waste-collection",
      image:
        "/assets/green-arabia_vv0jlv.png",
      sector: "waste management",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview:
        "Licensed hazardous waste collection and transport services ensuring compliance.",
    },
    {
      name: "Etihad Waste Management",
      slug: "al-etihad-waste-management-services-llc",
      image:
        "/assets/al-etihad_iml1nr.png",
      sector: "waste management",
      size: "large",
      location: "oman",
      preview:
        "Provides large-scale recyclable waste processing services supporting sustainability goals.",
    },
    {
      name: "Clean Earth LLC",
      slug: "clean-earth-llc",
      image:
        "/assets/clean-earth_ljd0zc.png",
      sector: "clean earth",
      size: "large",
      location: "uae",
      emirate: "dubai",
      preview:
        "Recycling services for oils, metals, and glass supporting circular economy.",
    },
    {
      name: "Solid Waste Management Division",
      slug: "solid-waste-management-division",
      image:
        "/assets/Al_Dhafra_Waste_Collection_yihnwv.png",
      sector: "waste management",
      size: "small",
      location: "uae",
      emirate: "dubai",
      preview: "Comprehensive solid waste collection and disposal services.",
    },
    {
      name: "Union Sustainable Packaging Solutions",
      slug: "union-sustainable-packaging",
      image:
        "/assets/Union_Sustainable_Packaging_Solutions_jgnr0t.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview:
        "Designs eco-friendly packaging solutions using recycled materials.",
    },
    {
      name: "National Paper Industries",
      slug: "national-paper-industry",
      image:
        "/assets/npi-logo_yq0h45.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      emirate: "ajman",
      preview: "Produces corrugated cartons and packaging solutions.",
    },
    {
      name: "Greenland Transport",
      slug: "greenland-general-transport",
      image:
        "/assets/greenland_hyiyra.png",
      sector: "logistics",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview:
        "Provides logistics and transportation services for group operations.",
    },
    {
      name: "Senan Industry LLC",
      slug: "senan-industry",
      image:
        "/assets/senan_uunajv.png",
      sector: "manufacturing",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview: "Manufactures rigid plastic packaging solutions.",
    },
    {
      name: "Pure Energy Construction LLC",
      slug: "pure-energy-construction",
      image:
        "/assets/pure-energy_vk9vu2.png",
      sector: "energy",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview:
        "Provides solar EPC solutions for commercial and industrial clients.",
    },
    {
      name: "Pearl Marina Hotel Apartments",
      slug: "pearl-marina",
      image:
        "/assets/pearl-marina_sespkm.png",
      sector: "hospitality",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview: "Upscale serviced apartments in Dubai Marina.",
    },
    {
      name: "Market Restaurant and Café",
      slug: "market-restaurant",
      image:
        "/assets/market-place_wd3u8y.png",
      sector: "hospitality",
      size: "small",
      location: "uae",
      emirate: "dubai",
      preview: "Contemporary dining restaurant offering international cuisine.",
    },
    {
      name: "MAHY Khoory Motors",
      slug: "mahy-khoory-motors",
      image:
        "/assets/MKA_wwor7m.png",
      sector: "automotive",
      size: "large",
      location: "uae",
      emirate: "abu-dhabi",
      preview: "Distributor of OMODA and JAECOO vehicles.",
    },
    {
      name: "MAHY Khoory Automotive",
      slug: "mahy-khoory-automotive",
      image:
        "/assets/MKA_wwor7m.png",
      sector: "automotive",
      size: "large",
      location: "uae",
      emirate: "dubai",
      preview: "Represents Dongfeng vehicles with integrated services.",
    },
    {
      name: "Union Nonwoven Industries",
      slug: "union-nonwoven-industries",
      image: "/assets/mahy-comp-removebg-preview_p7rg9d.png",
      sector: "industries",
      size: "large",
      location: "uae",
      emirate: "abu-dhabi",
      preview: "Union Nonwoven Industries",
    },
    {
      name: "Creative Solutions Green Building Consultancy",
      slug: "creative-solutions",
      image:
        "/assets/creative-solution_pwju0r.png",
      sector: "consultancy",
      size: "medium",
      location: "uae",
      emirate: "dubai",
      preview:
        "Provides sustainability and green building consultancy services.",
    },
  ];

  const filterLabelOverrides = {
    ksa: "KSA",
    oman: "Oman",
    uae: "UAE",
  };

  const formatFilterLabel = (value) =>
    filterLabelOverrides[value] ||
    value
      .split(/[\s-]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const createFilterOptions = (key) =>
    Array.from(new Set(companies.map((company) => company[key]).filter(Boolean)))
      .sort((a, b) => formatFilterLabel(a).localeCompare(formatFilterLabel(b)))
      .map((value) => ({
        id: value,
        label: formatFilterLabel(value),
      }));

  const sectors = createFilterOptions("sector");
  const sizes = createFilterOptions("size");
  const locations = createFilterOptions("location");
  const emirates = createFilterOptions("emirate");

  const filters = [
    {
      title: "Sector",
      key: "sector",
      options: sectors,
      count: sectors.length,
    },
    {
      title: "Company Size",
      key: "size",
      options: sizes,
      count: sizes.length,
    },
    {
      title: "Location",
      key: "location",
      options: locations,
      count: locations.length,
    },
    {
      title: "Emirate",
      key: "emirate",
      options: emirates,
      count: emirates.length,
    },
  ];

  const getCompanies = () => {
    const normalizedSearch = search.trim().toLowerCase();
    let filtered = normalizedSearch
      ? companies.filter((company) => {
        const searchableText = [
          company.name,
          company.slug,
          company.sector,
          company.location,
          company.emirate,
          company.preview,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedSearch);
      })
      : companies;

    const sectorValues = params.sector?.split(",").filter(Boolean) || [];
    const sizeValues = params.size?.split(",").filter(Boolean) || [];
    const locationValues = params.location?.split(",").filter(Boolean) || [];
    const emirateValues = params.emirate?.split(",").filter(Boolean) || [];

    return filtered.filter((company) => {
      if (sectorValues.length && !sectorValues.includes(company.sector))
        return false;
      if (sizeValues.length && !sizeValues.includes(company.size)) return false;
      if (locationValues.length && !locationValues.includes(company.location))
        return false;
      if (emirateValues.length && !emirateValues.includes(company.emirate))
        return false;
      return true;
    });
  };

  return (
    <main className="bg-gray-50 pb-14">
      <PageHeading
        title={t("Heading")}
        description={"MAHY Khoory Group of Companies is a Dubai-based diversified holding group comprising 25 operating companies and business divisions across multiple industries. The Group has built a strong presence in the UAE and the wider region through long-term commercial relationships, technical capability, and integrated operations. With businesses spanning trading, engineering, industrial manufacturing, recycling, sustainability, logistics, automotive, hospitality, and food & beverage, the Group operates a balanced and resilient portfolio designed to support both traditional industries and future-focused sectors."}
        image={"/assets/abstract-business-office-building-london_rrnpsd.jpg"}
      />

      <Breadcrumb
        segments={[{ label: t("Page"), href: "/companies" }]}
        locale={locale}
      />

      <div
        id="list"
        className="relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20"
      >
        <Filters filters={filters} search={search} />

        <div className="col-span-8">
          <List companies={getCompanies()} locale={locale} />
        </div>
      </div>

      <SectorsSection sectors={sectorsI} />
    </main>
  );
}

export default Companies;

// import Filters from '@/components/UI/companies/Filters';
// import PageHeading from '@/components/UI/PageHeading';
// import List from '@/components/UI/companies/List';
// import React from 'react'
// import Breadcrumb from '@/components/UI/Breadcrumb';
// import { getLocale, getTranslations } from 'next-intl/server';
// import SectorsSection from '@/components/UI/companies/SectorsSection';
// import { companiesSectors } from '@/constants/sectors';

// async function Companies({ searchParams }) {
//     const params = await searchParams;
//     const search = params.search;
//     const t = await getTranslations('CompaniesPage');
//     const locale = await getLocale();

//     const sectorsI = companiesSectors;

//     const sectors = [
//         { id: 1, label: t("Filter1Label1") },
//         { id: 2, label: t("Filter1Label2") },
//         { id: 3, label: t("Filter1Label3") },
//         { id: 4, label: t("Filter1Label4") },
//         { id: 5, label: t("Filter1Label5") },
//     ];
//     const sizes = [
//         { id: 1, label: t("Filter2Label1") },
//         { id: 2, label: t("Filter2Label2") },
//         { id: 3, label: t("Filter2Label3") },
//         { id: 4, label: t("Filter2Label4") },
//         { id: 5, label: t("Filter2Label5") },
//     ];
//     const locations = [
//         { id: 1, label: t("Filter3Label1") },
//         { id: 2, label: t("Filter3Label2") },
//         { id: 3, label: t("Filter3Label3") },
//         { id: 4, label: t("Filter3Label4") },
//         { id: 5, label: t("Filter3Label5") },
//     ];

//     const filters = [
//         {
//             title: t("Filter1"),
//             key: "sector",
//             options: sectors,
//             count: sectors.length.toLocaleString(locale)
//         },
//         {
//             title: t("Filter2"),
//             key: "size",
//             options: sizes,
//             count: sizes.length.toLocaleString(locale)
//         },
//         {
//             title: t("Filter3"),
//             key: "location",
//             options: locations,
//             count: locations.length.toLocaleString(locale)
//         },
//     ];
//     const companies = [
//         {
//             name: "MAHY Khoory Group",
//             image: "/assets/union-industries_qsyee7.png",
//             sectorId: 1,
//             sizeId: 4,
//             locationId: 1,
//         },
//         {
//             name: "MAHY Khoory Trading",
//             image: "/assets/union-industries_qsyee7.png",
//             sectorId: 2,
//             sizeId: 3,
//             locationId: 2,
//         },
//         {
//             name: "MAHY Khoory Automotive",
//             image: "/assets/MKA_wwor7m.png",
//             sectorId: 3,
//             sizeId: 5,
//             locationId: 3,
//         },
//         {
//             name: "National Paper Industry ",
//             image: "/assets/npi-logo_yq0h45.png",
//             sectorId: 4,
//             sizeId: 2,
//             locationId: 4,
//         },
//     ];

//     const getCompanies = () => {
//         let filteredCompanies = search
//             ? companies.filter(c =>
//                 c.name.toLowerCase().includes(search.toLowerCase())
//             )
//             : companies;

//         const sectorIds = params.sector?.split(",").map(Number) || [];
//         const sizeIds = params.size?.split(",").map(Number) || [];
//         const locationIds = params.location?.split(",").map(Number) || [];

//         return filteredCompanies.filter((company) => {
//             if (sectorIds.length && !sectorIds.includes(company.sectorId)) return false;
//             if (sizeIds.length && !sizeIds.includes(company.sizeId)) return false;
//             if (locationIds.length && !locationIds.includes(company.locationId)) return false;
//             return true;
//         });
//     };

//     return (
//         <main className='bg-gray-50 pb-14'>
//             <PageHeading title={t("Heading")}
//                 description={t("Description")}
//                 image={"/gallery/gallery-2.jpg"}
//             />
//             <Breadcrumb segments={[{ label: t("Page"), href: "/companies" }]} locale={locale} />
//             <div id='list' className='relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20'>
//                 <Filters filters={filters} search={search} />
//                 <div className="col-span-8">
//                     <List companies={getCompanies()} locale={locale} />
//                 </div>
//             </div>
//             <SectorsSection sectors={sectorsI} />
//         </main>
//     )
// }

// export default Companies
