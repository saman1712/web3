"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useShop } from "@/lib/store";

export function AuthModal() {
  const { authOpen, setAuthOpen, setUser } = useShop();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, name, email, password }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) {
      setUser({ name: data.user.name, email: data.user.email });
    }
  }

  return (
    <AnimatePresence>
      {authOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAuthOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="fixed inset-x-4 top-[18%] z-[90] mx-auto max-w-md rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex gap-2 rounded-full bg-purple-50 p-1">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`flex-1 rounded-full py-2 text-sm ${mode === "login" ? "bg-brand-purple text-white" : ""}`}
              >
                ورود به سایت
              </button>
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`flex-1 rounded-full py-2 text-sm ${mode === "register" ? "bg-brand-purple text-white" : ""}`}
              >
                عضویت
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {mode === "register" && (
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام"
                  className="w-full rounded-xl border px-3 py-2 text-sm"
                />
              )}
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل"
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور"
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-brand-green py-3 font-semibold text-white"
              >
                {mode === "login" ? "ورود" : "ثبت نام"}
              </button>
              {message && <p className="text-center text-xs text-brand-purple">{message}</p>}
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
