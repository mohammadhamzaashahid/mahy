import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const footerBrand = {
  logo: "/MAHY.png",
  logoAlt: "MAHY Khoory & Co.",
  logoWidth: 220,
  logoHeight: 100,
  tagline: "Holding Company",
  description: [
    "We are the M.A.H.Y. Khoory Group, one of the leaders in innovation and technology in the region and beyond.",
    "We are a conglomerate of diverse companies and business units, with a workforce of over 4000+ people.",
  ],
  cta: { label: "Learn More About Us", href: "/about-us" },
};

export const footerNavColumnsRow1 = [
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
      { label: "Governance", href: "/about-us/corporate-governance" },
    ],
  },
  {
    title: "Our Companies",
    links: [
      { label: "All Group Companies", href: "/companies/all" },
      { label: "Explore Companies", href: "/companies" },
    ],
  },
  {
    title: "Industries & Solutions",
    links: [
      { label: "Industries We Serve", href: "/industries" },
      // { label: "Solutions & Services", href: "/products-and-services" },
      { label: "Projects", href: "/projects" },
      {
        label: "Innovations",
        href: "/companies/operations-and-capabilities/technology-innovation",
      },
    ],
  },
  {
    title: "Products & Services",
    links: [
      // { label: "Products & Services", href: "/products-and-services" },
      { label: "Shop", href: "/under-maintenance" },
    ],
  },
];

export const footerNavColumnsRow2 = [
  // {
  //   title: "Investors",
  //   links: [
  //     { label: "Investors Overview", href: "#" },
  //     { label: "Financial Reports", href: "#" },
  //     { label: "Presentations", href: "#" },
  //     { label: "Share Information", href: "#" },
  //   ],
  // },
  {
    title: "Careers",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Why Join Us", href: "/careers/why-join-us" },
      { label: "Life at MAHY", href: "/careers/life-at-mahy" },
      // { label: "Current Openings", href: "/careers/opportunities" },
    ],
  },
  {
    title: "News & Media",
    links: [
      { label: "News & Updates", href: "/news" },
      { label: "Awards", href: "/about-us/certifications-and-accreditations" },
      // { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Sustainability",
    links: [
      { label: "Sustainability & CSR", href: "/about-us/sustainability" },
      { label: "Energy & Sustainability Consulting", href: "/companies/energy-sustainability-consulting" },
      // { label: "ESG Reports", href: "#" },
    ],
  },
];

// Fallback contact shown on every page that has no company-specific contact.
export const footerDefaultContact = {
  address: "P.O. Box: 41, Near Abu Hail Metro Station, Dubai. UAE.",
  telephone: "+971 46067300",
  email: "info@mahykhoory.com",
};

export const footerContactIcons = { address: MapPin, telephone: Phone, email: Mail };

export const footerSocialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/m-a-h-y-khoory-co", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/MAHYKHOORYLLC", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/mahykhooryllc", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/mahykhooryllc?ct=google-seo", label: "X (Twitter)" },
  { icon: FaYoutube, href: "https://www.youtube.com/@mahykhoory8592", label: "YouTube" },
];

export const footerLegalLinks = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "#" },
  { label: "Sitemap", href: "#" },
];

export const footerNewsletter = {
  title: "Stay Connected",
  description: "Subscribe to our newsletter for the latest updates and insights.",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe",
};

export const footerSocialSectionLabel = "Follow Us";

export const footerCertifications = {
  iso: {
    label: "ISO",
    sub1: "CERTIFIED",
    sub2: "COMPANY",
    ariaLabel: "ISO certified company",
  },
  ias: {
    label: "IAS",
    sub: "ACCREDITED",
    body: ["Management Systems", "Certification Body"],
    code: "MSCB-113",
    ariaLabel: "IAS accredited management systems certification body, MSCB-113",
  },
};

export const footerCopyrightTemplate = (year) =>
  `© ${year} M.A.H.Y. Khoory & Co. LLC. All rights reserved.`;
