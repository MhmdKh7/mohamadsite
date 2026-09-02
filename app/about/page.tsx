import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "درباره رول ماشین",
  description:
    "آشنایی با رول ماشین، تأمین‌کننده و عمده‌فروش انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی.",
  alternates: {
    canonical: "https://rollmachine.ir/about",
  },
  openGraph: {
    title: "درباره رول ماشین | رول ماشین",
    description:
      "آشنایی با رول ماشین و خدمات تأمین انواع بلبرینگ و قطعات صنعتی.",
    url: "https://rollmachine.ir/about",
    type: "website",
    images: [{ url: "/images/logo.png" }],
  },
};

export default function Page() {
  return <AboutClient />;
}