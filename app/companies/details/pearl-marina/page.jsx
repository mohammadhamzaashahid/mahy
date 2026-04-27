import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu"
import PumpingServiceCards from "@/components/Services/PumpingServiceCards"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import WhoWeAre from "@/components/UI/home/WhoWeAre"

function PearlMarinaPage() {
    const features = [
        {
            text: "Fully furnished apartments with equipped kitchens or kitchenettes",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104677/Testlinear_ikbc7c.png",
        },
        {
            text: "Spacious living and dining areas with private balconies",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104675/Union_Flute_scjkz4.png",
        },
        {
            text: "24-hour front desk and concierge services",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104677/Testlinear_ikbc7c.png",
        },
        {
            text: "Daily housekeeping and laundry support",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104675/Union_Flute_scjkz4.png",
        },
        {
            text: "On-site dining options",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777104677/Testlinear_ikbc7c.png",
        }
    ];
    const adpmCardsData = [
        {
            text: "Business executives and corporate travelers",
            image: "/solar/solar-1.svg",
        },
        {
            text: "Project teams and long-stay professionals",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Relocating families",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Leisure tourists seeking apartment-style accommodation",
            image: "/solar/solar-1.svg",
        }
    ];
    const overview = [
        {
            heading: "Technology and Guest Experience",
            text: "The hotel leverages modern hospitality technologies to enhance convenience, comfort, and security. These include:",
            bullets: [
                "Online booking and digital reservation platforms",
                "Smart televisions and key-card access systems",
                "Energy-efficient climate control",
                "24/7 security monitoring through CCTV and trained personnel",
            ],
            lastText: "Digital concierge and guest-service platforms further streamline communication and service requests, aligning the property with contemporary hospitality standards."
        },
        {
            heading: "Strategic Positioning and Partnerships",
            text: "As part of the MAHY Khoory Group, Pearl Marina Hotel Apartments benefits from cross-functional synergies across hospitality, logistics, and service operations. The property maintains partnerships with travel agencies, corporate accounts, and real estate networks to support consistent occupancy and long-term bookings.",
            lastText: "Ongoing refurbishment and enhancement initiatives ensure the property remains competitive. Recent upgrades include interior improvements and enhancements to wellness and leisure facilities."
        },
        {
            heading: "Sustainability and Responsible Operations",
            text: "Sustainability is integrated into daily operations at Pearl Marina Hotel Apartments. Initiatives include:",
            bullets: [
                "Energy-efficient lighting and climate systems",
                "Water-saving fixtures",
                "Waste segregation and recycling practices"
            ],
            lastText: "These efforts contribute to reducing the property’s environmental footprint while supporting Dubai’s broader sustainability objectives within the hospitality sector."
        },
        {
            heading: "Management and Team",
            text: "The hotel is managed by an experienced hospitality leadership team, including a General Manager and departmental heads overseeing front office operations, housekeeping, food and beverage, and guest services. The team comprises trained, multicultural hospitality professionals committed to delivering consistent service excellence and guest satisfaction.",
        }
    ];
    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777151259/ChatGPT_Image_Feb_5_2026_11_42_00_AM_pglvjk.png"
                heading="Market Restaurant & Café"
                texts={[
                    "Pearl Marina Hotel Apartments is a boutique hospitality property located in the heart of Dubai Marina, offering upscale, fully furnished serviced apartments designed for both short- and long-term stays. Operated as part of the MAHY Khoory Group’s hospitality portfolio, the property combines contemporary elegance with the dynamic lifestyle of Dubai’s Marina waterfront.",
                    "The hotel comprises 85 serviced apartments, ranging from studios to spacious three-bedroom units, housed within a modern high-rise development. Each apartment is thoughtfully designed to provide a home-like environment complemented by premium amenities and panoramic views of the Marina and surrounding skyline."
                ]}
            />
            <KitchenMenu
                heading="Accommodation and Guest Services"
                text={"Pearl Marina Hotel Apartments delivers a comprehensive serviced-apartment experience, combining hotel-level service with residential comfort. Core offerings include:"}
                text2={"Guests also benefit from a wide range of leisure and wellness facilities, including a fitness center, sauna and steam rooms, rooftop swimming pool, children’s play area, and complimentary high-speed Wi-Fi throughout the property."}
                items={features}
            />
            <WhoWeAre
                heading="Business and Corporate Facilities"
                text="The property is well suited to business travelers and corporate clients, offering dedicated business services, meeting rooms, and conference facilities. These amenities support executives, project teams, and long-stay corporate guests requiring a professional yet comfortable accommodation environment."
                showButton={false}
                invert={false}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777146022/image002_lmmmfu.png"
                imageAlt="Business and Corporate Facilities"
            />
            <PumpingServiceCards
                cards={adpmCardsData}
                heading="Target Market and Guest Segments"
                tag="[ PEARL MARINA ]"
                text={"Pearl Marina Hotel Apartments serves a diverse clientele, including:"}
                backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg"
                endText={"Its strategic location near Dubai Internet City, Dubai Media City, major commercial districts, retail destinations, beaches, and leisure attractions makes it highly attractive to both regional and international guests."}
            />
            <FeaturesEngineeringSection
                heading="Company Overview"
                items={overview}
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
            />
        </main>
    )
}

export default PearlMarinaPage