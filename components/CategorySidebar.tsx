"use client";

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
        className="category-rail flex flex-nowrap overflow-x-auto overflow-y-hidden px-2 pb-1 md:px-8"
      >
        {list.map((cat) => {
          const isActive = active === cat.id;
          const twoLine = cat.label.length > 12;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelect(cat.id)}
              className={`cat-stamp ${isActive ? "is-selected" : ""}`}
            >
              <span className="gpImg_wrapper">
                {cat.icon ? (
                  <img src={cat.icon} alt="" width={40} height={35} />
                ) : (
                  <DiscountSeal />
                )}
              </span>
              <b className={twoLine ? "two-line-text" : undefined}>{cat.label}</b>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function DiscountSeal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-hidden>
      <path
        fill="#000"
        d="M17.9 5.39c-.58.28-1.12.73-1.86 1.37l-.12.1a3.8 3.8 0 0 1-2.33.98l-.15.01c-.97.08-1.67.13-2.28.35a4.3 4.3 0 0 0-1.83 1.15 4.3 4.3 0 0 0-1.15 1.83c-.21.61-.27 1.31-.34 2.28l-.01.15a3.8 3.8 0 0 1-.98 2.33l-.1.12c-.64.74-1.09 1.28-1.37 1.86a4.9 4.9 0 0 0 0 4.22c.28.58.73 1.12 1.37 1.86l.1.12c.6.7.89 1.38.96 2.32l.01.15c.08.97.13 1.67.35 2.28.24.69.64 1.31 1.15 1.83s1.14.91 1.83 1.15c.61.21 1.31.27 2.28.34l.15.01c.93.07 1.61.34 2.33.96l.12.1c.74.64 1.28 1.09 1.86 1.37a4.9 4.9 0 0 0 4.22 0c.58-.28 1.12-.73 1.86-1.37l.12-.1c.7-.6 1.38-.89 2.32-.96l.15-.01c.97-.08 1.67-.13 2.28-.35.69-.24 1.31-.64 1.83-1.15s.91-1.14 1.15-1.83c.21-.61.27-1.31.34-2.28l.01-.15c.07-.93.34-1.61.96-2.33l.1-.12c.64-.74 1.09-1.28 1.37-1.86a4.9 4.9 0 0 0 0-4.22c-.28-.58-.73-1.12-1.37-1.86l-.1-.12a3.8 3.8 0 0 1-.98-2.33l-.01-.15c-.08-.97-.13-1.67-.35-2.28a4.3 4.3 0 0 0-1.15-1.83 4.3 4.3 0 0 0-1.83-1.15c-.61-.21-1.31-.27-2.28-.34l-.15-.01a3.8 3.8 0 0 1-2.33-.98l-.12-.1c-.74-.64-1.28-1.09-1.86-1.37a4.9 4.9 0 0 0-4.22 0Zm7.66 9.74a1.1 1.1 0 0 1 .2 1.54l-5.29 7.33a2.6 2.6 0 0 1-3.96.19l-2.22-2.53a1.1 1.1 0 1 1 1.65-1.45l2.21 2.53a.3.3 0 0 0 .39.07.3.3 0 0 0 .12-.1l5.29-7.33a1.1 1.1 0 0 1 1.54-.25Z"
      />
    </svg>
  );
}
