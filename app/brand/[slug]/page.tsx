import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandClient from "./BrandClient";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

type Props = {
  params: Promise<{ slug: string }>;
};

const brandInfo: Record<
  string,
  { name: string; country: string; description: string }
> = {
  skf: {
    name: "SKF",
    country: "سوئد",
    description:
      "SKF یکی از بزرگ‌ترین تولیدکنندگان بلبرینگ و قطعات صنعتی در جهان است که از سال 1907 فعالیت خود را آغاز کرده است.",
  },
  fag: {
    name: "FAG",
    country: "آلمان",
    description:
      "FAG یک برند آلمانی با بیش از 130 سال تجربه در تولید بلبرینگ‌های صنعتی با کیفیت بالا.",
  },
  nsk: {
    name: "NSK",
    country: "ژاپن",
    description:
      "NSK یک شرکت ژاپنی پیشرو در تولید بلبرینگ و قطعات دقیق برای صنایع مختلف.",
  },
  timken: {
    name: "TIMKEN",
    country: "آمریکا",
    description:
      "TIMKEN یک برند آمریکایی معتبر در زمینه تولید بلبرینگ‌های مخروطی و قطعات صنعتی.",
  },
  ntn: {
    name: "NTN",
    country: "ژاپن",
    description:
      "NTN یکی از بزرگ‌ترین تولیدکنندگان بلبرینگ در ژاپن با محصولات باکیفیت جهانی.",
  },
  koyo: {
    name: "KOYO",
    country: "ژاپن",
    description:
      "KOYO یک برند ژاپنی با تمرکز بر تولید بلبرینگ‌های خودرویی و صنعتی.",
  },
  ina: {
    name: "INA",
    country: "آلمان",
    description:
      "INA یک برند آلمانی تخصصی در تولید بلبرینگ‌های سوزنی و قطعات دقیق.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.toLowerCase();
  const brand = brandInfo[key];
  if (!brand) {
    return {
      title: "برند",
      robots: { index: false, follow: true },
    };
  }
  const name = brand.name;
  const description = `خرید بلبرینگ ${name}. ${brand.description} استعلام قیمت و موجودی از رول ماشین.`;
  const canonical = `https://rollmachine.ir/brand/${key}`;
  const title = `بلبرینگ ${name} | خرید و استعلام قیمت`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | رول ماشین`,
      description,
      url: canonical,
      type: "website",
      locale: "fa_IR",
      siteName: "رول ماشین",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | رول ماشین`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const key = slug.toLowerCase();
  const brand = brandInfo[key];
  if (!brand) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "خانه", url: "https://rollmachine.ir/" },
          { name: "محصولات", url: "https://rollmachine.ir/products" },
          {
            name: brand.name,
            url: `https://rollmachine.ir/brand/${key}`,
          },
        ]}
      />
      <BrandClient />
    </>
  );
}
