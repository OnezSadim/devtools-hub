import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Number Base Converter | DevTools Hub",
  description: "Free online number base converter. Convert between binary, octal, decimal, and hexadecimal instantly.",
  openGraph: {
    title: "Number Base Converter | DevTools Hub",
    description: "Free online number base converter. Convert between binary, octal, decimal, and hexadecimal instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Number Base Converter | DevTools Hub",
    description: "Free online number base converter. Convert between binary, octal, decimal, and hexadecimal instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
