import PageHeading from '@/components/UI/PageHeading';
import React from 'react'
import Breadcrumb from '@/components/UI/Breadcrumb';

async function About() {

    return (
        <main className='bg-gray-50 pb-14'>
            <PageHeading title={"About Us"}
                description={"The M.A.H.Y. Khoory Group is among the most trusted and recognized names in the United Arab Emirates. A leader in the regional market, we at the M.A.H.Y. Khoory Group are a diverse group of companies and business units that bring world-class technological products and services to our clients."}
                image={"/gallery/MAHYABOUT.jpg"}
            />
            <Breadcrumb />
        </main>
    )
}

export default About