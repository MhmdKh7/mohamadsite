import type { Metadata } from "next";
import BrandClient from "./BrandClient";

export const metadata: Metadata = {
  title: "برندهای بلبرینگ",
  description:
    "آشنایی با برندهای معتبر بلبرینگ و رولبرینگ مانند SKF، FAG، NSK، NTN، Timken و سایر برندهای صنعتی.",
  alternates: {
    canonical: "https://rollmachine.ir/brand",
  },
  openGraph: {
    title: "برندهای بلبرینگ | رول ماشین",
    description:
      "معرفی برندهای معتبر بلبرینگ و رولبرینگ دنیا.",
    url: "https://rollmachine.ir/brand",
    type: "website",
  },
};

export default function Page() {
  return <BrandClient />;
}