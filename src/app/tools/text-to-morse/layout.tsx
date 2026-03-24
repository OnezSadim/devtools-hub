import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text to Morse Code Converter | DevTools Hub",
  description: "Free text to Morse code converter. Translate any text to Morse code or decode Morse code to text.",
  openGraph: {
    title: "Text to Morse Code Converter | DevTools Hub",
    description: "Free text to Morse code converter. Translate any text to Morse code or decode Morse code to text.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Text to Morse Code Converter | DevTools Hub",
    description: "Free text to Morse code converter. Translate any text to Morse code or decode Morse code to text.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
