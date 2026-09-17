import type { Metadata } from "next";
import { OnlineMenu } from "@/components/OnlineMenu";

export const metadata: Metadata = {
  title: "مشاهده منو",
};

export default function MenuPage() {
  return <OnlineMenu hideDiscounts />;
}
