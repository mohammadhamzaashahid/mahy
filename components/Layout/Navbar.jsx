"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown, HiMenuAlt3, HiX } from "react-icons/hi";
import Dropdown from "./Dropdown";
import Button from "../UI/Button";
import { NAVIGATION } from "../../config/navbar.config";

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

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className="
          mx-auto flex max-w-7xl items-center justify-between
          px-6 lg:px-10
          py-2 lg:py-2
          min-h-[62px]
          rounded-b-full
          bg-black/50
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        "
      >
        <div className="flex items-center pr-2 lg:pr-4">
          <Image
            src="/MAHY.png"
            alt="MAHY Khoory & Co."
            width={220}
            height={90}
            priority
            className="
      w-[150px]
      sm:w-[160px]
      md:w-[170px]
      lg:w-[180px]
      xl:w-[200px]
      object-contain
    "
          />
        </div>


        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 text-white text-sm font-medium">
          {NAVIGATION.map((item) => {
            if (item.type === "link") {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="px-3 xl:px-5 py-2 rounded-full hover:bg-white/10 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            if (item.type === "dropdown") {
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 xl:px-5 py-2 rounded-full hover:bg-white/10 transition"
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.id}
                    type="button"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.label}
                    <HiChevronDown
                      className={`text-lg transition-transform ${openMenu === item.id ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <Dropdown
                    isOpen={openMenu === item.id}
                    items={item.items}
                  />
                </li>
              );
            }

            return null;
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
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden px-6 pt-3">
          <div className="rounded-3xl border border-white/10 bg-black/80 px-5 py-5 text-white shadow-xl backdrop-blur-xl">
            <ul className="flex flex-col gap-4">
              {NAVIGATION.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="flex w-full items-center justify-between rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                if (item.type === "dropdown") {
                  const expanded = mobileDropdown === item.id;

                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
                        onClick={() =>
                          setMobileDropdown((prev) =>
                            prev === item.id ? null : item.id
                          )
                        }
                        aria-expanded={expanded}
                      >
                        {item.label}
                        <HiChevronDown
                          className={`text-xl transition-transform ${expanded ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-out ${expanded
                          ? "mt-2 max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          {item.items.map((link, index) => (
                            <Link
                              key={`${link.href || "mobile"}-${index}`}
                              href={link.href}
                              className="text-sm text-white/80 hover:text-white"
                              onClick={closeMobileMenu}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                return null;
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
