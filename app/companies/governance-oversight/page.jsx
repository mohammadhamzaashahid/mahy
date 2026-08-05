import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"
import SubPageHeading from "@/components/UI/SubPageHeading"

export const metadata = {
  title: "Governance & Oversight",
  description:
    "Learn how MAHY Khoory Group's governance and oversight structure ensures transparency, accountability and effective decision-making across all Group companies.",
  alternates: { canonical: "/companies/governance-oversight" },
};

function GovernanceOversightPage() {
    return (
        <main>
            <SubPageHeading
                title={"Governance & Oversight"}
                fullHeight
                image={"/assets/shared/governance-oversight_1_kaybzq.jpg"}
            />
            <CompanyTextOnBackground />
        </main>
    )
}

export default GovernanceOversightPage