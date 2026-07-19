"use client";

import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid";
import OperationsAndCapabilitiesOverview from "@/components/UI/companies/operations-and-capabilities/OperationsAndCapabilitiesOverview";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { companyDetails } from "@/constants/contactDetailsCompanies";

//companies contact details
function CustomerSupportOverviewPage() {
  return (
    <main>
      <SubPageHeading
        fullHeight
        title={"Customer Support Overview"}
        description={
          "At MAHY Khoory Group, delivering reliable support and maintaining strong customer relationships is a core priority across all our sectors."
        }
        image={
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776881337/support-contact-us-customer-hotline-business-technology-service-concept.jpg_jtvugs.jpg"
        }
      />

      <SolarPanelImageGrid
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777016541/laptop-meeting-business-people-with-cooperation-group-project-proposal-sharing-ideas-office-corporate-employees-computer-brainstorming-feedback-report-online-marketing_zsldhp.jpg"
        text="We make it simple for you to connect with us and get the support you need without delays or unnecessary complications. Whether you have a question, require technical assistance, or need service support, our team is always ready to respond promptly and professionally."
        items={[
          {
            title: "You can reach us conveniently through our website or by contacting us directly Via: ",
            textItems: [
              "📧 Email: info@mahykhoory.com",
              "📞 Phone: +971 4 6067300",
            ],
          },
          {
            title: "We are committed to providing support",
            text: "No matter how you choose to get in touch, you can expect a consistent standard of service built on responsiveness, reliability, and clear communication. Our priority is to deliver timely and effective support that not only meets your needs but consistently exceeds your expectations",
          },
          {
            title: "Our goal is clear",
            text: "At the heart of our approach is a clear goal: to build long-term relationships with our customers and partners by ensuring that every interaction leaves you feeling supported, confident, and valued.",
          },
        ]}
      />
      <OperationsAndCapabilitiesOverview
        heading="All Companies Contact Details"
        items={companyDetails}
      />
    </main>
  );
}

export default CustomerSupportOverviewPage;
