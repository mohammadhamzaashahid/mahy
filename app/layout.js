import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} antialiased`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <Navbar />
        {children}
        <section id="useful-links">
          <Footer />
        </section>
      </body>
    </html>
  );
}
