import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Settings,
  Send
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Settings className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground">رول ماشین</h3>
                <p className="text-xs text-primary-foreground/70">Rollmachine - مرکز پخش یاتاقان و بلبرینگ</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              تهیه و توزیع انواع بلبرینگ، رولبرینگ، تسمه و کاسه نمد |
              توزیع گریس، روغن و چسب صنعتی |
              ساخت پکینگ، اورینگ و تفلون سفارشی |
              تهیه و توزیع پیچ، مهره، واشر، خار و پولی
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/roll_machiine?igsh=dDU3emxtcmxxdWdt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://ble.ir/roll_machiine"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/989190033560"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-foreground">دسترسی سریع</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/bearing-info" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  آشنایی با بلبرینگ‌ها
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-foreground">خدمات ما</h4>
            <ul className="space-y-3">
              <li>

                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                یاتاقان‌های صنعتی (UC, UCP, UCF...)

              </li>
              <li>

                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                بلبرینگ و رولبرینگ

              </li>
              <li>

                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                گریس و روغن صنعتی

              </li>
              <li>

                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                پکینگ، اورینگ و تفلون

              </li>
              <li>

                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                تسمه و کاسه نمد

              </li>
              <li>

                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                پیچ، مهره، واشر، خار، پولی

              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-foreground">اطلاعات تماس</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">شماره ثابت</p>
                  <a href="tel:02133948425" className="text-primary-foreground hover:text-accent transition-colors font-medium">
                    ۰۲۱-۳۳۹۴۸۴۲۵
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">شماره همراه</p>
                  <a href="tel:09190033560" className="text-primary-foreground hover:text-accent transition-colors font-medium">
                    09190033560
                  </a>
                  <gap className="mx-2 text-primary-foreground/60">|</gap>

                  <a href="tel:09122369623" className="text-primary-foreground hover:text-accent transition-colors font-medium">
                    09122369623
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">ایمیل</p>
                  <a href="mailto:bearing_rollmachine@yahoo.com" className="text-primary-foreground hover:text-accent transition-colors font-medium text-sm">
                    bearing_rollmachine@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">آدرس</p>
                  <p className="text-primary-foreground/90 text-sm">
                    خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 bg-black/20">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              تمامی حقوق این سایت متعلق به <span className="text-accent font-medium">فروشگاه رول ماشین (Rollmachine)</span> می‌باشد. &copy; ۱۴۰۳
            </p>
            <a href="https://t.me/Mhmd_Kh_7" className="text-primary-foreground/50 text-xs hover:text-accent transition-colors">
              By МохаммадРезаХадеми
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
