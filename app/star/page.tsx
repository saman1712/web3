import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود به ویژن استار",
};

export default function StarPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-brand-purple">ورود به ویژن استار</h1>
      <p className="mt-4 text-sm leading-8 text-neutral-600">
        باشگاه مشتریان ویژن استار
      </p>
      <p className="mt-6 text-xs text-neutral-400">
        نام برنامه وفاداری در سایت اصلی «سیب استار» بود و در این نسخه به «ویژن استار» تغییر کرده است.
      </p>
    </div>
  );
}
