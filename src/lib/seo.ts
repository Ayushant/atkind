import { Metadata } from 'next'

// Generate comprehensive structured data for the organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "atkind",
  "url": "https://atkind.com",
  "logo": "https://atkind.com/logo.png",
  "description": "Professional software development company specializing in custom web applications, mobile apps, AI solutions, and enterprise software.",
  "foundingDate": "2020",
  "slogan": "Transform your business with cutting-edge technology solutions",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-8900",
    "contactType": "Customer Service",
    "email": "contact@atkind.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://linkedin.com/company/atkind",
    "https://github.com/atkind",
    "https://twitter.com/atkind_dev"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Custom Software Development",
      "description": "Tailored software solutions for unique business needs"
    },
    {
      "@type": "Service", 
      "name": "Web Application Development",
      "description": "Modern, responsive web applications using latest technologies"
    },
    {
      "@type": "Service",
      "name": "Mobile App Development", 
      "description": "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      "@type": "Service",
      "name": "AI & Machine Learning Solutions",
      "description": "Intelligent automation and data analytics solutions"
    },
    {
      "@type": "Service",
      "name": "Enterprise Software Development",
      "description": "Scalable enterprise solutions and system integration"
    }
  ]
}

// Website schema for search functionality
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "atkind",
  "url": "https://atkind.com",
  "description": "Professional software development and tech solutions",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://atkind.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

// Service schema for detailed service information
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "atkind Software Development Services",
  "description": "Professional custom software development, web applications, mobile apps, and AI solutions",
  "provider": {
    "@type": "Organization",
    "name": "atkind"
  },
  "areaServed": "Worldwide",
  "serviceType": "Software Development",
  "offers": [
    {
      "@type": "Offer",
      "name": "Custom Software Development",
      "description": "Tailored software solutions for unique business requirements"
    },
    {
      "@type": "Offer", 
      "name": "Web Application Development",
      "description": "Modern, responsive web applications using React, Next.js, and other cutting-edge technologies"
    },
    {
      "@type": "Offer",
      "name": "Mobile App Development",
      "description": "Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter"
    }
  ]
}

// Enhanced metadata for better SEO
export const enhancedMetadata: Metadata = {
  metadataBase: new URL('https://atkind.com'),
  title: {
    template: '%s | atkind - Custom Software Development',
    default: 'atkind - Custom Software Development & Tech Solutions'
  },
  description: 'Transform your business with professional software development services. Custom web apps, mobile development, AI solutions, and enterprise software. Get a free consultation today.',
  keywords: [
    'custom software development',
    'web application development', 
    'mobile app development',
    'AI solutions',
    'enterprise software',
    'React development',
    'Node.js development',
    'digital transformation',
    'tech consulting',
    'software engineering',
    'full stack development',
    'cloud solutions'
  ],
  authors: [{ name: 'atkind Development Team', url: 'https://atkind.com' }],
  creator: 'atkind',
  publisher: 'atkind',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atkind.com',
    siteName: 'atkind',
    title: 'atkind - Custom Software Development & Tech Solutions',
    description: 'Transform your business with professional software development. Custom web apps, mobile development, AI solutions & enterprise software.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'atkind - Professional Software Development Services',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'atkind - Custom Software Development & Tech Solutions',
    description: 'Transform your business with cutting-edge software solutions. Expert development team delivering scalable technology.',
    images: ['/twitter-image.jpg'],
    creator: '@atkind_dev',
  },
  alternates: {
    canonical: 'https://atkind.com',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'atkind',
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
  },
}
