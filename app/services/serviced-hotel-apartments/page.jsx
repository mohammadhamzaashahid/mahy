import CompaniesSectors from "@/components/CompaniesSectors";
import ServicedHotelApartments from "@/components/Services/ServicedHotelApartments";
import TrustedBusinessAdvisor from "@/components/Services/TrustedAdvisorTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

function ServicedHotelApartmentsPage() {
  const services = [
    {
      label: "Guest Amenities",
      text: "The property features a range of lifestyle and recreational facilities designed to enhance every guest’s stay:",
      bullets: [
        "Outdoor swimming pool with sun terrace",
        "Jacuzzi and relaxation lounges",
        "Fully equipped fitness center",
        "Secure indoor parking",
        "Business facilities and meeting spaces",
      ],
      endText:
        "These amenities support both leisure and productivity, making the property suitable for all types of travellers.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776934082/medium-shot-woman-working-luxury-restaurant_fjxhja.jpg",
    },
    {
      label: "Dining & Hospitality Services",
      text: "Guests can enjoy a variety of on-site dining options, including:",
      bullets: [
        "International cuisine served at the in-house restaurant",
        "Room service for added convenience",
        "Breakfast offerings",
        "Café and casual dining areas",
      ],
      endText:
        "The dining experience is designed to cater to diverse tastes and daily lifestyle needs.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776934183/elegant-shot-hotel-receptionist-handing-key-card-minimalist-setting_yzuhfm.jpg",
    },
    {
      label: "Support & Concierge Services",
      text: "A dedicated hospitality team ensures seamless guest support throughout the stay:",
      bullets: [
        "24/7 front desk and concierge assistance",
        "Airport transfer arrangements (upon request)",
        "Laundry and dry-cleaning services",
        "Travel, tour, and excursion bookings",
        "Transportation assistance",
        "On-site security and maintenance support",
      ],
      endText:
        "These services guarantee comfort, safety, and an elevated guest experience.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776934014/walking-business-happy-woman-with-suitcase-city-travel-commute-journey-hotel-professional-corporate-person-with-luggage-work-trip-convention-smile-with-drink-outdoor_f0a3p2.jpg",
    },
    {
      label: "Prime Dubai Marina Location",
      text: "Situated at one of Dubai’s most vibrant waterfront destinations, the property offers walking-distance access to:",
      bullets: [
        "Marina Walk",
        "Jumeirah Beach",
        "Dubai Marina Mall",
        "Metro & Tram Stations",
        "Restaurants, cafés, and retail outlets",
        "Waterfront leisure attractions",
      ],
      endText:
        "The location provides exceptional connectivity for both business and leisure activities.",
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776934241/full-shot-people-working-laptop_lv2ulb.jpg",
    },
    {
      label: "Suitable For",
      text: "These serviced hotel apartments are the ideal choice for:",
      bullets: [
        "Holidaymakers",
        "Long-stay residents",
        "Business travelers",
        "Corporate bookings",
        "Families seeking spacious, fully equipped accommodation",
      ],
      image:
        "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776934007/spacious-hotel-lobby-filled-with-numerous-chairs-elegant-lamps-ideal-use-hospitality-industry-promotions-interior-design-websites_unkti2.jpg",
    },
  ];
  return (
    <main>
      <SubPageHeading
        fullHeight
        title={"Serviced Hotel Apartments "}
        image={
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776934007/spacious-hotel-lobby-filled-with-numerous-chairs-elegant-lamps-ideal-use-hospitality-industry-promotions-interior-design-websites_unkti2.jpg"
        }
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={
            "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776934241/full-shot-people-working-laptop_lv2ulb.jpg"
          }
          title={"Accommodation Options"}
          texts={[
            "Guests can choose from a wide selection of fully furnished apartments designed to offer comfort, flexibility, and everyday convenience. The available options include studio apartments, one bedroom, two bedroom, and three bedroom units, each thoughtfully planned to suit different lifestyles and accommodation needs.",
          ]}
          companiesHeading={false}
          items={[
            "Studio apartments",
            "One bedroom apartments",
            "Two bedroom apartments",
            "Three bedroom apartments",
          ]}
          text2="Every apartment is equipped with:"
          items2={[
            "Fully fitted kitchen complete with appliances",
            "Separate living and dining areas that create a spacious and homely environment",
            "In-room laundry facilities",
            "Daily housekeeping services",
            "Free high speed Wi-Fi",
            "Private balconies or large windows with stunning marina or city views",
          ]}
          endText="These residences are ideal for families, couples, corporate travellers, and long-stay residents who are looking for practical, comfortable, and well-appointed accommodation that feels like home."
        />
      </section>
      <TrustedBusinessAdvisor
        heading="Services"
        items={services}
        images={[
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777016295/lobby-with-large-lobby-with-large-chandelier-plant-center_pznxim.jpg",
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777016313/croissant-boiled-egg-orange-juice-yogurt-breakfast-tray-bed-hotel-room_w7r5es.jpg",
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777016328/traveller-calling-hotel-concierge_mlmxzp.jpg",
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777016355/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_myzrdu.jpg",
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777016448/modern-studio-apartment-design-with-bedroom-living-space_l4vewk.jpg",
        ]}
      />
      {/* <ServicedHotelApartments /> */}
    </main>
  );
}

export default ServicedHotelApartmentsPage;
