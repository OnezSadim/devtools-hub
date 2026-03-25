import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voltage Converter | DevTools Hub",
  description: "Convert between units of electric potential including volts, millivolts, kilovolts, and megavolts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
