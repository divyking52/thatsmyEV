"use client";

import { valueStory, whyElectric } from "@/data/content";
import { mediaAssets } from "@/data/media";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const words = gsap.utils.toArray<HTMLElement>(".story-word");
      const metrics = gsap.utils.toArray<HTMLElement>(".why-metric");

      const setupScrub = (end: string) => {
        gsap.set(words, { opacity: 0.18, color: "rgba(226,232,240,0.35)" });
        gsap.set(metrics, { opacity: 0.25, y: 16 });
        gsap.set(".why-visual", { scale: 1.08 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        tl.to(".why-visual", { scale: 1, ease: "none", duration: 1 }, 0);

        words.forEach((word, i) => {
          const highlight = word.dataset.highlight === "true";
          tl.to(
            word,
            {
              opacity: 1,
              color: highlight ? "#A6CE39" : "#F8FAFC",
              ease: "none",
              duration: 0.08,
            },
            i * 0.08,
          );
        });

        metrics.forEach((metric, i) => {
          tl.to(
            metric,
            { opacity: 1, y: 0, ease: "none", duration: 0.2 },
            words.length * 0.08 * 0.55 + i * 0.08,
          );
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      };

      mm.add("(min-width: 768px)", () => setupScrub("+=110%"));
      mm.add("(max-width: 767px)", () => setupScrub("+=70%"));

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="why"
      className="relative z-20 overflow-hidden bg-[#0b1220]"
    >
      <div className="why-visual absolute inset-0 will-change-transform">
        <Image
          src={mediaAssets.whyElectric}
          alt="Electric SUV on an open road"
          fill
          className="object-cover object-[50%_40%]"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.72)_0%,rgba(8,12,20,0.55)_45%,rgba(8,12,20,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(142,184,42,0.16)_0%,transparent_70%)]" />

      <div className="relative mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-400 sm:text-xs">
          Why Go Electric?
        </p>

        <h2 className="font-display mt-4 max-w-4xl text-balance text-[clamp(1.55rem,5.5vw,3.35rem)] font-semibold leading-[1.22] tracking-[-0.03em] sm:mt-5">
          {valueStory.map((word, i) => (
            <span
              key={`${word.text}-${i}`}
              className="story-word mr-[0.28em] inline-block will-change-[opacity,color]"
              data-highlight={word.highlight ? "true" : "false"}
            >
              {word.text}
            </span>
          ))}
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-snug text-slate-300/85 sm:mt-6 sm:text-[0.95rem]">
          The smart choice for tomorrow&apos;s roads — researched, compared, and
          shortlisted on ThatsmyEV.
        </p>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3">
          {whyElectric.map((item) => (
            <div
              key={item.title}
              className="why-metric rounded-2xl border border-white/12 bg-black/35 px-3 py-3.5 backdrop-blur-md sm:px-4 sm:py-4"
            >
              <p className="font-display text-2xl font-semibold tracking-tight text-brand-400 sm:text-[1.75rem]">
                {item.metric.value}
                <span className="text-lg text-brand-300/90">
                  {item.metric.unit}
                </span>
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                {item.metric.label}
              </p>
              <p className="mt-1.5 text-xs font-medium text-slate-100/95">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
