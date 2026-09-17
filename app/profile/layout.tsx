import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروفایل کاربری",
  description: "ویرایش نام، شماره موبایل و اطلاعات حساب کاربری ویژن",
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
