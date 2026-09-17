import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "اخذ نمایندگی",
  description: "توسعه شعب و اعطای نمایندگی پیتزا ویژن",
};

const stats = [
  { value: "+۶۰", label: "شعبه فعال در تهران و شهرستان‌ها" },
  { value: "+۱۵", label: "سال سابقه فعالیت" },
  { value: "۱۰", label: "سال حق بهره‌برداری از برند" },
  { value: "۳۶۰", label: "پشتیبانی قبل و بعد از افتتاح" },
];

const benefits = [
  {
    title: "اعتبار یک برند قابل‌اعتماد",
    text: "بیش از ۱۵ سال سابقه فعالیت و بیش از ۶۰ شعبه فعال در تهران و شهرستان‌ها، پشتوانه همکاری با ویژن است.",
  },
  {
    title: "طراحی دکوراسیون و هویت بصری",
    text: "طراحی دکوراسیون شعب بر پایه الگوهای روز رستوران‌داری دنیا انجام می‌شود؛ با تمرکز همزمان بر جذابیت بصری، آسایش مشتری و سهولت عملیات روزانه تیم شعبه.",
  },
  {
    title: "آموزش جامع نیروها",
    text: "آموزش صفر تا صد توسط تیم آموزشی دفتر مرکزی انجام می‌شود و تا زمانی که تیم شعبه آمادگی لازم را پیدا کند ادامه خواهد داشت.",
  },
  {
    title: "تأمین مواد اولیه",
    text: "دسترسی به پنل اختصاصی تأمین مواد اولیه به‌صورت روزانه، با کیفیت و استاندارد تضمین‌شده.",
  },
  {
    title: "کیفیت پایدار",
    text: "ثبات کیفیت با تأمین یکپارچه مواد اولیه و نظارت منظم بر اجرای استانداردهای تولید و سرویس‌دهی حفظ می‌شود.",
  },
  {
    title: "برنامه فروش و بازاریابی شعبه‌محور",
    text: "در کنار کمپین‌های یکپارچه برند، برای هر شعبه متناسب با موقعیت، ظرفیت بازار و رفتار مشتریان همان محدوده، برنامه فروش و بازاریابی تدوین می‌شود.",
  },
];

const models = [
  {
    title: "شعبه استاندارد",
    badge: "مدل اصلی برند",
    text: "مدل اصلی برند، متمرکز بر سفارش حضوری و آنلاین، مناسب خیابان‌های اصلی، مراکز شهری و مراکز استان‌ها.",
    image: "https://franchise.sib360.com/wp-content/uploads/2026/08/ph-model-standard-1-1024x682.jpg",
  },
  {
    title: "شعبه بیرون‌بر",
    badge: "شروع ساده تر",
    text: "متمرکز بر سفارش آنلاین و تحویل سریع، با متراژ پایین‌تر و سرمایه اولیه کمتر.",
    image: "https://franchise.sib360.com/wp-content/uploads/2026/08/ph-model-takeaway-1-1024x768.jpg",
  },
  {
    title: "شعبه فودکورت",
    badge: "شروع سریع تر",
    text: "حضور در مجتمع‌های تجاری با ترافیک آماده مشتری و عملیات فشرده.",
    image: "https://franchise.sib360.com/wp-content/uploads/2026/08/ph-model-foodcourt-1-1024x769.jpg",
  },
];

const steps = [
  {
    title: "۱. ثبت درخواست و بررسی اولیه",
    text: "درخواست از طریق ۱۶۱۰ یا فرم اخذ نمایندگی ثبت می‌شود؛ شرایط اولیه همکاری بررسی و در جلسه حضوری جزئیات قراردادی و اجرایی مرور خواهد شد.",
  },
  {
    title: "۲. عقد پیش‌قرارداد و زمان‌بندی",
    text: "پس از توافق اولیه، چارچوب همکاری و زمان‌بندی اقدامات مشخص می‌شود و سپس فرایند اجرایی آغاز خواهد شد.",
  },
  {
    title: "۳. پیدا کردن ملک استاندارد",
    text: "انتخاب ملک از سوی نماینده انجام می‌شود و تیم تخصصی ویژن در جست‌وجو، ارزیابی گزینه‌ها و بررسی انطباق ملک با استانداردهای برند همراه شماست.",
  },
  {
    title: "۴. اجرا، تجهیز و آموزش",
    text: "پیمانکاران و تأمین‌کنندگان معرفی می‌شوند؛ تیم ویژن بر اجرای استانداردها نظارت می‌کند و همزمان آموزش جامع نیروها انجام می‌شود.",
  },
  {
    title: "۵. افتتاحیه و آغاز فعالیت",
    text: "افتتاحیه متناسب با ظرفیت موقعیت شعبه برنامه‌ریزی می‌شود و فعالیت شعبه با همراهی و مشاوره تیم پشتیبانی آغاز خواهد شد.",
  },
];

