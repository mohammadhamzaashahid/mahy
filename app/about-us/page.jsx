"use client"

import PageHeading from '@/components/UI/PageHeading';
import React from 'react'
import Breadcrumb from '@/components/UI/Breadcrumb';
import PrimaryButton from '@/components/UI/PrimaryButton';
import Link from 'next/link';
import AboutVideo from '@/components/UI/about-us/AboutVideo';
import History from '@/components/UI/about-us/History';
import ValuesSection from '@/components/UI/about-us/ValuesSection';
import LeadersSection from '@/components/UI/about-us/LeadersSection';
import { motion } from "framer-motion";

function About() {

    return (
        <main className='bg-gray-50'>
            <PageHeading title={"About Us"}
                description={"The M.A.H.Y. Khoory Group is among the most trusted and recognized names in the United Arab Emirates. A leader in the regional market, we at the M.A.H.Y. Khoory Group are a diverse group of companies and business units that bring world-class technological products and services to our clients."}
                image={"/gallery/MAHYABOUT.jpg"}
            />
            <Breadcrumb />
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div className='py-18 px-5 lg:py-16 border-b border-gray-300'>
                    <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
                        <h2 className='uppercase  font-bold'>Mission Statement</h2>
                        <p className="
                        text-teal-600
                        font-bold
                        uppercase
                        mt-6
                        mb-10
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        ">
                            We Make Flow Reliable
                        </p>
                        <p className='mt-2
                        text-base
                        sm:text-lg
                        leading-relaxed
                        font-light
                        text-gray-800'>
                            To provide high-quality pumping products and engineered solutions through trusted partnerships, continuous innovation, and exceptional service, creating long-term value for our customers, stakeholders, and communities.</p>
                        <Link className="mt-10" href={"/"}>
                            <PrimaryButton
                                label="Explore"
                                size="md"
                                bg="bg-gradient-to-r from-teal-600 to-emerald-600"
                                hoverBg="hover:from-teal-500 hover:to-emerald-500"
                                radius="rounded-full"
                            />

                        </Link>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div className='py-15 lg:py-20 border-b border-gray-300'>
                    <div className='flex flex-col justify-center items-center max-w-5xl mx-auto text-center'>
                        <h2 className='uppercase font-bold px-5'>Our Purpose</h2>
                        <p className="
  font-bold
  uppercase
  mt-6
  mb-1
  text-3xl
  sm:text-4xl
  lg:text-5xl
  px-5
">
                            Change what's possible, for everyone.
                        </p>
                        <AboutVideo />
                        <p
                            className="px-5
    mt-2 mb-4 lg:mt-0
    text-base
    sm:text-lg
    leading-relaxed
    font-light
    text-gray-800
  "
                        >
                            At M.A.H.Y. Khoory Group, our purpose is to deliver solutions that enrich lives while protecting the planet. We combine innovation, sustainability, and technology to create cost-effective products and services that empower communities, drive progress, and safeguard the environment for future generations.
                        </p>
                    </div>
                </div>
            </motion.div>
            <div className='py-16 lg:py-24 border-b border-gray-300'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl text-teal-600 font-bold uppercase px-5'>Our History</h2>
                        <p className="lg:text-lg mt-5 font-light px-5 mb-5">We're proud of our UAE heritage. From our beginnings in
                            1972 as a local port operator in Dubai to a global logistics provider with operations in
                            over 69 countries and across every continent.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <History />
                </motion.div>
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