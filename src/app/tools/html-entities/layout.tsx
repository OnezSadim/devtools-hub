import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Html Entities | DevTools Hub',
  description: 'Free online html entities tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
