import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Linear Charge Density Converter | DevTools Hub",
  description: "Convert between linear charge density units: coulomb per meter, microcoulomb per meter, and more.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}