import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON to YAML Converter | DevTools Hub",
  description: "Free online JSON to YAML converter. Convert JSON objects to YAML format instantly.",
  openGraph: {
    title: "JSON to YAML Converter | DevTools Hub",
    description: "Free online JSON to YAML converter. Convert JSON objects to YAML format instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JSON to YAML Converter | DevTools Hub",
    description: "Free online JSON to YAML converter. Convert JSON objects to YAML format instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
