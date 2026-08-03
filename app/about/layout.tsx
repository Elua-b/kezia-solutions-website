import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Keziaa Business Group is an African diversified business group connecting Africa with global trade, investment, technology, and strategic partnerships. Learn our vision, mission, and international exposure.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Keziaa Business Group',
    description:
      'An African diversified business group connecting Africa with global trade, investment, technology, and strategic partnerships.',
    url: '/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
