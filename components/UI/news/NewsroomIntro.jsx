"use client";

import { motion } from "framer-motion";

export default function NewsroomIntro() {
  return (
    <section className="w-full bg-white">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1], 
        }}
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-16
          sm:pt-20
        "
      >
        <h1
          className="
            text-heading
            text-[40px]
            sm:text-[48px]
            lg:text-[56px]
            font-semibold
            text-black
            tracking-tight
          "
        >
          NEWSROOM
        </h1>

        <div className="mt-5 max-w-3xl">
          <p
            className="
              text-body
              text-[15px]
              sm:text-[16px]
              lg:text-[17px]
              text-slate-600
              leading-relaxed
            "
          >
            Stay informed with the latest announcements, strategic updates,
            and insights from across the MAHY Group. For media enquiries and
            interview requests, please contact{" "}
            <a
              href="mailto:news@mahy.com"
              className="
                font-medium
                text-slate-900
                border-b
                border-slate-300
                hover:border-slate-900
                transition-colors
                duration-300
              "
            >
              news@mahy.com
            </a>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
}
