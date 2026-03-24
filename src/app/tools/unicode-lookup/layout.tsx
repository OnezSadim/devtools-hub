import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unicode Character Lookup | DevTools Hub",
  description: "Free Unicode character lookup. Search characters by name, code point, or category. Copy HTML entities.",
  openGraph: {
    title: "Unicode Character Lookup | DevTools Hub",
    description: "Free Unicode character lookup. Search characters by name, code point, or category. Copy HTML entities.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Unicode Character Lookup | DevTools Hub",
    description: "Free Unicode character lookup. Search characters by name, code point, or category. Copy HTML entities.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
