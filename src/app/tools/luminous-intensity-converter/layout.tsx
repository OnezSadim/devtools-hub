import { Metadata } from "next";
export const metadata: Metadata = { title: "Luminous Intensity Converter | DevTools Hub", description: "Convert between candela, millicandela, kilocandela and other luminous intensity units." };
export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>;}