import PageHeading from "@/components/UI/PageHeading";
import React from "react";
import Breadcrumb from "@/components/UI/Breadcrumb";
import History from "@/components/UI/about-us/History";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import LeadersSection from "@/components/UI/about-us/LeadersSection";
import MissionStatement from "@/components/UI/about-us/MissionStatement";
import Purpose from "@/components/UI/about-us/Purpose";
import { getTranslations } from "next-intl/server";
import HistoryTimelineClient from "@/components/HistoryTimelineClient";
import IndustriesGrid from "@/components/UI/about-us/IndustriesGrid";
import ManufacturingNetworkMap from "@/components/UI/about-us/ManufacturingNetworkMap";
import ManufacturingNetworkSection from "@/components/UI/about-us/ManufacturingNetworkSection";

async function About() {
  const translations = await getTranslations("AboutUsPage");

  const missionStatement = {
    heading: translations("MissionStatement.Heading"),
    subHeading: translations("MissionStatement.SubHeading"),
    text: translations("MissionStatement.Text"),
    button: translations("MissionStatement.Button"),
  };

  const purpose = {
    heading: translations("Purpose.Heading"),
    subHeading: translations("Purpose.SubHeading"),
    items: [
      {
        title: translations("Purpose.Item1Title"),
        content: translations("Purpose.Item1Text"),
      },
      {
        title: translations("Purpose.Item2Title"),
        content: translations("Purpose.Item2Text"),
      },
      {
        title: translations("Purpose.Item3Title"),
        content: translations("Purpose.Item3Text"),
      },
    ],
    text1: translations("Purpose.Text1"),
    text2: translations("Purpose.Text2"),
  };

  const history = {
    heading: translations("History.Heading"),
    subHeading: translations("History.Text"),
    items: [
      {
        title: translations("History.Item1Title"),
        text: translations("History.Item1Text"),
        description: [
          translations("History.Item1Description1"),
          translations("History.Item1Description2"),
          translations("History.Item1Description3"),
          translations("History.Item1Description4"),
          translations("History.Item1Description5"),
        ],
        image: "/office.jpg",
      },
      {
        title: translations("History.Item2Title"),
        text: translations("History.Item2Text"),
        description: [
          translations("History.Item2Description1"),
          translations("History.Item2Description2"),
          translations("History.Item2Description3"),
          translations("History.Item2Description4"),
        ],
        image: "/office.jpg",
      },
      {
        title: translations("History.Item3Title"),
        text: translations("History.Item3Text"),
        description: [
          translations("History.Item3Description1"),
          translations("History.Item3Description2"),
          translations("History.Item3Description3"),
          translations("History.Item3Description4"),
          translations("History.Item3Description5"),
        ],
        image: "/office.jpg",
      },
      {
        title: translations("History.Item4Title"),
        text: translations("History.Item4Text"),
        description: [
          translations("History.Item4Description1"),
          translations("History.Item4Description2"),
          translations("History.Item4Description3"),
          translations("History.Item4Description4"),
          translations("History.Item4Description5"),
        ],
        image: "/office.jpg",
      },
    ],
  };
  const ourPeople = {
    heading: translations("OurPeople.Heading"),
    text: translations("OurPeople.Text"),
  };
  const leaders = {
    heading: translations("Leaders.Heading"),
    leader1: {
      quote: translations("Leaders.Text1"),
      name: translations("Leaders.Person1"),
      designation: translations("Leaders.Position1"),
    },
    leader2: {
      quote: translations("Leaders.Text2"),
      name: translations("Leaders.Person2"),
      designation: translations("Leaders.Position2"),
    },
  };
  const ourExcellence = {
    heading: translations("OurExcellence.Heading"),
    text: translations("OurExcellence.Text"),
  };

  return (
    <>
      <main className="bg-gray-50">
        <PageHeading
          title={translations("Heading")}
          description={translations("Description")}
          image={"/gallery/MAHYABOUT.jpg"}
        />
        <Breadcrumb />
        <MissionStatement missionStatement={missionStatement} />
        <Purpose purpose={purpose} />
        <div className="py-16 lg:py-24 border-b border-gray-300">
          <History history={history} />
        </div>

        <HistoryTimelineClient
          title={translations("History.Heading")}
          items={[
            {
              year: translations("History.Item1Title"),
              title: translations("History.Item1Text"),
              description: [
                translations("History.Item1Description1"),
                translations("History.Item1Description2"),
                translations("History.Item1Description3"),
                translations("History.Item1Description4"),
                translations("History.Item1Description5"),
              ],
            },
            {
              year: translations("History.Item2Title"),
              title: translations("History.Item2Text"),
              description: [
                translations("History.Item2Description1"),
                translations("History.Item2Description2"),
                translations("History.Item2Description3"),
                translations("History.Item2Description4"),
              ],
            },
            {
              year: translations("History.Item3Title"),
              title: translations("History.Item3Text"),
              description: [
                translations("History.Item3Description1"),
                translations("History.Item3Description2"),
                translations("History.Item3Description3"),
                translations("History.Item3Description4"),
                translations("History.Item3Description5"),
              ],
            },
            {
              year: translations("History.Item4Title"),
              title: translations("History.Item4Text"),
              description: [
                translations("History.Item4Description1"),
                translations("History.Item4Description2"),
                translations("History.Item4Description3"),
                translations("History.Item4Description4"),
                translations("History.Item4Description5"),
              ],
            },
          ]}
        />

        <IndustriesGrid />

        {/* <ManufacturingNetworkMap /> */}
        <ManufacturingNetworkSection />

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
          ctaHref="/people"
        />

        {/* <div className="border-b border-gray-200"></div> */}
      </main>
    </>
  );
}

export default About;
