import ServiceRequest from '@/components/UI/form/ServiceRequest'
import React from 'react'

export const metadata = {
    title: "Request a Service",
    description:
        "Request a service from MAHY Khoory Group's pumping, HVAC, engineering or maintenance teams across the UAE.",
    alternates: { canonical: "/contact-us/request-service" },
};

function RequestServicePage() {
    return (
        <main>
            <ServiceRequest />
        </main>
    )
}

export default RequestServicePage