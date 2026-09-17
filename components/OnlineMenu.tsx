"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";
import type { CategoryId } from "@/lib/types";
import { CategorySidebar } from "./CategorySidebar";
import { ProductCard } from "./ProductCard";
import { CouponList } from "./CouponList";

export function OnlineMenu({ hideDiscounts = false }: { hideDiscounts?: boolean }) {
  const [active, setActive] = useState<CategoryId>(hideDiscounts ? "italian" : "discounts");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as CategoryId;
    if (hash && categories.some((c) => c.id === hash)) setActive(hash);
  }, []);

  const filtered = useMemo(() => {
    return products.filter(
      (p) => p.category === active || (active === "discounts" && p.featured),
    );
  }, [active]);

  const sectionTitle = categories.find((c) => c.id === active)?.label || "";

  return (
    <div className="mx-auto max-w-[1400px] px-3 py-4 lg:px-8 lg:py-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
        <CategorySidebar active={active} onSelect={setActive} hideDiscounts={hideDiscounts} />

        <div>
          <h2 className="titr mb-6 text-center text-[20px] font-bold text-neutral-800">
            <span>{sectionTitle}</span>
          </h2>
          <div className="productslide grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {!filtered.length && (
            <p className="py-16 text-center text-sm text-neutral-500">موردی یافت نشد.</p>
          )}
          <CouponList />
        </div>
      </div>
    </div>
  );
}
