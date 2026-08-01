import ScrollTimeline from "@/components/ScrollTimeline";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { allCompanies } from "@/constants/allCompaniesData";
import React from "react";

export const metadata = {
  title: "All Companies",
  description:
    "Browse the complete list of MAHY Khoory Group's 25 operating companies and business divisions across the UAE and the wider region.",
  alternates: { canonical: "/companies/all" },
};

function AllCompaniesPage() {
   
    return (
        <main>
            <SubPageHeading
                fullHeight
                scrollReadText="View All Companies"
                title={"All Companies"}
                image={"/assets/back-view-thoughtful-businessman-looking-through-window-big-modern-cityplanning-future-project-concept-early-morning-scene.jpg_ayuw8c.jpg"}
            />
            <ScrollTimeline
                items={allCompanies}
            />
        </main>
    );
}

export default AllCompaniesPage;
