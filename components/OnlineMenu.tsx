"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";
import type { CategoryId } from "@/lib/types";
import { CategorySidebar } from "./CategorySidebar";
import { ProductCard } from "./ProductCard";
import { SearchBox } from "./SearchBox";
import { CouponList } from "./CouponList";
import { useShop } from "@/lib/store";

export function OnlineMenu() {
  const [active, setActive] = useState<CategoryId>("discounts");
  const search = useShop((s) => s.search);
  const setAddressOpen = useShop((s) => s.setAddressOpen);

  const filtered = useMemo(() => {
    const q = search.trim();
    return products.filter((p) => {
      const inCat = p.category === active || (active === "discounts" && p.featured);
      const inSearch = !q || p.name.includes(q) || p.description.includes(q);
      if (q) return inSearch;
      return inCat;
    });
  }, [active, search]);

  const sectionTitle = search.trim()
    ? "نتایج جستجو"
    : categories.find((c) => c.id === active)?.label || "";

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h4 className="text-xl font-bold text-brand-purple">سفارش آنلاین غذا</h4>
          <h3 className="mt-1 text-sm text-neutral-500">
            برای ثبت سفارش غذا آدرس خود را انتخاب کنید ....
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setAddressOpen(true)}
          className="h-11 w-fit rounded-full bg-brand-purple px-5 text-sm font-semibold text-white hover:bg-brand-purple-dark"
        >
          انتخاب آدرس
        </button>
      </div>
      <div className="mb-4 w-full lg:max-w-md lg:mr-auto">
        <SearchBox />
      </div>

      <div className="mb-6 flex gap-3 overflow-x-auto pb-1">
        {["ارسال رایگان", "'نوشابه قوطی کوکا کولا' رایگان", "%10 تخفیف اقلام منتخب"].map(
          (label) => (
            <div
              key={label}
              className="whitespace-nowrap rounded-2xl bg-brand-green px-4 py-2 text-xs font-semibold text-white"
            >
              {label}
            </div>
          ),
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[150px_1fr]">
        <CategorySidebar active={active} onSelect={setActive} />

        <div>
          <h2 className="mb-4 text-lg font-bold text-brand-purple">{sectionTitle}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {!filtered.length && (
            <p className="py-16 text-center text-sm text-neutral-500">
              موردی یافت نشد.
            </p>
          )}
          <CouponList />
        </div>
      </div>
    </div>
  );
}
