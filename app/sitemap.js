import { articles } from "@/constants/news";
import { projects } from "@/constants/projects";
import { companiesSectors } from "@/constants/sectors";
import { allShopProducts } from "@/constants/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mahykhoory.com";


const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },

  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about-us/board-of-directors", priority: 0.5 },
  { path: "/about-us/capabilities", priority: 0.5 },
  { path: "/about-us/certifications-and-accreditations", priority: 0.5 },
  { path: "/about-us/code-of-conduct", priority: 0.4 },
  { path: "/about-us/company-profile", priority: 0.6 },
  { path: "/about-us/corporate-governance", priority: 0.4 },
  { path: "/about-us/group-history-and-legacy", priority: 0.6 },
  { path: "/about-us/health-safety-environment", priority: 0.5 },
  { path: "/about-us/leadership-and-management", priority: 0.5 },
  { path: "/about-us/mission-vision-values", priority: 0.5 },
  { path: "/about-us/partners", priority: 0.5 },
  { path: "/about-us/quality-management-systems", priority: 0.5 },
  { path: "/about-us/sustainability", priority: 0.5 },

  { path: "/careers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/careers/career-progression", priority: 0.5 },
  { path: "/careers/culture-and-values", priority: 0.5 },
  { path: "/careers/diversity-and-inclusion", priority: 0.5 },
  { path: "/careers/employee-benefits", priority: 0.5 },
  { path: "/careers/internship-and-graduate-programs", priority: 0.5 },
  { path: "/careers/leadership-and-vision", priority: 0.5 },
  { path: "/careers/learning-and-development", priority: 0.5 },
  { path: "/careers/life-at-mahy", priority: 0.5 },
  { path: "/careers/opportunities", changeFrequency: "weekly", priority: 0.7 },
  { path: "/careers/recruitment-process", priority: 0.4 },
  { path: "/careers/submit-cv", priority: 0.5 },
  { path: "/careers/why-join-us", priority: 0.5 },

  { path: "/companies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/companies/all", changeFrequency: "weekly", priority: 0.9 },
  { path: "/companies/automotive", priority: 0.6 },
  { path: "/companies/compressed-wood-blocks", priority: 0.6 },
  { path: "/companies/containerboard-manufacturing", priority: 0.6 },
  { path: "/companies/details/al-dhafra-paper-manufacturing", priority: 0.7 },
  { path: "/companies/details/al-dhafra-waste-collection", priority: 0.7 },
  { path: "/companies/details/al-etihad-waste-management-services-llc", priority: 0.7 },
  { path: "/companies/details/al-khoory-engineering", priority: 0.7 },
  { path: "/companies/details/around-continent-waste-collection", priority: 0.7 },
  { path: "/companies/details/clean-earth-llc", priority: 0.7 },
  { path: "/companies/details/creative-solutions", priority: 0.7 },
  { path: "/companies/details/greenland-general-transport", priority: 0.7 },
  { path: "/companies/details/mahy-khoory-automotive", priority: 0.7 },
  { path: "/companies/details/mahy-khoory-group", priority: 0.8 },
  { path: "/companies/details/mahy-khoory-motors", priority: 0.7 },
  { path: "/companies/details/mahy-khoory-trading", priority: 0.7 },
  { path: "/companies/details/market-restaurant", priority: 0.7 },
  { path: "/companies/details/national-paper-industry", priority: 0.7 },
  { path: "/companies/details/pearl-marina", priority: 0.7 },
  { path: "/companies/details/pure-energy-construction", priority: 0.7 },
  { path: "/companies/details/recyclable-waste-management-division", priority: 0.7 },
  { path: "/companies/details/senan-industry", priority: 0.7 },
  { path: "/companies/details/solid-waste-management-division", priority: 0.7 },
  { path: "/companies/details/union-nonwoven-industries", priority: 0.7 },
  { path: "/companies/details/union-paper-mills", priority: 0.7 },
  { path: "/companies/details/union-sustainable-packaging", priority: 0.7 },
  { path: "/companies/details/union-wood-works", priority: 0.7 },
  { path: "/companies/energy-sustainability-consulting", priority: 0.6 },
  { path: "/companies/engineering-technical-services", priority: 0.6 },
  { path: "/companies/food-and-beverage", priority: 0.6 },
  { path: "/companies/governance-oversight", priority: 0.5 },
  { path: "/companies/group-structure", priority: 0.6 },
  { path: "/companies/holding-overview", priority: 0.6 },
  { path: "/companies/hospitality", priority: 0.6 },
  { path: "/companies/industrial-packaging-solutions", priority: 0.6 },
  { path: "/companies/manufacturing", priority: 0.6 },
  { path: "/companies/operations-and-capabilities/factories", priority: 0.5 },
  { path: "/companies/operations-and-capabilities/quality-safety-compliance", priority: 0.5 },
  { path: "/companies/operations-and-capabilities/sustainability-environment", priority: 0.5 },
  { path: "/companies/operations-and-capabilities/technology-innovation", priority: 0.5 },
  { path: "/companies/operations-and-capabilities/warehousing-logistics", priority: 0.5 },
  { path: "/companies/packaging-manufacturing-sustainable-packaging-solutions", priority: 0.6 },
  { path: "/companies/solar-renewable-energy", priority: 0.6 },
  { path: "/companies/trading-distribution", priority: 0.6 },
  { path: "/companies/trading", priority: 0.6 },
  { path: "/companies/transportation-logistics", priority: 0.6 },
  { path: "/companies/waste-management", priority: 0.6 },

  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact-us/customer-complaint", priority: 0.4 },
  { path: "/contact-us/enquiry", priority: 0.5 },
  { path: "/contact-us/locations", priority: 0.6 },
  { path: "/contact-us/request-service", priority: 0.5 },
  { path: "/contact-us/schedule-service", priority: 0.5 },
  { path: "/contact-us/service-request", priority: 0.5 },
  { path: "/contact-us/site-visit", priority: 0.5 },

  { path: "/industries", priority: 0.7 },
  { path: "/jobs", changeFrequency: "weekly", priority: 0.7 },
  { path: "/news", changeFrequency: "weekly", priority: 0.7 },
  { path: "/products-and-services", changeFrequency: "weekly", priority: 0.8 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.7 },
  { path: "/shop", changeFrequency: "weekly", priority: 0.7 },
  { path: "/support", priority: 0.4 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },

  { path: "/products/akas-ryne-ventilation-fans", priority: 0.6 },
  { path: "/products/ariston-water-heaters", priority: 0.6 },
  { path: "/products/booster-pumps", priority: 0.6 },
  { path: "/products/chilled-water-pumps", priority: 0.6 },
  { path: "/products/corrugated-boxes", priority: 0.6 },
  { path: "/products/corrugated-paper-reels", priority: 0.6 },
  { path: "/products/dewalt", priority: 0.6 },
  { path: "/products/dx-vrf-air-conditioning", priority: 0.6 },
  { path: "/products/global-water-pressure-tanks", priority: 0.6 },
  { path: "/products/led-lighting-products", priority: 0.6 },
  { path: "/products/pallet-blocks", priority: 0.6 },
  { path: "/products/plastic-jerry-cans", priority: 0.6 },
  { path: "/products/premium-wooden-pallets", priority: 0.6 },
  { path: "/products/pumping-solutions", priority: 0.6 },
  { path: "/products/sewage-wastewater-pumps", priority: 0.6 },
  { path: "/products/spare-parts", priority: 0.6 },
  { path: "/products/submersible-pumps", priority: 0.6 },
  { path: "/products/transfer-pumps", priority: 0.6 },
  { path: "/products/vinzor-aluminum-ladders", priority: 0.6 },

  { path: "/services/air-conditioning-services", priority: 0.6 },
  { path: "/services/annual-maintenance-contracts", priority: 0.6 },
  { path: "/services/comprehensive-pumping-system-hvac-services", priority: 0.6 },
  { path: "/services/engineering-services", priority: 0.6 },
  { path: "/services/engineering-technical-services", priority: 0.6 },
  { path: "/services/kitchen-designing-solutions", priority: 0.6 },
  { path: "/services/pumping-system-services", priority: 0.6 },
  { path: "/services/restaurant-dining-services", priority: 0.6 },
  { path: "/services/serviced-hotel-apartments", priority: 0.6 },
  { path: "/services/solar-panel-installation", priority: 0.6 },
  { path: "/services/waste-collection-recycling", priority: 0.6 },
];

const hseIds = [
  "health-safety-management",
  "environmental-management",
  "monitoring-compliance",
  "continuous-improvement",
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency || "monthly",
    priority: route.priority,
  }));

  const newsEntries = articles.map((article) => ({
    url: `${siteUrl}/news/${article.id}`,
    lastModified: article.date instanceof Date ? article.date : now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const sectorEntries = companiesSectors.map((_, index) => ({
    url: `${siteUrl}/sectors/${index + 1}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const shopEntries = allShopProducts.map((product) => ({
    url: `${siteUrl}/shop/${product.partNumber}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const hseEntries = hseIds.map((id) => ({
    url: `${siteUrl}/hse/${id}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [
    ...staticEntries,
    ...newsEntries,
    ...projectEntries,
    ...sectorEntries,
    ...shopEntries,
    ...hseEntries,
  ];
}
