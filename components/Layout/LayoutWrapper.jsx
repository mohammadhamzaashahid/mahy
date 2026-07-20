"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import FooterV2 from "./FooterV2";

import ChatBot from "../EnquiryChatBot/FloatingWrapper/Chatbot";
import { useState } from "react";
// import { getTranslations } from "next-intl/server";

export default function LayoutWrapper({
  children,
  navigation,
  chatbotData,
  locale,
}) {
  // const cookieStore = await cookies();

  // const locale = cookieStore.get("locale")?.value || "en";
  const pathname = usePathname();

  const isPortal = pathname.startsWith("/mahy-portal");
  // const chatbotTranslations = await getTranslations("Chatbot");

  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <>
      {!isPortal && <Navbar navigation={navigation} />}

      {children}

      {!isPortal && (
        <section id="useful-links">
          <FooterV2 />
        </section>
      )}

      {!isPortal && (
        <ChatBot data={chatbotData} locale={locale} isWidgetOpen={isWidgetOpen} setIsWidgetOpen={setIsWidgetOpen} />
      )}
    </>
  );
}
