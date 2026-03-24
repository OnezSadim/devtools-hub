import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aspect Ratio Calculator | DevTools Hub',
  description: 'Free online aspect ratio calculator tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
