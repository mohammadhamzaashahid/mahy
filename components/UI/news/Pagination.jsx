"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Pagination({ totalPages, className = "" }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page);
    }

    router.push(`/news?${params.toString()}`, { scroll: true });
  };

  if (totalPages <= 1) return null;

  const pages = [];
  const maxVisible = 5;

  for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
    pages.push(i);
  }

  const showEllipsis = totalPages > maxVisible + 1;
  const lastPage = totalPages;

  return (
    <nav
      className={`
        mt-24
        flex
        items-center
        justify-center
        gap-2
        text-sm
        ${className}
      `}
      aria-label="Pagination"
    >
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          flex h-9 w-9 items-center justify-center
          rounded-full
          border border-slate-200
          text-slate-700
          transition
          hover:bg-slate-100
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
        aria-label="Previous page"
      >
        <HiChevronLeft className="text-lg" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`
            h-9 w-9 rounded-full
            flex items-center justify-center
            transition
            ${
              currentPage === page
                ? "bg-indigo-100 text-indigo-700 font-medium"
                : "text-slate-700 hover:bg-slate-100"
            }
          `}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {showEllipsis && (
        <>
          <span className="px-2 text-slate-500">…</span>

          <button
            onClick={() => goToPage(lastPage)}
            className={`
              h-9 w-9 rounded-full
              flex items-center justify-center
              transition
              ${
                currentPage === lastPage
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "text-slate-700 hover:bg-slate-100"
              }
            `}
          >
            {lastPage}
          </button>
        </>
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          flex h-9 w-9 items-center justify-center
          rounded-full
          border border-slate-200
          text-slate-700
          transition
          hover:bg-slate-100
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
        aria-label="Next page"
      >
        <HiChevronRight className="text-lg" />
      </button>
    </nav>
  );
}
