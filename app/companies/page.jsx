import Filters from '@/components/UI/companies/Filters';
import PageHeading from '@/components/UI/PageHeading';
import List from '@/components/UI/companies/List';
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
        image: "/companies/Grundfos.jpg",
        sector: "Technology",
        size: "201-500",
        location: "North America"
    },
    {
        name: "Health Plus",
        image: "/companies/oventop.jpeg",
        sector: "Healthcare",
        size: "51-200",
        location: "Europe"
    },
    {
        name: "Finance Gurus",
        image: "/companies/partners-ariston.jpg",
        sector: "Finance",
        size: "500+",
        location: "Asia"
    },
    {
        name: "EduWorld",
        image: "/companies/partners-gaia.jpg",
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
        <main className='bg-gray-50 pb-14'>
            <PageHeading title={"Our Portfolio"}
                description={"The Fund seeks to build a rich investment portfolio of companies across diverse sectors in UAE and beyond, in line with UAE Vision."}
                image={"/gallery/gallery-1.png"}
            />
            <div id='list' className='relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20'>
                <Filters filters={filters} search={search} />
                <div className="col-span-8">
                    <List companies={getCompanies()} />
                </div>
            </div>
        </main>
    )
}

export default Companies