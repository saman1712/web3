"use client";

import { coupons } from "@/lib/categories";

export function CouponList() {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-bold text-brand-purple">لیست کوپن ها</h2>
      <div className="grid gap-3 md:grid-cols-3">
        {coupons.map((c) => (
          <article
            key={c.id}
            className="rounded-2xl border border-dashed border-brand-green bg-green-50/60 p-4"
          >
            <h3 className="text-sm font-bold text-brand-purple">{c.title}</h3>
            <p className="mt-2 text-xs leading-6 text-neutral-600">{c.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
