import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";

export const metadata = {
  title: "Culture & Values",
  description:
    "Discover the collaborative, cross-functional culture and values that shape how MAHY Khoory Group's 4,200+ employees work together across sectors and disciplines.",
  alternates: { canonical: "/careers/culture-and-values" },
};

function CultureAndValuesPage() {
  return (
    <main>
      <SubPageHeading
        fullHeight
        title={"Our Culture & Values"}
        image={
          "/assets/careers/culture-and-values/startup-diverse-international-businesspeople-shaking-hands.jpg_ibbnzw.jpg"
        }
        description={
          "At MAHY Khoory Group, our culture is built on a strong foundation of integrity, accountability, and operational discipline. As a diversified holding organization operating across 25 companies and multiple industries, we maintain a unified corporate culture that ensures consistency, professionalism, and high performance across all business units."
        }
      />
      <div className="my-8">
        <SolarPanelQuoteGrid
          image="/assets/shared/businessman-summer-city-with-three-women.jpg_wriu63.jpg"
          text="Integrity is at the core of everything we do. We uphold transparency in our operations, ethical conduct in our decision-making, and responsibility in our commitments to clients, partners, and employees. We believe that long-term success is achieved through trust, compliance, and adherence to structured governance frameworks."
          text2="Accountability is embedded in our daily operations. Every role within the organization carries clearly defined responsibilities and measurable performance expectations. We promote ownership of tasks, proactive problem-solving, and results-driven execution at every level of the group."
          items={[
            "Strong culture of collaboration across sectors and disciplines",
            "Cross-functional coordination and active knowledge sharing",
            "Unified group-wide objectives instead of isolated operations",
            "Commitment to continuous improvement",
            "Focus on digital advancement and system integration",
            "Structured processes and performance monitoring",
            "Enhanced efficiency and reduced operational risk",
            "Stronger internal controls and operational stability",
            "Innovation within a disciplined framework to adapt to market changes",
          ]}
          quoteText="Above all, our culture reflects professionalism, respect, and a shared commitment to excellence. By aligning our values with our strategic goals, MAHY Khoory Group fosters an environment where individuals can contribute meaningfully, grow responsibly, and support the long-term success of the organization."
        />
      </div>
    </main>
  );
}

export default CultureAndValuesPage;
