import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, BookOpen, Settings, Wrench, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const bearingTypes = [
  {
    title: 'بلبرینگ شیار عمیق',
    englishTitle: 'Deep Groove Ball Bearing',
    slug: 'deep-groove-ball-bearing',
    description: 'بلبرینگ‌های شیار عمیق متداول‌ترین نوع بلبرینگ هستند و کاربردهای گسترده‌ای دارند. این بلبرینگ‌ها می‌توانند بارهای شعاعی و محوری را تحمل کنند.',
    image: '/images/bearing-types/deep-groove.jpg',
    icon: Settings,
  },
  {
    title: 'بلبرینگ تماس زاویه‌ای',
    englishTitle: 'Angular Contact Ball Bearing',
    slug: 'angular-contact-ball-bearing',
    description: 'این بلبرینگ‌ها برای تحمل بارهای ترکیبی (شعاعی و محوری همزمان) طراحی شده‌اند و در ماشین‌آلات دقیق کاربرد دارند.',
    image: '/images/categories/ball-bearing.jpg',
    icon: Settings,
  },
  {
    title: 'رولبرینگ مخروطی',
    englishTitle: 'Tapered Roller Bearing',
    slug: 'tapered-roller-bearing',
    description: 'رولبرینگ‌های مخروطی برای تحمل بارهای سنگین شعاعی و محوری استفاده می‌شوند و در صنایع خودروسازی کاربرد زیادی دارند.',
    image: '/images/bearing-types/tapered-roller.jpg',
    icon: Settings,
  },
  {
    title: 'رولبرینگ استوانه‌ای',
    englishTitle: 'Cylindrical Roller Bearing',
    slug: 'cylindrical-roller-bearing',
    description: 'این رولبرینگ‌ها ظرفیت بار شعاعی بالایی دارند و برای سرعت‌های بالا مناسب هستند.',
    image: '/images/bearing-types/cylindrical-roller.jpg',
    icon: Settings,
  },
  {
    title: 'رولبرینگ کروی',
    englishTitle: 'Spherical Roller Bearing',
    slug: 'spherical-roller-bearing',
    description: 'رولبرینگ‌های کروی قابلیت خود تنظیمی دارند و برای شرایطی که عدم هم محوری وجود دارد مناسب هستند.',
    image: '/images/bearing-types/spherical-roller.jpg',
    icon: Settings,
  },
  {
    title: 'یاتاقان',
    englishTitle: 'Bearing Housing',
    slug: 'bearing-housing',
    description: 'یاتاقان‌ها شامل یک پایه و یک بلبرینگ هستند و نصب و تعویض بلبرینگ را آسان‌تر می‌کنند.',
    image: '/images/categories/ucpa.jpg',
    icon: Settings,
  },
]

const guides = [
  {
    title: 'بلبرینگ چیست؟',
    description: 'معرفی کامل بلبرینگ و اجزای تشکیل‌دهنده آن',
    slug: 'what-is-bearing',
    icon: BookOpen,
  },
  {
    title: 'نحوه انتخاب بلبرینگ',
    description: 'راهنمای انتخاب بلبرینگ مناسب برای هر کاربرد',
    slug: 'how-to-choose',
    icon: CheckCircle,
  },
  {
    title: 'نصب صحیح بلبرینگ',
    description: 'آموزش گام به گام نصب بلبرینگ',
    slug: 'installation',
    icon: Wrench,
  },
  {
    title: 'علت خرابی بلبرینگ‌ها',
    description: 'بررسی دلایل خرابی زودرس و راه‌های پیشگیری',
    slug: 'failure-reasons',
    icon: AlertTriangle,
  },
]

export default function BearingInfoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">آشنایی با بلبرینگ و رولبرینگ‌ها</h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              اطلاعات فنی و کاربردی درباره انواع بلبرینگ، رولبرینگ و یاتاقان برای کمک به انتخاب بهتر
            </p>
          </div>
        </section>

        {/* Quick Guides */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              راهنماهای سریع
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/bearing-info/${guide.slug}`}>
                  <Card className="group h-full hover:shadow-lg transition-all border-0 hover:border-accent">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <guide.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bearing Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">انواع بلبرینگ و رولبرینگ</h2>
              <p className="text-muted-foreground">آشنایی با انواع مختلف بلبرینگ و کاربردهای آن‌ها</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bearingTypes.map((bearing) => (
                <Link key={bearing.slug} href={`/bearing-info/${bearing.slug}`}>
                  <Card className="group overflow-hidden h-full hover:shadow-xl transition-all border-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={bearing.image}
                        alt={bearing.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white/70 text-xs mb-1">{bearing.englishTitle}</p>
                        <h3 className="font-bold text-white text-lg">{bearing.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {bearing.description}
                      </p>
                      <div className="flex items-center text-accent text-sm font-medium">
                        اطلاعات بیشتر
                        <ChevronLeft className="h-4 w-4 mr-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">سوالی دارید؟</h2>
            <p className="text-secondary-foreground/70 mb-6">
              کارشناسان فنی ما آماده پاسخگویی به سوالات شما هستند
            </p>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                تماس با کارشناسان
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
