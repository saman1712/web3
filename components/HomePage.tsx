"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { categories } from "@/lib/categories";
import { useShop } from "@/lib/store";

const heroPizza =
  "https://sib360.com/Content/images/4372/Product/Thumb3/277934/%D9%BE%D9%BE%D8%B1%D9%88%D9%86%DB%8C%20%D8%A7%DB%8C%D8%AA%D8%A7%D9%84%DB%8C%D8%A7%DB%8C%DB%8C%2032.jpg";

const features = [
  { title: "کیفیت", icon: "quality" },
  { title: "سرعت", icon: "speed" },
  { title: "تنوع", icon: "variety" },
  { title: "تازگی", icon: "fresh" },
];

export function HomePage() {
  const router = useRouter();
  const setAddress = useShop((s) => s.setAddress);
  const [street, setStreet] = useState("");
  const [plaque, setPlaque] = useState("");
  const [floor, setFloor] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setAddress({
      mode: "delivery",
      street,
      details: [plaque, floor].filter(Boolean).join("، "),
      branchName: "نزدیک‌ترین شعبه",
    });
    router.push("/online");
  }

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 py-8 lg:grid-cols-2 lg:px-8 lg:py-4">
          <div className="relative order-2 mx-auto aspect-square w-full max-w-[560px] lg:order-1">
            <div className="absolute inset-[8%] rounded-full bg-[#f4eef8]" />
            <Image
              src={heroPizza}
              alt="پیتزا ویژن"
              fill
              unoptimized
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="text-[42px] font-black leading-none text-brand-purple md:text-[56px]">
              سفارش آنلاین غذا
            </h1>
            <p className="mt-3 text-sm text-neutral-500 md:text-base">
              برای ثبت سفارش غذا آدرس خود را انتخاب کنید ....
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-3">
              <input
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="خیابان اصلی و فرعی"
                className="h-12 w-full rounded-full border border-neutral-200 bg-white px-5 text-sm outline-none focus:border-brand-purple"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  value={plaque}
                  onChange={(e) => setPlaque(e.target.value)}
                  placeholder="پلاک"
                  className="h-12 rounded-full border border-neutral-200 px-5 text-sm outline-none focus:border-brand-purple"
                />
                <input
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  placeholder="طبقه"
                  className="h-12 rounded-full border border-neutral-200 px-5 text-sm outline-none focus:border-brand-purple"
                />
              </div>
              <button
                type="submit"
                className="h-12 w-full rounded-full bg-brand-green text-base font-bold text-white transition hover:bg-brand-green-dark"
              >
                تایید آدرس
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-3 px-4 pb-10 sm:grid-cols-4 lg:px-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center rounded-2xl bg-white px-3 py-5 shadow-[0_8px_24px_rgba(100,45,144,0.08)]"
            >
              <span className="mb-2 grid h-12 w-12 place-items-center rounded-full bg-purple-50 text-brand-purple">
                <FeatureIcon name={f.icon} />
              </span>
              <span className="text-sm font-semibold text-brand-purple">{f.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-purple md:text-3xl">
          گروه های غذایی
        </h2>
        <div className="mx-auto grid max-w-[1100px] grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {categories
            .filter((c) => c.id !== "discounts")
            .map((c) => (
              <Link
                key={c.id}
                href={`/online#${c.id}`}
                className="group flex flex-col items-center"
              >
                <span className="relative h-[88px] w-[88px] overflow-hidden rounded-full bg-[#f6f6f6] shadow-sm transition group-hover:scale-105 md:h-[110px] md:w-[110px]">
                  <Image src={c.image} alt={c.label} fill unoptimized className="object-cover" />
                </span>
                <span className="mt-2 text-center text-xs font-medium text-brand-purple md:text-sm">
                  {c.label}
                </span>
              </Link>
            ))}
        </div>
      </section>

      <HomeBlock
        letter="V"
        title="درباره پیتزا ویژن"
        href="/m"
        image={categories.find((c) => c.id === "italian")!.image}
      >
        پیتزا ویژن به‌عنوان یکی از بزرگ‌ترین و شناخته‌شده‌ترین رستوران‌های زنجیره‌ای تخصصی پیتزا در ایران، با شبکه‌ای گسترده از شعب در استان‌های تهران، البرز و سایر شهرهای کشور، تجربه‌ای متفاوت از کیفیت، تنوع و خدمات حرفه‌ای را به مشتریان خود ارائه می‌دهد. این مجموعه با بهره‌گیری از منویی متنوع و به‌روز، تلاش می‌کند پاسخ‌گوی سلایق مختلف باشد و هم‌زمان با استفاده از مواد اولیه استاندارد و باکیفیت، سطحی متمایز از طعم و سلامت را تضمین کند.
      </HomeBlock>

      <HomeBlock
        letter="I"
        title="سفارش آنلاین از ویژن"
        href="/online"
        image={categories.find((c) => c.id === "american")!.image}
        reverse
      >
        با بیش از 50شعبه در سراسر کشور، میزبان سفارشات آنلاین شما هستیم.
        کلیک کنید و همین حالا یک سفارش سریع و خوشمزه از ویژن را تجربه کنید!
      </HomeBlock>

      <HomeBlock
        letter="Z"
        title="دریافت نمایندگی ویژن"
        href="/franchise"
        image={categories.find((c) => c.id === "burger")!.image}
      >
        آیا برای آغاز مسیر موفقیت آماده اید؟ پیتزا ویژن با بیش از 15 سال سابقه‌ی موفق در عرصه‌ی فرانچایز رستوران فست‌فود هم‌زمان با راه‌اندازی حدود 70 شعبه در طول این سال‌ها به یک برند شناخته شده و مورد اعتماد تبدیل شده است. همراه شما هستیم تا با سیستم عملیاتی پایدار و حمایت مستمر تجربه‌ی راه‌اندازی یک کسب و کار هوشمند و پویا را رقم بزنید.
      </HomeBlock>

      <HomeBlock
        letter="N"
        title="فروش سازمانی"
        href="/b2b"
        image={categories.find((c) => c.id === "combo")!.image}
        reverse
      >
        راهکارهای ساده و منعطف فروش سازمانی پیتزا ویژن با هدف کاهش هزینه‌ها و فرآیندهای اجرایی برای سازمان‌های کوچک و بزرگ طی سال‌های گذشته همراه با ایجاد تجربه‌ای امن، شفاف و قابل مدیریت تجربه‌ای یکپارچه و اثربخش برای سازمان‌ها و مخاطب ایجاد کرده است.
      </HomeBlock>
    </div>
  );
}

