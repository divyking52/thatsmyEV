"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    // Prevent iOS URL-bar resize from breaking pinned sections
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Native touch scroll on mobile — never pair Lenis with pins on touch devices
    if (reduced || isMobile || coarsePointer) {
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      ScrollTrigger.normalizeScroll(false);

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("orientationchange", refresh);
      window.addEventListener("load", refresh);

      // Settle after layout / fonts
      const t = window.setTimeout(refresh, 300);

      return () => {
        window.clearTimeout(t);
        window.removeEventListener("orientationchange", refresh);
        window.removeEventListener("load", refresh);
      };
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
