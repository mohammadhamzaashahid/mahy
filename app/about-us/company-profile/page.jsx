import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import SustainabilityPanels from "@/components/SustainabilityPanels";
import CompanyStructure from "@/components/UI/about-us/CompanyStructure";
import ManufacturingNetworkSection from "@/components/UI/about-us/ManufacturingNetworkSection";
import AnimatedLines from "@/components/UI/AnimatedLines";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import SubPageHeading from "@/components/UI/SubPageHeading";
import SubPageHeadingNoOverlayImage from "@/components/UI/SubPageHeadingNoOverlayImage";
import { companyDescriptions } from "@/constants/companyDescriptions";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

export const metadata = {
  title: "Company Profile",
  description:
    "An overview of M.A.H.Y. Khoory & Co. LLC's operational network, scale and diversified business profile across the UAE and the wider Middle East.",
  alternates: { canonical: "/about-us/company-profile" },
};

async function companyProfile() {
  const locale = await getLocale();
  const t = await getTranslations("AboutUsPage");

  const network = {
    text: [t("Network.Text1"), t("Network.Text2")],
    stats: [t("Network.Stat1"), t("Network.Stat2"), t("Network.Stat3")],
    statsNo: [
      (300000).toLocaleString(locale),
      (60).toLocaleString(locale),
      (1200).toLocaleString(locale),
    ],
    map: [t("Network.Map1"), t("Network.Map2"), t("Network.Map3")],
    locations: [
      t("Network.Location1"),
      t("Network.Location2"),
      t("Network.Location3"),
      t("Network.Location4"),
      t("Network.Location5"),
    ],
  };

  const sustainability = [
    {
      title: "Diversification with depth",
      image: "/al-quba.jpg",
      bullets: [
        "A balanced mix of commercial",
        "industrial",
        "manufacturing",
        "service businesses",
      ],
    },
    {
      title: "Engineering & technical capability",
      image: "/burj.jpg",
      description: "Strong in-house expertise supporting complex projects",
    },
    {
      title: "Sustainability focus",
      image: "/mosque.JPG",
      bullets: [
        "Active participation in recycling",
        "renewable energy",
        "circular economy initiatives",
      ],
    },
    {
      title: "Operational reliability",
      image: "/dubai-pano.jpg",
      description:
        "Long-standing partnerships and proven execution track record",
    },
  ];

  const structure = {
    heading: "MAHY Khoory",
    company:
      "The Group operates through a network of specialized subsidiaries and divisions, each focused on a defined business activity, while benefiting from centralized governance, shared infrastructure, and group-wide management standards. This structure enables efficiency, accountability, and consistency across all operations.",
    items: [
      {
        title: "25",
        subTitle: "Companies & Operating divisions",
        text: "",
      },
      {
        title: "Facilities",
        subTitle: "Manufacturing & Industrial",
        text: "",
      },

      {
        title: "Trading",
        subTitle: "Global sourcing & distribution",
        text: "",
      },
      {
        title: "Engineering",
        subTitle: "Integrated technical solutions",
        text: "",
      },
      {
        title: "Servicing",
        subTitle: "Lifecycle support & maintenance",
        text: "",
      },
      {
        title: "Regions",
        subTitle: "All Across UAE & OMAN",
        text: "",
      },
    ],
  };



  return (
    <>
      <SubPageHeading
        fullHeight
        scrollReadText="Know About Us"
        image={"/assets/business-people-group-hd-8k-wallpaper-stock-photographic-image.jpg_bbf9gf.jpg"}
        // image2={"/profile/profile-bg-2.jpg"}
        height="h-screen"
        title={"Our Company Profile"}
      />
      <WhoWeAre showButton={false} image={"/assets/group-business-people-are-sitting-conference-room-looking-out-city-skyline-sun-is-setting-sky-is-bright-orange_wmnkpt.jpg"} />
      {/* <div className="text-center px-4 bg-black p-20">
        <AnimatedLines bg="bg-gray-200" />
        <p className="text-heading text-2xl sm:text-1xl font-semibold text-gray-100">
          MAHY Khoory Group brings together decades of experience, deep sector
          knowledge, and strong operational capabilities across a diversified
          portfolio of businesses. Our expertise has been built over time
          through disciplined growth, long-term partnerships, and consistent
          execution across industrial, commercial, environmental, and service
          sectors.”
        </p>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-20 text-center b-base">
        <div className="flex justify-center mb-2 md:mb-6">
          <AnimatedLines bg="bg-gray-300" />
        </div>
        <p
          className="
      text-gray-100
      leading-relaxed
      tracking-wide
      max-w-4xl
      mx-auto
      text-lg
      sm:text-xl
      lg:text-2xl
    "
        >
          MAHY Khoory Group brings together decades of experience, deep sector
          knowledge, and strong operational capabilities across a diversified
          portfolio of businesses. Our expertise has been built over time
          through disciplined growth, long-term partnerships, and consistent
          execution across industrial, commercial, environmental, and service
          sectors.
        </p>
      </div>

      <CompanyStructure
        data={structure}
        textClasses="variant2"
        bg="bg-gray-50"
        bgHover="hove:bg-gray-50"
        collape={false}
      />

      <ManufacturingNetworkSection network={network} locale={locale} />

      <div className="text-center px-4 bg-black p-12 md:p-20">
        <AnimatedLines bg="bg-gray-200" />
        <h2 className="text-heading text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-100 pt-1 lg:pt-2">
          What Defines The Group
        </h2>
      </div>
      <SustainabilityPanels items={sustainability} cols={4} />
      <GroupCompaniesGrid companies={companyDescriptions} />

      {/* <EnterprisePinnedContainer /> */}
    </>
  );
};

export default companyProfile;
