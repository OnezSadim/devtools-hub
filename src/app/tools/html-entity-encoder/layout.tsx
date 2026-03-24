import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Entity Encoder & Decoder | DevTools Hub",
  description: "Free HTML entity encoder and decoder. Convert special characters to HTML entities and back.",
  openGraph: {
    title: "HTML Entity Encoder & Decoder | DevTools Hub",
    description: "Free HTML entity encoder and decoder. Convert special characters to HTML entities and back.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HTML Entity Encoder & Decoder | DevTools Hub",
    description: "Free HTML entity encoder and decoder. Convert special characters to HTML entities and back.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
