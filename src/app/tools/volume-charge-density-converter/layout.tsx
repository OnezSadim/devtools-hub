import type { Metadata } from "next";
export const metadata: Metadata = { title: "Volume Charge Density Converter | DevTools Hub", description: "Convert between volume charge density units: C/m3, mC/m3, uC/m3, nC/m3, C/cm3, C/mm3." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }