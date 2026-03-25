import { Metadata } from "next";
export const metadata: Metadata = { title: "Illuminance Converter | DevTools Hub", description: "Convert between lux, foot-candle, phot and other illuminance units." };
export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>;}