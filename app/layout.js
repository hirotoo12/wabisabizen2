import { site } from "@/lib/site";
import "./globals.css";

// 検索エンジン向けキーワード
const keywords = [
  // メインキーワード
  "金沢 抹茶カフェ",
  "金沢 夜カフェ",
  "金沢 古民家カフェ",
  "金沢 ノマドカフェ",
  "金沢 シーシャ",
  "金沢 シーシャバー",
  "金沢 古民家バー",
  "ノマド 金沢",
  "Wi-Fi カフェ 金沢",
  "石川県 カフェバー",
  "侘び寂び禅",
  // ロングテール（3〜4語・成約に近い）
  "金沢 古民家カフェ インスタ映え",
  "ひがし茶屋街 古民家カフェ スイーツ",
  "金沢 抹茶カフェ スイーツ",
  "金沢 抹茶 スイーツ インスタ映え",
  "金沢 夜カフェ 一人",
  "金沢 ノマドカフェ 電源 Wi-Fi",
  "金沢 カフェ 作業 電源",
  "金沢 シーシャ 古民家",
  "金沢 バー 一人 女性",
  "ひがし茶屋街 カフェ 夜",
  // 名物・町家（ローカルストーリー）
  "金沢 町家 カフェ",
  "金沢 金箔 スイーツ",
  "金沢 金箔 抹茶ソーダ",
  "金沢 宇治抹茶 カフェ",
  "金沢 ほうじ茶ラテ",
  "金沢 昭和レトロ バー",
  "金沢 レコード バー",
  "金沢 シーシャ ニコチンフリー",
  // 外国人向け（英語）
  "Kanazawa machiya cafe",
  "Kanazawa traditional wooden house cafe",
  "Kanazawa matcha cafe",
  "Kanazawa gold leaf matcha",
  "Kanazawa shisha bar",
  "Kanazawa retro music bar",
  "Kanazawa cafe wifi",
];

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}｜金沢の古民家カフェ＆シーシャバー`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  keywords,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name}｜金沢の古民家カフェ＆シーシャバー`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}｜金沢の古民家カフェ＆シーシャバー`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#211E1A",
};

// 構造化データ（ローカルSEO用 / Googleに店舗情報を伝える）
function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": ["CafeOrCoffeeShop", "BarOrPub"],
    name: site.name,
    alternateName: site.nameEn,
    description: site.description,
    slogan: site.concept,
    url: site.url,
    telephone: site.telIntl,
    email: site.email,
    priceRange: site.priceRange,
    servesCuisine: ["カフェ", "抹茶", "スイーツ", "バー", "シーシャ"],
    address: {
      "@type": "PostalAddress",
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressLocality: site.address.city,
      streetAddress: site.address.street,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapLink,
    openingHoursSpecification: site.openingHoursSpec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    sameAs: Object.values(site.sns).filter(Boolean),
  };

  // FAQ（検索結果にQ&Aが出やすくなる）
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
    <meta name="google-site-verification" content="Rjdz44-eCYFJqzEIMFKgIWGBDRdqVCS48Jy4cX8ikqo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
