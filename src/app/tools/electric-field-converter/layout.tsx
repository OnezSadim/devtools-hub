import { Metadata } from "next";
export const metadata: Metadata = { title: 'Electric Field Converter', description: 'Convert between electric field strength units: V/m, kV/m, MV/m.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
