"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function BrandPage() {
  const params = useParams();
  const slug = params.slug as string;
  const brand = brandInfo[slug.toLowerCase()];

  if (!brand) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-accent">
              صفحه اصلی
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <Link href="/products" className="text-muted-foreground hover:text-accent">
              محصولات
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{brand.name}</span>
          </nav>
        </div>
      </div>

      <div className="bg-gradient-to-l from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{brand.name}</h1>
          <p className="text-white/80 mb-2">کشور سازنده: {brand.country}</p>
          <p className="text-white/70 max-w-2xl">{brand.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground mb-6">
          برای استعلام موجودی و قیمت با کارشناسان رول ماشین تماس بگیرید.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90">تماس با ما</Button>
          </Link>
          <Link href="/products">
            <Button variant="outline">مشاهده دسته‌بندی محصولات</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
