"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useShop } from "@/lib/store";

export function AuthModal() {
  const { authOpen, setAuthOpen, setUser } = useShop();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode,
        name,
        mobile,
      }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) {
      setUser({ name: name || "کاربر عزیز", email: data.user.email });
    }
  }

  return (
    <AnimatePresence>
      {authOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAuthOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed inset-x-4 top-[12%] z-[90] mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] bg-white shadow-2xl"
          >
            <div className="relative bg-brand-purple px-6 py-5 text-white">
              <button
                type="button"
                onClick={() => setAuthOpen(false)}
                className="absolute left-4 top-4 text-2xl leading-none"
              >
                ×
              </button>
              <h3 className="text-lg font-bold">ورود به سایت</h3>
              <p className="mt-1 text-xs text-purple-100">کاربر عزیز</p>
            </div>

            <div className="grid grid-cols-2 border-b">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`py-3 text-sm ${mode === "login" ? "border-b-2 border-brand-green font-bold text-brand-purple" : "text-neutral-400"}`}
              >
                ورود
              </button>
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`py-3 text-sm ${mode === "register" ? "border-b-2 border-brand-green font-bold text-brand-purple" : "text-neutral-400"}`}
              >
                عضویت
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-3 p-6">
              {mode === "register" && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام و نام خانوادگی"
                  className="h-12 w-full rounded-full border border-neutral-200 px-4 text-sm outline-none focus:border-brand-purple"
                />
              )}
              <input
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="شماره موبایل"
                inputMode="tel"
                className="h-12 w-full rounded-full border border-neutral-200 px-4 text-sm outline-none focus:border-brand-purple"
              />
              <button
                type="submit"
                className="h-12 w-full rounded-full bg-brand-green font-semibold text-white hover:bg-brand-green-dark"
              >
                {mode === "login" ? "ورود" : "عضویت"}
              </button>
              {message && <p className="text-center text-xs text-brand-purple">{message}</p>}
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
