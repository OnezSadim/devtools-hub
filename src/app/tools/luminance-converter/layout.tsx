import { Metadata } from "next";
export const metadata: Metadata = { title: "Luminance Converter", description: "Convert between luminance units: candela/m2, nit, stilb, lambert, foot-lambert." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
