"use client";
import { useState } from "react";
export default function OpacityGenerator() {
  const [color, setColor] = useState("#6366f1");
  const levels = [10,20,30,40,50,60,70,80,90,100];
  function hexToRgb(hex: string) {
    const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
    return {r,g,b};
  }
  const {r,g,b} = hexToRgb(color.length===7?color:"#6366f1");
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Opacity / Alpha Generator</h1>
        <p className="text-gray-400 mb-6">Generate RGBA/HEX colors at different opacity levels.</p>
        <div className="mb-6"><label className="block text-sm text-gray-400 mb-2">Base Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-full h-14 bg-gray-800 border border-gray-700 rounded cursor-pointer" /></div>
        <div className="space-y-2">
          {levels.map(level=>{
            const alpha = (level/100).toFixed(2);
            const hex = Math.round(level/100*255).toString(16).padStart(2,"0");
            const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            const hexColor = color + hex;
            return (
              <div key={level} className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded p-3">
                <div className="w-12 h-8 rounded" style={{background:rgba}} />
                <div className="flex-1">
                  <span className="text-sm font-medium">{level}%</span>
                  <span className="text-gray-400 text-xs ml-4">{rgba}</span>
                </div>
                <button onClick={()=>navigator.clipboard.writeText(rgba)} className="text-xs text-blue-400 hover:text-blue-300">Copy RGBA</button>
                <button onClick={()=>navigator.clipboard.writeText(hexColor)} className="text-xs text-blue-400 hover:text-blue-300">Copy HEX</button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}