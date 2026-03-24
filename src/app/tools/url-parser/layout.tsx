import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Url Parser | DevTools Hub',
  description: 'Free online url parser tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
