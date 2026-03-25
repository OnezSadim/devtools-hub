import type { Metadata } from "next";
export const metadata: Metadata = { title: "Mortgage Payment Calculator | DevTools Hub", description: "Free online Mortgage Payment Calculator tool." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }