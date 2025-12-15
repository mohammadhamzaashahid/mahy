import CompaniesGrid from "@/components/Layout/Industries/CompaniesGrid";
import Navbar from "@/components/Layout/Navbar";
import PageHeading from "@/components/UI/PageHeading";

export default function CompaniesPage() {
    return (
        <>
            <PageHeading
                title="Our Business Groups"
                description="The Fund seeks to build a rich investment portfolio of companies across diverse sectors in UAE and beyond, in line with UAE 2030."
                imageSrc="/gallery/gallery-2.png"
                bgColor="#0E2F2A"
            />

            <CompaniesGrid/>
        </>
    );
}
