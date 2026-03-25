import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Current Converter | DevTools Hub",
  description: "Convert between units of electric current including amperes, milliamperes, and kiloamperes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
