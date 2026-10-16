"use client";

import { journeyPanels } from "@/data/content";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function JourneyTrack() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const track = trackRef.current;
      if (!track) return;

      const setupHorizontal = (multiplier: number) => {
        gsap.set(track, { x: 0 });

        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true,
            end: () =>
              `+=${Math.max(getScrollDistance() * multiplier, window.innerHeight)}`,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      };

      mm.add("(min-width: 768px)", () => setupHorizontal(1));
      mm.add("(max-width: 767px)", () => setupHorizontal(0.85));

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative z-20 overflow-hidden bg-[#eef2f6]"
    >
      <div className="box-border flex h-svh flex-col gap-2 px-0 pb-3 pt-[4rem] sm:gap-2.5 sm:pb-4 sm:pt-[4.5rem]">
        <div className="mx-auto w-[min(1200px,calc(100%-1.5rem))] shrink-0 px-1 sm:px-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
            How it works
          </p>
          <h2 className="font-display mt-0.5 text-[clamp(1.4rem,3.4vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            Your EV journey,{" "}
            <span className="text-gradient">fully charged</span>
          </h2>
        </div>

        <div className="relative min-h-0 w-full flex-1 overflow-hidden">
          <div ref={trackRef} className="flex h-full w-max will-change-transform">
            {journeyPanels.map((panel) => (
              <article
                key={panel.step}
                className="flex h-full w-[96vw] shrink-0 items-stretch px-[2vw] md:w-screen md:px-[3vw] xl:px-[max(3vw,calc((100vw-1200px)/2))]"
              >
                <div className="grid h-full w-full overflow-hidden rounded-2xl border border-slate-200/95 bg-white shadow-[0_16px_40px_-20px_rgba(15,23,42,0.2)] md:grid-cols-[1.1fr_1fr] md:rounded-[22px]">
                  <div className="relative min-h-[42%] bg-gradient-to-br from-slate-50 to-slate-100 md:min-h-0">
                    <Image
                      src={panel.image}
                      alt={panel.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width:768px) 96vw, 55vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-5 py-5 sm:px-7 sm:py-6 md:px-8 md:py-8 lg:px-10">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
                      STEP {panel.step}
                    </span>
                    <h3 className="font-display mt-2 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
                      {panel.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-brand-600 sm:text-lg">
                      {panel.subtitle}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base">
                      {panel.copy}
                    </p>
                    <div className="mt-5 sm:mt-7">
                      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-ink-dim sm:text-[11px]">
                        <span>Charge level</span>
                        <span className="text-brand-600">{panel.battery}%</span>
                      </div>
                      <div className="battery-progress h-1.5 sm:h-2">
                        <span style={{ width: `${panel.battery}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto w-[min(1200px,calc(100%-4vw))] shrink-0 md:w-[min(1200px,calc(100%-6vw))]">
          <div className="mb-1.5 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-ink-dim sm:text-[10px]">
            <span>EV progress</span>
            <span>Battery charge</span>
          </div>
          <div className="battery-progress h-1.5 sm:h-2">
            <span ref={progressRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
