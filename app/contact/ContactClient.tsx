"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
    ChevronLeft,
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Instagram,
    MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
        details: ["bearing_rollmachine@yahoo.com"],
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
import type { Metadata } from "next";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

        setTimeout(() => setSuccess(false), 5000);
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
                        <span className="text-foreground font-medium">تماس با ما</span>
                    </nav>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-l from-primary to-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با رول ماشین</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        سوالی دارید؟ تیم پشتیبانی ما آماده پاسخگویی به شماست
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
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

            {/* Contact Form & Map */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-card p-8 rounded-xl border">
                            <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>

                            {success && (
                                <div className="bg-green-500/10 text-green-600 p-4 rounded-lg mb-6">
                                    پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">نام و نام خانوادگی *</Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            placeholder="نام خود را وارد کنید"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">شماره تماس *</Label>
                                        <Input
                                            id="phone"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            placeholder="09122369623"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">ایمیل</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        placeholder="email@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">موضوع *</Label>
                                    <Input
                                        id="subject"
                                        value={formData.subject}
                                        onChange={(e) =>
                                            setFormData({ ...formData, subject: e.target.value })
                                        }
                                        placeholder="موضوع پیام"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">متن پیام *</Label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        placeholder="پیام خود را بنویسید..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-accent hover:bg-accent/90"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        "در حال ارسال..."
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 ml-2" />
                                            ارسال پیام
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Map & Social */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="bg-card p-4 rounded-xl border">
                                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                    <div className="text-center text-muted-foreground">
                                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                                        <p>نقشه گوگل</p>
                                        <p className="text-sm">
                                            خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
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
                                            className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                                            title={social.name}
                                        >
                                            <social.icon className="h-6 w-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="bg-accent/10 p-6 rounded-xl">
                                <h3 className="font-bold text-lg mb-2">تماس فوری</h3>
                                <p className="text-muted-foreground mb-4">
                                    برای مشاوره و سفارش تلفنی با کارشناسان ما تماس بگیرید
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="tel:02133948425"
                                        className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                                    >
                                        <Phone className="h-5 w-5" />
                                        ۰۲۱-۳۳۹۴۸۴۲۵
                                    </a>
                                    <a
                                        href="tel:09122369623"
                                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        <Phone className="h-5 w-5" />
                                        09122369623
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
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
