import type { Metadata } from "next";
export const metadata: Metadata = { title: "Electric Flux Converter | DevTools Hub", description: "Convert between electric flux units: V·m, kV·m, MV·m, N·m2/C." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }