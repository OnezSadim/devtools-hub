import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bcrypt Hash Generator | DevTools Hub",
  description: "Free bcrypt hash generator and verifier. Hash passwords with bcrypt and verify hashes online.",
  openGraph: {
    title: "Bcrypt Hash Generator | DevTools Hub",
    description: "Free bcrypt hash generator and verifier. Hash passwords with bcrypt and verify hashes online.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bcrypt Hash Generator | DevTools Hub",
    description: "Free bcrypt hash generator and verifier. Hash passwords with bcrypt and verify hashes online.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
