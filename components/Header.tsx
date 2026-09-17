"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { SearchOverlay } from "./SearchOverlay";
import { useShop, cartCount } from "@/lib/store";

export const navItems = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/franchise", label: "اخذ نمایندگی" },
  { href: "/b2b", label: "فروش سازمانی" },
  { href: "/branches", label: "لیست شعب" },
  { href: "/star", label: "ورود به ویژن استار" },
  { href: "/m", label: "مشاهده منو" },
  { href: "/online", label: "سفارش اینترنتی" },
];

export function Header() {
  const { items, user, setCartOpen, setAuthOpen, setMenuOpen, setUser } = useShop();
  const [mounted, setMounted] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? cartCount(items) : 0;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 rounded-b-[32px] bg-white text-neutral-900 shadow-header">
      <div dir="ltr" className="relative mx-auto flex h-[76px] max-w-[1400px] items-center px-4 lg:px-8">
        <div className="relative z-10 flex items-center gap-1">
          <button
            type="button"
            onClick={() => {
              if (user) setProfileOpen((v) => !v);
              else setAuthOpen(true);
            }}
            className="inline-flex items-center gap-1.5 px-1 py-1 text-[14px] text-brand-purple"
          >
            <UserIcon />
            {!user && (
              <span
                className="hidden sm:inline"
                onClick={(e) => {
                  e.stopPropagation();
                  setAuthOpen(true);
                }}
              >
                عضویت
              </span>
            )}
            <span className="font-medium">{mounted && user ? user.name : "ورود"}</span>
          </button>
          {profileOpen && user && (
            <div className="absolute top-[48px] left-0 z-50 min-w-[180px] rounded-2xl bg-white py-2 text-right shadow-lg" dir="rtl">
              <p className="px-4 py-2 text-sm font-semibold text-brand-purple">{user.name}</p>
              <button
                type="button"
                onClick={() => {
                  setUser(null);
                  setProfileOpen(false);
                }}
                className="block w-full px-4 py-2 text-sm text-neutral-600 hover:bg-purple-50"
              >
                خروج
              </button>
            </div>
          )}
        </div>

        <Link
          href="/"
          aria-label="ویژن"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <Logo />
        </Link>

        <div className="relative z-10 ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-purple"
            aria-label="سبد خرید"
          >
            <CartIcon />
            <span className="absolute -top-0.5 -left-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-green px-1 text-[11px] font-bold text-white">
              {count}
            </span>
          </button>
          <Link
            href="/online"
            className="rounded-full bg-brand-purple px-4 py-2 text-[13px] font-semibold text-white"
          >
            سفارش اینترنتی
          </Link>
          <button
            type="button"
            aria-label="فهرست"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-purple"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      <SearchOverlay />
    </header>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M16.8 6.8a4.4 4.4 0 1 1-8.8 0 4.4 4.4 0 0 1 8.8 0Z" />
      <path d="M4.8 20.7c.4-3.6 3.6-6.3 7.6-6.3s7.2 2.7 7.6 6.3" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden>
      <g transform="scale(-1, 1) translate(-32, 0)">
        <circle cx="22" cy="24" r="2" />
        <circle cx="13" cy="24" r="2" />
        <path d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z" />
      </g>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
    </svg>
  );
}
