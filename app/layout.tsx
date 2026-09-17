import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AddressModal } from "@/components/AddressModal";
import { AuthModal } from "@/components/AuthModal";
import { NavDrawer } from "@/components/NavDrawer";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ویژن | سفارش آنلاین غذا",
    template: "%s | ویژن",
  },
  description:
    "سفارش آنلاین غذا از فست فودهای زنجیره ای پیتزا ویژن | ارزان تر از همه جا در سراسر تهران، یزد و شیراز | پیتزا آمریکایی، پیتزا ایتالیایی، برگرها، ساندویچ، گرند تست",
  keywords: [
    "ویژن",
    "پیتزا ویژن",
    "سفارش آنلاین",
    "پیتزا ایتالیایی",
    "پیتزا آمریکایی",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "ویژن",
    title: "ویژن | سفارش آنلاین غذا",
    description:
      "سفارش آنلاین غذا از فست فودهای زنجیره ای پیتزا ویژن",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="font-vazir min-h-screen bg-white antialiased">
        <Header />
        <main className="pt-[76px] min-h-[60vh]">{children}</main>
        <Footer />
        <NavDrawer />
        <CartDrawer />
        <AddressModal />
        <AuthModal />
      </body>
    </html>
  );
}
