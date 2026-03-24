import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Diff Tool | DevTools Hub",
  description: "Free online text comparison tool. Find differences between two texts with side-by-side and inline diff views.",
  openGraph: {
    title: "Text Diff Tool | DevTools Hub",
    description: "Free online text comparison tool. Find differences between two texts with side-by-side and inline diff views.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Text Diff Tool | DevTools Hub",
    description: "Free online text comparison tool. Find differences between two texts with side-by-side and inline diff views.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
