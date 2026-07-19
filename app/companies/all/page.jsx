import ScrollTimeline from "@/components/ScrollTimeline";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { allCompanies } from "@/constants/allCompaniesData";
import React from "react";

function AllCompaniesPage() {
   
    return (
        <main>
            <SubPageHeading
                fullHeight
                scrollReadText="View All Companies"
                title={"All Companies"}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776880631/back-view-thoughtful-businessman-looking-through-window-big-modern-cityplanning-future-project-concept-early-morning-scene.jpg_ayuw8c.jpg"}
            />
            <ScrollTimeline
                items={allCompanies}
            />
        </main>
    );
}

export default AllCompaniesPage;
