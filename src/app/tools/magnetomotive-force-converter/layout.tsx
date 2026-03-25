import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Magnetomotive Force Converter | DevTools Hub",
  description: "Convert between magnetomotive force units: ampere-turn, gilbert, and more.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}