import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Generator | DevTools Hub",
  description: "Free secure password generator. Generate strong random passwords with custom length and character sets.",
  openGraph: {
    title: "Password Generator | DevTools Hub",
    description: "Free secure password generator. Generate strong random passwords with custom length and character sets.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Password Generator | DevTools Hub",
    description: "Free secure password generator. Generate strong random passwords with custom length and character sets.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
