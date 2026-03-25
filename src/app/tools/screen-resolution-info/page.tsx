"use client";
import { useEffect, useState } from "react";
export default function ScreenResolution() {
  const [info, setInfo] = useState<Record<string,string>>({});
  useEffect(() => {
    const update = () => setInfo({
      "Screen Resolution": window.screen.width+" × "+window.screen.height,
      "Available Size": window.screen.availWidth+" × "+window.screen.availHeight,
      "Window Inner Size": window.innerWidth+" × "+window.innerHeight,
      "Device Pixel Ratio": window.devicePixelRatio.toString(),
      "Color Depth": window.screen.colorDepth+" bit",
      "Orientation": (screen.orientation?.type||"unknown"),
    });
    update();
    window.addEventListener("resize",update);
    return ()=>window.removeEventListener("resize",update);
  },[]);
  return (<div className="max-w-md mx-auto p-6"><h1 className="text-2xl font-bold mb-4 text-white">Screen Resolution</h1><p className="text-gray-400 mb-4">View your screen and window dimensions in real-time.</p><div className="space-y-2">{Object.entries(info).map(([k,v])=>(<div key={k} className="bg-gray-800 rounded p-3 flex justify-between items-center"><span className="text-gray-400 text-sm">{k}</span><span className="text-white font-mono font-medium">{v}</span></div>))}</div><p className="text-gray-500 text-xs mt-4">Values update live as you resize the window.</p></div>);
}
