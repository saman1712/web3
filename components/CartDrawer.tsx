"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useShop, cartCount, cartTotal } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import { FormEvent, useState } from "react";

export function CartDrawer() {
  const { items, cartOpen, setCartOpen, setQty, removeItem, clearCart, address, setAddressOpen } =
    useShop();
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const count = cartCount(items);
  const total = cartTotal(items);

  async function submitOrder(e: FormEvent) {
    e.preventDefault();
    if (!items.length) return;
    if (!address) {
      setAddressOpen(true);
      return;
    }
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, address, note, total }),
    });
    const data = await res.json();
    setStatus(data.message);
    if (res.ok) {
      clearCart();
      setNote("");
    }
  }

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <h3 className="text-lg font-bold text-brand-purple">سبد خرید</h3>
              <button type="button" onClick={() => setCartOpen(false)} className="text-xl">
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {!count ? (
                <p className="py-10 text-center text-sm text-neutral-500">سبد خرید خالی است.</p>
              ) : (
                <ul className="space-y-4">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-3 border-b pb-3">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                        <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{product.name}</p>
                        <p className="text-xs text-neutral-500">
                          {formatPrice(product.salePrice ?? product.price)} تومان
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            className="h-7 w-7 rounded-full bg-purple-100"
                            onClick={() => setQty(product.id, qty - 1)}
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm">{qty}</span>
                          <button
                            className="h-7 w-7 rounded-full bg-brand-green text-white"
                            onClick={() => setQty(product.id, qty + 1)}
                          >
                            +
                          </button>
                          <button
                            className="mr-auto text-xs text-red-500"
                            onClick={() => removeItem(product.id)}
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <form onSubmit={submitOrder} className="border-t p-5">
              <p className="mb-2 text-sm">
                هزینه ی ارسال: <b>رایگان</b>
              </p>
              <p className="mb-3 text-base font-bold">
                جمع کل: {formatPrice(total)} تومان
              </p>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="توضیحات سفارش"
                className="mb-3 h-16 w-full rounded-xl border p-2 text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setAddressOpen(true)}
                className="mb-2 w-full rounded-full border border-brand-purple py-2 text-sm text-brand-purple"
              >
                {address ? `آدرس: ${address.street || address.branchName}` : "ابتدا آدرس را انتخاب کنید"}
              </button>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-green py-3 font-semibold text-white hover:bg-brand-green-dark"
              >
                ثبت سفارش
              </button>
              {status && <p className="mt-2 text-center text-xs text-brand-purple">{status}</p>}
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
