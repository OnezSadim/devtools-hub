import { Metadata } from "next";
export const metadata: Metadata = { title: 'Concentration Converter', description: 'Convert between mass concentration units: mg/L, g/L, kg/m³.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
