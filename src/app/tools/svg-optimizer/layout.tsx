import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG Optimizer | DevTools Hub",
  description: "Free SVG optimizer and compressor. Minify SVG files to reduce size while preserving visual quality.",
  openGraph: {
    title: "SVG Optimizer | DevTools Hub",
    description: "Free SVG optimizer and compressor. Minify SVG files to reduce size while preserving visual quality.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SVG Optimizer | DevTools Hub",
    description: "Free SVG optimizer and compressor. Minify SVG files to reduce size while preserving visual quality.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
