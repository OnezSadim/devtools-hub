import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Word Frequency Counter | DevTools Hub',
  description: 'Free online word frequency counter tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
