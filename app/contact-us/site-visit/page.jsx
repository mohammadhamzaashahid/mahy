import SiteVisitRequestForm from "@/components/UI/form/SiteVisitRequestForm"

export const metadata = {
    title: "Request a Site Visit",
    description:
        "Request a site visit from MAHY Khoory Group's technical team to assess your project or facility requirements.",
    alternates: { canonical: "/contact-us/site-visit" },
};

async function SiteVisitRequestPage() {

    return (
        <main className="max-w-7xl mx-auto px-5 py-25">
            <SiteVisitRequestForm />
        </main >
    )
}

export default SiteVisitRequestPage