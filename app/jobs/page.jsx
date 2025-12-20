import JobList from '@/components/UI/jobs/JobList'
import JobModal from '@/components/UI/jobs/JobModal';
import PageHeading from '@/components/UI/PageHeading'
import React from 'react'

async function Jobs({ searchParams }) {
    const heading = {
        title: "Explore Jobs",
        description: "Join a team driven by innovation, collaboration, and impact. Build your career while shaping meaningful solutions and growing with us.",
        image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1766132761/careers_tkbmhq.avif"
    }
    const params = await searchParams;

    return (
        <main>
            <PageHeading
                title={heading.title}
                description={heading.description}
                image={heading.image}
            />
            <JobList params={params} />
        </main >
    )
}

export default Jobs