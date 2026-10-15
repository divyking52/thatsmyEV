"use client";

import {
  brandOrder,
  filterEvModels,
  modelsForBrand,
  type EvModel,
} from "@/data/evCatalog";
import { ChevronDown, RotateCcw, Search } from "lucide-react";
import { useMemo, useState } from "react";

const fieldClass =
  "h-10 w-full rounded-xl border border-slate-200/90 bg-white/90 text-xs text-slate-800 outline-none transition-[border-color,box-shadow] duration-400 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 sm:h-11 sm:text-sm";

export function HeroSearchFilter() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [modelId, setModelId] = useState("");
  const [open, setOpen] = useState(false);

  const brandModels = useMemo(() => modelsForBrand(brand), [brand]);
  const results = useMemo(
    () => filterEvModels(query, brand, modelId),
    [query, brand, modelId],
  );

  const showPanel = open || Boolean(query || brand || modelId);
  const preview = results.slice(0, 5);

  const reset = () => {
    setQuery("");
    setBrand("");
    setModelId("");
    setOpen(false);
  };

  const onBrandChange = (value: string) => {
    setBrand(value);
    setModelId("");
    setOpen(true);
  };

  const selectModel = (ev: EvModel) => {
    setBrand(ev.brand);
    setModelId(ev.id);
    setQuery(`${ev.brand} ${ev.name}`);
    setOpen(true);
  };

  return (
    <div className="hero-search relative z-30 mt-4 w-full max-w-xl sm:mt-5">
      <form
        role="search"
        className="grid grid-cols-1 gap-2 rounded-2xl border border-slate-200/90 bg-white/85 p-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md sm:grid-cols-12 sm:gap-2 sm:p-2.5"
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <label className="relative block sm:col-span-5">
          <span className="sr-only">Search EVs</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search model or brand…"
            className={`${fieldClass} pl-9 pr-3`}
            autoComplete="off"
          />
        </label>

        <label className="relative block sm:col-span-3">
          <span className="sr-only">Brand</span>
          <select
            value={brand}
            onChange={(e) => onBrandChange(e.target.value)}
            onFocus={() => setOpen(true)}
            className={`${fieldClass} appearance-none px-3 pr-9`}
          >
            <option value="">All brands</option>
            {brandOrder.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </label>

        <label className="relative block sm:col-span-3">
          <span className="sr-only">Model</span>
          <select
            value={modelId}
            onChange={(e) => {
              setModelId(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            className={`${fieldClass} appearance-none px-3 pr-9`}
          >
            <option value="">All models</option>
            {brandModels.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </label>

        <button
          type="button"
          onClick={reset}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-600 transition-colors duration-400 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:bg-slate-50 sm:col-span-1 sm:h-11"
          aria-label="Reset filters"
          title="Reset"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span className="sm:hidden">Reset</span>
        </button>
      </form>

      {showPanel ? (
        <div className="absolute bottom-[calc(100%+0.5rem)] left-0 right-0 z-40 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5">
            <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
              {results.length} EV{results.length === 1 ? "" : "s"} match
            </p>
            <button
              type="button"
              className="text-[11px] font-semibold text-brand-700 hover:text-brand-600"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          {preview.length === 0 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-sm font-semibold text-slate-900">No EVs match</p>
              <p className="mt-1 text-xs text-slate-500">
                Try another name, or clear brand / model filters.
              </p>
            </div>
          ) : (
            <ul className="max-h-56 divide-y divide-slate-100 overflow-y-auto">
              {preview.map((ev) => (
                <li key={ev.id}>
                  <button
                    type="button"
                    onClick={() => selectModel(ev)}
                    className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors hover:bg-brand-50/70"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">
                        {ev.brand} {ev.name}
                      </span>
                      <span className="mt-0.5 block text-[11px] text-slate-500">
                        {ev.range} km · {ev.battery} kWh · {ev.seats} seats
                      </span>
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-brand-700">
                      {ev.priceRange.split(" - ")[0]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {results.length > 5 ? (
            <div className="border-t border-slate-100 px-3 py-2.5 text-center text-[11px] text-slate-500">
              +{results.length - 5} more matches — refine brand or model
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
