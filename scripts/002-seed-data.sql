-- =====================================================
-- اسکریپت درج داده‌های اولیه فروشگاه بلرینگ
-- PostgreSQL Seed Data
-- نسخه: 1.0
-- =====================================================

-- =====================================================
-- درج دسته‌بندی‌ها
-- =====================================================
INSERT INTO categories (slug, name, name_en, description, sort_order) VALUES
('ball-bearing', 'بلبرینگ', 'Ball Bearing', 'انواع بلبرینگ شیار عمیق، تماس زاویه‌ای و خود تنظیم', 1),
('roller-bearing', 'رولبرینگ', 'Roller Bearing', 'رولبرینگ مخروطی، استوانه‌ای و کروی', 2),
('bearing-housing', 'یاتاقان', 'Bearing Housing', 'یاتاقان‌های با پایه و بدون پایه', 3),
('oil-seal', 'کاسه نمد', 'Oil Seal', 'انواع کاسه نمد و آب‌بندی', 4),
('belt', 'تسمه', 'V-Belt', 'تسمه‌های صنعتی V شکل', 5),
('chain', 'زنجیر', 'Roller Chain', 'زنجیرهای صنعتی و انتقال قدرت', 6),
('linear-bearing', 'لاینر برینگ', 'Linear Bearing', 'بلبرینگ‌های خطی', 7),
('lubricant', 'روانکار', 'Lubricant', 'گریس و روغن روانکاری', 8)
ON CONFLICT (slug) DO NOTHING;

-- زیر دسته‌های بلبرینگ
INSERT INTO categories (slug, name, name_en, description, parent_id, sort_order) VALUES
('deep-groove', 'شیار عمیق', 'Deep Groove', 'بلبرینگ شیار عمیق تک ردیفه و دو ردیفه', 
    (SELECT id FROM categories WHERE slug = 'ball-bearing'), 1),
('angular-contact', 'تماس زاویه‌ای', 'Angular Contact', 'بلبرینگ تماس زاویه‌ای',
    (SELECT id FROM categories WHERE slug = 'ball-bearing'), 2),
('self-aligning', 'خود تنظیم', 'Self Aligning', 'بلبرینگ خود تنظیم',
    (SELECT id FROM categories WHERE slug = 'ball-bearing'), 3),
('thrust-ball', 'کف گرد', 'Thrust Ball', 'بلبرینگ کف گرد',
    (SELECT id FROM categories WHERE slug = 'ball-bearing'), 4)
ON CONFLICT (slug) DO NOTHING;

-- زیر دسته‌های رولبرینگ
INSERT INTO categories (slug, name, name_en, description, parent_id, sort_order) VALUES
('tapered-roller', 'مخروطی', 'Tapered Roller', 'رولبرینگ مخروطی',
    (SELECT id FROM categories WHERE slug = 'roller-bearing'), 1),
('cylindrical-roller', 'استوانه‌ای', 'Cylindrical Roller', 'رولبرینگ استوانه‌ای',
    (SELECT id FROM categories WHERE slug = 'roller-bearing'), 2),
('spherical-roller', 'کروی', 'Spherical Roller', 'رولبرینگ کروی (بشکه‌ای)',
    (SELECT id FROM categories WHERE slug = 'roller-bearing'), 3),
('needle-roller', 'سوزنی', 'Needle Roller', 'رولبرینگ سوزنی',
    (SELECT id FROM categories WHERE slug = 'roller-bearing'), 4)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- درج برندها
-- =====================================================
INSERT INTO brands (slug, name, name_fa, country, description) VALUES
('skf', 'SKF', 'اس کا اف', 'Sweden', 'یکی از بزرگترین تولیدکنندگان بلبرینگ در جهان'),
('fag', 'FAG', 'فاگ', 'Germany', 'برند آلمانی با کیفیت بالا'),
('nsk', 'NSK', 'ان اس کی', 'Japan', 'تولیدکننده ژاپنی بلبرینگ‌های دقیق'),
('timken', 'Timken', 'تیمکن', 'USA', 'تخصص در رولبرینگ‌های مخروطی'),
('ntn', 'NTN', 'ان تی ان', 'Japan', 'برند ژاپنی معتبر'),
('koyo', 'Koyo', 'کویو', 'Japan', 'تولیدکننده ژاپنی قطعات صنعتی'),
('ina', 'INA', 'آی ان ای', 'Germany', 'متخصص در رولبرینگ سوزنی'),
('iko', 'IKO', 'آی کو', 'Japan', 'تولیدکننده لاینر برینگ'),
('nachi', 'NACHI', 'ناچی', 'Japan', 'برند ژاپنی با تنوع بالا'),
('snr', 'SNR', 'اس ان آر', 'France', 'برند فرانسوی'),
('nmb', 'NMB', 'ان ام بی', 'Japan', 'تخصص در بلبرینگ مینیاتوری'),
('thk', 'THK', 'تی اچ کی', 'Japan', 'تولیدکننده راهنماهای خطی')
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- درج محصولات نمونه
-- =====================================================
INSERT INTO products (sku, name, slug, description, short_description, price, compare_price, category_id, brand_id, model, inner_diameter, outer_diameter, width, stock, is_active, is_featured) VALUES

