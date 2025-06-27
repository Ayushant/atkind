import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Suspense } from "react";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: "atkind - Custom Software Development & Tech Solutions",
    template: "%s | atkind - Professional Software Development"
  },
  description: "Professional software development company specializing in custom web applications, mobile apps, AI solutions, and enterprise software. Transform your business with cutting-edge technology.",
  keywords: [
    "software development",
    "web development", 
    "mobile app development",
    "custom software solutions",
    "enterprise software",
    "AI development",
    "tech consulting",
    "digital transformation",
    "React development",
    "Node.js development",
    "cloud solutions",
    "DevOps services"
  ],
  authors: [{ name: "atkind Development Team" }],
  creator: "atkind",
  publisher: "atkind",
  metadataBase: new URL('https://atkind.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atkind.com",
    title: "atkind - Custom Software Development & Tech Solutions",
    description: "Professional software development company specializing in custom web applications, mobile apps, AI solutions, and enterprise software.",
    siteName: "atkind",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "atkind - Professional Software Development",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "atkind - Custom Software Development & Tech Solutions",
    description: "Transform your business with cutting-edge software solutions. Custom web apps, mobile development, AI integration & more.",
    creator: "@atkind_dev",
    images: ["/twitter-image.jpg"]
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="pinterest" content="nopin" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "atkind",
              "url": "https://atkind.com",
              "logo": "https://atkind.com/logo.png",
              "description": "Professional software development company specializing in custom web applications, mobile apps, and enterprise solutions.",
              "foundingDate": "2020",
              "sameAs": [
                "https://linkedin.com/company/atkind",
                "https://github.com/atkind",
                "https://twitter.com/atkind_dev"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-8900",
                "contactType": "customer service",
                "email": "contact@atkind.com"
              },
              "services": [
                "Custom Software Development",
                "Web Application Development", 
                "Mobile App Development",
                "AI & Machine Learning Solutions",
                "Enterprise Software Solutions",
                "Cloud & DevOps Services"
              ]
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "atkind",
              "url": "https://atkind.com",
              "description": "Professional software development and tech solutions",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://atkind.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Navbar />
        <main role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
