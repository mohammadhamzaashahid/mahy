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
        href: "/about",
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
                    { label: "Project Sales", href: "" },
                    { label: "Channel Sales & Export", href: "" },
                    { label: "Electrical Division", href: "" },
                    { label: "Service Division", href: "" },
                    { label: "Spare Division", href: "" },
                    { label: "E-commerce | Grundfos", href: "" },
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
                label: "Interiors",
                href: "#",
                children: [],
            },

            {
                label: "Automotive",
                href: "#",
                children: [],
            },

            {
                label: "Solar Edge",
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
            { label: "Spare Parts", href: "/after-sales/spare-parts" },
            { label: "Maintenance", href: "/after-sales/maintenance" },
        ],
    },
    {
        id: "careers",
        label: "Careers",
        href: "/",
        type: "link",
        linkType: "link",
    },
];