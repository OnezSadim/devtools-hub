"use client";
import { useState } from "react";
export default function ColorConverter() {
  const [hex, setHex] = useState("#3b82f6");
  const hexToRgb = (h) => { const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16); return {r,g,b}; };
  const rgbToHsl = ({r,g,b}) => { r/=255;g/=255;b/=255; const max=Math.max(r,g,b),min=Math.min(r,g,b); let h,s,l=(max+min)/2; if(max===min){h=s=0;}else{const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}h/=6;} return {h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)}; };
  const isValid = /^#[0-9A-Fa-f]{6}$/.test(hex);
  const rgb = isValid ? hexToRgb(hex) : null;
  const hsl = rgb ? rgbToHsl(rgb) : null;
  const copy = (text) => navigator.clipboard.writeText(text);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Converter</h1>
        <p className="text-gray-400 mb-6">Convert between HEX, RGB, and HSL color formats</p>
        <div className="flex gap-3 mb-6 items-center">
          <input type="color" value={isValid?hex:"#000000"} onChange={e=>setHex(e.target.value)} className="w-12 h-10 rounded cursor-pointer bg-transparent border-0" />
          <input value={hex} onChange={e=>setHex(e.target.value)} placeholder="#3b82f6" className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono" />
        </div>
        {isValid && rgb && hsl ? (
          <div className="space-y-3">
            <div className="w-full h-24 rounded-lg mb-4" style={{backgroundColor:hex}} />
            {[["HEX", hex], ["RGB", `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`], ["HSL", `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`]].map(([label, val]) => (
              <div key={label} className="bg-gray-900 rounded p-4 flex justify-between items-center">
                <span className="text-gray-400">{label}</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-green-400">{val}</span>
                  <button onClick={()=>copy(val)} className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded">Copy</button>
                </div>
              </div>
            ))}
          </div>
        ) : <p className="text-red-400">Enter a valid 6-digit hex color</p>}
      </div>
    </div>
  );
}