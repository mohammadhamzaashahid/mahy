import Filters from '@/components/UI/companies/Filters';
import Hero from '@/components/UI/companies/Hero';
import List from '@/components/UI/companies/List';
import Image from 'next/image';
import React from 'react'

const filters = [
    {
        title: "Sectors",
        key: "sector",
        options: ["Technology", "Healthcare", "Finance", "Education", "Retail"]
    },
    {
        title: "Company Size",
        key: "size",
        options: ["1-10", "11-50", "51-200", "201-500", "500+"]
    },
    {
        title: "Location",
        key: "location",
        options: ["North America", "Europe", "Asia", "Australia", "Africa"]
    }
];

const companies = [
    {
        name: "Tech Innovators",
        image: "/gallery/gallery-1.png",
        sector: "Technology",
        size: "201-500",
        location: "North America"
    },
    {
        name: "Health Plus",
        image: "/gallery/gallery-2.png",
        sector: "Healthcare",
        size: "51-200",
        location: "Europe"
    },
    {
        name: "Finance Gurus",
        image: "/gallery/gallery-3.png",
        sector: "Finance",
        size: "500+",
        location: "Asia"
    },
    {
        name: "EduWorld",
        image: "/gallery/gallery-4.png",
        sector: "Education",
        size: "11-50",
        location: "Australia"
    }
]

async function Companies({ searchParams }) {
    const params = await searchParams;
    const search = params.search;

    const getCompanies = () => {
        let filteredCompanies = search ? companies.filter((company) =>
            company.name.toLowerCase().includes(search.toLowerCase())
        ) : companies;

        const sectorIdx = params.sector?.split(",").map(Number) || [];
        const locationIdx = params.location?.split(",").map(Number) || [];
        const sizeIdx = params.size?.split(",").map(Number) || [];

        const sectorValues = sectorIdx.map((i) => filters[0].options[i]);
        const locationValues = locationIdx.map((i) => filters[2].options[i]);
        const sizeValues = sizeIdx.map((i) => filters[1].options[i]);

        return filteredCompanies.filter((company) => {
            if (sectorValues.length && !sectorValues.includes(company.sector)) return false;
            if (locationValues.length && !locationValues.includes(company.location)) return false;
            if (sizeValues.length && !sizeValues.includes(company.size)) return false;
            return true;
        });
    };

    return (
        <main className='bg-gray-200 pb-14'>
            <Hero />
            <div id='list' className='max-w-7xl mx-auto md:grid gap-5 grid-cols-1 lg:grid-cols-10 pt-20'>
                <div className='col-span-2 px-4 py-7 rounded-3xl bg-gray-50'>
                    <Filters filters={filters} search={search} />
                </div>
                <div className="col-span-8">
                    <List companies={getCompanies()} />
                </div>
            </div>
        </main>
    )
}

export default Companies