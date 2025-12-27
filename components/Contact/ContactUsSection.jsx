"use client";

import { useState } from "react";
import ContactTextPane from "./ContactTextPane";
import ContactFormPane from "./ContactFormPane";
import ComplaintFormPane from "./ComplaintFormPane";
import { motion, AnimatePresence } from "framer-motion";



export default function ContactUsSection({ contactUs }) {
  const [activeTab, setActiveTab] = useState("contact");

  const tabs = [
    { id: "contact", label: contactUs.labels[0] },
    { id: "complaint", label: contactUs.labels[1] },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-2 lg:pt-8 pb-16">
        <div className="sticky top-16 z-30 bg-white">
          <div className="flex justify-center py-3 mb-8 lg:mb-16">
            <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 shadow-sm">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300
                    ${activeTab === tab.id ? "bg-black text-white shadow-md" : "text-slate-600 hover:text-black"}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20 items-start">
          <ContactTextPane data={contactUs.headings} />
          <AnimatePresence mode="wait">
            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ContactFormPane data={contactUs.form1} agreement={contactUs.agreement} submit={contactUs.submit[0]} />
              </motion.div>
            )}

            {activeTab === "complaint" && (
              <motion.div
                key="complaint"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ComplaintFormPane data={contactUs.form2} upload={contactUs.upload} submit={contactUs.submit[1]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
