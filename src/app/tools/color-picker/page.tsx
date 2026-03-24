"use client";
import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#3b82f6");
  const r = parseInt(color.slice(1,3),16), g = parseInt(color.slice(3,5),16), b = parseInt(color.slice(5,7),16);
  const hsl = (() => { const rn=r/255,gn=g/255,bn=b/255,mx=Math.max(rn,gn,bn),mn=Math.min(rn,gn,bn),l=(mx+mn)/2; if(mx===mn) return `hsl(0, 0%, ${Math.round(l*100)}%)`; const d=mx-mn,s=l>0.5?d/(2-mx-mn):d/(mx+mn); let h=0; if(mx===rn)h=((gn-bn)/d+(gn<bn?6:0))/6; else if(mx===gn)h=((bn-rn)/d+2)/6; else h=((rn-gn)/d+4)/6; return `hsl(${Math.round(h*360)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`; })();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-blue-400 hover:underline text-sm">&larr; All Tools</a>
        <h1 className="text-3xl font-bold mt-4 mb-2">Color Picker & Converter</h1>
        <p className="text-zinc-400 mb-6">Pick a color and get HEX, RGB, and HSL values.</p>
        <div className="flex items-center gap-6 mb-6">
          <input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-20 h-20 rounded cursor-pointer bg-transparent border-0" />
          <div className="w-32 h-20 rounded-lg border border-zinc-700" style={{backgroundColor:color}} />
        </div>
        <div className="space-y-3">
          <div className="bg-zinc-900 border border-zinc-700 rounded p-3 flex justify-between"><span className="text-zinc-400">HEX</span><span className="font-mono">{color.toUpperCase()}</span></div>
          <div className="bg-zinc-900 border border-zinc-700 rounded p-3 flex justify-between"><span className="text-zinc-400">RGB</span><span className="font-mono">rgb({r}, {g}, {b})</span></div>
          <div className="bg-zinc-900 border border-zinc-700 rounded p-3 flex justify-between"><span className="text-zinc-400">HSL</span><span className="font-mono">{hsl}</span></div>
        </div>
      </div>
    </main>
  );
}