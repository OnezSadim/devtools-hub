import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text To Slug | DevTools Hub',
  description: 'Free online text to slug tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
