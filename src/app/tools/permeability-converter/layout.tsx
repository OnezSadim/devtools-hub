import type { Metadata } from "next";
export const metadata: Metadata = { title: "Permeability Converter | DevTools Hub", description: "Convert between magnetic permeability units: H/m, mH/m, uH/m, nH/m, H/cm, H/mm." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }