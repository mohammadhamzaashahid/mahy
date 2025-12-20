import { getTranslations } from "next-intl/server";
import BusinessSteps from "./BusinessSteps"

async function BusinessStepsContainer() {
    const translations = await getTranslations('HomePage.BusinessSteps');

    const items = {
        heading: translations("Heading"),
        text: translations("Text"),
        button: translations("Button"),
    }

    const steps = [
        { id: 1, title: translations("Step1Title"), description: translations("Step1Description"), icon: '/icons/step1.png' },
        { id: 2, title: translations("Step2Title"), description: translations("Step2Description"), icon: '/icons/step1.png' },
        { id: 3, title: translations("Step3Title"), description: translations("Step3Description"), icon: '/icons/step1.png' },
    ]

    return (
        <BusinessSteps items={items} steps={steps} />
    )
}

export default BusinessStepsContainer