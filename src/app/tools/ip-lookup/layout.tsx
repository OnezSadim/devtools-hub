import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Address Lookup | DevTools Hub",
  description: "Free online IP address lookup and geolocation tool. Look up any IP address details instantly.",
  openGraph: {
    title: "IP Address Lookup | DevTools Hub",
    description: "Free online IP address lookup and geolocation tool. Look up any IP address details instantly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IP Address Lookup | DevTools Hub",
    description: "Free online IP address lookup and geolocation tool. Look up any IP address details instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
