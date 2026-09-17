import type { Metadata } from "next";
import { branches } from "@/lib/categories";

export const metadata: Metadata = {
  title: "لیست شعب",
  description: "نقشه شعب | انتخاب و مسیریابی شعب پیتزا ویژن",
};

export default function BranchesPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">
      <p className="text-sm text-brand-green">نقشه شعب</p>
      <h1 className="mt-1 text-2xl font-bold text-brand-purple">
        انتخاب و مسیریابی شعب پیتزا ویژن
      </h1>
      <h2 className="mt-8 mb-5 text-xl font-bold text-neutral-800">شعبه های ویژن</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {branches.map((b) => (
          <article
            key={b.name}
            className="rounded-[16px] border border-neutral-100 bg-white p-5 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-bold text-brand-purple">{b.name}</h3>
            <p className="mt-2 text-sm leading-7 text-neutral-600">{b.address}</p>
            {b.phone ? (
              <p className="mt-3 text-sm font-medium text-neutral-800" dir="ltr">
                {b.phone}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
