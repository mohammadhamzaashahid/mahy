export const metadata = {
  title: "Cookie Policy",
  description:
    "Learn how M.A.H.Y. Khoory & CO. LLC uses cookies on mahykhoory.com, what categories of cookies exist, and how to manage your preferences.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "1. Introduction",
    body: [
      "This Cookie Policy explains how M.A.H.Y. Khoory & CO. LLC (\"MAHY Khoory Group\", \"we\", \"us\") uses cookies and similar technologies on mahykhoory.com. It should be read alongside our Privacy Policy.",
      "By continuing to use this website, or by clicking \"Accept All\" in the cookie banner, you consent to the use of cookies as described below. You can change your preferences at any time.",
    ],
  },
  {
    heading: "2. What Are Cookies",
    body: [
      "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites function properly, remember your preferences, and provide information to site owners about how the site is used.",
    ],
  },
  {
    heading: "3. Categories of Cookies We Use",
    list: [
      {
        title: "Strictly Necessary",
        text: "Required for the website to function and cannot be switched off. These include cookies that remember your language preference, your shopping cart contents, and your signed-in state on the Customer/Vendor Portal (mahy_portal_auth, mahy_company). Without these, core features of the site will not work.",
      },
      {
        title: "Analytics",
        text: "Help us understand how visitors use the site — which pages are popular, how people navigate between sections, and where visitors run into issues — so we can improve the experience. These are only set with your consent.",
      },
      {
        title: "Marketing",
        text: "Used to measure the effectiveness of our marketing and, where enabled, to show more relevant content. These are only set with your consent.",
      },
    ],
  },
  {
    heading: "4. Third-Party Cookies",
    body: [
      "Some cookies are set by third-party services we rely on, rather than directly by us:",
    ],
    list: [
      {
        title: "Google reCAPTCHA",
        text: "Used on our forms (enquiries, service requests, registrations) to protect against spam and abuse. Google may set cookies as part of this service; see Google's Privacy Policy for details.",
      },
      {
        title: "Microsoft Entra ID (Azure AD)",
        text: "Used to authenticate staff and portal access. Microsoft may set cookies as part of the sign-in process.",
      },
    ],
  },
  {
    heading: "5. Managing Your Preferences",
    body: [
      "You can accept or reject non-essential cookies, or customize your choices by category, using the cookie banner shown when you first visit the site. Your preferences are stored on your device and are not tied to a personal account.",
      "You can also control or delete cookies through your browser settings at any time. Blocking strictly necessary cookies may prevent parts of the site — such as the shopping cart or Customer/Vendor Portal — from working correctly.",
    ],
  },
  {
    heading: "6. Changes to This Policy",
    body: [
      "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for legal or regulatory reasons. Material changes will prompt the cookie banner to reappear so you can review your preferences again.",
    ],
  },
  {
    heading: "7. Contact Us",
    body: [
      "If you have questions about this Cookie Policy, please contact us at info@mahykhoory.com.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 pt-28 pb-20">
      <h1 className="text-3xl lg:text-5xl font-semibold t-base">Cookie Policy</h1>
      <p className="mt-4 text-sm text-gray-500">Last updated: July 2026</p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl lg:text-2xl font-semibold t-base">
              {section.heading}
            </h2>
            {section.body?.map((paragraph, i) => (
              <p key={i} className="mt-3 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 space-y-4">
                {section.list.map((item) => (
                  <li key={item.title}>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
