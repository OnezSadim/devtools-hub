import { Metadata } from "next";
export const metadata: Metadata = { title: 'Molar Mass Converter', description: 'Convert between molar mass units: g/mol, kg/mol, lb/mol.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
