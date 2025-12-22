"use client";

import ContactTextPane from "./ContactTextPane";
import ContactFormPane from "./ContactFormPane";

export default function ContactUsSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20 items-start">
          <ContactTextPane />
          <ContactFormPane />
        </div>
      </div>
    </section>
  );
}
