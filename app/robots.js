const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mahykhoory.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/portal",
        "/portal/*",
        "/mahy-portal",
        "/mahy-portal/*",
        "/cart",
        "/contact-us/customer-registration",
        "/contact-us/vendor-registration",
        "/under-maintenance",
        "/loader",
        "/footer-preview",
        "/api/*",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
