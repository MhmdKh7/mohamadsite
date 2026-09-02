'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  BookOpen,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

// دسته‌بندی محصولات - هر مورد به صفحه دسته‌بندی خودش لینک می‌شود
const categories = [
  // انواع یاتاقان‌های صنعتی
  { name: 'یاتاقان UC', description: 'یاتاقان UC با کیفیت بالا', slug: 'uc' },
  { name: 'یاتاقان UCP', description: 'یاتاقان با پایه UCP', slug: 'ucp' },
  { name: 'یاتاقان UCF', description: 'یاتاقان چهارگوش UCF', slug: 'ucf' },
  { name: 'یاتاقان UCT', description: 'یاتاقان کشویی UCT', slug: 'uct' },
  { name: 'یاتاقان UCFC', description: 'یاتاقان فلنجی UCFC', slug: 'ucfc' },
  { name: 'یاتاقان UCPA', description: 'یاتاقان قابل تنظیم UCPA', slug: 'ucpa' },
  { name: 'یاتاقان SA', description: 'یاتاقان SA', slug: 'sa' },
  { name: 'یاتاقان UK', description: 'یاتاقان UK', slug: 'uk' },
  { name: 'یاتاقان SN', description: 'یاتاقان SN', slug: 'sn' },
  { name: 'یاتاقان SNL', description: 'یاتاقان SNL', slug: 'snl' },
  // ملزومات صنعتی
  { name: 'بلبرینگ', description: 'انواع بلبرینگ شیار عمیق', slug: 'ball-bearing' },
  { name: 'رولبرینگ', description: 'رولبرینگ مخروطی و استوانه‌ای', slug: 'roller-bearing' },
  { name: 'تسمه', description: 'تسمه‌های صنعتی', slug: 'belt' },
  { name: 'کاسه نمد', description: 'انواع کاسه نمد و آب‌بندی', slug: 'oil-seal' },
  // روان‌کننده‌ها
  { name: 'گریس', description: 'انواع گریس صنعتی', slug: 'grease' },
  { name: 'روغن صنعتی', description: 'روغن‌های صنعتی', slug: 'oil' },
  { name: 'چسب صنعتی', description: 'چسب‌های صنعتی', slug: 'glue' },
  // واشر و آب‌بندی
  { name: 'پکینگ', description: 'انواع پکینگ سفارشی', slug: 'packing' },
  { name: 'اورینگ', description: 'انواع اورینگ', slug: 'oring' },
  { name: 'تفلون', description: 'ورق و نوار تفلون', slug: 'teflon' },
  // سایر
  { name: 'پیچ و مهره', description: 'پیچ، مهره، واشر، خار، پولی', slug: 'bolt-nut' },
]

const bearingInfoItems = [
  { name: 'بلبرینگ چیست؟', href: '/bearing-info/what-is-bearing' },
  { name: 'انواع بلبرینگ', href: '/bearing-info/bearing-types' },
  { name: 'رولبرینگ چیست؟', href: '/bearing-info/what-is-roller-bearing' },
  { name: 'یاتاقان چیست؟', href: '/bearing-info/what-is-housing' },
  { name: 'نحوه انتخاب بلبرینگ', href: '/bearing-info/how-to-choose' },
  { name: 'علت خرابی بلبرینگ‌ها', href: '/bearing-info/failure-reasons' },
  { name: 'نصب صحیح بلبرینگ', href: '/bearing-info/installation' },
]

const navLinks = [
  { name: 'صفحه اصلی', href: '/' },
  { name: 'درباره ما', href: '/about' },
  { name: 'تماس با ما', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - Dark Gray/Black */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:02133948425" aria-label="تماس با فروشگاه ۰۲۱-۳۳۹۴۸۴۲۵" className="flex items-center gap-2 hover:text-accent transition-colors min-h-11">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">۰۲۱-۳۳۹۴۸۴۲۵</span>
            </a>
            <a href="mailto:bearing_rollmachine@yahoo.com" className="hidden md:flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>bearing_rollmachine@yahoo.com</span>
            </a>
            <span className="hidden lg:flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا
            </span>
          </div>
          <a href="/brand/zdk" className="text-accent font-medium text-xs sm:text-sm">
            نمایندگی انحصاری یاتاقان های ZDK در ایران
          </a>
        </div>
      </div>

      {/* Main header - White/Light */}
      <div className={cn(
        "bg-card border-b transition-all duration-300",
        isScrolled ? "py-3 shadow-lg" : "py-4"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="لوگو رول ماشین"
                  width={48}
                  height={48}
                  className="object-contain"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-foreground">رول ماشین</span>
                <p className="text-xs text-muted-foreground">Rollmachine - مرکز پخش یاتاقان و بلبرینگ</p>
              </div>
            </Link>

            {/* Contact info - Desktop */}
            <div className="flex-1 hidden lg:flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">تماس با فروشگاه</p>
                  <a href="tel:02133948425" className="font-bold text-foreground hover:text-accent transition-colors">
                    ۰۲۱-۳۳۹۴۸۴۲۵
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">پشتیبانی و مشاوره</p>
                  <a href="tel:09122369623" className="font-bold text-foreground hover:text-accent transition-colors">
                    09122369623
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label={mobileMenuOpen ? "بستن منو" : "باز کردن منو"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Dark with Red accents */}
      <nav className="hidden lg:block bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Categories Mega Menu - نمایشی */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-2 px-6 py-6 rounded-none text-secondary-foreground hover:bg-accent hover:text-accent-foreground font-medium"
                  >
                    <Menu className="h-5 w-5" />
                    دسته‌بندی محصولات
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-72 max-h-[70vh] overflow-y-auto">
                  {categories.map((cat) => (
                    <DropdownMenuItem key={cat.slug} asChild className="cursor-pointer">
                      <Link href={`/category/${cat.slug}`} className="flex flex-col items-start py-3">
                        <span className="font-medium">{cat.name}</span>
                        <span className="text-xs text-muted-foreground">{cat.description}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Bearing Info Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-2 px-5 py-6 rounded-none text-secondary-foreground hover:bg-accent hover:text-accent-foreground font-medium"
                  >
                    <BookOpen className="h-4 w-4" />
                    آشنایی با بلبرینگ‌ها
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {bearingInfoItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="py-2">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-5 py-4 text-sm font-medium transition-colors relative text-secondary-foreground",
                    pathname === link.href
                      ? "text-accent"
                      : "hover:text-accent"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </Link>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="flex items-center gap-2 text-sm text-secondary-foreground">
              <Phone className="h-4 w-4 text-accent" />
              <span>مشاوره و سفارش:</span>
              <a href="tel:09122369623" className="text-accent font-bold hover:underline">
                09122369623
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 rounded-lg font-medium transition-colors",
                      pathname === link.href ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li className="border-t border-border pt-3 mt-3">
                <p className="px-4 text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <Menu className="h-4 w-4" />
                  دسته‌بندی محصولات
                </p>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="block py-2 px-4 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </li>

              <li className="border-t border-border pt-3 mt-3">
                <p className="px-4 text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  آشنایی با بلبرینگ‌ها
                </p>
                {bearingInfoItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 px-4 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
