"use client"

import CompaniesCard from "./CompaniesCard";

const COMPANIES = [
  {
    id: 1,
    category: "Real Estate",
    title: "Grundfos",
    logo: "/gallery/comp1.jpg",
  },
  {
    id: 2,
    category: "Real Estate",
    title: "Grundfos",
    logo: "/gallery/comp1.jpg",
  }
];

export default function CompaniesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COMPANIES.map((company) => (
          <CompaniesCard
            key={company.id}
            category={company.category}
            title={company.title}
            logo={company.logo}
            onClick={() => console.log(company.title)}
          />
        ))}
      </div>
    </section>
  );
}
