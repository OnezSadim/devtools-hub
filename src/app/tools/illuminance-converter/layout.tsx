import { Metadata } from "next";
export const metadata: Metadata = { title: "Illuminance Converter", description: "Convert between illuminance units: lux, foot-candle, phot, nox." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
