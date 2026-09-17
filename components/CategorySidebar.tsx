"use client";

import Image from "next/image";
import { categories } from "@/lib/categories";
import type { CategoryId } from "@/lib/types";

export function CategorySidebar({
  active,
  onSelect,
  hideDiscounts = false,
}: {
  active: CategoryId | "all";
  onSelect: (id: CategoryId) => void;
  hideDiscounts?: boolean;
}) {
  const list = hideDiscounts ? categories.filter((c) => c.id !== "discounts") : categories;

  return (
    <aside className="lg:sticky lg:top-[92px] lg:max-h-[calc(100vh-110px)] lg:overflow-y-auto">
      <div className="category-rail flex flex-wrap justify-start gap-0 overflow-x-auto pb-1 lg:overflow-visible">
        {list.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelect(cat.id)}
              className={`cat-stamp relative flex h-[88px] w-[88px] shrink-0 flex-col items-center overflow-hidden rounded-[6px] bg-white px-0.5 pt-1.5 text-center leading-3 text-black ${
                isActive ? "is-selected" : ""
              }`}
            >
              {cat.icon ? (
                <span className="relative z-[1] block h-[26px] w-[30px]">
                  <Image
                    src={cat.icon}
                    alt=""
                    width={30}
                    height={26}
                    unoptimized
                    className="h-[26px] w-[30px] object-cover"
                  />
                </span>
              ) : (
                <span className="relative z-[1] block h-[26px] w-[30px]" />
              )}
              <b
                className={`relative z-[1] mt-[14px] block px-0.5 text-[11px] font-normal leading-3 ${
                  cat.id === "diet" ? "!mt-[8px] text-[10px]" : ""
                }`}
              >
                {cat.label}
              </b>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
