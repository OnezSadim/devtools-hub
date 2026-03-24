import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Binary Text Converter | DevTools Hub',
  description: 'Free online binary text converter tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
