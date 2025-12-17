import PageHeading from '@/components/UI/PageHeading';
import React from 'react'
import Breadcrumb from '@/components/UI/Breadcrumb';
import PrimaryButton from '@/components/UI/PrimaryButton';
import Link from 'next/link';
import AboutVideo from '@/components/UI/about-us/AboutVideo';
import History from '@/components/UI/about-us/History';

async function About() {

    return (
        <main className='bg-gray-50 pb-14'>
            <PageHeading title={"About Us"}
                description={"The M.A.H.Y. Khoory Group is among the most trusted and recognized names in the United Arab Emirates. A leader in the regional market, we at the M.A.H.Y. Khoory Group are a diverse group of companies and business units that bring world-class technological products and services to our clients."}
                image={"/gallery/MAHYABOUT.jpg"}
            />
            <Breadcrumb />
            <div className='py-30 border-b border-gray-300'>
                <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
                    <h2 className='uppercase  font-bold'>Mission Statement</h2>
                    <p className='text-teal-600 text-6xl font-bold uppercase mt-6 mb-10'>We make Trade Flow</p>
                    <p className='text-lg'>To drive global trade forward through sustainable, innovative,
                        and inclusive logistics solutions that create value for all our stakeholders, now and for the future.</p>
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
            <div className='py-30 border-b border-gray-300'>
                <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
                    <h2 className='uppercase font-bold'>Our Purpose</h2>
                    <p className='text-6xl font-bold uppercase mt-6 mb-10'>Change what's possible, for everyone.</p>
                    <AboutVideo />
                    <p className="text-lg mt-8 font-light">Our purpose is to make trade flow and change what's possible for everyone.
                        We aim to achieve this with fast, sustainable movement of products through a single platform for trade.
                        This is our north star. It guides every decision we make and allows us to make a meaningful difference to the world.
                        Whatever we do, wherever we do it, it all leads here.</p>
                </div>
            </div>
            <div className='py-30 border-b border-gray-300'>
                <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
                    <h2 className='text-6xl text-teal-600 font-bold uppercase'>Our History</h2>
                    <p className="text-lg mt-8 font-light">We're proud of our UAE heritage. From our beginnings in
                        1972 as a local port operator in Dubai to a global logistics provider with operations in
                        over 69 countries and across every continent.</p>
                </div>
                <History />
            </div>
        </main>
    )
}

export default About