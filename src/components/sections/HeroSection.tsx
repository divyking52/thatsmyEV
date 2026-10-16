"use client";

import { mediaAssets } from "@/data/media";
import { HeroSearchFilter } from "@/components/ui/HeroSearchFilter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroSection() {
  const wrapRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const loadTl = gsap.timeline({ defaults: { ease: "expo.out" } });
      loadTl
        .from(".hero-brand", { y: 20, opacity: 0, duration: 0.75 })
        .from(
          ".hero-line",
          { yPercent: 110, opacity: 0, duration: 0.85, stagger: 0.06 },
          "-=0.4",
        )
        .from(".hero-sub", { y: 14, opacity: 0, duration: 0.65 }, "-=0.45")
        .from(".hero-cta", { y: 12, opacity: 0, duration: 0.55 }, "-=0.4")
        .from(".hero-search", { y: 12, opacity: 0, duration: 0.55 }, "-=0.35");

      const setupScroll = (end: string) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        tl.to(
          ".hero-copy-block",
          { opacity: 0, y: -28, ease: "none" },
          0.15,
        ).fromTo(
          mediaRef.current,
          { scale: 1 },
          { scale: 1.08, ease: "none" },
          0,
        );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      };

      mm.add("(min-width: 768px)", () => setupScroll("+=110%"));
      mm.add("(max-width: 767px)", () => setupScroll("+=70%"));

      return () => mm.revert();
    },
    { scope: wrapRef },
  );

  return (
    <section id="top" ref={wrapRef} className="relative z-10">
      <div className="relative flex h-svh w-full overflow-hidden bg-[#0b1220]">
        <div className="relative z-10 h-full w-full overflow-hidden">
          <div ref={mediaRef} className="absolute inset-0 will-change-transform">
            <video
              className="absolute inset-0 h-full w-full object-cover object-[62%_42%]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={mediaAssets.heroPoster}
              aria-label="Electric vehicle charging background"
            >
              <source src={mediaAssets.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,12,20,0.72)] via-[rgba(8,12,20,0.28)] to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,20,0.78)_0%,rgba(8,12,20,0.45)_36%,rgba(8,12,20,0.12)_58%,transparent_78%)]" />
          </div>

          <div className="hero-copy-block absolute inset-0 z-20 flex flex-col justify-end px-4 pb-4 pt-20 sm:px-7 sm:pb-5 sm:pt-24 lg:px-10 lg:pb-6">
            <div className="max-w-xl">
              <p className="hero-brand font-display text-[clamp(2.4rem,9vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
                thats<span className="text-brand-400">my</span>EV
              </p>

              <h1 className="font-display mt-2 text-[clamp(1.05rem,2.8vw,1.65rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white/92 sm:mt-2.5">
                <span className="hero-line block overflow-hidden">
                  <span className="inline-block">Buy EV cars in India 2026</span>
                </span>
                <span className="hero-line block overflow-hidden">
                  <span className="mt-0.5 inline-block text-[clamp(0.85rem,2.2vw,1.15rem)] font-medium text-slate-300/80">
                    Compare prices, range & models
                  </span>
                </span>
              </h1>

              <p className="hero-sub mt-2.5 max-w-md text-xs leading-snug text-slate-200/80 sm:mt-3 sm:text-[0.9rem]">
                Research and shortlist electric vehicles with certified range,
                pricing, and real ownership data.
              </p>

              <div className="hero-cta mt-3 flex flex-wrap items-center gap-2 sm:mt-3.5 sm:gap-2.5">
                <MagneticButton
                  href="#explore"
                  className="!px-5 !py-2.5 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
                >
                  Explore EVs
                </MagneticButton>
                <a
                  href="#compare"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-[border-color,background-color] duration-400 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:border-brand-400/70 hover:bg-white/15 sm:px-5 sm:py-3 sm:text-sm"
                >
                  Compare Models
                </a>
              </div>

              <div className="mt-3 sm:mt-3.5">
                <HeroSearchFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
