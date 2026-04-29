"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function CompanyOverview({
  heading = "M.A.H.Y. Khoory Trading",
  texts = [],
  image = "/gallery/gallery-2.jpg",
  video = null,
  showScroll = true,
  scrollText = "Read More About Us",
}) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      {/* <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          priority
        />
      </motion.div> */}

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover"
            priority
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="absolute inset-0 z-50 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16"
        style={{ paddingTop: "clamp(77px, 20vh, 160px)" }}
      >
        <div className="max-w-2xl md:max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl px-6 py-7 sm:px-8 sm:py-8 md:px-10 md:py-10 z-50 relative"
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              backdropFilter: "blur(7px)",
              WebkitBackdropFilter: "blur(7px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight mb-5 sm:mb-6 md:mb-7"
            >
              {heading}
            </motion.h1>

            <div className="space-y-4">
              {texts.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="text-white/90 leading-relaxed text-sm sm:text-[12px] md:text-[15px]"
                >
                  {text || ''}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {showScroll && (
        <motion.div
          onClick={handleScrollDown}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="
            absolute
            mt-2
            bottom-5 sm:bottom-7 md:bottom-9
            left-1/2 -translate-x-1/2 z-20
            cursor-pointer flex flex-col items-center gap-2 sm:gap-3 group
          "
        >
          <span className="text-white text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.25em] md:tracking-[0.3em] uppercase opacity-90">
            {scrollText}
          </span>
          <div className="relative w-[2px] h-12 sm:h-14 md:h-16 bg-white/40 overflow-hidden rounded-full">
            <motion.div
              animate={{ y: ["-40%", "140%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[10px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            />
          </div>
          <div className="w-6 sm:w-8 h-[2px] bg-white/60 group-hover:bg-white transition" />
        </motion.div>
      )}
    </section>
  );
}

export default CompanyOverview;