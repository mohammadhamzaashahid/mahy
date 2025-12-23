export const getNavigation = (translations) => {
    return {
        links: [
            {
                id: "home",
                label: translations("Home"),
                href: "/",
                type: "link",
                linkType: "link",
            },
            {
                id: "about",
                label: translations("AboutUs"),
                href: "/about-us",
                type: "link",
                linkType: "link",
            },
            {
                id: "companies",
                label: translations("Companies"),
                type: "link",
                href: "/companies",
                type: "link",
                linkType: "dropdown",
                items: [
                    {
                        label: translations("TradingDivision"),
                        href: "#",
                        children: [
                            { label: translations("ProjectSales"), href: "" },
                            { label: translations("ChannelSalesExport"), href: "" },
                            { label: translations("ElectricalDivision"), href: "" },
                            { label: translations("ServiceDivision"), href: "" },
                            { label: translations("SpareDivision"), href: "" },
                            { label: translations("EcommerceGrundfos"), href: "" },
                        ],
                    },
                    {
                        label: translations("ManufacturingDivision"),
                        href: "#",
                        children: [
                            { label: translations("UnionWoodWorks"), href: "" },
                            { label: translations("UnionPaperMills"), href: "" },
                            { label: translations("AlDhafraPaper"), href: "" },
                            { label: translations("NationalPaperIndustry"), href: "" },
                            { label: translations("SenanIndustry"), href: "" },
                            { label: translations("AlKhooryEngineering"), href: "" },
                        ],
                    },
                ],
            },
            {
                id: "aftersales",
                label: translations("Shop"),
                type: "link",
                linkType: "dropdown",
                href: "/",
                items: [
                    { label: translations("Pumps"), href: "" },
                    { label: translations("AirConditioning"), href: "" },
                    { label: translations("VFD"), href: "" },
                    { label: translations("Valves"), href: "" },
                ],
            },
            {
                id: "news",
                label: translations("News"),
                href: "/news",
                type: "link",
                linkType: "link",
            },
            {
                id: "careers",
                label: translations("Careers"),
                href: "/careers",
                type: "link",
                linkType: "link",
            }],
        contact: translations("Contact")
    };
}