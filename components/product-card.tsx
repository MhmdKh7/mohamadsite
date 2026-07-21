'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Eye, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product | {
    id: number
    name: string
    price: number
    original_price?: number
    image_url: string
    category?: string
    brand: string
    in_stock?: boolean
    stock?: number
    model?: string
  }
  viewMode?: 'grid' | 'list'
}

export function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price)
  }

  const stock = (product as Product).stock ?? ((product as any).in_stock === false ? 0 : 10)
  const inStock = stock > 0

  // List View
  if (viewMode === 'list') {
    return (
      <Link href={`/products/${product.id}`}>
        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border hover:border-accent">
          <div className="flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-48 aspect-square sm:aspect-auto sm:h-48 bg-muted overflow-hidden flex-shrink-0">
              <Image
                src={product.image_url || '/placeholder.svg?height=200&width=200'}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 200px"
              />
              {!inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge className="bg-primary text-primary-foreground">ناموجود</Badge>
                </div>
              )}
            </div>
            
            <CardContent className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <Badge variant="secondary" className="mb-2 text-xs">
                  {product.brand}
                </Badge>
                <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>
                {(product as Product).model && (
                  <p className="text-sm text-muted-foreground">
                    کد محصول: {(product as Product).model}
                  </p>
                )}
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <p className="text-xl font-bold text-accent">
                  {formatPrice(product.price)}
                  <span className="text-sm text-muted-foreground mr-1">تومان</span>
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Eye className="h-4 w-4 ml-2" />
                  مشاهده جزئیات
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    )
  }

  // Grid View (default)
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="product-card group overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-0 bg-card">
        <div className="relative aspect-square bg-muted overflow-hidden">
          <Image
            src={product.image_url || '/placeholder.svg?height=300&width=300'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Overlay with actions */}
          <div className="product-overlay absolute inset-0 bg-black/60 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-10 w-10 bg-white hover:bg-accent hover:text-accent-foreground"
            >
              <Eye className="h-5 w-5" />
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {stock <= 5 && stock > 0 && (
              <Badge className="bg-yellow-500 text-white text-xs">
                فقط {stock} عدد
              </Badge>
            )}
            {!inStock && (
              <Badge className="bg-primary text-primary-foreground text-xs">
                ناموجود
              </Badge>
            )}
          </div>

          {/* Brand badge */}
          <div className="absolute bottom-2 left-2">
            <Badge variant="secondary" className="bg-white/90 text-foreground font-bold">
              {product.brand}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4 text-center">
          <h3 className="font-bold text-foreground mb-1 line-clamp-2 min-h-[3rem] text-sm">
            {product.name}
          </h3>
          {(product as Product).model && (
            <p className="text-xs text-muted-foreground mb-3">
              کد: {(product as Product).model}
            </p>
          )}
          
          {/* Price */}
          <div className="border-t pt-3">
            <p className="text-lg font-bold text-accent">
              {formatPrice(product.price)}
              <span className="text-xs text-muted-foreground mr-1">تومان</span>
            </p>
          </div>

          {/* View details button */}
          <Button
            size="sm"
            className="w-full mt-3 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Eye className="h-4 w-4 ml-2" />
            مشاهده جزئیات
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
