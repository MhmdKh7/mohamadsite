import Link from "next/link";
import { categoryInfo } from "@/lib/category-info";

const brandLinks = [
  { name: "نمایندگی انحصاری ZDK", slug: "zdk" },
  { name: "SKF", slug: "skf" },
  { name: "FAG", slug: "fag" },
  { name: "NSK", slug: "nsk" },
  { name: "Timken", slug: "timken" },
  { name: "NTN", slug: "ntn" },
  { name: "Koyo", slug: "koyo" },
  { name: "INA", slug: "ina" },
] as const;

type Props = {
  showCategories?: boolean;
  showBrands?: boolean;
  className?: string;
  compact?: boolean;
};

export function InternalLinks({
  showCategories = true,
  showBrands = true,
  className = "",
  compact = false,
}: Props) {
  const categories = Object.entries(categoryInfo).map(([slug, info]) => ({
    slug,
    name: info.name,
  }));

  return (
    <div className={className}>
      {showCategories ? (
        <div className={compact ? "mb-6" : "mb-8"}>
          <h2 className={compact ? "text-lg font-bold mb-3" : "text-xl font-bold mb-4"}>
            دسته‌بندی‌ها
          </h2>
          <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {showBrands ? (
        <div>
          <h2 className={compact ? "text-lg font-bold mb-3" : "text-xl font-bold mb-4"}>
            برندها
          </h2>
          <ul className="flex flex-wrap gap-2">
            {brandLinks.map((brand) => (
              <li key={brand.slug}>
                <Link
                  href={`/brand/${brand.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export { brandLinks };
