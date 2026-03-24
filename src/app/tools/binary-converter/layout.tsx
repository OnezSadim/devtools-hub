import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Binary Converter | DevTools Hub',
  description: 'Free online binary converter tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
