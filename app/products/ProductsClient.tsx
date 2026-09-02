'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SlidersHorizontal, Grid3X3, List, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Product } from '@/lib/types'

// Mock data - این داده‌ها از API گرفته می‌شوند
const allProducts: Product[] = [
  {
    id: 1,
    name: 'بلبرینگ شیار عمیق SKF 6205',
    description: 'بلبرینگ شیار عمیق با کیفیت بالا مناسب برای کاربردهای صنعتی',
    price: 850000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'ball-bearing',
    brand: 'SKF',
    model: '6205-2RS',
    stock: 50,
    specifications: { 'قطر داخلی': '25mm', 'قطر خارجی': '52mm' }
  },
  {
    id: 2,
    name: 'رولبرینگ مخروطی Timken',
    description: 'رولبرینگ مخروطی برای بارهای شعاعی و محوری ترکیبی',
    price: 1250000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
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
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
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
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'ball-bearing',
    brand: 'NSK',
    model: '6206-ZZ',
    stock: 45,
    specifications: { 'قطر داخلی': '30mm', 'قطر خارجی': '62mm' }
  },
  {
    id: 5,
    name: 'کاسه نمد SKF',
    description: 'کاسه نمد با کیفیت برای آب‌بندی',
    price: 180000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'oil-seal',
    brand: 'SKF',
    model: 'CR 25x42x7',
    stock: 100,
    specifications: { 'قطر داخلی': '25mm', 'قطر خارجی': '42mm' }
  },
  {
    id: 6,
    name: 'رولبرینگ استوانه‌ای FAG',
    description: 'رولبرینگ استوانه‌ای برای بار شعاعی بالا',
    price: 1450000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'roller-bearing',
    brand: 'FAG',
    model: 'NU205',
    stock: 20,
    specifications: { 'قطر داخلی': '25mm', 'قطر خارجی': '52mm' }
  },
  {
    id: 7,
    name: 'بلبرینگ NTN 6207',
    description: 'بلبرینگ شیار عمیق با آب‌بند لاستیکی',
    price: 980000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'ball-bearing',
    brand: 'NTN',
    model: '6207-2RS',
    stock: 35,
    specifications: { 'قطر داخلی': '35mm', 'قطر خارجی': '72mm' }
  },
  {
    id: 8,
    name: 'یاتاقان UCF205 Koyo',
    description: 'یاتاقان فلنجی چهارگوش',
    price: 2100000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'bearing-housing',
    brand: 'Koyo',
    model: 'UCF205',
    stock: 15,
    specifications: { 'قطر شفت': '25mm' }
  },
]

const categories = [
  { value: 'ball-bearing', label: 'بلبرینگ' },
  { value: 'roller-bearing', label: 'رولبرینگ' },
  { value: 'bearing-housing', label: 'یاتاقان' },
  { value: 'oil-seal', label: 'کاسه نمد' },
]

const brands = ['SKF', 'FAG', 'NSK', 'Timken', 'NTN', 'Koyo']

const sortOptions = [
  { value: 'newest', label: 'جدیدترین' },
  { value: 'price-asc', label: 'ارزان‌ترین' },
  { value: 'price-desc', label: 'گران‌ترین' },
  { value: 'name', label: 'نام محصول' },
]

function ProductsContent() {
  const searchParams = useSearchParams()

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [sortBy, setSortBy] = useState('newest')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // مقداردهی اولیه فیلترها از روی پارامترهای URL
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '')
    setSearchQuery(searchParams.get('search') || '')
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts]

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.includes(searchQuery) ||
          p.model.includes(searchQuery) ||
          p.brand.includes(searchQuery)
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand))
    }

    // Filter by price
    if (priceRange.min) {
      filtered = filtered.filter((p) => p.price >= parseInt(priceRange.min))
    }
    if (priceRange.max) {
      filtered = filtered.filter((p) => p.price <= parseInt(priceRange.max))
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'fa'))
        break
      default:
        filtered.sort((a, b) => b.id - a.id)
    }

    return filtered
  }, [searchQuery, selectedCategory, selectedBrands, priceRange, sortBy])

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedBrands([])
    setPriceRange({ min: '', max: '' })
    setSearchQuery('')
  }

  const hasActiveFilters =
    selectedCategory || selectedBrands.length > 0 || priceRange.min || priceRange.max

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <Label className="text-sm font-medium mb-2 block">جستجو</Label>
        <Input
          placeholder="نام یا مدل محصول..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div>
        <Label className="text-sm font-medium mb-2 block">دسته‌بندی</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="همه دسته‌بندی‌ها" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">همه دسته‌بندی‌ها</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Brands */}
      <div>
        <Label className="text-sm font-medium mb-2 block">برند</Label>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium mb-2 block">محدوده قیمت (تومان)</Label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="از"
            value={priceRange.min}
            onChange={(e) => setPriceRange((p) => ({ ...p, min: e.target.value }))}
          />
          <Input
            type="number"
            placeholder="تا"
            value={priceRange.max}
            onChange={(e) => setPriceRange((p) => ({ ...p, max: e.target.value }))}
          />
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          <X className="h-4 w-4 ml-2" />
          حذف فیلترها
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">محصولات</h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} محصول یافت شد
            </p>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-card rounded-lg p-6 shadow-sm">
                <h2 className="font-semibold text-lg mb-4">فیلترها</h2>
                <FilterContent />
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <SlidersHorizontal className="h-4 w-4 ml-2" />
                        فیلترها
                        {hasActiveFilters && (
                          <span className="mr-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                            !
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80">
                      <SheetHeader>
                        <SheetTitle>فیلترها</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* View Mode */}
                  <div className="hidden sm:flex items-center border rounded-lg p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-4">
                    محصولی با این مشخصات یافت نشد
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    حذف فیلترها
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProductsContent />
    </Suspense>
  )
}
