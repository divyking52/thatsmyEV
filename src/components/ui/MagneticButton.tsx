"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  radius?: number;
  type?: "button" | "submit";
  as?: "a" | "button";
};

const baseClass =
  "inline-flex items-center justify-center rounded-xl bg-brand-400 px-7 py-3.5 text-sm font-semibold text-slate-900 transition-[background-color,box-shadow] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-300 hover:shadow-[0_0_40px_rgba(142,184,42,0.28)]";

export function MagneticButton({
  children,
  className = "",
  href = "#explore",
  onClick,
  radius = 50,
  type = "button",
  as,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });
  const tag = as ?? (href && type !== "submit" ? "a" : "button");

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(max-width: 767px)").matches) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < radius) {
      x.set(dx * 0.35);
      y.set(dy * 0.35);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { x: springX, y: springY },
    className: `${baseClass} ${className}`,
  };

  if (tag === "button") {
    return (
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        {...shared}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      {...shared}
    >
      {children}
    </motion.a>
  );
}
