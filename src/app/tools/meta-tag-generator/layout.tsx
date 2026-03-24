import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Tag Generator | DevTools Hub",
  description: "Free meta tag generator for SEO. Generate HTML meta tags for description, Open Graph, Twitter Cards, and more.",
  openGraph: {
    title: "Meta Tag Generator | DevTools Hub",
    description: "Free meta tag generator for SEO. Generate HTML meta tags for description, Open Graph, Twitter Cards, and more.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Meta Tag Generator | DevTools Hub",
    description: "Free meta tag generator for SEO. Generate HTML meta tags for description, Open Graph, Twitter Cards, and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
