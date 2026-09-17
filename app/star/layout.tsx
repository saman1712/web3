import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود به ویژن استار",
};

export default function StarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
