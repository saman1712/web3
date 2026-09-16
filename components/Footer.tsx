"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Logo } from "./Logo";

const socials = [
  { label: "اینستاگرام", href: "https://www.instagram.com/" },
  { label: "لینکدین", href: "https://www.linkedin.com/" },
  { label: "آپارات", href: "https://www.aparat.com/" },
  { label: "بله", href: "https://ble.ir/" },
  { label: "روبیکا", href: "https://rubika.ir/" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setEmail("");
  }

  return (
    <footer className="relative mt-16 overflow-hidden rounded-t-[40px] bg-brand-purple text-white">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute left-1/2 top-0 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-green text-white shadow"
        aria-label="بازگشت به بالا"
      >
        ↑
      </button>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 text-sm leading-7 text-purple-100">
            مجموعه رستوران های زنجیره ای پیتزا ویژن
          </p>
        </div>

        <div className="space-y-3 text-sm leading-7 text-purple-100">
          <p>
            آدرس دفتر مرکزی : خیابان ولیعصر، رو به روی ایستگاه توانیر، نرسیده به
            تقاطع توانیر، برج طلوع، پلاک2486، طبقه6
          </p>
          <p>تلفن: 02141304000</p>
          <p>امور مشتریان : 1610 ( بدون پیش شماره )</p>
          <p>
            ایمیل :{" "}
            <a className="underline decoration-white/40" href="mailto:info@vizhen.com">
              info@vizhen.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">به باشگاه مشتریان ما بپیوندید</h3>
          <form onSubmit={onSubmit} className="flex overflow-hidden rounded-full bg-white">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل"
              className="min-w-0 flex-1 px-4 py-2.5 text-sm text-neutral-800 outline-none"
            />
            <button
              type="submit"
              className="bg-brand-green px-4 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
            >
              عضویت در خبرنامه
            </button>
          </form>
          {message && <p className="mt-2 text-xs text-green-200">{message}</p>}

          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs transition hover:bg-brand-green"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-purple-200">
        <p className="mb-1">تمامی حقوق این وب سایت متعلق به وب سایت شورا و فرهنگ عامه می باشد</p>
        <Link href="https://haftsetare.com" className="hover:text-white">
          طراحی و پیاده سازی توسط هفت ستاره
        </Link>
        <p className="mt-1">Copyright © 2026 Vizhen, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
