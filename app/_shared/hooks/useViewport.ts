"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useViewport() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width !== null && width < MOBILE_BREAKPOINT;
  const isDesktop = width !== null && width >= MOBILE_BREAKPOINT;

  return {
    width,
    isMobile,
    isDesktop,
  };
}
