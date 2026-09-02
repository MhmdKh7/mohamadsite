"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { ChevronLeft, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

const brandInfo: Record<
    string,
    { name: string; country: string; description: string }
> = {
    skf: {
        name: "SKF",
        country: "سوئد",
        description:
            "SKF یکی از بزرگ‌ترین تولیدکنندگان بلبرینگ و قطعات صنعتی در جهان است که از سال 1907 فعالیت خود را آغاز کرده است.",
    },
    fag: {
        name: "FAG",
        country: "آلمان",
        description:
            "FAG یک برند آلمانی با بیش از 130 سال تجربه در تولید بلبرینگ‌های صنعتی با کیفیت بالا.",
    },
    nsk: {
        name: "NSK",
        country: "ژاپن",
        description:
            "NSK یک شرکت ژاپنی پیشرو در تولید بلبرینگ و قطعات دقیق برای صنایع مختلف.",
    },
    timken: {
        name: "TIMKEN",
        country: "آمریکا",
        description:
            "TIMKEN یک برند آمریکایی معتبر در زمینه تولید بلبرینگ‌های مخروطی و قطعات صنعتی.",
    },
    ntn: {
        name: "NTN",
        country: "ژاپن",
        description:
            "NTN یکی از بزرگ‌ترین تولیدکنندگان بلبرینگ در ژاپن با محصولات باکیفیت جهانی.",
    },
    koyo: {
        name: "KOYO",
        country: "ژاپن",
        description:
            "KOYO یک برند ژاپنی با تمرکز بر تولید بلبرینگ‌های خودرویی و صنعتی.",
    },
    ina: {
        name: "INA",
        country: "آلمان",
        description:
            "INA یک برند آلمانی تخصصی در تولید بلبرینگ‌های سوزنی و قطعات دقیق.",
    },
};

// Mock products
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
        brand: "SKF",
        in_stock: true,
    },
    {
        id: 3,
        name: "رولبرینگ استوانه‌ای NU205",
        price: 450000,
        image_url: "/placeholder.svg?height=300&width=300",
        category: "roller-bearing",
        brand: "SKF",
        in_stock: true,
    },
    {
        id: 4,
        name: "بلبرینگ کف‌گرد 51205",
        price: 280000,
        image_url: "/placeholder.svg?height=300&width=300",
        category: "thrust-bearing",
        brand: "SKF",
        in_stock: true,
    },
];

export default function BrandPage() {
    const params = useParams();
    const slug = params.slug as string;

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy, setSortBy] = useState("newest");

    const brand = brandInfo[slug.toLowerCase()] || {
        name: slug.toUpperCase(),
        country: "نامشخص",
        description: "",
    };

    useEffect(() => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const filtered = mockProducts.filter(
                (p) => p.brand.toLowerCase() === slug.toLowerCase()
            );
            setProducts(filtered);
            setLoading(false);
        }, 500);
    }, [slug]);

    // Sort products
    const sortedProducts = [...products].sort((a, b) => {
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
                            برندها
                        </Link>
                        <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">{brand.name}</span>
                    </nav>
                </div>
            </div>

            {/* Brand Header */}
            <div className="bg-gradient-to-l from-primary to-secondary text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-4">
                            <span className="text-3xl font-bold text-primary">
                                {brand.name}
                            </span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-2">
                                محصولات {brand.name}
                            </h1>
                            <p className="text-white/80 mb-2">کشور سازنده: {brand.country}</p>
                            <p className="text-white/70 max-w-2xl">{brand.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <p className="text-muted-foreground">
                        {products.length} محصول از برند {brand.name}
                    </p>

                    <div className="flex items-center gap-4">
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

                {/* Products */}
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-muted animate-pulse rounded-lg h-72" />
                        ))}
                    </div>
                ) : sortedProducts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">
                            محصولی از این برند یافت نشد
                        </p>
                        <Link href="/products">
                            <Button className="mt-4 bg-accent hover:bg-accent/90">
                                مشاهده همه محصولات
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div
                        className={
                            viewMode === "grid"
                                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                : "space-y-4"
                        }
                    >
                        {sortedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                viewMode={viewMode}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
