"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeading from "@/components/UI/PageHeading";
import Breadcrumb from "@/components/UI/Breadcrumb";
import NewsroomIntro from "@/components/UI/news/NewsroomIntro";
import FeaturedNews from "@/components/UI/news/FeaturedNews";
import NewsCard from "@/components/UI/news/NewsCard";
import Pagination from "@/components/UI/news/Pagination";

const ITEMS_PER_PAGE = 3;

const newsList = [
  {
    id: 1,
    slug: "dp-world-launches-36-hour-dubai-iraq-sea-link",
    title: "DP World Launches 36-Hour Dubai-Iraq Sea Link, Cutting Costs",
    date: "12 Dec 2025",
    excerpt:
      "New link can accommodate 145 accompanied trailers per sailing. Weekly service to be operated by upgraded DP World logistics network.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    id: 2,
    slug: "pav-haulage-set-for-new-long-term-home-at-london-gateway",
    title: "PAV Haulage Set for New Long-Term Home at London Gateway",
    date: "11 Dec 2025",
    excerpt:
      "DP World is set to welcome transport and logistics provider PAV Haulage to a state-of-the-art facility at London Gateway Logistics Park.",
    image: "/gallery/gallery-1.jpg",
  },
  {
    id: 3,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "9 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    id: 4,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "10 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-1.jpg",
  },

  {
    id: 5,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "17 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-4.jpg",
  },
  {
    id: 6,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "19 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    id: 7,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "20 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-5.jpg",
  },

  {
    id: 8,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "6 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-6.jpg",
  },
  {
    id: 9,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "2 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    id: 10,
    slug: "dp-world-unifies-marine-services-brands-under-one",
    title: "DP World Unifies Marine Services Brands Under One",
    date: "1 Dec 2025",
    excerpt:
      "Unifeeder, P&O Maritime Logistics, and P&O Ferrymasters to operate as Shipping Solutions, Multimodal Solutions and Maritime Solutions.",
    image: "/gallery/gallery-4.jpg",
  },
];

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading news...</div>}>
      <NewsContent />
    </Suspense>
  );
}

function NewsContent() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search");

  const filteredNews = search
    ? newsList.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : newsList;

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedNews = filteredNews.slice(start, end);
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  return (
    <main className="pb-10">
      <PageHeading
        title="News & Media"
        description="Latest announcements, insights, and updates from MAHY Group and its portfolio."
        image="/gallery/gallery-2.jpg"
      />

      <Breadcrumb />
      <NewsroomIntro />

      <FeaturedNews
        image="/gallery/gallery-5.jpg"
        date="17 Dec 2025"
        title="Construction Starts on New Amenities and Innovation Hub"
        location="London, United Kingdom — 17 December 2025"
        excerpt="DP World and Thames Freeport have broken ground on a £13m pioneering amenities and innovation hub – The Hive – at the London Gateway..."
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4 sm:px-6 lg:px-8
          mt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-10
          gap-y-16
        "
      >
        {paginatedNews.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            date={item.date}
            title={item.title}
            excerpt={item.excerpt}
            href={`/news/${item.slug}`}
          />
        ))}
      </div>

      <FeaturedNews
        invert
        image="/gallery/gallery-5.jpg"
        date="17 Dec 2025"
        title="Construction Starts on New Amenities and Innovation Hub"
        location="London, United Kingdom — 17 December 2025"
        excerpt="DP World and Thames Freeport have broken ground on a £13m pioneering amenities and innovation hub – The Hive – at the London Gateway..."
      />
      <Pagination totalPages={totalPages} />
    </main>
  );
}
