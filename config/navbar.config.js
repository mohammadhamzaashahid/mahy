export const getNavigation = (t) => ({
    links: [
        {
            id: "home",
            label: t("Home"),
            href: "/",
            type: "link",
            linkType: "link",
        },
        {
            id: "about",
            label: t("AboutUs"),
            href: "/about-us",
            type: "link",
            linkType: "link",
        },
        {
            id: "companies",
            label: t("Companies"),
            href: "/companies",
            type: "link",
            linkType: "dropdown",
            items: [
                {
                    label: t("TradingDivision"),
                    href: "#",
                    children: [
                        { label: t("MAHYKhoory"), href: "" },
                        { label: t("EmiratesIntlEquipments"), href: "" },
                        { label: t("AlMehwar"), href: "" },
                        { label: t("GreenlandEquipment"), href: "" },
                        { label: t("AlKhooryEngineering"), href: "" },
                    ],
                },
                {
                    label: t("ManufacturingDivision"),
                    href: "#",
                    children: [
                        { label: t("UnionWoodWorks"), href: "" },
                        { label: t("UnionPaperMills"), href: "" },
                        { label: t("AlDhafraPaper"), href: "" },
                        { label: t("NationalPaperIndustry"), href: "" },
                        { label: t("SenanIndustry"), href: "" },
                        { label: t("AlKhooryEngineering"), href: "" },
                    ],
                },
                {
                    label: t("RecyclingServices"),
                    href: "#",
                    children: [
                        { label: t("AlDhafraWaste"), href: "" },
                        { label: t("AlEtihadWaste"), href: "" },
                        { label: t("GreenArabia"), href: "" },
                        { label: t("WasteDubai"), href: "" },
                    ],
                },
                {
                    label: t("Hospitality"),
                    href: "#",
                    children: [
                        { label: t("PearlMarina"), href: "" },
                        { label: t("MarketRestaurant"), href: "" },
                    ],
                },
                {
                    label: t("Logistics"),
                    href: "#",
                    children: [
                        { label: t("GreenLandTransport"), href: "" },
                        { label: t("CentralWarehouse"), href: "" },
                    ],
                },
                {
                    label: t("GreenEnergy"),
                    href: "#",
                    children: [
                        { label: t("CreativeSolutions"), href: "" },
                        { label: t("PVInverter"), href: "" },
                        { label: t("SEFactsheet"), href: "" },
                    ],
                },
                {
                    label: t("KhooryKitchen"),
                    href: "#",
                    children: [],
                },
                {
                    label: t("Automotive"),
                    href: "#",
                    children: [
                        { label: t("MAHYKhooryAutomotive"), href: "" },
                        { label: t("MAHYKhooryMotors"), href: "" },
                    ],
                },
                {
                    label: t("PureEnergyConstructions"),
                    href: "#",
                    children: [],
                },
            ],
        },
        {
            id: "shop",
            label: t("Shop"),
            href: "/",
            type: "link",
            linkType: "dropdown",
            items: [
                { label: t("Pumps"), href: "/after-sales/spare-parts" },
                { label: t("AirConditioning"), href: "/after-sales/maintenance" },
                { label: t("VFD"), href: "/after-sales/maintenance" },
                { label: t("Valves"), href: "/after-sales/maintenance" },
            ],
        },
        {
            id: "news",
            label: t("News"),
            href: "/news",
            type: "link",
            linkType: "link",
        },
        {
            id: "careers",
            label: t("Careers"),
            href: "/careers",
            type: "link",
            linkType: "link",
        },
    ],
    contact: t("Contact"),
});