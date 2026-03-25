"use client";
import { useState } from "react";
export default function AspectRatioCalculator() {
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [result, setResult] = useState("");
  function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
  function calc() {
    const nw = parseFloat(w), nh = parseFloat(h);
    if (!nw || !nh) { setResult("Enter valid dimensions"); return; }
    const d = gcd(Math.round(nw), Math.round(nh));
    setResult(`Ratio: ${Math.round(nw/d)}:${Math.round(nh/d)} | Decimal: ${(nw/nh).toFixed(4)}`);
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Aspect Ratio Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate aspect ratios for images, videos, and layouts.</p>
        <div className="flex gap-4 mb-4">
          <div className="flex-1"><label className="block text-sm text-gray-400 mb-1">Width</label><input value={w} onChange={e=>setW(e.target.value)} placeholder="1920" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" /></div>
          <div className="flex-1"><label className="block text-sm text-gray-400 mb-1">Height</label><input value={h} onChange={e=>setH(e.target.value)} placeholder="1080" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" /></div>
        </div>
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded mb-4">Calculate</button>
        {result && <div className="bg-gray-800 border border-gray-700 rounded p-4 text-green-400 font-mono">{result}</div>}
        <div className="mt-6 grid grid-cols-3 gap-2">
          {[["16:9","1920x1080"],["4:3","1024x768"],["1:1","1080x1080"],["21:9","2560x1080"],["9:16","1080x1920"],["3:2","1500x1000"]].map(([r,d])=>(
            <button key={r} onClick={()=>{const[ww,hh]=d.split("x");setW(ww);setH(hh);}} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded p-2 text-sm">{r}<br/><span className="text-gray-500 text-xs">{d}</span></button>
          ))}
        </div>
      </div>
    </main>
  );
}