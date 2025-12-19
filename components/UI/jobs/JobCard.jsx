import { HiLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

function JobCard({ job }) {
    return (
        <div className='md:flex gap-4 items-center justify-between border-b border-gray-200 pb-5'>
            <div>
                <p className='text-xl font-medium'>{job.name}</p>
                <div className="flex gap-3 items-center text-sm mt-1 text-gray-700">
                    <p>{job.category}</p>
                    •
                    <p>{job.type}</p>
                    <div className='flex items-center gap-1'><HiLocationMarker />{job.location}</div>
                </div>
            </div>
            <div className="mt-5 md:mt-0">
                <Link href={"/"}
                    className='bg-gray-100 rounded-md h-fit px-6 py-2 lg:px-7 lg:py-3'
                >Learn More</Link>
            </div>
        </div>
    )
}

export default JobCard