-- بلبرینگ‌های SKF
('SKF-6205-2RS', 'بلبرینگ شیار عمیق SKF 6205-2RS', 'skf-6205-2rs', 
    'بلبرینگ شیار عمیق تک ردیفه SKF با آب‌بند لاستیکی دو طرفه. این بلبرینگ برای کاربردهایی با بار شعاعی و محوری کم مناسب است و دارای عمر کاری بالا می‌باشد.',
    'بلبرینگ شیار عمیق با آب‌بند دو طرفه',
    850000, 950000,
    (SELECT id FROM categories WHERE slug = 'ball-bearing'),
    (SELECT id FROM brands WHERE slug = 'skf'),
    '6205-2RS', '25mm', '52mm', '15mm', 100, true, true),

('SKF-6206-ZZ', 'بلبرینگ شیار عمیق SKF 6206-ZZ', 'skf-6206-zz',
    'بلبرینگ شیار عمیق با حفاظ فلزی دو طرفه. مناسب برای سرعت‌های بالا.',
    'بلبرینگ شیار عمیق با حفاظ فلزی',
    920000, 1050000,
    (SELECT id FROM categories WHERE slug = 'ball-bearing'),
    (SELECT id FROM brands WHERE slug = 'skf'),
    '6206-ZZ', '30mm', '62mm', '16mm', 75, true, true),

('SKF-6207-2RS', 'بلبرینگ شیار عمیق SKF 6207-2RS', 'skf-6207-2rs',
    'بلبرینگ شیار عمیق با آب‌بند لاستیکی برای محیط‌های گردوغباری.',
    'بلبرینگ با آب‌بند برای محیط‌های سخت',
    1100000, 1250000,
    (SELECT id FROM categories WHERE slug = 'ball-bearing'),
    (SELECT id FROM brands WHERE slug = 'skf'),
    '6207-2RS', '35mm', '72mm', '17mm', 60, true, false),

-- رولبرینگ‌های Timken
('TIM-32205', 'رولبرینگ مخروطی Timken 32205', 'timken-32205',
    'رولبرینگ مخروطی با کیفیت آمریکایی. برای تحمل بارهای شعاعی و محوری ترکیبی طراحی شده است.',
    'رولبرینگ مخروطی برای بارهای ترکیبی',
    1250000, 1400000,
    (SELECT id FROM categories WHERE slug = 'roller-bearing'),
    (SELECT id FROM brands WHERE slug = 'timken'),
    '32205', '25mm', '52mm', '18mm', 45, true, true),

('TIM-32206', 'رولبرینگ مخروطی Timken 32206', 'timken-32206',
    'رولبرینگ مخروطی با ظرفیت بار بالا.',
    'رولبرینگ مخروطی ظرفیت بالا',
    1450000, 1600000,
    (SELECT id FROM categories WHERE slug = 'roller-bearing'),
    (SELECT id FROM brands WHERE slug = 'timken'),
    '32206', '30mm', '62mm', '21mm', 40, true, false),

-- یاتاقان‌های FAG
('FAG-UCP205', 'یاتاقان بلبرینگ FAG UCP205', 'fag-ucp205',
    'یاتاقان با پایه (Pillow Block) برای نصب آسان روی شفت. شامل بلبرینگ UC205 و پایه P205.',
    'یاتاقان با پایه برای نصب آسان',
    1850000, 2100000,
    (SELECT id FROM categories WHERE slug = 'bearing-housing'),
    (SELECT id FROM brands WHERE slug = 'fag'),
    'UCP205', '25mm', NULL, NULL, 35, true, true),

('FAG-UCF206', 'یاتاقان فلنجی FAG UCF206', 'fag-ucf206',
    'یاتاقان فلنجی مربعی چهار پیچه.',
    'یاتاقان فلنجی مربعی',
    2100000, 2350000,
    (SELECT id FROM categories WHERE slug = 'bearing-housing'),
    (SELECT id FROM brands WHERE slug = 'fag'),
    'UCF206', '30mm', NULL, NULL, 28, true, false),

-- بلبرینگ‌های NSK
('NSK-6206-ZZ', 'بلبرینگ NSK 6206-ZZ', 'nsk-6206-zz',
    'بلبرینگ ژاپنی با دقت بالا و عمر طولانی.',
    'بلبرینگ ژاپنی با دقت بالا',
    980000, 1100000,
    (SELECT id FROM categories WHERE slug = 'ball-bearing'),
    (SELECT id FROM brands WHERE slug = 'nsk'),
    '6206-ZZ', '30mm', '62mm', '16mm', 55, true, true),

