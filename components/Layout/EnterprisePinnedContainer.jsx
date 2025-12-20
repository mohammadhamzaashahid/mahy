import { getTranslations } from "next-intl/server";
import EnterprisePinnedSection from "./EnterprisePinnedSection"

async function EnterprisePinnedContainer() {
    const translations = await getTranslations('HomePage.EnterpriseSections');

    const sections = [
        {
            title: translations("Section1Title"),
            subtitle: translations("Section1Subtitle"),
            bullets: [translations("Section1Bullet1"), translations("Section1Bullet2")],
            image: "/processes/UAE.avif",
        },
        {
            title: translations("Section2Title"),
            subtitle: translations("Section2Subtitle"),
            bullets: [translations("Section2Bullet1"), translations("Section2Bullet2")],
            image: "/processes/manufacturer.avif",
        },
        {
            title: translations("Section3Title"),
            subtitle: translations("Section3Subtitle"),
            bullets: [translations("Section3Bullet1"), translations("Section3Bullet2")],
            image: "/processes/customer-service.avif",
        },
    ];

    return (
        <EnterprisePinnedSection sections={sections} />
    )
}

export default EnterprisePinnedContainer