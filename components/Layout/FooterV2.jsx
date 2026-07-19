"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const columnsRow1 = [
  {
    title: "About Us",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our History", href: "/about-us/group-history-and-legacy" },
      { label: "Vision, Mission & Values", href: "/about-us/mission-vision-values" },
      { label: "Company Profile", href: "/about-us/company-profile" },
      { label: "Group History & Legacy", href: "/about-us/group-history-and-legacy" },
    ],
  },
  {
    title: "Leadership & Governance",
    links: [
      { label: "Leadership & Management", href: "/about-us/leadership-and-management" },
      { label: "Leadership Philosophy", href: "/about-us/leadership-and-management" },
      { label: "Management Structure", href: "/about-us/leadership-and-management" },
      { label: "Governance", href: "/about-us/corporate-governance" },
    ],
  },
  {
    title: "Our Companies",
    links: [
      { label: "All Group Companies", href: "/companies/all" },
      { label: "Explore Companies", href: "/companies/group-structure" },
    ],
  },
  {
    title: "Industries & Solutions",
    links: [
      { label: "Industries We Serve", href: "/industries" },
      { label: "Solutions & Services", href: "/products-and-services" },
      { label: "Case Studies", href: "/projects" },
      {
        label: "Innovations",
        href: "/companies/operations-and-capabilities/technology-innovation",
      },
    ],
  },
  {
    title: "Products & Services",
    links: [
      { label: "Products & Services", href: "/products-and-services" },
      { label: "Shop", href: "/shop" },
    ],
  },
];

