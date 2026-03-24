import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdown Previewer | DevTools Hub",
  description: "Free online Markdown previewer and editor. Write Markdown and see live HTML preview side by side.",
  openGraph: {
    title: "Markdown Previewer | DevTools Hub",
    description: "Free online Markdown previewer and editor. Write Markdown and see live HTML preview side by side.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Markdown Previewer | DevTools Hub",
    description: "Free online Markdown previewer and editor. Write Markdown and see live HTML preview side by side.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
