"use client";

import { useCallback, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useNewsPageNavigation(totalPages) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentPage = Number(searchParams.get("page")) || 1;

  const goToPage = useCallback(
    (targetPage, { shouldScroll = true } = {}) => {
      if (targetPage < 1 || targetPage > totalPages || targetPage === currentPage) return;

      const params = new URLSearchParams(searchParams.toString());

      if (targetPage === 1) {
        params.delete("page");
      } else {
        params.set("page", targetPage);
      }

      const query = params.toString();

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "newsNavDirection",
          targetPage > currentPage ? "forward" : "backward"
        );
      }

      startTransition(() => {
        router.push(query ? `/news?${query}` : "/news", { scroll: false });
      });

      if (shouldScroll && typeof window !== "undefined") {
        window.requestAnimationFrame(() => {
          const list = document.getElementById("list");
          if (list) {
            list.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
    },
    [currentPage, router, searchParams, startTransition, totalPages]
  );

  return { currentPage, goToPage, isPending };
}
