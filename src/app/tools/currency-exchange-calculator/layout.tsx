import type { Metadata } from "next";
export const metadata: Metadata = { title: "Currency Exchange Calculator | DevTools Hub", description: "Free online Currency Exchange Calculator tool." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }