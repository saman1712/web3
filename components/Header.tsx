"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useShop, cartCount } from "@/lib/store";

const nav = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/franchise", label: "اخذ نمایندگی" },
  { href: "/b2b", label: "فروش سازمانی" },
  { href: "/branches", label: "لیست شعب" },
  { href: "/star", label: "ورود به ویژن استار", extra: true },
  { href: "/m", label: "مشاهده منو" },
  { href: "/online", label: "سفارش اینترنتی", pill: true },
];

export function Header() {
  const pathname = usePathname();
  const { items, user, setCartOpen, setAuthOpen } = useShop();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? cartCount(items) : 0;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white shadow-header">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center gap-2 px-4 lg:gap-3 lg:px-8">
        <Link href="/" aria-label="ویژن" className="shrink-0">
          <Logo />
        </Link>

        <button
          type="button"
          onClick={() => setAuthOpen(true)}
          className="hidden sm:inline-flex h-10 shrink-0 items-center rounded-full bg-brand-purple px-5 text-sm font-medium text-white transition hover:bg-brand-purple-dark"
        >
          {user ? user.name : "عضویتورود"}
        </button>

        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-brand-purple transition hover:bg-purple-50"
          aria-label="سبد خرید"
        >
          <CartIcon />
          <span className="absolute -top-0.5 -left-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-green px-1 text-[11px] font-bold text-white">
            {count}
          </span>
        </button>

        <nav className="mr-auto hidden items-center gap-1 lg:flex">
          {nav
            .filter((n) => !n.extra)
            .map((item) => {
              const active = item.pill
                ? pathname === "/online"
                : item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    active
                      ? "rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
                      : "rounded-full px-3 py-2 text-sm text-neutral-800 transition hover:text-brand-purple"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>

        <button
          type="button"
          className="mr-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-purple lg:hidden"
          aria-label="فهرست"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon />
        </button>
      </div>

      {open && (
        <div className="border-t border-purple-100 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm hover:bg-purple-50"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setAuthOpen(true);
              }}
              className="rounded-xl px-3 py-2 text-right text-sm text-brand-purple sm:hidden"
            >
              عضویتورود
            </button>
          </div>
        </div>
      )}
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
