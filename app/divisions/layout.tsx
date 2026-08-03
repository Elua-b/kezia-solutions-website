import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Divisions',
  description:
    'Explore Keziaa Business Group\'s eight business divisions: Keziaa Solutions, Keziaa Capital, Korea–Africa Business Development, Technology & Innovation, Key Car, Renewable Energy & Solar, Sento Architech, and Hospitality & Business Ventures.',
  alternates: { canonical: '/divisions' },
  openGraph: {
    title: 'Our Divisions | Keziaa Business Group',
    description:
      'Eight business divisions driving trade, investment, technology, and market access between Africa and the world.',
    url: '/divisions',
  },
}

export default function DivisionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
