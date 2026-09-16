import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = String(body.email || "").trim();
  const password = String(body.password || "");
  if (!email || password.length < 4) {
    return NextResponse.json(
      { message: "ایمیل و رمز عبور (حداقل ۴ کاراکتر) را وارد کنید." },
      { status: 400 },
    );
  }
  const name =
    String(body.name || "").trim() ||
    (body.mode === "register" ? "کاربر عزیز" : "کاربر عزیز");
  return NextResponse.json({
    message: body.mode === "register" ? "عضویت با موفقیت انجام شد." : "ورود موفق بود.",
    user: { name, email },
  });
}
