"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useShop } from "@/lib/store";

export function SearchOverlay() {
  const { search, searchOpen, setSearch, setSearchOpen, addItem } = useShop();
  const q = search.trim();
  const results = q
    ? products.filter((p) => p.name.includes(q) || p.description.includes(q)).slice(0, 12)
    : [];

  return (
    <AnimatePresence>
      {searchOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-black/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-4 right-4 top-[88px] z-[75] mx-auto max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b px-4 py-3">
              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="نام غذا را جستجو کنید..."
                className="h-11 w-full bg-transparent text-sm text-neutral-800 outline-none"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="text-xl text-neutral-400">
                ×
              </button>
            </div>
            <div id="searchResualtPage" className="max-h-[60vh] overflow-y-auto">
              {!q && (
                <p className="px-5 py-8 text-center text-sm text-neutral-400">
                  نام غذا را جستجو کنید...
                </p>
              )}
              {q && !results.length && (
                <p className="px-5 py-8 text-center text-sm text-neutral-400">موردی یافت نشد.</p>
              )}
              <ul>
                {results.map((p) => (
                  <li key={p.id} className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3">
                    <Link
                      href={`/product/${p.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex min-w-0 flex-1 items-center gap-3"
                    >
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#f6f6f6]">
                        <Image src={p.image} alt={p.name} fill unoptimized className="object-cover" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-brand-purple">{p.name}</span>
                        <span className="text-xs text-neutral-500">
                          {formatPrice(p.salePrice ?? p.price)} تومان
                        </span>
                      </span>
                    </Link>
                    <button
                      type="button"
                      aria-label="افزودن کالا به سبد خرید"
                      onClick={() => addItem(p)}
                      className="grid h-8 w-8 place-items-center rounded-full bg-brand-green text-white"
                    >
                      +
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
