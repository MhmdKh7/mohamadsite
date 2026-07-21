'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Phone, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Product } from '@/lib/types'

// Mock data - این داده‌ها از API گرفته می‌شوند
const allProducts: Product[] = [
  {
    id: 1,
    name: 'بلبرینگ شیار عمیق SKF 6205',
    description: 'بلبرینگ شیار عمیق با کیفیت بالا مناسب برای کاربردهای صنعتی مختلف. این بلبرینگ دارای آب‌بند لاستیکی دوطرفه است که از نفوذ گرد و غبار و رطوبت جلوگیری می‌کند. مناسب برای موتورهای الکتریکی، پمپ‌ها، گیربکس‌ها و تجهیزات صنعتی.',
    price: 850000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    category: 'ball-bearing',
    brand: 'SKF',
    model: '6205-2RS',
    stock: 50,
    specifications: {
      'قطر داخلی (d)': '25 میلی‌متر',
      'قطر خارجی (D)': '52 میلی‌متر',
      'عرض (B)': '15 میلی‌متر',
      'ظرفیت بار دینامیک': '14.8 کیلونیوتن',
      'ظرفیت بار استاتیک': '7.8 کیلونیوتن',
      'حداکثر سرعت': '12000 دور در دقیقه',
      'نوع آب‌بند': '2RS (لاستیکی دوطرفه)',
      'وزن': '0.13 کیلوگرم'
    }
  },
  {
    id: 2,
    name: 'رولبرینگ مخروطی Timken',
    description: 'رولبرینگ مخروطی برای بارهای شعاعی و محوری ترکیبی',
    price: 1250000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    category: 'roller-bearing',
    brand: 'Timken',
    model: '32205',
    stock: 30,
    specifications: { 'قطر داخلی': '25mm', 'قطر خارجی': '52mm' }
  },
  {
    id: 3,
    name: 'یاتاقان UCP205 FAG',
    description: 'یاتاقان با پایه برای نصب آسان',
    price: 1850000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    category: 'bearing-housing',
    brand: 'FAG',
    model: 'UCP205',
    stock: 25,
    specifications: { 'قطر شفت': '25mm' }
  },
  {
    id: 4,
    name: 'بلبرینگ NSK 6206',
    description: 'بلبرینگ ژاپنی با دقت بالا',
    price: 920000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    category: 'ball-bearing',
    brand: 'NSK',
    model: '6206-ZZ',
    stock: 45,
    specifications: { 'قطر داخلی': '30mm', 'قطر خارجی': '62mm' }
  },
]

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const product = allProducts.find((p) => p.id === parseInt(id))
  const relatedProducts = allProducts.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  ).slice(0, 4)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">محصول یافت نشد</h1>
            <Link href="/products">
              <Button>بازگشت به محصولات</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">خانه</Link>
            <ArrowRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">محصولات</Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{product.brand}</Badge>
                <Badge variant="outline">{product.model}</Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-muted-foreground">تومان</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.stock > 0 ? (
                  <>
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-medium">موجود در انبار</span>
                    <span className="text-muted-foreground">({product.stock} عدد)</span>
                  </>
                ) : (
                  <span className="text-destructive font-medium">ناموجود</span>
                )}
              </div>

              {/* Actions - تماس برای استعلام قیمت و سفارش */}
              <div className="bg-muted/50 rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground mb-3">
                  برای استعلام قیمت، موجودی و ثبت سفارش با ما تماس بگیرید:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:02133948425" className="flex-1">
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Phone className="h-5 w-5 ml-2" />
                      ۰۲۱-۳۳۹۴۸۴۲۵
                    </Button>
                  </a>
                  <a href="tel:09190033560" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full border-2">
                      <Phone className="h-5 w-5 ml-2" />
                      ۰۹۱۹۰۰۳۳۵۶۰
                    </Button>
                  </a>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">ارسال سریع</p>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">ضمانت اصالت</p>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">۷ روز بازگشت</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="specs" className="mt-12">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                مشخصات فنی
              </TabsTrigger>
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                توضیحات
              </TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-6">
              <div className="bg-card rounded-lg p-6">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={key} className={index % 2 === 0 ? 'bg-secondary/30' : ''}>
                        <td className="py-3 px-4 font-medium text-muted-foreground w-1/3">
                          {key}
                        </td>
                        <td className="py-3 px-4">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="description" className="mt-6">
              <div className="bg-card rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">محصولات مرتبط</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
