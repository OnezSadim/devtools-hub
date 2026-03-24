import type { Metadata } from "next";
export const metadata: Metadata = { title: "Text Case Converter | DevTools Hub", description: "Convert text between camelCase, snake_case, PascalCase, kebab-case, UPPER_CASE and more." };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }