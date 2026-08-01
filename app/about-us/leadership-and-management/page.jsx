import GovernanceContent from "@/components/UI/about-us/leadership-and-management/GovernanceContent";
import GovernanceTabs from "@/components/UI/about-us/leadership-and-management/GovernanceTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Leadership & Management",
  description:
    "Learn how MAHY Khoory Group's leadership and management structure drives clear authority, accountability and governance across all Group companies.",
  alternates: { canonical: "/about-us/leadership-and-management" },
};

export default function GovernancePage() {
  return (
    <main className="bg-white">
      <SubPageHeading
        title="Leadership & Management"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="/assets/businessman-standing-front-large-glass-building-business-corporative-concept-generative-ai.jpg_f65dkk.jpg"
        align="center"
        fullHeight
      />
      <GovernanceTabs />
      <GovernanceContent />
    </main>
  );
}
