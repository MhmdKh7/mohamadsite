export default function StructuredData() {
    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://rollmachine.ir/#organization",

        name: "رول ماشین",
        alternateName: "Roll Machine",

        url: "https://rollmachine.ir",

        logo: "https://rollmachine.ir/images/logo.png",

        image: "https://rollmachine.ir/images/logo.png",

        description:
            "تامین کننده و عمده فروش انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی",

        email: "rollmachine.bearing@gmail.com",

        telephone: "+98-21-33948425",

        sameAs: [
            "https://www.instagram.com/roll_machiine",
            "https://wa.me/989190033560",
            "https://ble.ir/roll_machiine",
        ],

        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+98-912-2369623",
                contactType: "customer service",
                areaServed: "IR",
                availableLanguage: ["fa"],
            },
        ],

        address: {
            "@type": "PostalAddress",
            streetAddress:
                "خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲",
            addressLocality: "تهران",
            addressRegion: "تهران",
            addressCountry: "IR",
        },
    };

    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "Store",
        "@id": "https://rollmachine.ir/#store",

        name: "رول ماشین",

        url: "https://rollmachine.ir",

        image: "https://rollmachine.ir/images/logo.png",

        logo: "https://rollmachine.ir/images/logo.png",

        description:
            "عمده فروش و تامین کننده انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی",

        telephone: "+98-21-33948425",

        email: "rollmachine.bearing@gmail.com",

        priceRange: "$$",

        sameAs: [
            "https://www.instagram.com/roll_machiine",
            "https://wa.me/989190033560",
            "https://ble.ir/roll_machiine",
        ],

        address: {
            "@type": "PostalAddress",
            streetAddress:
                "خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲",
            addressLocality: "تهران",
            addressRegion: "تهران",
            addressCountry: "IR",
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: 35.686835,
            longitude: 51.424224,
        },

        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                ],
                opens: "09:00",
                closes: "18:00",
            },
        ],

        hasMap:
            "https://maps.app.goo.gl/fV7x5yq3HmvPWNaH7?g_st=ic",
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://rollmachine.ir/#website",

        url: "https://rollmachine.ir",

        name: "رول ماشین",

        publisher: {
            "@id": "https://rollmachine.ir/#organization",
        },

        inLanguage: "fa-IR",
    };

    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "آیا امکان خرید عمده وجود دارد؟",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "بله، برای خرید عمده با تخفیف ویژه با بخش فروش تماس بگیرید.",
                },
            },
            {
                "@type": "Question",
                name: "زمان ارسال سفارشات چقدر است؟",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "سفارشات معمولا ظرف 24 تا 48 ساعت کاری ارسال می‌شوند.",
                },
            },
            {
                "@type": "Question",
                name: "آیا محصولات گارانتی دارند؟",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "بله، تمامی محصولات دارای گارانتی اصالت هستند.",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organization),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusiness),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(website),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqPage),
                }}
            />
        </>
    );
}