import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Base64 | DevTools Hub',
  description: 'Free online image base64 tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
