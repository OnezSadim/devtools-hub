import type { Metadata } from "next";
export const metadata: Metadata = { title: "Loan Amortization Calculator | DevTools Hub", description: "Free online Loan Amortization Calculator tool." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }