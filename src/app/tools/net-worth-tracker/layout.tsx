import type { Metadata } from "next";
export const metadata: Metadata = { title: "Net Worth Tracker | DevTools Hub", description: "Free online Net Worth Tracker tool." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }