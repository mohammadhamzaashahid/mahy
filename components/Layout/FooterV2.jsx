"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  footerBrand,
  footerNavColumnsRow1,
  footerNavColumnsRow2,
  footerDefaultContact,
  footerContactIcons,
  footerSocialLinks,
  footerLegalLinks,
  footerNewsletter,
  footerSocialSectionLabel,
  footerCertifications,
  footerCopyrightTemplate,
} from "@/config/footerV2.config";
import { getCompanyContactFromPathname } from "@/config/footerCompanyContacts.config";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1220]";

function buildTelHref(telephone) {
  const firstNumber = telephone?.split(",")[0]?.trim();
  const digits = firstNumber?.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : undefined;
}

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

function IsoBadge({ data }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-sky-400/70 bg-white/5"
      role="img"
      aria-label={data.ariaLabel}
    >
      <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full border border-white/30 text-center">
        <span className="text-[10px] font-bold leading-none text-sky-300">{data.label}</span>
        <span className="mt-1 text-[6.5px] font-medium leading-none tracking-wide text-slate-300">
          {data.sub1}
        </span>
        <span className="text-[6.5px] font-medium leading-none tracking-wide text-slate-300">
          {data.sub2}
        </span>
      </div>
    </div>
  );
}

function IasBadge({ data }) {
  return (
    <div
      className="flex h-14 w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 border-emerald-500/60 bg-emerald-500/5 text-center"
      role="img"
      aria-label={data.ariaLabel}
    >
      <span className="text-[11px] font-bold leading-none text-emerald-400">{data.label}</span>
      <span className="text-[6.5px] font-semibold leading-none tracking-wide text-slate-300">
        {data.sub}
      </span>
      <span className="px-1 text-[5.5px] leading-tight text-slate-500">
        {data.body[0]}
        <br />
        {data.body[1]}
      </span>
      <span className="text-[5.5px] leading-none text-slate-500">{data.code}</span>
    </div>
  );
}

export default function FooterV2() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const companyContact = getCompanyContactFromPathname(pathname);
  const contact = {
    address: companyContact?.address || footerDefaultContact.address,
    telephone: companyContact?.telephone || footerDefaultContact.telephone,
    email: companyContact?.email || footerDefaultContact.email,
  };

  const contactItems = [
    { key: "address", icon: footerContactIcons.address, text: contact.address },
    {
      key: "telephone",
      icon: footerContactIcons.telephone,
      text: contact.telephone,
      href: buildTelHref(contact.telephone),
    },
    {
      key: "email",
      icon: footerContactIcons.email,
      text: contact.email,
      href: contact.email ? `mailto:${contact.email}` : undefined,
    },
  ];

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
                  src={footerBrand.logo}
                  alt={footerBrand.logoAlt}
                  width={footerBrand.logoWidth}
                  height={footerBrand.logoHeight}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--gold)">
                {footerBrand.tagline}
              </p>

              {footerBrand.description.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-sm leading-relaxed text-slate-400 ${index === 0 ? "mt-5" : "mt-4"}`}
                >
                  {paragraph}
                </p>
              ))}

              <Link
                href={footerBrand.cta.href}
                className={`group mt-6 inline-flex items-center gap-2 rounded-md border border-(--gold) px-5 py-2.5 text-sm font-semibold text-(--gold) transition-colors duration-200 hover:bg-(--gold) hover:text-[#0A1220] ${focusRing}`}
              >
                {footerBrand.cta.label}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Nav columns row 1 */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5 lg:gap-8">
              {footerNavColumnsRow1.map((col) => (
                <LinkColumn key={col.title} title={col.title} links={col.links} />
              ))}
            </div>
          </div>

          {/* Nav columns row 2 */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {footerNavColumnsRow2.map((col) => (
              <LinkColumn key={col.title} title={col.title} links={col.links} />
            ))}

            <div>
              {/* {companyContact?.image && (
                <div className="mb-4 flex items-center gap-3">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-white/15 bg-white/5">
                    <Image
                      src={companyContact.image}
                      alt={companyContact.title}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </span>
                  <span className="text-[13px] font-medium leading-tight text-slate-300">
                    {companyContact.title}
                  </span>
                </div>
              )} */}
              <ColumnHeading>Contact Us</ColumnHeading>
              <ul className="space-y-3">
                {contactItems.map((item) => (
                  <li key={item.key} className="flex items-start gap-2.5">
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
              <footerContactIcons.email size={17} className="text-(--gold)" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{footerNewsletter.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                {footerNewsletter.description}
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
              placeholder={footerNewsletter.placeholder}
              className="w-full min-w-0 rounded-l-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className={`flex shrink-0 items-center gap-1.5 rounded-r-md bg-(--gold) px-5 py-3 text-sm font-semibold text-[#0A1220] transition-colors duration-200 hover:bg-(--gold-dark) ${focusRing}`}
            >
              {footerNewsletter.buttonLabel}
              <ArrowRight size={15} />
            </button>
          </form>

          {/* Follow us */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-white">
              {footerSocialSectionLabel}
            </p>
            <div className="flex items-center gap-3">
              {footerSocialLinks.map((social) => (
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

          {/* Certifications */}
          <div className="flex items-center gap-4">
            <IsoBadge data={footerCertifications.iso} />
            <IasBadge data={footerCertifications.ias} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#070C16]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row lg:px-10">
          <p>{footerCopyrightTemplate(year)}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
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
