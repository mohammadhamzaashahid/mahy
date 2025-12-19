import Filters from '../companies/Filters'
import JobCard from './JobCard';

function JobList({ params }) {
    const search = params.search;
    const filters = [
        {
            title: "Category",
            key: "category",
            options: ["Technology", "Healthcare", "Finance", "Education", "Retail"]
        },
        {
            title: "Job Type",
            key: "type",
            options: ["Full-Time", "Part-Time"]
        },
        {
            title: "Location",
            key: "location",
            options: ["Dubai", "Abu Dhabi"]
        },
    ];

    const jobs = [
        {
            name: "Frontend Developer",
            category: "Technology",
            type: "Full-Time",
            location: "Dubai"
        },
        {
            name: "Healthcare Data Analyst",
            category: "Healthcare",
            type: "Full-Time",
            location: "Abu Dhabi"
        },
        {
            name: "Financial Consultant",
            category: "Finance",
            type: "Part-Time",
            location: "Dubai"
        },
        {
            name: "Academic Program Coordinator",
            category: "Education",
            type: "Full-Time",
            location: "Abu Dhabi"
        },
        {
            name: "Retail Operations Manager",
            category: "Retail",
            type: "Part-Time",
            location: "Dubai"
        },
    ];
    const getJobs = () => {
        let filteredJobs = search
            ? jobs.filter((job) =>
                job.name.toLowerCase().includes(search.toLowerCase())
            )
            : jobs;

        const categoryIdx = params.category?.split(",").map(Number) || [];
        const typeIdx = params.type?.split(",").map(Number) || [];
        const locationIdx = params.location?.split(",").map(Number) || [];

        const categoryValues = categoryIdx.map((i) => filters[0].options[i]);
        const typeValues = typeIdx.map((i) => filters[1].options[i]);
        const locationValues = locationIdx.map((i) => filters[2].options[i]);

        return filteredJobs.filter((job) => {
            if (categoryValues.length && !categoryValues.includes(job.category)) return false;
            if (typeValues.length && !typeValues.includes(job.type)) return false;
            if (locationValues.length && !locationValues.includes(job.location)) return false;
            return true;
        });
    };

    return (
        <section id='list' className='grid gap-10 md:grid-cols-10 max-w-7xl mx-auto px-5 py-20'>
            <div className="col-span-3">
                <Filters filters={filters} search={search} />
            </div>
            <div className="col-span-7 space-y-5 mt-5">
                {getJobs().map((job, i) => (
                    <JobCard key={i} job={job} />
                ))}
            </div>
        </section>
    )
}

export default JobList