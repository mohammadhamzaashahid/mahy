import PageHeading from "@/components/UI/PageHeading";
import React from "react";
import Breadcrumb from "@/components/UI/Breadcrumb";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import LeadersSection from "@/components/UI/about-us/LeadersSection";
import MissionStatement from "@/components/UI/about-us/MissionStatement";
import Purpose from "@/components/UI/about-us/Purpose";
import { getLocale, getTranslations } from "next-intl/server";
import IndustriesGrid from "@/components/UI/about-us/IndustriesGrid";
import ManufacturingNetworkSection from "@/components/UI/about-us/ManufacturingNetworkSection";
import CompanyStructure from "@/components/UI/about-us/CompanyStructure";
import CompaniesSectorsGrid from "@/components/CompaniesSectorsGrid";
import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import VisionSection from "@/components/UI/about-us/BenchMarks";
import TimelineContainer from "@/components/Layout/TimelineContainer";
import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection";

async function About() {
  const t = await getTranslations("AboutUsPage");
  const locale = await getLocale();

    const sections = [
    {
      title: "Customer Experience",
      subtitle: "Deliver exceptional value through every customer interaction.",
      bullets: [
        "Customer-centric mindset",
        "Reliable products and expert support",
        "Seamless end-to-end service",
        "Long-term partnerships built on trust",
        "Consistent excellence across every touchpoint"

      ],
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776679387/recycling-symbol-green-wall-modern-office.jpg_hflmu9.jpg",
    },
    {
      title: "People & Organization",
      subtitle: "Empower our people and teams to drive sustainable growth and organizational excellence.",
      bullets: [
        "Passion & Commitment",
        "Honesty & Openness",
        "Collaboration & Teamwork",
        "Continuous Learning & Development",
        "Diversity & Inclusion"
      ],
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg",
    },
    {
      title: "Business Strategy",
      subtitle: "Deliver sustainable growth and long-term value through strategic excellence and innovation.",
      bullets: [
        "Corporate Strategy & Financial Excellence",
        "Innovation & Business Growth",
        "Sustainable Business Development",
        "Strategic Partnerships & Expansion",
        "Operational Excellence & Value Creation"
      ],
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776761407/comprehensive-growth_irbplq.jpg",
    }
  ];


  const missionStatement = {
    heading: t("MissionStatement.Heading"),
    subHeading: t("MissionStatement.SubHeading"),
    text: t("MissionStatement.Text"),
    button: t("MissionStatement.Button"),
  };
  const structure = {
    heading: t("Structure.Heading"),
    company: t("Structure.Company"),
    items: [
      {
        title: t("Structure.Item1"),
        subTitle: t("Structure.Item1SubTitle"),
        text: t("Structure.Item1Text"),
      },
      {
        title: t("Structure.Item2"),
        subTitle: t("Structure.Item2SubTitle"),
        text: t("Structure.Item2Text"),
      },
      {
        title: t("Structure.Item3"),
        subTitle: t("Structure.Item3SubTitle"),
        text: t("Structure.Item3Text"),
      },
      {
        title: t("Structure.Item4"),
        subTitle: t("Structure.Item4SubTitle"),
        text: t("Structure.Item4Text"),
      },
      {
        title: t("Structure.Item5"),
        subTitle: t("Structure.Item5SubTitle"),
        text: t("Structure.Item5Text"),
      },
      {
        title: t("Structure.Item6"),
        subTitle: t("Structure.Item6SubTitle"),
        text: t("Structure.Item6Text"),
      },
    ],
  };
  const purpose = {
    heading: t("Purpose.Heading"),
    subHeading: t("Purpose.SubHeading"),
    items: [
      {
        title: t("Purpose.Item1Title"),
        content: t("Purpose.Item1Text"),
      },
      {
        title: t("Purpose.Item2Title"),
        content: t("Purpose.Item2Text"),
      },
      {
        title: t("Purpose.Item3Title"),
        content: t("Purpose.Item3Text"),
      },
    ],
    text1: t("Purpose.Text1"),
    text2: t("Purpose.Text2"),
  };
  const milestones = [
    {
      year: t("History.Item1Title"),
      title: t("History.Item1Text"),
      curveAt: 0.08,
      side: "above",
      description: [
        t("History.Item1Description1"),
        t("History.Item1Description2"),
        t("History.Item1Description3"),
        t("History.Item1Description4"),
        t("History.Item1Description5"),
      ],
      rulerLabel: t("History.Item1Title"),
    },
    {
      year: t("History.Item2Title"),
      title: t("History.Item2Text"),
      curveAt: 0.28,
      side: "below",
      description: [
        t("History.Item2Description1"),
        t("History.Item2Description2"),
        t("History.Item2Description3"),
        t("History.Item2Description4"),
      ],
      rulerLabel: t("History.Item2Title"),
    },
    {
      year: t("History.Item3Title"),
      title: t("History.Item3Text"),
      curveAt: 0.42,
      side: "above",
      description: [
        t("History.Item3Description1"),
        t("History.Item3Description2"),
        t("History.Item3Description3"),
        t("History.Item3Description4"),
        t("History.Item3Description5"),
      ],
      rulerLabel: t("History.Item3Title"),
    },
    {
      year: t("History.Item4Title"),
      title: t("History.Item4Text"),
      curveAt: 0.58,
      side: "below",
      description: [
        t("History.Item4Description1"),
        t("History.Item4Description2"),
        t("History.Item4Description3"),
        t("History.Item4Description4"),
        t("History.Item4Description5"),
      ],
      rulerLabel: "2023",
    },


  ];
  // const history = {
  //   heading: t("History.Heading"),
  //   subHeading: t("History.Text"),
  //   items: [
  //     {
  //       title: t("History.Item1Title"),
  //       text: t("History.Item1Text"),
  //       description: [
  //         t("History.Item1Description1"),
  //         t("History.Item1Description2"),
  //         t("History.Item1Description3"),
  //         t("History.Item1Description4"),
  //         t("History.Item1Description5"),
  //       ],
  //       image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771915804/office_jaeuiz.webp",
  //     },
  //     {
  //       title: t("History.Item2Title"),
  //       text: t("History.Item2Text"),
  //       description: [
  //         t("History.Item2Description1"),
  //         t("History.Item2Description2"),
  //         t("History.Item2Description3"),
  //         t("History.Item2Description4"),
  //       ],
  //       image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771915804/office_jaeuiz.webp",
  //     },
  //     {
  //       title: t("History.Item3Title"),
  //       text: t("History.Item3Text"),
  //       description: [
  //         t("History.Item3Description1"),
  //         t("History.Item3Description2"),
  //         t("History.Item3Description3"),
  //         t("History.Item3Description4"),
  //         t("History.Item3Description5"),
  //       ],
  //       image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771915804/office_jaeuiz.webp",
  //     },
  //     {
  //       title: t("History.Item4Title"),
  //       text: t("History.Item4Text"),
  //       description: [
  //         t("History.Item4Description1"),
  //         t("History.Item4Description2"),
  //         t("History.Item4Description3"),
  //         t("History.Item4Description4"),
  //         t("History.Item4Description5"),
  //       ],
  //       image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771915804/office_jaeuiz.webp",
  //     },
  //   ],
  // };
  const network = {
    text: ["Regional Reach. Global Presence.", "With a network of offices across all seven Emirates of the UAE and an international footprint in Oman, India, and Iraq, our teams work collaboratively to deliver exceptional service and support to customers across the region and beyond."],
    stats: ["Employees", "Nationalities"],
    statsNo: [
      (4000).toLocaleString(locale),
      (35).toLocaleString(locale),
  
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
  const ourPeople = {
    heading: t("OurPeople.Heading"),
    text: t("OurPeople.Text"),
  };
  const leaders = {
    heading: t("Leaders.Heading"),
    leader1: {
      quote: t("Leaders.Text1"),
      name: t("Leaders.Person1"),
      designation: t("Leaders.Position1"),
    },
    leader2: {
      quote: t("Leaders.Text2"),
      name: t("Leaders.Person2"),
      designation: t("Leaders.Position2"),
    },
  };
  const ourExcellence = {
    heading: t("OurExcellence.Heading"),
    text: t("OurExcellence.Text"),
  };
  const industries = [
    t("Industries.Item1"),
    t("Industries.Item2"),
    t("Industries.Item3"),
    t("Industries.Item4"),
    t("Industries.Item5"),
    t("Industries.Item6"),
    t("Industries.Item7"),
    t("Industries.Item8"),
    t("Industries.Item9"),
    t("Industries.Item10"),
  ];

  return (
    <main className="bg-gray-50">
      <PageHeading
        title={t("Heading")}
        description={t("Description")}
        // image={"/gallery/MAHYABOUT.jpg"}
        image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771915804/office_jaeuiz.webp"}
      />
      <Breadcrumb
        segments={[{ label: t("Page"), href: "/about-us" }]}
        locale={locale}
      />
      <MissionStatement missionStatement={missionStatement} />

      <section className="max-w-7xl mx-auto px-5 py-15 md:py-25">
        <CompaniesSectorsGrid
        mainTitle="Know About Us"
          title="Nearly a century of building the UAE's industrial future"
          texts={[
            "M.A.H.Y. Khoory & Co. LLC is one of the UAE's most established and trusted diversified industrial holding groups, founded in Dubai in 1930 by Mohd. Abdulla Haji Yousuf Khoory, a UAE-national family enterprise that has been part of this country's commercial and industrial fabric for nearly a century. What began as a single trading venture in the formative years of the region's economy has grown, across four generations and through disciplined, deliberate expansion, into a Group of 25 operating companies spanning ten industries and serving clients across the globe. ",
            "Today, the Group's portfolio covers the full breadth of industrial activity pumping and electromechanical engineering through Al Khoory Engineering and M.A.H.Y. Khoory Trading paper recycling and packaging manufacturing through Union Paper Mills one of the UAE's earliest large-scale recycling operations established in 1987 and Al Dhafra Paper Manufacturing in Abu Dhabi, which together process hundreds of tonnes of recovered wastepaper daily and convert it into recycled containerboard for the regional packaging industry waste management and environmental services through the Recyclable Waste Management Division, Al Dhafra Waste Collection, Around Continent Waste Collection, Clean Earth LLC, the Solid Waste Management Division, and Al Etihad Waste Management in Oman collectively one of the most extensive integrated recycling networks in the Gulf, renewable energy through Pure Energy Construction LLC, the Group's solar EPC arm delivering photovoltaic installations across commercial and industrial sites in the UAE automotive distribution through MAHY Khoory Automotive and MAHY Khoory Motors, representing Dongfeng, OMODA, and JAECOO across Dubai, Abu Dhabi, and the Western Region, logistics through Greenland General Transport, sustainable packaging through Union Wood Works and Union Sustainable Packaging Solutions, plastic manufacturing through Senan Industry LLC and hospitality and food and beverage through Pearl Marina Hotel Apartments and Market Restaurant & Café in Dubai Marina. ",
          ]}
          image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776973905/close-up-data-center-computer-scientist-using-tablet-deploying-servers-network-hardware-it.jpg_lp83fn.jpg"
          image2="/gallery/image.png"
          texts2={[
            "The Group employs more than 4,200 employees representing over 38 nationalities across more than 20 offices spread across all Emirates of the UAE, with a global presence in Oman, India, and Iraq, reflecting the diversity and operational depth of an organization that has grown alongside the UAE itself.As the authorized UAE distributor for globally recognized engineering brands, the Group brings world-class technology to infrastructure, construction, and industrial projects backed by the local expertise and after-sales capability that only a Group of this tenure and scale can provide. M.A.H.Y. Khoory Group is UAE-national owned, Dubai-founded, and built on the belief that responsible, long-term industrial growth not short-term diversification for its own sake is what creates lasting value for customers, communities, and the country.",
          ]}
        />
      </section>

      <EnterprisePinnedSection sections={sections}/>

      {/* <HistoryTimeline title="History Of MAHY Khoory" items={items} /> */}
      {/* <MilestoneTimeline title="History Of MAHY Khoory" milestones={milestones} /> */}
      {/* <VisionSection /> */}
      <TimelineContainer title={"History Of MAHY Khoory"} milestones={milestones} />
      <CompanyStructure data={structure} />
      <Purpose purpose={purpose} />
      {/* <History history={history} /> */}
      {/* <HistoryTimelineClient
        title={t("History.Heading")}
        items={[
          {
            year: t("History.Item1Title"),
            title: t("History.Item1Text"),
            description: [
              t("History.Item1Description1"),
              t("History.Item1Description2"),
              t("History.Item1Description3"),
              t("History.Item1Description4"),
              t("History.Item1Description5"),
            ],
          },
          {
            year: t("History.Item2Title"),
            title: t("History.Item2Text"),
            description: [
              t("History.Item2Description1"),
              t("History.Item2Description2"),
              t("History.Item2Description3"),
              t("History.Item2Description4"),
            ],
          },
          {
            year: t("History.Item3Title"),
            title: t("History.Item3Text"),
            description: [
              t("History.Item3Description1"),
              t("History.Item3Description2"),
              t("History.Item3Description3"),
              t("History.Item3Description4"),
              t("History.Item3Description5"),
            ],
          },
          {
            year: t("History.Item4Title"),
            title: t("History.Item4Text"),
            description: [
              t("History.Item4Description1"),
              t("History.Item4Description2"),
              t("History.Item4Description3"),
              t("History.Item4Description4"),
              t("History.Item4Description5"),
            ],
          },
        ]}
      /> */}
      <IndustriesGrid
        heading={t("Industries.Heading")}
        industries={industries}
      />
      <ManufacturingNetworkSection network={network} locale={locale} />
      <ValuesSection
        title={ourPeople.heading}
        description={ourPeople.text}
        imageSrc="/gallery/gallery-2.jpg"
        imageAlt="Our people"
        imagePosition="right"
        ctaLabel="Learn More"
        ctaHref="/people"
      />
      <div className="border-b border-gray-200"></div>
      <LeadersSection leaders={leaders} />
      <ValuesSection
        title={ourExcellence.heading}
        description={ourExcellence.text}
        imageSrc="/gallery/gallery-6.jpg"
        imageAlt="Our people"
        imagePosition="left"
        ctaLabel="Learn More"
        ctaHref="/about-us/certifications-and-accreditations"
      />
    </main>
  );
}

export default About;
