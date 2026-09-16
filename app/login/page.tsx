"use client";

import { useEffect } from "react";
import { useShop } from "@/lib/store";

export default function LoginPage() {
  const setAuthOpen = useShop((s) => s.setAuthOpen);
  useEffect(() => {
    setAuthOpen(true);
  }, [setAuthOpen]);
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <h1 className="text-xl font-bold text-brand-purple">عضویت / ورود به سایت</h1>
    </div>
  );
}
