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
            end: () => `+=${Math.max(getScrollDistance() * multiplier, window.innerHeight)}`,
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
      className="relative z-20 overflow-hidden bg-surface-950"
    >
      <div className="flex h-svh flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl shrink-0 px-5 sm:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
            How it works
          </p>
          <h2 className="font-display mt-2 text-[1.75rem] font-semibold tracking-[-0.03em] sm:mt-3 sm:text-5xl">
            Your EV journey,{" "}
            <span className="text-gradient">fully charged</span>
          </h2>
        </div>

        <div className="relative mt-6 w-full flex-1 overflow-hidden sm:mt-10 md:mt-12">
          <div
            ref={trackRef}
            className="flex h-full w-max will-change-transform"
          >
            {journeyPanels.map((panel) => (
              <article
                key={panel.step}
                className="journey-panel flex h-full w-[88vw] shrink-0 items-center px-[6vw] sm:w-[90vw] sm:px-[8vw] md:w-screen md:px-[12vw]"
              >
                <div className="glass-panel grid w-full overflow-hidden rounded-2xl md:grid-cols-2 md:rounded-3xl">
                  <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[420px]">
                    <Image
                      src={panel.image}
                      alt={panel.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 88vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface-900/40" />
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10">
                    <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-brand-700 sm:text-sm">
                      STEP {panel.step}
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-ink sm:mt-3 sm:text-3xl md:text-4xl">
                      {panel.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-600">
                      {panel.subtitle}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:mt-5 sm:text-base">
                      {panel.copy}
                    </p>
                    <div className="mt-5 sm:mt-8">
                      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-ink-dim sm:text-[11px]">
                        <span>Charge level</span>
                        <span className="text-brand-600">{panel.battery}%</span>
                      </div>
                      <div className="battery-progress">
                        <span style={{ width: `${panel.battery}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 w-[min(640px,82vw)] -translate-x-1/2 sm:bottom-8">
          <div className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-ink-dim sm:text-[10px]">
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
