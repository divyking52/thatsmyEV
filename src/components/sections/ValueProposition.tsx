"use client";

import { valueStory } from "@/data/content";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const words = gsap.utils.toArray<HTMLElement>(".story-word");

      const setupScrub = (end: string) => {
        gsap.set(words, { opacity: 0.15 });

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

        words.forEach((word, i) => {
          tl.to(
            word,
            {
              opacity: 1,
              color: word.dataset.highlight === "true" ? "#6f921f" : "#000000",
              textShadow:
                word.dataset.highlight === "true"
                  ? "0 0 28px rgba(142,184,42,0.25)"
                  : "none",
              ease: "none",
              duration: 0.08,
            },
            i * 0.08,
          );
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      };

      mm.add("(min-width: 768px)", () => setupScrub("+=120%"));
      mm.add("(max-width: 767px)", () => setupScrub("+=75%"));

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="why"
      className="relative z-20 flex min-h-screen items-center bg-surface-950"
    >
      <div className="ambient-mesh left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" />
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-700 sm:mb-8 sm:text-xs">
          Why Go Electric?
        </p>
        <h2 className="font-display text-balance text-[clamp(1.45rem,6.5vw,3.75rem)] font-semibold leading-[1.28] tracking-[-0.03em]">
          {valueStory.map((word, i) => (
            <span
              key={`${word.text}-${i}`}
              className={`story-word mr-[0.28em] inline-block will-change-[opacity,color] ${
                word.highlight ? "text-brand-600" : "text-black"
              }`}
              data-highlight={word.highlight ? "true" : "false"}
            >
              {word.text}
            </span>
          ))}
        </h2>
        <p className="mt-10 max-w-2xl text-sm text-ink-dim sm:text-base">
          The smart choice for tomorrow&apos;s roads — researched, compared, and
          shortlisted on ThatsmyEV.
        </p>
      </div>
    </section>
  );
}
