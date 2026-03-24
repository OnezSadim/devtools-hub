import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator | DevTools Hub",
  description: "Free online UUID v4 generator. Generate random UUIDs instantly. Copy bulk UUIDs with one click.",
  openGraph: {
    title: "UUID Generator | DevTools Hub",
    description: "Free online UUID v4 generator. Generate random UUIDs instantly. Copy bulk UUIDs with one click.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "UUID Generator | DevTools Hub",
    description: "Free online UUID v4 generator. Generate random UUIDs instantly. Copy bulk UUIDs with one click.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
