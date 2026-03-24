import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator | DevTools Hub",
  description: "Free Lorem Ipsum generator. Generate placeholder text by paragraphs, sentences, or words for mockups and designs.",
  openGraph: {
    title: "Lorem Ipsum Generator | DevTools Hub",
    description: "Free Lorem Ipsum generator. Generate placeholder text by paragraphs, sentences, or words for mockups and designs.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lorem Ipsum Generator | DevTools Hub",
    description: "Free Lorem Ipsum generator. Generate placeholder text by paragraphs, sentences, or words for mockups and designs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
