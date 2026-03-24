import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chmod Calculator | DevTools Hub",
  description: "Free online chmod permission calculator. Calculate Unix file permissions in octal and symbolic notation.",
  openGraph: {
    title: "Chmod Calculator | DevTools Hub",
    description: "Free online chmod permission calculator. Calculate Unix file permissions in octal and symbolic notation.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Chmod Calculator | DevTools Hub",
    description: "Free online chmod permission calculator. Calculate Unix file permissions in octal and symbolic notation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
