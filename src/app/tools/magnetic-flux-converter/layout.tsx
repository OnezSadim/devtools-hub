import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Magnetic Flux Converter | DevTools Hub",
  description: "Convert between magnetic flux units: weber, maxwell, milliweber, and more.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}