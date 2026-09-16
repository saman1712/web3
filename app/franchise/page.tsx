import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اخذ نمایندگی",
};

export default function FranchisePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-brand-purple">اخذ نمایندگی</h1>
      <p className="mt-4 text-sm leading-8 text-neutral-600">
        مجموعه رستوران های زنجیره ای پیتزا ویژن در قالب مدل فرنچایز، استانداردهای تأمین، تولید، بهداشت، سرویس‌دهی و تجربه مشتری را به‌صورت یکپارچه در اختیار شرکا قرار می‌دهد.
      </p>
      <form className="mt-8 space-y-3 rounded-card bg-white p-6 shadow-card">
        <input required placeholder="نام و نام خانوادگی" className="w-full rounded-xl border px-3 py-2" />
        <input required placeholder="شهر" className="w-full rounded-xl border px-3 py-2" />
        <input required type="tel" placeholder="شماره تماس" className="w-full rounded-xl border px-3 py-2" />
        <textarea placeholder="توضیحات" className="h-28 w-full rounded-xl border px-3 py-2" />
        <button className="rounded-full bg-brand-purple px-6 py-2 font-semibold text-white">
          ارسال درخواست نمایندگی
        </button>
      </form>
    </div>
  );
}
