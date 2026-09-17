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
    <aside className="lg:sticky lg:top-[92px] lg:max-h-[calc(100vh-110px)] lg:overflow-y-auto lg:pl-1">
      <div className="category-rail flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:items-stretch lg:gap-0 lg:overflow-visible">
        {list.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelect(cat.id)}
              className={`cat-stamp relative flex h-[120px] w-[120px] shrink-0 flex-col items-center overflow-hidden rounded-[8px] bg-white px-1 pt-2 text-center leading-4 text-black ${
                isActive ? "is-selected" : ""
              }`}
            >
              {cat.icon ? (
                <span className="relative z-[1] mt-1 block h-[35px] w-[40px]">
                  <Image
                    src={cat.icon}
                    alt=""
                    width={40}
                    height={35}
                    unoptimized
                    className="h-[35px] w-[40px] object-cover"
                  />
                </span>
              ) : (
                <span className="relative z-[1] mt-1 block h-[35px] w-[40px]" />
              )}
              <b
                className={`relative z-[1] mt-[27px] block px-1 text-[14px] font-normal ${
                  cat.id === "diet" ? "!mt-[12px] text-[13px] leading-4" : ""
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
