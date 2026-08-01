import { Poppins } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import { getNavigation } from "@/config/navbar.config";
import { getFooter } from "@/config/footer.config";
import { NextIntlClientProvider } from "next-intl";
import ChatBot from "@/components/EnquiryChatBot/FloatingWrapper/Chatbot";
import { chatbotData } from "@/config/chatbot";
import SmoothScrollProvider from "@/components/Providers/SmoothScrollProvider";
import CartProvider from "@/components/Providers/CartProvider";
import CartDrawer from "@/components/UI/cart/CartDrawer";
import ReactQueryProvider from "@/components/Providers/ReactQueryProvider";
import LoaderWrapper from "@/components/LoaderWrapper";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import { AuthContextProvider } from "@/context/AuthContext";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsentBanner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mahykhoory.com";
const defaultTitle =
  "M.A.H.Y. Khoory & CO. LLC | UAE Industrial Group Since 1930";
const defaultDescription =
  "M.A.H.Y. Khoory Group is a UAE national-owned industrial holding group operating 25 companies across 10 industries, including water pumping, electrical & MEP engineering, paper recycling, waste management, solar EPC and automotive, trusted across the Middle East since 1930.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | M.A.H.Y. Khoory & CO. LLC",
  },
  description: defaultDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    siteName: "M.A.H.Y. Khoory & CO. LLC",
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/gallery/icon.png",
        width: 1000,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/gallery/icon.png"],
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();

  const locale = cookieStore.get("locale")?.value || "en";
  const dir = locale === "ar" ? "rtl" : "ltr";
  const navTranslations = await getTranslations("Nav");
  const footerTranslations = await getTranslations("Footer");
  const chatbotTranslations = await getTranslations("Chatbot");

  return (
    <html lang={locale} dir={dir}>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} antialiased`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <ReactQueryProvider>
          <SmoothScrollProvider>
            <NextIntlClientProvider locale={locale}>
              <LoaderWrapper>
                <CartProvider>
                  {/* <Navbar navigation={getNavigation(navTranslations)} />
                  {children}
                  <section id="useful-links">
                    <Footer data={getFooter(footerTranslations)} />
                  </section> */}

                  <LayoutWrapper
                    navigation={getNavigation(navTranslations)}
                    footerData={getFooter(footerTranslations)}
                    chatbotData={chatbotData(chatbotTranslations)}
                    locale={locale}
                  >
                    <AuthContextProvider>
                      {children}
                    </AuthContextProvider>
                  </LayoutWrapper>
                  <CartDrawer />
                  <CookieConsentBanner />
                </CartProvider>
              </LoaderWrapper>
            </NextIntlClientProvider>
          </SmoothScrollProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
