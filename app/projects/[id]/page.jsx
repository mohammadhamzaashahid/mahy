import ValuesSection from "@/components/UI/about-us/ValuesSection"
import Breadcrumb from "@/components/UI/Breadcrumb";
import { getProject } from "@/constants/projects";
import { getLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = getProject(id);
    if (!project?.name) return {};

    const description = project.text
        ? project.text.length > 200
            ? `${project.text.slice(0, 197)}...`
            : project.text
        : `${project.name} — a ${project.scale ? project.scale.toLowerCase() + " " : ""}${project.sector ? project.sector.toLowerCase() + " " : ""}project delivered by MAHY Khoory Group${project.location ? " in " + project.location : ""}.`;

    return {
        title: project.name,
        description,
        alternates: { canonical: `/projects/${id}` },
        openGraph: {
            title: project.name,
            description,
            url: `/projects/${id}`,
            images: project.image ? [{ url: project.image }] : undefined,
        },
    };
}

async function ProjectDetailPage({ params }) {
    const { id } = await params;
    const locale = await getLocale();
    const project = getProject(id);

    return (
        <main className="pb-8 md:pb-14 pt-16 max-w-350 mx-auto px-4">
            <Breadcrumb segments={[{ label: "Projects", href: "/projects" }, { label: project.name }]} locale={locale} maxWidth={false} />
            <ValuesSection
                title={project.name}
                imageSrc={project.image}
                imageAlt={project.name}
                description={project.text}
                involvement={project.involvement}
                involvement2={project.involvement2}
                contribution={project.contribution}
                items={project.items}
                contribution2={project.contribution2}
                impact={project.impact}
                impact2={project.impact2}
                width=""
                gap={"gap-5 lg:gap-8 lg:grid-cols-5"}
                h1={true}
                col1={"lg:col-span-3"}
                col2={"lg:col-span-2"}
                padding=""
                className="mt-4"
                imageFirstInMobile={true}
            />
        </main>
    )
}

export default ProjectDetailPage