import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://mahy.vercel.app"),
  title: "M.A.H.Y. Khoory & CO. LLC",
  description: "A name that is recognized across the Middle East as leaders in the fields of Water Pumping Solutions, Electrical Solutions, Paper Recycling, and Logistics",
  openGraph: {
    title: "M.A.H.Y. Khoory & CO. LLC",
    description: "A name that is recognized across the Middle East as leaders in the fields of Water Pumping Solutions, Electrical Solutions, Paper Recycling, and Logistics",
    images: [
      {
        url: "/gallery/icon.png",
        width: 1000,
        height: 630,
      },
    ],
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000",
};


export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const locale = cookieStore.get("locale").value || "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} antialiased`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <NextIntlClientProvider locale={locale}>
          <Navbar />
          {children}
          <section id="useful-links">
            <Footer />
          </section>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
