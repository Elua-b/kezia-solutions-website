import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Keziaa Business Group in Rwanda, Africa. Reach out for partnership inquiries, investment opportunities, and market entry support.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Keziaa Business Group',
    description:
      'Reach out to Keziaa Business Group for partnership inquiries, investment opportunities, and market entry support.',
    url: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
