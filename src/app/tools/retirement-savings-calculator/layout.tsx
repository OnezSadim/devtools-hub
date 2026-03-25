import type { Metadata } from "next";
export const metadata: Metadata = { title: "Retirement Savings Calculator | DevTools Hub", description: "Free online Retirement Savings Calculator tool." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }