import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator | DevTools Hub",
  description: "Free online JSON formatter, validator and beautifier. Paste JSON to format, validate, and prettify instantly.",
  openGraph: {
    title: "JSON Formatter & Validator | DevTools Hub",
    description: "Free online JSON formatter, validator and beautifier. Paste JSON to format, validate, and prettify instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JSON Formatter & Validator | DevTools Hub",
    description: "Free online JSON formatter, validator and beautifier. Paste JSON to format, validate, and prettify instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
