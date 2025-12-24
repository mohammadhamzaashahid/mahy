import Breadcrumb from '@/components/UI/Breadcrumb';
import Filters from '@/components/UI/companies/Filters';
import PageHeading from '@/components/UI/PageHeading';
import { getPartnerNames } from '@/constants/partners';
import shopItems from '@/constants/shopItems';
import { getTranslations } from 'next-intl/server';
import React from 'react'

async function Shop({ searchParams }) {
    const params = await searchParams;
    const search = params.search;
    const translations = await getTranslations('ShopPage');

    const filters = [
        {
            title: "Partners",
            key: "partners",
            options: getPartnerNames()
        }
    ];

    const getItems = () => {
        const partnerIds =
            params.partners?.split(",").map(Number) || [];

        return shopItems.filter(item =>
            !partnerIds.length || partnerIds.includes(item.partnerId)
        );
    };


    return (
        <main className='bg-gray-50 pb-14'>
            <PageHeading title={translations("Heading")}
                description={translations("Description")}
                image={"/gallery/gallery-2.jpg"}
            />
            <Breadcrumb />
            <div dir='ltr' id='list' className='relative max-w-7xl mx-auto lg:grid gap-5 px-3 grid-cols-1 lg:grid-cols-10 pt-20'>
                <Filters filters={filters} search={search} />
                <div className="col-span-8">
                    {getItems().map((item, i) => (
                        <div key={i}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Shop