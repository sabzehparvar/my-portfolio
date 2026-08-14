import type { Metadata } from "next";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { seoData } from "@/lib/seoData";
import DotNav from "@/components/DotNav";
import LangSwitch from "@/components/LangSwitch";
import Interactions from "@/components/Interactions";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    metadataBase: new URL(seoData.url),
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    authors: [{ name: seoData.author }],
    alternates: {
      canonical: seoData.url,
    },
    openGraph: {
      type: "website",
      url: seoData.url,
      title: seoData.title,
      description: seoData.description,
      images: [
        {
          url: seoData.image,
          width: 1200,
          height: 630,
          alt: seoData.title,
        },
      ],
      siteName: seoData.title,
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: [seoData.image],
    },
    robots: "index, follow",
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/images/web-dev.png", sizes: "32x32", type: "image/png" },
        { url: "/images/web-dev.png", sizes: "16x16", type: "image/png" },
      ],
      apple: {
        url: "/images/web-dev.png",
        sizes: "120x120",
        type: "image/png",
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = getDictionary(params.locale);
  const dir = params.locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={params.locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={params.locale === "fa" ? "lang-fa" : "lang-en"}>
        <div className="progress-track">
          <div className="progress-bar" id="progressBar"></div>
        </div>
        <LangSwitch dict={dict} />
        <DotNav dict={dict} />
        {children}
        <Interactions />
      </body>
    </html>
  );
}
