"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { homeFoodGroups } from "@/lib/categories";

const banner =
  "https://sib360.com/Content/images/4372/GalleryPictures/crop/295912/website-banner-v1.0-0506.jpg";
const promoB2b = "https://sib360.com/Content/images/4372/shortcutTab/295908.jpg";
const promoFranchise = "https://sib360.com/Content/images/4372/shortcutTab/295909.jpg";

const aboutBlocks = [
  {
    letter: "V",
    watermark: "VISION",
    title: "درباره پیتزا ویژن",
    href: "/m",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289567/popup-02-mosalastazeh-2.jpg",
    body: `پیتزا ویژن به‌عنوان یکی از بزرگ‌ترین و شناخته‌شده‌ترین رستوران‌های زنجیره‌ای تخصصی پیتزا در ایران، با شبکه‌ای گسترده از شعب در استان‌های تهران، البرز و سایر شهرهای کشور، تجربه‌ای متفاوت از کیفیت، تنوع و خدمات حرفه‌ای را به مشتریان خود ارائه می‌دهد. این مجموعه با بهره‌گیری از منویی متنوع و به‌روز، تلاش می‌کند پاسخ‌گوی سلایق مختلف باشد و هم‌زمان با استفاده از مواد اولیه استاندارد و باکیفیت، سطحی متمایز از طعم و سلامت را تضمین کند.

به تازگی پیتزا ویژن با افتخار، سه محصول جدید و جذاب را به دسته محبوب پیتزاهای آمریکایی مثلثی شکل اضافه کرده است؛ محصولاتی وسوسه‌انگیز با طعم‌هایی خاص که تجربه‌ای تازه و متفاوت را برای علاقه‌مندان به پیتزای آمریکایی رقم می‌زنند:

پیتزا چیکن باربیکیو آمریکایی
ترکیبی لذیذ از تکه‌های مرغ با طعم دودی و دل‌نشین باربیکیو، در کنار پنیر کش‌دار و خمیر تازه؛ انتخابی هیجان‌انگیز برای دوستداران طعم‌های خاص و متفاوت.

پیتزا دونر آلفردو آمریکایی
ترکیبی منحصربه‌فرد از لایه‌های خوش‌طعم دونر گوشت که با سس آلفردوی غلیظ و پنیر پیتزا همراه شده‌اند؛ طعمی غنی، متفاوت و فراموش‌نشدنی در هر برش.

پیتزا قارچ و اسفناج آمریکایی
ترکیبی خوش‌عطر و دلچسب از قارچ و اسفناج تازه، آغشته به سس آلفردوی خامه‌ای؛ انتخابی جذاب برای کسانی که به طعم‌های لطیف، خاص و متفاوت علاقه دارند.

اگر به دنبال تجربه طعمی تازه در دنیای پیتزاهای آمریکایی هستید، محصولات جدید پیتزا ویژن را از دست ندهید.`,
  },
  {
    letter: "I",
    watermark: "VISION",
    title: "سفارش آنلاین از ویژن",
    href: "/online",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289555/popup-02-mosalastazeh.jpg",
    body: `با بیش از 50شعبه در سراسر کشور، میزبان سفارشات آنلاین شما هستیم.
کلیک کنید و همین حالا یک سفارش سریع و خوشمزه از ویژن را تجربه کنید!

With over 50 branches nationwide, we're ready to take your online orders. Click now and experience a quick and delicious order from Vision!`,
  },
  {
    letter: "S",
    watermark: "VISION",
    title: "دریافت نمایندگی ویژن",
    href: "/franchise",
    image: "https://sib360.com/Content/images/4372/shortcutTab/292733/pic02.jpg",
    body: `آیا برای آغاز مسیر موفقیت آماده اید؟

پیتزا ویژن با بیش از 15 سال سابقه‌ی موفق در عرصه‌ی فرانچایز رستوران فست‌فود هم‌زمان با راه‌اندازی حدود 70 شعبه در طول این سال‌ها به یک برند شناخته شده و مورد اعتماد تبدیل شده است. همراه شما هستیم تا با سیستم عملیاتی پایدار و حمایت مستمر تجربه‌ی راه‌اندازی یک کسب و کار هوشمند و پویا را رقم بزنید.

With over 15 years of success in the fast-food franchise industry and the establishment of nearly 70 locations, Pizza Vision has become a recognized and trusted brand. We are here to partner with you, providing a sustainable operational system and ongoing support to help you launch a smart, dynamic, and successful business.`,
  },
  {
    letter: "N",
    watermark: "VISION",
    title: "فروش سازمانی",
    href: "/b2b",
    image: "https://sib360.com/Content/images/4372/shortcutTab/292735/pic04.jpg",
    body: `راهکارهای ساده و منعطف فروش سازمانی پیتزا ویژن با هدف کاهش هزینه‌ها و فرآیندهای اجرایی برای سازمان‌های کوچک و بزرگ طی سال‌های گذشته همراه با ایجاد تجربه‌ای امن، شفاف و قابل مدیریت تجربه‌ای یکپارچه و اثربخش برای سازمان‌ها و مخاطب ایجاد کرده است.`,
  },
];

