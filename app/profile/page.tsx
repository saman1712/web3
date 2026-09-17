"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useShop } from "@/lib/store";
import { formatPrice } from "@/lib/format";

type Panel = "view" | "info" | "phone" | "password";

export default function ProfilePage() {
  const { user, address, setUser, updateUser, setAuthOpen, setAddressOpen } = useShop();
  const [mounted, setMounted] = useState(false);
  const [panel, setPanel] = useState<Panel>("view");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    mobile: "",
    password: "",
    password2: "",
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (!user) setAuthOpen(true);
  }, [mounted, user, setAuthOpen]);

  useEffect(() => {
    if (!user) return;
    setForm((f) => ({
      ...f,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      username: user.username || user.mobile || "",
      mobile: user.mobile || "",
    }));
  }, [user]);

  if (!mounted) return null;

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-xl font-bold text-brand-purple">پروفایل کاربری</h1>
        <p className="mt-3 text-sm text-neutral-500">برای مشاهده و ویرایش اطلاعات ابتدا وارد شوید.</p>
      </div>
    );
  }

  function saveInfo(e: FormEvent) {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim()) {
      setMessage("نام و نام خانوادگی الزامی است.");
      return;
    }
    updateUser({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      username: form.username.trim(),
    });
    setMessage("اطلاعات با موفقیت ذخیره شد.");
    setPanel("view");
  }

  function savePhone(e: FormEvent) {
    e.preventDefault();
    if (!form.mobile.trim()) {
      setMessage("شماره موبایل را وارد کنید.");
      return;
    }
    updateUser({ mobile: form.mobile.trim(), username: user.username || form.mobile.trim() });
    setMessage("شماره موبایل با موفقیت ویرایش شد.");
    setPanel("view");
  }

  function savePassword(e: FormEvent) {
    e.preventDefault();
    if (form.password.length < 4 || form.password !== form.password2) {
      setMessage("رمز عبور را صحیح و یکسان وارد کنید.");
      return;
    }
    setForm((f) => ({ ...f, password: "", password2: "" }));
    setMessage("رمز عبور با موفقیت ویرایش شد.");
    setPanel("view");
  }

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-8 lg:py-12">
      <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-6">
        <aside className="mb-6 overflow-hidden rounded-2xl bg-brand-purple text-white lg:mb-0">
          <p className="border-b border-white/15 px-5 py-4 text-sm font-semibold">{user.name}</p>
          <nav>
            <Link href="/profile" className="block bg-white/10 px-5 py-3 text-sm">
              پروفایل کاربری
            </Link>
            <Link href="/online" className="block px-5 py-3 text-sm text-white/80 hover:bg-white/10">
              سفارش اینترنتی
            </Link>
            <button
              type="button"
              onClick={() => setAddressOpen(true)}
              className="block w-full px-5 py-3 text-right text-sm text-white/80 hover:bg-white/10"
            >
              لیست آدرس‌ها
            </button>
            <button
              type="button"
              onClick={() => setUser(null)}
              className="block w-full px-5 py-3 text-right text-sm text-red-200 hover:bg-white/10"
            >
              خروج از سیستم
            </button>
          </nav>
        </aside>

        <section className="min-h-[340px] rounded-xl border border-black/[0.06] bg-white p-6 shadow-[0_4px_16px_-8px_rgba(0,0,0,0.2)] sm:p-8">
          <h1 className="text-xl font-bold text-brand-purple">پروفایل کاربری</h1>
          {message ? <p className="mt-3 text-sm text-brand-green">{message}</p> : null}

          {panel === "view" && (
            <>
              <div className="mt-6 space-y-4 text-[15px] text-neutral-600">
                <InfoRow label="نام و نام خانوادگی:" value={user.name} />
                <InfoRow
                  label="شماره موبایل:"
                  value={user.mobile || "خالی"}
                  action={user.mobile ? "ویرایش" : "افزودن"}
                  onAction={() => {
                    setMessage("");
                    setPanel("phone");
                  }}
                />
                <InfoRow label="آدرس الکترونیک:" value={user.email || "خالی"} />
                <InfoRow label="نام کاربری:" value={user.username || user.mobile} />
                {user.birthDate ? <InfoRow label="تاریخ تولد:" value={user.birthDate} /> : null}
                {user.gender ? (
                  <InfoRow label="جنسیت:" value={user.gender === "male" ? "آقا" : "خانم"} />
                ) : null}
                <InfoRow label="اعتبار کیف پول:" value={`${formatPrice(0)} تومان`} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" className="profile-btn" onClick={() => { setMessage(""); setPanel("info"); }}>
                  ویرایش اطلاعات
                </button>
                <button type="button" className="profile-btn profile-btn-fill" onClick={() => { setMessage(""); setPanel("password"); }}>
                  ویرایش رمز عبور
                </button>
                <button
                  type="button"
                  className="profile-btn profile-btn-logout"
                  onClick={() => setUser(null)}
                >
                  خروج از سیستم
                </button>
              </div>

              <div className="mt-10 border-t border-neutral-100 pt-6">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="inline-block border-b-[3px] border-red-600 pb-1 text-base font-bold">لیست آدرس ها</h2>
                  <button type="button" onClick={() => setAddressOpen(true)} className="text-sm text-brand-purple">
                    افزودن آدرس جدید
                  </button>
                </div>
                {address ? (
                  <p className="text-sm leading-7 text-neutral-600">
                    {address.street}
                    {address.details ? `، ${address.details}` : ""}
                    {address.branchName ? ` — ${address.branchName}` : ""}
                  </p>
                ) : (
                  <p className="text-sm text-neutral-400">آدرسی ثبت نشده است.</p>
                )}
              </div>
            </>
          )}

          {panel === "info" && (
            <form onSubmit={saveInfo} className="mt-6">
              <h2 className="mb-5 text-lg font-bold">اطلاعات اولیه</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="نام کاربری:" value={form.username} readOnly />
                <Field
                  label="آدرس الکترونیکی:"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  type="email"
                />
                <Field
                  label="نام:"
                  required
                  value={form.firstName}
                  onChange={(v) => setForm((f) => ({ ...f, firstName: v }))}
                />
                <Field
                  label="نام خانوادگی:"
                  required
                  value={form.lastName}
                  onChange={(v) => setForm((f) => ({ ...f, lastName: v }))}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="profile-btn profile-btn-fill">
                  ذخیره
                </button>
                <button type="button" className="profile-btn" onClick={() => setPanel("view")}>
                  انصراف
                </button>
              </div>
            </form>
          )}

          {panel === "phone" && (
            <form onSubmit={savePhone} className="mt-6 max-w-md">
              <h2 className="mb-5 text-lg font-bold">ویرایش شماره موبایل</h2>
              <Field
                label="شماره موبایل:"
                required
                value={form.mobile}
                onChange={(v) => setForm((f) => ({ ...f, mobile: v }))}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="profile-btn profile-btn-fill">
                  ذخیره
                </button>
                <button type="button" className="profile-btn" onClick={() => setPanel("view")}>
                  انصراف
                </button>
              </div>
            </form>
          )}

          {panel === "password" && (
            <form onSubmit={savePassword} className="mt-6 max-w-md">
              <h2 className="mb-5 text-lg font-bold">ویرایش رمز عبور</h2>
              <Field
                label="رمز عبور جدید:"
                type="password"
                required
                value={form.password}
                onChange={(v) => setForm((f) => ({ ...f, password: v }))}
              />
              <div className="mt-4">
                <Field
                  label="تکرار رمز عبور:"
                  type="password"
                  required
                  value={form.password2}
                  onChange={(v) => setForm((f) => ({ ...f, password2: v }))}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="profile-btn profile-btn-fill">
                  ذخیره
                </button>
                <button type="button" className="profile-btn" onClick={() => setPanel("view")}>
                  انصراف
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  action,
  onAction,
}: {
  label: string;
  value: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <label className="font-medium text-neutral-900">{label}</label>
      <span>{value}</span>
      {action && onAction ? (
        <button type="button" onClick={onAction} className="text-sm text-brand-purple">
          [{action}]
        </button>
      ) : null}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  readOnly,
  type = "text",
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  required?: boolean;
  readOnly?: boolean;
  type?: string;
}) {
  return (
    <label className="block text-right text-sm">
      <span className="mb-1.5 block text-neutral-700">
        {label}
        {required ? <abbr className="mr-1 text-red-600" title="پرکردن این فیلد الزامی است.">*</abbr> : null}
      </span>
      <input
        type={type}
        required={required}
        readOnly={readOnly}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={`h-11 w-full rounded-[5px] border border-[#52122b] px-3 text-sm outline-none focus:border-brand-purple ${
          readOnly ? "bg-neutral-50 text-neutral-500" : "bg-white"
        }`}
      />
    </label>
  );
}
