import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTTP Status Codes Reference | DevTools Hub",
  description: "Complete HTTP status codes reference guide. Look up meaning of 1xx, 2xx, 3xx, 4xx, 5xx response codes.",
  openGraph: {
    title: "HTTP Status Codes Reference | DevTools Hub",
    description: "Complete HTTP status codes reference guide. Look up meaning of 1xx, 2xx, 3xx, 4xx, 5xx response codes.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HTTP Status Codes Reference | DevTools Hub",
    description: "Complete HTTP status codes reference guide. Look up meaning of 1xx, 2xx, 3xx, 4xx, 5xx response codes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
