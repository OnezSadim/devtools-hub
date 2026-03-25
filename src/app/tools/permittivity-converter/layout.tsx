import type { Metadata } from "next";
export const metadata: Metadata = { title: "Permittivity Converter | DevTools Hub", description: "Convert between permittivity units: F/m, pF/m, nF/m, uF/m, F/cm, F/mm." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }