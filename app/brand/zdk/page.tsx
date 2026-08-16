import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronLeft,
  ShieldCheck,
  Wallet,
  Boxes,
  Factory,
  Wrench,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "برند ZDK | معرفی بلبرینگ و یاتاقان ZDK - رول ماشین",
  description:
    "معرفی کامل برند ZDK؛ تولیدکننده انواع بلبرینگ، رولبرینگ و یاتاقان صنعتی با کیفیت مطمئن و قیمت مناسب. خرید عمده محصولات ZDK از رول ماشین.",
  alternates: {
    canonical: "https://rollmachine.ir/brand/zdk",
  },
  openGraph: {
    title: "برند ZDK | رول ماشین",
    description:
      "انواع بلبرینگ، رولبرینگ و یاتاقان صنعتی برند ZDK با کیفیت مطمئن و قیمت مناسب.",
    url: "https://rollmachine.ir/brand/zdk",
    type: "website",
  },
}

const advantages = [
  {
    icon: ShieldCheck,
    title: "کیفیت مطمئن",
    description:
      "محصولات ZDK با مواد اولیه مرغوب و کنترل کیفیت دقیق تولید می‌شوند و در کاربردهای صنعتی عملکرد پایداری دارند.",
  },
  {
    icon: Wallet,
    title: "قیمت مناسب",
    description:
      "ZDK گزینه‌ای اقتصادی در برابر برندهای گران‌قیمت است و برای پروژه‌هایی با حجم مصرف بالا صرفه اقتصادی خوبی دارد.",
  },
  {
    icon: Boxes,
    title: "تنوع محصولات",
    description:
      "طیف گسترده‌ای از بلبرینگ شیار عمیق، رولبرینگ، یاتاقان‌های UC/UCP و قطعات صنعتی در سایزهای مختلف.",
  },
  {
    icon: Factory,
    title: "کاربرد صنعتی گسترده",
    description:
      "مناسب برای صنایع کشاورزی، ماشین‌سازی، پمپ و الکتروموتور، خطوط تولید و تجهیزات عمومی.",
  },
]

const productTypes = [
  { name: "بلبرینگ شیار عمیق", slug: "ball-bearing" },
  { name: "رولبرینگ", slug: "roller-bearing" },
  { name: "یاتاقان UC", slug: "uc" },
  { name: "یاتاقان UCP", slug: "ucp" },
  { name: "یاتاقان UCF", slug: "ucf" },
  { name: "یاتاقان UCT", slug: "uct" },
]

export default function ZDKBrandPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-accent">
              صفحه اصلی
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">برند ZDK</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-l from-primary to-secondary text-primary-foreground">
          <div className="accent-line" />
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 bg-black rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0 shadow-lg">
                <Image
                  src="/zdk-logo.jpeg"
                  alt="لوگوی رسمی برند ZDK"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-right">
                <p className="text-accent font-medium mb-2">معرفی برند</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  بلبرینگ و یاتاقان صنعتی ZDK
                </h1>
                <p className="text-primary-foreground/85 leading-relaxed max-w-2xl text-pretty">
                  ZDK یکی از برندهای شناخته‌شده در زمینه تولید انواع بلبرینگ،
                  رولبرینگ و یاتاقان‌های صنعتی است که با تمرکز بر ارائه کیفیت
                  مطمئن و قیمت رقابتی، به گزینه‌ای محبوب برای صنایع مختلف تبدیل
                  شده است. رول ماشین تأمین‌کننده و عرضه‌کننده محصولات این برند به
                  صورت عمده و خرد است.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-14 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                درباره برند ZDK
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  محصولات ZDK با هدف پاسخ‌گویی به نیاز صنایعی طراحی شده‌اند که به
                  دنبال تعادل میان کیفیت و هزینه هستند. این برند طیف گسترده‌ای از
                  بلبرینگ‌های شیار عمیق، رولبرینگ‌های مخروطی و استوانه‌ای و
                  یاتاقان‌های پایه‌دار را تولید می‌کند که در ماشین‌آلات کشاورزی،
                  الکتروموتورها، پمپ‌ها و خطوط تولید صنعتی کاربرد دارند.
                </p>
                <p>
                  یکی از مهم‌ترین مزیت‌های ZDK، صرفه اقتصادی آن در خریدهای عمده
                  است؛ به‌ویژه برای واحدهای تولیدی و تعمیرگاه‌هایی که مصرف بالایی
                  دارند. در عین حال، کنترل کیفیت روی مواد اولیه و فرآیند تولید
                  باعث شده این محصولات عملکرد قابل قبول و عمر مفید مناسبی داشته
                  باشند.
                </p>
                <p>
                  در فروشگاه رول ماشین می‌توانید انواع محصولات ZDK را با ضمانت
                  اصالت کالا و مشاوره تخصصی تهیه کنید. کارشناسان ما در انتخاب سایز
                  و مدل مناسب برای کاربرد شما راهنمایی‌تان می‌کنند.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate */}
        <section className="py-14 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-4">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  گواهی رسمی
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                نمایندگی انحصاری ZDK در ایران
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                رول ماشین (Mohammad KHADEMI - ROLLMACHINE) به‌عنوان نماینده رسمی
                و انحصاری فروش محصولات یاتاقان و بلبرینگ برند ZDK در ایران، دارای
                گواهی نمایندگی صادرشده از شرکت Shandong ZDK Bearing است.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-4 border-accent/30 shadow-xl bg-black max-w-md w-full">
                <Image
                  src="/zdk-certificate.jpeg"
                  alt="گواهی رسمی نمایندگی انحصاری برند ZDK برای رول ماشین در ایران"
                  width={800}
                  height={1280}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-14 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                چرا محصولات ZDK؟
              </h2>
              <p className="text-muted-foreground">
                مزیت‌های اصلی این برند برای مصارف صنعتی
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((item) => (
                <Card key={item.title} className="border bg-card h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product types */}
        <section className="py-14 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                محصولات ZDK
              </h2>
              <p className="text-muted-foreground">
                دسته‌بندی‌های اصلی محصولات موجود از این برند
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {productTypes.map((product) => (
                <Link
                  key={product.slug}
                  href={`/category/${product.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border-2 border-border bg-background p-4 transition-all hover:border-accent hover:shadow-md"
                >
                  <span className="flex items-center gap-2 font-medium text-foreground">
                    <Wrench className="h-4 w-4 text-accent" />
                    {product.name}
                  </span>
                  <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              استعلام قیمت و خرید محصولات ZDK
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              برای اطلاع از موجودی، قیمت عمده و ثبت سفارش محصولات ZDK با کارشناسان
              ما تماس بگیرید.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:02133948425">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  ۰۲۱-۳۳۹۴۸۴۲۵
                </Button>
              </a>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent font-bold"
                >
                  مشاهده همه محصولات
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
