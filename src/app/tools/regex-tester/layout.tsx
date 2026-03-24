import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regex Tester & Debugger | DevTools Hub",
  description: "Free online regex tester and debugger. Test regular expressions with live highlighting and match details.",
  openGraph: {
    title: "Regex Tester & Debugger | DevTools Hub",
    description: "Free online regex tester and debugger. Test regular expressions with live highlighting and match details.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Regex Tester & Debugger | DevTools Hub",
    description: "Free online regex tester and debugger. Test regular expressions with live highlighting and match details.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
