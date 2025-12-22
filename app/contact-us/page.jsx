import ContactUsSection from "@/components/Contact/ContactUsSection";
import Breadcrumb from "@/components/UI/Breadcrumb";
import PageHeading from "@/components/UI/PageHeading";
import React from "react";

function ContactUs() {
  const heading = {
    title: "Contact Us",
    description: "WHAT CAN WE MAKE POSSIBLE FOR YOU?",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1766132761/careers_tkbmhq.avif",
  };

  return (
    <main>
      <PageHeading
        title={heading.title}
        description={heading.description}
        image={heading.image}
      />
      <Breadcrumb />

      <ContactUsSection/>

    </main>
  );
}

export default ContactUs;
