import Filters from '@/components/UI/companies/Filters';
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
    const getCompanies = () => {
        const sectors = params.sector?.split(",") || [];
        const locations = params.location?.split(",") || [];
        const sizes = params.size?.split(",") || [];

        console.log(sectors);


        return companies.filter((company) => {
            if (sectors.length && !sectors.includes(company.sector)) return false;
            if (locations.length && !locations.includes(company.location)) return false;
            if (sizes.length && !sizes.includes(company.size)) return false;
            return true;
        });
    };

    return (
        <main className='max-w-7xl mx-auto px-4 pt-22 py-8'>
            <div className='md:grid gap-2 grid-cols-1 lg:grid-cols-10'>
                <div className='col-span-2 px-4'>
                    <Filters filters={filters} />
                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getCompanies().map((company, index) => (
                            <div key={index} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-200 cursor-pointer">
                                <div>
                                    <Image src={company.image} alt={company.name} width={400} height={250} className="w-full h-48 object-cover" />
                                </div>
                                <div className='py-4 px-5'>
                                    <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
                                    <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Sector:</span> {company.sector}</p>
                                    <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Size:</span> {company.size}</p>
                                    <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> {company.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Companies