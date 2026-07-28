import type { Metadata } from "next";
import CategoryClient from "./CategoryClient";

export const metadata: Metadata = {
  title: "دسته‌بندی محصولات",
  description:
    "مشاهده دسته‌بندی انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی در رول ماشین.",
  alternates: {
    canonical: "https://rollmachine.ir/category",
  },
  openGraph: {
    title: "دسته‌بندی محصولات | رول ماشین",
    description:
      "دسته‌بندی انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی.",
    url: "https://rollmachine.ir/category",
    type: "website",
  },
};

export default function Page() {
  return <CategoryClient />;
}