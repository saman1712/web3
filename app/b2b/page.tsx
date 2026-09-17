import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "خرید کارت هدیه سازمانی | گیفت کارت ویژن سازمانی",
  description:
    "راهکارهای ساده ومنعطف فروش سازمانی پیتزا ویژن با هدف کاهش هزینه‌ها و فرآیندهای اجرایی برای سازمان‌های کوچک و بزرگ",
};

const methods = [
  {
    src: "https://sib360.com/Content/images/4372/shortcutTab/290776/b2b.jpg",
    alt: "فروش سازمانی",
  },
  {
    src: "https://sib360.com/Content/images/4372/shortcutTab/290778/b2b-01.jpg",
    alt: "کارت هدیه",
  },
  {
    src: "https://sib360.com/Content/images/4372/shortcutTab/290777/b2b-03.jpg",
    alt: "همکاری سازمانی",
  },
];

const clients = [
  "https://sib360.com/Content/images/4372/shortcutTab/291497/bimarestan.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/291509/chakelz.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/291499/gisha.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/291500/logo.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/291501/mili.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/291502/mina.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/292001/sazmannezam.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/291504/selfit.jpg",
  "https://sib360.com/Content/images/4372/shortcutTab/291505/shahrdari.jpg",
];

export default function B2BPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-brand-purple">فروش سازمانی</h1>
          <p className="mt-4 text-sm leading-8 text-neutral-600">
            راهکارهای ساده ومنعطف فروش سازمانی پیتزا ویژن با هدف کاهش هزینه‌ها و فرآیندهای اجرایی برای سازمان‌های کوچک و بزرگ طی سال‌های گذشته همراه با ایجاد تجربه‌ای امن، شفاف و قابل مدیریت تجربه‌ای یکپارچه و اثربخش برای سازمان‌ها و مخاطب ایجاد کرده است.
          </p>
        </div>
        <form action="/api/newsletter" method="post" className="space-y-3 rounded-[20px] bg-[#f7f3fb] p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              نام<span className="text-red-500">*</span>
              <input name="name" required className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3" />
            </label>
            <label className="block text-sm">
              نام خانوادگی<span className="text-red-500">*</span>
              <input name="lastName" required className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3" />
            </label>
            <label className="block text-sm">
              شماره تماس<span className="text-red-500">*</span>
              <input name="phone" required type="tel" className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3" />
            </label>
            <label className="block text-sm">
              نام سازمان
              <input name="org" className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3" />
            </label>
          </div>
          <button className="h-11 rounded-full bg-brand-green px-8 font-semibold text-white">
            ارسال درخواست
          </button>
        </form>
      </section>

      <section className="bg-[#faf7fc] py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-brand-purple">
            روش‌های متنوع همکاری؛ متناسب با نیازهای سازمان شما
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {methods.map((m) => (
              <div key={m.src} className="overflow-hidden rounded-[24px] bg-white shadow-card">
                <Image src={m.src} alt={m.alt} width={272} height={467} unoptimized className="h-auto w-full" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/b2b" className="rounded-full bg-brand-purple px-6 py-2 text-sm font-semibold text-white">
              مشاهده پروپوزال
            </a>
            <a href="tel:02141304000" className="rounded-full border border-brand-purple px-6 py-2 text-sm font-semibold text-brand-purple">
              تماس با ما
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-12">
        <h2 className="mb-8 text-center text-xl font-bold text-neutral-800">
          مجموعه‌هایی که از خدمات ما استفاده می‌کنند:
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {clients.map((src) => (
            <Image key={src} src={src} alt="" width={177} height={100} unoptimized className="h-[70px] w-auto object-contain" />
          ))}
        </div>
      </section>
    </div>
  );
}
