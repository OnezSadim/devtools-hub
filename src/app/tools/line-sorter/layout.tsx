import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Line Sorter | DevTools Hub',
  description: 'Free online line sorter tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
