"use client";

import { coupons } from "@/lib/categories";

export function CouponList() {
  return (
    <section className="couponList_wrapper mt-10">
      <h2 className="relative mb-5 pr-12 text-lg font-bold text-brand-purple">
        <span className="absolute right-0 top-0 h-9 w-9 rounded-full bg-[radial-gradient(circle,#642d90_0%,transparent_70%)] opacity-80" />
        لیست کوپن ها
      </h2>
      <div className="couponContainer flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {coupons.map((c, i) => (
          <article
            key={c.id}
            className="relative min-w-[260px] overflow-hidden rounded-2xl px-6 py-5 text-white lg:min-w-0"
            style={{ background: i % 2 === 0 ? "#62be4b" : "#642d90" }}
          >
            <i className="circle right pointer-events-none absolute -top-5 right-[16%] h-10 w-10 rounded-full bg-white" />
            <i className="circle left pointer-events-none absolute -bottom-5 right-[16%] h-10 w-10 rounded-full bg-white" />
            <span className="title block text-sm font-bold">{c.title}</span>
            <span className="mt-2 block text-xs leading-6 text-white/90">{c.description}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
