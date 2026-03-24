import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XML Formatter & Validator | DevTools Hub",
  description: "Free online XML formatter and validator. Format, beautify, and validate XML documents instantly.",
  openGraph: {
    title: "XML Formatter & Validator | DevTools Hub",
    description: "Free online XML formatter and validator. Format, beautify, and validate XML documents instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "XML Formatter & Validator | DevTools Hub",
    description: "Free online XML formatter and validator. Format, beautify, and validate XML documents instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
