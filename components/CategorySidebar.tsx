"use client";

import Image from "next/image";
import { useRef } from "react";
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
  const scroller = useRef<HTMLDivElement>(null);

  function scrollByDir(dir: 1 | -1) {
    scroller.current?.scrollBy({ left: dir * -240, behavior: "smooth" });
  }

  return (
    <aside className="relative mb-2">
      <button
        type="button"
        aria-label="قبلی"
        onClick={() => scrollByDir(-1)}
        className="group-nav group-nav-prev absolute right-0 top-1/2 z-10 hidden h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm md:flex"
      />
      <button
        type="button"
        aria-label="بعدی"
        onClick={() => scrollByDir(1)}
        className="group-nav group-nav-next absolute left-0 top-1/2 z-10 hidden h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm md:flex"
      />
      <div
        ref={scroller}
        className="category-rail flex flex-nowrap gap-0 overflow-x-auto px-8 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
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
