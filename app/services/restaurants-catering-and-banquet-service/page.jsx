import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";

export const metadata = {
  title: "Restaurant & Dining Services",
  description:
    "MAHY Khoory Group's restaurant and dining services offer a chef-crafted menu spanning breakfast, lunch, dinner and global cuisines throughout the day.",
  alternates: { canonical: "/services/restaurant-dining-services" },
};

function RestaurantCateringAndBanquetService() {
  const overview = [
    {
      heading: "All-Day Dining & International Cuisine",
      text: "The restaurant features an extensive, chef-crafted menu available throughout the day—offering breakfast, lunch, dinner, and beverages. Guests can enjoy a wide range of global cuisines, including:",
      bullets: [
        "Arabic",
        "Indian",
        "Italian",
        "Portuguese",
        "Continental & Fusion dishes",
      ],
      lastText:
        "The menu includes à la carte options, signature chef specials, and rotating seasonal dishes that appeal to diverse tastes and dining preferences.",
    },
    {
      heading: "Buffets & Special Dining Events",
      text: "On selected days, the restaurant hosts themed buffets featuring:",
      bullets: [
        "Seafood Nights",
        "BBQ Grills & Live Counters",
        "Seasonal & Festive Dining Experiences",
      ],
      lastText:
        "These buffets offer a generous selection of grilled specialties, fresh seafood, salads, desserts, and beverages—making them ideal for families, groups, and social occasions seeking variety and value.",
    },
    {
      heading: "Catering & Event Packages",
      text: "The venue provides full-service catering solutions tailored for:",
      bullets: [
        "Yacht parties",
        "Corporate gatherings",
        "Private celebrations",
        "Social events",
      ],
      lastText:
        "Customized menus can be arranged based on group size, event duration, cuisine preferences, and special dietary requirements. Service staff can also be provided for on-board or on-site support to ensure a seamless dining experience.",
    },
    {
      heading: "Ambience & Guest Experience",
      text: "With both indoor and outdoor seating, the restaurant delivers a relaxed and enjoyable atmosphere enhanced by:",
      bullets: [
        "Waterfront views of Dubai Marina",
        "Comfortable seating layouts",
        "Soft ambient lighting",
        "A casual yet refined dining environment",
      ],
      lastText:
        "The setting is perfect for families, couples, social meetups, business discussions, and leisurely waterfront dining.",
    },
    {
      heading: "Reservations & Guest Services",
      text: "Guests can make reservations for:",
      bullets: [
        "Regular à la carte dining",
        "Buffet nights & themed events",
        "Private parties & catered events",
      ],
      lastText:
        "The restaurant operates daily with flexible timings, welcoming both walk-in customers and pre-booked groups.",
    },
    {
      heading: "Ideal For",
      bullets: [
        "Casual all-day dining",
        "Family & group meals",
        "Themed buffet nights",
        "Waterfront social gatherings",
        "Yacht catering & private event services",
      ],
    },
  ];

  return (
    <main>
      <SubPageHeading
        fullHeight
        title={"Restaurant & Dining Services"}
        image={
          "/assets/services/restaurants-catering-and-banquet-service/header-market-res.png"
        }
      />
      <WhoWeAre
        heading="The Restaurant"
        topHeading=""
        text="The Market Restaurant offers a contemporary dining experience in the heart of Dubai Marina, bringing together fresh, seasonal ingredients, expertly crafted international cuisine, and exceptional hospitality. Whether you're joining us for a casual meal, a family gathering, or a business lunch, every dish is thoughtfully prepared to deliver outstanding quality, flavour, and a memorable dining experience in a warm and welcoming atmosphere."
        showButton={false}
        invert={false}
        image="/assets/services/restaurants-catering-and-banquet-service/resturant.png"
        imageAlt="The Restaurant"
        gap
      />
       <WhoWeAre
        heading="Catering Services"
        topHeading=""
        text="Our catering services are tailored to meet the unique requirements of corporate events, weddings, yacht charters, private celebrations, and social gatherings. From customized menus and premium ingredients to professional service and flawless execution, our experienced culinary team creates exceptional dining experiences that leave a lasting impression, regardless of the size or style of your event."
        showButton={false}
        invert={true}
        image="/assets/services/restaurants-catering-and-banquet-service/catering.png"
        imageAlt="Catering Services"
        gap
      />
      <WhoWeAre
        heading="Banquet Services"
        topHeading=""
        text="Our comprehensive banquet services provide complete event dining solutions for both intimate gatherings and large-scale celebrations. Combining carefully curated menus, attentive hospitality, and seamless event coordination, we ensure every occasion is executed to the highest standards. From menu planning through to service delivery, our team is committed to creating memorable experiences for every guest with exceptional food, professionalism, and attention to detail."
        showButton={false}
        invert={false}
        image="/assets/services/restaurants-catering-and-banquet-service/banquet.png"
        imageAlt="Banquet Services"
        gap
      />
    </main>
  );
}

export default RestaurantCateringAndBanquetService;
