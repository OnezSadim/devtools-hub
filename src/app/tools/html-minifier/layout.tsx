import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Minifier | DevTools Hub",
  description: "Free online HTML minifier. Minify HTML to reduce file size by removing whitespace, comments, and redundant code.",
  openGraph: {
    title: "HTML Minifier | DevTools Hub",
    description: "Free online HTML minifier. Minify HTML to reduce file size by removing whitespace, comments, and redundant code.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HTML Minifier | DevTools Hub",
    description: "Free online HTML minifier. Minify HTML to reduce file size by removing whitespace, comments, and redundant code.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
