"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function MahyraAvatar({ visible }) {
  const animRef = useRef(null);
  const lottieInstance = useRef(null);

  useEffect(() => {
    if (!animRef.current || lottieInstance.current) return;

    lottieInstance.current = lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/t5d42NEZJZ.json",
    });

    return () => {
      lottieInstance.current?.destroy();
      lottieInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lottieInstance.current) return;
    if (visible) {
      lottieInstance.current.play();
    } else {
      lottieInstance.current.pause();
    }
  }, [visible]);

  return (
    <div
      className={`
        absolute
        bottom-[108px]
        sm:bottom-[128px]
        lg:bottom-[136px]
        -right-2
        sm:-right-5
        lg:-right-8
        w-32
        h-32
        sm:w-40
        sm:h-40
        lg:w-44
        lg:h-44
        z-[9999]
        pointer-events-none
        transition
        duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
      `}
    >
      <div
        ref={animRef}
        className="
          h-full
          w-full
          drop-shadow-[0_12px_32px_rgba(15,23,42,0.22)]
          animate-avatar-bob
        "
      />
    </div>
  );
}
