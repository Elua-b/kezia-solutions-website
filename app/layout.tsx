import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keziaabusinessgroup.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Keziaa Business Group | Connecting Africa with Global Business Opportunities',
    template: '%s | Keziaa Business Group',
  },
  description:
    'Keziaa Business Group is an African diversified business group connecting Africa with global opportunities through trade, investment, technology, innovation, and strategic partnerships.',
  applicationName: 'Keziaa Business Group',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Keziaa Business Group',
    'Keziaa Solutions',
    'Keziaa Capital',
    'Africa business group',
    'Rwanda investment',
    'Africa market entry',
    'Korea Africa business',
    'African trade partnerships',
    'business consulting Rwanda',
    'investment facilitation Africa',
  ],
  publisher: 'Keziaa Business Group',
  category: 'business',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo/keziaa-mark.svg',
    shortcut: '/logo/keziaa-mark.svg',
    apple: '/logo/keziaa-mark.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Keziaa Business Group',
    title: 'Keziaa Business Group | Connecting Africa with Global Business Opportunities',
    description:
      'An African diversified business group connecting Africa with global trade, investment, technology, and strategic partnerships.',
  },
  twitter: {
    card: 'summary',
    title: 'Keziaa Business Group | Connecting Africa with Global Business Opportunities',
    description:
      'An African diversified business group connecting Africa with global trade, investment, technology, and strategic partnerships.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Add your Google Search Console verification token here once you have it:
  // verification: { google: 'your-google-site-verification-token' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Keziaa Business Group',
  description:
    'An African diversified business group connecting Africa with global opportunities through trade, investment, technology, innovation, and strategic partnerships.',
  url: siteUrl,
  logo: `${siteUrl}/logo/keziaa-mark.svg`,
  email: 'info@keziaa.rw',
  telephone: '+250795296952',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RW',
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
