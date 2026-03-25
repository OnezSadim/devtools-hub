import { Metadata } from "next";
export const metadata: Metadata = { title: "Luminous Energy Converter | DevTools Hub", description: "Convert between talbot, lumen-second, lumen-hour and other luminous energy units." };
export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>;}