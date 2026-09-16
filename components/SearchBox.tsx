"use client";

import { useShop } from "@/lib/store";

export function SearchBox() {
  const { search, setSearch } = useShop();
  return (
    <div className="relative w-full">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="نام غذا را جستجو کنید..."
        className="h-12 w-full rounded-full border border-purple-100 bg-white px-5 pl-12 text-sm outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
      />
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-purple">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3-3" />
        </svg>
      </span>
    </div>
  );
}
