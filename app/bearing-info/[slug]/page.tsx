import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronLeft, Home, CheckCircle2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  bearingArticles,
  getArticleBySlug,
  getAllArticleSlugs,
} from '@/lib/bearing-articles'

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return { title: 'مقاله یافت نشد | رول ماشین' }
  }
  return {
    title: `${article.title} | رول ماشین`,
    description: article.excerpt,
  }
}

export default async function BearingArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = bearingArticles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-20">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-primary/95 to-secondary/90" />
          <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
              <Link href="/" className="flex items-center gap-1 hover:text-accent transition-colors">
                <Home className="h-4 w-4" />
                خانه
              </Link>
              <ChevronLeft className="h-4 w-4" />
              <Link href="/bearing-info" className="hover:text-accent transition-colors">
                آشنایی با بلبرینگ‌ها
              </Link>
              <ChevronLeft className="h-4 w-4" />
              <span className="text-primary-foreground">{article.title}</span>
            </nav>

            <span className="inline-block bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">{article.title}</h1>
            <p className="text-primary-foreground/80 text-sm md:text-base">{article.englishTitle}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Article body */}
              <article className="lg:col-span-2 space-y-8">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-border">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>

                <div className="space-y-4">
                  {article.intro.map((paragraph, i) => (
                    <p key={i} className="text-foreground leading-relaxed text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {article.sections.map((section, i) => (
                  <div key={i} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                      <span className="w-1.5 h-7 bg-accent rounded-full" />
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((paragraph, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="space-y-3">
                        {section.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Related */}
                {relatedArticles.length > 0 && (
                  <Card className="border border-border bg-card">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-1 h-5 bg-accent rounded-full" />
                        مطالب مرتبط
                      </h3>
                      <ul className="space-y-3">
                        {relatedArticles.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/bearing-info/${item.slug}`}
                              className="flex items-center justify-between gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                            >
                              <span>{item.title}</span>
                              <ChevronLeft className="h-4 w-4 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* All topics */}
                <Card className="border border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-accent rounded-full" />
                      همه موضوعات
                    </h3>
                    <ul className="space-y-2">
                      {bearingArticles.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/bearing-info/${item.slug}`}
                            className={
                              item.slug === article.slug
                                ? 'block text-sm font-medium text-accent'
                                : 'block text-sm text-muted-foreground hover:text-accent transition-colors'
                            }
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="border-0 bg-secondary text-secondary-foreground">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">سوالی دارید؟</h3>
                    <p className="text-secondary-foreground/70 text-sm mb-4">
                      کارشناسان ما در انتخاب بهترین محصول شما را راهنمایی می‌کنند.
                    </p>
                    <a href="tel:09190033560">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Phone className="ml-2 h-4 w-4" />
                        ۰۹۱۹۰۰۳۳۵۶۰
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </aside>
            </div>

            {/* Back link */}
            <div className="mt-12">
              <Link href="/bearing-info">
                <Button variant="outline" className="border-2">
                  بازگشت به فهرست مقالات
                  <ChevronLeft className="h-4 w-4 mr-1" />
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
