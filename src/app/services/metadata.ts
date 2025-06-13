import { Metadata } from "next";

// Static metadata for this page (example for a specific page)
export const metadata: Metadata = {
  title: "Our Services - atkind",
  description: "Explore our wide range of professional web development services",
  openGraph: {
    title: "Our Services - atkind",
    description: "Explore our wide range of professional web development services",
    url: "https://atkind.com/services",
    siteName: "atkind",
    images: [
      {
        url: "https://atkind.com/services-og-image.jpg", // Page-specific image
        width: 1200,
        height: 630,
        alt: "atkind Services",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - atkind",
    description: "Explore our wide range of professional web development services",
    images: ["https://atkind.com/services-og-image.jpg"],
  },
};