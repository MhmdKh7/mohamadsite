import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  description: "صفحه‌ای که به‌دنبال آن هستید وجود ندارد.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <p className="text-6xl font-bold text-accent mb-4">۴۰۴</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            صفحه مورد نظر پیدا نشد
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            این صفحه وجود ندارد یا منتقل شده است. می‌توانید به صفحه اصلی برگردید
            یا محصولات را مشاهده کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/">
              <Button>بازگشت به صفحه اصلی</Button>
            </Link>
            <Link href="/products">
              <Button variant="outline">مشاهده محصولات</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
