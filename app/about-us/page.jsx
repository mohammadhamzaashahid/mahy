import PageHeading from '@/components/UI/PageHeading';
import React from 'react'
import Breadcrumb from '@/components/UI/Breadcrumb';
import History from '@/components/UI/about-us/History';
import ValuesSection from '@/components/UI/about-us/ValuesSection';
import LeadersSection from '@/components/UI/about-us/LeadersSection';
import MissionStatement from '@/components/UI/about-us/MissionStatement';
import Purpose from '@/components/UI/about-us/Purpose';
import { getTranslations } from 'next-intl/server';

async function About() {
    const translations = await getTranslations('AboutUsPage');

    const missionStatement = {
        heading: translations("MissionStatement.Heading"),
        subHeading: translations("MissionStatement.SubHeading"),
        text: translations("MissionStatement.Text"),
        button: translations("MissionStatement.Button"),
    }

    const purpose = {
        heading: translations("Purpose.Heading"),
        subHeading: translations("Purpose.SubHeading"),
        items: [
            { title: translations("Purpose.Item1Title"), content: translations("Purpose.Item1Text") },
            { title: translations("Purpose.Item2Title"), content: translations("Purpose.Item2Text") },
            { title: translations("Purpose.Item3Title"), content: translations("Purpose.Item3Text") }
        ],
        text1: translations("Purpose.Text1"),
        text2: translations("Purpose.Text2"),
    }

    return (
        <main className='bg-gray-50'>
            <PageHeading title={translations("Heading")}
                description={translations("Description")}
                image={"/gallery/MAHYABOUT.jpg"}
            />
            <Breadcrumb />
            <MissionStatement missionStatement={missionStatement} />
            <Purpose purpose={purpose} />
            <div className='py-16 lg:py-24 border-b border-gray-300'>
                <History />
            </div>
            <ValuesSection
                title="OUR PEOPLE"
                description="Our dedicated team of more than 100,000 employees from over 150 nationalities ensure the smooth flow of trade. As an equal employer that recognises and values diversity and an inclusive culture, we empower and up-skill our people with opportunities to perform at their best."
                imageSrc="/gallery/gallery-2.jpg"
                imageAlt="Our people"
                imagePosition="right"
                ctaLabel="Learn More"
                ctaHref="/people"
            />
            <div className='border-b border-gray-200'>
            </div>
            <LeadersSection />
            <ValuesSection
                title="OUR EXCELLENCE"
                description="Our dedicated team of more than 100,000 employees from over 150 nationalities ensure the smooth flow of trade. As an equal employer that recognises and values diversity and an inclusive culture, we empower and up-skill our people with opportunities to perform at their best."
                imageSrc="/gallery/gallery-6.jpg"
                imageAlt="Our people"
                imagePosition="left"
                ctaLabel="Learn More"
                ctaHref="/people"
            />

        </main>
    )
}

export default About