"use client";

import { navLinks } from "@/data/content";
import { mediaAssets } from "@/data/media";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,color] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/82 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-14 max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2.5 sm:min-h-[4.5rem] sm:gap-x-7 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src={mediaAssets.logoLight}
            alt="ThatsmyEV"
            width={140}
            height={36}
            className={`h-7 w-auto transition-[filter] duration-300 sm:h-9 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </a>

        <nav
          className={`hidden items-center gap-5 text-sm font-medium lg:flex ${
            scrolled ? "text-ink-muted" : "text-white/80"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-400 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                scrolled
                  ? "hover:text-brand-700"
                  : "hover:text-brand-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticButton
          href="#expert"
          className="!shrink-0 !px-3 !py-2 text-[11px] sm:!px-4 sm:!py-2.5 sm:text-sm"
        >
          Ask TMEV Expert
        </MagneticButton>
      </div>
    </header>
  );
}
