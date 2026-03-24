import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hash Generator — MD5, SHA1, SHA256 | DevTools Hub",
  description: "Free online hash generator. Generate MD5, SHA-1, SHA-256, SHA-512 hashes from any text instantly.",
  openGraph: {
    title: "Hash Generator — MD5, SHA1, SHA256 | DevTools Hub",
    description: "Free online hash generator. Generate MD5, SHA-1, SHA-256, SHA-512 hashes from any text instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hash Generator — MD5, SHA1, SHA256 | DevTools Hub",
    description: "Free online hash generator. Generate MD5, SHA-1, SHA-256, SHA-512 hashes from any text instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
