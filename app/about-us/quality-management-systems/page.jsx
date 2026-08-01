import Qms from '@/components/UI/about-us/Qms'
import SubPageHeading from '@/components/UI/SubPageHeading'

export const metadata = {
    title: "Quality Management Systems",
    description:
        "MAHY Khoory Group follows a structured Quality Management System, continuously monitored and improved to meet regulatory requirements and ensure reliability, efficiency and customer satisfaction.",
    alternates: { canonical: "/about-us/quality-management-systems" },
};

function QualityManagementSystemsPage() {
    return (
        <main>
            <SubPageHeading
            fullHeight
                title={"Quality Management Systems"}
                description={"The company follows a structured Quality Management System to ensure consistent product and service excellence. Processes are continuously monitored, reviewed, and improved to meet regulatory and customer requirements. Quality standards are embedded across operations to drive reliability, efficiency, and customer satisfaction."}
                image={"/assets/quality-management-systems_yyivys.jpg"}
            />
            <Qms />
        </main>
    )
}

export default QualityManagementSystemsPage