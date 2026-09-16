import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ویژن",
};

/** Lightweight stand-in for the original marketing homepage (`/`). */
export default function HomeLanding() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-4xl font-extrabold text-brand-purple md:text-5xl">ویژن</h1>
          <p className="mt-4 max-w-xl text-sm leading-8 text-neutral-600">
            سفارش آنلاین غذا از فست فودهای زنجیره ای پیتزا ویژن | ارزان تر از همه جا در سراسر تهران، یزد و شیراز | پیتزا آمریکایی، پیتزا ایتالیایی، برگرها، ساندویچ، گرند تست
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/online"
              className="rounded-full bg-brand-green px-8 py-3 font-semibold text-white hover:bg-brand-green-dark"
            >
              سفارش اینترنتی
            </Link>
            <Link
              href="/m"
              className="rounded-full border border-brand-purple px-8 py-3 font-semibold text-brand-purple"
            >
              مشاهده منو
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-[40px] bg-gradient-to-br from-brand-purple to-brand-green p-1">
          <div className="flex h-full items-center justify-center rounded-[36px] bg-white text-6xl font-black text-brand-purple">
            ویژن
          </div>
        </div>
      </div>
    </div>
  );
}
