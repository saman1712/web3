"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useShop } from "@/lib/store";
import { branches } from "@/lib/categories";

export function AddressModal() {
  const { addressOpen, setAddressOpen, setAddress } = useShop();
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [street, setStreet] = useState("");
  const [details, setDetails] = useState("");
  const [branchName, setBranchName] = useState(branches[0].name);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setAddress({
      mode,
      street,
      details,
      branchName: mode === "pickup" ? branchName : "نزدیک‌ترین شعبه",
    });
  }

  return (
    <AnimatePresence>
      {addressOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAddressOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            className="fixed inset-x-4 top-[8%] z-[90] mx-auto max-h-[84vh] max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h6 className="text-lg font-bold text-brand-purple">انتخاب آدرس</h6>
              <button type="button" onClick={() => setAddressOpen(false)}>
                ×
              </button>
            </div>

            <div className="mb-5 grid grid-cols-2 overflow-hidden rounded-full bg-purple-50 p-1 text-sm">
              <button
                type="button"
                onClick={() => setMode("delivery")}
                className={`rounded-full py-2 ${mode === "delivery" ? "bg-brand-green text-white" : ""}`}
              >
                ارسال با پیک
              </button>
              <button
                type="button"
                onClick={() => setMode("pickup")}
                className={`rounded-full py-2 ${mode === "pickup" ? "bg-brand-green text-white" : ""}`}
              >
                دریافت حضوری
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {mode === "delivery" ? (
                <>
                  <p className="text-sm text-neutral-600">
                    برای مشاهده نزدیک ترین شعبه به شما ابتدا موقعیت تان را مشخص کنید:
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setStreet("موقعیت فعلی (نمونه) — خیابان ولیعصر")
                    }
                    className="rounded-full bg-brand-purple px-4 py-2 text-sm text-white"
                  >
                    موقعیت من
                  </button>
                  <label className="block text-sm">
                    آدرس خود را بدون ذکر شماره پلاک و طبقه را وارد نمایید:
                    <input
                      required
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="mt-1 w-full rounded-xl border px-3 py-2"
                    />
                  </label>
                  <label className="block text-sm">
                    جزئیات آدرس شامل پلاک، طبقه و واحد را وارد نمایید:
                    <input
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="mt-1 w-full rounded-xl border px-3 py-2"
                    />
                  </label>
                  <p className="text-xs leading-6 text-neutral-500">
                    توجه: با توجه به اینکه هزینه و زمان ارسال بر اساس موقعیت مکانی انتخاب شده محاسبه میشود، عدم تطابق موقعیت جغرافیایی با آدرس درج شده باعث افزایش زمان و هزینه ی ارسال خواهد شد.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm text-neutral-600">
                    شما میتوانید با انتخاب یکی از شعبات زیر با مراجعه حضوری سفارش خود را دریافت نمایید:
                  </p>
                  <select
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    className="w-full rounded-xl border px-3 py-2 text-sm"
                  >
                    {branches.map((b) => (
                      <option key={b.name}>{b.name}</option>
                    ))}
                  </select>
                </>
              )}

              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500">
                <p>هزینه ی ارسال: رایگان</p>
                <p>نام شعبه: {mode === "pickup" ? branchName : "شعبه مرکزی"}</p>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-green py-3 font-semibold text-white"
              >
                تایید آدرس
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
