import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const items = Array.isArray(body.items) ? body.items : [];
  if (!items.length) {
    return NextResponse.json({ message: "سبد خرید خالی است." }, { status: 400 });
  }
  if (!body.address) {
    return NextResponse.json({ message: "ابتدا آدرس را انتخاب کنید" }, { status: 400 });
  }
  const orderId = Math.floor(100000 + Math.random() * 900000);
  return NextResponse.json({
    ok: true,
    orderId,
    message: `سفارش شما با شماره ${orderId} ثبت شد.`,
  });
}
