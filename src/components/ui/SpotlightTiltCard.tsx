"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";

type SpotlightTiltCardProps = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  visual?: ReactNode;
  telemetry?: {
    label: string;
    value: number;
    unit?: string;
  };
};

export function SpotlightGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  const paintSpotlight = useCallback((clientX: number, clientY: number) => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>(".spotlight-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  }, []);

  return (
    <div
      ref={gridRef}
      className={`spotlight-grid ${className}`}
      onMouseMove={(e) => paintSpotlight(e.clientX, e.clientY)}
    >
      {children}
    </div>
  );
}

export function SpotlightTiltCard({
  children,
  className = "",
  tilt = true,
  visual,
  telemetry,
}: SpotlightTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef(false);
  const isMobile = useRef(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateXRaw = useTransform(mouseY, (y) => {
    const amount = isMobile.current ? 3.5 : 6;
    return (0.5 - y) * 2 * amount;
  });
  const rotateYRaw = useTransform(mouseX, (x) => {
    const amount = isMobile.current ? 3.5 : 6;
    return (x - 0.5) * 2 * amount;
  });

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });
  const rotateY = useSpring(rotateYRaw, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    isMobile.current = window.matchMedia("(max-width: 767px)").matches;
  }, []);

  const updateTilt = (clientX: number, clientY: number) => {
    if (!tilt || reduceMotion.current || isMobile.current || !cardRef.current)
      return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((clientX - rect.left) / rect.width);
    mouseY.set((clientY - rect.top) / rect.height);
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    updateTilt(e.clientX, e.clientY);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`spotlight-card rounded-2xl ${visual ? "flex flex-col" : ""} ${className}`}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="card-glare" aria-hidden />

      {children}

      {telemetry ? (
        <div className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span>{telemetry.label}</span>
            <span className="font-display text-brand-600 normal-case tracking-normal">
              {telemetry.value}
              {telemetry.unit}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200/80">
            <div className="charge-bar h-full w-full rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-200" />
          </div>
          <svg
            className="mt-2 h-6 w-full"
            viewBox="0 0 200 24"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="circuit-line"
              d="M0 12 H40 L52 4 H80 L92 18 H120 L140 8 H170 L200 12"
            />
          </svg>
        </div>
      ) : null}

      {visual}
    </motion.div>
  );
}
