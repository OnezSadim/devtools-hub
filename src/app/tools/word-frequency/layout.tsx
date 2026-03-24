import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Word Frequency | DevTools Hub',
  description: 'Free online word frequency tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
