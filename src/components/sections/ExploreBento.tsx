"use client";

import {
  comparisons,
  exploreModes,
  newsItems,
  whyElectric,
} from "@/data/content";
import { AnimatedBrandCar } from "@/components/ui/AnimatedBrandCar";
import {
  SpotlightGrid,
  SpotlightTiltCard,
} from "@/components/ui/SpotlightTiltCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ExploreBento() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.batch(".bento-card", {
          start: "top 88%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { y: 60, opacity: 0, rotateX: 10 },
              {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 1,
                stagger: 0.1,
                ease: "expo.out",
                overwrite: "auto",
              },
            );
          },
          once: true,
        });
      });

      mm.add("(max-width: 767px)", () => {
        ScrollTrigger.batch(".bento-card", {
          start: "top 90%",
          interval: 0.12,
          batchMax: 3,
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { y: 36, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                stagger: 0.08,
                ease: "expo.out",
                overwrite: "auto",
              },
            );
          },
          once: true,
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="relative z-20 bg-surface-900 py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
            54+ EV Models · 22 Brands
          </p>
          <h2 className="font-display mt-2 text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:mt-3 sm:text-5xl">
            How would you like to{" "}
            <span className="text-gradient">explore?</span>
          </h2>
          <p className="mt-3 text-sm text-ink-muted sm:mt-4 sm:text-base">
            Choose how you&apos;d like to discover electric vehicles from our
            comprehensive database of Indian and international EVs.
          </p>
        </div>

        <SpotlightGrid className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2 md:[perspective:1200px]">
          {exploreModes.map((mode) => (
            <SpotlightTiltCard
              key={mode.id}
              className={`bento-card group p-5 sm:p-6 md:p-7 ${mode.span} ${
                mode.id === "brand" ? "min-h-[340px] sm:min-h-[380px] md:min-h-0" : ""
              }`}
              telemetry={mode.telemetry}
              visual={mode.id === "brand" ? <AnimatedBrandCar /> : undefined}
            >
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {mode.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{mode.description}</p>
            </SpotlightTiltCard>
          ))}
        </SpotlightGrid>

        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
            Why Go Electric?
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold sm:text-4xl">
            Benefits that compound every kilometre
          </h3>
          <SpotlightGrid className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyElectric.map((item) => (
              <SpotlightTiltCard
                key={item.title}
                className="bento-card p-5"
                telemetry={item.metric}
              >
                <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </SpotlightTiltCard>
            ))}
          </SpotlightGrid>
        </div>

        <div id="compare" className="mt-24 scroll-mt-28">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
                Head-to-head
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold sm:text-4xl">
                Compare electric cars
              </h3>
            </div>
            <a
              href="#journey"
              className="hidden text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 sm:inline"
            >
              View all comparisons →
            </a>
          </div>

          <SpotlightGrid className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {comparisons.map((pair) => (
              <SpotlightTiltCard
                key={`${pair.left.name}-${pair.right.name}`}
                className="bento-card p-4 sm:p-5"
                tilt
              >
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <CarMini name={pair.left.name} image={pair.left.image} />
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-300 bg-brand-50 font-display text-xs font-bold text-brand-700">
                    VS
                  </div>
                  <CarMini name={pair.right.name} image={pair.right.image} />
                </div>
                <div className="mt-4">
                  <a
                    href="#expert"
                    className="inline-flex text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
                  >
                    Compare now →
                  </a>
                </div>
              </SpotlightTiltCard>
            ))}
          </SpotlightGrid>
        </div>

        <div id="news" className="mt-24 scroll-mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
            Market intelligence
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold sm:text-4xl">
            News to help choose your car
          </h3>
          <SpotlightGrid className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {newsItems.map((item) => (
              <SpotlightTiltCard
                key={item.title}
                className="bento-card p-5 sm:p-6"
                tilt={false}
              >
                <span className="inline-flex rounded-md border border-brand-200 bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  {item.tag}
                </span>
                <h4 className="font-display mt-3 text-lg font-semibold leading-snug text-ink">
                  {item.title}
                </h4>
                <p className="mt-3 text-xs text-ink-dim">
                  By {item.author} · {item.date}
                </p>
              </SpotlightTiltCard>
            ))}
          </SpotlightGrid>
        </div>
      </div>
    </section>
  );
}

function CarMini({ name, image }: { name: string; image: string }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto mb-2 h-20 w-full overflow-hidden rounded-xl bg-surface-850">
        <Image src={image} alt={name} fill className="object-cover" sizes="160px" />
      </div>
      <p className="text-xs font-medium text-ink-muted sm:text-sm">{name}</p>
    </div>
  );
}
