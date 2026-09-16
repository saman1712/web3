import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const mobile = String(body.mobile || body.password || "").trim();
  const email = String(body.email || "").trim();
  if (!mobile && !email) {
    return NextResponse.json(
      { message: "شماره موبایل را وارد کنید." },
      { status: 400 },
    );
  }
  const name =
    String(body.name || "").trim() ||
    (body.mode === "register" ? "کاربر عزیز" : "کاربر عزیز");
  return NextResponse.json({
    message: body.mode === "register" ? "عضویت با موفقیت انجام شد." : "ورود موفق بود.",
    user: { name, email: email || `${mobile}@vizhen.local` },
  });
}
