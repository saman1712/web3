"use client";

import type { Product } from "@/lib/types";
import { useShop } from "@/lib/store";

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useShop((s) => s.addItem);
  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className="mt-8 rounded-full bg-brand-green px-8 py-3 font-semibold text-white hover:bg-brand-green-dark"
    >
      افزودن کالا به سبد خرید
    </button>
  );
}
