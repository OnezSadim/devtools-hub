import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Color Converter | DevTools Hub',
  description: 'Free online color converter tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
