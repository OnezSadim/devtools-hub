import { Metadata } from "next";
export const metadata: Metadata = { title: 'Electric Charge Converter', description: 'Convert between electric charge units: coulombs, millicoulombs, microcoulombs, nanocoulombs.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
