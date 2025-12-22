export const NAVIGATION = [
  {
    id: "home",
    label: "Home",
    href: "/",
    type: "link",
    linkType: "link",
  },
  {
    id: "about",
    label: "About Us",
    href: "/about-us",
    type: "link",
    linkType: "link",
  },
  {
    id: "companies",
    label: "Companies",
    href: "/companies",
    type: "link",
    linkType: "dropdown",
    items: [
      {
        label: "Trading Division",
        href: "#",
        children: [
          { label: "MAHY Khoory", href: "" },
          { label: "Emirates Intl Equipments & Machinery", href: "" },
          { label: "Al Mehwar Alfde General Trading", href: "" },
          { label: "Greenland Equipment & Machinery", href: "" },
          { label: "Al Khoory Engineering", href: "" },
        ],
      },

      {
        label: "Manufacturing Division",
        href: "#",
        children: [
          { label: "Union Wood Works", href: "" },
          { label: "Union Paper Mills", href: "" },
          { label: "Al Dhafra Paper Manufacturing", href: "" },
          { label: "National Paper Industry", href: "" },
          { label: "Senan Industry", href: "" },
          { label: "Al Khoory Engineering", href: "" },
        ],
      },

      {
        label: "Recycling Services",
        href: "#",
        children: [
          { label: "Al Dhafra Waste Management", href: "" },
          { label: "Al Etihad Waste Management", href: "" },
          { label: "Green Arabia", href: "" },
          { label: "Waste Management in Dubai", href: "" },
        ],
      },

      {
        label: "Hospitality",
        href: "#",
        children: [
          { label: "The Pearl Marina Hotel Apartments", href: "" },
          { label: "The Market Restaurant", href: "" },
        ],
      },

      {
        label: "Logistics",
        href: "#",
        children: [
          { label: "Green Land Transport", href: "" },
          { label: "Central Warehouse", href: "" },
        ],
      },

      {
        label: "Green Energy",
        href: "#",
        children: [
          { label: "Creative Solutions", href: "" },
          { label: "PV Inverter", href: "" },
          { label: "SE Factsheet", href: "" },
        ],
      },

      {
        label: "Khoory Kitchen",
        href: "#",
        children: [],
      },

      {
        label: "Automotive",
        href: "#",
        children: [
          { label: "MAHY Khoory Automative", href: "" },
          { label: "MAHY Khoory Motors", href: "" },
        ],
      },

      {
        label: "Pure Energy Constructions",
        href: "#",
        children: [],
      },
    ],
  },
  {
    id: "aftersales",
    label: "Shop",
    type: "link",
    linkType: "dropdown",
    href: "/",
    items: [
      { label: "Pumps", href: "/after-sales/spare-parts" },
      { label: "Air Conditioning", href: "/after-sales/maintenance" },
      { label: "VFD", href: "/after-sales/maintenance" },
      { label: "Valves", href: "/after-sales/maintenance" },
    ],
  },
  {
    id: "news",
    label: "News",
    href: "/news",
    type: "link",
    linkType: "link",
  },
  {
    id: "careers",
    label: "Careers",
    href: "/careers",
    type: "link",
    linkType: "link",
  },
];
