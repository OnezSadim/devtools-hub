import { Metadata } from "next";
export const metadata: Metadata = { title: "Luminance Converter | DevTools Hub", description: "Convert between candela/m2, nit, stilb, lambert and other luminance units." };
export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>;}