function HomeBlock({
  letter,
  title,
  href,
  image,
  children,
  reverse,
}: {
  letter: string;
  title: string;
  href: string;
  image: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-12 lg:grid-cols-[auto_1fr_1fr] lg:px-8">
      <div
        className={`hidden text-[120px] font-black leading-none text-[#f3eaf8] lg:block ${reverse ? "lg:order-3" : ""}`}
      >
        {letter}
      </div>
      <div className={reverse ? "lg:order-2" : ""}>
        <h2 className="text-2xl font-bold text-brand-purple">{title}</h2>
        <p className="mt-4 text-sm leading-8 text-neutral-600">{children}</p>
        <Link
          href={href}
          className="mt-6 inline-flex rounded-full bg-brand-green px-6 py-2 text-sm font-semibold text-white hover:bg-brand-green-dark"
        >
          مشاهده بیشتر
        </Link>
      </div>
      <div className={`relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#f6f6f6] ${reverse ? "lg:order-1" : ""}`}>
        <Image src={image} alt={title} fill unoptimized className="object-cover" />
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = "h-6 w-6";
  if (name === "speed") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 1.5M12 5V3" />
      </svg>
    );
  }
  if (name === "variety") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M8 12h8" />
      </svg>
    );
  }
  if (name === "fresh") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 19c4-10 14-12 14-12s-1 11-10 14c0 0-1-1-4-2z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
    </svg>
  );
}
