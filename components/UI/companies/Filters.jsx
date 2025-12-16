"use client"

import React, { Fragment } from 'react'
import { HiSearch } from 'react-icons/hi'
import CheckFilters from './CheckFilters'
import ResetButton from './ResetButton'
import { usePathname, useRouter } from 'next/navigation'

function Filters({ filters, search }) {

    const [searchValue, setSearchValue] = React.useState(search || "");
    const router = useRouter();
    const pathname = usePathname();
    const onSubmit = (e) => {
        e.preventDefault();
        router.replace(`${pathname}?search=${searchValue}#list`);
        setSearchValue("");
    }

    return (
        <Fragment>
            <div className="relative mb-7 group">
                <form onSubmit={onSubmit}>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} name='search' className="border border-gray-300 focus:outline-teal-600 rounded-md py-2 px-4 w-full text-sm pr-8 relative z-10" placeholder="" />
                    <div className='absolute inset-0 flex justify-end items-center right-2'>
                        <HiSearch className='text-teal-600' />
                    </div>
                </form>
            </div>
            <div className="flex justify-between flex-wrap items-center gap-4 mb-6">
                <h2 className="font-medium">Filters</h2>
                <ResetButton />
            </div>
            {filters.map((filter, index) => (
                <CheckFilters key={index} searchKey={filter.key} label={filter.title} list={filter.options} />
            ))}
        </Fragment>
    )
}

export default Filters