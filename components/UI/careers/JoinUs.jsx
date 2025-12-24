import Image from "next/image";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

function JoinUs({ title, text, cta }) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Image
        src="/gallery/gallery-4.jpg"
        alt="Join Us"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="flex flex-col items-center text-center px-6 sm:px-10 transform -translate-y-10 sm:-translate-y-14 lg:-translate-y-20">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">{title}</h1>
          <p className="text-gray-100 mt-3 mb-6 max-w-xl">{text}</p>
          <Link href="/jobs">
            <PrimaryButton
              label={cta}
              size="md"
              radius="rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
