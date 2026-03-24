import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Color Picker | DevTools Hub",
  description: "Free online image color picker. Upload an image and pick colors by clicking anywhere on it.",
  openGraph: {
    title: "Image Color Picker | DevTools Hub",
    description: "Free online image color picker. Upload an image and pick colors by clicking anywhere on it.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Image Color Picker | DevTools Hub",
    description: "Free online image color picker. Upload an image and pick colors by clicking anywhere on it.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
