"use client";

import { faqs, learnCards, metrics } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Odometer } from "@/components/ui/Odometer";
import {
  SpotlightGrid,
  SpotlightTiltCard,
} from "@/components/ui/SpotlightTiltCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MetricsFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.from(".metric-cell", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".metrics-strip",
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative z-30">
      <div className="metrics-strip relative z-20 border-y border-slate-200 bg-surface-900 py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-6 sm:px-8">
          {metrics.map((m) => (
            <div key={m.label} className="metric-cell text-center sm:text-left">
              <Odometer
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                className="font-display text-3xl font-semibold text-brand-600 sm:text-5xl"
              />
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-ink-muted sm:mt-2 sm:text-xs sm:tracking-[0.18em]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="learn"
        className="relative z-20 bg-surface-950 py-16 scroll-mt-24 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
            Your EV journey starts here
          </p>
          <h2 className="font-display mt-2 max-w-2xl text-[1.75rem] font-semibold sm:mt-3 sm:text-5xl">
            Stay ahead of the{" "}
            <span className="text-gradient">EV revolution</span>
          </h2>
          <SpotlightGrid className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {learnCards.map((card) => (
              <SpotlightTiltCard key={card.title} className="p-6">
                <h3 className="font-display text-xl font-semibold">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{card.description}</p>
                <a
                  href="#expert"
                  className="mt-6 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-600"
                >
                  {card.cta} →
                </a>
              </SpotlightTiltCard>
            ))}
          </SpotlightGrid>

          <div
            id="expert"
            className="glass-panel mt-10 scroll-mt-28 rounded-3xl border-brand-200 bg-gradient-to-b from-brand-50 to-white p-8 sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                  Free expert callback
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold sm:text-3xl">
                  We get you the biggest discounts on your purchase
                </h3>
                <p className="mt-3 max-w-xl text-sm text-ink-muted">
                  Join the ThatsmyEV Club newsletter and get weekly updates on
                  launches, exclusive deals, and industry insights.
                </p>
              </div>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thanks! A ThatsmyEV specialist will reach out shortly.",
                  );
                }}
              >
                <input
                  type="tel"
                  required
                  placeholder="Phone or WhatsApp number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-[border-color] duration-400 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] placeholder:text-ink-dim focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
                <MagneticButton as="button" type="submit" className="w-full">
                  Request callback
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="faq" className="relative z-20 bg-surface-900 py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-center text-3xl font-semibold sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-surface-850"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="font-medium text-ink">{faq.q}</span>
                    <span className="text-brand-600">{open ? "−" : "+"}</span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky curtain footer */}
      <div className="relative z-10 h-[min(70vh,640px)] sm:h-[70vh]">
        <footer className="sticky bottom-0 flex min-h-[min(70vh,640px)] flex-col justify-end overflow-hidden border-t border-slate-200 bg-surface-950 sm:min-h-[70vh]">
          <div className="ambient-mesh bottom-[-30%] left-1/2 -translate-x-1/2 opacity-90" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col items-start justify-between gap-6 sm:gap-10 lg:flex-row lg:items-end">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
                  ThatsmyEV
                </p>
                <h2 className="font-display mt-3 text-[2rem] font-semibold tracking-[-0.03em] sm:mt-4 sm:text-6xl">
                  Driving the future,{" "}
                  <span className="text-gradient">today</span>
                </h2>
                <p className="mt-4 text-ink-muted">
                  Your trusted source for electric vehicle research, comparison,
                  and purchases across India.
                </p>
              </div>
              <MagneticButton href="#explore" className="text-base">
                Find Your Perfect EV
              </MagneticButton>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 text-sm text-ink-muted md:grid-cols-4">
              <FooterCol
                title="Explore"
                links={["Brands", "Compare", "EV Sales", "Reviews", "Blogs"]}
              />
              <FooterCol
                title="Resources"
                links={[
                  "EV Guide",
                  "Buying Guide",
                  "Learn About EVs",
                  "EV Charging",
                ]}
              />
              <FooterCol
                title="Company"
                links={[
                  "About Us",
                  "Careers",
                  "Contact",
                  "Partners",
                  "ThatsmyEV Club",
                ]}
              />
              <FooterCol
                title="Legal"
                links={[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                ]}
              />
            </div>

            <p className="mt-10 text-xs text-ink-dim">
              © 2026 ThatsmyEV. All rights reserved. · info@thatsmyev.com
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#explore"
              className="transition-colors hover:text-brand-700"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
