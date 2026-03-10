import { getTranslations } from "next-intl/server";
import LogoMarquee from "../UI/LogoMarquee";
import partners from "@/constants/partners";
import AnimatedLines from "../UI/AnimatedLines";

export default async function PartnersSection() {
  const translations = await getTranslations('HomePage.Partners');

  return (
    <div className="max-w-7xl mx-auto px-5 py-24">
      <AnimatedLines heading={translations("Heading")} marginBottom="mb-5" />
      <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base font-medium text-center">{translations("Description")}</p>
      <LogoMarquee partners={partners} speed={40} />
    </div>
  );
}
