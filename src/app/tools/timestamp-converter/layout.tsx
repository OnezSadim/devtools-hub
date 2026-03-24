import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter | DevTools Hub",
  description: "Free online Unix timestamp converter. Convert timestamps to human-readable dates and vice versa.",
  openGraph: {
    title: "Unix Timestamp Converter | DevTools Hub",
    description: "Free online Unix timestamp converter. Convert timestamps to human-readable dates and vice versa.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Unix Timestamp Converter | DevTools Hub",
    description: "Free online Unix timestamp converter. Convert timestamps to human-readable dates and vice versa.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
