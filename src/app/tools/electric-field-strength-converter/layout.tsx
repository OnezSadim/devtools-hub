import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Electric Field Strength Converter | DevTools Hub",
  description: "Convert between electric field strength units: volt per meter, kilovolt per meter, and more.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}