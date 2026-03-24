import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Json To Typescript | DevTools Hub',
  description: 'Free online json to typescript tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
