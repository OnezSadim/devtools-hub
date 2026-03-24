import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG to CSS Converter | DevTools Hub",
  description: "Free SVG to CSS background-image converter. Convert SVG files to CSS data URIs for use in stylesheets.",
  openGraph: {
    title: "SVG to CSS Converter | DevTools Hub",
    description: "Free SVG to CSS background-image converter. Convert SVG files to CSS data URIs for use in stylesheets.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SVG to CSS Converter | DevTools Hub",
    description: "Free SVG to CSS background-image converter. Convert SVG files to CSS data URIs for use in stylesheets.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
