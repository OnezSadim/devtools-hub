import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Html To Jsx | DevTools Hub',
  description: 'Free online html to jsx tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
