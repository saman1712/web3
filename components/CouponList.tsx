"use client";

import { coupons } from "@/lib/categories";

export function CouponList() {
  return (
    <section className="couponList_wrapper mt-4">
      <label className="coupon-title relative mb-3 block pr-12 text-[1.2rem] font-bold leading-8 text-neutral-800">
        لیست کوپن ها
      </label>
      <div className="couponContainer mx-auto flex w-[90%] max-w-[1360px] flex-wrap justify-start">
        {coupons.map((c, i) => (
          <article
            key={c.id}
            className={`coupon-ticket relative mb-5 ml-5 w-[31.3%] min-w-[220px] overflow-hidden py-6 pl-9 pr-[92px] max-md:ml-0 max-md:w-full ${
              i % 2 === 1 ? "is-purple" : "is-green"
            }`}
          >
            <i className="circle right pointer-events-none absolute -top-[27px] right-[16%] h-10 w-10 rounded-full bg-white" />
            <i className="circle left pointer-events-none absolute -bottom-[27px] right-[16%] h-10 w-10 rounded-full bg-white" />
            <span className="coupon-icon" aria-hidden />
            <span className="title relative z-[1] mb-1.5 block text-right text-base font-bold text-white">
              {c.title}
            </span>
            <span className="relative z-[1] block max-h-[42px] overflow-hidden whitespace-pre-line text-right text-sm leading-5 text-white/90">
              {c.description}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
