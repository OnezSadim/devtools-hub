import { Metadata } from "next";
export const metadata: Metadata = { title: "Luminous Flux Converter", description: "Convert between luminous flux units: lumen, kilolumen, megalumen and more." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
