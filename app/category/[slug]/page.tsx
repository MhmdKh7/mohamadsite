import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";
import { getCategoryInfo } from "@/lib/category-info";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = getCategoryInfo(slug);

  if (!info) {
    return {
      title: "دسته‌بندی محصولات",
      description:
        "مشاهده دسته‌بندی محصولات صنعتی در رول ماشین.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = `${info.name} | بلبرینگ و قطعات صنعتی`;

  const description =
    `خرید و استعلام قیمت ${info.name}. ${info.tagline} مشاوره تخصصی بلبرینگ و قطعات صنعتی از رول ماشین.`;

  return {
    title,
    description,

    alternates: {
      canonical: `https://rollmachine.ir/category/${slug}`,
    },

    openGraph: {
      title: `${title} | رول ماشین`,
      description,
      url: `https://rollmachine.ir/category/${slug}`,
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
  const info = getCategoryInfo(slug);
  if (!info) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "خانه", url: "https://rollmachine.ir/" },
          { name: "محصولات", url: "https://rollmachine.ir/products" },
          {
            name: info.name,
            url: `https://rollmachine.ir/category/${slug}`,
          },
        ]}
      />
      <CategoryClient />
    </>
  );
}
