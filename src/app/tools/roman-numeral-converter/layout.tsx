import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roman Numeral Converter | DevTools Hub',
  description: 'Free online roman numeral converter tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
