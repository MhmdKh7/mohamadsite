import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "تماس با رول ماشین",
  description:
    "راه‌های ارتباط با رول ماشین، شماره تماس، واتساپ، اینستاگرام، آدرس فروشگاه و ساعات کاری.",
  alternates: {
    canonical: "https://rollmachine.ir/contact",
  },
  openGraph: {
    title: "تماس با رول ماشین | رول ماشین",
    description:
      "اطلاعات تماس و راه‌های ارتباط با رول ماشین.",
    url: "https://rollmachine.ir/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />;
}