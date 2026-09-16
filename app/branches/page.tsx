import type { Metadata } from "next";
import { branches } from "@/lib/categories";

export const metadata: Metadata = {
  title: "لیست شعب",
};

export default function BranchesPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">
      <h1 className="mb-2 text-2xl font-bold text-brand-purple">لیست شعب</h1>
      <p className="mb-8 text-sm text-neutral-500">
        مجموعه رستوران های زنجیره ای پیتزا ویژن
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {branches.map((b) => (
          <article key={b.name} className="rounded-card border border-purple-100 p-5 shadow-card">
            <h2 className="font-bold text-brand-purple">{b.name}</h2>
            <p className="mt-2 text-sm leading-7 text-neutral-600">{b.address}</p>
            <p className="mt-2 text-sm">تلفن: {b.phone}</p>
            <p className="text-xs text-brand-green">{b.city}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
