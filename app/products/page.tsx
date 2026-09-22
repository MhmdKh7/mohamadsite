import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { brandLinks } from "@/components/internal-links";
import { categoryInfo } from "@/lib/category-info";

export const metadata: Metadata = {
  title: "بلبرینگ و رولبرینگ | محصولات",
  description:
    "خرید و استعلام قیمت بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی. دسته‌بندی و برندهای معتبر در رول ماشین.",
  alternates: {
    canonical: "https://rollmachine.ir/products",
  },
  openGraph: {
    title: "بلبرینگ و رولبرینگ | محصولات رول ماشین",
    description:
      "خرید و استعلام قیمت بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی از رول ماشین.",
    url: "https://rollmachine.ir/products",
    type: "website",
    images: [{ url: "/images/logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const categories = Object.entries(categoryInfo);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">محصولات</h1>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            دسته‌بندی محصولات رول ماشین. برای مشخصات فنی و استعلام قیمت با کارشناسان تماس بگیرید.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(([slug, info]) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className="rounded-xl border bg-card p-5 hover:border-accent transition-colors"
              >
                <h2 className="font-bold mb-1">{info.name}</h2>
                {info.englishName ? (
                  <p className="text-xs text-muted-foreground mb-2">{info.englishName}</p>
                ) : null}
                <p className="text-sm text-muted-foreground leading-relaxed">{info.tagline}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-4">برندها</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {brandLinks.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brand/${brand.slug}`}
                  className="rounded-xl border bg-card p-4 text-center font-bold hover:border-accent transition-colors"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
