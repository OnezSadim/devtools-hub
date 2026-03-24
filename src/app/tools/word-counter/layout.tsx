import type { Metadata } from "next";
export const metadata: Metadata = { title: "Word Counter | DevTools Hub", description: "Count words, characters, sentences, paragraphs, and reading time in your text." };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }