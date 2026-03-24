import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text Statistics | DevTools Hub',
  description: 'Free online text statistics tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
