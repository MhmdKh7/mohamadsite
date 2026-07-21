"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ChevronLeft,
  Calendar,
  User,
  Eye,
  Share2,
  Facebook,
  Twitter,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  views: number;
  readTime: string;
  category: string;
  tags: string[];
}

const mockArticles: Article[] = [
  {
    id: 1,
    slug: "bearing-types-guide",
    title: "راهنمای جامع انواع بلبرینگ و کاربردهای آن",
    excerpt:
      "در این مقاله به بررسی انواع مختلف بلبرینگ و کاربردهای هر یک می‌پردازیم.",
    content: `
      <h2>مقدمه</h2>
      <p>بلبرینگ‌ها یکی از مهم‌ترین قطعات در صنایع مختلف هستند که وظیفه کاهش اصطکاک و تحمل بار را بر عهده دارند. انتخاب صحیح نوع بلبرینگ می‌تواند تأثیر بسزایی در عملکرد و طول عمر ماشین‌آلات داشته باشد.</p>
      
      <h2>انواع بلبرینگ</h2>
      
      <h3>۱. بلبرینگ شیار عمیق (Deep Groove Ball Bearing)</h3>
      <p>این نوع بلبرینگ پرکاربردترین نوع است و برای تحمل بارهای شعاعی و محوری متوسط مناسب می‌باشد. سرعت چرخش بالا از ویژگی‌های این بلبرینگ است.</p>
      <ul>
        <li>تحمل بار شعاعی و محوری</li>
        <li>سرعت چرخش بالا</li>
        <li>نگهداری آسان</li>
        <li>قیمت مناسب</li>
      </ul>
      
      <h3>۲. رولبرینگ استوانه‌ای (Cylindrical Roller Bearing)</h3>
      <p>رولبرینگ‌های استوانه‌ای برای تحمل بارهای شعاعی سنگین طراحی شده‌اند و در صنایع سنگین کاربرد فراوانی دارند.</p>
      
      <h3>۳. رولبرینگ مخروطی (Tapered Roller Bearing)</h3>
      <p>این نوع بلبرینگ قابلیت تحمل همزمان بارهای شعاعی و محوری را دارد و در صنعت خودرو بسیار پرکاربرد است.</p>
      
      <h3>۴. بلبرینگ سوزنی (Needle Bearing)</h3>
      <p>بلبرینگ‌های سوزنی با قطر کوچک و ظرفیت بار بالا برای فضاهای محدود ایده‌آل هستند.</p>
      
      <h3>۵. بلبرینگ کف‌گرد (Thrust Bearing)</h3>
      <p>این بلبرینگ‌ها برای تحمل بارهای محوری خالص طراحی شده‌اند و در گیربکس‌ها کاربرد دارند.</p>
      
      <h2>انتخاب بلبرینگ مناسب</h2>
      <p>برای انتخاب بلبرینگ مناسب باید فاکتورهای زیر را در نظر بگیرید:</p>
      <ol>
        <li>نوع و مقدار بار (شعاعی، محوری یا ترکیبی)</li>
        <li>سرعت چرخش</li>
        <li>شرایط محیطی (دما، رطوبت، گرد و غبار)</li>
        <li>دقت مورد نیاز</li>
        <li>عمر مورد انتظار</li>
      </ol>
      
      <h2>نتیجه‌گیری</h2>
      <p>انتخاب صحیح بلبرینگ نقش مهمی در عملکرد بهینه ماشین‌آلات دارد. با شناخت انواع بلبرینگ و کاربردهای آن‌ها می‌توانید بهترین انتخاب را داشته باشید.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    author: "مهندس احمدی",
    date: "۱۴۰۴/۰۲/۱۵",
    views: 1250,
    readTime: "۸ دقیقه",
    category: "آموزشی",
    tags: ["بلبرینگ", "رولبرینگ", "صنعت", "آموزش"],
  },
  {
    id: 2,
    slug: "bearing-maintenance",
    title: "نکات مهم در نگهداری و تعمیرات بلبرینگ",
    excerpt: "آموزش نحوه نگهداری صحیح از بلبرینگ‌ها برای افزایش طول عمر آن‌ها.",
    content: `
      <h2>اهمیت نگهداری بلبرینگ</h2>
      <p>نگهداری صحیح از بلبرینگ‌ها می‌تواند طول عمر آن‌ها را تا چندین برابر افزایش دهد و از خرابی‌های ناگهانی جلوگیری کند.</p>
      
      <h2>روش‌های نگهداری</h2>
      <h3>۱. روانکاری منظم</h3>
      <p>استفاده از گریس یا روغن مناسب و به موقع از مهم‌ترین عوامل افزایش عمر بلبرینگ است.</p>
      
      <h3>۲. بازرسی دوره‌ای</h3>
      <p>بررسی منظم صدا، لرزش و دمای بلبرینگ می‌تواند مشکلات را در مراحل اولیه شناسایی کند.</p>
      
      <h3>۳. نصب صحیح</h3>
      <p>نصب نادرست یکی از اصلی‌ترین دلایل خرابی زودهنگام بلبرینگ است.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    author: "مهندس محمدی",
    date: "۱۴۰۴/۰۲/۱۰",
    views: 890,
    readTime: "۶ دقیقه",
    category: "آموزشی",
    tags: ["نگهداری", "تعمیرات", "بلبرینگ"],
  },
];

const relatedArticles = [
  {
    id: 3,
    slug: "skf-vs-fag",
    title: "مقایسه برندهای SKF و FAG",
    image: "/placeholder.svg?height=200&width=300",
    date: "۱۴۰۴/۰۲/۰۵",
  },
  {
    id: 4,
    slug: "bearing-failure",
    title: "علل خرابی بلبرینگ و راه‌های پیشگیری",
    image: "/placeholder.svg?height=200&width=300",
    date: "۱۴۰۴/۰۱/۲۸",
  },
  {
    id: 5,
    slug: "industrial-bearings",
    title: "بلبرینگ‌های صنعتی و کاربردها",
    image: "/placeholder.svg?height=200&width=300",
    date: "۱۴۰۴/۰۱/۲۰",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const found = mockArticles.find((a) => a.slug === slug);
      setArticle(found || null);
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4" />
            <div className="h-64 bg-muted rounded mb-4" />
            <div className="h-4 bg-muted rounded w-full mb-2" />
            <div className="h-4 bg-muted rounded w-full mb-2" />
            <div className="h-4 bg-muted rounded w-2/3" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">مقاله یافت نشد</h1>
          <Link href="/blog">
            <Button className="bg-accent hover:bg-accent/90">
              بازگشت به بلاگ
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-accent"
            >
              اخبار و مقالات
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium line-clamp-1">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-accent mb-3">
              <span className="bg-accent/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {article.views.toLocaleString("fa-IR")} بازدید
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-muted-foreground">برچسب‌ها:</span>
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 border-t border-b py-4 mb-8">
            <span className="text-muted-foreground">اشتراک‌گذاری:</span>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="group"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.date}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
