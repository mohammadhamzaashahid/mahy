import { getTranslations } from "next-intl/server";
import LogoMarquee from "../UI/LogoMarquee";
import partners from "@/constants/partners";

export default async function PartnersSection() {
  const translations = await getTranslations('HomePage.Partners');

  return (
    <div className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          {translations("Heading")}
        </h2>
        <div className="w-24 md:w-32 h-[3px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto my-4 rounded-full" />
        <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base font-medium">
          {translations("Description")}
        </p>
      </div>
      <LogoMarquee partners={partners} speed={40} />
    </div>
  );
}
