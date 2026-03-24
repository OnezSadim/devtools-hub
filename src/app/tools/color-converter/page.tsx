'use client';
import { useState } from 'react';
function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}
function rgbToHsl(r:number,g:number,b:number) {
  r/=255;g/=255;b/=255;
  const max=Math.max(r,g,b),min=Math.min(r,g,b);
  let h=0,s=0,l=(max+min)/2;
  if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;}h/=6;}
  return {h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)};
}
export default function ColorConverter() {
  const [hex, setHex] = useState('#3b82f6');
  const rgb = hexToRgb(hex.length===7?hex:'#000000');
  const hsl = rgbToHsl(rgb.r,rgb.g,rgb.b);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Converter</h1>
        <p className="text-gray-400 mb-6">Convert colors between HEX, RGB, and HSL formats.</p>
        <div className="flex gap-4 mb-6 items-center">
          <input type="color" value={hex} onChange={e=>setHex(e.target.value)} className="w-16 h-16 rounded cursor-pointer border-0 bg-transparent" />
          <input className="flex-1 bg-gray-800 border border-gray-700 rounded p-3 font-mono" value={hex} onChange={e=>setHex(e.target.value)} />
        </div>
        <div className="space-y-3">
          {[['HEX',hex],['RGB',`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`],['HSL',`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`]].map(([label,val])=>(
            <div key={label} className="bg-gray-800 rounded p-4 flex justify-between items-center">
              <span className="text-blue-400 font-semibold">{label}</span>
              <span className="font-mono text-sm">{val}</span>
              <button onClick={()=>navigator.clipboard.writeText(val)} className="text-xs bg-gray-700 px-2 py-1 rounded">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
