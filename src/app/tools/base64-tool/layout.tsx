import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder | DevTools Hub",
  description: "Free online Base64 encoder and decoder. Encode text or decode Base64 strings instantly in your browser.",
  openGraph: {
    title: "Base64 Encoder & Decoder | DevTools Hub",
    description: "Free online Base64 encoder and decoder. Encode text or decode Base64 strings instantly in your browser.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Base64 Encoder & Decoder | DevTools Hub",
    description: "Free online Base64 encoder and decoder. Encode text or decode Base64 strings instantly in your browser.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
