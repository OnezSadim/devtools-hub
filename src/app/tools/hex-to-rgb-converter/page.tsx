"use client";
import { useState } from "react";
export default function HexToRgbConverter() {
  const [hex, setHex] = useState("#3b82f6");
  const [r, setR] = useState("59");
  const [g, setG] = useState("130");
  const [b, setB] = useState("246");
  const hexToRgb = (h) => {
    const clean = h.replace("#","");
    if(clean.length!==6) return;
    const rv=parseInt(clean.slice(0,2),16),gv=parseInt(clean.slice(2,4),16),bv=parseInt(clean.slice(4,6),16);
    if(isNaN(rv)||isNaN(gv)||isNaN(bv)) return;
    setR(String(rv)); setG(String(gv)); setB(String(bv));
  };
  const rgbToHex = (rv,gv,bv) => {
    const toH = n => { const h=parseInt(n).toString(16); return h.padStart(2,"0"); };
    setHex("#"+toH(rv)+toH(gv)+toH(bv));
  };
  const handleHex = (v) => { setHex(v); if(v.length===7) hexToRgb(v); };
  const handleRgb = (rv,gv,bv) => { setR(rv); setG(gv); setB(bv); if(rv&&gv&&bv) rgbToHex(rv,gv,bv); };
  const hsl = () => {
    const rv=parseInt(r)/255,gv=parseInt(g)/255,bv=parseInt(b)/255;
    const max=Math.max(rv,gv,bv),min=Math.min(rv,gv,bv),l=(max+min)/2;
    if(max===min) return `hsl(0, 0%, ${Math.round(l*100)}%)`;
    const d=max-min,s=l>0.5?d/(2-max-min):d/(max+min);
    let h;
    if(max===rv) h=(gv-bv)/d+(gv<bv?6:0);
    else if(max===gv) h=(bv-rv)/d+2;
    else h=(rv-gv)/d+4;
    return `hsl(${Math.round(h*60)}, ${Math.round(s*100)}%, ${Math.round(l*100)})%)`;
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">HEX to RGB Converter</h1>
        <p className="text-gray-400 mb-6">Convert between HEX, RGB color formats.</p>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24 rounded-lg border border-gray-700" style={{backgroundColor: hex}}></div>
          <input type="color" value={hex} onChange={e=>{ setHex(e.target.value); hexToRgb(e.target.value); }} className="w-12 h-12 rounded cursor-pointer" />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">HEX</label>
            <input value={hex} onChange={e=>handleHex(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white font-mono" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div><label className="block text-xs text-red-400 mb-1">R (0-255)</label><input type="number" min="0" max="255" value={r} onChange={e=>handleRgb(e.target.value,g,b)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-xs text-green-400 mb-1">G (0-255)</label><input type="number" min="0" max="255" value={g} onChange={e=>handleRgb(r,e.target.value,b)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-xs text-blue-400 mb-1">B (0-255)</label><input type="number" min="0" max="255" value={b} onChange={e=>handleRgb(r,g,e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div>
          </div>
          <div className="bg-gray-800 rounded p-3 font-mono text-sm">
            <div>rgb({r}, {g}, {b})</div>
            <div className="text-gray-400 mt-1">{hex.toUpperCase()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}