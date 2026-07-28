import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "رول ماشین | عمده فروش انواع بلبرینگ و رولبرینگ",
  description:
    "رول ماشین، تأمین‌کننده و عمده‌فروش انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی از برندهای معتبر دنیا.",
  alternates: {
    canonical: "https://rollmachine.ir",
  },
  openGraph: {
    title: "رول ماشین | عمده فروش بلبرینگ",
    description:
      "تأمین انواع بلبرینگ، رولبرینگ و یاتاقان صنعتی با ضمانت اصالت کالا.",
    url: "https://rollmachine.ir",
    type: "website",
  },
};
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Truck, Shield, Headphones, Award, Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const categories = [
  // انواع یاتاقان‌های صنعتی
  {
    name: 'یاتاقان UC',
    englishName: 'UC Bearing',
    slug: 'uc',
    description: 'یاتاقان UC با کیفیت بالا',
    image: '/images/categories/uc.jpg',
  },
  {
    name: 'یاتاقان UCP',
    englishName: 'UCP Bearing',
    slug: 'ucp',
    description: 'یاتاقان با پایه UCP',
    image: '/images/categories/ucp.jpg',
  },
  {
    name: 'یاتاقان UCF',
    englishName: 'UCF Bearing',
    slug: 'ucf',
    description: 'یاتاقان چهارگوش UCF',
    image: '/images/categories/ucf.jpg',
  },
  {
    name: 'یاتاقان UCT',
    englishName: 'UCT Bearing',
    slug: 'uct',
    description: 'یاتاقان کشویی UCT',
    image: '/images/categories/uct.jpg',
  },
  {
    name: 'یاتاقان UCFC',
    englishName: 'UCFC Bearing',
    slug: 'ucfc',
    description: 'یاتاقان فلنجی UCFC',
    image: '/images/categories/ucfc.jpg',
  },
  {
    name: 'یاتاقان UCPA',
    englishName: 'UCPA Bearing',
    slug: 'ucpa',
    description: 'یاتاقان قابل تنظیم UCPA',
    image: '/images/categories/ucpa.jpg',
  },
  // ملزومات صنعتی
  {
    name: 'بلبرینگ',
    englishName: 'Ball Bearing',
    slug: 'ball-bearing',
    description: 'تعمیر و توزیع انواع بلبرینگ',
    image: '/images/categories/ball-bearing.jpg',
  },
  {
    name: 'رولبرینگ',
    englishName: 'Roller Bearing',
    slug: 'roller-bearing',
    description: 'تعمیر و توزیع انواع رولبرینگ',
    image: '/images/categories/roller-bearing.jpg',
  },
  {
    name: 'تسمه',
    englishName: 'Belt',
    slug: 'belt',
    description: 'تعمیر و توزیع انواع تسمه صنعتی',
    image: '/images/categories/belt.jpg',
  },
  {
    name: 'کاسه نمد',
    englishName: 'Oil Seal',
    slug: 'oil-seal',
    description: 'تعمیر و توزیع انواع کاسه نمد',
    image: '/images/categories/oil-seal.jpg',
  },
  // روان‌کننده‌ها
  {
    name: 'گریس',
    englishName: 'Grease',
    slug: 'grease',
    description: 'توزیع انواع گریس صنعتی',
    image: '/images/categories/grease.jpg',
  },
  {
    name: 'روغن صنعتی',
    englishName: 'Industrial Oil',
    slug: 'oil',
    description: 'توزیع انواع روغن صنعتی',
    image: '/images/categories/oil.jpg',
  },
  // واشر و آب‌بندی
  {
    name: 'پکینگ',
    englishName: 'Packing',
    slug: 'packing',
    description: 'ساخت پکینگ سفارشی',
    image: '/images/categories/packing.jpg',
  },
  {
    name: 'اورینگ',
    englishName: 'O-Ring',
    slug: 'oring',
    description: 'انواع اورینگ استاندارد و سفارشی',
    image: '/images/categories/oring.jpg',
  },
  {
    name: 'تفلون',
    englishName: 'Teflon',
    slug: 'teflon',
    description: 'ورق و نوار تفلون',
    image: '/images/categories/teflon.jpg',
  },
  // سایر
  {
    name: 'پیچ و مهره',
    englishName: 'Bolt & Nut',
    slug: 'bolt-nut',
    description: 'پیچ، مهره، واشر، خار، پولی',
    image: '/images/categories/bolt-nut.jpg',
  },
]

