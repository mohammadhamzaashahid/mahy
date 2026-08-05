import CompaniesSectors from "@/components/CompaniesSectors"
import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection"
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu"
import PumpingServiceCards from "@/components/Services/PumpingServiceCards"
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

export const metadata = {
  title: "Market Restaurant & Café",
  description:
    "Market Restaurant & Café offers dine-in, takeaway, delivery and catering services in a contemporary setting suited for private gatherings and corporate events.",
  alternates: { canonical: "/companies/details/market-restaurant" },
};

function MarketRestarauntPage() {
    const features = [
        {
            text: "Freshly prepared salads and starters",
            image: "/assets/companies/details/market-restaurant/salad_hpftaj.jpg",
        },
        {
            text: "Grilled meats and seafood dishes",
            image: "/assets/companies/details/market-restaurant/grills_pvtzgw.jpg",
        },
        {
            text: "Specialty brunch selections",
            image: "/assets/companies/details/market-restaurant/brunch_ogrd4c.jpg",
        },
        {
            text: "Desserts and café-style beverages",
            image: "/assets/companies/details/market-restaurant/dessert_daynah.jpg",
        },
        {
            text: "In addition to dine-in service, the restaurant provides takeaway, delivery, and catering services, and is well suited for private gatherings, corporate lunches, and small social events.",
            image: "/assets/companies/details/market-restaurant/delivery_yx0mar.jpg",
        }
    ];
    const adpmCardsData = [
        {
            text: "Guests of Pearl Marina Hotel Apartments",
            image: "/solar/solar-1.svg",
        },
        {
            text: "Local residents of Dubai Marina and JBR",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Business professionals and office workers in the area",
            image: "/solar/solar-2.svg",
        },
        {
            text: "Tourists seeking relaxed, quality dining options",
            image: "/solar/solar-1.svg",
        }
    ];
    const overview = [
        {
            heading: "Operations and Guest Experience",
            text: "Market Restaurant & Café places strong emphasis on service quality, consistency, and attention to detail. The dining space is designed to offer a contemporary and comfortable setting, encouraging repeat visits and a sense of community.",
            lastText: "Operational efficiency is supported through modern point-of-sale and reservation systems, enabling smooth order management and guest handling. Digital engagement through online platforms and social media helps maintain visibility and customer interaction."
        },
        {
            heading: "Technology and Innovation",
            text: "The restaurant utilizes modern hospitality technologies to enhance both front-of-house and back-of-house operations. These include:",
            bullets: [
                "Integrated POS and billing systems",
                "Digital reservation and order-management tools",
                "Online ordering and delivery platforms",
                "Contemporary kitchen equipment to ensure food safety and freshness"
            ],
            lastText: "These systems support service efficiency, operational control, and a seamless guest experience."
        },
        {
            heading: "Strategic Positioning and Partnerships",
            text: "Market Restaurant & Café works closely with Pearl Marina Hotel Apartments, offering dining options and packages for hotel guests, corporate clients, and events. The restaurant actively participates in local hospitality promotions and food-related initiatives to strengthen its presence within the Dubai Marina community.",
            lastText: "Where possible, the restaurant collaborates with local suppliers and partners to ensure freshness and support regional supply chains."
        },
        {
            heading: "Sustainability Practices",
            text: "Sustainability is integrated into daily operations. The restaurant focuses on:",
            bullets: [
                "Reducing food waste through careful menu planning",
                "Using seasonal ingredients when available",
                "Recycling glass, metal, and cardboard packaging",
                "Utilizing biodegradable disposables where feasible"
            ],
            lastText: "These practices support broader sustainability objectives within Dubai’s hospitality and food-service sector."
        },
        {
            heading: "Management and Team",
            text: "Market Restaurant & Café is managed by an experienced hospitality leadership team, including an F&B management function, head chef, and front-of-house supervisors.",
            lastText: "The team comprises trained culinary and service professionals who deliver consistent quality and embody the Group’s hospitality standards. Specific management names are maintained internally."
        },
        {
            heading: "Location and Accessibility",
            text: "Market Restaurant & Café is located at the ground level of Pearl Marina Hotel Apartments, along Al Marsa Street, Dubai Marina. The restaurant operates daily from early breakfast through dinner, serving both hotel guests and walk-in customers.",
            lastText: "Reservations, takeaway, and delivery services are available directly through the restaurant."
        },
    ];

    return (
        <main>
            <CompanyOverview
                video={"/assets/companies/details/market-restaurant/Video_Project_10_eosc43.mp4"}
                heading="Market Restaurant & Café"
                texts={[
                    "Market Restaurant & Café is a contemporary casual dining destination located in Dubai Marina, operating under the hospitality portfolio of the MAHY Khoory Group. Positioned as a modern neighborhood restaurant, the concept combines seasonally inspired cuisine with a relaxed and welcoming atmosphere. Situated adjacent to Pearl Marina Hotel Apartments, the restaurant serves both hotel guests and the wider public, offering a convenient and approachable dining experience within one of Dubai’s most vibrant residential and leisure districts.",
                    "The restaurant emphasizes quality ingredients, thoughtful preparation, and consistent service, reflecting the Group’s standards in hospitality operations."
                ]}
            />
            <KitchenMenu
                heading="Dining Concept and Offerings"
                text={"Market Restaurant & Café offers an all-day dining experience, serving breakfast, lunch, and dinner. The menu features a carefully curated selection of international and regional dishes, prepared fresh and designed to appeal to a broad audience. Key offerings include:"}
                items={features}
            />
            <PumpingServiceCards
                cards={adpmCardsData}
                heading="Target Market and Customer Segments"
                tag="[ RESTAURANT ]"
                text={"The restaurant caters to a diverse clientele, including:"}
                backgroundImage="/assets/companies/details/market-restaurant/albert-YYZU0Lo1uXE-unsplash_e8shgs.jpg"
                endText={"Its casual yet refined positioning makes it attractive to families, individuals, and groups looking for a comfortable dining environment without formality."}
            />
            {/* <CompanyTextOnBackground
                image="/assets/shared/commitment-to-growth_qhzgjt.jpg"
                align="left"
            /> */}
            <FeaturesEngineeringSection
                heading="Company Overview"
                items={overview}
                image="/assets/shared/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
            />
        </main>
    )
}

export default MarketRestarauntPage