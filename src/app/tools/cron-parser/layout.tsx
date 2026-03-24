import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cron Expression Parser | DevTools Hub",
  description: "Free online cron expression parser. Understand cron schedules with human-readable explanations and next run times.",
  openGraph: {
    title: "Cron Expression Parser | DevTools Hub",
    description: "Free online cron expression parser. Understand cron schedules with human-readable explanations and next run times.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cron Expression Parser | DevTools Hub",
    description: "Free online cron expression parser. Understand cron schedules with human-readable explanations and next run times.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
