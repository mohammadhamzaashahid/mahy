"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import FullScreenLoader from "./FullScreenLoader";

const LoaderReadyContext = createContext(false);

export function useLoaderReady() {
  return useContext(LoaderReadyContext);
}

export default function LoaderWrapper({ children }) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);
  const loading = !pageLoaded || !loaderFinished;

  const handleLoaderFinish = useCallback(() => {
    setLoaderFinished(true);
  }, []);

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const hiddenStyles = loading
    ? { visibility: "hidden", pointerEvents: "none" }
    : undefined;

  return (
    <LoaderReadyContext.Provider value={!loading}>
      {loading && <FullScreenLoader onFinish={handleLoaderFinish} />}
      <div
        aria-hidden={loading}
        className={`transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        style={hiddenStyles}
      >
        {children}
      </div>
    </LoaderReadyContext.Provider>
  );
}
