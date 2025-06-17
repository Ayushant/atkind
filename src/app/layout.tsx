import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "atkind - Professional Web Development",
  description: "Custom web applications and production-ready solutions",
  metadataBase: new URL('https://atkind.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "atkind - Professional Web Development",
    description: "Custom web applications and production-ready solutions",
    url: "https://atkind.com",
    siteName: "atkind",
    type: "website",
    images: [] // Explicitly empty array for no images
  },
  twitter: {
    card: "summary",
    title: "atkind - Professional Web Development",
    description: "Custom applications and production-ready solutions",
    images: [] // Explicitly empty array for no images
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="pinterest" content="nopin" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
