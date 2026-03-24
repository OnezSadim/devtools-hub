import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML to Markdown Converter | DevTools Hub",
  description: "Free HTML to Markdown converter. Convert HTML content to Markdown format for documentation and blogs.",
  openGraph: {
    title: "HTML to Markdown Converter | DevTools Hub",
    description: "Free HTML to Markdown converter. Convert HTML content to Markdown format for documentation and blogs.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HTML to Markdown Converter | DevTools Hub",
    description: "Free HTML to Markdown converter. Convert HTML content to Markdown format for documentation and blogs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
