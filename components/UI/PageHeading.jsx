"use client";

import Image from "next/image";

export default function PageHeading({
  title,
  description,
  imageSrc,
  imageAlt = "",
  bgColor = "#0E2F2A",
}) {
  return (
    <section className="w-full">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
        "
      >
        <div className="relative h-[420px] lg:h-[560px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div
          className="flex items-center"
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="
              w-full
              max-w-2xl
              px-6 sm:px-10 lg:px-16 xl:px-20
              py-24
            "
          >
            <h1
              className="
                text-white
                text-[36px]
                sm:text-[44px]
                lg:text-[56px]
                xl:text-[60px]
                font-semibold
                leading-[1.1]
              "
            >
              {title}
            </h1>

            <p
              className="
                mt-6
                text-white/90
                text-[16px]
                sm:text-[17px]
                lg:text-[18px]
                leading-relaxed
                max-w-xl
              "
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
