import type { Metadata } from "next";
export const metadata: Metadata = { title: "Surface Charge Density Converter | DevTools Hub", description: "Convert between surface charge density units: C/m2, mC/m2, uC/m2, nC/m2, pC/m2, C/cm2, C/mm2." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }