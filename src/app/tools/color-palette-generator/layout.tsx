import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Palette Generator | DevTools Hub",
  description: "Free color palette generator. Create harmonious color schemes — complementary, triadic, analogous palettes.",
  openGraph: {
    title: "Color Palette Generator | DevTools Hub",
    description: "Free color palette generator. Create harmonious color schemes — complementary, triadic, analogous palettes.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Color Palette Generator | DevTools Hub",
    description: "Free color palette generator. Create harmonious color schemes — complementary, triadic, analogous palettes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