('NSK-6208-2RS', 'بلبرینگ NSK 6208-2RS', 'nsk-6208-2rs',
    'بلبرینگ شیار عمیق با آب‌بند برای کاربردهای سنگین.',
    'بلبرینگ برای کاربردهای سنگین',
    1350000, 1500000,
    (SELECT id FROM categories WHERE slug = 'ball-bearing'),
    (SELECT id FROM brands WHERE slug = 'nsk'),
    '6208-2RS', '40mm', '80mm', '18mm', 40, true, false),

-- کاسه نمد
('OS-25-42-7', 'کاسه نمد TC 25x42x7', 'oil-seal-25-42-7',
    'کاسه نمد با لبه فلزی برای آب‌بندی روغن.',
    'کاسه نمد استاندارد',
    85000, 100000,
    (SELECT id FROM categories WHERE slug = 'oil-seal'),
    NULL,
    'TC 25x42x7', '25mm', '42mm', '7mm', 200, true, false),

('OS-30-52-10', 'کاسه نمد TC 30x52x10', 'oil-seal-30-52-10',
    'کاسه نمد با مقاومت حرارتی بالا.',
    'کاسه نمد مقاوم حرارت',
    95000, 120000,
    (SELECT id FROM categories WHERE slug = 'oil-seal'),
    NULL,
    'TC 30x52x10', '30mm', '52mm', '10mm', 180, true, false),

-- تسمه
('BELT-A68', 'تسمه V شکل A68', 'v-belt-a68',
    'تسمه V شکل کلاسیک برای انتقال قدرت.',
    'تسمه V کلاسیک',
    120000, 150000,
    (SELECT id FROM categories WHERE slug = 'belt'),
    NULL,
    'A68', NULL, NULL, NULL, 100, true, false),

('BELT-B75', 'تسمه V شکل B75', 'v-belt-b75',
    'تسمه V شکل برای بارهای سنگین.',
    'تسمه V بار سنگین',
    180000, 220000,
    (SELECT id FROM categories WHERE slug = 'belt'),
    NULL,
    'B75', NULL, NULL, NULL, 80, true, false)

ON CONFLICT (sku) DO NOTHING;

-- =====================================================
-- درج مشخصات محصولات
-- =====================================================
INSERT INTO product_specifications (product_id, spec_name, spec_value, sort_order)
SELECT p.id, spec.name, spec.value, spec.sort_order
FROM products p
CROSS JOIN (
    VALUES 
        ('قطر داخلی (d)', '25 mm', 1),
        ('قطر خارجی (D)', '52 mm', 2),
        ('ضخامت (B)', '15 mm', 3),
        ('بار دینامیکی (C)', '14 kN', 4),
        ('بار استاتیکی (C0)', '7.8 kN', 5),
        ('حداکثر سرعت', '12000 rpm', 6),
        ('نوع آب‌بند', '2RS (لاستیکی دو طرفه)', 7),
        ('جنس قفس', 'فولاد', 8)
) AS spec(name, value, sort_order)
WHERE p.sku = 'SKF-6205-2RS'
ON CONFLICT DO NOTHING;

-- =====================================================
-- درج کاربر ادمین
-- رمز عبور: admin123 (هش شده با bcrypt)
-- =====================================================
INSERT INTO users (email, password_hash, name, phone, role, is_active, email_verified) VALUES
('admin@bearing-shop.ir', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY.5R0.2MhGJGHa', 'مدیر سایت', '09121234567', 'admin', true, true)
ON CONFLICT (email) DO NOTHING;

-- =====================================================
-- درج تنظیمات اولیه سایت
-- =====================================================
INSERT INTO site_settings (setting_key, setting_value, setting_type, description) VALUES
('site_name', 'بلرینگ شاپ', 'text', 'نام سایت'),
('site_description', 'مرکز پخش و فروش عمده یاتاقان و بلبرینگ اصل', 'text', 'توضیحات سایت'),
('contact_phone', '02133333333', 'text', 'شماره تماس'),
('contact_email', 'info@bearing-shop.ir', 'text', 'ایمیل تماس'),
('contact_address', 'تهران، بازار آهن‌آلات، پاساژ صنعت، طبقه ۲، پلاک ۱۲۳', 'text', 'آدرس'),
('shipping_cost', '150000', 'number', 'هزینه ارسال'),
('free_shipping_threshold', '5000000', 'number', 'حداقل خرید برای ارسال رایگان'),
('tax_percentage', '9', 'number', 'درصد مالیات بر ارزش افزوده'),
('instagram_url', 'https://instagram.com/bearingshop', 'text', 'آدرس اینستاگرام'),
('telegram_url', 'https://t.me/bearingshop', 'text', 'آدرس تلگرام')
ON CONFLICT (setting_key) DO NOTHING;

-- =====================================================
-- نمایش پیام موفقیت
-- =====================================================
DO $$
BEGIN
    RAISE NOTICE 'داده‌های اولیه با موفقیت درج شدند!';
END $$;