const faqs = [
  {
    q: "۱. مفهوم فرانچایز ویژن چیست؟",
    a: "با دریافت فرانچایز یک برند، علاوه بر کسب اجازه و حق بهره‌برداری از نام و نشان تجاری آن، از مجموعه‌ای از خدمات، امکانات و زیرساخت‌های ویژه نیز بهره‌مند می‌شوید؛ خدماتی که ارائه آن‌ها معمولاً تنها از عهده مجموعه‌های بزرگ، باتجربه و تخصصی برمی‌آید. مجموع این حقوق، خدمات، امکانات و پشتیبانی‌ها، «فرانچایز» نامیده می‌شود. ویژن، بزرگ‌ترین و تنها فرانچایز واقعی فست‌فودهای زنجیره‌ای در ایران است.",
  },
  {
    q: "۲. فرانچایز ویژن برای سرمایه‌گذاری چه افرادی مناسب است؟",
    a: "افرادی که به دنبال راه‌اندازی یک کسب‌وکار پایدار با پشتوانه برند، آموزش و تأمین متمرکز هستند.",
  },
  {
    q: "۳. آیا برای راه‌اندازی شعبه، داشتن تجربه در زمینه رستوران و فست‌فود ضروری است؟",
    a: "خیر. آموزش صفر تا صد توسط تیم دفتر مرکزی انجام می‌شود تا نماینده بدون تجربه قبلی نیز بتواند شعبه را مطابق استاندارد برند اداره کند.",
  },
  {
    q: "۴. با دریافت فرانچایز ویژن چه امکانات و مزایایی در اختیار من قرار می‌گیرد؟",
    a: "حق بهره‌برداری از برند، طراحی دکوراسیون، آموزش نیروها، تأمین مواد اولیه، نظارت کیفیت و برنامه فروش و بازاریابی شعبه‌محور.",
  },
];

export default function FranchisePage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-brand-purple text-white">
        <Image
          src="https://franchise.sib360.com/wp-content/uploads/2026/08/ph-main-banner-1.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-[1100px] px-4 py-20">
          <p className="text-sm text-green-200">توسعه شعب و اعطای نمایندگی</p>
          <h1 className="mt-3 max-w-xl text-3xl font-black leading-snug md:text-5xl">
            پانزده سال تجربه، یک برند قابل‌اعتماد
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/90">
            پیوستن به خانواده ویژن یعنی سرمایه‌گذاری روی برندی که سال‌هاست اعتماد مشتریان را به دست آورده است. از نخستین روز همکاری، یک تیم حرفه‌ای در کنار شماست تا مسیر راه‌اندازی و بهره‌برداری شعبه با استانداردهای شفاف پیش برود.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold">
              شروع مسیر نمایندگی
            </a>
            <a href="tel:1610" className="rounded-full bg-white/15 px-6 py-2.5 text-sm">
              مشاوره رایگان: ۱۶۱۰
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 px-4 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[20px] bg-[#f7f3fb] p-5 text-center">
            <div className="text-3xl font-black text-brand-purple">{s.value}</div>
            <p className="mt-2 text-xs leading-6 text-neutral-600">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#faf7fc] py-12">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="text-sm text-brand-green">مزایای برند</p>
          <h2 className="mt-1 text-2xl font-bold text-brand-purple">
            مزیت‌های رقابتی و ویژگی‌های متمایز فرانچایز
          </h2>
          <p className="mt-2 text-sm text-neutral-500">همراه شما از روز اول تا افتتاح و پس از آن</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <article key={b.title} className="rounded-[20px] bg-white p-5 shadow-card">
                <h3 className="font-bold text-brand-purple">{b.title}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-12">
        <h2 className="text-2xl font-bold text-brand-purple">مدل‌های شعبه</h2>
        <p className="mt-2 text-sm text-neutral-500">مدلی متناسب با موقعیت و بودجه شما</p>
        <p className="mt-1 text-xs text-neutral-400">
          متراژ و الزامات دقیق هر مدل پس از بررسی موقعیت و تأیید مجموعه اعلام می‌شود.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {models.map((m) => (
            <article key={m.title} className="overflow-hidden rounded-[20px] bg-white shadow-card">
              <Image src={m.image} alt={m.title} width={378} height={210} unoptimized className="h-[210px] w-full object-cover" />
              <div className="p-5">
                <span className="text-xs text-brand-green">{m.badge}</span>
                <h3 className="mt-1 font-bold text-neutral-800">{m.title}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#faf7fc] py-12">
        <div className="mx-auto max-w-[1100px] px-4">
          <h2 className="text-2xl font-bold text-brand-purple">مسیر دریافت نمایندگی</h2>
          <p className="mt-2 text-sm text-neutral-500">گام‌به‌گام تا روز افتتاح شعبه پیتزا ویژن شما</p>
          <div className="mt-8 space-y-4">
            {steps.map((s) => (
              <article key={s.title} className="rounded-[20px] bg-white p-5 shadow-card">
                <h3 className="font-bold text-brand-purple">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-12">
        <h2 className="text-2xl font-bold text-brand-purple">سؤالات متداول</h2>
        <p className="mt-2 text-sm text-neutral-500">پاسخ به پرسش‌های رایج شما</p>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-[16px] border border-purple-100 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-neutral-800">{f.q}</summary>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="apply" className="bg-brand-purple py-12 text-white">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-2xl font-bold">درخواست نمایندگی</h2>
          <form className="mt-6 space-y-3">
            <input required placeholder="نام و نام خانوادگی" className="h-12 w-full rounded-xl px-4 text-neutral-800" />
            <input required placeholder="شهر" className="h-12 w-full rounded-xl px-4 text-neutral-800" />
            <input required type="tel" placeholder="شماره تماس" className="h-12 w-full rounded-xl px-4 text-neutral-800" />
            <select className="h-12 w-full rounded-xl px-4 text-neutral-800">
              <option>یک مدل را انتخاب کنید</option>
              <option>شعبه استاندارد</option>
              <option>بیرون‌بر</option>
              <option>فودکورت</option>
            </select>
            <textarea placeholder="توضیحات" className="h-28 w-full rounded-xl px-4 py-3 text-neutral-800" />
            <button type="submit" className="h-12 rounded-full bg-brand-green px-8 font-semibold">
              ارسال درخواست نمایندگی
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
