"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
    ChevronLeft,
    CheckCircle2,
    Wrench,
    Layers,
    Phone,
    ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryInfo } from "@/lib/category-info";

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug as string;

    const info = getCategoryInfo(slug);

    // اگر برای این دسته اطلاعاتی تعریف نشده باشد، یک صفحه معرفی عمومی نمایش داده می‌شود
    if (!info) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-2xl font-bold mb-4">معرفی محصول</h1>
                    <p className="text-muted-foreground mb-8">
                        اطلاعات این محصول به‌زودی تکمیل می‌شود. برای دریافت مشخصات و استعلام قیمت با
                        ما در تماس باشید.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            تماس با ما
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
                        <span className="text-muted-foreground">معرفی محصولات</span>
                        <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">{info.name}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Header */}
            <section className="relative overflow-hidden bg-gradient-to-l from-primary to-secondary text-primary-foreground">
                <div className="accent-line" />
                <div className="container mx-auto px-4 py-12 md:py-16">
                    {info.englishName && (
                        <p className="text-accent font-medium mb-2 tracking-wide">
                            {info.englishName}
                        </p>
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        {info.name}
                    </h1>
                    <p className="text-primary-foreground/85 max-w-2xl text-lg leading-relaxed text-pretty">
                        {info.tagline}
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-10 md:py-14">
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Layers className="h-5 w-5 text-accent" />
                                <h2 className="text-2xl font-bold">معرفی {info.name}</h2>
                            </div>
                            <div className="space-y-4">
                                {info.overview.map((paragraph, i) => (
                                    <p
                                        key={i}
                                        className="text-muted-foreground leading-relaxed text-justify"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>

                        {/* Features */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <ShieldCheck className="h-5 w-5 text-accent" />
                                <h2 className="text-2xl font-bold">ویژگی‌ها و مزایا</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {info.features.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="flex gap-3 rounded-xl border bg-card p-4 hover:border-accent transition-colors"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold mb-1">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Types */}
                        {info.types && info.types.length > 0 && (
                            <section>
                                <div className="flex items-center gap-2 mb-6">
                                    <Wrench className="h-5 w-5 text-accent" />
                                    <h2 className="text-2xl font-bold">انواع {info.name}</h2>
                                </div>
                                <div className="space-y-3">
                                    {info.types.map((type) => (
                                        <div
                                            key={type.title}
                                            className="rounded-xl border bg-card p-5"
                                        >
                                            <h3 className="font-bold mb-1 text-accent">
                                                {type.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {type.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        {/* Applications */}
                        <div className="rounded-2xl border bg-card p-6 sticky top-4">
                            <h3 className="font-bold text-lg mb-4">کاربردهای اصلی</h3>
                            <ul className="space-y-3">
                                {info.applications.map((app) => (
                                    <li key={app} className="flex items-start gap-2 text-sm">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                                        <span className="text-muted-foreground leading-relaxed">
                                            {app}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-6 border-t">
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    برای دریافت مشخصات فنی، موجودی و استعلام قیمت این محصول با
                                    کارشناسان ما در تماس باشید.
                                </p>
                                <Link href="/contact" className="block">
                                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                                        <Phone className="h-4 w-4 ml-2" />
                                        استعلام قیمت و مشاوره
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Bottom CTA */}
                <section className="mt-14 rounded-2xl bg-gradient-to-l from-primary to-secondary p-8 md:p-10 text-center text-primary-foreground">
                    <h2 className="text-2xl font-bold mb-3 text-balance">
                        به دنبال {info.name} با کیفیت هستید؟
                    </h2>
                    <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-6 leading-relaxed">
                        مجموعه رول ماشین با سال‌ها تجربه در تأمین بلبرینگ، یاتاقان و ملزومات صنعتی،
                        آماده ارائه مشاوره و تأمین این محصول از برندهای معتبر است.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                            >
                                تماس با کارشناسان
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
