import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS Minifier & Beautifier | DevTools Hub",
  description: "Free online CSS minifier and beautifier. Minify CSS to reduce file size or beautify compressed CSS.",
  openGraph: {
    title: "CSS Minifier & Beautifier | DevTools Hub",
    description: "Free online CSS minifier and beautifier. Minify CSS to reduce file size or beautify compressed CSS.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CSS Minifier & Beautifier | DevTools Hub",
    description: "Free online CSS minifier and beautifier. Minify CSS to reduce file size or beautify compressed CSS.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
