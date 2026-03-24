import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder | DevTools Hub",
  description: "Free online JWT decoder. Decode JSON Web Tokens to inspect header, payload, and signature without a key.",
  openGraph: {
    title: "JWT Decoder | DevTools Hub",
    description: "Free online JWT decoder. Decode JSON Web Tokens to inspect header, payload, and signature without a key.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JWT Decoder | DevTools Hub",
    description: "Free online JWT decoder. Decode JSON Web Tokens to inspect header, payload, and signature without a key.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
