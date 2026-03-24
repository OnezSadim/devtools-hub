import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Diff Checker | DevTools Hub",
  description: "Free online text diff checker. Compare two texts and see differences highlighted line by line.",
  openGraph: {
    title: "Text Diff Checker | DevTools Hub",
    description: "Free online text diff checker. Compare two texts and see differences highlighted line by line.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Text Diff Checker | DevTools Hub",
    description: "Free online text diff checker. Compare two texts and see differences highlighted line by line.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
