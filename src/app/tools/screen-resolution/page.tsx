"use client";
import { useState, useEffect } from "react";
export default function ScreenResolution() {
  const [info, setInfo] = useState<Record<string,string>>({});
  useEffect(()=>{
    setInfo({
      "Screen Width": screen.width+"px",
      "Screen Height": screen.height+"px",
      "Available Width": screen.availWidth+"px",
      "Available Height": screen.availHeight+"px",
      "Color Depth": screen.colorDepth+" bit",
      "Pixel Ratio": window.devicePixelRatio+"x",
      "Viewport Width": window.innerWidth+"px",
      "Viewport Height": window.innerHeight+"px",
      "Orientation": screen.orientation?.type||"unknown",
      "User Agent": navigator.userAgent.slice(0,60)+"...",
    });
  },[]);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Screen & Browser Info</h1>
      <div className="space-y-2">
        {Object.entries(info).map(([k,v])=>(
          <div key={k} className="flex justify-between p-3 bg-gray-800 rounded">
            <span className="text-gray-400 text-sm">{k}</span>
            <span className="font-mono text-sm">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}