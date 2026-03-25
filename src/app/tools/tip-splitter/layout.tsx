import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tip Splitter | DevTools Hub", description: "Free online Tip Splitter tool." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }