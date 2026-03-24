import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mime Type Lookup | DevTools Hub',
  description: 'Free online mime type lookup tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