export function HomePage() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollGroups(dir: 1 | -1) {
    scroller.current?.scrollBy({ left: dir * -280, behavior: "smooth" });
  }

  return (
    <div className="bg-white">
      <section className="mx-auto w-[90%] max-w-[1360px] pt-4 lg:pt-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          <div className="relative overflow-hidden lg:w-[66%]">
            <Link href="/online" className="block">
              <Image
                src={banner}
                alt="پیتزا ویژن"
                width={1360}
                height={450}
                unoptimized
                priority
                className="h-auto w-full object-cover"
              />
            </Link>
            <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
              <Link
                href="/online"
                className="rounded-full bg-white/90 px-6 py-2.5 text-sm font-semibold text-neutral-800 shadow"
              >
                مشاهده بیشتر
              </Link>
              <Link
                href="/m"
                className="rounded-full bg-brand-purple px-6 py-2.5 text-sm font-semibold text-white shadow"
              >
                مشاهده منو
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:w-[32.6%]">
            <Link href="/b2b" className="block overflow-hidden">
              <Image
                src={promoB2b}
                alt="فروش سازمانی"
                width={460}
                height={220}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </Link>
            <Link href="/franchise" className="block overflow-hidden">
              <Image
                src={promoFranchise}
                alt="اخذ نمایندگی"
                width={460}
                height={220}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-10 w-[90%] max-w-[1360px] pb-6">
        <h2 className="food-groups-title mb-6 text-center text-[22px] font-bold text-neutral-800">
          گروه های غذایی
        </h2>
        <div className="relative">
          <button
            type="button"
            aria-label="قبلی"
            onClick={() => scrollGroups(-1)}
            className="group-nav group-nav-prev absolute right-[-8px] top-[70px] z-10 hidden h-[45px] w-[45px] items-center justify-center rounded-full border border-black/10 bg-white shadow-sm md:flex"
          />
          <button
            type="button"
            aria-label="بعدی"
            onClick={() => scrollGroups(1)}
            className="group-nav group-nav-next absolute left-[-8px] top-[70px] z-10 hidden h-[45px] w-[45px] items-center justify-center rounded-full border border-black/10 bg-white shadow-sm md:flex"
          />
          <div
            ref={scroller}
            className="flex gap-2 overflow-x-auto pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {homeFoodGroups.map((c) => (
              <Link
                key={c.id}
                href={`/online#${c.id}`}
                className="flex w-[170px] shrink-0 flex-col items-center px-2"
              >
                <span className="relative h-[170px] w-[170px] overflow-hidden rounded-full bg-[#f6f6f6]">
                  <Image src={c.image} alt={c.label} fill unoptimized className="object-cover" />
                </span>
                <span className="mt-3 text-center text-sm font-medium text-brand-purple">
                  {c.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/m"
              className="inline-flex rounded-full bg-brand-purple px-8 py-2.5 text-sm font-semibold text-white"
            >
              مشاهده منو
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-4">
        {aboutBlocks.map((block, i) => (
          <article
            key={block.letter}
            className={`relative min-h-[420px] overflow-hidden lg:min-h-[560px] ${
              i % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            <div
              className={`backspan absolute inset-y-0 z-0 hidden bg-cover bg-no-repeat lg:block ${
                i % 2 === 0 ? "right-0 bg-right" : "left-0 bg-left"
              }`}
              style={{
                backgroundImage: `url(${block.image})`,
                backgroundSize: "50%",
                backgroundAttachment: "fixed",
                width: "50%",
                backgroundPosition: i % 2 === 0 ? "100% center" : "0 center",
              }}
            />
            <div className="relative z-10 mx-auto grid w-[90%] max-w-[1360px] items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : "lg:col-start-2"}`}>
                <span className="pointer-events-none absolute -top-8 left-0 text-[110px] font-black leading-none text-[#eee6f4] lg:text-[140px]">
                  {block.watermark}
                </span>
                <span className="relative z-10 float-right ml-3 mt-1 text-[72px] font-black leading-none text-[#d9c6e8] lg:text-[96px]">
                  {block.letter}
                </span>
                <h2 className="relative z-10 mb-5 border-b border-neutral-300 pb-3 text-[21px] font-bold text-neutral-800">
                  {block.title}
                </h2>
                <p className="relative z-10 whitespace-pre-line text-justify text-[15px] leading-8 text-neutral-700">
                  {block.body}
                </p>
                <Link
                  href={block.href}
                  className="relative z-10 mt-8 inline-flex w-[132px] items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white"
                >
                  مشاهده بیشتر
                </Link>
              </div>
              <div className={`relative aspect-[4/5] overflow-hidden lg:hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={block.image} alt={block.title} fill unoptimized className="object-cover" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
