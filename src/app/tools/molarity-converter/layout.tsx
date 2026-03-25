import { Metadata } from "next";
export const metadata: Metadata = { title: 'Molarity Converter', description: 'Convert between molarity and concentration units.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
