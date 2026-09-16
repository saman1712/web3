import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خرید کارت هدیه سازمانی | گیفت کارت ویژن سازمانی",
};

export default function B2BPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-brand-purple">فروش سازمانی</h1>
      <p className="mt-4 text-sm leading-8 text-neutral-600">
        خرید کارت هدیه سازمانی | گیفت کارت ویژن سازمانی
      </p>
      <form
        action="/api/newsletter"
        method="post"
        className="mt-8 space-y-3 rounded-card bg-purple-50 p-6"
      >
        <input name="name" required placeholder="نام سازمان" className="w-full rounded-xl border px-3 py-2" />
        <input name="email" type="email" required placeholder="ایمیل" className="w-full rounded-xl border px-3 py-2" />
        <input name="phone" placeholder="تلفن" className="w-full rounded-xl border px-3 py-2" />
        <textarea name="message" placeholder="توضیحات" className="h-28 w-full rounded-xl border px-3 py-2" />
        <button className="rounded-full bg-brand-green px-6 py-2 font-semibold text-white">
          ارسال درخواست
        </button>
      </form>
    </div>
  );
}
