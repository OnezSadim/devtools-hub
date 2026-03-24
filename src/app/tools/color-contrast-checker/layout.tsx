import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Contrast Checker | DevTools Hub",
  description: "Free WCAG color contrast checker. Test foreground and background color combinations for accessibility compliance.",
  openGraph: {
    title: "Color Contrast Checker | DevTools Hub",
    description: "Free WCAG color contrast checker. Test foreground and background color combinations for accessibility compliance.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Color Contrast Checker | DevTools Hub",
    description: "Free WCAG color contrast checker. Test foreground and background color combinations for accessibility compliance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
