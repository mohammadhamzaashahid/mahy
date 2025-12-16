"use client"

import React, { Fragment } from 'react'
import { HiSearch } from 'react-icons/hi'
import CheckFilters from './CheckFilters'
import ResetButton from './ResetButton'

function Filters({ filters }) {
    return (
        <Fragment>
            <div className="relative mb-4 group">
                <input className="border border-gray-300 focus:outline-teal-600 rounded-md py-2 px-4 w-full text-sm pr-8 relative z-10" placeholder="" />
                <div className='absolute inset-0 flex justify-end items-center right-2'>
                    <HiSearch className='text-teal-600' />
                </div>
            </div>
            <div className="flex justify-between flex-wrap items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold">Filters</h2>
                <ResetButton />
            </div>
            {filters.map((filter, index) => (
                <CheckFilters key={index} searchKey={filter.key} label={filter.title} list={filter.options} />
            ))}
        </Fragment>
    )
}

export default Filters