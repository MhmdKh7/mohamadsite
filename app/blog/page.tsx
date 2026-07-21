import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const articles = [
  {
    title: 'بلبرینگ چیست و چه کاربردی دارد؟',
    excerpt: 'بلبرینگ یا یاتاقان توپی، یک نوع چرخنده از خانواده یاتاقان است که از ساچمه‌های فلزی برای کاهش اصطکاک استفاده می‌کند. در این مقاله به معرفی کامل بلبرینگ‌ها می‌پردازیم.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    date: '۱۵ اردیبهشت ۱۴۰۳',
    author: 'تیم فنی بلرینگ شاپ',
    slug: 'what-is-bearing',
    category: 'آموزشی',
    featured: true,
  },
  {
    title: 'نحوه صحیح نصب و جا زدن بلبرینگ',
    excerpt: 'با توجه به اینکه از هر شش مورد خرابی زودرس بیرینگ‌ها، یکی به علت نصب نادرست است، آموزش نصب صحیح بسیار مهم است.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    date: '۱۰ اردیبهشت ۱۴۰۳',
    author: 'تیم فنی بلرینگ شاپ',
    slug: 'how-to-install-bearing',
    category: 'آموزشی',
    featured: true,
  },
  {
    title: 'علل خرابی زودرس بلبرینگ‌ها',
    excerpt: 'بیرینگ‌ها به طور ناگهانی نمی‌شکنند. یک رویکرد ناظر و دقیق می‌تواند از خرابی‌های زودرس جلوگیری کند.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    date: '۵ اردیبهشت ۱۴۰۳',
    author: 'تیم فنی بلرینگ شاپ',
    slug: 'bearing-failure-reasons',
    category: 'فنی',
    featured: false,
  },
  {
    title: 'تفاوت بلبرینگ و رولبرینگ',
    excerpt: 'در این مقاله به بررسی تفاوت‌های اصلی بین بلبرینگ‌های ساچمه‌ای و رولبرینگ‌های غلتکی می‌پردازیم.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    date: '۱ اردیبهشت ۱۴۰۳',
    author: 'تیم فنی بلرینگ شاپ',
    slug: 'ball-vs-roller-bearing',
    category: 'فنی',
    featured: false,
  },
  {
    title: 'راهنمای انتخاب بلبرینگ مناسب',
    excerpt: 'انتخاب بلبرینگ مناسب برای هر کاربرد نیازمند در نظر گرفتن عوامل مختلفی است که در این مقاله بررسی می‌کنیم.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    date: '۲۵ فروردین ۱۴۰۳',
    author: 'تیم فنی بلرینگ شاپ',
    slug: 'bearing-selection-guide',
    category: 'راهنما',
    featured: false,
  },
  {
    title: 'روانکاری صحیح بلبرینگ‌ها',
    excerpt: 'روانکاری صحیح یکی از مهم‌ترین عوامل در طول عمر بلبرینگ است. در این مقاله به اصول روانکاری می‌پردازیم.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    date: '۲۰ فروردین ۱۴۰۳',
    author: 'تیم فنی بلرینگ شاپ',
    slug: 'bearing-lubrication',
    category: 'آموزشی',
    featured: false,
  },
]

const categories = ['همه', 'آموزشی', 'فنی', 'راهنما', 'اخبار']

export default function BlogPage() {
  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">اخبار و مقالات</h1>
            <p className="text-primary-foreground/70">آخرین مطالب آموزشی و فنی در مورد بلبرینگ و یاتاقان</p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-card border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={cat === 'همه' ? 'default' : 'outline'}
                  className={`cursor-pointer whitespace-nowrap ${cat === 'همه' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              مقالات ویژه
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-0">
                    <div className="md:flex h-full">
                      <div className="relative md:w-2/5 h-48 md:h-auto">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="md:w-3/5 p-6 flex flex-col justify-center">
                        <Badge className="w-fit mb-3 bg-accent/10 text-accent border-0">
                          {article.category}
                        </Badge>
                        <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {article.author}
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Articles */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              همه مقالات
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="group overflow-hidden h-full hover:shadow-lg transition-shadow border-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center text-accent font-medium">
                          ادامه مطلب
                          <ChevronLeft className="h-4 w-4 mr-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
