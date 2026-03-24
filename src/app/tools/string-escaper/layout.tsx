import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "String Escaper & Unescaper | DevTools Hub",
  description: "Free string escaper tool. Escape or unescape strings for JavaScript, JSON, HTML, XML, and SQL.",
  openGraph: {
    title: "String Escaper & Unescaper | DevTools Hub",
    description: "Free string escaper tool. Escape or unescape strings for JavaScript, JSON, HTML, XML, and SQL.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "String Escaper & Unescaper | DevTools Hub",
    description: "Free string escaper tool. Escape or unescape strings for JavaScript, JSON, HTML, XML, and SQL.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
