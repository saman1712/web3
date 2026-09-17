"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { SearchOverlay } from "./SearchOverlay";
import { useShop, cartCount } from "@/lib/store";

export const navItems = [
  { href: "/online", label: "سفارش اینترنتی", pill: true },
  { href: "/", label: "صفحه اصلی" },
  { href: "/franchise", label: "اخذ نمایندگی" },
  { href: "/b2b", label: "فروش سازمانی" },
  { href: "/branches", label: "لیست شعب" },
  { href: "/star", label: "ورود به ویژن استار" },
  { href: "/m", label: "مشاهده منو" },
];

export function Header() {
  const pathname = usePathname();
  const { items, user, setCartOpen, setAuthOpen, setMenuOpen, setSearchOpen } = useShop();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? cartCount(items) : 0;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white text-neutral-900 shadow-header">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center gap-1 px-3 lg:px-6">
        <button
          type="button"
          aria-label="فهرست"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center text-brand-purple"
        >
          <MenuIcon />
        </button>

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="جستجو"
          className="inline-flex h-11 w-11 items-center justify-center text-brand-purple"
        >
          <SearchIcon />
        </button>

        <nav className="mr-2 hidden flex-1 items-center justify-start gap-0.5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.pill
                  ? "rounded-full bg-brand-green px-3.5 py-1.5 text-[13px] font-semibold text-white"
                  : `rounded-full px-2.5 py-1.5 text-[13px] hover:text-brand-purple ${
                      (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                        ? "font-semibold text-brand-purple"
                        : "text-neutral-800"
                    }`
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mr-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative inline-flex h-11 w-11 items-center justify-center text-brand-purple"
            aria-label="سبد خرید"
          >
            <CartIcon />
            <span className="absolute -top-0.5 -left-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-green px-1 text-[11px] font-bold text-white">
              {count}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setAuthOpen(true)}
            className="inline-flex h-10 items-center rounded-full bg-brand-purple px-5 text-sm font-medium text-white"
          >
            {user ? user.name : "ورود"}
          </button>

          <Link href="/" aria-label="ویژن" className="shrink-0">
            <Logo variant="light" />
          </Link>
        </div>
      </div>
      <SearchOverlay />
    </header>
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </svg>
  );
}
