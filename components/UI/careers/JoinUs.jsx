import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'

function JoinUs() {
    return (
        <section className='h-screen w-screen relative'>
            <Image
                src={"/gallery/gallery-4.jpg"}
                alt='Join Us'
                fill
                style={{ objectFit: "cover" }}
            />
            <div className='absolute inset-0 h-full w-full text-center pt-35 px-10 bg-black/20'>
                <h1 className='text-white text-7xl font-bold'>Join Us</h1>
                <p className='text-gray-100 mt-2 mb-5'>Help accelerate the world's transition to sustainable energy</p>
                <Link href={"/jobs"}>
                    <PrimaryButton
                        label="Explore Jobs"
                        size="md"
                        radius="rounded-full"
                    />
                </Link>
            </div>
        </section>
    )
}

export default JoinUs