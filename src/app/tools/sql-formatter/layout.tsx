import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Formatter & Beautifier | DevTools Hub",
  description: "Free online SQL formatter and beautifier. Format and indent SQL queries for better readability.",
  openGraph: {
    title: "SQL Formatter & Beautifier | DevTools Hub",
    description: "Free online SQL formatter and beautifier. Format and indent SQL queries for better readability.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SQL Formatter & Beautifier | DevTools Hub",
    description: "Free online SQL formatter and beautifier. Format and indent SQL queries for better readability.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
