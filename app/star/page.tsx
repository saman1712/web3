"use client";

import { FormEvent, useState } from "react";
import { useShop } from "@/lib/store";

export default function StarPage() {
  const setUser = useShop((s) => s.setUser);
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "login", mobile }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setUser({ name: "عضو ویژن استار", email: data.user?.email || mobile });
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <div className="rounded-[28px] bg-white p-8 text-center shadow-card">
        <p className="text-sm text-brand-green">باشگاه مشتریان</p>
        <h1 className="mt-2 text-2xl font-bold text-brand-purple">ورود به ویژن استار</h1>
        <p className="mt-4 text-sm leading-8 text-neutral-600">
          امتیاز بگیرید، از تخفیف‌های اختصاصی استفاده کنید و سفارش‌های خود را سریع‌تر ثبت کنید.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-3 text-right">
          <input
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="شماره موبایل"
            className="h-12 w-full rounded-full border border-neutral-200 px-5 text-sm outline-none focus:border-brand-purple"
          />
          <button className="h-12 w-full rounded-full bg-brand-green font-semibold text-white">
            ورود به ویژن استار
          </button>
        </form>
        {message ? <p className="mt-3 text-sm text-brand-purple">{message}</p> : null}
      </div>
    </div>
  );
}
