"use client"

import MahyLocationsMap from "@/components/Navigator/MahyLocationsMap";
import OperationsAndCapabilitiesOverview from "@/components/UI/companies/operations-and-capabilities/OperationsAndCapabilitiesOverview"
import SubPageHeading from "@/components/UI/SubPageHeading";
import { companyDetails } from "@/constants/contactDetailsCompanies";

const container = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
        delay: 0.9,
    },
};


//companies contact details

function locations() {
 
    return (
        <main>
            <SubPageHeading
                title={"Our Locations"}
                fullHeight
                description={"At MAHY Khoory Group, delivering reliable support and maintaining strong customer relationships is a core priority across all our sectors."}
                image={"/assets/shared/mahy-location-page.jpg_jdopju.jpg"}
            />

            <MahyLocationsMap/>
          
            <OperationsAndCapabilitiesOverview
                heading="All Companies Contact Details"
                items={companyDetails}
            />
        </main>

    )
}

export default locations