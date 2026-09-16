"use client";

import Image from "next/image";
import { categories } from "@/lib/categories";
import type { CategoryId } from "@/lib/types";

export function CategorySidebar({
  active,
  onSelect,
}: {
  active: CategoryId | "all";
  onSelect: (id: CategoryId) => void;
}) {
  return (
    <aside className="lg:sticky lg:top-[92px] lg:h-[calc(100vh-110px)] lg:overflow-y-auto">
      <p className="mb-3 hidden text-sm font-semibold text-brand-purple lg:block">
        همه دسته بندی ها در یک نگاه
      </p>
      <div className="category-rail flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelect(cat.id)}
              className={`flex min-w-[92px] flex-col items-center rounded-[22px] px-2 py-3 transition lg:min-w-0 ${
                isActive
                  ? "bg-brand-purple text-white shadow-card ring-2 ring-brand-green"
                  : "bg-[#6d3a9c] text-white hover:bg-brand-purple"
              }`}
            >
              <span className="relative mb-2 h-16 w-16 overflow-hidden rounded-full bg-white">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="64px"
                  unoptimized
                  className="object-cover"
                />
              </span>
              <span className="px-1 text-center text-[11px] font-medium leading-4">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
