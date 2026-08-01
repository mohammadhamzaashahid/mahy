import CompaniesSectors from "@/components/CompaniesSectors";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Employee Benefits",
  description:
    "Learn about the employee benefits offered across MAHY Khoory Group's companies, supporting a stable, rewarding and long-term career environment.",
  alternates: { canonical: "/careers/employee-benefits" },
};

function EmployeeBenefitsPage() {
  return (
    <main>
      <SubPageHeading
        title={"Employee Benefits"}
        fullHeight
        image={
          "/assets/employee-benefits.jpg_czxz7n.jpg"
        }
      />
      <section className="max-w-7xl mx-auto px-5 py-8 md:py-12">
        <CompaniesSectors
          image={
            "/assets/young-smiling-professional-woman-having-coffee-break-her-full-working-day-she-holds-paper-cup-outdoors-near-business-building-while-relaxing-enjoying-her-beverage.jpg_pqypyo.jpg"
          }
          title={""}
          texts={[
            "At MAHY Khoory Group, we provide a structured and fair benefits framework designed to support employee well-being, stability, and professional growth. Compensation and benefits are aligned with market standards and fully compliant with UAE Labour Law and applicable regulations.",
            "Employees receive statutory entitlements including salary, annual leave, public holidays, medical insurance, and end-of-service benefits as per UAE law. Depending on the role and subsidiary, additional allowances or performance-based incentives may apply in accordance with internal policies.",
            "Beyond financial benefits, we offer a professional and stable work environment with clear structures, defined responsibilities, and opportunities for internal mobility and development. Our objective is to maintain fair, compliant, and competitive employment conditions that support long-term partnership and mutual growth.",
          ]}
        />
      </section>
    </main>
  );
}

export default EmployeeBenefitsPage;
