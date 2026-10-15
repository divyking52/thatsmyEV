"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type OdometerProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function Odometer({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: OdometerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useGSAP(
    () => {
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 1.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          const formatted =
            decimals > 0 ? obj.n.toFixed(decimals) : Math.round(obj.n).toString();
          setDisplay(`${prefix}${formatted}${suffix}`);
        },
      });
    },
    { dependencies: [value, prefix, suffix, decimals] },
  );

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
