# راهنمای راه‌اندازی پایگاه داده PostgreSQL

## پیش‌نیازها

1. PostgreSQL نسخه 14 یا بالاتر
2. دسترسی به سرور PostgreSQL با مجوز CREATE DATABASE

## مراحل نصب

### ۱. ایجاد پایگاه داده

```sql
CREATE DATABASE bearing_shop
    WITH 
    OWNER = your_username
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

### ۲. اجرای اسکریپت‌ها

به ترتیب اسکریپت‌ها را اجرا کنید:

```bash
# اتصال به دیتابیس
psql -U your_username -d bearing_shop

# اجرای اسکریپت ایجاد جداول
\i 001-create-tables.sql

# اجرای اسکریپت داده‌های اولیه
\i 002-seed-data.sql
```

### ۳. تنظیم متغیرهای محیطی

فایل `.env.local` را در روت پروژه ایجاد کنید:

```env
# تنظیمات PostgreSQL
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=bearing_shop
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password

# یا استفاده از Connection String
DATABASE_URL=postgresql://your_username:your_password@localhost:5432/bearing_shop

# کلید JWT برای احراز هویت
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# تنظیمات اختیاری
NODE_ENV=development
```

## ساختار جداول

### جداول اصلی

| جدول | توضیحات |
|------|---------|
| `users` | کاربران سایت |
| `categories` | دسته‌بندی محصولات |
| `brands` | برندها |
| `products` | محصولات |
| `product_images` | تصاویر محصولات |
| `product_specifications` | مشخصات فنی |
| `orders` | سفارش‌ها |
| `order_items` | آیتم‌های سفارش |
| `user_addresses` | آدرس‌های کاربران |

### جداول کمکی

| جدول | توضیحات |
|------|---------|
| `discount_codes` | کدهای تخفیف |
| `payment_transactions` | تراکنش‌های پرداخت |
| `product_reviews` | نظرات محصولات |
| `wishlist` | لیست علاقه‌مندی |
| `site_settings` | تنظیمات سایت |
| `banners` | بنرها و اسلایدر |

## اطلاعات ورود ادمین

- **ایمیل:** admin@bearing-shop.ir
- **رمز عبور:** admin123

> ⚠️ **مهم:** حتماً رمز عبور ادمین را پس از اولین ورود تغییر دهید!

## نکات امنیتی

1. از رمز عبور قوی برای دیتابیس استفاده کنید
2. JWT_SECRET را به یک مقدار تصادفی و امن تغییر دهید
3. در محیط production از SSL برای اتصال به دیتابیس استفاده کنید
4. دسترسی‌های دیتابیس را محدود کنید

## API Endpoints

### محصولات
- `GET /api/products` - لیست محصولات
- `GET /api/products/:id` - جزئیات محصول
- `POST /api/products` - ایجاد محصول (ادمین)
- `PUT /api/products/:id` - ویرایش محصول (ادمین)
- `DELETE /api/products/:id` - حذف محصول (ادمین)

### احراز هویت
- `POST /api/auth/register` - ثبت‌نام
- `POST /api/auth/login` - ورود

### سفارش‌ها
- `GET /api/orders` - لیست سفارش‌ها
- `POST /api/orders` - ثبت سفارش جدید

## پشتیبان‌گیری

```bash
# پشتیبان‌گیری
pg_dump -U your_username -d bearing_shop > backup.sql

# بازیابی
psql -U your_username -d bearing_shop < backup.sql
```

## عیب‌یابی

### خطای اتصال
- مطمئن شوید PostgreSQL در حال اجراست
- پورت و هاست را بررسی کنید
- مجوزهای کاربر را چک کنید

### خطای UUID
اگر خطای `function uuid_generate_v4() does not exist` دریافت کردید:
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```
