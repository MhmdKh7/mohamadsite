import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "محصولات",
  description:
    "مشاهده انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی در رول ماشین. برای استعلام قیمت و موجودی با کارشناسان تماس بگیرید.",
  alternates: {
    canonical: "https://rollmachine.ir/products",
  },
  openGraph: {
    title: "محصولات | رول ماشین",
    description:
      "مشاهده انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی در رول ماشین.",
    url: "https://rollmachine.ir/products",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ProductsClient />;
}
