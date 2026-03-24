import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ip Address Lookup | DevTools Hub',
  description: 'Free online ip address lookup tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
