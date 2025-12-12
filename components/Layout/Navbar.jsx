"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown, HiMenuAlt3, HiX } from "react-icons/hi";
import Dropdown from "./Dropdown";
import Button from "../UI/Button";

export const NAVIGATION = [
  {
    id: "home",
    label: "Home",
    href: "/",
    type: "link",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    type: "link",
  },
  {
    id: "companies",
    label: "Companies",
    type: "dropdown",
    items: [
      { label: "Z9", href: "/vehicles/z9" },
      { label: "DONGFENG 007", href: "/vehicles/df-007" },
      { label: "HUGE", href: "/vehicles/huge" },
      { label: "MAGE", href: "/vehicles/mage" },
      { label: "AX7", href: "/vehicles/ax7" },
      { label: "SHINE MAX", href: "/vehicles/shine-max" },
      { label: "SHINE", href: "/vehicles/shine" },
      { label: "RICH 7", href: "/vehicles/rich-7" },
    ],
  },
  {
    id: "aftersales",
    label: "Shop",
    type: "dropdown",
    items: [
      { label: "Spare Parts", href: "/after-sales/spare-parts" },
      { label: "Maintenance", href: "/after-sales/maintenance" },
    ],
  },
  {
    id: "careers",
    label: "Careers",
    href: "/careers",
    type: "link",
  },
];

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
      if (!next) {
        setMobileDropdown(null);
      }
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
          mx-auto flex max-w-7xl items-center justify-between px-8 py-6
          rounded-b-full
bg-black/40
backdrop-blur-2xl
border border-white/10
shadow-[0_10px_30px_rgba(0,0,0,0.35)]

        "
      >
        <Image src="/MAHY.png" alt="mhy" width={140} height={50} />

        <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          {NAVIGATION.map((item) => {
            if (item.type === "link") {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="px-5 py-2 rounded-full hover:bg-white/10 transition"
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
                    className="flex items-center gap-1 px-5 py-2 rounded-full hover:bg-white/10 transition"
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.id}
                    type="button"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.label}
                    <HiChevronDown
                      className={`text-lg transition-transform ${
                        openMenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <Dropdown isOpen={openMenu === item.id} items={item.items} />
                </li>
              );
            }

            return null;
          })}
        </ul>

        <div className="flex items-center gap-4">
         <Button size="sm">Contact</Button>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden px-6 pt-3">
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
                          className={`text-xl transition-transform ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-out ${
                          expanded ? "mt-2 max-h-64 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          {item.items.map((link) => (
                            <Link
                              key={link.href}
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
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
