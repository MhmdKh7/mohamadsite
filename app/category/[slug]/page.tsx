import type { Metadata } from "next";
import CategoryClient from "./CategoryClient";
import { getCategoryInfo } from "@/lib/category-info";

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

  const title = `${info.name} | خرید و استعلام قیمت`;

  const description =
    `${info.tagline} مشاهده مشخصات، کاربردها و دریافت مشاوره و استعلام قیمت ${info.name} از رول ماشین.`;

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

export default function Page() {
  return <CategoryClient />;
}