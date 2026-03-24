import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word & Character Counter | DevTools Hub",
  description: "Free online word and character counter. Count words, characters, sentences, and paragraphs in any text.",
  openGraph: {
    title: "Word & Character Counter | DevTools Hub",
    description: "Free online word and character counter. Count words, characters, sentences, and paragraphs in any text.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Word & Character Counter | DevTools Hub",
    description: "Free online word and character counter. Count words, characters, sentences, and paragraphs in any text.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
