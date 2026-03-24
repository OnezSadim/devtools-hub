import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Css Unit Converter | DevTools Hub',
  description: 'Free online css unit converter tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
