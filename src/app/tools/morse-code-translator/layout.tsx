import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morse Code Translator | DevTools Hub',
  description: 'Free online morse code translator tool. No installation required, works directly in your browser.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
