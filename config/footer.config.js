import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export const FOOTER_CONFIG = {
  brand: {
    name: "MAHY Khoory",
    logo: {
      src: "/MAHY.png",
      alt: "MAHY Khoory & Co. LLC",
      href: "/",
      width: 140,
      height: 32,
    },
    description:
      "We are the M.A.H.Y. Khoory Group, one of the leaders in innovation and technology in the region and beyond. We are a conglomerate of diverse companies and business units, with a workforce of over 3100+ people.",
    status: {
      label: "All services are operational",
      active: true,
    },
    socials: [
      { icon: FaXTwitter, href: "#" },
      { icon: FaLinkedinIn, href: "#" },
      { icon: FaInstagram, href: "#" },
      { icon: FaYoutube, href: "#" },
    ],
  },


  sections: [
    {
      title: "Product",
      links: [
        { label: "Pumps", href: "#" },
        { label: "Electric Equipments", href: "#" },
        { label: "Air Conditioning", href: "#" },
        { label: "Corrugated Paper", href: "#" },
        { label: "Cars", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Media", href: "#" },
        { label: "Companies", href: "#" },
        { label: "Innovation", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Support Docs", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Chat With Us", href: "#" },
      ],
      cta: {
        label: "Reports",
        href: "#",
      },
    },
  ],

  bottom: {
    copyright:
      "© MAHY Khoory & Co. LLC",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Code of Conduct", href: "#" },
    ],
  },
};
