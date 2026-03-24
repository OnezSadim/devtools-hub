import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Encoder & Decoder | DevTools Hub",
  description: "Free online URL encoder and decoder. Encode special characters or decode percent-encoded URLs instantly.",
  openGraph: {
    title: "URL Encoder & Decoder | DevTools Hub",
    description: "Free online URL encoder and decoder. Encode special characters or decode percent-encoded URLs instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "URL Encoder & Decoder | DevTools Hub",
    description: "Free online URL encoder and decoder. Encode special characters or decode percent-encoded URLs instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
