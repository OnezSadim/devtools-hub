import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Charge Converter | DevTools Hub",
  description: "Convert between units of electric charge including coulombs, ampere-hours, and faradays.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
