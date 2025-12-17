// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { HiChevronRight } from "react-icons/hi";

// const LABEL_MAP = {
//   companies: "Our Companies",
//   "our-investments": "Our Investments",
//   "our-portfolio": "Our Portfolio",
// };

// export default function Breadcrumb() {
//   const pathname = usePathname();

//   const segments = pathname
//     .split("/")
//     .filter(Boolean);

//   const crumbs = segments.map((segment, index) => {
//     const href = "/" + segments.slice(0, index + 1).join("/");
//     const label =
//       LABEL_MAP[segment] ||
//       segment.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

//     return { href, label };
//   });

//   return (
//     <nav
//       aria-label="Breadcrumb"
//       className="w-full bg-[#FAF7F2] border-b border-black/5"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3">
//         <ol className="flex items-center text-sm text-black/70">
//           <li className="flex items-center">
//             <Link
//               href="/"
//               className="hover:text-black transition"
//             >
//               Home
//             </Link>
//           </li>

//           {crumbs.map((crumb, index) => (
//             <li key={crumb.href} className="flex items-center">
//               <HiChevronRight className="mx-2 text-black/40" />

//               {index === crumbs.length - 1 ? (
//                 <span className="text-black font-medium">
//                   {crumb.label}
//                 </span>
//               ) : (
//                 <Link
//                   href={crumb.href}
//                   className="hover:text-black transition"
//                 >
//                   {crumb.label}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ol>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";


const STATIC_LABELS = {
  companies: "Our Portfolio",
  "our-investments": "Our Investments",
  portfolio: "Portfolio",
  "private-equity": "Private Equity",
};

const humanize = (slug) =>
  slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    const label =
      STATIC_LABELS[segment] ??
      humanize(segment);

    return { href, label };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-black/1"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-5">
        <ol className="flex flex-wrap items-center text-sm text-black/70">
          <li className="flex items-center">
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>

          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              <HiChevronRight className="mx-2 text-black/40 shrink-0" />

              {index === crumbs.length - 1 ? (
                <span className="font-medium text-black">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-black transition"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
