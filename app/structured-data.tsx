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
            "فروش تخصصی انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی",

        email: "bearing_rollmachine@yahoo.com",

        telephone: "+98-21-33948425",

        sameAs: [
            "https://www.instagram.com/roll_machiine?igsh=dDU3emxtcmxxdWdt",
            "https://wa.me/989190033560",
            "https://ble.ir/roll_machiine"
        ],

        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+98-912-2369623",
                contactType: "customer service",
                areaServed: "IR",
                availableLanguage: ["fa"]
            }
        ],

        address: {
            "@type": "PostalAddress",
            streetAddress:
                "خ امیرکبیر، خ سعدی جنوبی، کوچه دکتر نفیسی، پاساژ صفا، پلاک ۳/۲",
            addressCountry: "IR"
        }
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://rollmachine.ir/#website",

        url: "https://rollmachine.ir",

        name: "رول ماشین",

        publisher: {
            "@id": "https://rollmachine.ir/#organization"
        },

        inLanguage: "fa-IR"
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
                    __html: JSON.stringify(website),
                }}
            />
        </>
    );
}