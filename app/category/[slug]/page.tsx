"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import {
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface Product {
  id: number;
  name: string;
  price: number;
  original_price?: number;
  image_url: string;
  category: string;
  brand: string;
  in_stock: boolean;
}

const categoryNames: Record<string, string> = {
  "ball-bearing": "بلبرینگ",
  "roller-bearing": "رولبرینگ",
  "needle-bearing": "بلبرینگ سوزنی",
  "thrust-bearing": "بلبرینگ کف‌گرد",
  "pillow-block": "یاتاقان",
  "linear-bearing": "بلبرینگ خطی",
  oring: "اورینگ",
  packing: "پکینگ",
  grease: "گریس و روانکار",
};

const categoryDescriptions: Record<string, string> = {
  "ball-bearing":
    "بلبرینگ‌های گوی‌ای برای کاربردهای متنوع صنعتی با قابلیت تحمل بار شعاعی و محوری",
  "roller-bearing":
    "رولبرینگ‌ها برای تحمل بارهای سنگین‌تر در صنایع مختلف طراحی شده‌اند",
  "needle-bearing":
    "بلبرینگ‌های سوزنی با ابعاد کوچک و ظرفیت بار بالا برای فضاهای محدود",
  "thrust-bearing":
    "بلبرینگ‌های کف‌گرد برای تحمل بارهای محوری خالص در ماشین‌آلات",
  "pillow-block":
    "یاتاقان‌های پایه‌دار برای نصب آسان و نگهداری شفت‌ها در صنایع مختلف",
  "linear-bearing":
    "بلبرینگ‌های خطی برای حرکت مستقیم و دقیق در سیستم‌های اتوماسیون",
  oring: "اورینگ‌های آب‌بندی با کیفیت بالا از برندهای معتبر",
  packing: "پکینگ‌های صنعتی برای آب‌بندی در شرایط مختلف دما و فشار",
  grease: "گریس و روانکارهای صنعتی برای عملکرد بهتر بلبرینگ‌ها",
};

// Mock products - در نسخه واقعی از API دریافت می‌شود
const mockProducts: Product[] = [
  {
    id: 1,
    name: "بلبرینگ شیار عمیق 6205",
    price: 185000,
    original_price: 220000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "ball-bearing",
    brand: "SKF",
    in_stock: true,
  },
  {
    id: 2,
    name: "بلبرینگ 6206-2RS",
    price: 210000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "ball-bearing",
    brand: "FAG",
    in_stock: true,
  },
  {
    id: 3,
    name: "بلبرینگ 6207-ZZ",
    price: 245000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "ball-bearing",
    brand: "NSK",
    in_stock: true,
  },
  {
    id: 4,
    name: "بلبرینگ 6208",
    price: 280000,
    original_price: 320000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "ball-bearing",
    brand: "TIMKEN",
    in_stock: false,
  },
  {
    id: 5,
    name: "بلبرینگ 6209-2RS",
    price: 320000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "ball-bearing",
    brand: "SKF",
    in_stock: true,
  },
  {
    id: 6,
    name: "بلبرینگ 6210",
    price: 365000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "ball-bearing",
    brand: "FAG",
    in_stock: true,
  },
  {
    id: 7,
    name: "رولبرینگ استوانه‌ای NU205",
    price: 450000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "roller-bearing",
    brand: "SKF",
    in_stock: true,
  },
  {
    id: 8,
    name: "رولبرینگ مخروطی 30205",
    price: 380000,
    original_price: 420000,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "roller-bearing",
    brand: "TIMKEN",
    in_stock: true,
  },
];

const brands = ["SKF", "FAG", "NSK", "TIMKEN", "NTN", "KOYO", "INA"];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categoryName = categoryNames[slug] || slug;
  const categoryDescription = categoryDescriptions[slug] || "";

  useEffect(() => {
    // Simulate API call - در نسخه واقعی از API استفاده می‌شود
    setLoading(true);
    setTimeout(() => {
      const filtered = mockProducts.filter(
        (p) => p.category === slug || slug === "all"
      );
      setProducts(filtered);
      setLoading(false);
    }, 500);
  }, [slug]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (inStockOnly && !product.in_stock) return false;
    if (
      selectedBrands.length > 0 &&
      !selectedBrands.includes(product.brand)
    )
      return false;
    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name, "fa");
      default:
        return b.id - a.id;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

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
              href="/products"
              className="text-muted-foreground hover:text-accent"
            >
              محصولات
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{categoryName}</span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-l from-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
          <p className="text-white/80 max-w-2xl">{categoryDescription}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-card rounded-lg border p-4 sticky top-4">
              <h3 className="font-bold text-lg mb-4">فیلترها</h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">محدوده قیمت</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={10000000}
                  step={100000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{priceRange[0].toLocaleString("fa-IR")} تومان</span>
                  <span>{priceRange[1].toLocaleString("fa-IR")} تومان</span>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">برند</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock */}
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={inStockOnly}
                    onCheckedChange={(checked) =>
                      setInStockOnly(checked as boolean)
                    }
                  />
                  <span className="text-sm">فقط کالاهای موجود</span>
                </label>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setPriceRange([0, 10000000]);
                  setSelectedBrands([]);
                  setInStockOnly(false);
                }}
              >
                پاک کردن فیلترها
              </Button>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <Button
            variant="outline"
            className="lg:hidden flex items-center gap-2"
            onClick={() => setShowFilters(true)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            فیلترها
          </Button>

          {/* Mobile Filters Modal */}
          {showFilters && (
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-background p-4 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">فیلترها</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Same filter content as sidebar */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">محدوده قیمت</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={10000000}
                    step={100000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString("fa-IR")} تومان</span>
                    <span>{priceRange[1].toLocaleString("fa-IR")} تومان</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">برند</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={inStockOnly}
                      onCheckedChange={(checked) =>
                        setInStockOnly(checked as boolean)
                      }
                    />
                    <span className="text-sm">فقط کالاهای موجود</span>
                  </label>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setPriceRange([0, 10000000]);
                      setSelectedBrands([]);
                      setInStockOnly(false);
                    }}
                  >
                    پاک کردن
                  </Button>
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={() => setShowFilters(false)}
                  >
                    اعمال
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <p className="text-muted-foreground">
                {sortedProducts.length} محصول یافت شد
              </p>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="مرتب‌سازی" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">جدیدترین</SelectItem>
                    <SelectItem value="price-low">ارزان‌ترین</SelectItem>
                    <SelectItem value="price-high">گران‌ترین</SelectItem>
                    <SelectItem value="name">نام محصول</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    className={
                      viewMode === "grid" ? "bg-accent hover:bg-accent/90" : ""
                    }
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    className={
                      viewMode === "list" ? "bg-accent hover:bg-accent/90" : ""
                    }
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Loading */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-muted animate-pulse rounded-lg h-72"
                  />
                ))}
              </div>
            ) : paginatedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  محصولی در این دسته‌بندی یافت نشد
                </p>
                <Link href="/products">
                  <Button className="mt-4 bg-accent hover:bg-accent/90">
                    مشاهده همه محصولات
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                {/* Products */}
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                      : "space-y-4"
                  }
                >
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>

                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i}
                        variant={currentPage === i + 1 ? "default" : "outline"}
                        className={
                          currentPage === i + 1
                            ? "bg-accent hover:bg-accent/90"
                            : ""
                        }
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {(i + 1).toLocaleString("fa-IR")}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
