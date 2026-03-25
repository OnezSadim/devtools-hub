import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Magnetic Field Strength Converter | DevTools Hub",
  description: "Convert between magnetic field strength units: ampere per meter, oersted, and more.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}