import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Css Box Shadow | DevTools Hub',
  description: 'Free online css box shadow tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
