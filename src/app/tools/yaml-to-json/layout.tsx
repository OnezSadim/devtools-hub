import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YAML to JSON Converter | DevTools Hub",
  description: "Free online YAML to JSON converter. Convert YAML configuration files to JSON format instantly.",
  openGraph: {
    title: "YAML to JSON Converter | DevTools Hub",
    description: "Free online YAML to JSON converter. Convert YAML configuration files to JSON format instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "YAML to JSON Converter | DevTools Hub",
    description: "Free online YAML to JSON converter. Convert YAML configuration files to JSON format instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
