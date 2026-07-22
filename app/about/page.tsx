"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ChevronLeft,
  Award,
  Truck,
  Shield,
  Clock,
  Target,
  Eye,
  Phone,
} from "lucide-react";

const stats = [
  { number: "40+", label: "سال تجربه" },
  { number: "5000+", label: "مشتری راضی" },
  { number: "10000+", label: "محصول" },
  { number: "24/7", label: "پشتیبانی" },
];

const features = [
  {
    icon: Award,
    title: "کیفیت تضمینی",
    description: "تمامی محصولات ما دارای گارانتی اصالت و کیفیت هستند",
  },
  {
    icon: Shield,
    title: "تأمین برندهای معتبر",
    description: "عرضه برندهای اصلی جهانی",
  },
  {
    icon: Clock,
    title: "پشتیبانی 24 ساعته",
    description: "تیم پشتیبانی آماده پاسخگویی به سوالات شماست",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-accent">
              صفحه اصلی
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">درباره ما</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            درباره رول ماشین (Rollmachine)
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            با بیش از 40 سال تجربه در زمینه تأمین و توزیع انواع بلبرینگ، رولبرینگ
            و قطعات صنعتی
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                فروشگاه رول ماشین از سال 1365 فعالیت خود را در زمینه تأمین و توزیع
                انواع بلبرینگ و قطعات صنعتی آغاز کرده است. ما با هدف ارائه
                محصولات باکیفیت و اصل از برندهای معتبر جهانی به صنایع مختلف کشور
                خدمت‌رسانی می‌کنیم.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                تیم متخصص ما با بهره‌گیری از دانش فنی و تجربه چندین ساله، آماده
                ارائه مشاوره تخصصی در انتخاب بهترین محصولات متناسب با نیاز شما
                می‌باشد.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ما همواره تلاش می‌کنیم تا با ارائه خدمات باکیفیت و قیمت‌های رقابتی،
                رضایت مشتریان خود را جلب کنیم و شریک قابل اعتمادی برای صنایع
                مختلف باشیم.
              </p>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">آدرس:</p>
                <p className="font-medium">خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <Image
                  src="/images/logo.png"
                  alt="لوگو رول ماشین"
                  width={270}
                  height={270}
                  className="object-contain"
                  priority
                />
                <h3 className="text-2xl font-bold">رول ماشین</h3>
                <p className="text-muted-foreground">Rollmachine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ماموریت ما</h3>
              <p className="text-muted-foreground leading-relaxed">
                ارائه محصولات باکیفیت و اصل از برندهای معتبر جهانی با قیمت
                مناسب و خدمات پس از فروش عالی به صنایع مختلف کشور. ما متعهد به
                ایجاد ارزش برای مشتریان از طریق تأمین به موقع و مشاوره فنی
                تخصصی هستیم.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">چشم‌انداز ما</h3>
              <p className="text-muted-foreground leading-relaxed">
                تبدیل شدن به بزرگ‌ترین و معتبرترین مرجع تأمین بلبرینگ و قطعات
                صنعتی در ایران با گسترش شبکه توزیع و ارائه خدمات نوین
                آنلاین. ما می‌خواهیم اولین انتخاب صنعتگران ایرانی باشیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            چرا رول ماشین را انتخاب کنید؟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            برندهای همکار ما
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            ما نماینده رسمی و توزیع‌کننده معتبرترین برندهای بلبرینگ جهان هستیم
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {["SKF", "FAG", "NSK", "TIMKEN", "NTN", "KOYO"].map((brand) => (
              <div
                key={brand}
                className="bg-card p-6 rounded-lg border flex items-center justify-center hover:border-accent transition-colors"
              >
                <span className="text-xl font-bold text-muted-foreground">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            آماده همکاری با شما هستیم
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            برای مشاوره رایگان و دریافت بهترین قیمت، همین الان با ما تماس بگیرید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:09190033560"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <Phone className="h-5 w-5" />
              09122369623
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              تماس با ما
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
