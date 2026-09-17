"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "./Header";
import { useShop } from "@/lib/store";

export function NavDrawer() {
  const { menuOpen, setMenuOpen, setAuthOpen, setSearchOpen, user, setUser } = useShop();

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed top-0 right-0 z-[90] flex h-full w-[86%] max-w-[360px] flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between rounded-b-[28px] bg-brand-purple px-5 py-6 text-white">
              <h3 className="text-lg font-bold">فهرست</h3>
              <button type="button" onClick={() => setMenuOpen(false)} className="text-3xl leading-none">
                ×
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-purple-50 px-6 py-3.5 text-sm text-neutral-800 hover:bg-purple-50 hover:text-brand-purple"
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-purple-50 px-6 py-3.5 text-sm text-brand-purple"
                  >
                    پروفایل کاربری
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setUser(null);
                      setMenuOpen(false);
                    }}
                    className="block w-full px-6 py-3.5 text-right text-sm text-[#b81b25]"
                  >
                    خروج از سیستم
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setAuthOpen(true);
                  }}
                  className="block w-full px-6 py-3.5 text-right text-sm text-brand-purple"
                >
                  ورود / عضویت
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="block w-full px-6 py-3.5 text-right text-sm text-neutral-800"
              >
                جستجو
              </button>
            </nav>
            <p className="px-6 py-4 text-xs text-neutral-400">منو دسترسی</p>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
