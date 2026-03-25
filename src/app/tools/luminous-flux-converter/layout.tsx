import { Metadata } from "next";
export const metadata: Metadata = { title: "Luminous Flux Converter | DevTools Hub", description: "Convert between lumen, kilolumen, millilumen and other luminous flux units." };
export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>;}