import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

type Props = {
  params: Promise<{ id: string }>;
};

const productMeta: Record<string, { name: string; description: string }> = {
  "1": {
    name: "بلبرینگ شیار عمیق SKF 6205",
    description:
      "بلبرینگ شیار عمیق با کیفیت بالا مناسب برای کاربردهای صنعتی مختلف. این بلبرینگ دارای آب‌بند لاستیکی دوطرفه است که از نفوذ گرد و غبار و رطوبت جلوگیری می‌کند. مناسب برای موتورهای الکتریکی، پمپ‌ها، گیربکس‌ها و تجهیزات صنعتی.",
  },
  "2": {
    name: "رولبرینگ مخروطی Timken",
    description: "رولبرینگ مخروطی برای بارهای شعاعی و محوری ترکیبی",
  },
  "3": {
    name: "یاتاقان UCP205 FAG",
    description: "یاتاقان با پایه برای نصب آسان",
  },
  "4": {
    name: "بلبرینگ NSK 6206",
    description: "بلبرینگ ژاپنی با دقت بالا",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = productMeta[id];

  if (!product) {
    return {
      title: "محصول یافت نشد",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `https://rollmachine.ir/products/${id}`,
    },
    openGraph: {
      title: `${product.name} | رول ماشین`,
      description: product.description,
      url: `https://rollmachine.ir/products/${id}`,
      type: "website",
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  if (!productMeta[id]) {
    notFound();
  }

  return <ProductDetailClient id={id} />;
}
