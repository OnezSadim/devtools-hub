import { Metadata } from "next";
export const metadata: Metadata = { title: "Frequency Converter | DevTools Hub", description: "Convert between frequency units like Hz, kHz, MHz, GHz, RPM." };
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>;  }
