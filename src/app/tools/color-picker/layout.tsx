import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Picker & Converter | DevTools Hub",
  description: "Free online color picker and converter. Convert between HEX, RGB, HSL color formats and pick colors visually.",
  openGraph: {
    title: "Color Picker & Converter | DevTools Hub",
    description: "Free online color picker and converter. Convert between HEX, RGB, HSL color formats and pick colors visually.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Color Picker & Converter | DevTools Hub",
    description: "Free online color picker and converter. Convert between HEX, RGB, HSL color formats and pick colors visually.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
