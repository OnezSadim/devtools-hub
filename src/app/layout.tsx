import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevTools Hub - Free Online Developer Utilities",
  description: "Free online developer tools: JSON formatter, Base64 encoder, URL encoder, hash generator, UUID generator, regex tester and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen`}>
        <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevTools Hub
            </Link>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/tools/json-formatter" className="hover:text-white transition">JSON</Link>
              <Link href="/tools/base64-tool" className="hover:text-white transition">Base64</Link>
              <Link href="/tools/url-encoder" className="hover:text-white transition">URL</Link>
              <Link href="/tools/hash-generator" className="hover:text-white transition">Hash</Link>
              <Link href="/tools/uuid-generator" className="hover:text-white transition">UUID</Link>
              <Link href="/tools/regex-tester" className="hover:text-white transition">Regex</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
