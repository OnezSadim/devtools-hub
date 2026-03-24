import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON to CSV Converter | DevTools Hub",
  description: "Free online JSON to CSV converter. Convert JSON arrays to CSV format for spreadsheets and data tools.",
  openGraph: {
    title: "JSON to CSV Converter | DevTools Hub",
    description: "Free online JSON to CSV converter. Convert JSON arrays to CSV format for spreadsheets and data tools.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JSON to CSV Converter | DevTools Hub",
    description: "Free online JSON to CSV converter. Convert JSON arrays to CSV format for spreadsheets and data tools.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
