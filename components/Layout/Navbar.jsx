"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown, HiMenuAlt3, HiX } from "react-icons/hi";
import Dropdown from "./Dropdown";
import Button from "../UI/Button";
import { NAVIGATION } from "../../config/navbar.config";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (!next) setMobileDropdown(null);
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (locale) => {
    Cookies.set("locale", locale, { expires: 30 });
    window.location.reload();
    // router.replace(pathname, {
    //   scroll: false,
    // });
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full " style={{
      paddingTop: "env(safe-area-inset-top)",
    }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 py-2 min-h-[62px] rounded-b-full bg-black/50 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center pr-4">
          <Link
            href="/"
            aria-label="MAHY Home"
            className="inline-flex items-center"
          >
            <Image
              src="/MAHY.png"
              alt="MAHY Khoory & Co."
              width={220}
              height={100}
              priority
              className="w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px] xl:w-[200px] object-contain"
            />
          </Link>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setLocale("en")} className="px-3 py-1 bg-blue-500 text-white rounded">
            EN
          </button>
          <button onClick={() => setLocale("de")} className="px-3 py-1 bg-red-500 text-white rounded">
            DE
          </button>
          <button onClick={() => setLocale("ar")} className="px-3 py-1 bg-green-500 text-white rounded">
            AR
          </button>
        </div>

        <ul className="hidden lg:flex items-center gap-6 text-white text-sm font-medium">
          {NAVIGATION.map((item) => {
            if (item.linkType === "dropdown") {
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="px-4 py-2 rounded-full hover:bg-white/10 transition"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={openMenu === item.id}
                    >
                      <HiChevronDown
                        className={`text-lg transition-transform ${openMenu === item.id ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>

                  <Dropdown
                    isOpen={openMenu === item.id}
                    items={item.items}
                  />
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-full hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden xl:block">
            <Button size="sm">Contact</Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden px-6 pt-3">
          <div className="rounded-3xl border border-white/10 bg-black/80 px-5 py-5 text-white backdrop-blur-xl">
            <ul className="flex flex-col gap-4">
              {NAVIGATION.map((item) => {
                if (item.linkType === "dropdown") {
                  const expanded = mobileDropdown === item.id;

                  return (
                    <li key={item.id}>
                      <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">

                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="text-white"
                        >
                          {item.label}
                        </Link>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileDropdown((prev) =>
                              prev === item.id ? null : item.id
                            );
                          }}
                          aria-expanded={expanded}
                        >
                          <HiChevronDown
                            className={`text-xl transition-transform ${expanded ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      </div>

                      {expanded && (
                        <div className="mt-2 rounded-2xl bg-white/5 p-3">
                          {item.items.map((group, i) =>
                            group.children?.map((child, j) => (
                              <Link
                                key={`${i}-${j}`}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block py-2 text-sm text-white/80 hover:text-white"
                              >
                                {child.label}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </li>
                  );
                }


                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-2xl bg-white/5 px-4 py-3"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="pt-4">
                <Button size="md" className="w-full">
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
