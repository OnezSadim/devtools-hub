"use client";
import { useState } from "react";
export default function ColorNameFinder() {
  const [hex, setHex] = useState("#3b82f6");
  const namedColors: Record<string,string> = {"#ff0000":"Red","#00ff00":"Lime","#0000ff":"Blue","#ffff00":"Yellow","#ff00ff":"Magenta","#00ffff":"Cyan","#ffffff":"White","#000000":"Black","#808080":"Gray","#ffa500":"Orange","#800080":"Purple","#008000":"Green","#800000":"Maroon","#000080":"Navy","#ffc0cb":"Pink","#a52a2a":"Brown","#f5f5dc":"Beige","#40e0d0":"Turquoise","#ee82ee":"Violet","#f0e68c":"Khaki"};
  const hexToRgb = (h: string) => { const r = parseInt(h.slice(1,3),16), g=parseInt(h.slice(3,5),16), b=parseInt(h.slice(5,7),16); return {r,g,b}; };
  const closest = () => {
    try {
      const c = hexToRgb(hex);
      let best="Unknown", minD=Infinity;
      Object.entries(namedColors).forEach(([h,n]) => { const o=hexToRgb(h); const d=Math.sqrt((c.r-o.r)**2+(c.g-o.g)**2+(c.b-o.b)**2); if(d<minD){minD=d;best=n;} });
      return best;
    } catch { return "Invalid"; }
  };
  const rgb = () => { try { const {r,g,b}=hexToRgb(hex); return `rgb(${r}, ${g}, ${b})`; } catch { return ""; } };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Color Name Finder</h1>
      <p className="text-gray-400 mb-6">Find the closest named color for any hex value.</p>
      <div className="flex gap-4 items-center mb-6">
        <input type="color" value={hex} onChange={e => setHex(e.target.value)} className="w-16 h-16 rounded cursor-pointer border-0" />
        <input className="bg-gray-900 border border-gray-700 rounded p-3 font-mono" value={hex} onChange={e => setHex(e.target.value)} />
      </div>
      <div style={{backgroundColor:hex}} className="w-full h-32 rounded-xl mb-4"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 border border-gray-700 rounded p-4"><p className="text-gray-400 text-sm">Closest Name</p><p className="text-2xl font-bold mt-1">{closest()}</p></div>
        <div className="bg-gray-900 border border-gray-700 rounded p-4"><p className="text-gray-400 text-sm">RGB</p><p className="text-2xl font-bold mt-1 font-mono">{rgb()}</p></div>
      </div>
    </div>
  );
}