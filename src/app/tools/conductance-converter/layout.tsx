import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Conductance Converter | DevTools Hub",
  description: "Convert between units of electrical conductance including siemens, millisiemens, and mhos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
