import CompaniesSectors from "@/components/CompaniesSectors";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getCompaniesBySector } from "@/constants/companyGroups";

export const metadata = {
  title: "Food & Beverage",
  description:
    "Explore MAHY Khoory Group's food & beverage and hospitality operations, including restaurant, café and dining services across the UAE.",
  alternates: { canonical: "/companies/food-and-beverage" },
};

function HospitalityPage() {
  const companies = getCompaniesBySector("food-and-beverage");

  return (
    <main>
      <SubPageHeading
        title="Hospitality"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="/assets/companies/food-and-beverage/receptionists-elegant-suits-work-hours.jpg_pboawv.jpg"
        align="center"
        fullHeight
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
        image2={"/assets/companies/food-and-beverage/check-reception-mature-man-with-luggage-hotel-business-meeting-hospitality-travel-service-concierge-woman-person-with-suitcase-welcome-vacation-sales-convention.jpg_t05o9z.jpg"}
          image={
            "/assets/companies/food-and-beverage/business-partners.jpg_pubbpk.jpg"
          }
          title={"Hospitality"}
          texts={[
            "This sector operates serviced accommodation along with casual dining and food-service concepts, delivering a complete hospitality experience.",
            "The Hospitality & Food & Beverage sector provides high-quality serviced hotel apartments for business and leisure travellers, combining hotel services with residential comfort in strategic urban locations. Alongside accommodation, the sector offers professionally managed restaurant and cafe operations, delivering quality dining experiences to both residents and the wider community.",
            "By integrating accommodation and dining under one sector, it enhances guest convenience, service consistency, and overall customer experience, while maintaining strong operational standards across both hospitality and food-service offerings.",
          ]}
        />
      </section>
      <GroupCompaniesGrid
        companies={companies}
        title="Companies in This Sector"
        description="Businesses operating within this business sector of the Group."
      />
    </main>
  );
}

export default HospitalityPage;
