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
    <aside className="lg:sticky lg:top-[96px] lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
      <p className="mb-3 hidden text-[13px] font-semibold text-brand-purple lg:block">
        همه دسته بندی ها در یک نگاه
      </p>
      <div className="category-rail flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:gap-3">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelect(cat.id)}
              className={`relative flex min-w-[96px] flex-col items-center rounded-[22px] bg-brand-purple px-2 py-3 text-white transition lg:min-w-0 lg:h-[120px] ${
                isActive ? "ring-2 ring-brand-green" : "opacity-95 hover:opacity-100"
              }`}
            >
              <span className="relative mb-2 h-[52px] w-[52px] overflow-hidden rounded-full bg-white shadow-sm lg:h-[56px] lg:w-[56px]">
                <Image src={cat.image} alt={cat.label} fill sizes="56px" unoptimized className="object-cover" />
              </span>
              <span className="relative px-1 text-center text-[11px] font-medium leading-4 text-white">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