const features = [
  {
    icon: Shield,
    title: 'ضمانت اصالت کالا',
    description: 'تمامی محصولات اصل و دارای گارانتی',
  },
  {
    icon: Truck,
    title: 'ارسال سریع',
    description: 'ارسال به سراسر ایران',
  },
  {
    icon: Headphones,
    title: 'مشاوره تخصصی',
    description: 'راهنمایی توسط کارشناسان',
  },
  {
    icon: Award,
    title: 'تعمیر و سفارش‌گیری',
    description: 'تعمیر و ساخت قطعات سفارشی',
  },
]

const faqs = [
  {
    question: 'آیا امکان خرید عمده وجود دارد؟',
    answer: 'بله، برای خرید عمده با تخفیف ویژه با بخش فروش تماس بگیرید.',
  },
  {
    question: 'زمان ارسال سفارشات چقدر است؟',
    answer: 'سفارشات معمولا ظرف 24 تا 48 ساعت کاری ارسال می‌شوند.',
  },
  {
    question: 'آیا محصولات گارانتی دارند؟',
    answer: 'بله، تمامی محصولات دارای گارانتی اصالت هستند.',
  },
]

const bearingTypes = [
  {
    title: 'بلبرینگ شیار عمیق',
    englishTitle: 'Deep Groove Ball Bearing',
    slug: 'deep-groove-ball-bearing',
    description: 'بلبرینگ‌های شیار عمیق کاربردهای مختلف و زیادی دارند. آنها به طور معمول از یک حلقه داخلی، حلقه بیرونی، ساچمه و قفس تشکیل شده‌اند.',
    features: ['قابلیت حمل بار تک جهته یا دو جهته', 'سرعت چرخش بسیار بالا', 'کم صدا و گشتاور اصطکاک کم', 'نیاز به روانکاری کم'],
    image: '/images/bearing-types/deep-groove.jpg',
  },
  {
    title: 'رولبرینگ مخروطی',
    englishTitle: 'Tapered Roller Bearing',
    slug: 'tapered-roller-bearing',
    description: 'همانطور که از نام آن پیدا است، اجزای غلتک و مسیر غلتش این بیرینگ‌ها به صورت مخروطی ساخته شده‌اند. مناسب برای بارهای ترکیبی.',
    features: ['تحمل بار محوری و شعاعی همزمان', 'مناسب برای بارهای سنگین', 'دقت بالا در عملکرد', 'عمر طولانی'],
    image: '/images/bearing-types/tapered-roller.jpg',
  },
  {
    title: 'رولبرینگ استوانه‌ای',
    englishTitle: 'Cylindrical Roller Bearing',
    slug: 'cylindrical-roller-bearing',
    description: 'این نوع بیرینگ‌ها دارای غلتک‌های استوانه‌ای هستند و برای تحمل بارهای شعاعی سنگین طراحی شده‌اند.',
    features: ['ظرفیت بار شعاعی بالا', 'سرعت بالا', 'قابلیت جدا شدن', 'نصب و نگهداری آسان'],
    image: '/images/bearing-types/cylindrical-roller.jpg',
  },
  {
    title: 'رولبرینگ کروی',
    englishTitle: 'Spherical Roller Bearing',
    slug: 'spherical-roller-bearing',
    description: 'این بیرینگ‌ها دارای دو ردیف غلتک هستند و قابلیت خود تنظیمی دارند. مناسب برای شرایطی که عدم هم محوری وجود دارد.',
    features: ['خود تنظیم', 'تحمل بار سنگین', 'مقاوم در برابر ضربه', 'مناسب شرایط سخت'],
    image: '/images/bearing-types/spherical-roller.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/95 to-secondary/95" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="text-center text-primary-foreground max-w-4xl mx-auto">
              <p className="text-accent text-lg md:text-xl font-medium mb-4">
                رول ماشین - Rollmachine
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                مرکز پخش و فروش عمده
                <span className="block text-accent mt-2">یاتاقان و بلبرینگ اصل</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                تعمیر و توزیع انواع بلبرینگ، رولبرینگ، تسمه، کاسه نمد | توزیع گریس و روغن صنعتی |
                ساخت پکینگ، اورینگ و تفلون سفارشی | تهیه پیچ، مهره، واشر، خار و پولی
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                    مشاهده محصولات
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:02133948425">
                  <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold px-8">
                    <Phone className="ml-2 h-5 w-5" />
                    ۰۲۱-۳۳۹۴۸۴۲۵
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="accent-line" />
        </section>

        {/* Categories Grid */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">دسته‌بندی محصولات</h2>
              <p className="text-muted-foreground">انتخاب از میان گروه‌های مختلف محصولات</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {categories.map((category) => (
                <Card key={category.slug} className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-0 hover-lift bg-primary">
                  <div className="relative aspect-square">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <p className="text-primary-foreground/70 text-xs mb-1 uppercase tracking-wider">
                        {category.englishName}
                      </p>
                      <h3 className="font-bold text-primary-foreground text-lg md:text-xl mb-2">
                        {category.name}
                      </h3>
                      <div className="w-12 h-0.5 bg-accent mx-auto" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="py-10 bg-card border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bearing Info Section */}
        <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">آشنایی با بلبرینگ و رولبرینگ‌ها</h2>
              <p className="text-secondary-foreground/70">اطلاعات فنی درباره انواع بلبرینگ</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bearingTypes.map((bearing, index) => (
                <Card key={index} className="bg-card text-card-foreground border-0 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={bearing.image}
                      alt={bearing.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/70 text-xs">{bearing.englishTitle}</p>
                      <h3 className="text-white font-bold text-lg">{bearing.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {bearing.description}
                    </p>
                    <ul className="space-y-1">
                      {bearing.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/bearing-info/${bearing.slug}`}>
                      <Button variant="link" className="p-0 h-auto mt-3 text-accent">
                        اطلاعات بیشتر
                        <ChevronLeft className="h-4 w-4 mr-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">برندهای معتبر</h2>
              <p className="text-muted-foreground">نماینده رسمی برندهای معتبر جهانی</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
              {['SKF', 'FAG', 'NSK', 'Timken', 'NTN', 'Koyo', 'INA', 'IKO', 'NMB', 'NACHI', 'THK', 'SNR'].map((brand) => (
                <div
                  key={brand}
                  className="group relative rounded-xl bg-background border-2 border-border p-6 md:p-8 flex items-center justify-center transition-all duration-300 cursor-pointer hover:border-accent hover:shadow-lg hover:-translate-y-1"
                >
                  <span className="absolute top-2 right-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none">
                    ٭
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-accent transition-colors">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">سوالات متداول</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">نیاز به مشاوره تخصصی دارید؟</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              کارشناسان ما آماده پاسخگویی به سوالات شما و راهنمایی در انتخاب بهترین محصولات هستند
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  تماس با کارشناسان
                </Button>
              </Link>
              <a href="tel:09190033560">
                <Button size="lg" variant="outline" className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent font-bold">
                  <Phone className="ml-2 h-5 w-5" />
                  ۰۹۱۹۰۰۳۳۵۶۰
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
