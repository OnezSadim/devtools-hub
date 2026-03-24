import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Case Converter | DevTools Hub",
  description: "Free text case converter. Convert text to uppercase, lowercase, title case, camelCase, snake_case and more.",
  openGraph: {
    title: "Text Case Converter | DevTools Hub",
    description: "Free text case converter. Convert text to uppercase, lowercase, title case, camelCase, snake_case and more.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Text Case Converter | DevTools Hub",
    description: "Free text case converter. Convert text to uppercase, lowercase, title case, camelCase, snake_case and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
