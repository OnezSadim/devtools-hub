import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luhn Checker | DevTools Hub',
  description: 'Free online luhn checker tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
