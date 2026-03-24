import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pixel To Rem | DevTools Hub',
  description: 'Free online pixel to rem tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
