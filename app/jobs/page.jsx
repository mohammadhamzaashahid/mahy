import JobList from '@/components/UI/jobs/JobList'
import PageHeading from '@/components/UI/PageHeading'
import { getTranslations } from 'next-intl/server'
import React from 'react'

async function Jobs({ searchParams }) {
    const params = await searchParams;
    const t = await getTranslations("JobsPage");

    const formLabels = {
        title: t("FormTitle"),
        label1: t("Label1"),
        label2: t("Label2"),
        label3: t("Label3"),
        button1: t("Button1"),
        button2: t("Button2"),
        cta: t("Cta"),
    }

    return (
        <main>
            <PageHeading
                title={t("Heading")}
                description={t("SubHeading")}
                image={"https://res.cloudinary.com/db3fd1qah/image/upload/v1766132761/careers_tkbmhq.avif"}
            />
            <JobList params={params} formLabels={formLabels} />
        </main >
    )
}

export default Jobs