const columnsRow2 = [
  {
    title: "Investors",
    links: [
      { label: "Investors Overview", href: "#" },
      { label: "Financial Reports", href: "#" },
      { label: "Presentations", href: "#" },
      { label: "Share Information", href: "#" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Why Join Us", href: "/careers/why-join-us" },
      { label: "Life at MAHY", href: "/careers/life-at-mahy" },
      { label: "Current Openings", href: "/careers/opportunities" },
    ],
  },
  {
    title: "News & Media",
    links: [
      { label: "News & Updates", href: "/news" },
      { label: "Media Center", href: "/news" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Sustainability",
    links: [
      { label: "Sustainability & CSR", href: "/about-us/sustainability" },
      { label: "Our Initiatives", href: "/about-us/sustainability" },
      { label: "ESG Reports", href: "#" },
    ],
  },
];

const contactInfo = [
  { icon: MapPin, text: "P.O. Box 123456, Dubai, United Arab Emirates" },
  { icon: Phone, text: "+971 4 123 4567", href: "tel:+97141234567" },
  { icon: Mail, text: "info@mahy.com", href: "mailto:info@mahy.com" },
  { icon: Globe, text: "www.mahy.com", href: "https://www.mahy.com" },
];

const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/m-a-h-y-khoory-co", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/MAHYKHOORYLLC", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/mahykhooryllc", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/mahykhooryllc?ct=google-seo", label: "X (Twitter)" },
  { icon: FaYoutube, href: "https://www.youtube.com/@mahykhoory8592", label: "YouTube" },
];

const legalLinks = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Sitemap", href: "#" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1220]";

function ColumnHeading({ children }) {
  return (
    <div className="mb-4">
      <h4 className="text-[13px] font-semibold uppercase tracking-wide text-white">
        {children}
      </h4>
      <span className="mt-2 block h-0.5 w-6 bg-(--gold)" />
    </div>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <ColumnHeading>{title}</ColumnHeading>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`rounded-xs text-[13px] leading-6 text-slate-400 transition-colors hover:text-white ${focusRing}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IsoBadge() {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-sky-400/70 bg-white/5"
      role="img"
      aria-label="ISO certified company"
    >
      <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full border border-white/30 text-center">
        <span className="text-[10px] font-bold leading-none text-sky-300">ISO</span>
        <span className="mt-1 text-[6.5px] font-medium leading-none tracking-wide text-slate-300">
          CERTIFIED
        </span>
        <span className="text-[6.5px] font-medium leading-none tracking-wide text-slate-300">
          COMPANY
        </span>
      </div>
    </div>
  );
}

function IasBadge() {
  return (
    <div
      className="flex h-14 w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 border-emerald-500/60 bg-emerald-500/5 text-center"
      role="img"
      aria-label="IAS accredited management systems certification body, MSCB-113"
    >
      <span className="text-[11px] font-bold leading-none text-emerald-400">IAS</span>
      <span className="text-[6.5px] font-semibold leading-none tracking-wide text-slate-300">
        ACCREDITED
      </span>
      <span className="px-1 text-[5.5px] leading-tight text-slate-500">
        Management Systems
        <br />
        Certification Body
      </span>
      <span className="text-[5.5px] leading-none text-slate-500">MSCB-113</span>
    </div>
  );
}

export default function FooterV2() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      className="relative bg-[#0A1220] text-slate-300"
      style={{ "--gold": "#C9A24D", "--gold-dark": "#B0863A" }}
    >
      {/* Top: brand + primary nav, with a fading Dubai skyline accent on desktop */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block"
          aria-hidden="true"
        >
          <Image
            src="/gallery/gallery-1.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 46vw, 0px"
            className="object-cover object-[62%_38%] opacity-90"
          />
          <div className="absolute inset-0 bg-[#0A1220]/35" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0A1220] via-[#0A1220]/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A1220]/45 via-transparent to-[#0A1220]/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-12 lg:px-10 lg:pb-12 lg:pt-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-3">
              <span className="mb-4 block h-0.5 w-6 bg-(--gold)" />
              <Link
                href="/"
                aria-label="MAHY Home"
                className={`inline-flex items-center rounded-xs ${focusRing}`}
              >
                <Image
                  src="/MAHY.png"
                  alt="MAHY Khoory & Co."
                  width={220}
                  height={100}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--gold)">
                Holding Company
              </p>

              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                We are the M.A.H.Y. Khoory Group, one of the leaders in
                innovation and technology in the region and beyond.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                We are a conglomerate of diverse companies and business units,
                with a workforce of over 4000+ people.
              </p>

              <Link
                href="/about-us"
                className={`group mt-6 inline-flex items-center gap-2 rounded-md border border-(--gold) px-5 py-2.5 text-sm font-semibold text-(--gold) transition-colors duration-200 hover:bg-(--gold) hover:text-[#0A1220] ${focusRing}`}
              >
                Learn More About Us
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Nav columns row 1 */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5 lg:gap-8">
              {columnsRow1.map((col) => (
                <LinkColumn key={col.title} title={col.title} links={col.links} />
              ))}
            </div>
          </div>

          {/* Nav columns row 2 */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {columnsRow2.map((col) => (
              <LinkColumn key={col.title} title={col.title} links={col.links} />
            ))}

            <div>
              <ColumnHeading>Contact Us</ColumnHeading>
              <ul className="space-y-3">
                {contactInfo.map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    <item.icon size={15} className="mt-0.5 shrink-0 text-(--gold)" />
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`rounded-xs text-[13px] leading-5 text-slate-400 transition-colors hover:text-white ${focusRing}`}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <span className="text-[13px] leading-5 text-slate-400">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter / social / certifications */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-6 lg:px-10">
          {/* Stay connected */}
          <div className="flex items-start gap-3 lg:max-w-xs">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-(--gold)/40">
              <Mail size={17} className="text-(--gold)" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Stay Connected</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full max-w-sm shrink-0">
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full min-w-0 rounded-l-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className={`flex shrink-0 items-center gap-1.5 rounded-r-md bg-(--gold) px-5 py-3 text-sm font-semibold text-[#0A1220] transition-colors duration-200 hover:bg-(--gold-dark) ${focusRing}`}
            >
              Subscribe
              <ArrowRight size={15} />
            </button>
          </form>

          {/* Follow us */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-white">Follow Us</p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors duration-200 hover:border-(--gold) hover:bg-(--gold) hover:text-[#0A1220] ${focusRing}`}
                >
                  <social.icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Global presence */}
          {/* <div className="flex items-center gap-3">
            <Globe size={28} className="shrink-0 text-(--gold)" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white">
                Global Presence
              </p>
              <p className="mt-0.5 max-w-[220px] text-xs leading-relaxed text-slate-500">
                Operating across multiple regions worldwide.
              </p>
            </div>
          </div> */}

          {/* Certifications */}
          <div className="flex items-center gap-4">
            <IsoBadge />
            <IasBadge />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#070C16]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row lg:px-10">
          <p>© {year} M.A.H.Y. Khoory & Co. LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-xs transition-colors hover:text-white ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
