import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = String(body.email || "").trim();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ message: "ایمیل معتبر وارد کنید." }, { status: 400 });
  }
  return NextResponse.json({
    message: "عضویت شما در خبرنامه با موفقیت ثبت شد.",
  });
}
