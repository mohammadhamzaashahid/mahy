import { companyDetails } from "@/constants/contactDetailsCompanies";

// Maps a /companies/details/<slug> route to its matching entry (by title) in
// constants/contactDetailsCompanies.js, so the footer can show that company's
// own contact details instead of the group default.
const slugToContactTitle = {
  "mahy-khoory-group": "MAHY Khoory Group of Companies",
  "mahy-khoory-trading": "MAHY Khoory Trading",
  "al-khoory-engineering": "Al Khoory Engineering",
  "union-paper-mills": "Union Paper Mills",
  "al-dhafra-paper-manufacturing": "Al Dhafra Paper Manufacturing",
  "union-wood-works": "Union Wood Works",
  "recyclable-waste-management-division": "Recyclable Waste Management Division",
  "al-dhafra-waste-collection": "Al Dhafra Waste Collection",
  "around-continent-waste-collection": "Around Continent Waste Collection",
  "al-etihad-waste-management-services-llc": "Etihad Waste Management",
  "clean-earth-llc": "Clean Earth LLC",
  "solid-waste-management-division": "Solid Waste Management Division",
  "union-sustainable-packaging": "Union Sustainable Packaging Solutions",
  "national-paper-industry": "National Paper Industry (S.P.S - L.L.C)",
  "greenland-general-transport": "Greenland Transport",
  "senan-industry": "Senan Industry LLC",
  "pure-energy-construction": "Pure Energy Construction LLC",
  "pearl-marina": "Pearl Marina Hotel Apartments",
  "market-restaurant": "Market Restaurant and Cafe",
  "mahy-khoory-motors": "MAHY Khoory Motors",
  "mahy-khoory-automotive": "MAHY Khoory Automotive",
  "union-nonwoven-industries": "Union Nonwoven Industries",
  "creative-solutions": "Creative Solution Green Building",
};

const contactByTitle = new Map(companyDetails.map((company) => [company.title, company]));

export function getCompanyContactFromPathname(pathname) {
  const slug = pathname?.match(/^\/companies\/details\/([^/]+)/)?.[1];
  const title = slug ? slugToContactTitle[slug] : undefined;
  return title ? contactByTitle.get(title) ?? null : null;
}
