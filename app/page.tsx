import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "ویژن",
};

export default function Page() {
  return <HomePage />;
}
