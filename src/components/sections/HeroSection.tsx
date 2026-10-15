"use client";

import { siteMeta } from "@/data/content";
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
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const loadTl = gsap.timeline({ defaults: { ease: "expo.out" } });
      loadTl
        .from(".hero-badge", { y: 16, opacity: 0, duration: 0.75 })
        .from(
          ".hero-line",
          { yPercent: 110, opacity: 0, duration: 0.95, stagger: 0.07 },
          "-=0.4",
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.65 }, "-=0.45")
        .from(".hero-search", { y: 16, opacity: 0, duration: 0.65 }, "-=0.4");

      const setupExpand = (from: {
        width: string;
        height: string;
        borderRadius: number;
        end: string;
      }) => {
        gsap.set(frameRef.current, {
          width: from.width,
          height: from.height,
          borderRadius: from.borderRadius,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: from.end,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        tl.fromTo(
          frameRef.current,
          {
            width: from.width,
            height: from.height,
            borderRadius: from.borderRadius,
          },
          {
            width: "100vw",
            height: "100svh",
            borderRadius: 0,
            ease: "none",
          },
          0,
        )
          .to(
            ".hero-copy-block",
            { opacity: 0, y: -32, ease: "none" },
            0.2,
          )
          .to(mediaRef.current, { scale: 1.06, ease: "none" }, 0);

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      };

      mm.add("(min-width: 768px)", () =>
        setupExpand({
          width: "75vw",
          height: "68vh",
          borderRadius: 28,
          end: "+=150%",
        }),
      );

      mm.add("(max-width: 767px)", () =>
        setupExpand({
          width: "90vw",
          height: "64svh",
          borderRadius: 20,
          end: "+=85%",
        }),
      );

      return () => mm.revert();
    },
    { scope: wrapRef },
  );

  return (
    <section id="top" ref={wrapRef} className="relative z-10">
      <div className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-surface-950">
        <div className="ambient-mesh left-[-10%] top-[-20%]" />
        <div className="ambient-mesh bottom-[-25%] right-[-15%] opacity-70" />

        <div
          ref={frameRef}
          className="relative z-10 overflow-hidden border border-slate-200/90 shadow-[0_40px_120px_rgba(15,23,42,0.18)]"
          style={{ width: "90vw", height: "64svh", borderRadius: 20 }}
        >
          <div ref={mediaRef} className="absolute inset-0 will-change-transform">
            <video
              className="absolute inset-0 h-full w-full object-cover object-[58%_45%]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#F4F6F8] via-[#F4F6F8]/65 to-transparent md:via-[#F4F6F8]/55" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#F4F6F8_0%,rgba(244,246,248,0.88)_34%,rgba(244,246,248,0.35)_62%,transparent_82%)] md:bg-[linear-gradient(90deg,#F4F6F8_0%,rgba(244,246,248,0.82)_28%,rgba(244,246,248,0.28)_52%,transparent_72%)]" />
          </div>

          <div className="hero-copy-block absolute inset-0 z-20 flex flex-col justify-end p-4 pb-5 sm:p-8 lg:p-12">
            <div className="max-w-2xl">
              <div className="hero-badge mb-2.5 inline-flex w-fit items-center gap-2 rounded-lg border border-brand-300/60 bg-white/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-700 backdrop-blur-md sm:mb-3 sm:px-3 sm:py-1.5 sm:text-[11px] sm:tracking-[0.2em]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                Battery / System Ready
              </div>

              <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-brand-700 sm:mb-2 sm:text-xs sm:tracking-[0.28em]">
                {siteMeta.tagline}
              </p>

              <h1 className="font-display text-[clamp(1.45rem,6.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
                <span className="hero-line block overflow-hidden">
                  <span className="text-gradient inline-block">Buy EV Cars</span>
                </span>
                <span className="hero-line block overflow-hidden">
                  <span className="inline-block text-ink">in India 2026</span>
                </span>
                <span className="hero-line block overflow-hidden">
                  <span className="inline-block text-sm text-slate-600 sm:text-xl md:text-2xl">
                    Compare prices, range & models
                  </span>
                </span>
              </h1>

              <p className="hero-sub mt-2 line-clamp-2 max-w-lg text-[11px] leading-relaxed text-slate-600 sm:mt-4 sm:line-clamp-none sm:text-sm">
                {siteMeta.subhead}
              </p>

              <div className="hero-cta mt-3 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3">
                <MagneticButton
                  href="#explore"
                  className="!px-5 !py-2.5 text-xs sm:!px-7 sm:!py-3.5 sm:text-sm"
                >
                  Explore EVs
                </MagneticButton>
                <a
                  href="#compare"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/85 px-4 py-2.5 text-xs font-medium text-slate-800 backdrop-blur-md transition-[border-color,background-color] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:border-brand-400/60 hover:bg-white sm:px-5 sm:py-3 sm:text-sm"
                >
                  Compare Models
                </a>
              </div>

              <HeroSearchFilter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
