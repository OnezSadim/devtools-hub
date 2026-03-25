import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dividend Yield Calculator | DevTools Hub", description: "Free online Dividend Yield Calculator tool." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }