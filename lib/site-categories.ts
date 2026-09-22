export type SiteCategory = {
  slug: string
  name: string
  englishName: string
  image: string
}

/** Canonical product categories — single source of truth for nav UIs */
export const siteCategories: SiteCategory[] = [
  {
    slug: "ucpa",
    name: "یاتاقان UCPA",
    englishName: "UCPA BEARING",
    image: "/images/categories/ucpa.jpg",
  },
  {
    slug: "ucfc",
    name: "یاتاقان UCFC",
    englishName: "UCFC BEARING",
    image: "/images/categories/ucfc.jpg",
  },
  {
    slug: "uct",
    name: "یاتاقان UCT",
    englishName: "UCT BEARING",
    image: "/images/categories/uct.jpg",
  },
  {
    slug: "ucf",
    name: "یاتاقان UCF",
    englishName: "UCF BEARING",
    image: "/images/categories/ucf.jpg",
  },
  {
    slug: "ucp",
    name: "یاتاقان UCP",
    englishName: "UCP BEARING",
    image: "/images/categories/ucp.jpg",
  },
  {
    slug: "uc",
    name: "یاتاقان UC",
    englishName: "UC BEARING",
    image: "/images/categories/uc.jpg",
  },
  {
    slug: "oil",
    name: "روغن صنعتی",
    englishName: "INDUSTRIAL OIL",
    image: "/images/categories/oil.jpg",
  },
  {
    slug: "grease",
    name: "گریس",
    englishName: "GREASE",
    image: "/images/categories/grease.jpg",
  },
  {
    slug: "oil-seal",
    name: "کاسه نمد",
    englishName: "OIL SEAL",
    image: "/images/categories/oil-seal.jpg",
  },
  {
    slug: "belt",
    name: "تسمه",
    englishName: "BELT",
    image: "/images/categories/belt.jpg",
  },
  {
    slug: "roller-bearing",
    name: "رولبرینگ",
    englishName: "ROLLER BEARING",
    image: "/images/categories/roller-bearing.jpg",
  },
  {
    slug: "ball-bearing",
    name: "بلبرینگ",
    englishName: "BALL BEARING",
    image: "/images/categories/ball-bearing.jpg",
  },
  {
    slug: "bolt-nut",
    name: "پیچ و مهره",
    englishName: "BOLT & NUT",
    image: "/images/categories/bolt-nut.jpg",
  },
  {
    slug: "teflon",
    name: "تفلون",
    englishName: "TEFLON",
    image: "/images/categories/teflon.jpg",
  },
  {
    slug: "oring",
    name: "اورینگ",
    englishName: "O-RING",
    image: "/images/categories/oring.jpg",
  },
  {
    slug: "packing",
    name: "پکینگ",
    englishName: "PACKING",
    image: "/images/categories/packing.jpg",
  },
]

export const siteCategorySlugs = siteCategories.map((c) => c.slug)
