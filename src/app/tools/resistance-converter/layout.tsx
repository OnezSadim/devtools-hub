import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Resistance Converter | DevTools Hub",
  description: "Convert between units of electrical resistance including ohms, kilohms, megaohms, and gigaohms.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
