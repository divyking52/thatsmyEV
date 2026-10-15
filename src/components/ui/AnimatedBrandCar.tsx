"use client";

export function AnimatedBrandCar() {
  return (
    <div
      className="pointer-events-none relative mt-4 flex min-h-[120px] flex-1 items-end justify-center overflow-hidden pt-3 sm:mt-auto sm:min-h-[160px] sm:pt-6 md:min-h-[220px]"
      aria-hidden
    >
      <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-70 transition-opacity duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 sm:inset-x-8 sm:bottom-6 sm:opacity-0" />
      <div className="absolute bottom-1 left-1/2 h-12 w-[70%] -translate-x-1/2 rounded-[100%] bg-brand-400/20 blur-2xl opacity-60 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 sm:bottom-2 sm:h-16 sm:opacity-0" />

      <svg
        viewBox="0 0 360 140"
        className="brand-car relative z-[1] h-auto w-[92%] max-w-[420px] origin-bottom translate-x-0 opacity-100 transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:w-[88%] sm:translate-x-10 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="180"
          cy="128"
          rx="120"
          ry="6"
          className="fill-brand-500/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0"
        />

        <path
          d="M42 96c4-18 18-28 34-34 22-8 48-18 78-20 36-2 62 4 88 14 18 7 36 10 52 8 8-1 16 4 18 14l4 18c1 6-3 12-9 13H54c-8 0-13-6-12-13z"
          className="fill-slate-800/90"
        />
        <path
          d="M88 64c18-16 42-26 72-28 34-2 58 6 82 18 8 4 14 10 12 18-10 4-28 2-46-2-24-6-48-8-72-4-16 2-32 6-48 4z"
          className="fill-slate-700/80"
        />

        <path
          d="M98 66c14-10 34-18 58-19 22-1 40 4 56 12 4 2 6 6 4 10-18 2-36 0-54-2-20-3-40-4-58-2-4 0-6-2-6 1z"
          className="fill-sky-200/70"
        />
        <path
          d="M218 60c12 5 24 10 34 12 3 1 5 4 3 7-10 1-20 0-30-2-4-1-8-2-10-4 0-4 1-9 3-13z"
          className="fill-sky-100/60"
        />

        <path
          d="M78 88h190"
          stroke="#8EB82A"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-70"
        />

        <ellipse
          cx="318"
          cy="90"
          rx="8"
          ry="5"
          className="fill-brand-300 opacity-80 transition-opacity duration-500 group-hover:opacity-100 sm:opacity-40"
        />
        <path
          d="M326 88h28"
          stroke="#A6CE39"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-60 transition-opacity duration-500 group-hover:opacity-80 sm:opacity-0"
        />

        <rect
          x="48"
          y="86"
          width="10"
          height="6"
          rx="2"
          className="fill-rose-400/80"
        />

        <path
          d="M70 108h210"
          stroke="#A6CE39"
          strokeWidth="4"
          strokeLinecap="round"
          className="opacity-50 blur-[2px] transition-opacity duration-500 group-hover:opacity-70 sm:opacity-0"
        />

        <g className="brand-car-wheel origin-center [transform-box:fill-box]">
          <circle cx="268" cy="108" r="18" className="fill-slate-900" />
          <circle
            cx="268"
            cy="108"
            r="11"
            className="fill-slate-600"
            stroke="#A6CE39"
            strokeWidth="1.5"
          />
          <path
            d="M268 97v22M257 108h22"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        <g className="brand-car-wheel origin-center [transform-box:fill-box]">
          <circle cx="108" cy="108" r="18" className="fill-slate-900" />
          <circle
            cx="108"
            cy="108"
            r="11"
            className="fill-slate-600"
            stroke="#A6CE39"
            strokeWidth="1.5"
          />
          <path
            d="M108 97v22M97 108h22"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        <g className="opacity-80 transition-opacity duration-500 delay-100 group-hover:opacity-100 sm:opacity-0">
          <circle cx="188" cy="42" r="14" className="fill-brand-400" />
          <path
            d="M191 34l-8 10h6l-2 10 10-12h-6z"
            className="fill-slate-900"
          />
        </g>
      </svg>
    </div>
  );
}
