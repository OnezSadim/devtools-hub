import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to Base64 Converter | DevTools Hub",
  description: "Free image to Base64 converter. Convert images to Base64 encoded strings for use in CSS and HTML.",
  openGraph: {
    title: "Image to Base64 Converter | DevTools Hub",
    description: "Free image to Base64 converter. Convert images to Base64 encoded strings for use in CSS and HTML.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Image to Base64 Converter | DevTools Hub",
    description: "Free image to Base64 converter. Convert images to Base64 encoded strings for use in CSS and HTML.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
