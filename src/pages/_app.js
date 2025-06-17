import Head from 'next/head'
import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <>      <Head>
        <title>atkind - Professional Web Development</title>
        <meta name="description" content="Custom web applications and production-ready solutions" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atkind.com" />
        <meta property="og:title" content="atkind - Professional Web Development" />
        <meta property="og:description" content="Custom software and production-ready solutions" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://atkind.com" />
        <meta property="twitter:title" content="atkind - Professional Web Development" />
        <meta property="twitter:description" content="Custom software and production-ready solutions" />

        {/* Canonical link */}
        <link rel="canonical" href="https://atkind.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
