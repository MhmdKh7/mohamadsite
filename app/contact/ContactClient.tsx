"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
    ChevronLeft,
    Phone,
    Mail,
    MapPin,
    Instagram,
    MessageCircle,
} from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "تلفن ثابت",
        details: ["۰۲۱-۳۳۹۴۸۴۲۵"],
        description: "شنبه تا پنج‌شنبه ۹ صبح تا ۶ عصر",
    },
    {
        icon: Phone,
        title: "تلفن همراه",
        details: ["09190033560", "09122369623"],
        description: "پشتیبانی و مشاوره",
    },
    {
        icon: Mail,
        title: "ایمیل",
        details: ["rollmachine.bearing@gmail.com"],
        description: "پاسخگویی در کمتر از ۲۴ ساعت",
    },
    {
        icon: MapPin,
        title: "آدرس",
        details: ["خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲"],
        description: "تهران",
    },
];

const socialLinks = [
    { icon: Instagram, name: "اینستاگرام", url: "https://www.instagram.com/roll_machiine?igsh=dDU3emxtcmxxdWdt", color: "bg-pink-500" },
    { icon: MessageCircle, name: "بله", url: "https://ble.ir/roll_machiine", color: "bg-blue-500" },
    { icon: MessageCircle, name: "واتساپ", url: "https://wa.me/989190033560", color: "bg-green-500" },
];

const mapQuery = "پاساژ صفا، کوچه دکتر نفیسی، خیابان سعدی جنوبی، تهران";
const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&hl=fa&z=17&output=embed`;
const mapOpenSrc = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="bg-muted/30 border-b">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-muted-foreground hover:text-accent">
                            صفحه اصلی
                        </Link>
                        <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">تماس با ما</span>
                    </nav>
                </div>
            </div>

            <section className="bg-gradient-to-l from-primary to-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با رول ماشین</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        سوالی دارید؟ تیم پشتیبانی ما آماده پاسخگویی به شماست
                    </p>
                </div>
            </section>

            <section className="py-12 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <item.icon className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                {item.details.map((detail, i) => (
                                    <p key={i} className="text-foreground">
                                        {detail}
                                    </p>
                                ))}
                                <p className="text-sm text-muted-foreground mt-2">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 space-y-8">
                    <div className="bg-card p-4 md:p-6 rounded-xl border">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                            <h2 className="text-2xl font-bold">موقعیت فروشگاه</h2>
                            <a
                                href={mapOpenSrc}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent font-medium hover:underline"
                            >
                                مشاهده در گوگل‌مپ
                            </a>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-lg bg-muted" style={{ minHeight: 420 }}>
                            <iframe
                                title="نقشه فروشگاه رول ماشین"
                                src={mapEmbedSrc}
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                            خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card p-6 rounded-xl border">
                            <h3 className="font-bold text-lg mb-4">
                                ما را در شبکه‌های اجتماعی دنبال کنید
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity w-12 h-12 flex items-center justify-center`}
                                        title={social.name}
                                    >
                                        <social.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-accent/10 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">تماس فوری</h3>
                            <p className="text-muted-foreground mb-4">
                                برای مشاوره و سفارش تلفنی با کارشناسان ما تماس بگیرید
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="tel:02133948425"
                                    className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors min-h-11"
                                >
                                    <Phone className="h-5 w-5" aria-hidden="true" />
                                    ۰۲۱-۳۳۹۴۸۴۲۵
                                </a>
                                <a
                                    href="tel:09122369623"
                                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors min-h-11"
                                >
                                    <Phone className="h-5 w-5" aria-hidden="true" />
                                    09122369623
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        سوالات متداول
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: "آیا امکان خرید عمده وجود دارد؟",
                                a: "بله، برای خرید عمده با تخفیف ویژه با بخش فروش تماس بگیرید.",
                            },
                            {
                                q: "زمان ارسال سفارشات چقدر است؟",
                                a: "سفارشات معمولا ظرف 24 تا 48 ساعت کاری ارسال می‌شوند.",
                            },
                            {
                                q: "آیا محصولات گارانتی دارند؟",
                                a: "بله، تمامی محصولات دارای گارانتی اصالت هستند.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg border">
                                <h3 className="font-bold mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
